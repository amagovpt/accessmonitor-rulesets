import { ruleset } from "../tests-metadata";

export interface RuleMetadata {
  rule_id: string;
  rule_trust: string;
  rule_type: string;
  rule_score: number;
  rule_result: string;
}

export function getRuleMetadata(ruleKey: string): RuleMetadata {
  const ruleMetadata = ruleset[ruleKey as keyof typeof ruleset];
  if (!ruleMetadata) {
    throw new Error(`Rule configuration not found for ruleKey: ${ruleKey}`);
  }
  return {
    rule_id: ruleKey,
    rule_trust: ruleMetadata.trust,
    rule_type: ruleMetadata.type,
    rule_score: ruleMetadata.score,
    rule_result: ruleMetadata.result,
  };
}