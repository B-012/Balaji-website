const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  if (content.includes('name="keywords" content="')) {
    // If keywords tag exists, prepend 'balaji travels, balaji travels kolkata, '
    content = content.replace(/(name="keywords" content=")([^"]*)/, '$1balaji travels, balaji travels kolkata, $2');
  } else {
    // If it doesn't exist, inject it before closing title
    const metaTag = '<meta name="keywords" content="balaji travels, balaji travels kolkata, best travel agent, tour operator">\n  ';
    if (content.includes('</title>')) {
      content = content.replace('</title>', '</title>\n  ' + metaTag);
    }
  }
  
  fs.writeFileSync(file, content);
  console.log('Added keyword to ' + file);
});
