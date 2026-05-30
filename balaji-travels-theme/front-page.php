<?php
/**
 * Balaji Travels Theme - front-page.php custom homepage template
 */
get_header(); ?>

  <!-- Hero Slider Section -->
  <section class="hero" style="padding: 0;">
    <div class="hero-slider">
      <!-- Slide 1 (Kashmir Mountains) -->
      <div class="hero-slide active" style="background-image: url('https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?q=80&w=1920&auto=format&fit=crop');"></div>
      <!-- Slide 2 (Maldives Overwater Villas) -->
      <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1920&auto=format&fit=crop');"></div>
      <!-- Slide 3 (Swiss Alps / Europe) -->
      <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1920&auto=format&fit=crop');"></div>
    </div>
    
    <div class="container">
      <div class="hero-content">
        <span class="section-subtitle" style="color: var(--accent-color); text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">Apna Sapna, Hamari Zimmedari</span>
        <h1>Explore the World with Balaji Travels</h1>
        <p>Trusted Premium Travel Partner from Kolkata — Specializing in customized Domestic & International Holiday Packages, Flights, Hotels, IRCTC Rail Bookings, Visas, and Insurance.</p>
        <button class="btn btn-accent" onclick="openBookingModal()"><i class="fas fa-search-location"></i> Start Planning Your Trip</button>
      </div>
    </div>
  </section>

  <!-- Search / Enquiry Bar Section -->
  <div class="search-bar-wrapper">
    <div class="container">
      <div class="search-bar-container">
        <form class="search-form" id="home-search-form" onsubmit="handleFormSubmit(event, 'home-search-form')">
          <div class="form-group">
            <label><i class="fas fa-map-marker-alt"></i> Destination</label>
            <input type="text" class="form-control" placeholder="Where do you want to go?" required>
          </div>
          <div class="form-group">
            <label><i class="fas fa-calendar-alt"></i> Travel Date</label>
            <input type="date" class="form-control" required>
          </div>
          <div class="form-group">
            <label><i class="fas fa-users"></i> No. of Travelers</label>
            <select class="form-control" required>
              <option value="1">1 Person</option>
              <option value="2">2 Persons (Couple)</option>
              <option value="3-5">3-5 Persons (Family)</option>
              <option value="6+">6+ Persons (Group Tour)</option>
            </select>
          </div>
          <div class="form-group">
            <label><i class="fas fa-suitcase"></i> Package Type</label>
            <select class="form-control" required>
              <option value="domestic">Domestic Holidays</option>
              <option value="international">International Tours</option>
              <option value="religious">Spiritual / Pilgrimage</option>
              <option value="custom">Custom Itinerary</option>
            </select>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary" style="width: 100%;"><i class="fas fa-paper-plane"></i> Get Free Quote</button>
          </div>
        </form>
        <div class="form-success-message" id="home-search-form-success"></div>
      </div>
    </div>
  </div>

  <!-- Stats Bar Section -->
  <section class="stats-bar" id="stats-section" style="padding: 30px 0;">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item">
          <h3><span class="stat-count" data-target="500">0</span>+</h3>
          <p>Tours Completed</p>
        </div>
        <div class="stat-item">
          <h3><span class="stat-count" data-target="1000">0</span>+</h3>
          <p>Happy Travelers</p>
        </div>
        <div class="stat-item">
          <h3><span class="stat-count" data-target="20">0</span>+</h3>
          <p>Countries Covered</p>
        </div>
        <div class="stat-item">
          <h3>24/7</h3>
          <p>Emergency Support</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section class="why-choose-section">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Excellence in Tourism</span>
        <h2 class="section-title">Why Choose Balaji Travels?</h2>
        <p class="section-desc">Over a decade of creating stress-free, luxurious, and highly cost-effective travel experiences for Kolkata residents.</p>
      </div>
      
      <div class="why-choose-grid">
        <div class="why-card">
          <div class="why-icon"><i class="fas fa-headset"></i></div>
          <h3>24x7 Customer Support</h3>
          <p>Our dedicated assistance desk operates round-the-clock, assisting you from reservation queries up to live on-tour tracking.</p>
        </div>
        
        <div class="why-card">
          <div class="why-icon"><i class="fas fa-tags"></i></div>
          <h3>Best Price Guarantee</h3>
          <p>Thanks to our deep direct networks with premier airlines, IRCTC, and major hotel systems, we secure premium rates for you.</p>
        </div>
        
        <div class="why-card">
          <div class="why-icon"><i class="fas fa-user-shield"></i></div>
          <h3>Expert Guidance</h3>
          <p>Our highly experienced tour managers and local expert guides accompany group departures to ensure stress-free sightseeing.</p>
        </div>
        
        <div class="why-card">
          <div class="why-icon"><i class="fas fa-map-marked-alt"></i></div>
          <h3>Customized Packages</h3>
          <p>Tailor-made itineraries crafted matching your exact interests, dates, and budget preference with private cars.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Tour Packages Section -->
  <section class="section-bg">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Aspirational Getaways</span>
        <h2 class="section-title">Featured Tour Packages</h2>
        <p class="section-desc">Handcrafted hot-selling holidays from Kolkata designed to provide the ultimate travel comfort.</p>
      </div>
      
      <div class="packages-grid">
        <!-- Kashmir Package -->
        <div class="package-card">
          <div class="package-img-wrapper">
            <span class="package-tag">Nature / Hills</span>
            <img src="https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?q=80&w=600&auto=format&fit=crop" alt="Kashmir Tour Package from Kolkata">
            <span class="package-duration">7 Nights / 8 Days</span>
          </div>
          <div class="package-body">
            <h3>Heavenly Kashmir Package</h3>
            <p class="package-desc">Explore beautiful snow-covered valleys of Srinagar, Gulmarg, Pahalgam, and Sonamarg with Shikara rides.</p>
            <div class="package-inclusions">
              <span class="inclusion-tag">3★/4★ Hotels</span>
              <span class="inclusion-tag">Houseboat Stay</span>
              <span class="inclusion-tag">Daily Meals</span>
              <span class="inclusion-tag">Private Cab</span>
            </div>
            <div class="package-footer">
              <div class="package-price">
                Starting from <span>₹18,499</span>
              </div>
              <button class="btn btn-outline btn-sm" onclick="openBookingModal('Kashmir Tour Package')">Enquire Now</button>
            </div>
          </div>
        </div>
        
        <!-- Chardham Package -->
        <div class="package-card">
          <div class="package-img-wrapper">
            <span class="package-tag">Spiritual</span>
            <img loading="lazy" src="https://images.unsplash.com/photo-1609766418204-94aef493bdf4?q=80&w=600&auto=format&fit=crop" alt="Chardham Yatra Package from Kolkata">
            <span class="package-duration">11 Nights / 12 Days</span>
          </div>
          <div class="package-body">
            <h3>Sacred Chardham Pilgrimage</h3>
            <p class="package-desc">Holy pilgrimage to Yamunotri, Gangotri, Kedarnath, and Badrinath with VIP darshan slips and complete safety.</p>
            <div class="package-inclusions">
              <span class="inclusion-tag">Ashram Stay</span>
              <span class="inclusion-tag">Pure Veg Meals</span>
              <span class="inclusion-tag">VIP Pass</span>
              <span class="inclusion-tag">Med Support</span>
            </div>
            <div class="package-footer">
              <div class="package-price">
                Starting from <span>₹32,999</span>
              </div>
              <button class="btn btn-outline btn-sm" onclick="openBookingModal('Chardham Yatra Package')">Enquire Now</button>
            </div>
          </div>
        </div>
        
        <!-- Maldives Honeymoon -->
        <div class="package-card">
          <div class="package-img-wrapper">
            <span class="package-tag">Honeymoon / Luxury</span>
            <img src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=600&auto=format&fit=crop" alt="Maldives Honeymoon Package from Kolkata">
            <span class="package-duration">4 Nights / 5 Days</span>
          </div>
          <div class="package-body">
            <h3>Maldives Overwater Honeymoon</h3>
            <p class="package-desc">Indulge in romantic private overwater villas, crystalline ocean entries, and sunset cruises with premium meals.</p>
            <div class="package-inclusions">
              <span class="inclusion-tag">Water Villa</span>
              <span class="inclusion-tag">All Meals & Drinks</span>
              <span class="inclusion-tag">Speedboat Transfer</span>
            </div>
            <div class="package-footer">
              <div class="package-price">
                Starting from <span>₹74,999</span>
              </div>
              <button class="btn btn-outline btn-sm" onclick="openBookingModal('Maldives Honeymoon Package')">Enquire Now</button>
            </div>
          </div>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 50px;">
        <a href="<?php echo esc_url( home_url( '/tour-packages/' ) ); ?>" class="btn btn-primary"><i class="fas fa-list"></i> View All Tour Packages</a>
      </div>
    </div>
  </section>

  <!-- Services Overview Grid Section -->
  <section class="services-overview-section">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Full-Service Capabilities</span>
        <h2 class="section-title">End-To-End Travel Services</h2>
        <p class="section-desc">From reservations to document verifications, we handle everything under one roof.</p>
      </div>
      
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-plane"></i></div>
          <h3>Flight Booking</h3>
          <p>Instant domestic & international ticketing with corporate discounts and seat blocking capabilities.</p>
        </div>
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-hotel"></i></div>
          <h3>Hotel Bookings</h3>
          <p>Direct bookings across budget to luxury 5-star properties with early check-in flexibilities.</p>
        </div>
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-train"></i></div>
          <h3>IRCTC Train Bookings</h3>
          <p>Authorized train ticketing assistance, tatkal processing, and tourist rail tour bookings.</p>
        </div>
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-passport"></i></div>
          <h3>Visa Application</h3>
          <p>Step-by-step document check lists, filing assistance, and embassy interview schedules.</p>
        </div>
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-shield-halved"></i></div>
          <h3>Travel Insurance</h3>
          <p>Protect your health, baggage, and booking amounts globally with leading insurance providers.</p>
        </div>
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-ship"></i></div>
          <h3>Cruises</h3>
          <p>Exquisite ocean liner and luxury river cruise bookings across global blue waterways.</p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 45px;">
        <a href="<?php echo esc_url( home_url( '/services/' ) ); ?>" class="btn btn-outline"><i class="fas fa-concierge-bell"></i> View All 26 Services</a>
      </div>
    </div>
  </section>

  <!-- Popular Destinations Grid Section -->
  <section class="section-bg">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Curated Inspo</span>
        <h2 class="section-title">Popular Destinations</h2>
        <p class="section-desc">Top holiday hotspots highly preferred by travel enthusiasts from West Bengal.</p>
      </div>
      
      <div class="destinations-gallery">
        <div class="destination-item">
          <img src="https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?q=80&w=600&auto=format&fit=crop" alt="Kashmir Tourism">
          <div class="destination-overlay">
            <h3>Kashmir</h3>
            <span>7 Packages Available</span>
          </div>
        </div>
        <div class="destination-item">
          <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop" alt="Rajasthan Palace">
          <div class="destination-overlay">
            <h3>Rajasthan</h3>
            <span>4 Packages Available</span>
          </div>
        </div>
        <div class="destination-item">
          <img src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=600&auto=format&fit=crop" alt="Goa Beaches">
          <div class="destination-overlay">
            <h3>Goa</h3>
            <span>3 Packages Available</span>
          </div>
        </div>
        <div class="destination-item">
          <img src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=600&auto=format&fit=crop" alt="Kerala Backwaters">
          <div class="destination-overlay">
            <h3>Kerala</h3>
            <span>5 Packages Available</span>
          </div>
        </div>
        <div class="destination-item">
          <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop" alt="Dubai Cityscape">
          <div class="destination-overlay">
            <h3>Dubai</h3>
            <span>4 Packages Available</span>
          </div>
        </div>
        <div class="destination-item">
          <img src="https://images.unsplash.com/photo-1565967511849-75a6fd7f9a27?q=80&w=600&auto=format&fit=crop" alt="Singapore Marina">
          <div class="destination-overlay">
            <h3>Singapore</h3>
            <span>6 Packages Available</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Reviews Carousel Section -->
  <section class="testimonials-section">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Client Feedback</span>
        <h2 class="section-title">Loved By 1000+ Happy Travelers</h2>
        <p class="section-desc">Google reviews from actual travelers who toured with Balaji Travels from Kolkata.</p>
      </div>
      
      <div class="testimonials-slider-container">
        <div class="testimonial-track" id="testimonial-track">
          <!-- Loaded Dynamically via JS data -->
        </div>
        <div class="carousel-dots" id="carousel-dots">
          <!-- Dots Loaded Dynamically -->
        </div>
      </div>
    </div>
  </section>

  <!-- Accreditations & Airline Partners Section -->
  <section class="partners-section" style="padding: 40px 0; background: var(--white); border-top: 1px solid var(--border-color);">
    <div class="container">
      <div class="section-header" style="margin-bottom: 25px;">
        <span class="section-subtitle">Our Accreditations</span>
        <h2 class="section-title" style="font-size: 2rem;">Authorized Travel Partners</h2>
      </div>
      <div class="partners-grid" style="display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 30px; opacity: 0.8;">
        <!-- IATA -->
        <img loading="lazy" src="https://logo.clearbit.com/iata.org" alt="IATA Certified" style="height: 60px; filter: grayscale(100%); transition: var(--transition-fast);" onmouseover="this.style.filter='grayscale(0%)'" onmouseout="this.style.filter='grayscale(100%)'">
        <!-- Airlines -->
        <img loading="lazy" src="https://logo.clearbit.com/airindia.in" alt="Air India" style="height: 50px; filter: grayscale(100%); transition: var(--transition-fast);" onmouseover="this.style.filter='grayscale(0%)'" onmouseout="this.style.filter='grayscale(100%)'">
        <img loading="lazy" src="https://logo.clearbit.com/goindigo.in" alt="IndiGo" style="height: 50px; filter: grayscale(100%); transition: var(--transition-fast);" onmouseover="this.style.filter='grayscale(0%)'" onmouseout="this.style.filter='grayscale(100%)'">
        <img loading="lazy" src="https://logo.clearbit.com/emirates.com" alt="Emirates" style="height: 50px; filter: grayscale(100%); transition: var(--transition-fast);" onmouseover="this.style.filter='grayscale(0%)'" onmouseout="this.style.filter='grayscale(100%)'">
        <img loading="lazy" src="https://logo.clearbit.com/qatarairways.com" alt="Qatar Airways" style="height: 50px; filter: grayscale(100%); transition: var(--transition-fast);" onmouseover="this.style.filter='grayscale(0%)'" onmouseout="this.style.filter='grayscale(100%)'">
        <img loading="lazy" src="https://logo.clearbit.com/singaporeair.com" alt="Singapore Airlines" style="height: 50px; filter: grayscale(100%); transition: var(--transition-fast);" onmouseover="this.style.filter='grayscale(0%)'" onmouseout="this.style.filter='grayscale(100%)'">
        <img loading="lazy" src="https://logo.clearbit.com/airvistara.com" alt="Vistara" style="height: 50px; filter: grayscale(100%); transition: var(--transition-fast);" onmouseover="this.style.filter='grayscale(0%)'" onmouseout="this.style.filter='grayscale(100%)'">
        <!-- IRCTC -->
        <img loading="lazy" src="https://logo.clearbit.com/irctc.co.in" alt="IRCTC Authorized" style="height: 50px; filter: grayscale(100%); transition: var(--transition-fast);" onmouseover="this.style.filter='grayscale(0%)'" onmouseout="this.style.filter='grayscale(100%)'">
      </div>
    </div>
  </section>

  <!-- CTA Banner Section -->
  <section class="cta-banner">
    <div class="container">
      <div class="cta-content">
        <h2>Start Planning Your Next Holiday Today</h2>
        <p>Special direct booking packages are running for Kashmir, Chardham Pilgrimage, Dubai, and Thailand. Get your customized itinerary today.</p>
        <div class="cta-actions">
          <button class="btn btn-accent" onclick="openBookingModal()"><i class="fas fa-envelope-open-text"></i> Request Free Quote</button>
          <a href="tel:+919339288770" class="btn btn-outline" style="border-color: white; color: white;"><i class="fas fa-phone-alt"></i> Call Us Now</a>
          <a href="https://wa.me/919339288770?text=Hi,%20I'm%20planning%20a%20vacation.%20Please%20suggest%20some%20tour%20packages." target="_blank" class="btn cta-btn-whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp Us</a>
        </div>
      </div>
    </div>
  </section>

<?php get_footer(); ?>
