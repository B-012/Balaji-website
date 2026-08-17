const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '..');

// Find all HTML files
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      // Exclude node_modules, .git, etc if any (though there shouldn't be many)
      if (file !== '.git' && file !== 'node_modules') {
        findHtmlFiles(filePath, fileList);
      }
    } else if (filePath.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = findHtmlFiles(directoryPath);

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace occurrences
  content = content.replace(/9339288770/g, '8910829412');
  content = content.replace(/93392 88770/g, '89108 29412');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated phone number in: ' + filePath);
  }
});
