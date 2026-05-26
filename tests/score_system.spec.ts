import { generateScore, ScoreCalculators } from '../src/scoring';
import { ruleset } from '../src/tests-metadata';
import { describe, it, expect, jest } from '@jest/globals';

jest.mock('../src/tests-metadata', () => ({
  ruleset: {
    'TEST_PROP': {
      type: 'prop',
      score: 10,
      trust: '1',
      dis: { '5': 1 }, 
      elem: 'all_elements',
      test: 'error_elements'
    },
    'TEST_DECR': {
      type: 'decr',
      score: 10,
      trust: '0.8',
      dis: { '10': 1 }, 
      top: 5,
      steps: 2,
      test: 'error_elements'
    },
    'TEST_BINARY': {
      type: 'true',
      score: 10,
      trust: '1',
      dis: { '2': 1 }, 
      elem: 'all_elements'
    },
    'TEST_WARNING': {
      result: 'warning',
      type: 'true'
    }
  }
}));

describe('Scoring Engine - Unit Tests', () => {

  describe('ScoreCalculators', () => {
    
    it('proportional: should calculate correct score based on element ratio', () => {
      const rule = (ruleset as any)['TEST_PROP'];
      const result = ScoreCalculators.proportional(rule, 100, 20);
      expect(result.score).toBe(8);
      expect(result.weight).toBe(5);
    });

    it('proportional: should never return a score lower than 1', () => {
      const rule = (ruleset as any)['TEST_PROP'];
      const result = ScoreCalculators.proportional(rule, 10, 50);
      expect(result.score).toBe(1);
    });

    it('decrement: should apply penalties after the threshold (top)', () => {
      const rule = (ruleset as any)['TEST_DECR'];

      const result = ScoreCalculators.decrement(rule, 9);
      expect(result.score).toBe(8);
      expect(result.weight).toBe(8);
    });

    it('binary: should return the base score and calculate weight correctly', () => {
      const rule = (ruleset as any)['TEST_BINARY'];
      const result = ScoreCalculators.binary(rule);
      expect(result.score).toBe(10);
      expect(result.weight).toBe(2);
    });
  });

  describe('generateScore Function', () => {

    it('should return 10.0 if there are no applicable tests', () => {
      const report = {
        data: {
          tot: { results: {} },
          elems: {}
        }
      };
      expect(generateScore(report)).toBe("10.0");
    });

    it('should ignore rules marked as warning', () => {
      const report = {
        data: {
          tot: { results: { 'TEST_WARNING': 'something' } },
          elems: {}
        }
      };
      expect(generateScore(report)).toBe("10.0");
    });

    it('should calculate a weighted average for multiple rules', () => {
      const report = {
        data: {
          tot: { results: { 'TEST_PROP': '...', 'TEST_BINARY': '...' } },
          elems: {
            'all_elements': 100,
            'error_elements': 50 
          }
        }
      };

      const score = generateScore(report);
      expect(score).toBe("6.4");
    });

    it('should skip rules where the base element is missing and not a FALSE metric', () => {
      const report = {
        data: {
          tot: { results: { 'TEST_PROP': '...' } },
          elems: {
            'error_elements': 10
          }
        }
      };
      expect(generateScore(report)).toBe("10.0");
    });

    it('should update the report results with the formatted score string', () => {
      const report = {
        data: {
          tot: { results: { 'TEST_BINARY': 'initial' } },
          elems: { 'all_elements': 1 }
        }
      };
      
      generateScore(report);
      

      expect(report.data.tot.results['TEST_BINARY']).toBe("10@4.00");
    });
  });
});