const fs = require('fs');
let html = fs.readFileSync('packages.html', 'utf8');

const startMarker = '<!-- Spiritual Pilgrimages Section -->';
const puriMarker = '<!-- Puri -->';

const startIndex = html.indexOf(startMarker);
const puriIndex = html.indexOf(puriMarker);

if (startIndex !== -1 && puriIndex !== -1) {
  // Find the end of the Puri block
  // Puri block:
  // <!-- Puri -->
  // <div ...> ... </div>
  // </div>
  let endIndex = html.indexOf('</div>', puriIndex);
  endIndex = html.indexOf('</div>', endIndex + 1) + 6;
  
  // The Spiritual Pilgrimages Section had an opening <div class="grid-4" ...>
  // Let's close it here because I need to extract it completely.
  endIndex = html.indexOf('</div>', endIndex) + 6;

  const spiritualBlock = html.substring(startIndex, endIndex);
  html = html.substring(0, startIndex) + html.substring(endIndex);

  // Now, wrap the spiritual block in a proper section
  const newSpiritualSection = `
    <!-- Spiritual Pilgrimages Destination Grid -->
    <section style="padding: 80px 0; background: #fff;">
      <div class="container">
${spiritualBlock}
      </div>
    </section>
  `;

  // Find the end of the Domestic Tours Section to append it
  // The Domestic section ends right before the Returns policy
  const returnsMarker = '<!-- Returns, Refunds & Cancellation Policy Section -->';
  const returnsIndex = html.indexOf(returnsMarker);

  if (returnsIndex !== -1) {
    html = html.substring(0, returnsIndex) + newSpiritualSection + '\\n    ' + html.substring(returnsIndex);
    fs.writeFileSync('packages.html', html);
    console.log('Successfully untangled and moved Spiritual Pilgrimages Section');
  } else {
    console.log('Could not find returns section');
  }
} else {
  console.log('Could not find start or puri marker');
}
