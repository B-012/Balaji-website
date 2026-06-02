const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Inject Premium Styles
const premiumStyles = `
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    /* Premium Homepage UI Overhaul */
    .hero-content h1 {
      font-family: 'Playfair Display', serif;
      font-size: 4rem;
      letter-spacing: 1px;
      animation: fadeInDown 1.2s ease-out;
      text-shadow: 0 5px 20px rgba(0,0,0,0.4);
    }
    
    /* Glassmorphism Why Choose Us Cards */
    .why-choose-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      padding-top: 20px;
    }
    .why-card {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 40px 30px;
      text-align: center;
      box-shadow: 0 15px 35px rgba(0,0,0,0.05);
      border: 1px solid rgba(255, 255, 255, 0.5);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
      overflow: hidden;
    }
    .why-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 4px;
      background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s ease;
    }
    .why-card:hover {
      transform: translateY(-15px);
      box-shadow: 0 25px 50px rgba(0,0,0,0.1);
      background: white;
    }
    .why-card:hover::before {
      transform: scaleX(1);
    }
    .why-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 25px;
      background: linear-gradient(135deg, rgba(230,126,34,0.1) 0%, rgba(230,126,34,0.2) 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: var(--accent-color);
      transition: transform 0.4s ease;
    }
    .why-card:hover .why-icon {
      transform: scale(1.1) rotate(5deg);
    }
    .why-card h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      color: var(--primary-dark);
      margin-bottom: 15px;
    }
    .why-card p {
      color: #7f8c8d;
      line-height: 1.7;
      font-size: 0.95rem;
    }

    /* Glassmorphism Package Cards for Homepage */
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
      display: inline-block;
      margin: 3px;
    }
    .package-footer {
      padding-top: 20px;
      border-top: 1px dashed rgba(0,0,0,0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
    }
    .package-price {
      display: flex;
      flex-direction: column;
    }
    .package-price span {
      font-size: 1.4rem;
      font-weight: 800;
      color: var(--primary-color);
    }
    .package-price-label {
      font-size: 0.75rem;
      color: #95a5a6;
      font-weight: 600;
      text-transform: uppercase;
    }
  </style>
`;

if (!html.includes('<!-- Premium Homepage UI Overhaul -->')) {
  html = html.replace('</head>', premiumStyles + '\n</head>');
}

// 2. Add 'package-price-label' to the featured packages
html = html.replace(/Starting from <span>/g, '<span class="package-price-label">Starting from</span><span>');

// 3. Make buttons pulse
html = html.replace(/class="btn btn-outline btn-sm"/g, 'class="btn btn-accent btn-sm" style="border-radius: 25px; padding: 10px 20px; font-weight: 700; box-shadow: 0 4px 15px rgba(255, 107, 0, 0.2);"');

fs.writeFileSync('index.html', html);
console.log('Homepage Redesign applied successfully.');
