import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import {
  processDefaultHandler,
  processEvaluation,
} from '../src/pipeline/evaluation-processor';
import {
  incrementElement,
  incrementMetric,
  markPresent,
  markPresentMetric,
  addResult,
  registerNode,
} from '../src/assertion.handler';
import { getRuleMetadata } from '../src/metadata/ruleset-repository';

// Mock assertion mutators
jest.mock('../src/assertion.handler', () => ({
  incrementElement: jest.fn(),
  incrementMetric: jest.fn(),
  markPresent: jest.fn(),
  markPresentMetric: jest.fn(),
  addResult: jest.fn(),
  registerNode: jest.fn(),
}));

// Mock ruleset matching your real TestRegistry schema
jest.mock('../src/tests-metadata', () => ({
  ruleset: {
    a_01a: {
      type: 'true',
      elem: 'a',
      test: 'aSkipFirst',
      score: 10,
      level: 'A',
      trust: '0.7',
      ref: 'G1',
      scs: ['2.4.1'],
      dis: '43522',
      result: 'warning',
    },
  },
}));

jest.mock('../src/mappings/ruleset.mapping', () => ({
  DOMAIN_MAPPING: {
    'QW-ACT-R1': {
      hasCustomHandler: true,
    },
    'QW-ACT-R2': {
      failed: { key: 'lang_03', name: 'langNo', type: 'occurrence' },
      passed: { key: 'lang_01', name: 'lang', type: 'occurrence' },
    },
  },
}));

const mockCustomHandler = jest.fn();
jest.mock('../src/mappings/custom-ruleset.mapping', () => ({
  CUSTOM_HANDLERS: {
    'QW-ACT-R1': (...args: unknown[]) => mockCustomHandler(...args),
  },
}));

describe('QualWeb Rules Engine Mapping', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getRuleMetadata', () => {
    it('should map metadata fields correctly from the TestRegistry schema', () => {
      const result = getRuleMetadata('a_01a');

      expect(result).toEqual({
        rule_id: 'a_01a',
        rule_trust: '0.7',
        rule_type: 'true',
        rule_score: 10,
        rule_result: 'warning',
      });
    });

    it('should throw an error when rule key is not registered', () => {
      expect(() => getRuleMetadata('unknown_rule')).toThrow(
        'Rule configuration not found for ruleKey: unknown_rule'
      );
    });
  });

  describe('processDefaultHandler', () => {
    it('should process QW-ACT-R2 failed outcome (occurrence type)', () => {
      const elements: Record<string, number> = {};
      const results: Record<string, string> = {};
      const nodes: Record<string, object[]> = {};
      const metrics: Record<string, number> = {};

      const assertion: any = {
        metadata: { outcome: 'failed', failed: 2, passed: 0, warning: 0 },
        results: [
          { verdict: 'failed', pointer: 'html' },
          { verdict: 'failed', pointer: 'body' },
        ],
      };

      const config: any = {
        failed: { key: 'lang_03', name: 'langNo', type: 'occurrence' },
        passed: { key: 'lang_01', name: 'lang', type: 'occurrence' },
      };

      processDefaultHandler(assertion, config, elements, results, nodes, metrics);

      expect(incrementElement).toHaveBeenCalledWith(elements, 'langNo', 2);
      expect(incrementMetric).toHaveBeenCalledWith(metrics, 'lang_03', 2);
      expect(addResult).toHaveBeenCalledWith(results, 'lang_03');
      expect(registerNode).toHaveBeenCalledWith(nodes, 'langNo', [
        { verdict: 'failed', pointer: 'html' },
        { verdict: 'failed', pointer: 'body' },
      ]);
    });

    it('should process QW-ACT-R2 passed outcome (occurrence type)', () => {
      const elements: Record<string, number> = {};
      const results: Record<string, string> = {};
      const nodes: Record<string, object[]> = {};
      const metrics: Record<string, number> = {};

      const assertion: any = {
        metadata: { outcome: 'passed', failed: 0, passed: 1, warning: 0 },
        results: [{ verdict: 'passed', pointer: 'html' }],
      };

      const config: any = {
        failed: { key: 'lang_03', name: 'langNo', type: 'occurrence' },
        passed: { key: 'lang_01', name: 'lang', type: 'occurrence' },
      };

      processDefaultHandler(assertion, config, elements, results, nodes, metrics);

      expect(incrementElement).toHaveBeenCalledWith(elements, 'lang', 1);
      expect(incrementMetric).toHaveBeenCalledWith(metrics, 'lang_01', 1);
      expect(addResult).toHaveBeenCalledWith(results, 'lang_01');
      expect(registerNode).toHaveBeenCalledWith(nodes, 'lang', [
        { verdict: 'passed', pointer: 'html' },
      ]);
    });
  });

  describe('getElementsMapping', () => {
    it('should route assertions to custom handler for QW-ACT-R1 and default handler for QW-ACT-R2', () => {
      const mockReport: any = {
        system: { page: { dom: { html: '<!DOCTYPE html><html><head></head><body></body></html>' } } },
        modules: {
          'act-rules': {
            assertions: {
              'QW-ACT-R1': {
                metadata: { outcome: 'failed', failed: 1, passed: 0, warning: 0 },
                results: [{ verdict: 'failed', resultCode: 'F1' }],
              },
              'QW-ACT-R2': {
                metadata: { outcome: 'passed', failed: 0, passed: 1, warning: 0 },
                results: [{ verdict: 'passed' }],
              },
            },
          },
          'wcag-techniques': { assertions: {} },
          'best-practices': { assertions: {} },
        },
      };

      const result = processEvaluation(mockReport);

      expect(result.html.html).toBe('<!DOCTYPE html><html><head></head><body></body></html>');
      
      // Verifies delegation to custom handler
      expect(mockCustomHandler).toHaveBeenCalledTimes(1);
      expect(mockCustomHandler).toHaveBeenCalledWith(
        mockReport.modules['act-rules'].assertions['QW-ACT-R1'],
        expect.objectContaining({
          elements: expect.any(Object),
          results: expect.any(Object),
          nodes: expect.any(Object),
          metrics: expect.any(Object),
        })
      );

      // Verifies default handler execution for QW-ACT-R2
      expect(incrementElement).toHaveBeenCalledWith(expect.any(Object), 'lang', 1);
      expect(incrementMetric).toHaveBeenCalledWith(expect.any(Object), 'lang_01', 1);
      expect(addResult).toHaveBeenCalledWith(expect.any(Object), 'lang_01');
    });

    it('should ignore assertions without mapping configuration', () => {
      const mockReport: any = {
        system: { page: { dom: { html: '' } } },
        modules: {
          'act-rules': {
            assertions: {
              'QW-UNMAPPED-RULE': {
                metadata: { outcome: 'passed', failed: 0, passed: 1, warning: 0 },
                results: [],
              },
            },
          },
          'wcag-techniques': { assertions: {} },
          'best-practices': { assertions: {} },
        },
      };

      processEvaluation(mockReport);

      expect(mockCustomHandler).not.toHaveBeenCalled();
      expect(incrementElement).not.toHaveBeenCalled();
      expect(addResult).not.toHaveBeenCalled();
    });
  });
});