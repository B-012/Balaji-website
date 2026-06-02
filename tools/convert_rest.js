const fs = require('fs');
const path = require('path');
const sharp = require(path.join(__dirname, 'node_modules', 'sharp'));

const dir = path.join(__dirname, '..', 'images', 'packages');
const files = fs.readdirSync(dir);

const promises = [];

for (const file of files) {
  if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
    const baseName = path.parse(file).name;
    const webpPath = path.join(dir, baseName + '.webp');
    
    // Only convert if the webp doesn't already exist
    if (!fs.existsSync(webpPath)) {
      console.log('Converting', file, 'to', baseName + '.webp');
      const promise = sharp(path.join(dir, file))
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webpPath);
      promises.push(promise);
    }
  }
}

Promise.all(promises).then(() => console.log('Done converting missing images to webp!')).catch(console.error);
