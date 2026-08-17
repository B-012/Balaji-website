const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '..');

const schemaCode = `
  <!-- LocalBusiness Schema Markup for SEO -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": "Balaji Travels",
      "image": "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?q=80&w=1000",
      "@id": "https://balaji-website-zeta.vercel.app/#agency",
      "url": "https://balaji-website-zeta.vercel.app",
      "telephone": "+919339288770",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12, Crooked Lane",
        "addressLocality": "Kolkata",
        "addressRegion": "West Bengal",
        "postalCode": "700069",
        "addressCountry": "IN"
      }
    }
  </script>
`;

['about.html', 'contact.html'].forEach(filename => {
    const filePath = path.join(directoryPath, filename);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (!content.includes('LocalBusiness Schema Markup')) {
            content = content.replace('</head>', schemaCode + '\n</head>');
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Added Schema to: ' + filename);
        } else {
            console.log('Schema already exists in: ' + filename);
        }
    }
});
