import { DOMAIN_MAPPING, RuleConfig, QualWebKeyTranslator, QualWebRuleID } from './ruleset.mapping';
export interface RuleMetrics {
    passed: number;
    failed: number;
    warning: number;
    outcome: string;
}

export interface MappingResult {
    html: string;
    elements: Record<string, number>;
    results: Record<string, string>;
    nodes: Record<string, Object[]>;
    metrics: Record<string, RuleMetrics>;
}

export function getElementsMapping(evaluation: any):MappingResult {
  const elements: Record<string, number> = {};
  const results: Record<string, string> = {};
  const nodes: Record<string, Object[]> = {};
  const metrics: Record<string, RuleMetrics> = {};
  const html = evaluation.system.page.dom.html;  

  const processModule = (moduleName: string) => {
    

    const assertions = evaluation.modules[moduleName]?.assertions || {};

    for (const [ruleId, assertion] of Object.entries(assertions)) {
      const config: RuleConfig = DOMAIN_MAPPING[ruleId as QualWebRuleID];
      if (!config) continue;
      
      const {passed, failed, warning, outcome} = (assertion as any);
      metrics[ruleId] = { passed, failed, warning, outcome };
     
      const ruleResults = (assertion as any).results || [];

      if (config.baseNode) {
        elements[config.baseNode] = (elements[config.baseNode] || 0) + ruleResults.length;
      }

      ruleResults.forEach((res: any) => {

        let mapping: QualWebKeyTranslator | undefined;

        if (config.any?.resultCode?.[res.resultCode]) {
          mapping = config.any.resultCode[res.resultCode];
        } 

        else {
          const outcomeConfig = config[res.verdict as keyof RuleConfig];
          if (outcomeConfig && typeof outcomeConfig === 'object') {

            if ('resultCode' in outcomeConfig ) {
               mapping = outcomeConfig.resultCode[res.resultCode];
             } else {
               mapping = outcomeConfig;
             }
          }
        }

        if (mapping) {
          results[mapping.key] = "" + res.resultCode; 
          
          if (!nodes[mapping.name]) nodes[mapping.name] = [];
          const elementsArray = res.elements ? res.elements.map((el: any) => ({
            pointer: el.pointer,
        
          })) : [];
          nodes[mapping.name].push({
            verdict: res.verdict,
            pointers: elementsArray,
          });

          elements[mapping.name] = (elements[mapping.name] || 0) + 1;
        }
      });
    }
  };

  processModule("act-rules");
  processModule("wcag-techniques");
  processModule("best-practices");
  
  return {html, elements, results, nodes, metrics };

}