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

## 📲 Mobile Push Notifications Setup (ntfy)

When someone submits an enquiry form on the website, the owner receives an **instant push notification** on their mobile with the full enquiry details.

### How It Works

The `handleFormSubmit()` function in `js/app.js` sends a push alert via **ntfy.sh** every time a form is successfully submitted (both the Contact Page form and the Book Now modal).

The notification looks like this:

```
🔔 New Enquiry - Rahul Sharma
📱 9876543210 | 📍 Shimla | 📅 2026-06-15 | Source: Contact Page Form
📝 2 adults, 4 star hotel preferred
```

---

### ✅ One-Time Activation Steps

#### Step 1 — Install the ntfy App
Install the free **ntfy** app on your phone:
- **Android:** [Play Store](https://play.google.com/store/apps/details?id=io.heckel.ntfy)
- **iPhone:** [App Store](https://apps.apple.com/app/ntfy/id1625396347)

#### Step 2 — Subscribe to the Topic
Open the ntfy app → tap the **+** (Subscribe) button → type exactly:

```
balaji-travels-leads-2026
```

Tap **Subscribe**.

> You will now receive instant push notifications whenever someone fills the form. No accounts or API keys needed.

---

### ⚙️ Configuration Reference

The notification topic is defined in `js/app.js`:

```js
const NTFY_TOPIC = "balaji-travels-leads-2026"; // Must match the topic in the app
```

---

### ❓ Troubleshooting

| Problem | Solution |
|---------|----------|
| No notifications arriving | Check that the topic name in the app exactly matches `balaji-travels-leads-2026` |
| Website not sending alerts | Clear browser cache (Ctrl+Shift+R) and submit the form again |

---

## 🛠️ Tech Stack

- **HTML5** — Page structure
- **CSS3** — Custom styles (`css/style.min.css`)
- **Vanilla JavaScript** — All interactivity (`js/app.js`)
- **Web3Forms** — Form submission & email notifications (`api.web3forms.com`)
- **ntfy** — Free mobile push notifications (`ntfy.sh`)
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
