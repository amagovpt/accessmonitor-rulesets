import { QualWeb, QualwebOptions } from "@qualweb/core";
import { ACTRules } from "@qualweb/act-rules";
import  { WCAGTechniques } from '@qualweb/wcag-techniques';
import { BestPractices } from "@qualweb/best-practices";
import { processEvaluation } from '../src/pipeline/evaluation-processor';
import { performance } from 'perf_hooks';
import { expect, describe, it, beforeAll } from '@jest/globals';
describe('Mapper Engine Performance & Integrity Test', () => {
  let rawData: any;
  const qualweb = new QualWeb({ adBlock: true, stealth: true });
  const excludeRules: string[] = [];
    const options: QualwebOptions = {
      modules: [
        new ACTRules() as any,
        new WCAGTechniques() as any,
        new BestPractices() as any,
      ],
      waitUntil: ["load", "networkidle2"],
      log: { file: true }
    };

  beforeAll(async () => {
    console.log('🚀 Starting QualWeb Core for real-time report generation...');
    
     await qualweb.start(
      { 
        maxConcurrency: 1, 
        timeout: 1000 * 240 * 2 
      },
      {
        headless: true,
        args: [
          "--no-sandbox", 
          "--ignore-certificate-errors",
        ]
      }
    );
    
    const url = 'https://www.google.com'; 
    options.urls = [url];
    const reports = await qualweb.evaluate(options);
    
    rawData = reports[url];
    await qualweb.stop();
    console.log('✅ Report generated and QualWeb stopped.');
  }, 60000);

  it('Should reduce the report size by at least 70%', () => {
    expect(rawData).toBeDefined();
    expect(rawData.modules).toBeDefined();

    const originalSize = JSON.stringify(rawData).length;
    const slimResult = processEvaluation(rawData);
    const slimSize = JSON.stringify(slimResult).length;

    const reductionFactor = (1 - slimSize / originalSize) * 100;

    console.log(`[Stats] Original Raw: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`[Stats] Slim Result: ${(slimSize / 1024).toFixed(2)} KB`);
    console.log(`[Stats] Reduction: ${reductionFactor.toFixed(2)}%`);

    expect(reductionFactor).toBeGreaterThan(70);
    expect(slimSize).toBeLessThan(650 * 1024); 
  });

  it('Should have all required properties', () => {
    const slimResult = processEvaluation(rawData);

    expect(slimResult).toHaveProperty('metadata');
    expect(slimResult).toHaveProperty('html');
    expect(slimResult).toHaveProperty('elementCounters');
    expect(slimResult).toHaveProperty('conformanceResults');
    expect(slimResult).toHaveProperty('assertionEvidence');
    expect(slimResult).toHaveProperty('rulesOccurrences');
    expect(slimResult).toHaveProperty('scoreDetails');
  });

  it('não deve bloquear a thread por mais de 200ms', () => {
    const start = performance.now();

    
    processEvaluation(rawData);
    
    const end = performance.now();
    const duration = end - start;

    console.log(`[Performance] Mapping execution time: ${duration.toFixed(2)}ms`);

    expect(duration).toBeLessThan(200);
  });
});