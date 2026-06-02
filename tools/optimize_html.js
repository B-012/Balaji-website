const fs = require('fs');

['packages.html', 'index.html'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // First, convert any hardcoded 'images/packages/x.jpg' to .webp
  content = content.replace(/images\/packages\/([^\"]+)\.(jpg|png)/g, 'images/packages/$1.webp');
  
  // Add loading="lazy" to all img tags if it's not already there
  content = content.replace(/<img(?![^>]*loading=)[^>]*>/g, match => {
    return match.replace('<img', '<img loading="lazy"');
  });
  
  fs.writeFileSync(file, content);
  console.log('Optimized ' + file);
});
