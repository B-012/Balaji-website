const path = require('path');
const sharp = require(path.join(__dirname, 'node_modules', 'sharp'));

async function createCollage() {
  try {
    const rootDir = path.join(__dirname, '..');
    const img1Path = path.join(rootDir, 'rajasthan image1.jpg');
    const img2Path = path.join(rootDir, 'rajasthan image2.jpg');
    const outPath = path.join(rootDir, 'images', 'packages', 'rajasthan.webp');

    console.log('Loading image 1:', img1Path);
    const img1 = await sharp(img1Path).resize(400, 400, { fit: 'cover' }).toBuffer();
    
    console.log('Loading image 2:', img2Path);
    const img2 = await sharp(img2Path).resize(400, 400, { fit: 'cover' }).toBuffer();
    
    console.log('Creating collage...');
    await sharp({
      create: {
        width: 800,
        height: 400,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
    .composite([
      { input: img1, left: 0, top: 0 },
      { input: img2, left: 400, top: 0 }
    ])
    .webp({ quality: 80 })
    .toFile(outPath);
    
    console.log('Successfully created collage and saved to', outPath);
  } catch (err) {
    console.error('Error creating collage:', err);
  }
}
createCollage();
