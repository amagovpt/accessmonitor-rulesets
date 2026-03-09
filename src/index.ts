export { ruleset } from './tests-metadata';
export { testColors } from './tests_colors';
export { techniques } from './tech';
export { successCriteria } from './scs';
import ptRaw from '../locale/pt.json';
import enRaw from '../locale/en.json';
import { Translations, Translation } from './types';

const pt = ptRaw satisfies Translation;
const en = enRaw satisfies Translation;

export const translations: Translations = { pt, en };
