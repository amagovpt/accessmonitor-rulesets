import { describe, it, expect } from '@jest/globals';
import {
  registerNode,
  incrementElement,
  markPresent,
  incrementMetric,
  markPresentMetric,
  addResult,
} from '../src/assertion.handler'; 
import { TestKey } from '../src/types';
import { TestResult } from '../src/types/qualweb';

describe('Assertion Handlers', () => {
  describe('registerNode', () => {
    it('should initialize target array and push items when key does not exist', () => {
      const nodes: Record<string, unknown[]> = {};
      const mockResults: TestResult[] = [
        { verdict: 'failed', description: 'Item 1' } as unknown as TestResult,
        { verdict: 'passed', description: 'Item 2' } as unknown as TestResult,
      ];

      registerNode(nodes, 'titleNo', mockResults);

      expect(nodes['titleNo']).toBeDefined();
      expect(nodes['titleNo']).toHaveLength(2);
      expect(nodes['titleNo']).toEqual(mockResults);
    });

    it('should append items to an already existing target array', () => {
      const existingItem = { verdict: 'warning' } as unknown as TestResult;
      const nodes: Record<string, unknown[]> = {
        titleNo: [existingItem],
      };
      const newItems: TestResult[] = [
        { verdict: 'failed', description: 'Item 2' } as unknown as TestResult,
      ];

      registerNode(nodes, 'titleNo', newItems);

      expect(nodes['titleNo']).toHaveLength(2);
      expect(nodes['titleNo']).toEqual([existingItem, newItems[0]]);
    });

    it('should initialize empty array when rawResults is omitted (default parameter)', () => {
      const nodes: Record<string, unknown[]> = {};

      registerNode(nodes, 'emptyKey');

      expect(nodes['emptyKey']).toEqual([]);
    });

    it('should handle empty rawResults without altering existing entries', () => {
      const nodes: Record<string, unknown[]> = {
        existing: ['val1'],
      };

      registerNode(nodes, 'existing', []);

      expect(nodes['existing']).toEqual(['val1']);
    });
  });

  describe('incrementElement', () => {
    it('should initialize and set value if key does not exist', () => {
      const elements: Record<string, unknown> = {};

      incrementElement(elements, 'p_tag', 3);

      expect(elements['p_tag']).toBe(3);
    });

    it('should accumulate value if key already contains a numeric count', () => {
      const elements: Record<string, unknown> = { p_tag: 2 };

      incrementElement(elements, 'p_tag', 5);

      expect(elements['p_tag']).toBe(7);
    });

    it('should fallback to 0 and add val if existing key holds a falsy value (e.g. 0, null, NaN)', () => {
      const elements: Record<string, unknown> = { zero_key: 0 };

      incrementElement(elements, 'zero_key', 4);

      expect(elements['zero_key']).toBe(4);
    });
  });

  describe('markPresent', () => {
    it('should set element key to 1', () => {
      const elements: Record<string, number> = {};

      markPresent(elements, 'has_h1');

      expect(elements['has_h1']).toBe(1);
    });

    it('should overwrite existing value with 1 (idempotent)', () => {
      const elements: Record<string, number> = { has_h1: 99 };

      markPresent(elements, 'has_h1');

      expect(elements['has_h1']).toBe(1);
    });
  });

  describe('incrementMetric', () => {
    it('should initialize metric from 0 and increment with provided value', () => {
      const metrics = {} as Record<TestKey, number>;
      const testKey = 'title_02' as TestKey;

      incrementMetric(metrics, testKey, 2);

      expect(metrics[testKey]).toBe(2);
    });

    it('should accumulate value on existing metric key', () => {
      const testKey = 'title_02' as TestKey;
      const metrics: Record<TestKey, number> = { [testKey]: 5 } as Record<TestKey, number>;

      incrementMetric(metrics, testKey, 3);

      expect(metrics[testKey]).toBe(8);
    });
  });

  describe('markPresentMetric', () => {
    it('should assign 1 to the specified test metric key', () => {
      const metrics = {} as Record<TestKey, number>;
      const testKey = 'lang_01' as TestKey;

      markPresentMetric(metrics, testKey);

      expect(metrics[testKey]).toBe(1);
    });

    it('should overwrite previous value to ensure presence flag is 1', () => {
      const testKey = 'lang_01' as TestKey;
      const metrics: Record<TestKey, number> = { [testKey]: 10 } as Record<TestKey, number>;

      markPresentMetric(metrics, testKey);

      expect(metrics[testKey]).toBe(1);
    });
  });

  describe('addResult', () => {
    it('should register test key with an empty string placeholder', () => {
      const results = {} as Record<TestKey, string>;
      const testKey = 'title_06' as TestKey;

      addResult(results, testKey);

      expect(results[testKey]).toBe('');
    });

    it('should overwrite any existing result with an empty string', () => {
      const testKey = 'title_06' as TestKey;
      const results: Record<TestKey, string> = { [testKey]: 'PREVIOUS_RESULT' } as Record<TestKey, string>;

      addResult(results, testKey);

      expect(results[testKey]).toBe('');
    });
  });
});