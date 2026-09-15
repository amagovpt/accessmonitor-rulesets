import { TestKey } from "./types";
import { TestResult } from "./types/qualweb";


export function registerNode(
  nodes: Record<string, unknown[]>,
  targetName: string,
  rawResults: TestResult[] = []
): void {
  if (!nodes[targetName]) {
    nodes[targetName] = [];
  }
  for (const res of rawResults) {
    nodes[targetName].push(res);
  }
}

export function incrementElement(elements: Record<string, unknown>, key: string, val: number): void {
  elements[key] = ((elements[key] as number) || 0) + val;
}

export function markPresent(elements: Record<string, number>, key: string): void {
  elements[key] = 1;
}

export function incrementMetric(metrics: Record<TestKey, number>, key: TestKey, val: number): void {
  metrics[key] = ((metrics[key] as number) || 0) + val;
}

export function markPresentMetric(metrics: Record<TestKey, number>, key: TestKey): void {
  metrics[key] = 1;
}

export function addResult(results: Record<TestKey, string>, key: TestKey): void {
  results[key] = '';
}
