<?php
/**
 * Template Name: About Us Template
 * Description: Dynamic custom layout for the About Us page of Balaji Travels.
 */
get_header(); ?>

  <!-- Subpage Hero / Breadcrumbs -->
  <section class="sub-hero">
    <div class="container">
      <h1>About Balaji Travels</h1>
      <div class="breadcrumbs">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
        <i class="fas fa-chevron-right" style="font-size: 0.75rem; align-self: center;"></i>
        <span>About Us</span>
      </div>
    </div>
  </section>

  <!-- Company Story Section -->
  <section class="company-story-section">
    <div class="container">
      <div class="grid-split-2-1">
        <div>
          <span class="section-subtitle">Since 2012</span>
          <h2 class="section-title" style="margin-bottom: 25px;">Crafting Perfect Journeys from Kolkata</h2>
          <p style="margin-bottom: 18px; font-size: 1.05rem; color: var(--text-dark); line-height: 1.7;">
            Balaji Travels is a premier full-service travel agency and tour operator based in the heart of <strong>Kolkata, West Bengal</strong>. Over the past decade, we have established ourselves as one of the most reliable and premium names in the tourism industry, helping over 1,000 travelers realize their holiday dreams.
          </p>
          <p style="margin-bottom: 18px; color: var(--text-muted);">
            Founded on the values of absolute transparency, quality hospitality, and client safety, we curate bespoke domestic and international itineraries. Whether it is the tranquil snows of Kashmir, the holy altars of the Chardham Yatra, the backwaters of Kerala, or premium overwater Maldives escapes, we design them with comfort and local luxury.
          </p>
          <p style="margin-bottom: 25px; color: var(--text-muted);">
            Our company motto, <strong style="color: var(--primary-color);">"Apna Sapna, Hamari Zimmedari"</strong>, sums up our entire culture. We take complete ownership of your travel requirements—from ticketing, documentation, visa scheduling, to hotel checks—so that all you do is travel, create memories, and smile.
          </p>
          
          <div style="display: flex; gap: 15px; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="openBookingModal()"><i class="fas fa-paper-plane"></i> Plan Your Holiday</button>
            <a href="<?php echo esc_url( home_url( '/contact-us/' ) ); ?>" class="btn btn-outline"><i class="fas fa-envelope"></i> Contact Our Office</a>
          </div>
        </div>
        
        <div>
          <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop" alt="Balaji Travels Travel Team" style="border-radius: var(--radius-md); box-shadow: var(--shadow-lg); width: 100%;">
          
          <div style="background-color: var(--primary-color); color: var(--white); padding: 25px; border-radius: var(--radius-md); margin-top: -30px; margin-left: 30px; position: relative; z-index: 2; box-shadow: var(--shadow-md);">
            <h4 style="font-family: var(--font-accent); font-size: 1.5rem; font-style: italic; color: var(--accent-color); margin-bottom: 8px;">"Your Journey, Our Passion"</h4>
            <p style="font-size: 0.9rem; opacity: 0.9; margin: 0;">We don't sell generic tour packages; we craft lifetime memories with meticulous attention and custom detail.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Mission & Vision Section -->
  <section class="section-bg">
    <div class="container">
      <div class="grid-3">
        <div class="why-card" style="border-top: 4px solid var(--primary-color);">
          <div class="why-icon" style="background-color: rgba(0, 53, 128, 0.08); color: var(--primary-color);"><i class="fas fa-bullseye"></i></div>
          <h3 style="color: var(--primary-color);">Our Mission</h3>
          <p>To provide high-end, secure, custom, and extremely cost-effective tour management and ticket bookings, ensuring every Bengali traveler explores the globe with absolute peace of mind.</p>
        </div>
        
        <div class="why-card" style="border-top: 4px solid var(--accent-color);">
          <div class="why-icon" style="background-color: rgba(255, 183, 0, 0.1); color: var(--accent-color);"><i class="fas fa-eye"></i></div>
          <h3 style="color: var(--primary-color);">Our Vision</h3>
          <p>To become West Bengal's most favored and widely recognized premier travel operator, known for introducing innovative holiday structures, tatkal assistance solutions, and ethical practices.</p>
        </div>
        
        <div class="why-card" style="border-top: 4px solid var(--primary-color);">
          <div class="why-icon" style="background-color: rgba(0, 53, 128, 0.08); color: var(--primary-color);"><i class="fas fa-heart"></i></div>
          <h3 style="color: var(--primary-color);">Our Core Values</h3>
          <p>Absolute transparency in pricing (no hidden surcharges), customer safety (accredited operators and medical checks), local heritage preservation, and commitment to customized service.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Certifications / Trust Badges Section -->
  <section class="certifications-section">
    <div class="container">
      <div class="section-header">
        <span class="section-subtitle">Safety & Standards</span>
        <h2 class="section-title">Certifications & Accreditations</h2>
        <p class="section-desc">We comply with all statutory state and federal regulations, offering a fully secured legal backing to your travel payments.</p>
      </div>
      
      <div style="display: flex; justify-content: center; gap: 50px; align-items: center; flex-wrap: wrap;">
        <div style="text-align: center; max-width: 180px;">
          <div style="font-size: 3.5rem; color: var(--primary-color); margin-bottom: 12px;"><i class="fas fa-certificate"></i></div>
          <h4 style="font-size: 1rem; color: var(--text-dark); margin-bottom: 5px;">ISO 9001:2015</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted);">Certified Quality Management System</p>
        </div>
        
        <div style="text-align: center; max-width: 180px;">
          <div style="font-size: 3.5rem; color: var(--primary-color); margin-bottom: 12px;"><i class="fas fa-subway"></i></div>
          <h4 style="font-size: 1rem; color: var(--text-dark); margin-bottom: 5px;">IRCTC Partner</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted);">Authorized Railway Ticketing Agency</p>
        </div>
        
        <div style="text-align: center; max-width: 180px;">
          <div style="font-size: 3.5rem; color: var(--primary-color); margin-bottom: 12px;"><i class="fas fa-passport"></i></div>
          <h4 style="font-size: 1rem; color: var(--text-dark); margin-bottom: 5px;">IATA Accredited</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted);">Qualified Air Travel Broker Agent</p>
        </div>
        
        <div style="text-align: center; max-width: 180px;">
          <div style="font-size: 3.5rem; color: var(--primary-color); margin-bottom: 12px;"><i class="fas fa-building"></i></div>
          <h4 style="font-size: 1rem; color: var(--text-dark); margin-bottom: 5px;">WBTDCL Approved</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted);">Registered with Ministry of Tourism, WB</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-banner" style="background-color: var(--primary-color);">
    <div class="container">
      <div class="cta-content">
        <h2>Experience The Difference with Balaji Travels</h2>
        <p>Let our travel planners design a personalized, luxurious, yet highly cost-effective vacation layout tailored perfectly for your family.</p>
        <div class="cta-actions" style="justify-content: center; margin-top: 20px;">
          <button class="btn btn-accent" onclick="openBookingModal()"><i class="fas fa-paper-plane"></i> Plan My Journey</button>
          <a href="tel:+919339288770" class="btn btn-outline" style="border-color: white; color: white;"><i class="fas fa-phone-alt"></i> Call +91 93392 88770</a>
        </div>
      </div>
    </div>
  </section>

<?php get_footer(); ?>
