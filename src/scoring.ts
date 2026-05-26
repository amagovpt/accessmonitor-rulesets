import { ruleset } from "./tests-metadata";
import { TestDefinition } from "./types";


interface ScoreResult {
  score: number;
  weight: number;
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

export function generateScore(report: any): string {
  let weightedScoreSum = 0;
  let totalWeightSum = 0;

  const testResults = report.data.tot.results;
  const elementCounters = report.data.elems;

  for (const [testId, _] of Object.entries(testResults)) {
    const rule = ruleset[testId as keyof typeof ruleset];
    
    if (!rule || rule.result === "warning") continue;

    let evaluation: ScoreResult | null = null;
    const { type, elem: elemKey, test: testKey } = rule;

    const baseElementCount = elementCounters[elemKey];
    const testElementCount = elementCounters[testKey] || 0;

    if (elemKey !== "all" && baseElementCount === undefined && type !== METRIC_TYPES.FALSE) {
      continue;
    }

    switch (type) {
      case METRIC_TYPES.PROPORTIONAL:
        evaluation = ScoreCalculators.proportional(rule, baseElementCount, testElementCount);
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

      testResults[testId] = `${rule.score}@${ruleFinalContribution.toFixed(2)}`;
    }
  }

  if (totalWeightSum === 0) return "10.0";

  return (weightedScoreSum / totalWeightSum).toFixed(1);
}