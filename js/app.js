/**
 * Balaji Travels - Global Application Scripts
 * Manages dynamic headers/footers, mobile navigation, slide carousels,
 * custom post filters, modal popups, and automated forms.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. DYNAMICALLY LOAD SHARED TEMPLATES (Top bar, Header, Footer)
  loadSharedLayouts();

  // 2. COOKIE CONSENT BANNER SYSTEM
  initCookieConsent();

  // 3. FLOATING WHATSAPP CHAT WIDGET
  initWhatsAppWidget();

  // 4. SCROLL INTERSECT STATS COUNTUP
  initStatsCounter();

  // 5. TESTIMONIAL CAROUSEL SLIDER (If active on page)
  initTestimonialsSlider();

  // 6. HERO SLIDER LOGIC (If active on page)
  initHeroSlider();

  // 7. HIGH PERFORMANCE SCROLL REVEAL ENGINE
  initScrollReveal();

  // 8. DYNAMIC LOCAL BUSINESS SEO SCHEMA INJECTION
  initLocalBusinessSchema();
});

// Load common layouts to avoid repeating HTML blocks on every page
function loadSharedLayouts() {
  const topBarEl = document.getElementById("top-bar-placeholder");
  const headerEl = document.getElementById("header-placeholder");
  const footerEl = document.getElementById("footer-placeholder");
  const modalEl = document.getElementById("modal-placeholder");

  const activePage = window.location.pathname.split("/").pop() || "index.html";

  // INJECT TOP BAR
  if (topBarEl) {
    topBarEl.innerHTML = `
      <div class="top-bar">
        <div class="container">
          <div class="top-bar-contact">
            <a href="tel:+919339288770"><i class="fas fa-phone"></i> +91 93392 88770</a>
            <a href="mailto:vkshjoshi@gmail.com"><i class="fas fa-envelope"></i> vkshjoshi@gmail.com</a>
            <a href="https://wa.me/919339288770" target="_blank"><i class="fab fa-whatsapp"></i> Chat on WhatsApp</a>
          </div>
          <div class="top-bar-right">
            <span class="top-bar-badge"><i class="fas fa-headset"></i> 24x7 Emergency Support</span>
          </div>
        </div>
      </div>
    `;
  }

  // INJECT NAV HEADER
  if (headerEl) {
    headerEl.innerHTML = `
      <header id="main-header">
        <div class="container">
          <a href="index.html" class="logo" style="display: flex; align-items: center; gap: 10px;">
            <img src="logo.png" alt="Balaji Travels Logo" style="height: 70px; width: auto; max-width: 100%; object-fit: contain;">
          </a>
          <nav>
            <ul class="nav-menu" id="nav-menu">
              <li><a href="index.html" class="nav-link ${activePage === "index.html" ? "active" : ""}">Home</a></li>
              <li><a href="about.html" class="nav-link ${activePage === "about.html" ? "active" : ""}">About Us</a></li>
              <li class="nav-item-dropdown">
                <a href="services.html" class="nav-link ${activePage === "services.html" ? "active" : ""}">Services <i class="fas fa-chevron-down" style="font-size: 0.75rem; margin-left: 2px;"></i></a>
                <div class="dropdown-menu">
                  <a href="services.html" class="dropdown-item">All Services Grid</a>
                  <a href="flights.html" class="dropdown-item">Flights Booking</a>
                  <a href="hotels.html" class="dropdown-item">Hotel Reservations</a>
                  <a href="trains.html" class="dropdown-item">IRCTC Rail Bookings</a>
                  <a href="visa.html" class="dropdown-item">Visa Assistance</a>
                  <a href="insurance.html" class="dropdown-item">Travel Insurance</a>
                </div>
              </li>
              <li class="nav-item-dropdown">
                <a href="packages.html" class="nav-link ${activePage === "packages.html" ? "active" : ""}">Tour Packages <i class="fas fa-chevron-down" style="font-size: 0.75rem; margin-left: 2px;"></i></a>
                <div class="dropdown-menu">
                  <a href="packages.html" class="dropdown-item">All Holiday Deals</a>
                  <a href="packages.html?filter=domestic" class="dropdown-item">Domestic Packages</a>
                  <a href="packages.html?filter=international" class="dropdown-item">International Tours</a>
                  <a href="packages.html?filter=religious" class="dropdown-item">Religious / Pilgrimages</a>
                </div>
              </li>
              <li><a href="gallery.html" class="nav-link ${activePage === "gallery.html" ? "active" : ""}">Gallery</a></li>
              <li><a href="testimonials.html" class="nav-link ${activePage === "testimonials.html" ? "active" : ""}">Reviews</a></li>
              <li><a href="blog.html" class="nav-link ${activePage === "blog.html" ? "active" : ""}">Blog</a></li>
              <li><a href="contact.html" class="nav-link ${activePage === "contact.html" ? "active" : ""}">Contact</a></li>
              <li><button class="btn btn-accent btn-sm" onclick="openBookingModal()" style="margin-left: 10px; font-weight: 700; border-radius: 50px; box-shadow: var(--shadow-sm);"><i class="fas fa-plane-departure"></i> Book Now</button></li>
            </ul>
          </nav>
          <button class="hamburger" id="menu-toggle" aria-label="Toggle Menu">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </header>
    `;

    // Sticky header toggle
    const mainHeader = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        mainHeader.classList.add("sticky");
      } else {
        mainHeader.classList.remove("sticky");
      }
    });

    // Mobile Hamburger logic
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    if (menuToggle && navMenu) {
      menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        menuToggle.querySelector("i").classList.toggle("fa-bars");
        menuToggle.querySelector("i").classList.toggle("fa-times");
      });
    }
  }

  // INJECT FOOTER
  if (footerEl) {
    footerEl.innerHTML = `
      <footer>
        <div class="container">
          <div class="footer-grid">
            <div class="footer-col footer-about">
              <a href="index.html" class="logo" style="margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
                <img src="logo.png" alt="Balaji Travels Logo" style="height: 70px; width: auto; max-width: 100%; object-fit: contain;">
              </a>
              <p>Your Journey, Our Passion — Explore the World with Balaji Travels. The most trusted premium tour operator and booking assistant based in Kolkata, West Bengal.</p>
              <div class="social-links" style="margin-bottom: 20px;">
                <a href="https://www.facebook.com/p/Balaji-Travels-100067196636092/" target="_blank" class="social-link" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="https://instagram.com" target="_blank" class="social-link" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="https://twitter.com" target="_blank" class="social-link" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="https://youtube.com" target="_blank" class="social-link" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
              </div>
              <div class="iata-accreditation" style="display: inline-block;">
                <img src="images/iata-image.jpg" alt="IATA Accredited Agent" style="height: 55px; width: auto; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              </div>
            </div>
            
            <div class="footer-col">
              <h3>Quick Links</h3>
              <ul class="footer-links">
                <li><a href="index.html"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Home</a></li>
                <li><a href="about.html"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> About Us</a></li>
                <li><a href="services.html"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Our Services</a></li>
                <li><a href="packages.html"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Tour Packages</a></li>
                <li><a href="blog.html"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Travel Blog</a></li>
                <li><a href="contact.html"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Contact Us</a></li>
              </ul>
            </div>
            
            <div class="footer-col">
              <h3>Our Services</h3>
              <ul class="footer-links">
                <li><a href="flights.html"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Flight Bookings</a></li>
                <li><a href="hotels.html"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Hotel Reservations</a></li>
                <li><a href="trains.html"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> IRCTC Train Tickets</a></li>
                <li><a href="visa.html"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Visa Services</a></li>
                <li><a href="insurance.html"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Travel Insurance</a></li>
                <li><a href="packages.html?filter=religious"><i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i> Chardham pilgrimage</a></li>
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
            <p>&copy; 2026 Balaji Travels. All Rights Reserved. Built with ❤️ made by Sakshi Joshi</p>
            <div class="footer-bottom-links">
              <a href="privacy.html">Privacy Policy</a>
              <a href="terms.html">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  // INJECT UNIVERSAL BOOKING ENQUIRY MODAL
  if (modalEl) {
    modalEl.innerHTML = `
      <div id="booking-modal" class="lightbox" style="justify-content: center; align-items: center;">
        <div class="lightbox-close" onclick="closeBookingModal()">&times;</div>
        <div class="enquiry-form-card" style="width: 100%; max-width: 550px; max-height: 90vh; overflow-y: auto;">
          <h3>Plan Your Dream Trip</h3>
          <p>Fill out the details below and get a customized holiday quote in 2 hours.</p>
          <form id="modal-enquiry-form" onsubmit="handleFormSubmit(event, 'modal-enquiry-form')">
            <input type="hidden" name="access_key" value="819cd7ea-5d5a-4a26-8f2b-494e0b50bbaf">
            <input type="hidden" name="subject" value="New Lead from Modal Enquiry Form">
            <div class="form-group" style="margin-bottom: 15px;">
              <label><i class="fas fa-user"></i> Full Name</label>
              <input type="text" name="name" class="form-control" placeholder="Enter your full name" required>
            </div>
            <div class="form-group" style="margin-bottom: 15px;">
              <label><i class="fas fa-phone"></i> Contact Number</label>
              <input type="tel" name="phone" class="form-control" placeholder="Enter 10-digit mobile number" required pattern="[0-9]{10}">
            </div>
            <div class="form-group" style="margin-bottom: 15px;">
              <label><i class="fas fa-envelope"></i> Email Address</label>
              <input type="email" name="email" class="form-control" placeholder="Enter email address" required>
            </div>
            <div class="form-group" style="margin-bottom: 15px;">
              <label><i class="fas fa-map-marker-alt"></i> Destination of Choice</label>
              <input type="text" name="destination" id="modal-destination" class="form-control" placeholder="Where do you want to go?" required>
            </div>
            <div class="form-group-row" style="margin-bottom: 20px;">
              <div class="form-group">
                <label><i class="fas fa-calendar-alt"></i> Travel Date</label>
                <input type="date" name="travel_date" class="form-control" required>
              </div>
              <div class="form-group">
                <label><i class="fas fa-users"></i> Travelers</label>
                <select name="travelers" class="form-control" required>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons (Couple)</option>
                  <option value="3-5">3 - 5 Persons (Family)</option>
                  <option value="6+">6+ Persons (Group)</option>
                </select>
              </div>
            </div>
            <button type="submit" class="btn btn-accent btn-form-submit">Get Free Quote <i class="fas fa-paper-plane"></i></button>
            <div class="form-success-message" id="modal-enquiry-form-success"></div>
          </form>
        </div>
      </div>
    `;
  }
}

// 2. COOKIE GDPR SYSTEM
function initCookieConsent() {
  setTimeout(() => {
    const consentGiven = localStorage.getItem("balajiCookieConsent");
    const banner = document.getElementById("cookie-consent");
    if (!consentGiven && banner) {
      banner.style.display = "block";
    }
  }, 2000);
}

function acceptCookieConsent() {
  localStorage.setItem("balajiCookieConsent", "accepted");
  const banner = document.getElementById("cookie-consent");
  if (banner) {
    banner.style.opacity = 0;
    setTimeout(() => {
      banner.style.display = "none";
    }, 400);
  }
}

// 3. WHATSAPP FLOATING WIDGET
function initWhatsAppWidget() {
  const container = document.getElementById("floating-actions");
  if (!container) return;

  // Inject self-contained chatbot CSS styles
  const chatbotStyle = document.createElement("style");
  chatbotStyle.innerHTML = `
    .whatsapp-drawer {
      width: 380px !important;
      height: 550px !important;
      display: flex;
      flex-direction: column;
      border-radius: 24px !important;
      border: none !important;
      background: white !important;
      overflow: hidden !important;
      box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1) !important;
      transform-origin: bottom right;
    }
    @media (max-width: 480px) {
      .whatsapp-drawer {
        width: 300px !important;
        height: 450px !important;
        bottom: 80px !important;
        right: -10px !important;
      }
    }
    .agent-chat-window {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .agent-messages-container {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      background-color: #f8fafc;
      display: flex;
      flex-direction: column;
      scroll-behavior: smooth;
    }
    .agent-messages-container::-webkit-scrollbar {
      width: 6px;
    }
    .agent-messages-container::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.15);
      border-radius: 10px;
    }
    .agent-message-wrapper {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
      width: 100%;
      animation: slideInUp 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      opacity: 0;
      transform: translateY(10px);
    }
    .agent-message-bubble {
      max-width: 85%;
      padding: 12px 18px;
      border-radius: 18px;
      font-size: 0.95rem;
      line-height: 1.5;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      position: relative;
    }
    .agent-bubble-bot {
      background: white;
      color: #334155;
      align-self: flex-start;
      border-bottom-left-radius: 4px;
      border: 1px solid #e2e8f0;
    }
    .agent-bubble-user {
      background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
      color: white;
      align-self: flex-end;
      border-bottom-right-radius: 4px;
      box-shadow: 0 4px 12px rgba(0, 53, 128, 0.2);
    }
    .agent-bubble-timestamp {
      font-size: 0.65rem;
      color: #999;
      margin-top: 3px;
      align-self: flex-start;
    }
    .agent-bubble-user + .agent-bubble-timestamp {
      align-self: flex-end;
    }
    .agent-prompts-container {
      padding: 12px 20px;
      background: white;
      border-top: 1px solid #f1f5f9;
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    .agent-prompt-btn {
      background: white;
      color: var(--primary-color);
      border: 1px solid #cbd5e1;
      border-radius: 20px;
      padding: 8px 16px;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
      box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    }
    .agent-prompt-btn:hover {
      background: var(--primary-color);
      color: white;
      border-color: var(--primary-color);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 53, 128, 0.15);
    }
    .agent-input-container {
      padding: 16px 20px;
      background: white;
      display: flex;
      gap: 12px;
      align-items: center;
      border-top: 1px solid #f1f5f9;
    }
    .agent-input-field {
      flex: 1;
      background: #f1f5f9;
      border: 1px solid transparent;
      border-radius: 24px;
      padding: 12px 20px;
      font-size: 0.95rem;
      outline: none;
      transition: all 0.3s ease;
      color: #334155;
    }
    .agent-input-field:focus {
      background: white;
      border-color: var(--primary-light);
      box-shadow: 0 0 0 4px rgba(0, 53, 128, 0.1);
    }
    .agent-send-btn {
      background: var(--accent-color);
      color: var(--text-dark);
      border: none;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
      box-shadow: 0 4px 10px rgba(255, 193, 7, 0.3);
    }
    .agent-send-btn:hover {
      background: #e0a800;
      transform: scale(1.08) rotate(-10deg);
      box-shadow: 0 6px 15px rgba(255, 193, 7, 0.4);
    }
    .typing-indicator {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 12px 18px;
      background: white;
      border-radius: 18px;
      border-bottom-left-radius: 4px;
      border: 1px solid #e2e8f0;
      align-self: flex-start;
      margin-bottom: 16px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      animation: slideInUp 0.3s forwards;
    }
    .typing-dot {
      width: 6px;
      height: 6px;
      background: #94a3b8;
      border-radius: 50%;
      animation: bounce 1.4s infinite ease-in-out both;
    }
    .typing-dot:nth-child(1) { animation-delay: -0.32s; }
    .typing-dot:nth-child(2) { animation-delay: -0.16s; }
    @keyframes bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1); }
    }
    @keyframes slideInUp {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .chat-drawer-header {
      background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
      color: white;
      padding: 20px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      position: relative;
      z-index: 10;
    }
    .chat-drawer-avatar-wrapper {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .chat-avatar-status {
      position: relative;
      width: 40px;
      height: 40px;
    }
    .chat-avatar-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(255,255,255,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      border: 1.5px solid rgba(255,255,255,0.4);
    }
    .chat-avatar-online-dot {
      position: absolute;
      bottom: 1px;
      right: 1px;
      width: 10px;
      height: 10px;
      background-color: #4CAF50;
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 0 4px rgba(0,0,0,0.2);
    }
    .chat-header-info h4 {
      font-size: 0.95rem;
      margin: 0;
      font-weight: 700;
      letter-spacing: 0.2px;
    }
    .chat-header-info span {
      font-size: 0.7rem;
      opacity: 0.9;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .chat-close-btn {
      font-size: 1.5rem;
      color: white;
      cursor: pointer;
      opacity: 0.8;
      transition: opacity 0.2s;
      background: none;
      border: none;
      outline: none;
    }
    .chat-close-btn:hover {
      opacity: 1;
    }
    .pulse-online {
      display: inline-block;
      width: 6px;
      height: 6px;
      background: #4CAF50;
      border-radius: 50%;
      animation: pulseGlow 1.8s infinite;
    }
    @keyframes pulseGlow {
      0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7); }
      70% { box-shadow: 0 0 0 6px rgba(76, 175, 80, 0); }
      100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
    }
    @keyframes chatButtonPop {
      0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
      50% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
      100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
    }
    @keyframes popUp {
      0% { transform: scale(0.9) translateY(20px); opacity: 0; }
      100% { transform: scale(1) translateY(0); opacity: 1; }
    }
    .floating-whatsapp {
      animation: chatButtonPop 2s infinite ease-in-out;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  `;
  document.head.appendChild(chatbotStyle);

  container.innerHTML = `
    <!-- Floating Call Button (Mobile Only) -->
    <a href="tel:+919339288770" class="btn-floating floating-call" aria-label="Call Balaji Travels Support">
      <i class="fas fa-phone-alt"></i>
    </a>
    
    <!-- Floating AI Assistant / Chat Widget -->
    <div class="floating-whatsapp-wrapper" style="position: relative;">
      <div class="btn-floating floating-whatsapp" id="whatsapp-trigger" onclick="toggleWhatsAppDrawer()" aria-label="Live Chat Assistant" style="background: linear-gradient(135deg, var(--primary-color), var(--primary-light)); border: 2px solid white; box-shadow: var(--shadow-lg);">
        <i class="fas fa-headset" style="font-size: 1.8rem; color: white;"></i>
      </div>
      
      <!-- Interactive Support Chat Panel -->
      <div id="whatsapp-drawer" class="whatsapp-drawer" style="display: none; position: absolute; bottom: 80px; right: 0; animation: popUp 0.3s ease;">
        <div class="agent-chat-window">
          <!-- Chat Header -->
          <div class="chat-drawer-header">
            <div class="chat-drawer-avatar-wrapper">
              <div class="chat-avatar-status">
                <div class="chat-avatar-icon"><i class="fas fa-user-astronaut"></i></div>
                <span class="chat-avatar-online-dot"></span>
              </div>
              <div class="chat-header-info">
                <h4>Balaji AI Assistant</h4>
                <span><span class="pulse-online"></span> Agent Online • Replies Instantly</span>
              </div>
            </div>
            <button class="chat-close-btn" onclick="toggleWhatsAppDrawer()" aria-label="Close Chat">&times;</button>
          </div>
          
          <!-- Chat Messages Area -->
          <div class="agent-messages-container" id="agent-chat-area">
            <div class="agent-message-wrapper">
              <div class="agent-message-bubble agent-bubble-bot">
                Namaste! 🙏 Welcome to Balaji Travels Kolkata. I am your Virtual Travel Agent. How can I help you plan your dream holiday today?
              </div>
              <span class="agent-bubble-timestamp">Just Now</span>
            </div>
          </div>
          
          <!-- Quick Interactive Suggestion Prompts -->
          <div class="agent-prompts-container" id="agent-chat-prompts">
            <button class="agent-prompt-btn" onclick="handleAgentPrompt('flight')">✈️ Flight Sectors</button>
            <button class="agent-prompt-btn" onclick="handleAgentPrompt('train')">🚂 IRCTC Rail</button>
            <button class="agent-prompt-btn" onclick="handleAgentPrompt('hotel')">🏨 Luxury Hotels</button>
            <button class="agent-prompt-btn" onclick="handleAgentPrompt('chardham')">🕉️ Chardham Yatra</button>
            <button class="agent-prompt-btn" onclick="handleAgentPrompt('call')">💬 Request Call</button>
          </div>
          
          <!-- Message Input Bar -->
          <div class="agent-input-container">
            <input type="text" id="agent-user-input" class="agent-input-field" placeholder="Ask about flights, packages, or bookings..." onkeypress="handleAgentKeyPress(event)">
            <button class="agent-send-btn" onclick="sendAgentMessage()" aria-label="Send Message"><i class="fas fa-paper-plane"></i></button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Global Chatbot State Machine
let agentState = {
  step: 'start',
  name: '',
  phone: '',
  destination: '',
  isTyping: false
};

function toggleWhatsAppDrawer() {
  const drawer = document.getElementById("whatsapp-drawer");
  if (!drawer) return;
  
  if (drawer.style.display === "none" || drawer.style.display === "") {
    drawer.style.display = "flex";
    const chatArea = document.getElementById("agent-chat-area");
    if (chatArea) chatArea.scrollTop = chatArea.scrollHeight;
  } else {
    drawer.style.display = "none";
  }
}

// Handle text sends via Enter key
function handleAgentKeyPress(event) {
  if (event.key === 'Enter') {
    sendAgentMessage();
  }
}

// Appends message block to chat frame
function appendAgentMessage(text, isUser = false) {
  const chatArea = document.getElementById("agent-chat-area");
  if (!chatArea) return;

  const wrapper = document.createElement("div");
  wrapper.className = "agent-message-wrapper";

  const bubble = document.createElement("div");
  bubble.className = `agent-message-bubble ${isUser ? 'agent-bubble-user' : 'agent-bubble-bot'}`;
  bubble.innerHTML = text;

  const timestamp = document.createElement("span");
  timestamp.className = "agent-bubble-timestamp";
  timestamp.innerText = "Just Now";

  wrapper.appendChild(bubble);
  wrapper.appendChild(timestamp);
  chatArea.appendChild(wrapper);

  // Smooth scroll
  chatArea.scrollTop = chatArea.scrollHeight;
}

// Handles showing/hiding typing loader
function showAgentTyping(show = true) {
  const chatArea = document.getElementById("agent-chat-area");
  if (!chatArea) return;

  const existing = document.getElementById("agent-typing-indicator");
  if (show) {
    if (existing) return;
    const indicator = document.createElement("div");
    indicator.id = "agent-typing-indicator";
    indicator.className = "typing-indicator";
    indicator.innerHTML = `
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    `;
    chatArea.appendChild(indicator);
    chatArea.scrollTop = chatArea.scrollHeight;
  } else {
    if (existing) existing.remove();
  }
}

// Primary send entry-point for user typed messages
function sendAgentMessage() {
  const input = document.getElementById("agent-user-input");
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  // Clear input
  input.placeholder = "Write a message...";
  input.value = "";

  // Append user message
  appendAgentMessage(text, true);

  // Chat conversational router
  processChatResponse(text);
}

// Keyword-based conversational routing logic
function processChatResponse(text) {
  showAgentTyping(true);

  setTimeout(() => {
    showAgentTyping(false);
    const query = text.toLowerCase();

    // Lead capture steps checking
    if (agentState.step === 'collect_phone') {
      const phoneDigits = query.replace(/\D/g, '');
      if (phoneDigits.length >= 10) {
        agentState.phone = phoneDigits;
        agentState.step = 'completed';
        appendAgentMessage(`Dhanyabaad! 🙏 I have securely registered your contact number: <strong>+91 ${phoneDigits}</strong>.<br><br>Our Kolkata-based expert will call you or message you over WhatsApp within <strong>10 minutes</strong> with plans.<br><strong style="color: var(--primary-color);">Apna Sapna, Hamari Zimmedari!</strong>`);
      } else {
        appendAgentMessage("That doesn't look like a complete 10-digit mobile number. Please type your active 10-digit number so we can reach you:");
      }
      return;
    }

    if (agentState.step === 'collect_name') {
      agentState.name = text;
      agentState.step = 'collect_phone';
      appendAgentMessage(`Nice to meet you, ${text}! Please provide your **10-digit Mobile / WhatsApp Number** so our expert can share schedules and custom pricing directly:`);
      return;
    }

    // Standard Keyword Routing
    if (query.includes("flight") || query.includes("airline") || query.includes("ticket")) {
      appendAgentMessage("I can look up premium direct flights out of Kolkata (CCU) for Delhi, Dubai, Singapore, or Bangkok! Which sector are you interested in?");
      resetPrompts([
        { text: "Kolkata ➡️ Delhi", action: "flight_delhi" },
        { text: "Kolkata ➡️ Bangkok", action: "flight_bkk" },
        { text: "Kolkata ➡️ Dubai", action: "flight_dxb" }
      ]);
    } else if (query.includes("train") || query.includes("rail") || query.includes("irctc")) {
      appendAgentMessage("Tatkal tickets and seat availability links are active! Which route would you like to check out of Howrah/Sealdah?");
      resetPrompts([
        { text: "Howrah ➡️ Delhi (Rajdhani)", action: "train_delhi" },
        { text: "Howrah ➡️ NJP (Vande Bharat)", action: "train_njp" },
        { text: "Howrah ➡️ Haridwar (Pilgrim)", action: "train_haridwar" }
      ]);
    } else if (query.includes("hotel") || query.includes("resort") || query.includes("stay")) {
      appendAgentMessage("I have direct wholesale rates for premium resorts in Goa, Kashmir, Dubai, and Maldives! Where are you planning to stay?");
      resetPrompts([
        { text: "Darjeeling Resorts", action: "hotel_darj" },
        { text: "Goa Beach Villas", action: "hotel_goa" },
        { text: "Maldives Water Villas", action: "hotel_maldives" }
      ]);
    } else if (query.includes("chardham") || query.includes("yatra") || query.includes("pilgrim")) {
      appendAgentMessage("Our FULL IATA team arranges holy 12-day packages to Kedarnath, Badrinath, Yamunotri, and Gangotri with VIP passes! Would you like a customized itinerary?");
      resetPrompts([
        { text: "Get Chardham Itinerary", action: "chardham_plan" },
        { text: "Talk to Pilgrim Expert", action: "call" }
      ]);
    } else if (query.includes("hello") || query.includes("hi") || query.includes("namaste") || query.includes("hey")) {
      appendAgentMessage("Namaste! 🙏 I am here to help you get direct tickets, Tatkal bookings, hotel rates, and custom holiday quotes. How can I help you today?");
      resetPrompts([
        { text: "✈️ Flight Schedules", action: "flight" },
        { text: "🚂 IRCTC Rail Status", action: "train" },
        { text: "🏨 Book Luxury Hotels", action: "hotel" }
      ]);
    } else {
      // Catch-all lead capture triggers
      agentState.step = 'collect_name';
      appendAgentMessage("I'd love to help you plan that perfectly! Let's connect you with one of our human travel planners in Kolkata.<br><br>First, what is your **Full Name**?");
    }
  }, 1000);
}

// Resets/Renders prompt buttons dynamically based on chat step
function resetPrompts(buttonList) {
  const container = document.getElementById("agent-chat-prompts");
  if (!container) return;

  container.innerHTML = buttonList.map(b => `
    <button class="agent-prompt-btn" onclick="handleAgentPrompt('${b.action}')">${b.text}</button>
  `).join("") + `<button class="agent-prompt-btn" onclick="handleAgentPrompt('restart')" style="background:#fff3f3; color:#d9534f; border-color:#f5c6cb;">🔄 Reset Chat</button>`;
}

// Router for quick buttons clicking
function handleAgentPrompt(action) {
  // Show user action bubble
  const prompts = {
    flight: "✈️ Flight Sectors",
    train: "🚂 IRCTC Rail",
    hotel: "🏨 Luxury Hotels",
    chardham: "🕉️ Chardham Yatra",
    call: "💬 Request Call",
    flight_delhi: "Kolkata to New Delhi Flights",
    flight_bkk: "Kolkata to Bangkok Flights",
    flight_dxb: "Kolkata to Dubai Flights",
    train_delhi: "Howrah to New Delhi Trains",
    train_njp: "Howrah to NJP Trains",
    train_haridwar: "Howrah to Haridwar Trains",
    hotel_darj: "Darjeeling Luxury Stays",
    hotel_goa: "Goa Premium Resorts",
    hotel_maldives: "Maldives Water Villas",
    chardham_plan: "Get Chardham Itinerary Details",
    restart: "Reset Conversation"
  };

  if (prompts[action]) {
    appendAgentMessage(prompts[action], true);
  }

  showAgentTyping(true);

  setTimeout(() => {
    showAgentTyping(false);

    if (action === 'flight') {
      appendAgentMessage("I can look up direct flight connections out of Kolkata! Tickets start at just ₹3,499. Which sector do you want to explore?");
      resetPrompts([
        { text: "Kolkata ➡️ Delhi", action: "flight_delhi" },
        { text: "Kolkata ➡️ Bangkok", action: "flight_bkk" },
        { text: "Kolkata ➡️ Dubai", action: "flight_dxb" }
      ]);
    } else if (action === 'train') {
      appendAgentMessage("IRCTC train booking routes checked instantly! Tatkal bookings include Howrah/Sealdah departures. Select your route:");
      resetPrompts([
        { text: "Howrah ➡️ Delhi", action: "train_delhi" },
        { text: "Howrah ➡️ NJP (Siliguri)", action: "train_njp" },
        { text: "Howrah ➡️ Haridwar", action: "train_haridwar" }
      ]);
    } else if (action === 'hotel') {
      appendAgentMessage("I have locked-in offline wholesale pricing with 3★, 4★, and 5★ properties in major hotspots. Select your destination area:");
      resetPrompts([
        { text: "Darjeeling Resorts", action: "hotel_darj" },
        { text: "Goa Beach Villas", action: "hotel_goa" },
        { text: "Maldives Water Villas", action: "hotel_maldives" }
      ]);
    } else if (action === 'chardham') {
      appendAgentMessage("Our holy Chardham Yatra packages (Kedarnath-Badrinath Yatra) feature direct deluxe coach transport, premium food, VIP queues, and medical advisors. Let's arrange yours!");
      resetPrompts([
        { text: "Get Itinerary PDF", action: "chardham_plan" },
        { text: "Talk to Yatra Planner", action: "call" }
      ]);
    } else if (action === 'call' || action === 'chardham_plan' || action === 'flight_delhi' || action === 'flight_bkk' || action === 'flight_dxb' || action === 'train_delhi' || action === 'train_njp' || action === 'train_haridwar' || action === 'hotel_goa' || action === 'hotel_darj' || action === 'hotel_maldives') {
      // Transition to Lead Collection
      agentState.step = 'collect_name';
      appendAgentMessage("Splendid choice! Let's get our Kolkata travel expert to share customized pricing, itineraries, and airline slot seats directly with you.<br><br>First, what is your **Full Name**?");
    } else if (action === 'restart') {
      agentState = { step: 'start', name: '', phone: '', destination: '', isTyping: false };
      appendAgentMessage("Namaste! 🙏 Conversation reset successfully. I am ready for any booking enquiry. What travel service are you planning today?");
      resetPrompts([
        { text: "✈️ Flight Sectors", action: "flight" },
        { text: "🚂 IRCTC Rail", action: "train" },
        { text: "🏨 Luxury Hotels", action: "hotel" },
        { text: "🕉️ Chardham Yatra", action: "chardham" },
        { text: "💬 Request Call", action: "call" }
      ]);
    }
  }, 1000);
}

// 4. STATS ANIMATION COUNTUP
function initStatsCounter() {
  const statsSection = document.getElementById("stats-section");
  if (!statsSection) return;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = document.querySelectorAll(".stat-count");
        counters.forEach(counter => {
          const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const speed = 200; // lower number means faster count

            const inc = target / speed;

            if (count < target) {
              counter.innerText = Math.ceil(count + inc);
              setTimeout(updateCount, 15);
            } else {
              counter.innerText = target;
            }
          };
          updateCount();
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(statsSection);
}

// 5. TESTIMONIALS SLIDER CAROUSEL
let currentSlideIndex = 0;
function initTestimonialsSlider() {
  const track = document.getElementById("testimonial-track");
  const dotsContainer = document.getElementById("carousel-dots");
  
  if (!track || !window.travelData) return;

  const testimonials = window.travelData.testimonials;
  
  // Render Testimonial slides
  track.innerHTML = testimonials.map((t, idx) => `
    <div class="testimonial-slide">
      <div class="test-rating">
        ${Array(Math.floor(t.rating)).fill('<i class="fas fa-star"></i>').join('')}
        ${t.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
      </div>
      <p class="test-text">${t.text}</p>
      <div class="test-user">
        <div class="test-avatar" style="display:flex; align-items:center; justify-content:center; background-color: var(--primary-color); color: white; font-weight: bold; font-size:1.4rem;">
          ${t.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div class="test-meta">
          <h4>${t.name}</h4>
          <span>Verified Client • ${t.trip} (${t.date})</span>
        </div>
      </div>
    </div>
  `).join('');

  // Render navigation dots
  if (dotsContainer) {
    dotsContainer.innerHTML = testimonials.map((_, idx) => `
      <button class="carousel-dot ${idx === 0 ? "active" : ""}" onclick="goToTestimonialSlide(${idx})" aria-label="Go to slide ${idx+1}"></button>
    `).join('');
  }

  // Automatic slide rotation
  setInterval(() => {
    let nextIndex = (currentSlideIndex + 1) % testimonials.length;
    goToTestimonialSlide(nextIndex);
  }, 6000);
}

function goToTestimonialSlide(index) {
  const track = document.getElementById("testimonial-track");
  const dots = document.querySelectorAll(".carousel-dot");
  if (!track) return;

  currentSlideIndex = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  
  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// 6. HERO BACKGROUND SLIDER
let currentHeroSlide = 0;
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length <= 1) return;

  setInterval(() => {
    slides[currentHeroSlide].classList.remove("active");
    currentHeroSlide = (currentHeroSlide + 1) % slides.length;
    slides[currentHeroSlide].classList.add("active");
  }, 5000);
}

// 7. MODAL TOGGLES
function openBookingModal(defaultDestination = "") {
  const modal = document.getElementById("booking-modal");
  const destInput = document.getElementById("modal-destination");
  
  if (modal) {
    if (destInput && defaultDestination) {
      destInput.value = defaultDestination;
    }
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scrolls
  }
}

function closeBookingModal() {
  const modal = document.getElementById("booking-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// 8. INTERACTIVE ENQUIRY FORM HANDLER
function handleFormSubmit(event, formId) {
  event.preventDefault();
  const form = document.getElementById(formId);
  const successEl = document.getElementById(`${formId}-success`);
  
  if (!form || !successEl) return;

  const submitBtn = form.querySelector("button[type='submit']");
  const originalText = submitBtn.innerHTML;
  
  // Disable button and show spinner
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Processing Request...`;

  const formData = new FormData(form);

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
    
    if (data.success) {
      successEl.style.display = "block";
      successEl.innerHTML = `
        <div style="text-align: center;">
          <i class="fas fa-check-circle" style="font-size: 2.2rem; color: #2ecc71; margin-bottom: 10px; display: block;"></i>
          <h4 style="margin-bottom: 5px; color: #155724;">Quote Request Received!</h4>
          <p style="font-size: 0.85rem; margin: 0;">Dhanyabaad! Our Kolkata-based travel expert will contact you within <strong>2 hours</strong>.<br><strong style="color: var(--primary-color);">Apna Sapna, Hamari Zimmedari!</strong></p>
        </div>
      `;
      form.reset();
      
      successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      
      if (formId === 'modal-enquiry-form') {
        setTimeout(() => {
          closeBookingModal();
          successEl.style.display = "none";
        }, 5500);
      }
    } else {
      successEl.style.display = "block";
      successEl.style.backgroundColor = "#ffefef";
      successEl.style.color = "#d9534f";
      successEl.innerHTML = `<strong>Error:</strong> Something went wrong. Please try again.`;
    }
  })
  .catch(error => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
    successEl.style.display = "block";
    successEl.style.backgroundColor = "#ffefef";
    successEl.style.color = "#d9534f";
    successEl.innerHTML = `<strong>Error:</strong> Network issue. Please call us directly.`;
  });
}

// 7. HIGH PERFORMANCE SCROLL REVEAL ENGINE
function initScrollReveal() {
  // Auto-inject reveal classes for cleaner HTML
  const dynamicElements = document.querySelectorAll('.section-header, .package-card, .service-card, .why-card, .destination-item, .cta-content');
  dynamicElements.forEach(el => {
    if (!el.classList.contains('reveal-up') && !el.classList.contains('reveal-left') && !el.classList.contains('reveal-right')) {
      el.classList.add('reveal-up');
    }
  });

  const revealEls = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");
  if (revealEls.length === 0) return;
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Stop observing once revealed
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  
  revealEls.forEach(el => observer.observe(el));
}

// 8. DYNAMIC LOCAL BUSINESS SEO SCHEMA INJECTION
function initLocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Balaji Travels",
    "image": "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=600&auto=format&fit=crop",
    "@id": "https://balajitravels.in/#agency",
    "url": "https://balajitravels.in",
    "telephone": "+919339288770",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12, Crooked Lane",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "postalCode": "700069",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.5645,
      "longitude": 88.3533
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.facebook.com/p/Balaji-Travels-100067196636092/",
      "https://instagram.com",
      "https://twitter.com",
      "https://youtube.com"
    ],
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Kolkata"
      },
      {
        "@type": "AdministrativeArea",
        "name": "West Bengal"
      },
      {
        "@type": "AdministrativeArea",
        "name": "India"
      }
    ]
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

// Ensure Chatbot Functions are Globally Accessible
window.toggleWhatsAppDrawer = toggleWhatsAppDrawer;
window.handleAgentKeyPress = handleAgentKeyPress;
window.sendAgentMessage = sendAgentMessage;
window.handleAgentPrompt = handleAgentPrompt;
