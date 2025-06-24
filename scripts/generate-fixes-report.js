const { execSync } = require('child_process');
const fs = require('fs');

const log = execSync('git log --pretty=format:"%h %ad %s" --date=short', { encoding: 'utf-8' });
const lines = log.split('\n');

let report = '# Автоматический отчет об исправлениях и багфиксах\n\n';
let currentDate = '';

lines.forEach(line => {
  const match = line.match(/^([a-f0-9]+) (\d{4}-\d{2}-\d{2}) (.+)$/);
  if (match) {
    const [, hash, date, message] = match;
    if (/fix|bug|hotfix|feat|improve/i.test(message)) {
      if (date !== currentDate) {
        report += `\n## Дата: ${date}\n`;
        currentDate = date;
      }
      report += `- [${hash}] ${message}\n`;
    }
  }
});

fs.writeFileSync('FIXES_REPORT.md', report, 'utf-8');
console.log('FIXES_REPORT.md обновлён автоматически!'); 