const fs = require('fs');
const path = require('path');
const sharp = require(path.join(__dirname, 'node_modules', 'sharp'));

const dataFile = 'js/data.js';
let dataContent = fs.readFileSync(dataFile, 'utf8');

// Use regex to find all package IDs and their current image paths in the packages array
const packageRegex = /(id:\s*["'])([^"']+)(["'][\s\S]*?image:\s*["'])([^"']+)(["'])/g;
let match;
const processingPromises = [];

let newDataContent = dataContent;

// Get all the image names in the directory to see what we have
const dirFiles = fs.readdirSync('images/packages');

function getSourceFile(id, currentImage) {
  // Check if current image exists
  if (fs.existsSync(currentImage)) return currentImage;
  // Check if id.jpg exists
  if (fs.existsSync(`images/packages/${id}.jpg`)) return `images/packages/${id}.jpg`;
  if (fs.existsSync(`images/packages/${id}.png`)) return `images/packages/${id}.png`;
  // Check if id without hyphen exists (e.g. goa-premium -> goa.jpg)
  const baseId = id.split('-')[0];
  if (fs.existsSync(`images/packages/${baseId}.jpg`)) return `images/packages/${baseId}.jpg`;
  if (fs.existsSync(`images/packages/${baseId}.png`)) return `images/packages/${baseId}.png`;
  return null;
}

while ((match = packageRegex.exec(dataContent)) !== null) {
  const fullMatch = match[0];
  const id = match[2];
  const currentImage = match[4];
  const webpPath = `images/packages/${id}.webp`;

  const sourceFile = getSourceFile(id, currentImage);
  
  if (sourceFile) {
    // Process the image using sharp
    const promise = sharp(sourceFile)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(webpPath)
      .then(() => {
        console.log(`Converted ${sourceFile} to ${webpPath}`);
      })
      .catch(err => {
        console.error(`Error converting ${sourceFile}:`, err);
      });
    
    processingPromises.push(promise);
    
    // Update data.js string
    // Replace the specific block
    const newBlock = `${match[1]}${match[2]}${match[3]}${webpPath}${match[5]}`;
    newDataContent = newDataContent.replace(fullMatch, newBlock);
  } else {
    console.log(`Could not find source image for ID: ${id}`);
  }
}

Promise.all(processingPromises).then(() => {
  fs.writeFileSync(dataFile, newDataContent);
  console.log('Successfully updated data.js and compressed all images to .webp');
});
