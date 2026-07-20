const CONFIG = window.PG_SITE_CONFIG || {};

const content = {
  en: {
    nav: {
      services: "Services",
      about: "About",
      gallery: "Gallery",
      booking: "Booking",
      contact: "Contact",
      footer: "Made by INFINITY CROWN INC."
    },
    hero: {
      eyebrow: "Barber shop in Sandnes",
      title: "Sharp cuts. Clean fades. Professional grooming.",
      text: "Perfect Gentleman is a men-focused barber shop in the heart of Sandnes, offering classic haircuts, modern fades, beard care and traditional shaving.",
      call: "Call +47 45 66 27 24",
      booking: "Booking placeholder"
    },
    info: {
      addressLabel: "Address",
      phoneLabel: "Phone",
      todayLabel: "Opening hours",
      hoursShort: "Mon-Fri 10:00-18:00"
    },
    services: {
      eyebrow: "Services",
      title: "Prices",
      text: "Clear pricing for essential barber and grooming services.",
      from: "from",
      kr: "kr"
    },
    about: {
      eyebrow: "About Perfect Gentleman",
      title: "Men's grooming in the heart of Sandnes.",
      p1: "Perfect Gentleman Barber Shop & Frisør is located at Langgata 45 and focuses on quality, comfort and consistent service for men of all ages.",
      p2: "The team offers classic men's haircuts, modern styles, fades, beard trims and traditional shaving in a relaxed barbershop setting.",
      p3: "The salon welcomes both Norwegian and international customers, with a direct and friendly approach to every appointment."
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Inside the shop",
      text: "A simple collage area for photos from the studio, chairs, entrance and daily work."
    },
    reviews: {
      eyebrow: "Google profile",
      title: "Trusted locally in Sandnes.",
      text: "Showcase the Google profile clearly without relying on fragile scraping. The button opens the live Google business page.",
      button: "View Google profile",
      category: "Barber shop & Frisør",
      reviewLabel: "Google reviews",
      note: "Rating and review count can be updated in site-config.js."
    },
    booking: {
      eyebrow: "Booking",
      title: "Booking integration placeholder",
      text: "This area is ready for a booking link, embedded booking widget or third-party booking system when needed.",
      button: "Call to book for now"
    },
    contact: {
      eyebrow: "Visit",
      title: "Contact and opening hours",
      address: "Address",
      phone: "Phone",
      call: "Call salon",
      map: "Open map"
    },
    hours: {
      title: "Opening hours"
    },
    prices: [
      { name: "Men's haircut", price: "400" },
      { name: "Fade", price: "400" },
      { name: "Senior", price: "350" },
      { name: "Child", price: "350" },
      { name: "Beard trim", price: "300", prefix: "from" },
      { name: "Shaving", price: "300" },
      { name: "Hair wash", price: "100" }
    ],
    openingHours: [
      ["Monday", "10:00-18:00"],
      ["Tuesday", "10:00-18:00"],
      ["Wednesday", "10:00-18:00"],
      ["Thursday", "10:00-19:00"],
      ["Friday", "10:00-18:00"],
      ["Saturday", "10:00-17:00"],
      ["Sunday", "Closed"]
    ]
  },
  no: {
    nav: {
      services: "Tjenester",
      about: "Om oss",
      gallery: "Galleri",
      booking: "Booking",
      contact: "Kontakt",
      footer: "Laget av INFINITY CROWN AS"
    },
    hero: {
      eyebrow: "Barbershop i Sandnes",
      title: "Skarpe klipp. Rene fades. Profesjonell grooming.",
      text: "Perfect Gentleman er en frisørsalong med fokus på menn i hjertet av Sandnes, med klassisk herreklipp, moderne fades, skjeggpleie og tradisjonell barbering.",
      call: "Ring +47 45 66 27 24",
      booking: "Booking plassholder"
    },
    info: {
      addressLabel: "Adresse",
      phoneLabel: "Telefon",
      todayLabel: "Åpningstider",
      hoursShort: "Man-fre 10:00-18:00"
    },
    services: {
      eyebrow: "Tjenester",
      title: "Priser",
      text: "Tydelige priser for klipp, barbering og grooming.",
      from: "fra",
      kr: "kr"
    },
    about: {
      eyebrow: "Om Perfect Gentleman",
      title: "Herrefrisør i hjertet av Sandnes.",
      p1: "Perfect Gentleman Barber Shop & Frisør ligger i Langgata 45 og fokuserer på kvalitet, komfort og jevn service for menn i alle aldre.",
      p2: "Teamet tilbyr klassisk herreklipp, moderne frisyrer, fades, skjeggtrim og tradisjonell barbering i et avslappet barbershopmiljø.",
      p3: "Salongen ønsker både norske og internasjonale kunder velkommen, med en tydelig og hyggelig tilnærming til hver time."
    },
    gallery: {
      eyebrow: "Galleri",
      title: "Inne i salongen",
      text: "Et enkelt collageområde for bilder fra studio, stoler, inngang og daglig arbeid."
    },
    reviews: {
      eyebrow: "Google profil",
      title: "Godt vurdert lokalt i Sandnes.",
      text: "Vis Google profilen tydelig uten ustabil scraping. Knappen åpner den live Google siden.",
      button: "Se Google profil",
      category: "Barbershop & frisør",
      reviewLabel: "Google anmeldelser",
      note: "Vurdering og antall anmeldelser kan oppdateres i site-config.js."
    },
    booking: {
      eyebrow: "Booking",
      title: "Plassholder for bookingintegrasjon",
      text: "Dette området er klart for bookinglenke, innebygd bookingwidget eller et eksternt bookingsystem ved behov.",
      button: "Ring for å booke nå"
    },
    contact: {
      eyebrow: "Besøk oss",
      title: "Kontakt og åpningstider",
      address: "Adresse",
      phone: "Telefon",
      call: "Ring salongen",
      map: "Åpne kart"
    },
    hours: {
      title: "Åpningstider"
    },
    prices: [
      { name: "Herrer", price: "400" },
      { name: "Fade", price: "400" },
      { name: "Pensjonist", price: "350" },
      { name: "Barn", price: "350" },
      { name: "Skjegg trim", price: "300", prefix: "fra" },
      { name: "Barbering", price: "300" },
      { name: "Hårvask", price: "100" }
    ],
    openingHours: [
      ["Mandag", "10:00-18:00"],
      ["Tirsdag", "10:00-18:00"],
      ["Onsdag", "10:00-18:00"],
      ["Torsdag", "10:00-19:00"],
      ["Fredag", "10:00-18:00"],
      ["Lørdag", "10:00-17:00"],
      ["Søndag", "Stengt"]
    ]
  }
};

const state = {
  language: getInitialLanguage()
};

function getInitialLanguage() {
  const saved = localStorage.getItem("pg-language");
  const configured = CONFIG.defaultLanguage === "no" ? "no" : "en";
  return saved === "en" || saved === "no" ? saved : configured;
}

function translate(path, lang = state.language) {
  return path.split(".").reduce((value, key) => value?.[key], content[lang]) || "";
}

function applyLanguage(lang) {
  state.language = lang;
  localStorage.setItem("pg-language", lang);
  document.documentElement.lang = lang === "no" ? "no" : "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = translate(node.dataset.i18n, lang);
    if (value) node.textContent = value;
  });

  document.querySelectorAll(".language-button").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderPrices(lang);
  renderHours(lang);
  configureBooking(lang);
}

function renderPrices(lang) {
  const grid = document.getElementById("priceGrid");
  if (!grid) return;

  grid.innerHTML = content[lang].prices.map((item) => {
    const prefix = item.prefix ? `<span>${escapeHtml(item.prefix)}</span>` : "";
    return `
      <article class="price-card">
        <h3>${escapeHtml(item.name)}</h3>
        <div>
          ${prefix}
          <strong>${escapeHtml(item.price)},-</strong>
          <span>${escapeHtml(content[lang].services.kr)}</span>
        </div>
      </article>
    `;
  }).join("");
}

function renderHours(lang) {
  const list = document.getElementById("hoursList");
  if (!list) return;

  list.innerHTML = content[lang].openingHours.map(([day, time]) => `
    <div class="hours-row">
      <strong>${escapeHtml(day)}</strong>
      <span>${escapeHtml(time)}</span>
    </div>
  `).join("");
}

function configureRatings() {
  const rating = Number(CONFIG.googleRating || 4.8).toFixed(1);
  const count = Number(CONFIG.googleReviewCount || 159).toLocaleString("en-US");
  const googleUrl = CONFIG.googlePageUrl || "https://share.google/YpfbjD3df5ppKz8mH";

  setConfigText("rating", rating);
  setConfigText("ratingLarge", rating);
  setConfigText("reviews", `${count} Google reviews`);
  setConfigText("reviewsPlain", count);

  const link = document.getElementById("googlePageLink");
  if (link) link.href = googleUrl;
}

function configureBooking(lang) {
  const booking = CONFIG.booking || {};
  const button = document.getElementById("bookingAction");
  if (!button) return;

  if (booking.enabled && booking.bookingUrl) {
    button.href = booking.bookingUrl;
    button.target = "_blank";
    button.rel = "noopener";
    button.textContent = booking.providerName
      ? `${translate("booking.title", lang)}: ${booking.providerName}`
      : translate("booking.title", lang);
  } else {
    button.href = "tel:+4745662724";
    button.removeAttribute("target");
    button.removeAttribute("rel");
    button.textContent = translate("booking.button", lang);
  }
}

function setConfigText(key, value) {
  document.querySelectorAll(`[data-config="${key}"]`).forEach((node) => {
    node.textContent = value;
  });
}

function setupCustomCursor() {
  document.body.classList.toggle("custom-cursor", CONFIG.customCursorEnabled !== false);
}

function setupRevealAnimation() {
  const items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
}

function setupLanguageButtons() {
  document.querySelectorAll(".language-button").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function init() {
  document.getElementById("year").textContent = new Date().getFullYear();
  setupCustomCursor();
  setupLanguageButtons();
  configureRatings();
  applyLanguage(state.language);
  setupRevealAnimation();
}

init();
