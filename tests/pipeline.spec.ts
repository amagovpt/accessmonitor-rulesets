import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { processEvaluation } from '../src/pipeline/evaluation-processor';
import { generateScore } from '../src/scoring/scoring';
import { QualwebReport } from '../src/types/qualweb';

jest.mock('../src/tests-metadata', () => ({
  ruleset: {
    'RULE_PROP_01': {
      type: 'prop',
      elem: 'img',
      test: 'img_fail',
      score: 10,
      trust: '1',
      dis: { '5': 1 }, // Weight calc: 1 * 5 = 5. Normalized = 5/5 = 1.
      result: 'failed'
    },
    // Regra Binária: Passa (10) ou Falha (0)
    'RULE_BIN_02': {
      type: 'true',
      elem: 'all',
      test: 'page_fail',
      score: 10,
      trust: '1',
      dis: { '5': 1 }, 
      result: 'passed'
    }
  }
}));

jest.mock('../src/mappings/ruleset.mapping', () => ({
  DOMAIN_MAPPING: {
    'QW-ACT-R1': {
      baseNode: 'img',
      hasCustomHandler: false,
      failed: { type: 'occurrence', name: 'img_fail', key: 'RULE_PROP_01' },
      passed: { type: 'occurrence', name: 'img_pass', key: 'RULE_PROP_01' }
    },
    'QW-ACT-R2': {
      baseNode: 'html',
      hasCustomHandler: false,
      failed: { type: 'presence', name: 'page_fail', key: 'RULE_BIN_02' },
      passed: { type: 'presence', name: 'page_pass', key: 'RULE_BIN_02' }
    }
  }
}));

jest.mock('../src/mappings/custom-ruleset.mapping', () => ({
  CUSTOM_HANDLERS: {}
}));

describe('QualWeb Evaluation Pipeline (Integration)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Pipeline Completa: Deve processar report com falhas, acumular elementos e calcular score com penalização proporcional', () => {
    const mockReport: unknown = {
      system: { page: { dom: { html: '<html><body>...</body></html>' } } },
      modules: {
        'act-rules': {
          assertions: {
            'QW-ACT-R1': {
              metadata: { outcome: 'failed', failed: 4, passed: 6, warning: 0 },
              results: Array(10).fill({ verdict: 'failed' }) 
            }
          }
        }
      }
    };

    const mappingResult = processEvaluation(mockReport as QualwebReport);

    expect(mappingResult.elementCounters['img']).toBe(10); // baseNode contou os resultados totais
    expect(mappingResult.elementCounters['img_fail']).toBe(4); // incrementElement funcionou
    expect(mappingResult.conformanceResults['RULE_PROP_01']).toBe('10@6.00'); // addResult funcionou

    
    const finalScore = generateScore(mappingResult.conformanceResults, mappingResult.elementCounters);

    // Regra Proporcional formula: max(1, score - (score / base_elements) * errors)
    // max(1, 10 - (10 / 10) * 4) = max(1, 10 - 4) = 6.0
    expect(finalScore).toEqual({"conform": "0@0@0", "score": "6.0", "totalTests": 1});
  });

  it('Pipeline Completa: Deve processar report 100% passed e retornar score 10.0', () => {
    const mockReport: unknown = {
      system: { page: { dom: { html: '<html></html>' } } },
      modules: {
        'act-rules': {
          assertions: {
            'QW-ACT-R2': {
              metadata: { outcome: 'passed', failed: 0, passed: 1, warning: 0 },
              results: [{ verdict: 'passed' }]
            }
          }
        }
      }
    };

    const mappingResult = processEvaluation(mockReport as QualwebReport);
    
    // Asserção intermédia
    expect(mappingResult.elementCounters['page_pass']).toBe(1); // markPresent
    expect(mappingResult.elementCounters['page_fail']).toBeUndefined(); // Zero erros

    const finalScore = generateScore(mappingResult.conformanceResults, mappingResult.elementCounters);

    // Validação de Score Perfeito
    expect(finalScore).toEqual( {"conform": "0@0@0", "score": "10.0", "totalTests": 1});
  });
});