import { describe, it, expect } from '@jest/globals';
import * as cheerio from 'cheerio';
import {
  sanitizeDomTree,
  extractDomCounters,
  mergeElementCounters,
  processHtmlReport,
} from '../src/pipeline/report-enrichment'; 

describe('HTML Report Processor Unit Tests', () => {
  describe('sanitizeDomTree', () => {
    it('should strip script, style, and noscript nodes while preserving valid DOM elements', () => {
      const htmlFixture = `
        <div>
          <h1>Safe Header</h1>
          <script>console.log("malicious or tracker");</script>
          <style>body { color: red; }</style>
          <noscript><p>Fallback</p></noscript>
          <p>Visible Content</p>
        </div>
      `;
      const $ = cheerio.load(htmlFixture);

      sanitizeDomTree($);

      expect($('script').length).toBe(0);
      expect($('style').length).toBe(0);
      expect($('noscript').length).toBe(0);
      expect($('h1').text()).toBe('Safe Header');
      expect($('p').text()).toBe('Visible Content');
    });

    it('should run idempotently on clean HTML without dropping nodes', () => {
      const htmlFixture = '<main><article><p>Hello World</p></article></main>';
      const $ = cheerio.load(htmlFixture);

      sanitizeDomTree($);

      expect($('main').length).toBe(1);
      expect($('article').length).toBe(1);
      expect($('p').length).toBe(1);
    });
  });

  describe('extractDomCounters', () => {
    it('should accurately count native tags, derived table keys, ARIA roles, and inline event handlers', () => {
      const complexHtmlFixture = `
        <main>
          <img src="pic1.jpg" alt="1" />
          <img src="pic2.jpg" alt="2" />
          <map name="workmap"><area shape="rect" coords="34,44,270,350" href="#" alt="area1"></map>
          <a href="/home">Link 1</a>
          <a href="/about">Link 2</a>
          <a href="/contact">Link 3</a>
          <form id="f1"><input type="text" /></form>
          <iframe src="/embed"></iframe>
          <iframe src="/frame2"></iframe>
          <table><tr><td>Data</td></tr></table>
          
          <!-- Controls and ARIA roles for label metric -->
          <select><option>Opt</option></select>
          <textarea></textarea>
          <div role="checkbox">Custom Checkbox</div>
          <span role="slider">Custom Slider</span>

          <!-- Inline Event Handlers -->
          <button onclick="doAction()">Action</button>
          <div onmouseover="hoverAction()" onmouseout="leaveAction()">Hover Target</div>
        </main>
      `;
      const $ = cheerio.load(complexHtmlFixture);

      const counters = extractDomCounters($);

      expect(counters).toEqual({
        img: 2,
        area: 1,
        inpImg: 3, // Links 'a'
        form: 1,
        iframe: 2,
        tableData: 1,
        tableLayout: 1,
        tableComplex: 1,
        label: 5, // input (1) + select (1) + textarea (1) + role=checkbox (1) + role=slider (1)
        ehandler: 2, // button (1) + div with multiple events counted once by selector (1)
      });
    });

    it('should return all metric keys as 0 on empty DOM fixtures', () => {
      const $ = cheerio.load('');

      const counters = extractDomCounters($);

      expect(counters).toEqual({
        img: 0,
        area: 0,
        inpImg: 0,
        form: 0,
        iframe: 0,
        tableData: 0,
        tableLayout: 0,
        tableComplex: 0,
        label: 0,
        ehandler: 0,
      });
    });
  });

  describe('mergeElementCounters', () => {
    it('should preserve existing values and populate only undefined keys (nullish coalescing)', () => {
      const target: Record<string, number> = {
        img: 12,
        tableData: 4,
      };

      const extracted: Record<string, number> = {
        img: 99, // Should NOT overwrite
        tableData: 20, // Should NOT overwrite
        form: 3, // Should populate
        label: 8, // Should populate
      };

      mergeElementCounters(target, extracted);

      expect(target).toEqual({
        img: 12,
        tableData: 4,
        form: 3,
        label: 8,
      });
    });

    it('should preserve valid 0 counts in the target without falling back to extracted values', () => {
      const target: Record<string, number> = {
        ehandler: 0, // Legitimate zero errors/handlers
      };

      const extracted: Record<string, number> = {
        ehandler: 15,
        form: 2,
      };

      mergeElementCounters(target, extracted);

      expect(target.ehandler).toBe(0);
      expect(target.form).toBe(2);
    });
  });

  describe('processHtmlReport (Pipeline Orchestrator)', () => {
    it('should execute full pipeline: extract counters before stripping tags, mutate target, and return sanitized HTML', () => {
      const existingElems: Record<string, number> = {
        img: 10, // Pre-existing counter from engine
      };

      const rawHtml = `
        <html>
          <head>
            <style>body { margin: 0; }</style>
            <script>alert("tracker");</script>
          </head>
          <body>
            <img src="test.png" alt="Test" />
            <form action="/submit"><input type="text" /></form>
            <script>console.log("footer script");</script>
          </body>
        </html>
      `;

      const sanitizedHtml = processHtmlReport(rawHtml, existingElems);

      expect(existingElems['img']).toBe(10);
      expect(existingElems['form']).toBe(1);
      expect(existingElems['label']).toBe(1);

      expect(sanitizedHtml.html).not.toContain('<script>');
      expect(sanitizedHtml.html).not.toContain('<style>');
      expect(sanitizedHtml.html).toContain('<img src="test.png" alt="Test">');
      expect(sanitizedHtml.html).toContain('<form action="/submit">');
    });
    describe('sanitizeDomTree - Edge Cases', () => {
    it('should strip scripts and styles with attributes, namespaces, and inline CDATA', () => {
      const dirtyHtml = `
        <div>
          <script type="application/ld+json">{"@context": "https://schema.org"}</script>
          <script async defer src="https://analytics.com/tag.js"></script>
          <style media="screen and (min-width: 900px)">.hide { display: none; }</style>
          <noscript id="no-script-block"><meta http-equiv="refresh" content="0;url=/no-js"></noscript>
          <p>Text</p>
        </div>
      `;
      const $ = cheerio.load(dirtyHtml);

      sanitizeDomTree($);

      expect($('script').length).toBe(0);
      expect($('style').length).toBe(0);
      expect($('noscript').length).toBe(0);
      expect($('p').length).toBe(1);
    });

    it('should sanitize malformed or nested script injections correctly', () => {
      const weirdHtml = '<script><script>alert("nested")</script></script><p>Surviving</p>';
      const $ = cheerio.load(weirdHtml);

      sanitizeDomTree($);

      expect($('script').length).toBe(0);
      expect($('p').text()).toBe('Surviving');
    });
  });

  describe('extractDomCounters - Edge Cases', () => {
    it('should avoid double-counting when native elements explicitly declare redundant ARIA roles', () => {
      // Edge case: Um input que também tem role="textbox" não deve somar 2 no seletor da métrica 'label'
      const htmlWithRedundantRoles = `
        <input type="text" role="textbox" />
        <textarea role="textbox"></textarea>
        <select role="combobox"></select>
      `;
      const $ = cheerio.load(htmlWithRedundantRoles);

      const counters = extractDomCounters($);

      // O seletor $('input, select, textarea').add(roleSelector) deduplica nós idênticos no set do Cheerio
      expect(counters.label).toBe(3);
    });

    it('should count mixed-case event handlers and handlers with multiline/weird spacing', () => {
      const htmlWithWeirdAttributes = `
        <button onClick="run()">Mixed Case</button>
        <a href="#" ONCLICK="run()">Upper Case</a>
        <div onmouseover="run()" onmouseout="run()">Multiple on same element</div>
        <span onMouseDown="run()">Case Variation</span>
      `;
      const $ = cheerio.load(htmlWithWeirdAttributes);

      const counters = extractDomCounters($);

      expect(counters.ehandler).toBe(4);
    });

    it('should handle deeply nested tables and empty table structures', () => {
      const tableHtml = `
        <table>
          <tr>
            <td>
              <table>
                <tr><td>Nested</td></tr>
              </table>
            </td>
          </tr>
        </table>
        <table></table>
      `;
      const $ = cheerio.load(tableHtml);

      const counters = extractDomCounters($);

      expect(counters.tableData).toBe(3);
      expect(counters.tableLayout).toBe(3);
      expect(counters.tableComplex).toBe(3);
    });

    it('should treat SVG elements and non-HTML namespace tags correctly without crashing', () => {
      const svgHtml = `
        <svg viewBox="0 0 100 100">
          <image href="vector.png" />
          <a href="#"><text>SVG Link</text></a>
        </svg>
      `;
      const $ = cheerio.load(svgHtml);

      const counters = extractDomCounters($);

      expect(counters.img).toBe(0);
      expect(counters.inpImg).toBe(1);
    });
  });

  describe('mergeElementCounters - Edge Cases', () => {
    it('should correctly handle null values vs undefined in target record', () => {
      const target: Record<string, number> = {
        img: null as unknown as number, 
        form: undefined as unknown as number,
        ehandler: 0,
      };

      const extracted: Record<string, number> = {
        img: 5,
        form: 2,
        ehandler: 10,
      };

      mergeElementCounters(target, extracted);

      expect(target.img).toBe(5); 
      expect(target.form).toBe(2); 
      expect(target.ehandler).toBe(0);
    });

    it('should handle empty extracted objects without mutating existing properties', () => {
      const target: Record<string, number> = { img: 5 };
      mergeElementCounters(target, {});

      expect(target).toEqual({ img: 5 });
    });
  });

  describe('processHtmlReport - End-to-End Edge Cases', () => {
    it('should survive completely broken, truncated, or binary-like HTML input without throwing', () => {
      const brokenHtml = '<<>>><<<<not-a-tag <<<script>broken body';
      const elems: Record<string, number> = {};

      expect(() => {
        const sanitized = processHtmlReport(brokenHtml, elems);
        expect(typeof sanitized.html).toBe('string');
      }).not.toThrow();
    });

    it('should guarantee that extraction occurs on raw elements BEFORE sanitize removes them if any counter depended on them', () => {
      // Se um dia alguém meter um script com onclick, o Cheerio extrai antes do sanitize
      const htmlWithScriptHandler = `
        <script onclick="doSomething()"></script>
        <div onclick="safe()"></div>
      `;
      const elems: Record<string, number> = {};

      const sanitized = processHtmlReport(htmlWithScriptHandler, elems);

      // Como o extract corre antes do sanitize, apanhou ambos os elementos com onclick
      expect(elems['ehandler']).toBe(2);
      // Mas o HTML final não contém o script
      expect(sanitized.html).not.toContain('<script');
    });
  });
  });
});