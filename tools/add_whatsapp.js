const fs = require('fs');

let jsContent = fs.readFileSync('js/app.min.js', 'utf8');

const waScript = `
function initSimpleWhatsApp() {
  const btn = document.createElement("a");
  btn.href = "https://wa.me/919339288770?text=Hello%20Balaji%20Travels,%20I%20would%20like%20to%20enquire%20about%20a%20tour%20package!";
  btn.target = "_blank";
  btn.style.cssText = "position:fixed; bottom:20px; left:20px; width:60px; height:60px; background-color:#25d366; color:white; border-radius:50px; text-align:center; font-size:35px; box-shadow: 0 4px 15px rgba(37,211,102,0.4); z-index:9999; display:flex; justify-content:center; align-items:center; text-decoration:none; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);";
  btn.innerHTML = '<i class="fab fa-whatsapp"></i>';
  btn.onmouseover = () => {
    btn.style.transform = "scale(1.15) rotate(10deg)";
    btn.style.boxShadow = "0 8px 25px rgba(37,211,102,0.6)";
  };
  btn.onmouseout = () => {
    btn.style.transform = "scale(1) rotate(0deg)";
    btn.style.boxShadow = "0 4px 15px rgba(37,211,102,0.4)";
  };
  document.body.appendChild(btn);
}
`;

// Insert the function definition
if (!jsContent.includes('initSimpleWhatsApp')) {
  jsContent += '\n' + waScript + '\n';
  
  // Call it on DOMContentLoaded.
  // We can just append an event listener at the end of the file.
  jsContent += 'document.addEventListener("DOMContentLoaded", initSimpleWhatsApp);\n';
  
  fs.writeFileSync('js/app.min.js', jsContent);
  console.log('WhatsApp Floating Button added to app.min.js');
} else {
  console.log('WhatsApp Floating Button already exists.');
}
