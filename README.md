# Balaji Travels — Website

Official website for **Balaji Travels Kolkata** — a premium tour operator and travel agency based in Kolkata, West Bengal, India.

🌐 **Live Site:** [balaji-website-zeta.vercel.app](https://balaji-website-zeta.vercel.app)

---

## 📁 Project Structure

```
Balaji -website/
├── index.html          # Homepage
├── about.html          # About Us
├── contact.html        # Contact & Enquiry Form
├── packages.html       # Tour Packages
├── flights.html        # Flight Bookings
├── hotels.html         # Hotel Reservations
├── trains.html         # IRCTC Rail Bookings
├── visa.html           # Visa Assistance
├── insurance.html      # Travel Insurance
├── gallery.html        # Photo Gallery
├── testimonials.html   # Client Reviews
├── blog.html           # Travel Blog
├── css/
│   └── style.min.css   # Main stylesheet
├── js/
│   ├── app.js          # Main application script
│   ├── app.min.js      # Copy of app.js (loaded by pages)
│   └── data.js         # Tour packages & testimonials data
└── images/             # All website images
```

---

## 📲 WhatsApp Mobile Notifications Setup (CallMeBot)

When someone submits an enquiry form on the website, the owner receives an **instant WhatsApp notification** on their mobile with the full enquiry details.

### How It Works

The `handleFormSubmit()` function in `js/app.js` sends a WhatsApp alert via the **CallMeBot API** every time a form is successfully submitted (both the Contact Page form and the Book Now modal).

The notification looks like this:

```
🔔 *NEW ENQUIRY - Balaji Travels*
📋 Source: Contact Page Form
👤 Name: Rahul Sharma
📱 Mobile: 9876543210
📧 Email: rahul@gmail.com
📍 Destination: Shimla
📅 Travel Date: 2026-06-15
📝 Details: 2 adults, 4 star hotel preferred
⏰ Time: 31/5/2026, 7:30:00 PM IST
```

---

### ✅ One-Time Activation Steps

#### Step 1 — Save CallMeBot as a Contact
Open your phone's **Contacts app** (not WhatsApp) and add:

| Field | Value |
|-------|-------|
| **Name** | CallMeBot |
| **Phone** | +34 623 78 64 49 |

> ⚠️ You must save the number in Contacts **before** opening WhatsApp, or it won't appear.

#### Step 2 — Send Activation Message on WhatsApp
Open WhatsApp → Find **CallMeBot** contact → Send this exact message:

```
I allow callmebot to send me messages
```

#### Step 3 — Receive Your API Key
Within 30–60 seconds, CallMeBot will reply with:

```
API Granted. Your APIKEY is: XXXXXXX
```

Copy that number — it is your personal API key.

> If no reply within 2 minutes, wait 24 hours and try again. CallMeBot can be slow during high-demand periods.

#### Step 4 — Paste the API Key in Code
Open `js/app.js` and find this line (around line 1082):

```js
const CALLMEBOT_API_KEY = "PASTE_YOUR_APIKEY_HERE";
```

Replace with your actual key:

```js
const CALLMEBOT_API_KEY = "3829571"; // your actual key here
```

Save the file.

#### Step 5 — Sync app.min.js
Run this in PowerShell inside the project folder:

```powershell
Copy-Item "js\app.js" "js\app.min.js" -Force
```

#### Step 6 — Deploy to Vercel
```bash
git add js/app.js js/app.min.js
git commit -m "Activate WhatsApp notifications"
git push
```

#### Step 7 — Test
Go to the live contact form, submit a test enquiry, and check WhatsApp within 10 seconds. ✅

---

### ⚙️ Configuration Reference

These two constants in `js/app.js` control the WhatsApp notifications:

```js
const CALLMEBOT_PHONE   = "918910829412";      // Owner's number (country code + number, no +)
const CALLMEBOT_API_KEY = "PASTE_YOUR_APIKEY_HERE"; // Get from CallMeBot activation
```

---

### ❓ Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't find CallMeBot on WhatsApp | Save the number in phone Contacts first, then open WhatsApp |
| No API key reply | Wait 24 hours and send the message again |
| Notifications not arriving | Check API key is correctly pasted (no spaces) |
| Old number `+34 644 76 80 22` not working | Use the **new number** `+34 623 78 64 49` (updated Jan 2026) |

---

## 🛠️ Tech Stack

- **HTML5** — Page structure
- **CSS3** — Custom styles (`css/style.min.css`)
- **Vanilla JavaScript** — All interactivity (`js/app.js`)
- **Web3Forms** — Form submission & email notifications (`api.web3forms.com`)
- **CallMeBot** — WhatsApp mobile notifications (`api.callmebot.com`)
- **Vercel** — Hosting & deployment
- **Google Analytics** — Traffic tracking (`G-HETP8B4C71`)
- **Font Awesome 6** — Icons

---

## 📞 Contact

**Balaji Travels**
- 📍 12, Crooked Lane, Kolkata 700069
- 📍 8A, Shyama Prosad Mookerjee Road, Kolkata 700025
- 📱 +91 93392 88770
- 📧 vkshjoshi@gmail.com
- 💬 WhatsApp: [wa.me/919339288770](https://wa.me/919339288770)

---

*Built with ❤️ by Sakshi Joshi*
