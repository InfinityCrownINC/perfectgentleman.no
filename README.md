# Perfect Gentleman static website

This is a simple static one-page website for Perfect Gentleman Barber Shop & Frisør.

It uses plain HTML, CSS and JavaScript only. There is no npm install step, no build command and no framework dependency.

## Files

- `index.html` - page markup
- `styles.css` - responsive styling
- `script.js` - language switcher, prices, opening hours and settings behavior
- `site-config.js` - editable site settings
- `assets/` - logos, flags, cursor and gallery images
- `vercel.json` - small Vercel config for clean URLs

## Change default language

Open `site-config.js` and change:

```js
window.PG_SITE_CONFIG = {
  defaultLanguage: "en"
};
```

Use:

```js
defaultLanguage: "no"
```

for Norwegian default.

## Disable custom cursor

Open `site-config.js` and change:

```js
customCursorEnabled: true
```

To:

```js
customCursorEnabled: false
```

## Update Google rating

Open `site-config.js` and update:

```js
googleRating: 4.8,
googleReviewCount: 159
```

The site links to the Google page instead of scraping reviews.

## Add booking link later

Open `site-config.js` and change:

```js
booking: {
  enabled: true,
  providerName: "Your booking provider",
  bookingUrl: "https://example.com/book"
}
```

## Deploy on Vercel

Import the folder or GitHub repo into Vercel.

Recommended settings:

- Framework Preset: Other
- Build Command: leave empty
- Install Command: leave empty
- Output Directory: leave empty

Vercel can serve this as a static site directly from the repository root.
