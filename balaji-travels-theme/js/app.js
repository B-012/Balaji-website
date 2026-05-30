/**
 * Balaji Travels Theme - Core JS Actions
 * Manages cookie consents, WhatsApp drawers, counter counters, sliders, and form validations.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. COOKIE CONSENT BANNER SYSTEM
  initCookieConsent();

  // 2. FLOATING WHATSAPP CHAT WIDGET
  initWhatsAppWidget();

  // 3. SCROLL INTERSECT STATS COUNTUP
  initStatsCounter();

  // 4. TESTIMONIAL CAROUSEL SLIDER (If active on page)
  initTestimonialsSlider();

  // 5. HERO SLIDER LOGIC (If active on page)
  initHeroSlider();

  // 6. STICKY HEADER SCROLL LOGIC
  const mainHeader = document.getElementById("main-header");
  if (mainHeader) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        mainHeader.classList.add("sticky");
      } else {
        mainHeader.classList.remove("sticky");
      }
    });
  }

  // 7. MOBILE MENU TOGGLE
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuToggle.querySelector("i").classList.toggle("fa-bars");
    });
  }

  // 8. SCROLL REVEAL ENGINE
  initScrollReveal();
});

// COOKIE GDPR SYSTEM
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

function initWhatsAppWidget() {
  const container = document.getElementById("floating-actions");
  if (!container) return;

  // Inject self-contained chatbot CSS styles
  const chatbotStyle = document.createElement("style");
  chatbotStyle.innerHTML = `
    .whatsapp-drawer {
      width: 350px !important;
      height: 500px !important;
      display: flex !important;
      flex-direction: column !important;
      border-radius: var(--radius-md) !important;
      border: 1px solid var(--border-color) !important;
      background: white !important;
      overflow: hidden !important;
      box-shadow: var(--shadow-lg) !important;
    }
    .agent-chat-window {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .agent-messages-container {
      flex: 1;
      overflow-y: auto;
      padding: 15px;
      background-color: #f7f9fc;
      display: flex;
      flex-direction: column;
    }
    .agent-message-wrapper {
      display: flex;
      flex-direction: column;
      margin-bottom: 12px;
      width: 100%;
    }
    .agent-message-bubble {
      max-width: 80%;
      padding: 10px 14px;
      border-radius: 12px;
      font-size: 0.85rem;
      line-height: 1.4;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      position: relative;
    }
    .agent-bubble-bot {
      background: white;
      color: var(--text-dark);
      align-self: flex-start;
      border-top-left-radius: 0;
      border: 1px solid var(--border-color);
    }
    .agent-bubble-user {
      background: var(--primary-color);
      color: white;
      align-self: flex-end;
      border-top-right-radius: 0;
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
      padding: 10px 15px;
      background: white;
      border-top: 1px solid var(--border-color);
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }
    .agent-prompt-btn {
      background: #f0f4fa;
      color: var(--primary-color);
      border: 1px solid #d0e0f5;
      border-radius: 50px;
      padding: 6px 12px;
      font-size: 0.75rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .agent-prompt-btn:hover {
      background: var(--primary-color);
      color: white;
      border-color: var(--primary-color);
    }
    .agent-input-container {
      padding: 10px 15px;
      border-top: 1px solid var(--border-color);
      background: white;
      display: flex;
      gap: 10px;
      align-items: center;
    }
    .agent-input-field {
      flex: 1;
      border: 1px solid var(--border-color);
      border-radius: 30px;
      padding: 8px 15px;
      font-size: 0.85rem;
      outline: none;
      transition: border-color 0.2s;
    }
    .agent-input-field:focus {
      border-color: var(--primary-color);
    }
    .agent-send-btn {
      background: var(--accent-color);
      color: var(--text-dark);
      border: none;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 0.9rem;
      transition: var(--transition-fast);
    }
    .agent-send-btn:hover {
      background: var(--accent-hover);
      transform: scale(1.05);
    }
    .typing-indicator {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 10px 14px;
      background: white;
      border-radius: 12px;
      border-top-left-radius: 0;
      border: 1px solid var(--border-color);
      align-self: flex-start;
      margin-bottom: 12px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    .typing-dot {
      width: 6px;
      height: 6px;
      background: var(--text-muted);
      border-radius: 50%;
      animation: bounce 1.2s infinite ease-in-out;
      opacity: 0.6;
    }
    .typing-dot:nth-child(2) { animation-delay: 0.2s; }
    .typing-dot:nth-child(3) { animation-delay: 0.4s; }
    @keyframes bounce {
      0%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-5px); }
    }
    .chat-drawer-header {
      background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
      color: white;
      padding: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: var(--shadow-sm);
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
        { text: "Darjeeling Resorts", action: "hotel_goa" },
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

// STATS ANIMATION COUNTUP
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
            const speed = 200;

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

// TESTIMONIALS SLIDER CAROUSEL
let currentSlideIndex = 0;
function initTestimonialsSlider() {
  const track = document.getElementById("testimonial-track");
  const dotsContainer = document.getElementById("carousel-dots");
  
  if (!track || !window.travelData) return;

  const testimonials = window.travelData.testimonials;
  
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

  if (dotsContainer) {
    dotsContainer.innerHTML = testimonials.map((_, idx) => `
      <button class="carousel-dot ${idx === 0 ? "active" : ""}" onclick="goToTestimonialSlide(${idx})" aria-label="Go to slide ${idx+1}"></button>
    `).join('');
  }

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

// HERO BACKGROUND SLIDER
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

// MODAL ENQUIRY TRIGGERS
function openBookingModal(defaultDestination = "") {
  const modal = document.getElementById("booking-modal");
  const destInput = document.getElementById("modal-destination");
  
  if (modal) {
    if (destInput && defaultDestination) {
      destInput.value = defaultDestination;
    }
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeBookingModal() {
  const modal = document.getElementById("booking-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// BOOKING FORM SUBMISSION ACTION
function handleFormSubmit(event, formId) {
  event.preventDefault();
  const form = document.getElementById(formId);
  const successEl = document.getElementById(`${formId}-success`);
  
  if (!form || !successEl) return;

  const submitBtn = form.querySelector("button[type='submit']");
  const originalText = submitBtn.innerHTML;
  
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Processing Request...`;

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
    
    successEl.style.display = "block";
    successEl.innerHTML = `
      <div style="text-align: center;">
        <i class="fas fa-check-circle" style="font-size: 2.2rem; color: #2ecc71; margin-bottom: 10px; display: block;"></i>
        <h4 style="margin-bottom: 5px; color: #155724;">Quote Request Received!</h4>
        <p style="font-size: 0.85rem; margin: 0;">Dhanyabaad! Our Kolkata-based travel expert will contact you via Phone/WhatsApp within <strong>2 hours</strong> with premium customized plans.<br><strong style="color: var(--primary-color);">Apna Sapna, Hamari Zimmedari!</strong></p>
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
  }, 1800);
}

// 8. HIGH PERFORMANCE SCROLL REVEAL ENGINE
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
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  
  revealEls.forEach(el => observer.observe(el));
}

// Ensure Chatbot Functions are Globally Accessible
window.toggleWhatsAppDrawer = toggleWhatsAppDrawer;
window.handleAgentKeyPress = handleAgentKeyPress;
window.sendAgentMessage = sendAgentMessage;
window.handleAgentPrompt = handleAgentPrompt;
