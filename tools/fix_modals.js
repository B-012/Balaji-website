const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The regex replace earlier inadvertently stripped the arguments in index.html.
// Let's restore them by matching the package names above the buttons.
html = html.replace(/Heavenly Kashmir Package([\s\S]*?)onclick="openBookingModal\([^)]*\)"/g, 'Heavenly Kashmir Package$1onclick="openBookingModal(\\\'Kashmir Tour Package\\\')"');
html = html.replace(/Sacred Chardham Pilgrimage([\s\S]*?)onclick="openBookingModal\([^)]*\)"/g, 'Sacred Chardham Pilgrimage$1onclick="openBookingModal(\\\'Chardham Yatra Package\\\')"');
html = html.replace(/Maldives Overwater Honeymoon([\s\S]*?)onclick="openBookingModal\([^)]*\)"/g, 'Maldives Overwater Honeymoon$1onclick="openBookingModal(\\\'Maldives Honeymoon Package\\\')"');

fs.writeFileSync('index.html', html);
console.log('Fixed modal arguments in index.html');
