import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const RULES_DIR = './en'; 
const OUTPUT_FILE = './metadata-package/src/tests-metadata.ts';

function generateRuleset() {
    const files = fs.readdirSync(RULES_DIR);
    const ruleset = {};

    files.forEach(file => {
        if (path.extname(file) === '.md') {
            const filePath = path.join(RULES_DIR, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            
            const { data } = matter(fileContent);
            
            if (data.id) {
                ruleset[data.id] = { ...data };
                delete ruleset[data.id].id;
                delete ruleset[data.id].Title;
                const scs = (ruleset[data.id].scs && ruleset[data.id].scs.trim() !== '') ? ruleset[data.id].scs.split(',').map(s => s.trim()) : [];
                ruleset[data.id].scs = scs; 
            }
        }
    });

    const fileContent = `
    import { TestRegistry } from './types';
    export const ruleset: TestRegistry = ${JSON.stringify(ruleset, null, 2)};`;
    
    fs.writeFileSync(OUTPUT_FILE, fileContent);
    console.log(`✅ Ruleset gerado com sucesso em: ${OUTPUT_FILE}`);
}

generateRuleset();