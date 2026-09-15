import { ruleset } from "../tests-metadata";
import { TestDefinition, TestKey, TestName } from "../types";

const SEPARATOR = "@";

interface ScoreResult {
  score: number;
  weight: number;
}

export interface ConformanceErrors {
  A: number;
  AA: number;
  AAA: number;
}
const calculateRuleWeight = (rule: TestDefinition): number => {
  const distribution = rule.dis || {};
  
  return Object.entries(distribution)
    .filter(([severity]) => Number.parseInt(severity) > 1)
    .reduce((totalWeight, [severity]) => {
      return totalWeight + (Number(rule.trust) * Number.parseInt(severity));
    }, 0);
};

export const ScoreCalculators = {
  binary: (rule: TestDefinition): ScoreResult => ({
    score: rule.score,
    weight: calculateRuleWeight(rule)
  }),

  decrement: (rule: TestDefinition, errorCount: number): ScoreResult => {
    const overflowErrors = errorCount - (rule.top || 0);
    const penalty = overflowErrors > 0 ? Math.round(overflowErrors / (rule.steps || 1)) : 0;
    const finalScore = Math.max(1, rule.score - penalty);
    
    return { score: finalScore, weight: calculateRuleWeight(rule) };
  },

  proportional: (rule: TestDefinition, totalElements: number, errorCount: number): ScoreResult => {
    const penalty = (rule.score / (totalElements || 1)) * errorCount;
    const finalScore = Math.max(1, rule.score - penalty);
    
    return { score: finalScore, weight: calculateRuleWeight(rule) };
  }
};

const METRIC_TYPES = {
  TRUE: "true",
  FALSE: "fals",
  DECREMENT: "decr",
  PROPORTIONAL: "prop"
} as const;

interface ScoringSummary {
  totalTests: number;
  conform:string;
  score:string;
}

export function generateScore(results:Partial<Record<TestKey, string>>, elementCounters: Partial<Record<TestName, number>>): ScoringSummary {
  const totalTests = Object.keys(results).length;
  return {
    totalTests,
    conform: calculateConform(results),
    score: calculateFinalScore(results, elementCounters)
  };
}

export function calculateFinalScore(results:Partial<Record<TestKey, string>>, elementCounters: Partial<Record<TestName, number>>): string {
  let weightedScoreSum = 0;
  let totalWeightSum = 0;

  
  for (const [testId, _] of Object.entries(results) as [TestKey, string][]) {
    const rule = ruleset[testId as keyof typeof ruleset];
    
    if (!rule || rule.result === "warning") continue;

    let evaluation: ScoreResult | null = null;
    const { type, elem: elemKey, test: testKey } = rule;

    const elementCount = elementCounters[elemKey as TestName];
    const testElementCount = elementCounters[testKey] || 0;

    if (elemKey !== "all" && elementCount === undefined && type !== METRIC_TYPES.FALSE) {
      continue;
    }

    switch (type) {
      case METRIC_TYPES.PROPORTIONAL:
        evaluation = ScoreCalculators.proportional(rule, elementCount ?? 0, testElementCount);
        break;
      case METRIC_TYPES.DECREMENT:
        evaluation = ScoreCalculators.decrement(rule, testElementCount);
        break;
      case METRIC_TYPES.TRUE:
      case METRIC_TYPES.FALSE:
        evaluation = ScoreCalculators.binary(rule);
        break;
    }

    if (evaluation) {
      const normalizedWeight = evaluation.weight / 5;
      const ruleFinalContribution = evaluation.score * normalizedWeight;

      weightedScoreSum += ruleFinalContribution;
      totalWeightSum += normalizedWeight;

      results[testId] = `${rule.score}@${ruleFinalContribution.toFixed(2)}`;
    }
  }

  if (totalWeightSum === 0) return "10.0";

  return (weightedScoreSum / totalWeightSum).toFixed(1);
}


/**
 * Calculates WCAG conformance levels (A, AA, AAA) based on test results
 * @param results - Test results mapping rule IDs to results
 * @returns Formatted string with counts: "A@AA@AAA"
 * @throws Error if results are invalid
 */
export function calculateConform(results: Partial<Record<TestKey, any>>): string {
  const errors: ConformanceErrors = {
    A: 0,
    AA: 0,
    AAA: 0,
  };
  
  if (!results || typeof results !== "object") {
    return `${errors.A}${SEPARATOR}${errors.AA}${SEPARATOR}${errors.AAA}`;
  }

  for (const [ruleId, _] of Object.entries(results) as [TestKey, string][]) {
    if (ruleId && ruleset[ruleId]) {
      try {
        const level = ruleset[ruleId].level.toUpperCase() as keyof ConformanceErrors;
        if (ruleset[ruleId].result === "failed" && level in errors) {
          errors[level]++;
        }
      } catch  {
        // Skip invalid rule entries
        continue;
      }
    }
  }

  return `${errors.A}${SEPARATOR}${errors.AA}${SEPARATOR}${errors.AAA}`;
}