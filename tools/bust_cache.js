const fs = require('fs');

// Bust cache in data.js
let dataContent = fs.readFileSync('js/data.js', 'utf8');
dataContent = dataContent.replace(/(\"images\/packages\/[^\"']+?\.webp)(\?v=\d+)?(\")/g, '$1?v=2$3');
fs.writeFileSync('js/data.js', dataContent);

// Bust cache in packages.html
let htmlContent = fs.readFileSync('packages.html', 'utf8');
htmlContent = htmlContent.replace(/(\"images\/packages\/[^\"']+?\.webp)(\?v=\d+)?(\")/g, '$1?v=2$3');
fs.writeFileSync('packages.html', htmlContent);

console.log('Cache busted successfully!');
