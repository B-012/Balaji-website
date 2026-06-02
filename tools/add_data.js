const fs = require('fs');
let dataContent = fs.readFileSync('js/data.js', 'utf8');

const newPackages = `
    {
      id: "tirupati",
      title: "Tirupati Balaji VIP Darshan",
      duration: "2 Nights / 3 Days",
      price: 18500,
      image: "images/packages/tirupati.webp?v=2",
      inclusions: ["3★ Hotels", "VIP Darshan Ticket", "Private AC Cab", "Daily Breakfast"],
      description: "Experience the divine presence of Lord Venkateswara with our VIP Darshan package. Includes comfortable stay and seamless transfers from Chennai/Tirupati airport.",
      highlights: "VIP Break Darshan • Padmavathi Ammavari Temple • Kapila Theertham"
    },
    {
      id: "vaishnodevi",
      title: "Mata Vaishno Devi Yatra",
      duration: "3 Nights / 4 Days",
      price: 21000,
      image: "images/packages/vaishnodevi.webp?v=2",
      inclusions: ["4★ Hotels", "Helicopter Tickets", "Katra Transfers", "Breakfast & Dinner"],
      description: "A deeply spiritual journey to the holy shrine of Mata Vaishno Devi. We arrange priority helicopter tickets from Katra to Sanjichhat for a hassle-free yatra.",
      highlights: "Helicopter Ride to Sanjichhat • Bhairavnath Temple Ropeway • Shiv Khori Excursion"
    },
    {
      id: "amritsar",
      title: "Golden Temple & Amritsar Heritage",
      duration: "2 Nights / 3 Days",
      price: 15500,
      image: "images/packages/amritsar.webp?v=2",
      inclusions: ["Heritage Hotels", "Wagah Border Tour", "Langar Experience", "Local Guide"],
      description: "Immerse yourself in the tranquility of the Golden Temple and the patriotic fervor of the Wagah Border ceremony in the vibrant city of Amritsar.",
      highlights: "Golden Temple Darshan • Jallianwala Bagh • Wagah Border Retreat Ceremony"
    },
    {
      id: "puri",
      title: "Jagannath Puri & Konark Darshan",
      duration: "3 Nights / 4 Days",
      price: 16500,
      image: "images/packages/puri.webp?v=2",
      inclusions: ["Beachfront Hotels", "Panda Assistance", "Konark Sun Temple", "AC Transport"],
      description: "Seek blessings at the sacred Jagannath Temple in Puri and marvel at the architectural masterpiece of the Konark Sun Temple on the shores of the Bay of Bengal.",
      highlights: "Jagannath Temple Special Darshan • Konark Sun Temple • Chilika Lake Boating"
    },`;

dataContent = dataContent.replace(/(id: "varanasi",[\s\S]*?},\s*)/, '$1' + newPackages);
fs.writeFileSync('js/data.js', dataContent);
console.log('Added 4 new packages to data.js');
