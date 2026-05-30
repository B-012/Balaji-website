const fs = require('fs');

const content = fs.readFileSync('C:/Users/SAKSHI/.gemini/antigravity-ide/brain/46cdfe6f-9061-4c0f-a7d2-8b878eec2086/.system_generated/steps/1059/content.md', 'utf8');

const regex = /https:\/\/scontent[^"'\s<>]+/g;
let matches = content.match(regex);
if (matches) {
  matches = [...new Set(matches)]; // unique
  // write them to a file to examine
  fs.writeFileSync('fb-images.txt', matches.join('\n'));
  console.log(`Found ${matches.length} unique images. Saved to fb-images.txt`);
} else {
  console.log('No images found');
}
