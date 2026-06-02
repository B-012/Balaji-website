const fs = require('fs');

let html = fs.readFileSync('packages.html', 'utf8');

// The start of the misplaced block
const startMarker = '<!-- Spiritual Pilgrimages Section -->';
const startIndex = html.indexOf(startMarker);

// The end of the misplaced block
// Since I know it ends with the Puri block's closing tags, let's find that.
const puriMarker = '<!-- Puri -->';
const puriIndex = html.indexOf(puriMarker);

// Find the closing </div> of the Puri block
let endIndex = html.indexOf('</div>', puriIndex);
// It has an inner div and an outer div.
// <!-- Puri -->
// <div ...>
//   <img ...>
//   <div ...> <h3>...</h3> </div>
// </div>
// So there are two </div> tags after the Puri comment that belong to the Puri block.
endIndex = html.indexOf('</div>', endIndex + 1) + 6;

// And the Spiritual Pilgrimages section has a main wrapper div that needs to be closed.
endIndex = html.indexOf('</div>', endIndex) + 6;

if (startIndex !== -1 && puriIndex !== -1) {
  // Extract the entire Spiritual block
  const spiritualBlock = html.substring(startIndex, endIndex);
  
  // Remove it from its current broken position (which fixes the Domestic grid)
  html = html.substring(0, startIndex) + html.substring(endIndex);
  
  // Now wrap the extracted block in a proper <section>
  const properSpiritualSection = `
    <section style="padding: 0 0 80px 0; background: #fff;">
      <div class="container">
${spiritualBlock}
      </div>
    </section>
  `;
  
  // Find where to insert it safely: Right before the Returns/Refunds section
  const targetInsertion = '<!-- Returns, Refunds & Cancellation Policy Section -->';
  const insertPos = html.indexOf(targetInsertion);
  
  if (insertPos !== -1) {
    html = html.substring(0, insertPos) + properSpiritualSection + '\\n    ' + html.substring(insertPos);
    fs.writeFileSync('packages.html', html);
    console.log('Fixed DOM structure in packages.html');
  } else {
    console.log('Could not find target insertion point');
  }
} else {
  console.log('Could not find Spiritual block markers');
}
