import * as fs from 'node:fs';
import { ruleset } from './src/tests-metadata';
import * as path from 'node:path';
const ptRaw = JSON.parse(fs.readFileSync(path.resolve(__dirname, './locale/pt.json'), 'utf-8'));

function formatSQLArray(arr: string[] | undefined): string {
  if (!arr || !Array.isArray(arr)) return '[]';
  const escapedItems = arr.map(item => `'${escapeSQLString(item)}'`);
  return `[${escapedItems.join(', ')}]`;
}

function escapeSQLString(val: string | undefined): string {
  if (!val) return '';
  return val
    .replace(/\\/g, '\\\\') 
    .replace(/'/g, "\\'")   
    .replace(/\n/g, ' ')  
    .trim();
}

let sqlValues: string[] = [];


for (const [rule_code, ruleData] of Object.entries(ruleset)) {
  const ref = ruleData.ref;
  
  const rawTitle = (ptRaw.translation.TESTS_RESULTS as Record<string, { title: string }>)[rule_code]?.title || `Regra ${rule_code}`;
  const rule_title = escapeSQLString(rawTitle);
  
  const rawDescription = ptRaw.translation.TXT_TECHNIQUES[ref as keyof typeof ptRaw.translation.TXT_TECHNIQUES] || '<p>Sem descrição técnica disponível.</p>';
  const rule_description = escapeSQLString(rawDescription);


  const rule_type = escapeSQLString(ruleData.type);
  const target_element = escapeSQLString(ruleData.elem);
  const test_method = escapeSQLString(ruleData.test);
  const weight_score = ruleData.score || 0;
  const wcag_level = escapeSQLString(ruleData.level);
  const trust_factor = Number.parseFloat(ruleData.trust) || 0;
  const expected_result = escapeSQLString(ruleData.result);
  
  const wcag_success_criteria = formatSQLArray(ruleData.scs);

  const row = `('${rule_code}', '${rule_title}', '${rule_description}', '${rule_type}', '${target_element}', '${test_method}', ${weight_score}, '${wcag_level}', ${trust_factor}, ${wcag_success_criteria}, '${expected_result}')`;
  
  sqlValues.push(row);
}

const targetTable = 'monitor_server.rules_source';
const columns = 'rule_code, rule_title, rule_description, rule_type, target_element, test_method, weight_score, wcag_level, trust_factor, wcag_success_criteria, expected_result';

const finalSQLQuery = `
INSERT INTO ${targetTable} (${columns}) VALUES \n${sqlValues.join(',\n')};`;

fs.writeFileSync('./populate_rules.sql', finalSQLQuery, 'utf-8');

console.log('🚀 Sucesso! Ficheiro "./populate_rules.sql" .');