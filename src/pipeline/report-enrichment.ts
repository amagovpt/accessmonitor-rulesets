
import * as cheerio from 'cheerio';
import { CheerioAPI } from 'cheerio/slim';
import { ProcessedHtmlReport } from '../types';

/**
 * This module provides functions to process and enrich HTML reports.
 * It includes functions to sanitize the DOM tree, extract element counters,
 * and merge these counters with existing data.
 */

export function processHtmlReport(rawHtml: string, existingElems: Record<string, number>): ProcessedHtmlReport {
  const $ = cheerio.load(rawHtml);

  const domCounters = extractDomCounters($);
  mergeElementCounters(existingElems, domCounters);

  sanitizeDomTree($);

  const sanitizedHtml = $.html();
  const pageSize = calculatePageSize(sanitizedHtml);

  return { html: sanitizedHtml, pageSize };
}
/**
 * Sanitizes the DOM tree by removing script, style, and noscript elements.
 */
export function sanitizeDomTree($: CheerioAPI): void {
  $('script, style, noscript').remove();
}

/**
 * Extracts counters for various HTML elements and ARIA roles from the DOM.
 */
export function extractDomCounters($: CheerioAPI): Record<string, number> {
  const roleSelector = [
    'checkbox', 'combobox', 'listbox', 'menuitemcheckbox',
    'menuitemradio', 'radio', 'searchbox', 'slider',
    'spinbutton', 'switch', 'textbox'
  ].map(r => `[role="${r}"]`).join(',');

  const tableCount = $('table').length;

  return {
    img: $('img').length,
    area: $('area').length,
    inpImg: $('a').length,
    form: $('form').length,
    iframe: $('iframe').length,
    tableData: tableCount,
    tableLayout: tableCount,
    tableComplex: tableCount,
    label: $('input, select, textarea').add(roleSelector).length,
    ehandler: $('*[onmousedown], *[onmouseup], *[onclick], *[onmouseover], *[onmouseout]').length,
  };
}

/**
 * Merges extracted element counters into the target record.
 * Only fills in values for keys that do not already exist in the target.
 */

export function mergeElementCounters(
  target: Record<string, number>,
  extracted: Record<string, number>
): void {
  for (const [key, value] of Object.entries(extracted)) {
    target[key] ??= value;
  }
}


/**
 * Calculates HTML page size from encoded content
 * @param html - Raw HTML content
 * @returns Size in encoded URI characters
 */
export function calculatePageSize(html: string): number {
  if (!html || typeof html !== "string") {
    return 0;
  }
  return encodeURI(html).split(/%..|./).length - 1;
}
