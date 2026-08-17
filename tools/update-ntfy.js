const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '..');

const jsFilesToUpdate = [
  path.join(directoryPath, 'js', 'app.js'),
  path.join(directoryPath, 'js', 'app.min.js'),
  path.join(directoryPath, 'balaji-travels-theme', 'js', 'app.js')
];

const newCode = `// 8. INTERACTIVE ENQUIRY FORM & NTFY ROUTING HANDLER
const NTFY_TOPIC = "balaji_travels_leads_2026";

function sendToNtfy(formData, formId) {
  const name        = formData.get("enter_your_full_name") || formData.get("name") || "New Lead";
  const phone       = formData.get("phone")                  || "No Phone Provided";
  const email       = formData.get("email")                  || "No Email Provided";
  const destination = formData.get("e_g_kashmir_dubai")      || formData.get("destination") || formData.get("where_do_you_want_to_go") || "N/A";
  const travelDate  = formData.get("travel_date")            || "N/A";
  const travelers   = formData.get("travelers")              || "";
  const details     = formData.get("tell_us_about_the_number_of_adults_kids_hotel_class_preference_3_4_5_or_any_custom_flight_schedules") || "";
  const source      = formId === "modal-enquiry-form" ? "Book Now Modal" : "Contact Page Form";

  const title   = \`New Enquiry - \${name}\`;
  let   body    = \`📱 \${phone} | 📍 \${destination} | 📅 \${travelDate}\`;
  if (travelers) body += \` | 👥 \${travelers}\`;
  body += \` | Source: \${source}\`;
  if (details) body += \`\\n\${details}\`;

  fetch(\`https://ntfy.sh/\${NTFY_TOPIC}\`, {
    method : "POST",
    headers: {
      "Title"   : title,
      "Priority": "high",
      "Tags"    : "bell,airplane",
      "Content-Type": "text/plain"
    },
    body: body
  }).catch(err => console.error("Ntfy Error:", err));
}

function handleFormSubmit(event, formId) {
  event.preventDefault();
  const form = document.getElementById(formId);
  const successEl = document.getElementById(\`\${formId}-success\`);
  
  if (!form || !successEl) return;

  const submitBtn = form.querySelector("button[type='submit']");
  const originalText = submitBtn.innerHTML;
  
  submitBtn.disabled = true;
  submitBtn.innerHTML = \`<i class="fas fa-spinner fa-spin"></i> Processing Request...\`;

  const formData = new FormData(form);

  // 1. Send push notification instantly
  sendToNtfy(formData, formId);

  // 2. Submit to backend (Web3Forms)
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
      successEl.innerHTML = \`
        <div style="text-align: center;">
          <i class="fas fa-check-circle" style="font-size: 2.2rem; color: #2ecc71; margin-bottom: 10px; display: block;"></i>
          <h4 style="margin-bottom: 5px; color: #155724;">Quote Request Received!</h4>
          <p style="font-size: 0.85rem; margin: 0;">Dhanyabaad! Our Kolkata-based travel expert will contact you within <strong>2 hours</strong>.<br><strong style="color: var(--primary-color);">Apna Sapna, Hamari Zimmedari!</strong></p>
        </div>
      \`;
      
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', { 'event_category': 'Engagement', 'event_label': formId, 'value': 1 });
      }
      
      form.reset();
      successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      
      if (formId === 'modal-enquiry-form') {
        setTimeout(() => { closeBookingModal(); successEl.style.display = "none"; }, 5500);
      }
    } else {
      successEl.style.display = "block";
      successEl.style.backgroundColor = "#ffefef";
      successEl.style.color = "#d9534f";
      successEl.innerHTML = \`<strong>Error:</strong> Something went wrong. Please try again.\`;
    }
  })
  .catch(error => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
    successEl.style.display = "block";
    successEl.style.backgroundColor = "#ffefef";
    successEl.style.color = "#d9534f";
    successEl.innerHTML = \`<strong>Error:</strong> Network issue. Please call us directly.\`;
  });
}

// 7. HIGH PERFORMANCE SCROLL REVEAL ENGINE
function initScrollReveal() {`;

jsFilesToUpdate.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Regex to find everything from function handleFormSubmit to function initScrollReveal
    const regex = /\/\/\s*8\.\s*INTERACTIVE ENQUIRY FORM HANDLER[\s\S]*?function initScrollReveal\(\) {/;
    
    if (regex.test(content)) {
      content = content.replace(regex, newCode);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated Ntfy logic in: ' + filePath);
    } else {
      console.log('Could not find replace block in: ' + filePath);
    }
  }
});
