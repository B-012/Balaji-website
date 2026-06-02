const fs = require('fs');

// 1. Update packages.html
let packagesHtml = fs.readFileSync('packages.html', 'utf8');

// Replace the price block and button with a full-width enquire button
const oldPriceBlock = `<div style="display: flex; flex-direction: column;">
                  <span style="font-size: 0.75rem; color: #95a5a6; font-weight: 600; text-transform: uppercase;">Starting from</span>
                  <span style="font-size: 1.4rem; font-weight: 800; color: var(--primary-color);">₹\${p.price.toLocaleString()}</span>
                </div>
                <button class="btn btn-accent btn-sm" style="border-radius: 25px; padding: 10px 20px; font-weight: 700; box-shadow: 0 4px 15px rgba(255, 107, 0, 0.2);" onclick="openBookingModal('\${p.title}')">Book Now <i class="fas fa-arrow-right" style="margin-left: 5px;"></i></button>`;

const newEnquireButton = `<button class="btn btn-accent btn-sm" style="width: 100%; border-radius: 25px; padding: 12px 20px; font-weight: 700; box-shadow: 0 4px 15px rgba(255, 107, 0, 0.2);" onclick="openBookingModal('\${p.title}')">Enquire Now for Price <i class="fas fa-paper-plane" style="margin-left: 8px;"></i></button>`;

packagesHtml = packagesHtml.replace(oldPriceBlock, newEnquireButton);
fs.writeFileSync('packages.html', packagesHtml);

// 2. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Remove <div class="package-price">...</div> blocks entirely
indexHtml = indexHtml.replace(/<div class="package-price">[\s\S]*?<\/div>/g, '');

// Update button text to be more explicit
indexHtml = indexHtml.replace(/>Enquire Now<\/button>/g, ' style="width: 100%;">Enquire Now for Price</button>');

fs.writeFileSync('index.html', indexHtml);

console.log('Prices removed successfully from both pages.');
