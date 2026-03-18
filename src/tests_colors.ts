import { TestColorsRegistry } from 'src/types';
import { ruleset } from '.';

const resultColorMap = {
  'passed': 'G',
  'failed': 'R',
  'warning': 'Y'
} as const;

export const testColors: TestColorsRegistry = Object.keys(ruleset).reduce((acc, key) => {
  const result = ruleset[key as keyof typeof ruleset]?.result;
  acc[key as keyof TestColorsRegistry] = resultColorMap[result as keyof typeof resultColorMap] || 'G';
  return acc;
}, {} as TestColorsRegistry);
