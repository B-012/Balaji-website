const fs = require('fs');
const path = require('path');

function replaceFbLinks(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const fullPath = path.join(dir, f);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !fullPath.includes('.gemini') && !fullPath.includes('node_modules')) {
      replaceFbLinks(fullPath);
    } else if (stat.isFile() && (f.endsWith('.html') || f.endsWith('.js') || f.endsWith('.php'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      content = content.replace(/https:\/\/facebook\.com/g, 'https://www.facebook.com/p/Balaji-Travels-100067196636092/');
      if (original !== content) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated FB links in ${fullPath}`);
      }
    }
  });
}

replaceFbLinks('.');
