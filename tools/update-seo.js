const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '..');
const newKeywords = "flight ticket enquiry, best deals, coupon tickets, cheapest flights, ";

// Facebook Pixel Code
const fbPixelCode = `
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '123456789012345'); // Placeholder Pixel ID
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=123456789012345&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
`;

// WhatsApp Floating Widget (We'll inject this at the end of body or in floating-actions)
const whatsappWidgetCode = `
<!-- WhatsApp Floating Widget -->
<a href="https://wa.me/919339288770?text=Hi%20Balaji%20Travels!%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
   class="whatsapp-float" target="_blank" 
   style="position:fixed; width:60px; height:60px; bottom:40px; right:40px; background-color:#25d366; color:#FFF; border-radius:50px; text-align:center; font-size:30px; box-shadow: 2px 2px 3px #999; z-index:100; display:flex; align-items:center; justify-content:center; text-decoration:none;">
   <i class="fab fa-whatsapp"></i>
</a>
`;

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    
    files.forEach(function (file) {
        if (path.extname(file) === '.html') {
            const filePath = path.join(directoryPath, file);
            let content = fs.readFileSync(filePath, 'utf8');
            let modified = false;

            // 1. Update Keywords
            if (content.includes('<meta name="keywords" content="')) {
                if (!content.includes(newKeywords)) {
                    content = content.replace('<meta name="keywords" content="', '<meta name="keywords" content="' + newKeywords);
                    modified = true;
                }
            }

            // 2. Add FB Pixel to <head>
            if (!content.includes('Meta Pixel Code') && content.includes('</head>')) {
                content = content.replace('</head>', fbPixelCode + '\n</head>');
                modified = true;
            }

            // 3. Add WhatsApp Widget to body
            if (!content.includes('whatsapp-float') && content.includes('</body>')) {
                content = content.replace('</body>', whatsappWidgetCode + '\n</body>');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log('Updated: ' + file);
            }
        }
    });
});
