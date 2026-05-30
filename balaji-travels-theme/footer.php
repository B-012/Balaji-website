  <!-- Main Footer -->
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col footer-about">
          <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo" style="margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
            <img src="<?php echo esc_url( get_template_directory_uri() . '/logo.png' ); ?>" alt="Balaji Travels Logo" style="height: 70px; width: auto; max-width: 100%; object-fit: contain;">
          </a>
          <p>Your Journey, Our Passion — Explore the World with Balaji Travels. The most trusted premium tour operator and booking assistant based in Kolkata, West Bengal.</p>
          <div class="social-links">
            <a href="https://www.facebook.com/p/Balaji-Travels-100067196636092/" target="_blank" class="social-link" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" class="social-link" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" class="social-link" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://youtube.com" target="_blank" class="social-link" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        
        <div class="footer-col">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Home</a></li>
            <li><a href="<?php echo esc_url( home_url( '/about-us/' ) ); ?>"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> About Us</a></li>
            <li><a href="<?php echo esc_url( home_url( '/services/' ) ); ?>"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Our Services</a></li>
            <li><a href="<?php echo esc_url( home_url( '/tour-packages/' ) ); ?>"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Tour Packages</a></li>
            <li><a href="<?php echo esc_url( home_url( '/blog/' ) ); ?>"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Travel Blog</a></li>
            <li><a href="<?php echo esc_url( home_url( '/contact-us/' ) ); ?>"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Contact Us</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h3>Our Services</h3>
          <ul class="footer-links">
            <li><a href="<?php echo esc_url( home_url( '/flights/' ) ); ?>"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Flight Bookings</a></li>
            <li><a href="<?php echo esc_url( home_url( '/hotels/' ) ); ?>"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Hotel Reservations</a></li>
            <li><a href="<?php echo esc_url( home_url( '/trains/' ) ); ?>"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> IRCTC Train Tickets</a></li>
            <li><a href="<?php echo esc_url( home_url( '/visa-services/' ) ); ?>"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Visa Services</a></li>
            <li><a href="<?php echo esc_url( home_url( '/travel-insurance/' ) ); ?>"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Travel Insurance</a></li>
            <li><a href="<?php echo esc_url( home_url( '/tour-packages/?filter=religious' ) ); ?>"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Chardham Pilgrimage</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h3>Contact Info</h3>
          <ul class="footer-contact">
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <span><strong>Head Office:</strong> 12, Crooked Lane, Kolkata 700069<br><strong>Branch Office:</strong> 8A, Shyama Prosad Mookerjee Road, Kolkata 700025</span>
            </li>
            <li>
              <i class="fas fa-phone-alt"></i>
              <span>+91 93392 88770</span>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <span>vkshjoshi@gmail.com<br>info@balajitravels.in</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; <?php echo date('Y'); ?> Balaji Travels. All Rights Reserved. Built with ❤️ made by Sakshi Joshi</p>
        <div class="footer-bottom-links">
          <a href="<?php echo esc_url( home_url( '/privacy-policy/' ) ); ?>">Privacy Policy</a>
          <a href="<?php echo esc_url( home_url( '/terms-conditions/' ) ); ?>">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Floating Actions (WhatsApp & Click-To-Call) -->
  <div id="floating-actions" class="floating-widget-container"></div>

  <!-- GDPR Cookie Banner -->
  <div id="cookie-consent" class="cookie-consent-banner">
    <div class="cookie-content">
      <h4>Cookie Consent Notice</h4>
      <p>We use cookies to enhance your experience, customize navigation, and show targeted domestic and international tour offers from Kolkata. By accepting, you consent to our terms.</p>
    </div>
    <div class="cookie-actions">
      <button class="btn btn-primary btn-sm" onclick="acceptCookieConsent()">Accept All</button>
      <button class="btn btn-outline btn-sm" onclick="acceptCookieConsent()" style="border-color: var(--border-color); color: var(--text-muted);">Decline</button>
    </div>
  </div>

  <!-- Universal Booking Modal -->
  <div id="modal-placeholder"></div>

  <?php wp_footer(); ?>
</body>
</html>
