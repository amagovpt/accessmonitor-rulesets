const fs = require('fs');
const path = require('path');

const DIRECTORY = './en';


const VALID_TYPES   = ['fals', 'prop', 'decr', 'true']; 
const VALID_LEVELS  = ['A', 'AA', 'AAA'];
const VALID_RESULTS = ['passed', 'failed', 'warning'];
const VALID_SCORES  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const VALID_TRUSTS  = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1].map((v) => v.toString()); 


function parseFrontmatter(content) {
    const match = content.match(/^---([\s\S]*?)---/);
    if (!match) return null;

    const yaml = match[1];
    const result = {};

    for (const line of yaml.split('\n')) {
        const trimmed = line.trim();
        if (!trimmed) continue;

        const colonIdx = trimmed.indexOf(':');
        if (colonIdx === -1) continue;

        const key   = trimmed.slice(0, colonIdx).trim();
        let   value = trimmed.slice(colonIdx + 1).trim();

        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }

        result[key] = value;
    }

    return result;
}


function validateTestDefinition(data, fileName) {
    const errors = [];

    const requiredFields = ['type', 'elem', 'test', 'score', 'level', 'trust', 'ref', 'dis', 'result'];
    for (const field of requiredFields) {
      if (data[field] === undefined || data[field] === '') {
        errors.push(`Missing required field: "${field}"`);
      }
    }


    if (data.scs === undefined) {
      errors.push(`Missing required field: "scs"`);
    }


    if (data.type && !VALID_TYPES.includes(data.type)) {
        errors.push(`Invalid "type": "${data.type}". Expected one of: ${VALID_TYPES.join(', ')}`);
    }

    if (data.score !== undefined) {
        const scoreNum = Number(data.score);
        if (!VALID_SCORES.includes(scoreNum)) {
            errors.push(`Invalid "score": "${data.score}". Must be an integer 0–10.`);
        }
    }

    if (data.trust !== undefined) {
        if (!VALID_TRUSTS.includes(data.trust)) {
            errors.push(`Invalid "trust": "${data.trust}". Must be a numeric string 0, 0.1, ..., 0.9, 1.`);
        }
    }

    if (data.level && !VALID_LEVELS.includes(data.level)) {
        errors.push(`Invalid "level": "${data.level}". Expected one of: ${VALID_LEVELS.join(', ')}`);
    }

    if (data.result && !VALID_RESULTS.includes(data.result)) {
        errors.push(`Invalid "result": "${data.result}". Expected one of: ${VALID_RESULTS.join(', ')}`);
    }


    if (data.scs !== undefined) {
      if (!data.scs.trim() === '')  {
        const scsEntries = data.scs.split(',').map(s => s.trim());
        const badScs = scsEntries.filter(s => !/^\d+\.\d+(\.\d+)?$/.test(s));
        if (badScs.length > 0) {
            errors.push(`Invalid "scs" entries: ${badScs.join(', ')}. Expected comma-separated SC numbers like "2.4.4".`);
        }
    }
    }

  
    if (data.top !== undefined && isNaN(Number(data.top))) {
        errors.push(`Invalid "top": "${data.top}". Must be a number.`);
    }
    if (data.steps !== undefined && isNaN(Number(data.steps))) {
        errors.push(`Invalid "steps": "${data.steps}". Must be a number.`);
    }

    return errors;
}

function validateMdFiles() {
    const files = fs.readdirSync(DIRECTORY).filter(f => f.endsWith('.md'));

    let totalFiles   = 0;
    let validFiles   = 0;
    let invalidFiles = 0;
    let missingFrontmatter = 0;

    for (const file of files) {
        totalFiles++;
        const filePath = path.join(DIRECTORY, file);

        let content;
        try {
            content = fs.readFileSync(filePath, 'utf8');
        } catch (err) {
            console.error(`[ERROR] Could not read ${file}: ${err.message}`);
            invalidFiles++;
            continue;
        }

        const data = parseFrontmatter(content);

        if (!data) {
            console.warn(`[WARN]  ${file} — No YAML frontmatter found.`);
            missingFrontmatter++;
            invalidFiles++;
            continue;
        }

        const errors = validateTestDefinition(data, file);

        if (errors.length === 0) {
            validFiles++;
        } else {
            invalidFiles++;
            console.error(`[FAIL]  ${file}`);
            for (const err of errors) {
                console.error(`        → ${err}`);
            }
        }
    }

    console.log('\n─────────────────────────────────────');
    console.log(`Total files scanned : ${totalFiles}`);
    console.log(`✅ Valid            : ${validFiles}`);
    console.log(`❌ Invalid          : ${invalidFiles}`);
    console.log(`⚠️  Missing FM      : ${missingFrontmatter}`);
    console.log('─────────────────────────────────────');
    if (invalidFiles > 0) {
      throw new Error('Validation failed. Please fix the above errors before proceeding');
    } else {
        console.log('✅ All files passed validation!');
    }
}

validateMdFiles();