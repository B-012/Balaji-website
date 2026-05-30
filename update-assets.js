const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/href="css\/style\.css"/g, 'href="css/style.min.css"');
  content = content.replace(/src="js\/app\.js"/g, 'src="js/app.min.js"');
  fs.writeFileSync(f, content);
  console.log(`Updated assets in ${f}`);
});
