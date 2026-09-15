import { CUSTOM_HANDLERS } from '../mappings/custom-ruleset.mapping';
import { incrementElement, markPresent, addResult, registerNode, incrementMetric,markPresentMetric } from '../assertion.handler';
import { DOMAIN_MAPPING, RuleConfig } from '../mappings/ruleset.mapping';
import { ModuleSectionType, QualwebReport, Assertion, QualWebRuleID } from '../types/qualweb';
import { ProcessedHtmlReport, TestKey } from '../types';
import { processHtmlReport } from './report-enrichment';
import { generateScore } from '../scoring/scoring';
import { ExtractedEvaluationContext, extractEvaluationContext } from './report-metadata';

export interface RuleMetrics {
    passed: number;
    failed: number;
    warning: number;
    outcome: string;
}

export interface EvaluationProcessingResult {
    metadata: ExtractedEvaluationContext;
    html: ProcessedHtmlReport;
    elementCounters: Record<string, number>;
    conformanceResults: Record<string, string>;
    assertionEvidence: Record<string, Object[]>;
    rulesOccurrences: Record<string, number>;
    scoreDetails:{
      totalTests: number;
      conform: string;
      score: string;
    };
}


export function processDefaultHandler(assertion: Assertion, config: RuleConfig, elements: Record<string, number>, results: Record<TestKey, string>, nodes: Record<string, Object[]>, ocurrenceMetrics: Record<TestKey, number>) {
   const { metadata, results: ruleResults = [] } = assertion;
   const { passed, failed, warning } = config;

    if (config.baseNode) {
      elements[config.baseNode] = (elements[config.baseNode] || 0) + ruleResults.length;
    }
    if (metadata.outcome === "failed") {
       if (failed) {
        if(failed.type === "occurrence"){
         incrementElement(elements, failed.name, metadata.failed);
         incrementMetric(ocurrenceMetrics, failed.key, metadata.failed);
        }else{
          markPresent(elements, failed.name);
          markPresentMetric(ocurrenceMetrics, failed.key);
        }
        addResult(results, failed.key);
        const failedItems = ruleResults.filter((r: any) => r.verdict === "failed");
        registerNode(nodes, failed.name, failedItems);
       }
    } else if (metadata.outcome === "passed") {
       if (passed) {
         if (passed) {
        if(passed.type === "occurrence"){
          
         incrementElement(elements, passed.name, metadata.passed);
         incrementMetric(ocurrenceMetrics, passed.key, metadata.passed);
        }else{
          markPresent(elements, passed.name);
          markPresentMetric(ocurrenceMetrics, passed.key);
        }
        addResult(results, passed.key);
        const passedItems = ruleResults.filter((r: any) => r.verdict === "passed");
        registerNode(nodes, passed.name, passedItems);
       }
       }
      
    } else if (metadata.outcome === "warning") {
       if (warning) {
         if (warning) {
        if(warning.type === "occurrence"){
         incrementElement(elements, warning.name, metadata.warning);
         incrementMetric(ocurrenceMetrics, warning.key, metadata.warning);
        }else{
          markPresent(elements, warning.name);
          markPresentMetric(ocurrenceMetrics, warning.key);
        }
        addResult(results, warning.key);
        const warningItems = ruleResults.filter((r: any) => r.verdict === "warning");
        registerNode(nodes, warning.name, warningItems);
       }
       }
    }
}
export function processEvaluation(evaluation: QualwebReport):EvaluationProcessingResult {
 const elements: Record<string, number> = {};
  const testsScores: Record<string, string> = {};
  const nodes: Record<string, Object[]> = {};
  const ocurrenceMetrics: Record<string, number> = {};
  const htmlPageCode = evaluation.system.page.dom.html;
  const metadata: ExtractedEvaluationContext = extractEvaluationContext(evaluation);

  const processModule = (moduleName: ModuleSectionType) => {
    

    const assertions = evaluation.modules[moduleName]?.assertions || {};

    for (const [ruleId, assertion] of Object.entries(assertions) as [QualWebRuleID, Assertion][]) {
     
      const config: RuleConfig = DOMAIN_MAPPING[ruleId];
      if (!config) continue;

        if (config.hasCustomHandler) {
          const handler = CUSTOM_HANDLERS[ruleId];
          if (handler) {
            handler(assertion,{
              elements,
              results: testsScores,
              nodes,
              metrics:ocurrenceMetrics
            });
          }
        }else {
          // default handling logic should go here
          processDefaultHandler(
            assertion,
            config,
            elements,
            testsScores,
            nodes,
            ocurrenceMetrics
          );

        }
      };
   }

  processModule("act-rules");
  processModule("wcag-techniques");
  processModule("best-practices");
  
  const htmlProcessed = processHtmlReport(htmlPageCode, elements);
  const score = generateScore(testsScores,elements);
  
  return {
    metadata,
    html:htmlProcessed, 
    elementCounters: elements, 
    conformanceResults: testsScores,
    assertionEvidence: nodes, 
    rulesOccurrences: ocurrenceMetrics, 
    scoreDetails:score };

}