const fs = require('fs');
let html = fs.readFileSync('packages.html', 'utf8');

// The safe regex to match basic cards
// Note: basic cards have: <div style="position:relative; border-radius: 10px; overflow: hidden; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.15);" onclick="location.href='packages.html'">
const cardRegex = /<div style="position:relative; border-radius: 10px; overflow: hidden; cursor: pointer; box-shadow: 0 4px\s+15px rgba\(0,0,0,0\.15\);" onclick="location\.href='packages\.html'">\s*<img[^>]*src="([^"]+)" alt="([^"]+)"[^>]*>\s*<div style="position:absolute; bottom:0; left:0; right:0; background:rgba\(0,0,0,0\.7\); color:#fff;\s*text-align:center; padding:10px; font-weight:800; font-size:0\.85rem; letter-spacing:2px;">([^<]+)<\/div>\s*<\/div>/g;

let count = 0;
html = html.replace(cardRegex, (match, src, alt, label) => {
  count++;
  return `<div style="position:relative; border-radius: 16px; overflow: hidden; cursor: pointer; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 2px solid transparent; transition: all 0.4s ease;" onclick="location.href='packages.html'" onmouseover="this.style.transform='translateY(-10px)'; this.style.borderColor='var(--accent-color)'; this.style.boxShadow='0 20px 40px rgba(255, 107, 0, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='transparent'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.1)';">
            <img loading="lazy" src="${src}" alt="${alt}" style="width:100%; height:280px; object-fit:cover; display:block; transition: transform 0.6s ease;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
            <div style="position:absolute; bottom:0; left:0; width:100%; background:linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%); padding:40px 20px 20px; text-align:center;">
              <h3 style="color:#fff; margin:0; font-size:1.4rem; letter-spacing: 2px; font-family: 'Playfair Display', serif; text-transform: uppercase;">${label}</h3>
            </div>
          </div>`;
});

// Spiritual Pilgrimages needs to be upgraded too (because it was reverted to commit 7a59e5f which had basic cards for Spiritual too)
const spiritualRegex = /<div style="position:absolute; bottom:0; left:0; width:100%; background:linear-gradient\(transparent,\s*rgba\(0,0,0,0\.8\)\); color:white; text-align:center; padding:15px 0; font-weight:bold; font-size:1\.1rem;\s*text-transform:uppercase;">([^<]+)<\/div>/g;
html = html.replace(spiritualRegex, (match, label) => {
  return `<div style="position:absolute; bottom:0; left:0; width:100%; background:linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%); padding:40px 20px 20px; text-align:center;">
              <h3 style="color:#fff; margin:0; font-size:1.4rem; letter-spacing: 2px; font-family: 'Playfair Display', serif; text-transform: uppercase;">${label}</h3>
            </div>`;
});
// Update the wrapper of the spiritual cards too
html = html.replace(/<div style="position:relative; border-radius: 10px; overflow: hidden; cursor: pointer; box-shadow: 0 4px\s+15px rgba\(0,0,0,0\.15\);" onclick="location\.href='packages\.html'">/g, 
  `<div style="position:relative; border-radius: 16px; overflow: hidden; cursor: pointer; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 2px solid transparent; transition: all 0.4s ease;" onclick="location.href='packages.html'" onmouseover="this.style.transform='translateY(-10px)'; this.style.borderColor='var(--accent-color)'; this.style.boxShadow='0 20px 40px rgba(255, 107, 0, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='transparent'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.1)';">`
);
// And the height of images in spiritual cards
html = html.replace(/height:200px;/g, 'height:280px;');

// Also make the section headers more premium for Domestic and International
html = html.replace(/<section style="padding: 70px 0; background: #eef2ff;">/g, '<section style="padding: 80px 0; background: linear-gradient(135deg, #f8f9ff 0%, #eef2ff 100%); border-top: 1px solid rgba(0,0,0,0.03);">');
html = html.replace(/<section style="padding: 70px 0; background: #fff;">/g, '<section style="padding: 80px 0; background: #fff;">');

// Update header h2s to use Playfair Display
html = html.replace(/<h2 class="section-title">International Tours<\/h2>/g, '<h2 class="section-title" style="font-family: \\\'Playfair Display\\\', serif; font-size: 2.8rem; color: var(--primary-dark);">International Tours</h2>');
html = html.replace(/<h2 class="section-title">Domestic Tours<\/h2>/g, '<h2 class="section-title" style="font-family: \\\'Playfair Display\\\', serif; font-size: 2.8rem; color: var(--primary-dark);">Domestic Tours</h2>');
html = html.replace(/<h2 class="section-title">Spiritual Pilgrimages<\/h2>/g, '<h2 class="section-title" style="font-family: \\\'Playfair Display\\\', serif; font-size: 2.8rem; color: var(--primary-dark);">Spiritual Pilgrimages</h2>');


fs.writeFileSync('packages.html', html);
console.log('Replaced ' + count + ' basic cards with premium UX cards safely');
