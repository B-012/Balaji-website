const fs = require('fs');

let html = fs.readFileSync('packages.html', 'utf8');

// 1. Inject Premium Styles
const premiumStyles = `
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    /* Premium Packages Page UI Overhaul */
    .sub-hero {
      background: linear-gradient(to right, rgba(10, 31, 68, 0.9), rgba(10, 31, 68, 0.7)), url('images/packages/europe.webp?v=2') center/cover fixed;
      padding: 100px 0 80px;
      text-align: center;
      position: relative;
    }
    .sub-hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: 3.5rem;
      color: #fff;
      text-shadow: 0 4px 15px rgba(0,0,0,0.3);
      margin-bottom: 20px;
      animation: fadeInDown 1s ease;
    }
    .filter-tabs {
      background: white;
      padding: 15px;
      border-radius: 50px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      margin: -35px auto 40px;
      position: relative;
      z-index: 10;
    }
    .filter-tab {
      background: transparent;
      border: none;
      padding: 12px 25px;
      border-radius: 30px;
      font-weight: 600;
      color: var(--text-light);
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .filter-tab:hover {
      background: var(--bg-secondary);
      color: var(--primary-color);
    }
    .filter-tab.active {
      background: var(--accent-color);
      color: white;
      box-shadow: 0 4px 15px rgba(255, 107, 0, 0.3);
      transform: translateY(-2px);
    }
    
    /* Glassmorphism Package Cards */
    .package-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 15px 35px rgba(0,0,0,0.04);
      border: 1px solid rgba(0,0,0,0.02);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .package-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 25px 50px rgba(0,0,0,0.1);
    }
    .package-img-wrapper {
      position: relative;
      height: 240px;
      overflow: hidden;
    }
    .package-img-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s ease;
    }
    .package-card:hover .package-img-wrapper img {
      transform: scale(1.1);
    }
    .package-tag {
      position: absolute;
      top: 15px;
      left: 15px;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(5px);
      padding: 6px 15px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--primary-color);
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      z-index: 2;
    }
    .package-duration {
      position: absolute;
      bottom: 15px;
      right: 15px;
      background: rgba(10, 31, 68, 0.85);
      backdrop-filter: blur(5px);
      padding: 6px 15px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      color: white;
      z-index: 2;
    }
    .package-body {
      padding: 25px;
      background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,249,255,0.5) 100%);
    }
    .package-body h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.6rem;
      color: var(--primary-dark);
      margin-bottom: 12px;
      line-height: 1.3;
    }
    .inclusion-tag {
      background: white;
      border: 1px solid var(--border-color);
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-light);
      box-shadow: 0 2px 5px rgba(0,0,0,0.02);
    }
    
    /* CTA Banner Gradient & Pulse */
    .cta-banner {
      background: linear-gradient(135deg, var(--primary-dark) 0%, #1a3673 100%);
      position: relative;
      overflow: hidden;
    }
    .cta-banner::before {
      content: '';
      position: absolute;
      top: -50%; left: -50%; width: 200%; height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%);
      animation: rotate 20s linear infinite;
    }
    @keyframes rotate { 100% { transform: rotate(360deg); } }
    .btn-pulse {
      animation: pulseBtn 2s infinite;
    }
    @keyframes pulseBtn {
      0% { box-shadow: 0 0 0 0 rgba(255, 107, 0, 0.4); }
      70% { box-shadow: 0 0 0 15px rgba(255, 107, 0, 0); }
      100% { box-shadow: 0 0 0 0 rgba(255, 107, 0, 0); }
    }
  </style>
`;

if (!html.includes('<!-- Premium Packages Page UI Overhaul -->')) {
  html = html.replace('</head>', premiumStyles + '\n</head>');
}

// 2. JS Render Function overhaul for Glassmorphism Cards
const newRenderFunction = `
    function renderPackages() {
      const grid = document.getElementById("packages-target-grid");
      const noResults = document.getElementById("no-packages-msg");
      
      if (!grid || !window.travelData) return;

      const packages = window.travelData.packages;

      // Category matching logic
      const filtered = packages.filter(p => {
        if (activePkgCategory === "all") return true;
        if (activePkgCategory === "domestic") return p.category === "domestic" || p.category === "religious";
        if (activePkgCategory === "international") return p.category === "international";
        if (activePkgCategory === "religious") return p.category === "religious";
        if (activePkgCategory === "honeymoon") return p.type.toLowerCase().includes("honeymoon");
        if (activePkgCategory === "group") return p.type.toLowerCase().includes("group");
        return false;
      });

      if (filtered.length === 0) {
        grid.style.display = "none";
        noResults.style.display = "block";
      } else {
        grid.style.display = "grid";
        noResults.style.display = "none";

        grid.innerHTML = filtered.map(p => \`
          <div class="package-card">
            <div class="package-img-wrapper">
              <span class="package-tag"><i class="fas fa-tag" style="margin-right: 5px; color: var(--accent-color);"></i> \${p.type}</span>
              <img loading="lazy" src="\${p.image || 'images/packages/kashmir.webp?v=2'}" alt="\${p.title}">
              <span class="package-duration"><i class="far fa-clock" style="margin-right: 5px;"></i> \${p.duration}</span>
            </div>
            <div class="package-body" style="display: flex; flex-direction: column; height: 100%;">
              <h3>\${p.title}</h3>
              <p class="package-desc" style="color: #6c757d; font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">\${p.description}</p>
              
              <div style="background: rgba(255, 107, 0, 0.05); padding: 12px 15px; border-radius: 12px; border-left: 4px solid var(--accent-color); font-size: 0.85rem; font-weight: 600; color: var(--primary-dark); margin-bottom: 20px;">
                <i class="fas fa-sparkles" style="color: var(--accent-color); margin-right: 8px;"></i>\${p.highlights}
              </div>
              
              <div class="package-inclusions" style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 25px;">
                \${p.inclusions.map(inc => \`<span class="inclusion-tag"><i class="fas fa-check" style="color: #2ecc71; margin-right: 5px;"></i>\${inc}</span>\`).join('')}
              </div>
              
              <div class="package-footer" style="margin-top: auto; padding-top: 20px; border-top: 1px dashed rgba(0,0,0,0.1); display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; flex-direction: column;">
                  <span style="font-size: 0.75rem; color: #95a5a6; font-weight: 600; text-transform: uppercase;">Starting from</span>
                  <span style="font-size: 1.4rem; font-weight: 800; color: var(--primary-color);">₹\${p.price.toLocaleString()}</span>
                </div>
                <button class="btn btn-accent btn-sm" style="border-radius: 25px; padding: 10px 20px; font-weight: 700; box-shadow: 0 4px 15px rgba(255, 107, 0, 0.2);" onclick="openBookingModal('\${p.title}')">Book Now <i class="fas fa-arrow-right" style="margin-left: 5px;"></i></button>
              </div>
            </div>
          </div>
        \`).join('');
      }
    }
`;

html = html.replace(/function renderPackages\(\) \{[\s\S]*?\n    \}/, newRenderFunction);

// 3. Update CTA button to pulse
html = html.replace('class="btn btn-accent"', 'class="btn btn-accent btn-pulse"');

fs.writeFileSync('packages.html', html);
console.log('Premium Redesign applied successfully.');
