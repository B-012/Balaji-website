const fs = require('fs');

const premiumStyles = `
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    /* Premium Services/About UI Overhaul */
    .sub-hero {
      background: linear-gradient(to right, rgba(10, 31, 68, 0.9), rgba(10, 31, 68, 0.7)), url('images/packages/kashmir.webp?v=2') center/cover fixed;
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
    .filter-tabs-container {
      background: white;
      padding: 15px;
      border-radius: 50px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      margin: -25px auto 40px;
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
    
    /* Glassmorphism Cards */
    .service-card, .timeline-item-content, .contact-card {
      background: rgba(255, 255, 255, 0.8) !important;
      backdrop-filter: blur(10px) !important;
      border-radius: 20px !important;
      overflow: hidden;
      box-shadow: 0 15px 35px rgba(0,0,0,0.04) !important;
      border: 1px solid rgba(0,0,0,0.02) !important;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
    }
    .service-card:hover, .timeline-item-content:hover, .contact-card:hover {
      transform: translateY(-10px) !important;
      box-shadow: 0 25px 50px rgba(0,0,0,0.1) !important;
      background: white !important;
    }
    .service-card h3 {
      font-family: 'Playfair Display', serif !important;
      font-size: 1.4rem !important;
      color: var(--primary-dark) !important;
    }
    .service-icon {
      background: linear-gradient(135deg, rgba(230,126,34,0.1) 0%, rgba(230,126,34,0.2) 100%) !important;
      color: var(--accent-color) !important;
      transition: transform 0.4s ease !important;
    }
    .service-card:hover .service-icon {
      transform: scale(1.1) rotate(5deg) !important;
    }
    .section-title {
      font-family: 'Playfair Display', serif !important;
    }
    
    /* Input modernizations */
    .services-search-wrapper .form-control {
      border: 2px solid rgba(0,0,0,0.05);
      transition: all 0.3s ease;
    }
    .services-search-wrapper .form-control:focus {
      border-color: var(--accent-color);
      box-shadow: 0 0 0 4px rgba(255,107,0,0.1);
    }
  </style>
`;

function upgradePage(filename) {
  if (fs.existsSync(filename)) {
    let html = fs.readFileSync(filename, 'utf8');
    if (!html.includes('/* Premium Services/About UI Overhaul */')) {
      html = html.replace('</head>', premiumStyles + '\n</head>');
    }
    fs.writeFileSync(filename, html);
    console.log(`Upgraded UI/UX for ${filename}`);
  }
}

upgradePage('services.html');
upgradePage('about.html');
upgradePage('contact.html');
