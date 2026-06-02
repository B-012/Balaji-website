const https = require('https');
const fs = require('fs');

const imagesToDownload = [
  {
    name: 'tirupati.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Tirumala_090615.jpg/800px-Tirumala_090615.jpg'
  },
  {
    name: 'vaishnodevi.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Vaishno_Devi_Temple.jpg/800px-Vaishno_Devi_Temple.jpg'
  },
  {
    name: 'amritsar.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Golden_Temple_of_Amrithsar_7.jpg/800px-The_Golden_Temple_of_Amrithsar_7.jpg'
  },
  {
    name: 'puri.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Jagannath_Temple%2C_Puri.jpg/800px-Jagannath_Temple%2C_Puri.jpg'
  }
];

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 BalajiTravels/1.0'
  }
};

imagesToDownload.forEach(img => {
  const filePath = `images/packages/${img.name}`;
  
  https.get(img.url, options, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(filePath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${img.name}`);
      });
    } else {
      console.log(`Failed to download ${img.name} (Status: ${res.statusCode})`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${img.name}: ${err.message}`);
  });
});
