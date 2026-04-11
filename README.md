# LUMIÈRE — Ladies Salon Website

A clean, fast, and elegant demo website for a ladies salon. Built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies, instant load.

## 📁 Project Structure

```
ladies-salon/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles (CSS variables, animations, responsive)
├── js/
│   └── main.js         # Nav scroll, reveal animations, mobile menu
├── images/             # Add your photos here
└── README.md
```

## ✨ Features

- **Fully responsive** — mobile, tablet, desktop
- **Smooth animations** — scroll reveal, marquee strip, orb backgrounds
- **Fixed nav** — becomes solid + styled on scroll
- **Mobile burger menu** — slides open/close
- **Services grid** — 6 service cards with featured highlight
- **About section** — stats row, values list
- **Gallery grid** — replace placeholder boxes with real photos
- **Testimonials** — 3 client reviews
- **Booking form** — with basic validation
- **Contact section** — details + map embed placeholder
- **Footer** with links

## 🚀 Getting Started

### Option 1 — Open locally
Just open `index.html` in any browser. No build step needed.

### Option 2 — GitHub Pages (free hosting)
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch → `/ (root)`
4. Your site will be live at `https://yourusername.github.io/ladies-salon/`

## 🖼️ Adding Real Photos

Replace the placeholder divs in `index.html` with real `<img>` tags:

```html
<!-- Replace this -->
<div class="gallery__placeholder"><span>Hair</span></div>

<!-- With this -->
<img src="images/hair-1.jpg" alt="Hair styling result" loading="lazy" />
```

**Recommended image sizes:**
| Section | Size |
|---------|------|
| About photo | 600 × 720 px |
| Gallery items | 600 × 400 px |
| Gallery tall item | 600 × 800 px |

## 🗺️ Adding Google Maps

Replace the map placeholder in the Contact section:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  width="100%" height="400"
  style="border:0; border-radius:8px;"
  allowfullscreen="" loading="lazy">
</iframe>
```

## 🎨 Customizing Colors & Content

All colors are in CSS variables at the top of `css/style.css`:

```css
:root {
  --cream:    #FAF6F0;   /* page background */
  --gold:     #C9A96E;   /* primary accent */
  --charcoal: #2A2422;   /* dark sections */
  --rose:     #D4A0A0;   /* soft accent */
  /* ... */
}
```

Change the salon name, services, prices, and contact details in `index.html`.

## 📦 Deployment Checklist

- [ ] Replace salon name (LUMIÈRE → yours)
- [ ] Update all prices
- [ ] Add real photos to `/images/`
- [ ] Embed real Google Maps URL
- [ ] Update phone, email, address
- [ ] Update social media links
- [ ] Update `<title>` in `index.html`

## 🛠️ Built With

- HTML5
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (IntersectionObserver, no jQuery)
- Google Fonts — Cormorant Garamond + Jost

---

**License:** Free to use and customize for client projects.
