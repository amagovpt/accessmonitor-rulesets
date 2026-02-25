const { execSync } = require('child_process');
const fs = require('fs');

const FRONT_MATTER_REGEX = /^---\s*([\s\S]*?)\s*---/;

function getFrontMatter(content) {
  const match = content.match(FRONT_MATTER_REGEX);
  return match?.[1].trim() ?? null;
}

function getChangedMarkdownFiles() {
  const diffTarget = (() => {
    try {
      execSync('git rev-parse HEAD^', { stdio: 'pipe' });
      return 'HEAD^ HEAD';
    } catch {
      return 'HEAD';
    }
  })();

  return execSync(`git diff --name-only ${diffTarget}`, { stdio: 'pipe' })
    .toString()
    .trim()
    .split('\n')
    .filter(file => file.endsWith('.md') && fs.existsSync(file));
}

function getOldContent(file) {
  try {
    return execSync(`git show HEAD^:"${file}"`, { stdio: 'pipe' }).toString();
  } catch {
    console.log(`[INFO] New file detected: ${file}`);
    return '';
  }
}

function logFrontMatterDiff(file, oldFM, currentFM) {
  const oldLines = (oldFM ?? '').split('\n');
  const currentLines = (currentFM ?? '').split('\n');

  const removed = oldLines.filter(line => !currentLines.includes(line));
  const added = currentLines.filter(line => !oldLines.includes(line));

  console.log(`[DIFF] ${file}`);
  removed.forEach(line => console.log(`  - ${line}`));
  added.forEach(line => console.log(`  + ${line}`));
}

function hasFrontMatterChanged(file) {
  const currentContent = fs.readFileSync(file, 'utf8');
  const oldContent = getOldContent(file);

  const currentFM = getFrontMatter(currentContent);
  const oldFM = getFrontMatter(oldContent);

  if (currentFM !== oldFM) {
    logFrontMatterDiff(file, oldFM, currentFM);
    return true;
  }

  return false;
}

function run() {
  try {
    const changedFiles = getChangedMarkdownFiles();
    
    const hasRelevantChanges = changedFiles.length > 0 && changedFiles.some(hasFrontMatterChanged);

    const output = process.env.GITHUB_OUTPUT;
    
    if (output) {
      fs.appendFileSync(output, `should_proceed=${hasRelevantChanges}\n`);
    }
    process.exit(0);

  } catch (error) {
    console.error('[ERROR]', error.message);
    const output = process.env.GITHUB_OUTPUT;
    if (output) {
      fs.appendFileSync(output, `should_proceed=false\n`);
    }
    process.exit(1);
  }
}

run();