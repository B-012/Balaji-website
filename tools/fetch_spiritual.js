const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require(path.join(__dirname, 'node_modules', 'sharp'));

const images = {
  'amritsar': 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80',
  'puri': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Jagannath_Temple_Puri.jpg/800px-Jagannath_Temple_Puri.jpg',
  'tirupati': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Tirumala_Venkateswara_Temple.jpg/800px-Tirumala_Venkateswara_Temple.jpg',
  'vaishnodevi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Vaishno_Devi_Bhawan.jpg/800px-Vaishno_Devi_Bhawan.jpg'
};

const options = { headers: { 'User-Agent': 'BalajiTravelsAgent/1.0' } };
const rootDir = path.join(__dirname, '..');

Object.entries(images).forEach(([id, url]) => {
  const req = https.get(url, options, (res) => {
    let buffers = [];
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      https.get(res.headers.location, options, (res2) => {
        res2.on('data', d => buffers.push(d));
        res2.on('end', () => processImage(Buffer.concat(buffers), id));
      });
    } else {
      res.on('data', d => buffers.push(d));
      res.on('end', () => processImage(Buffer.concat(buffers), id));
    }
  });
});

function processImage(buffer, id) {
  const outPath = path.join(rootDir, 'images', 'packages', id + '.webp');
  sharp(buffer)
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outPath)
    .then(() => console.log('Created ' + outPath))
    .catch(err => console.error('Error on ' + id, err));
}
