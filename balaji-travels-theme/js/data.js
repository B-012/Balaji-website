/**
 * Balaji Travels - Global Data Structure
 * Acts as the centralized database for services, tour packages, testimonials, and blog posts.
 */

const travelData = {
  // 26 Services requested by the user
  services: [
    {
      id: "all-inclusive",
      title: "All Inclusive Packages",
      icon: "fa-suitcase-rolling",
      category: "tours",
      description: "Hassle-free vacations with flights, hotels, meals, sightseeing, and local transfers included in a single price."
    },
    {
      id: "corporate-travel",
      title: "Corporate Travel",
      icon: "fa-briefcase",
      category: "business",
      description: "End-to-end business travel solutions including MICE, conference bookings, team-building retreats, and executive travel."
    },
    {
      id: "cruises",
      title: "Cruises",
      icon: "fa-ship",
      category: "tours",
      description: "Luxurious ocean and river cruise bookings worldwide, featuring top liners with world-class dining and entertainment."
    },
    {
      id: "day-trips",
      title: "Day Trips",
      icon: "fa-calendar-day",
      category: "tours",
      description: "Short weekend excursions and local day tours around Kolkata, ideal for quick getaways and family outings."
    },
    {
      id: "excursion-booking",
      title: "Excursion Booking",
      icon: "fa-mountain",
      category: "tours",
      description: "Exciting adventure excursions, outdoor sightseeing activities, and customized group experiences."
    },
    {
      id: "family-trips",
      title: "Family Trips",
      icon: "fa-people-roof",
      category: "tours",
      description: "Specially curated family holidays focusing on comfort, kid-friendly activities, and memorable experiences for all age groups."
    },
    {
      id: "flight-booking",
      title: "Flight Booking (Domestic & International)",
      icon: "fa-plane-departure",
      category: "ticketing",
      description: "Instant booking and reservations for domestic and international routes at highly competitive, low fares."
    },
    {
      id: "flight-tickets",
      title: "Flight Tickets",
      icon: "fa-ticket",
      category: "ticketing",
      description: "Quick air ticketing, modifications, cancellations, and premium seat selections for all major domestic airlines."
    },
    {
      id: "group-travel",
      title: "Group Travel & Group Tours",
      icon: "fa-users",
      category: "tours",
      description: "Fun, escorted group departures with dedicated tour managers, structured itineraries, and shared laughter."
    },
    {
      id: "hotel-bookings",
      title: "Hotel Bookings",
      icon: "fa-hotel",
      category: "booking",
      description: "Affordable luxury stays, boutique hotels, budget guest houses, and 5-star resort bookings across India and abroad."
    },
    {
      id: "international-services",
      title: "International Services",
      icon: "fa-globe-asia",
      category: "international",
      description: "Global travel assistance including international holiday customization, foreign exchange guidance, and translation services."
    },
    {
      id: "tours-sightseeing",
      title: "Tours & Sightseeing",
      icon: "fa-camera-retro",
      category: "tours",
      description: "Guided local sightseeing packages, monument entries, historical tours, and expert English/Hindi-speaking local guides."
    },
    {
      id: "travel-insurance",
      title: "Travel Insurance",
      icon: "fa-shield-halved",
      category: "booking",
      description: "Comprehensive medical and trip cancellation coverage protecting you against flight delays, lost baggage, and emergencies."
    },
    {
      id: "ticketing",
      title: "Ticketing (Air, Rail, Bus)",
      icon: "fa-clipboard-list",
      category: "ticketing",
      description: "Unified booking desk for train, bus, and flight bookings, catering to all travel preferences and budgets."
    },
    {
      id: "train-tickets",
      title: "Train Tickets & Rail Booking",
      icon: "fa-train",
      category: "ticketing",
      description: "Fast and convenient booking of Indian Railways tickets, offering waitlist clearance assistance and tatkal bookings."
    },
    {
      id: "international-flight-bookings",
      title: "International Flight Bookings",
      icon: "fa-plane",
      category: "ticketing",
      description: "Special corporate and discount fares for long-haul international flights to US, UK, Europe, Australia, and Asia."
    },
    {
      id: "travel-plans",
      title: "Travel Plans & Travel Packages",
      icon: "fa-compass",
      category: "tours",
      description: "Custom-made trip planning with flexible itineraries designed according to your specific dates, interests, and budget."
    },
    {
      id: "customer-support",
      title: "24x7 Customer Support",
      icon: "fa-headset",
      category: "booking",
      description: "Round-the-clock emergency support line assisting travelers with live re-routing, hotel changes, or on-trip emergencies."
    },
    {
      id: "business-tour",
      title: "Business Tour",
      icon: "fa-user-tie",
      category: "business",
      description: "Optimized corporate layouts, private transfers, premium lounges, and boardroom access for high-profile business visits."
    },
    {
      id: "chardham-service",
      title: "Chardham Package",
      icon: "fa-om",
      category: "religious",
      description: "Expertly managed spiritual pilgrimage to Yamunotri, Gangotri, Kedarnath, and Badrinath with VIP Darshan priority."
    },
    {
      id: "city-travel",
      title: "City Travel",
      icon: "fa-city",
      category: "tours",
      description: "Bespoke city experiences, heritage walks in Kolkata, food tours, and structured intra-city transfers."
    },
    {
      id: "desert-safari-service",
      title: "Desert Safari",
      icon: "fa-dromedary",
      category: "tours",
      description: "Thrilling dune bashing, camel rides, traditional belly dance performances, and BBQ buffet dinners under the desert sky."
    },
    {
      id: "domestic-intl-packages",
      title: "Domestic & International Tour Packages",
      icon: "fa-map-location-dot",
      category: "tours",
      description: "Wide collection of ready-to-book and bespoke travel bundles stretching from the Himalayas to global coastal havens."
    },
    {
      id: "kashmir-service",
      title: "Kashmir Package",
      icon: "fa-snowflake",
      category: "tours",
      description: "Enchanting journeys to Srinagar, Gulmarg, Pahalgam, and Sonamarg including premium Shikara rides on Dal Lake."
    },
    {
      id: "visa-assistance",
      title: "Visa Application Assistance",
      icon: "fa-passport",
      category: "booking",
      description: "Expert assistance with visa documentation, application filing, embassy scheduling, and mock interviews."
    },
    {
      id: "irctc-bookings",
      title: "IRCTC / Train Bookings",
      icon: "fa-train-subway",
      category: "ticketing",
      description: "Authorized agency-level booking for standard, luxury, and tourist trains operating under Indian Railways."
    }
  ],

  // 13 Custom tour packages with full descriptions and metadata
  packages: [
    {
      id: "kashmir",
      title: "Heavenly Kashmir Package",
      duration: "7 Nights / 8 Days",
      price: 18499,
      category: "domestic",
      type: "Honeymoon / Nature",
      image: "images/packages/kashmir.png",
      inclusions: ["3★/4★ Hotel", "Houseboat Stay", "Daily Breakfast & Dinner", "Shikara Ride", "Private Cab", "Sightseeing"],
      description: "Experience the paradise on earth. Explore the scenic valleys of Srinagar, Gulmarg, Pahalgam, and Sonamarg, with a magical night stay in a traditional luxury houseboat on Dal Lake.",
      highlights: "Srinagar Shikara Ride • Snow activities in Gulmarg • Betaab Valley in Pahalgam"
    },
    {
      id: "chardham",
      title: "Sacred Chardham Yatra",
      duration: "11 Nights / 12 Days",
      price: 32999,
      category: "religious",
      type: "Spiritual / Religious",
      image: "images/packages/chardham.png",
      inclusions: ["Hotels & Ashrams", "Pure Veg Meals", "Group Transfers", "Medical Assistance", "VIP Darshan Slips", "Guide"],
      description: "A soul-purifying pilgrimage to Yamunotri, Gangotri, Kedarnath, and Badrinath. Deeply structured for senior citizens and families with ultimate comfort, safety, and priority access.",
      highlights: "VIP Kedarnath Darshan • Holy bath at Gangotri • Scenic Himalayan driving guides"
    },
    {
      id: "rajasthan",
      title: "Royal Rajasthan & Desert Safari",
      duration: "5 Nights / 6 Days",
      price: 14999,
      category: "domestic",
      type: "Adventure / Heritage",
      image: "images/packages/rajasthan.jpg",
      inclusions: ["Heritage Havelis", "Desert Tent Stay", "Breakfast & Traditional Dinner", "Camel Safari", "Folk Dance Show", "Sightseeing"],
      description: "Immerse yourself in royalty. Tour the majestic palaces of Jaipur, Udaipur, and Jodhpur, and spend a night in luxury Swiss desert camps amidst the golden dunes of Jaisalmer.",
      highlights: "Jaipur Amer Fort Elephant Ride • Jaisalmer Desert Camping • Udaipur Boat Cruise"
    },
    {
      id: "goa",
      title: "Vibrant Goa Beach Escape",
      duration: "4 Nights / 5 Days",
      price: 11499,
      category: "domestic",
      type: "Honeymoon / Adventure",
      image: "images/packages/goa.jpg",
      inclusions: ["Near-Beach 3★ Resort", "Daily Breakfast", "South Goa Tour", "North Goa Tour", "Airport Transfers", "Cruise Ticket"],
      description: "Relax, party, and rejuvenate. Enjoy pristine beaches, historic Portuguese churches, vibrant markets, and adventurous water sports in both North and South Goa.",
      highlights: "Baga Beach Water Sports • Mandovi River Cruise • Basilica of Bom Jesus"
    },
    {
      id: "kerala",
      title: "Kerala Backwaters & Hills",
      duration: "5 Nights / 6 Days",
      price: 16999,
      category: "domestic",
      type: "Honeymoon / Nature",
      image: "images/packages/kerala.jpg",
      inclusions: ["Munnar Hill Resort", "Alleppey Houseboat", "Daily Breakfast & Dinner", "All Houseboat Meals", "Spice Plantation Tour", "Cab"],
      description: "Discover 'God's Own Country'. Wander through the lush green tea gardens of Munnar, explore the wildlife in Thekkady, and cruise along the tranquil backwaters of Alleppey in a private houseboat.",
      highlights: "Munnar Tea Estate Walk • Thekkady Wildlife Boat Tour • Private Houseboat Cruise"
    },
    {
      id: "andaman",
      title: "Exotic Andaman Islands",
      duration: "6 Nights / 7 Days",
      price: 24499,
      category: "domestic",
      type: "Adventure / Honeymoon",
      image: "images/packages/andaman.jpg",
      inclusions: ["Luxury Beach Resorts", "Ferry Tickets (Makruzz)", "Breakfast Included", "Radhanagar Beach Visit", "Snorkeling Trip", "Transfers"],
      description: "Escape to tropical paradise. Lounge on Asia's best beach (Radhanagar Beach), witness the historic cellular jail light show, and indulge in scuba and snorkeling in Havelock & Neil Islands.",
      highlights: "Cellular Jail Sound & Light • Radhanagar Beach Sunset • Scuba diving in Havelock"
    },
    {
      id: "dubai",
      title: "Glamorous Dubai & Abu Dhabi",
      duration: "5 Nights / 6 Days",
      price: 52999,
      category: "international",
      type: "Adventure / Group",
      image: "images/packages/dubai.jpg",
      inclusions: ["4★ Premium Hotel", "Daily Breakfast", "Burj Khalifa 124th Floor", "Desert Safari with BBQ", "Dhow Cruise", "Visa & Tickets"],
      description: "Explore the city of future. Witness the world's tallest building, enjoy thrilling desert dune bashing, dine on a romantic cruise, and tour the majestic Sheikh Zayed Grand Mosque in Abu Dhabi.",
      highlights: "Burj Khalifa Top Floor View • Abu Dhabi Ferrari World • Arabian Desert Safari"
    },
    {
      id: "thailand",
      title: "Amazing Thailand (Bangkok & Pattaya)",
      duration: "4 Nights / 5 Days",
      price: 34999,
      category: "international",
      type: "Group / Adventure",
      image: "images/packages/thailand.jpg",
      inclusions: ["3★/4★ Hotels", "Daily Breakfast", "Coral Island Tour with Lunch", "Bangkok Temple Tour", "Airport Transfers", "Visa Support"],
      description: "The ultimate budget international getaway. Experience the lively nightlife of Pattaya, beautiful Coral Island beaches, and rich golden temples and shopping centers in Bangkok.",
      highlights: "Coral Island Speedboat Tour • Reclining Buddha Temple • Chao Phraya Dinner Cruise"
    },
    {
      id: "singapore-malaysia",
      title: "Spectacular Singapore & Malaysia",
      duration: "6 Nights / 7 Days",
      price: 68999,
      category: "international",
      type: "Group / Corporate",
      image: "images/packages/singapore.png",
      inclusions: ["3★/4★ Stays", "Daily Breakfast", "Universal Studios Ticket", "Sentosa Island Cable Car", "Kuala Lumpur City Tour", "Genting Highlands Tour"],
      description: "Double country delight. Experience the cutting-edge attractions of Singapore like Gardens by the Bay and Universal Studios, combined with the culture and high-altitude theme parks of Malaysia.",
      highlights: "Universal Studios Singapore • Night Safari • Genting Cable Car Ride"
    },
    {
      id: "europe",
      title: "Classic Europe Highlights",
      duration: "9 Nights / 10 Days",
      price: 154999,
      category: "international",
      type: "Group / Honeymoon",
      image: "images/packages/europe.jpg",
      inclusions: ["4★ Star Hotels", "Buffet Breakfast & Indian Dinners", "Schengen Visa Filing", "Eiffel Tower 2nd Level", "Mt. Titlis Swiss Alps", "Luxury Coach"],
      description: "A dream journey across Europe's finest treasures: Paris, Brussels, Amsterdam, Frankfurt, and the stunning mountain ranges of Switzerland.",
      highlights: "Eiffel Tower Panoramic View • Seine River Cruise • Mount Titlis Snow Adventure"
    },
    {
      id: "maldives",
      title: "Luxurious Maldives Honeymoon",
      duration: "4 Nights / 5 Days",
      price: 74999,
      category: "international",
      type: "Honeymoon / Nature",
      image: "images/packages/maldives.jpg",
      inclusions: ["4★ Overwater Villa", "All-Inclusive Meals & Drinks", "Speedboat Airport Transfers", "Water Sports Gear", "Welcome Bottle of Wine", "Taxes"],
      description: "Indulge in ultimate romance and luxury. Wake up to direct crystal blue ocean access from your private overwater villa, and dine under the stars with world-class tropical hospitality.",
      highlights: "Overwater villa stay • Snorkeling over live reefs • Sunset dolphin cruise"
    },
    {
      id: "manali",
      title: "Scenic Manali & Shimla Hills",
      duration: "5 Nights / 6 Days",
      price: 12499,
      category: "domestic",
      type: "Honeymoon / Nature",
      image: "images/packages/manali.jpg",
      inclusions: ["Deluxe Valley View Rooms", "Daily Breakfast & Dinner", "Solang Valley Excursion", "Shimla Mall Road Walk", "Private Cab", "Sightseeing"],
      description: "Breathe in the fresh mountain air of Himachal. Stroll through the pine valleys of Manali, witness snow activities at Solang Valley, and experience colonial heritage in Shimla.",
      highlights: "Solang Valley Paragliding • Atal Tunnel Crossway • Jakhoo Temple Shimla"
    },
    {
      id: "northeast",
      title: "Enchanting Northeast India",
      duration: "6 Nights / 7 Days",
      price: 19999,
      category: "domestic",
      type: "Adventure / Nature",
      image: "images/packages/northeast.jpg",
      inclusions: ["Premium Hotels", "Daily Breakfast & Dinner", "Tsomgo Lake Excursion", "Darjeeling Sunrise Tour", "Meghalaya Living Root Bridge", "Private SUV"],
      description: "Explore the misty hills of Darjeeling, the stunning frozen lakes of Sikkim (Gangtok), and the unique living root bridges and cleanest villages of Meghalaya (Shillong).",
      highlights: "Tiger Hill Darjeeling Sunrise • Gangtok Ropeway • Cherrapunji Waterfalls"
    },
    {
      id: "bhutan",
      title: "Mystical Bhutan (Land of Thunder Dragon)",
      duration: "5 Nights / 6 Days",
      price: 28999,
      category: "international",
      type: "Adventure / Culture",
      image: "images/packages/bhutan.jpg",
      inclusions: ["3★/4★ Hotels", "All Meals Included", "Phuentsholing Transfer", "Thimphu Sightseeing", "Tiger's Nest Trek", "SDF Taxes"],
      description: "Discover the last great Himalayan kingdom. Experience the unique culture of Thimphu and Paro, and hike up to the iconic Tiger's Nest Monastery perched on a cliff edge.",
      highlights: "Tiger's Nest Hike • Punakha Dzong • Thimphu Buddha Dordenma"
    },
    {
      id: "srilanka",
      title: "Sri Lanka Tropical Paradise",
      duration: "6 Nights / 7 Days",
      price: 36999,
      category: "international",
      type: "Nature / Heritage",
      image: "images/packages/srilanka.jpg",
      inclusions: ["Premium Resorts", "Daily Breakfast & Dinner", "Kandy Temple of Tooth", "Nuwara Eliya Tea Gardens", "Bentota Beach", "Private AC Car"],
      description: "Experience the teardrop of India. Explore ancient ruins, lush tea estates in Nuwara Eliya, elephant orphanages, and the pristine golden beaches of Bentota.",
      highlights: "Pinnawala Elephant Orphanage • Kandy Cultural Show • Bentota Water Sports"
    }
  ],

  // 6 Premium customer reviews (Google style)
  testimonials: [
    {
      name: "Arijit Sen",
      location: "Behala, Kolkata",
      trip: "Kashmir Group Tour",
      rating: 5,
      date: "May 2026",
      text: "Outstanding service from Balaji Travels! The tour manager was incredibly helpful, hotels in Srinagar and Pahalgam were top-notch, and the food was delicious. Highly recommended travel agency in Kolkata!",
      avatar: "avatar1.jpg"
    },
    {
      name: "Preeti Sharma",
      location: "Salt Lake, Kolkata",
      trip: "Maldives Honeymoon",
      rating: 5,
      date: "April 2026",
      text: "They designed a perfect honeymoon package for us. The overwater villa in Maldives was magnificent, and the private speedboat transfers were extremely smooth. Seamless bookings!",
      avatar: "avatar2.jpg"
    },
    {
      name: "Rajesh Mukherjee",
      location: "Garia, Kolkata",
      trip: "Chardham Yatra",
      rating: 5,
      date: "May 2026",
      text: "We were very worried about sending our elderly parents to Chardham, but Balaji Travels handled everything flawlessly. Helicopter bookings, VIP Darshans, and doctor-on-call. Absolutely professional!",
      avatar: "avatar3.jpg"
    },
    {
      name: "Sneha Roy",
      location: "Howrah, West Bengal",
      trip: "Europe Group Tour",
      rating: 5,
      date: "March 2026",
      text: "I booked an international group tour to Paris and Switzerland. Visa processing was done very swiftly by their team. Dynamic sightseeing, luxury buses, and tasty Indian dinners were provided throughout.",
      avatar: "avatar4.jpg"
    },
    {
      name: "Vikramjit Banerjee",
      location: "New Town, Kolkata",
      trip: "Corporate MICE - Dubai",
      rating: 5,
      date: "February 2026",
      text: "Superb management for our corporate conference trip to Dubai. 45 team members, luxury hotels, and conference rooms were booked at amazing prices. Best corporate travel agency in West Bengal.",
      avatar: "avatar5.jpg"
    },
    {
      name: "Ananya Das",
      location: "Dunlop, Kolkata",
      trip: "Rajasthan Desert Safari",
      rating: 4,
      date: "January 2026",
      text: "Very warm experience. The Jaisalmer desert camp was fantastic, and camel safari was full of fun. Special thanks to Balaji Travels for tailoring the itinerary to our flight timings.",
      avatar: "avatar6.jpg"
    },
    {
      name: "Saurav Chatterjee",
      location: "Jadavpur, Kolkata",
      trip: "Andaman & Nicobar Islands",
      rating: 5,
      date: "June 2026",
      text: "We just returned from our Andaman trip, and it was spectacular! Scuba diving in Havelock and the cellular jail light & sound show were perfectly organized. The local coordinators were always available.",
      avatar: "avatar7.jpg"
    },
    {
      name: "Roshni Agarwal",
      location: "Alipore, Kolkata",
      trip: "Kerala Backwaters & Munnar",
      rating: 5,
      date: "August 2026",
      text: "Balaji Travels gave us the best price for our Kerala trip. The houseboat in Alleppey was a dream, and the treehouse stay in Munnar was unforgettable. Highly professional and trustworthy team.",
      avatar: "avatar8.jpg"
    },
    {
      name: "Amitabh Bhattacharya",
      location: "Siliguri, West Bengal",
      trip: "Bhutan Cultural Tour",
      rating: 5,
      date: "September 2026",
      text: "Our family trip to Bhutan was seamless. The permit arrangements, Indian meals, and the luxury SUV provided for the Tiger's Nest trek were excellent. They truly understand what travelers need.",
      avatar: "avatar9.jpg"
    }
  ],

  // Blog / Travel Tips articles
  blog: [
    {
      id: "kolkata-travel-guide",
      title: "Top 10 International Destinations from Kolkata with Direct Flights",
      category: "international",
      date: "May 15, 2026",
      author: "Balaji Editor",
      image: "blog-intl.jpg",
      readTime: "5 min read",
      summary: "Planning your next international trip from CCU airport? Here is a curated list of countries offering easy direct flights and simplified visa processes for Kolkata residents.",
      content: "Kolkata's Netaji Subhash Chandra Bose International Airport has expanded its connectivity immensely in recent years. Today, destinations like Bangkok, Singapore, Kuala Lumpur, Dubai, Doha, and even flights to Europe and Maldives have become incredibly accessible. In this guide, we break down the flight durations, average ticket pricing from Kolkata, and visa requirements for the top 10 international hotspots so you can plan your next dream vacation with Balaji Travels..."
    },
    {
      id: "chardham-yatra-tips",
      title: "Chardham Yatra 2026: Complete Preparation & Health Tips for Pilgrims",
      category: "domestic",
      date: "April 28, 2026",
      author: "Spiritual Guide",
      image: "blog-chardham.jpg",
      readTime: "8 min read",
      summary: "Embarking on the holy pilgrimage to Kedarnath, Badrinath, Yamunotri, and Gangotri? Here is a complete safety, fitness, and packing guide tailored for Bengali travelers.",
      content: "The Chardham Yatra is one of the most sacred pilgrimages, but it involves traversing high-altitude terrains with extreme weather fluctuations. To ensure a safe and spiritually fulfilling journey, prep work is key. We detail standard medical requirements, physical conditioning exercises to do 30 days before, essential warm clothing checklist, online bio-metric registrations, and how Balaji Travels provides specialized helpers, vegetarian food options, and medical support on-site..."
    },
    {
      id: "budget-travel-hacks",
      title: "How to Secure the Best Airfares & Hotel Deals: 7 Travel Agency Hacks",
      category: "budget",
      date: "March 10, 2026",
      author: "Flight Desk Expert",
      image: "blog-hacks.jpg",
      readTime: "4 min read",
      summary: "Is online booking always cheaper? Learn how professional agencies access private corporate rates, bulk ticketing deals, and why direct consultation saves thousands.",
      content: "Many travelers believe that searching countless third-party OTA websites is the only way to get cheap tickets. However, registered travel agents have direct GDS portals, volume contracts, and package deals that aren't visible to the public. In this blog, we reveal how Balaji Travels leverages partner networks to secure massive discounts on luxury resort bookings, tatkal train bookings, and international group flight tickets..."
    }
  ]
};

// Expose data globally
window.travelData = travelData;
