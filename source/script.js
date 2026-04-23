/* ============================================================
   Eolietech — main script
   - i18n (Italian default + English toggle)
   - Mobile menu
   - Footer year
   - Contact form -> WhatsApp
   ============================================================ */

/* ---------- Contact constants ----------
   Single source of truth for the WhatsApp number.
   Any anchor with data-role="whatsapp-link" is rewritten on
   DOMContentLoaded to point at https://wa.me/<WHATSAPP_NUMBER>.
   Update this one constant when the number changes. */
const WHATSAPP_NUMBER = '393518579386';

/* ---------- Translations ---------- */
const translations = {
  it: {
    "brand.name": "Eolietech",
    "meta.title": "Eolietech — CCTV, Riparazione PC e Siti Web",
    "meta.description": "Servizi professionali di videosorveglianza, riparazione PC e sviluppo siti web nelle Isole Eolie, a Messina e in tutta Italia.",
    "nav.services": "Servizi",
    "nav.about": "Chi sono",
    "nav.contact": "Contatti",
    "hero.title1": "Soluzioni IT affidabili per",
    "hero.title2": "casa e impresa",
    "hero.lead": "Installazione di sistemi di videosorveglianza, riparazione PC e sviluppo di siti web professionali. Servizio rapido, professionale e personalizzato.",
    "hero.cta1": "Scrivimi su WhatsApp",
    "hero.cta2": "Scopri i servizi",
    "hero.cta3": "Inviami una email",
    "hero.meta1": "3 anni di esperienza",
    "hero.meta2": "Isole Eolie · Messina · Italia",
    "hero.meta3": "Preventivi gratuiti",
    "services.eyebrow": "Servizi",
    "services.title": "Tutto ciò che serve, in un unico tecnico",
    "services.subtitle": "Dalla sicurezza della tua casa alla presenza online della tua attività.",
    "services.cctv.title": "Videosorveglianza CCTV",
    "services.cctv.desc": "Progettazione, installazione e configurazione di sistemi di telecamere per casa, negozi e aziende. Lavoro solo con marchi di qualità: Reolink, Hikvision, EZVIZ e altri leader del settore.",
    "services.cctv.li1": "Sopralluogo e consulenza gratuita",
    "services.cctv.li2": "Telecamere IP, WiFi e analogiche (4K, visione notturna)",
    "services.cctv.li3": "Accesso remoto da smartphone e notifiche in tempo reale",
    "services.cctv.li4": "NVR/DVR e archiviazione cloud o locale",
    "services.cctv.li5": "Manutenzione, aggiornamenti e assistenza post-installazione",
    "services.cctv.brands": "Marchi che utilizzo:",
    "services.pc.title": "Riparazione PC",
    "services.pc.desc": "Diagnostica completa, riparazione hardware e software, upgrade prestazionali, pulizia e recupero dati per computer fissi, portatili, all-in-one e Mac.",
    "services.pc.li1": "Diagnosi gratuita e preventivo prima dell'intervento",
    "services.pc.li2": "Rimozione virus, malware e ottimizzazione del sistema",
    "services.pc.li3": "Sostituzione SSD, RAM, batterie, ventole e schermi",
    "services.pc.li4": "Installazione e configurazione di Windows, macOS e Linux",
    "services.pc.li5": "Pulizia interna, sostituzione pasta termica, riparazione surriscaldamento",
    "services.pc.li6": "Backup, recupero dati e migrazione tra dispositivi",
    "services.pc.li7": "Configurazione rete, stampanti e periferiche",
    "services.web.title": "Sviluppo siti web",
    "services.web.desc": "Siti vetrina, landing page, e-commerce e portali aziendali su misura. Sviluppo moderno mobile-first, ottimizzato per Google e per la velocità di caricamento.",
    "services.web.li1": "Design moderno, responsive e mobile-first",
    "services.web.li2": "Sviluppo custom (HTML/CSS/JS) oppure WordPress",
    "services.web.li3": "Ottimizzazione SEO e Core Web Vitals (velocità, accessibilità)",
    "services.web.li4": "E-commerce con WooCommerce o soluzioni personalizzate",
    "services.web.li5": "Configurazione dominio, hosting ed email professionali",
    "services.web.li6": "Siti multilingua (italiano, inglese, francese, ecc.)",
    "services.web.li7": "Restyling e modernizzazione di siti esistenti",
    "services.web.li8": "Manutenzione, aggiornamenti e backup periodici",
    "services.web.tech": "Tecnologie:",
    "about.eyebrow": "Chi sono",
    "about.title": "Un tecnico di fiducia, vicino a te",
    "about.p1": "Sono Francesco, tecnico IT con 3 anni di esperienza. Mi occupo di sistemi di videosorveglianza, riparazione computer e sviluppo siti web.",
    "about.p2": "Lavoro principalmente nelle Isole Eolie (Lipari e Vulcano) e a Messina per gli interventi tecnici, mentre per i siti web offro il servizio in tutta Italia. Il mio obiettivo è offrire soluzioni semplici, efficaci e accessibili a privati e piccole imprese.",
    "about.stat1": "Anni di esperienza",
    "about.stat2": "Aree di competenza",
    "about.stat3": "Servizio personalizzato",
    "about.stat4": "Risposta rapida",
    "about.why.title": "Perché scegliermi",
    "about.why.li1": "Preventivi chiari e gratuiti, senza sorprese",
    "about.why.li2": "Interventi rapidi e puntuali",
    "about.why.li3": "Soluzioni su misura, non pacchetti standard",
    "about.why.li4": "Assistenza anche dopo il lavoro svolto",
    "about.why.li5": "Comunicazione semplice, senza tecnicismi inutili",
    "about.why.li6": "Garanzia su tutti i lavori svolti",
    "about.why.li7": "Riservatezza e rispetto della tua privacy",
    "about.why.li8": "Servizio a domicilio, quando possibile",
    "about.why.li9": "Disponibilità nei weekend e orari flessibili",
    "contact.eyebrow": "Contatti",
    "contact.title": "Parliamo del tuo progetto",
    "contact.subtitle": "Raccontami di cosa hai bisogno: ti rispondo entro 24 ore con un preventivo gratuito.",
    "contact.area.label": "Zona di servizio",
    "contact.area.value": "Isole Eolie e Messina (interventi) · Italia (web)",
    "contact.languages.label": "Lingue parlate",
    "contact.response.label": "Tempo di risposta",
    "contact.response.value": "Entro 24 ore",
    "contact.map.title": "Zona di servizio",
    "contact.map.subtitle": "Interventi tecnici nelle Isole Eolie (Lipari, Vulcano) e a Messina.",
    "contact.form.title": "Richiedi un preventivo",
    "contact.form.subtitle": "Compila il modulo: ti scriverò io.",
    "contact.form.name": "Nome",
    "contact.form.service": "Servizio",
    "contact.form.choose": "— Seleziona —",
    "contact.form.other": "Altro",
    "contact.form.message": "Messaggio",
    "contact.form.send": "Invia richiesta",
    "footer.tagline": "Servizi IT in Sicilia e in tutta Italia",
    "footer.built": "Fatto con",
    "footer.builtBy": "da",
    "nf.metaTitle": "Pagina non trovata — Eolietech",
    "nf.title": "Pagina non trovata",
    "nf.lead": "Spiacente, la pagina che stai cercando non esiste o è stata spostata.",
    "nf.cta.home": "Torna alla home",
    "nav.scrollTop": "Torna su"
  },
  en: {
    "brand.name": "Eolietech",
    "meta.title": "Eolietech — CCTV, PC Repair & Web Development",
    "meta.description": "Professional CCTV installation, PC repair and web development services in the Aeolian Islands, Messina and across Italy.",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.title1": "Reliable IT solutions for",
    "hero.title2": "home and business",
    "hero.lead": "CCTV installation, PC repair and professional web development. Fast, reliable, and tailored to you.",
    "hero.cta1": "Message me on WhatsApp",
    "hero.cta2": "See the services",
    "hero.cta3": "Send me an email",
    "hero.meta1": "3 years of experience",
    "hero.meta2": "Aeolian Islands · Messina · Italy",
    "hero.meta3": "Free quotes",
    "services.eyebrow": "Services",
    "services.title": "Everything you need, from one technician",
    "services.subtitle": "From securing your home to building your online presence.",
    "services.cctv.title": "CCTV & Surveillance",
    "services.cctv.desc": "Design, installation and configuration of camera systems for homes, shops and businesses. I work only with quality brands: Reolink, Hikvision, EZVIZ and other industry leaders.",
    "services.cctv.li1": "Free on-site assessment and consultation",
    "services.cctv.li2": "IP, WiFi and analog cameras (4K, night vision)",
    "services.cctv.li3": "Remote smartphone access and real-time alerts",
    "services.cctv.li4": "NVR/DVR systems with cloud or local storage",
    "services.cctv.li5": "Maintenance, firmware updates and post-install support",
    "services.cctv.brands": "Brands I work with:",
    "services.pc.title": "PC Repair",
    "services.pc.desc": "Full diagnostics, hardware and software repair, performance upgrades, cleaning and data recovery for desktops, laptops, all-in-ones and Macs.",
    "services.pc.li1": "Free diagnosis and quote before any work begins",
    "services.pc.li2": "Virus and malware removal, system optimization",
    "services.pc.li3": "SSD, RAM, battery, fan and screen replacement",
    "services.pc.li4": "Windows, macOS and Linux install & configuration",
    "services.pc.li5": "Internal cleaning, thermal paste replacement, overheating fixes",
    "services.pc.li6": "Backup, data recovery and migration between devices",
    "services.pc.li7": "Network, printer and peripheral setup",
    "services.web.title": "Web Development",
    "services.web.desc": "Showcase sites, landing pages, e-commerce and business portals built to order. Modern mobile-first development, optimized for Google and loading speed.",
    "services.web.li1": "Modern, responsive, mobile-first design",
    "services.web.li2": "Custom build (HTML/CSS/JS) or WordPress",
    "services.web.li3": "SEO optimization and Core Web Vitals (speed, accessibility)",
    "services.web.li4": "E-commerce with WooCommerce or custom solutions",
    "services.web.li5": "Domain, hosting and professional email setup",
    "services.web.li6": "Multilingual sites (Italian, English, French, etc.)",
    "services.web.li7": "Restyling and modernization of existing websites",
    "services.web.li8": "Maintenance, updates and regular backups",
    "services.web.tech": "Technologies:",
    "about.eyebrow": "About",
    "about.title": "A trusted technician, close to you",
    "about.p1": "I'm Francesco, an IT technician with 3 years of experience. I handle CCTV systems, computer repair and website development.",
    "about.p2": "I work mainly in the Aeolian Islands (Lipari and Vulcano) and in Messina for on-site jobs, while web development services are available throughout Italy. My goal is to offer simple, effective and accessible solutions to individuals and small businesses.",
    "about.stat1": "Years of experience",
    "about.stat2": "Areas of expertise",
    "about.stat3": "Tailored service",
    "about.stat4": "Quick response",
    "about.why.title": "Why choose me",
    "about.why.li1": "Clear, free quotes — no surprises",
    "about.why.li2": "Fast and punctual interventions",
    "about.why.li3": "Custom solutions, not cookie-cutter packages",
    "about.why.li4": "Support after the job is done",
    "about.why.li5": "Plain language — no unnecessary jargon",
    "about.why.li6": "Warranty on all completed work",
    "about.why.li7": "Confidentiality and full respect for your privacy",
    "about.why.li8": "On-site service whenever possible",
    "about.why.li9": "Available on weekends and flexible hours",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk about your project",
    "contact.subtitle": "Tell me what you need — I'll reply within 24 hours with a free quote.",
    "contact.area.label": "Service area",
    "contact.area.value": "Aeolian Islands & Messina (on-site) · Italy (web)",
    "contact.languages.label": "Languages spoken",
    "contact.response.label": "Response time",
    "contact.response.value": "Within 24 hours",
    "contact.map.title": "Service area",
    "contact.map.subtitle": "On-site IT services in the Aeolian Islands (Lipari, Vulcano) and Messina.",
    "contact.form.title": "Request a quote",
    "contact.form.subtitle": "Fill in the form and I'll get back to you.",
    "contact.form.name": "Name",
    "contact.form.service": "Service",
    "contact.form.choose": "— Select —",
    "contact.form.other": "Other",
    "contact.form.message": "Message",
    "contact.form.send": "Send request",
    "footer.tagline": "IT services in Sicily and across Italy",
    "footer.built": "Made with",
    "footer.builtBy": "by",
    "nf.metaTitle": "Page not found — Eolietech",
    "nf.title": "Page not found",
    "nf.lead": "Sorry, the page you're looking for doesn't exist or has been moved.",
    "nf.cta.home": "Back to home",
    "nav.scrollTop": "Back to top"
  }
};

/* ---------- Language switcher ---------- */
function setLanguage(lang) {
  if (!translations[lang]) return;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = translations[lang][key];
    if (!value) return;
    if (el.tagName === 'META') {
      el.setAttribute('content', value);
    } else if (el.tagName === 'TITLE') {
      document.title = value;
    } else {
      el.textContent = value;
    }
  });

  // Translatable aria-labels (e.g. scroll-to-top button)
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const value = translations[lang][key];
    if (value) el.setAttribute('aria-label', value);
  });

  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  try { localStorage.setItem('lang', lang); } catch (e) {}
}

/* ---------- Form -> WhatsApp ---------- */
function sendForm(e) {
  e.preventDefault();
  const lang = document.documentElement.lang || 'it';
  const name = document.getElementById('name').value.trim();
  const serviceSelect = document.getElementById('service');
  const serviceLabel = serviceSelect.options[serviceSelect.selectedIndex].text;
  const message = document.getElementById('message').value.trim();

  let intro;
  if (lang === 'en') {
    intro =
      `Hi Francesco,\n\n` +
      `My name is *${name}* and I'm reaching out from your website.\n\n` +
      `▸ Service: ${serviceLabel}\n` +
      `▸ Message:\n${message}\n\n` +
      `Looking forward to hearing back. Thanks!`;
  } else {
    intro =
      `Ciao Francesco,\n\n` +
      `mi chiamo *${name}* e ti contatto dal tuo sito.\n\n` +
      `▸ Servizio: ${serviceLabel}\n` +
      `▸ Messaggio:\n${message}\n\n` +
      `Resto in attesa di una tua risposta. Grazie!`;
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(intro)}`;
  window.open(url, '_blank');
  return false;
}

/* ---------- Init on page ready ---------- */
document.addEventListener('DOMContentLoaded', function () {
  // Wire every WhatsApp link to the single number constant.
  // Anchors carry a plain href as fallback for no-JS users; JS overrides it.
  document.querySelectorAll('a[data-role="whatsapp-link"]').forEach(a => {
    a.setAttribute('href', `https://wa.me/${WHATSAPP_NUMBER}`);
  });

  // Language buttons
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });

  // Default to Italian unless user previously chose another
  let initialLang = 'it';
  try {
    const saved = localStorage.getItem('lang');
    if (saved && translations[saved]) initialLang = saved;
  } catch (e) {}
  setLanguage(initialLang);

  // Mobile menu — accessible toggle with body-scroll lock and auto-close
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
      document.body.classList.remove('menu-open');
    };
    const openMenu = () => {
      navLinks.classList.add('open');
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.textContent = '✕';
      document.body.classList.add('menu-open');
    };
    menuToggle.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) closeMenu();
      else openMenu();
    });
    // Close menu when tapping a nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
    // Close menu on resize back to desktop width
    window.addEventListener('resize', () => {
      if (window.innerWidth > 820) closeMenu();
    });
    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) closeMenu();
    });
  }

  // Scroll-to-top button — show after threshold, smooth-scroll on click
  const scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    const threshold = 400;
    const toggleScrollBtn = () => {
      if (window.scrollY > threshold) scrollTopBtn.classList.add('visible');
      else scrollTopBtn.classList.remove('visible');
    };
    toggleScrollBtn();
    window.addEventListener('scroll', toggleScrollBtn, { passive: true });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form
  const form = document.getElementById('contactForm');
  if (form) form.addEventListener('submit', sendForm);
});
