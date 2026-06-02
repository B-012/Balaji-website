const fs = require('fs');
let htmlContent = fs.readFileSync('packages.html', 'utf8');

const newSection = `
        <!-- Spiritual Pilgrimages Section -->
        <div class="category-header" style="margin-top: 60px;">
          <h2 class="section-title">Spiritual Pilgrimages</h2>
        </div>
        <div class="grid-4" style="gap: 16px;">
          <!-- Tirupati -->
          <div style="position:relative; border-radius: 10px; overflow: hidden; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.15);" onclick="location.href='packages.html'">
            <img src="images/packages/tirupati.webp?v=2" alt="Tirupati" style="width:100%; height:200px; object-fit:cover; display:block; transition:transform 0.4s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <div style="position:absolute; bottom:0; left:0; width:100%; background:linear-gradient(transparent, rgba(0,0,0,0.8)); color:white; text-align:center; padding:15px 0; font-weight:bold; font-size:1.1rem; text-transform:uppercase;">TIRUPATI</div>
          </div>
          <!-- Vaishno Devi -->
          <div style="position:relative; border-radius: 10px; overflow: hidden; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.15);" onclick="location.href='packages.html'">
            <img src="images/packages/vaishnodevi.webp?v=2" alt="Vaishno Devi" style="width:100%; height:200px; object-fit:cover; display:block; transition:transform 0.4s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <div style="position:absolute; bottom:0; left:0; width:100%; background:linear-gradient(transparent, rgba(0,0,0,0.8)); color:white; text-align:center; padding:15px 0; font-weight:bold; font-size:1.1rem; text-transform:uppercase;">VAISHNO DEVI</div>
          </div>
          <!-- Amritsar -->
          <div style="position:relative; border-radius: 10px; overflow: hidden; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.15);" onclick="location.href='packages.html'">
            <img src="images/packages/amritsar.webp?v=2" alt="Amritsar" style="width:100%; height:200px; object-fit:cover; display:block; transition:transform 0.4s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <div style="position:absolute; bottom:0; left:0; width:100%; background:linear-gradient(transparent, rgba(0,0,0,0.8)); color:white; text-align:center; padding:15px 0; font-weight:bold; font-size:1.1rem; text-transform:uppercase;">AMRITSAR</div>
          </div>
          <!-- Puri -->
          <div style="position:relative; border-radius: 10px; overflow: hidden; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.15);" onclick="location.href='packages.html'">
            <img src="images/packages/puri.webp?v=2" alt="Puri" style="width:100%; height:200px; object-fit:cover; display:block; transition:transform 0.4s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <div style="position:absolute; bottom:0; left:0; width:100%; background:linear-gradient(transparent, rgba(0,0,0,0.8)); color:white; text-align:center; padding:15px 0; font-weight:bold; font-size:1.1rem; text-transform:uppercase;">PURI</div>
          </div>
        </div>
`;

// Insert after the domestic grid
const domGridEnd = htmlContent.indexOf('<!-- Kolkata -->');
if (domGridEnd !== -1) {
  // Find the end of the Kolkata div
  const insertPos = htmlContent.indexOf('</div>', domGridEnd) + 6; // end of kolkata div
  const finalInsertPos = htmlContent.indexOf('</div>', insertPos) + 6; // end of domestic grid
  
  htmlContent = htmlContent.slice(0, finalInsertPos) + newSection + htmlContent.slice(finalInsertPos);
  fs.writeFileSync('packages.html', htmlContent);
  console.log('Added Spiritual Pilgrimages section to packages.html');
} else {
  console.log('Could not find Domestic grid end');
}
