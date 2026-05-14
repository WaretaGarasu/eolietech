/* ============================================================
   Eolietech — main script
   - i18n (Italian default + English toggle)
   - Mobile menu
   - Footer year
   - Contact form -> Web3Forms (email) + WhatsApp
   ============================================================ */

/* ---------- Contact constants ----------
   Single source of truth for the WhatsApp number.
   Any anchor with data-role="whatsapp-link" is rewritten on
   DOMContentLoaded to point at https://wa.me/<WHATSAPP_NUMBER>.
   Update this one constant when the number changes. */
const WHATSAPP_NUMBER = '393518579386';
const WEB3FORMS_KEY = '1ef6c2ca-c102-4d38-9115-a2dfba1b3836';

/* ---------- Translations ---------- */
const translations = {
  it: {
    "brand.name": "Eolietech",
    "meta.title": "Eolietech — Servizi IT a Lipari, Messina e online",
    "meta.description": "Tecnico IT per Lipari, Isole Eolie e Messina: videosorveglianza CCTV, riparazione PC, assemblaggio custom, domotica, reti Wi-Fi e siti web.",
    "meta.ogTitle": "Eolietech — Servizi IT per le Isole Eolie e la Sicilia",
    "meta.ogDescription": "Videosorveglianza CCTV, riparazione PC, assemblaggio custom, domotica, reti Wi-Fi e sviluppo siti web nelle Isole Eolie, Messina e tutta Italia.",
    "meta.ogLocale": "it_IT",
    "meta.ogLocaleAlt": "en_US",
    "meta.twitterTitle": "Eolietech — Servizi IT",
    "meta.twitterDescription": "CCTV, riparazione PC, assemblaggio custom, domotica, reti Wi-Fi e sviluppo siti web nelle Isole Eolie, a Messina e in tutta Italia.",
    "nav.services": "Servizi",
    "nav.about": "Chi sono",
    "nav.contact": "Contatti",
    "nav.faq": "FAQ",
    "nav.themeToggle": "Passa al tema scuro",
    "nav.themeToggleLight": "Passa al tema chiaro",
    "nav.scrollTop": "Torna su",
    "nav.drawerEyebrow": "Navigazione",
    "nav.drawerTitle": "Scegli una sezione",
    "hero.title1": "Soluzioni IT affidabili per",
    "hero.title2": "casa e impresa",
    "hero.lead": "Tecnico IT per Lipari, Isole Eolie e Messina. Videosorveglianza, riparazione PC, assemblaggio custom, domotica, reti Wi-Fi e sviluppo siti web professionali.",
    "hero.cta1": "Scrivimi su WhatsApp",
    "hero.cta2": "Scopri i servizi",
    "hero.cta3": "Inviami una email",
    "hero.meta1": "3 anni di esperienza",
    "hero.meta2": "Lipari · Vulcano · Messina · Italia",
    "hero.meta3": "Preventivi gratuiti",
    "services.eyebrow": "Servizi",
    "services.title": "Tutto ciò che serve, in un unico tecnico",
    "services.subtitle": "Dalla sicurezza della tua casa alla presenza online della tua attività, con interventi a Lipari, nelle Eolie e a Messina.",
    "services.cctv.title": "Videosorveglianza CCTV",
    "services.cctv.desc": "Progettazione, installazione e configurazione di sistemi di telecamere per casa, negozi e aziende. Scelgo soluzioni affidabili in base a budget, ambiente e necessità reali.",
    "services.cctv.li1": "Sopralluogo e consulenza gratuita",
    "services.cctv.li2": "Telecamere IP, WiFi e analogiche (4K, visione notturna)",
    "services.cctv.li3": "Accesso remoto da smartphone e notifiche in tempo reale",
    "services.cctv.li4": "NVR/DVR e archiviazione cloud o locale",
    "services.cctv.li5": "Manutenzione, aggiornamenti e assistenza post-installazione",
    "services.pc.title": "Riparazione PC",
    "services.pc.desc": "Diagnostica completa, riparazione hardware e software, upgrade prestazionali, pulizia e recupero dati per ogni tipo di computer.",
    "services.pc.li1": "Diagnosi gratuita e preventivo prima dell'intervento",
    "services.pc.li2": "Rimozione virus, malware e ottimizzazione del sistema",
    "services.pc.li3": "Sostituzione SSD, RAM, batterie, ventole e schermi",
    "services.pc.li4": "Installazione e configurazione di Windows, macOS e Linux",
    "services.pc.li5": "Backup, recupero dati, stampanti e periferiche",
    "services.customPc.title": "Assemblaggio PC Custom e Gaming",
    "services.customPc.desc": "PC desktop su misura per gaming, lavoro, studio e creazione contenuti: scelgo componenti equilibrati, compatibili e pensati per durare.",
    "services.customPc.li1": "Scelta componenti in base a budget e obiettivo",
    "services.customPc.li2": "Assemblaggio pulito, cable management e test stabilità",
    "services.customPc.li3": "Installazione sistema operativo, driver e software essenziali",
    "services.customPc.li4": "Upgrade GPU, CPU, RAM, SSD e alimentatore",
    "services.customPc.li5": "Ottimizzazione temperature, airflow e prestazioni gaming",
    "services.smartHome.title": "Domotica e Smart Home",
    "services.smartHome.desc": "Configurazione di dispositivi smart, automazioni e controllo da smartphone per rendere casa, B&B o ufficio più comodi e sicuri.",
    "services.smartHome.li1": "Luci, prese, sensori, videocitofoni e termostati smart",
    "services.smartHome.li2": "Automazioni per sicurezza, comfort e risparmio energetico",
    "services.smartHome.li3": "Assistenti vocali, app e controllo remoto",
    "services.smartHome.li4": "Integrazione con Wi-Fi, telecamere e reti esistenti",
    "services.smartHome.li5": "Supporto per case vacanza, B&B e abitazioni private",
    "services.web.title": "Sviluppo siti web",
    "services.web.desc": "Siti vetrina, landing page, e-commerce e portali aziendali su misura. Sviluppo moderno mobile-first, ottimizzato per Google e per la velocità di caricamento.",
    "services.web.li1": "Design moderno, responsive e mobile-first",
    "services.web.li2": "Sviluppo custom (HTML/CSS/JS) oppure WordPress",
    "services.web.li3": "Ottimizzazione SEO e Core Web Vitals (velocità, accessibilità)",
    "services.web.li4": "E-commerce con WooCommerce o soluzioni personalizzate",
    "services.web.li5": "Dominio, hosting, email, manutenzione e backup",
    "services.net.title": "Reti Wi-Fi e Networking",
    "services.net.desc": "Setup, ottimizzazione e risoluzione problemi di reti domestiche e aziendali. Router, switch, access point e cablaggio strutturato per case, negozi e uffici.",
    "services.net.li1": "Installazione e configurazione router, switch e access point",
    "services.net.li2": "Estensione copertura Wi-Fi (mesh, repeater, powerline)",
    "services.net.li3": "Cablaggio strutturato (CAT5e/CAT6) per uffici e abitazioni",
    "services.net.li4": "Diagnosi e risoluzione problemi di connettività",
    "services.net.li5": "Reti ospiti, VPN, NAS e sicurezza domestica",
    "process.eyebrow": "Come lavoro",
    "process.title": "Semplice, trasparente, senza sorprese",
    "process.subtitle": "Tre passi per risolvere il tuo problema o avviare il tuo progetto.",
    "process.step1.title": "Contattami",
    "process.step1.desc": "Descrivimi brevemente cosa ti serve — via WhatsApp, email o dal modulo qui sotto. Rispondo entro 24 ore.",
    "process.step2.title": "Sopralluogo e preventivo",
    "process.step2.desc": "Valutiamo insieme la situazione (di persona o da remoto) e ti preparo un preventivo dettagliato, gratuito e senza impegno.",
    "process.step3.title": "Intervento e assistenza",
    "process.step3.desc": "Eseguo il lavoro concordato con cura, ti aggiorno in tempo reale e rimango disponibile anche dopo la consegna.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Domande frequenti",
    "faq.subtitle": "Tutto quello che vuoi sapere prima di contattarmi.",
    "faq.q1": "Quanto costa un impianto di videosorveglianza?",
    "faq.a1": "Il costo dipende dal numero di telecamere, dal tipo di installazione e dalle funzioni richieste. Offro un sopralluogo gratuito e un preventivo personalizzato senza impegno prima di iniziare.",
    "faq.q2": "Fate riparazione PC a domicilio nelle Isole Eolie?",
    "faq.a2": "Sì, effettuo interventi a domicilio a Lipari, Vulcano e Messina. Per casi di urgenza sono disponibile anche nei weekend.",
    "faq.q3": "Quanto costa un sito web professionale?",
    "faq.a3": "Il prezzo dipende da obiettivi, numero di pagine, contenuti, lingue e funzionalità richieste. Ti preparo sempre un preventivo chiaro e gratuito prima di iniziare.",
    "faq.q4": "Offrite configurazione Wi-Fi e reti per case vacanza e B&B?",
    "faq.a4": "Assolutamente sì. È una delle richieste più frequenti nelle Isole Eolie, dove molte strutture ricettive hanno bisogno di copertura Wi-Fi affidabile. Gestisco installazione, configurazione rete ospiti, sicurezza e assistenza da remoto.",
    "faq.q5": "Lavorate anche a distanza per lo sviluppo web?",
    "faq.a5": "Sì, tutti i progetti web vengono gestiti completamente da remoto. Clienti da tutta Italia possono commissionare un sito senza doversi spostare.",
    "faq.q6": "Offrite assistenza per clienti stranieri nelle Isole Eolie?",
    "faq.a6": "Assolutamente sì. Parlo italiano, inglese e francese e lavoro con clienti di ogni nazionalità. Le Isole Eolie attraggono turisti e residenti stranieri e offro assistenza tecnica completa in tutte e tre le lingue.",
    "about.eyebrow": "Chi sono",
    "about.title": "Un tecnico di fiducia, vicino a te",
    "about.p1": "Sono Francesco, tecnico IT con 3 anni di esperienza. Mi occupo di videosorveglianza CCTV, riparazione computer, assemblaggio PC, domotica, reti Wi-Fi e sviluppo siti web.",
    "about.p2": "Lavoro principalmente nelle Isole Eolie (Lipari, Vulcano e dintorni) e a Messina per gli interventi tecnici, mentre per i siti web offro il servizio in tutta Italia. Il mio obiettivo è offrire soluzioni semplici, efficaci e accessibili a privati e piccole imprese.",
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
    "contact.note.title": "Per un preventivo più rapido",
    "contact.note.text": "Scrivimi cosa ti serve, dove intervenire e quando sei disponibile. Più dettagli mi dai, più preciso sarà il preventivo.",
    "contact.note.tag1": "Problema",
    "contact.note.tag2": "Luogo",
    "contact.note.tag3": "Disponibilità",
    "contact.note.aria": "Informazioni utili per il preventivo",
    "contact.map.eyebrow": "Zona operativa",
    "contact.map.title": "Zona di servizio",
    "contact.map.subtitle": "Interventi tecnici nelle Isole Eolie (Lipari, Vulcano) e a Messina.",
    "contact.form.title": "Richiedi un preventivo",
    "contact.form.subtitle": "Compila il modulo: ti scriverò io.",
    "contact.form.name": "Nome",
    "contact.form.namePlaceholder": "Es: Mario Rossi",
    "contact.form.email": "Email",
    "contact.form.phone": "Telefono / WhatsApp",
    "contact.form.phonePlaceholder": "Es: +39 333 123 4567",
    "contact.form.service": "Servizio",
    "contact.form.choose": "— Seleziona —",
    "contact.form.other": "Altro",
    "contact.form.message": "Messaggio",
    "contact.form.messagePlaceholder": "Es: 3 telecamere per casa a Lipari, oppure sito vetrina per attività.",
    "contact.form.availability": "Quando sei disponibile? (opzionale)",
    "contact.form.availabilityPlaceholder": "Es: lunedì pomeriggio, weekend, dopo le 18",
    "contact.form.contactHint": "Inserisci almeno email o telefono, così posso risponderti.",
    "contact.form.requiredFeedback": "Compila nome, servizio, messaggio e almeno un contatto tra email e telefono.",
    "contact.form.send": "Invia richiesta",
    "contact.form.privacy": "Inviando accetti la nostra <a href=\"/privacy\">Informativa sulla Privacy</a>.",
    "footer.tagline": "Servizi IT in Sicilia e in tutta Italia",
    "footer.built": "Fatto con",
    "footer.builtBy": "da",
    "footer.privacy": "Informativa sulla Privacy",
    "nf.metaTitle": "Pagina non trovata — Eolietech",
    "nf.title": "Pagina non trovata",
    "nf.lead": "Spiacente, la pagina che stai cercando non esiste o è stata spostata.",
    "nf.cta.home": "Torna alla home",
    "privacy.metaTitle": "Informativa sulla Privacy — Eolietech",
    "privacy.metaDesc": "Informativa sul trattamento dei dati personali raccolti tramite il sito eolietech.com.",
    "privacy.eyebrow": "Documenti legali",
    "privacy.title": "Informativa sulla Privacy",
    "privacy.lastUpdated": "Ultimo aggiornamento: maggio 2026",
    "privacy.sec1.title": "1. Titolare del trattamento",
    "privacy.sec1.text": "Il titolare del trattamento dei dati è Francesco (WaretaGarasu), raggiungibile all'indirizzo email info@eolietech.com.",
    "privacy.sec2.title": "2. Dati raccolti",
    "privacy.sec2.text": "Tramite il modulo di contatto raccogliamo: nome, indirizzo email o numero di telefono/WhatsApp, servizio richiesto, messaggio ed eventuale disponibilità indicata. Nessun altro dato personale viene raccolto automaticamente dal sito.",
    "privacy.sec3.title": "3. Finalità del trattamento",
    "privacy.sec3.text": "I dati sono raccolti esclusivamente per rispondere alle richieste di preventivo e fornire assistenza tecnica.",
    "privacy.sec4.title": "4. Base giuridica",
    "privacy.sec4.text": "Il trattamento è basato sull'art. 6(1)(b) del GDPR (esecuzione di un contratto o misure precontrattuali su richiesta dell'interessato).",
    "privacy.sec5.title": "5. Destinatari dei dati",
    "privacy.sec5.text": "I dati del modulo di contatto sono trasmessi a Web3Forms Inc. (USA), che agisce come responsabile del trattamento per l'inoltro delle email. Se scegli di inviare la richiesta tramite WhatsApp, il messaggio viene aperto su WhatsApp con i dati inseriti nel modulo. I dati non vengono venduti né ceduti a terzi per scopi commerciali.",
    "privacy.sec6.title": "6. Conservazione dei dati",
    "privacy.sec6.text": "I dati sono conservati per il tempo strettamente necessario a evadere la richiesta e, successivamente, per un massimo di 90 giorni prima di essere eliminati.",
    "privacy.sec7.title": "7. Preferenze salvate sul dispositivo",
    "privacy.sec7.text": "Le tue preferenze di tema (chiaro/scuro) e lingua vengono salvate direttamente sul tuo dispositivo, nel tuo browser. Questi dati non vengono mai inviati a noi né a terzi: rimangono sul tuo computer o telefono come memoria locale, funzionano in modo diverso dai cookie di tracciamento e non trasmettono nulla al server.",
    "privacy.sec8.title": "8. Diritti dell'interessato",
    "privacy.sec8.text": "Hai il diritto di accedere, rettificare, cancellare o limitare il trattamento dei tuoi dati, nonché il diritto alla portabilità e il diritto di opposizione (artt. 15–21 GDPR). Per esercitare questi diritti, scrivi a info@eolietech.com.",
    "privacy.sec9.title": "9. Servizi esterni",
    "privacy.sec9.text": "La mappa nella pagina contatti è fornita da Google Maps e viene caricata solo se accetti dall'avviso in basso alla pagina. Se rifiuti, potrai comunque caricarla manualmente in qualsiasi momento. I link a WhatsApp, Telegram, Fiverr e WaretaGarasu aprono servizi esterni con le rispettive informative privacy.",
    "privacy.sec10.title": "10. Reclami",
    "privacy.sec10.text": "Hai il diritto di presentare reclamo al Garante per la protezione dei dati personali: www.garanteprivacy.it.",
    "privacy.back": "← Torna alla home",
    "privacy.tldr.eyebrow": "In breve",
    "privacy.tldr.text": "Non vendiamo i tuoi dati. Usiamo solo quello che ci invii nel modulo di contatto, per risponderti. La mappa Google Maps si carica solo se accetti. Le preferenze di tema e lingua rimangono sul tuo dispositivo e non vengono mai inviate a noi.",
    "cookie.msg": "Salviamo le preferenze di tema e lingua sul tuo dispositivo. Google Maps si carica solo se accetti. <a href=\"/privacy\">Leggi la privacy policy</a>.",
    "cookie.accept": "Accetta",
    "cookie.decline": "Rifiuta",
    "cookie.aria": "Avviso sui cookie",
    "cookie.mapPlaceholder": "Abilita Google Maps per vedere la zona di servizio.",
    "cookie.mapLoad": "Mostra mappa",
    "contact.map.iframeTitle": "Mappa della zona di servizio — Lipari e Vulcano"
  },
  en: {
    "brand.name": "Eolietech",
    "meta.title": "Eolietech — IT Services in Lipari, Messina and Online",
    "meta.description": "IT technician for Lipari, the Aeolian Islands and Messina: CCTV, PC repair, custom builds, smart home setup, Wi-Fi networking and websites.",
    "meta.ogTitle": "Eolietech — IT Services in the Aeolian Islands & Sicily",
    "meta.ogDescription": "Professional CCTV, PC repair, custom PC builds, smart home setup, Wi-Fi networking and web development in the Aeolian Islands, Messina and across Italy.",
    "meta.ogLocale": "en_US",
    "meta.ogLocaleAlt": "it_IT",
    "meta.twitterTitle": "Eolietech — IT Services",
    "meta.twitterDescription": "CCTV, PC repair, custom PC builds, smart home setup, Wi-Fi networking and web development in the Aeolian Islands, Messina and across Italy.",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.faq": "FAQ",
    "nav.themeToggle": "Switch to dark theme",
    "nav.themeToggleLight": "Switch to light theme",
    "nav.scrollTop": "Back to top",
    "nav.drawerEyebrow": "Browse",
    "nav.drawerTitle": "Pick a section",
    "hero.title1": "Reliable IT solutions for",
    "hero.title2": "home and business",
    "hero.lead": "IT technician for Lipari, the Aeolian Islands and Messina. CCTV, PC repair, custom builds, smart home setup, Wi-Fi networking and professional web development.",
    "hero.cta1": "Message me on WhatsApp",
    "hero.cta2": "See the services",
    "hero.cta3": "Send me an email",
    "hero.meta1": "3 years of experience",
    "hero.meta2": "Lipari · Vulcano · Messina · Italy",
    "hero.meta3": "Free quotes",
    "services.eyebrow": "Services",
    "services.title": "Everything you need, from one technician",
    "services.subtitle": "From securing your home to building your online presence, with on-site work in Lipari, the Aeolian Islands and Messina.",
    "services.cctv.title": "CCTV & Surveillance",
    "services.cctv.desc": "Design, installation and configuration of camera systems for homes, shops and businesses. I choose reliable solutions based on budget, environment and real needs.",
    "services.cctv.li1": "Free on-site assessment and consultation",
    "services.cctv.li2": "IP, WiFi and analog cameras (4K, night vision)",
    "services.cctv.li3": "Remote smartphone access and real-time alerts",
    "services.cctv.li4": "NVR/DVR systems with cloud or local storage",
    "services.cctv.li5": "Maintenance, firmware updates and post-install support",
    "services.pc.title": "PC Repair",
    "services.pc.desc": "Full diagnostics, hardware and software repair, performance upgrades, cleaning and data recovery for any type of computer.",
    "services.pc.li1": "Free diagnosis and quote before any work begins",
    "services.pc.li2": "Virus and malware removal, system optimization",
    "services.pc.li3": "SSD, RAM, battery, fan and screen replacement",
    "services.pc.li4": "Windows, macOS and Linux install & configuration",
    "services.pc.li5": "Backup, data recovery, printers and peripherals",
    "services.customPc.title": "Custom & Gaming PC Builds",
    "services.customPc.desc": "Custom desktop PCs for gaming, work, study and content creation: balanced, compatible parts chosen to last.",
    "services.customPc.li1": "Component selection based on budget and goal",
    "services.customPc.li2": "Clean assembly, cable management and stability testing",
    "services.customPc.li3": "Operating system, driver and essential software setup",
    "services.customPc.li4": "GPU, CPU, RAM, SSD and PSU upgrades",
    "services.customPc.li5": "Temperature, airflow and gaming performance optimization",
    "services.smartHome.title": "Smart Home Setup",
    "services.smartHome.desc": "Smart devices, automations and smartphone control for a more comfortable and secure home, B&B or office.",
    "services.smartHome.li1": "Smart lights, plugs, sensors, doorbells and thermostats",
    "services.smartHome.li2": "Automations for security, comfort and energy savings",
    "services.smartHome.li3": "Voice assistants, apps and remote control",
    "services.smartHome.li4": "Integration with Wi-Fi, cameras and existing networks",
    "services.smartHome.li5": "Support for holiday homes, B&Bs and private homes",
    "services.web.title": "Web Development",
    "services.web.desc": "Showcase sites, landing pages, e-commerce and business portals built to order. Modern mobile-first development, optimized for Google and loading speed.",
    "services.web.li1": "Modern, responsive, mobile-first design",
    "services.web.li2": "Custom build (HTML/CSS/JS) or WordPress",
    "services.web.li3": "SEO optimization and Core Web Vitals (speed, accessibility)",
    "services.web.li4": "E-commerce with WooCommerce or custom solutions",
    "services.web.li5": "Domain, hosting, email, maintenance and backups",
    "services.net.title": "Wi-Fi & Networking",
    "services.net.desc": "Setup, optimization and troubleshooting of home and business networks. Routers, switches, access points and structured cabling for homes, shops and offices.",
    "services.net.li1": "Router, switch and access point installation and configuration",
    "services.net.li2": "Wi-Fi coverage extension (mesh, repeater, powerline)",
    "services.net.li3": "Structured cabling (CAT5e/CAT6) for offices and homes",
    "services.net.li4": "Connectivity diagnosis and troubleshooting",
    "services.net.li5": "Guest networks, VPN, NAS and home security",
    "process.eyebrow": "How I work",
    "process.title": "Simple, transparent, no surprises",
    "process.subtitle": "Three steps to solve your problem or launch your project.",
    "process.step1.title": "Get in touch",
    "process.step1.desc": "Describe what you need — via WhatsApp, email or the form below. I'll reply within 24 hours.",
    "process.step2.title": "Assessment and quote",
    "process.step2.desc": "We assess the situation together (in person or remotely) and I prepare a detailed, free, no-obligation quote.",
    "process.step3.title": "Work and support",
    "process.step3.desc": "I carry out the agreed work carefully, keep you updated in real time and remain available after delivery.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Frequently asked questions",
    "faq.subtitle": "Everything you want to know before getting in touch.",
    "faq.q1": "How much does a CCTV system cost?",
    "faq.a1": "The cost depends on the number of cameras, the type of installation and the features required. I offer a free on-site assessment and a personalised quote with no obligation before starting.",
    "faq.q2": "Do you repair PCs at home in the Aeolian Islands?",
    "faq.a2": "Yes, I carry out on-site repairs in Lipari, Vulcano and Messina. For urgent cases I'm also available on weekends.",
    "faq.q3": "How much does a professional website cost?",
    "faq.a3": "The price depends on goals, number of pages, content, languages and required features. I always prepare a clear, free quote before starting.",
    "faq.q4": "Do you offer Wi-Fi and network setup for holiday homes and B&Bs?",
    "faq.a4": "Absolutely. It is one of the most frequent requests in the Aeolian Islands, where many accommodation providers need reliable Wi-Fi coverage. I handle installation, guest network configuration, security and remote support.",
    "faq.q5": "Do you work remotely for web development?",
    "faq.a5": "Yes, all web projects are managed entirely remotely. Clients from all over Italy can commission a website without any travel.",
    "faq.q6": "Do you assist foreign clients in the Aeolian Islands?",
    "faq.a6": "Absolutely. I speak Italian, English and French and work with clients of any nationality. The Aeolian Islands attract tourists and foreign residents and I offer full technical assistance in all three languages.",
    "about.eyebrow": "About",
    "about.title": "A trusted technician, close to you",
    "about.p1": "I'm Francesco, an IT technician with 3 years of experience. I handle CCTV systems, computer repair, custom PC builds, smart home setup, Wi-Fi networks and website development.",
    "about.p2": "I work mainly in the Aeolian Islands (Lipari, Vulcano and surroundings) and in Messina for on-site jobs, while web development services are available throughout Italy. My goal is to offer simple, effective and accessible solutions to individuals and small businesses.",
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
    "contact.note.title": "For a faster quote",
    "contact.note.text": "Tell me what you need, where the job is and when you are available. The more details you give, the more precise the quote will be.",
    "contact.note.tag1": "Issue",
    "contact.note.tag2": "Location",
    "contact.note.tag3": "Availability",
    "contact.note.aria": "Useful details for the quote",
    "contact.map.eyebrow": "Service area",
    "contact.map.title": "Service area",
    "contact.map.subtitle": "On-site IT services in the Aeolian Islands (Lipari, Vulcano) and Messina.",
    "contact.form.title": "Request a quote",
    "contact.form.subtitle": "Fill in the form and I'll get back to you.",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "Example: Mario Rossi",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone / WhatsApp",
    "contact.form.phonePlaceholder": "Example: +39 333 123 4567",
    "contact.form.service": "Service",
    "contact.form.choose": "— Select —",
    "contact.form.other": "Other",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Example: 3 cameras for a house in Lipari, or a showcase website for a business.",
    "contact.form.availability": "When are you available? (optional)",
    "contact.form.availabilityPlaceholder": "Example: Monday afternoon, weekend, after 6pm",
    "contact.form.contactHint": "Enter at least an email or phone number so I can reply.",
    "contact.form.requiredFeedback": "Please fill in name, service, message and at least one contact method: email or phone.",
    "contact.form.send": "Send request",
    "contact.form.privacy": "By submitting you agree to our <a href=\"/privacy\">Privacy Policy</a>.",
    "footer.tagline": "IT services in Sicily and across Italy",
    "footer.built": "Made with",
    "footer.builtBy": "by",
    "footer.privacy": "Privacy Policy",
    "nf.metaTitle": "Page not found — Eolietech",
    "nf.title": "Page not found",
    "nf.lead": "Sorry, the page you're looking for doesn't exist or has been moved.",
    "nf.cta.home": "Back to home",
    "privacy.metaTitle": "Privacy Policy — Eolietech",
    "privacy.metaDesc": "Privacy policy for personal data collected through the eolietech.com website.",
    "privacy.eyebrow": "Legal",
    "privacy.title": "Privacy Policy",
    "privacy.lastUpdated": "Last updated: May 2026",
    "privacy.sec1.title": "1. Data Controller",
    "privacy.sec1.text": "The data controller is Francesco (WaretaGarasu), reachable at info@eolietech.com.",
    "privacy.sec2.title": "2. Data Collected",
    "privacy.sec2.text": "Through the contact form we collect: name, email address or phone/WhatsApp number, requested service, message and any availability you provide. No other personal data is collected automatically by the website.",
    "privacy.sec3.title": "3. Purpose of Processing",
    "privacy.sec3.text": "Data is collected solely to respond to quote requests and provide technical assistance.",
    "privacy.sec4.title": "4. Legal Basis",
    "privacy.sec4.text": "Processing is based on Art. 6(1)(b) GDPR (performance of a contract or pre-contractual measures at the request of the data subject).",
    "privacy.sec5.title": "5. Data Recipients",
    "privacy.sec5.text": "Contact form data is transmitted to Web3Forms Inc. (USA), acting as data processor for email forwarding. If you choose to send the request through WhatsApp, the message opens in WhatsApp with the data entered in the form. Data is not sold or shared with third parties for commercial purposes.",
    "privacy.sec6.title": "6. Data Retention",
    "privacy.sec6.text": "Data is retained for the time strictly necessary to fulfil the request and, thereafter, for a maximum of 90 days before deletion.",
    "privacy.sec7.title": "7. Preferences saved on your device",
    "privacy.sec7.text": "Your theme (light/dark) and language preferences are saved directly on your device, in your browser. This data is never sent to us or any third party: it stays on your computer or phone as local browser memory, works differently from tracking cookies, and transmits nothing to the server.",
    "privacy.sec8.title": "8. Your Rights",
    "privacy.sec8.text": "You have the right to access, rectify, erase or restrict processing of your data, as well as the right to data portability and the right to object (Arts. 15–21 GDPR). To exercise these rights, write to info@eolietech.com.",
    "privacy.sec9.title": "9. External Services",
    "privacy.sec9.text": "The map in the contact section is provided by Google Maps and only loads if you accept from the notice at the bottom of the page. If you decline, you can still load the map manually at any time. Links to WhatsApp, Telegram, Fiverr and WaretaGarasu open external services with their own privacy policies.",
    "privacy.sec10.title": "10. Complaints",
    "privacy.sec10.text": "You have the right to lodge a complaint with the Italian data protection authority: www.garanteprivacy.it.",
    "privacy.back": "← Back to home",
    "privacy.tldr.eyebrow": "In short",
    "privacy.tldr.text": "We don't sell your data. We only use what you send us in the contact form, to reply to you. Google Maps only loads if you accept. Theme and language preferences stay on your device and are never sent to us.",
    "cookie.msg": "We save your theme and language preferences on your device. Google Maps only loads if you accept. <a href=\"/privacy\">Read our privacy policy</a>.",
    "cookie.accept": "Accept",
    "cookie.decline": "Decline",
    "cookie.aria": "Cookie notice",
    "cookie.mapPlaceholder": "Enable Google Maps to see the service area.",
    "cookie.mapLoad": "Show map",
    "contact.map.iframeTitle": "Lipari and Vulcano service area map"
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

  // HTML translations — elements containing markup such as links
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const value = translations[lang]?.[key];
    if (value) el.innerHTML = value;
  });

  // Translatable aria-labels (e.g. scroll-to-top button)
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const value = translations[lang][key];
    if (value) el.setAttribute('aria-label', value);
  });

  // Generic attribute translations: data-i18n-attr="attrName:translation.key"
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const pairs = (el.getAttribute('data-i18n-attr') || '')
      .split(',')
      .map(part => part.trim())
      .filter(Boolean);
    pairs.forEach(pair => {
      const sepIndex = pair.indexOf(':');
      if (sepIndex < 1) return;
      const attrName = pair.slice(0, sepIndex).trim();
      const key = pair.slice(sepIndex + 1).trim();
      const value = translations[lang][key];
      if (attrName && value) el.setAttribute(attrName, value);
    });
  });

  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  document.querySelectorAll('.lang-toggle').forEach(toggle => {
    toggle.setAttribute('data-active-lang', lang);
  });

  try { localStorage.setItem('lang', lang); } catch (e) {}

  // Keep theme toggle label consistent with current theme and language
  applyTheme(document.documentElement.getAttribute('data-theme') || resolvedTheme());
}

function languageFromUrl() {
  try {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang');
    return translations[lang] ? lang : null;
  } catch (e) {
    return null;
  }
}

function setLanguageUrl(lang) {
  if (!translations[lang] || !window.history || !window.location) return;
  try {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
  } catch (e) {}
}

const VALID_THEMES = ['light', 'dark'];

function getStoredTheme() {
  try {
    const stored = localStorage.getItem('theme');
    return VALID_THEMES.includes(stored) ? stored : null;
  } catch (e) {
    return null;
  }
}

function resolvedTheme() {
  const stored = getStoredTheme();
  if (stored) return stored;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function applyTheme(theme) {
  const safeTheme = VALID_THEMES.includes(theme) ? theme : 'light';
  const root = document.documentElement;
  root.setAttribute('data-theme', safeTheme);
  const colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');
  if (colorSchemeMeta) {
    colorSchemeMeta.setAttribute('content', safeTheme === 'dark' ? 'dark light' : 'light dark');
  }
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    themeColorMeta.setAttribute('content', safeTheme === 'dark' ? '#050a16' : '#ffffff');
  }
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    const isDark = safeTheme === 'dark';
    toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    const lang = root.lang && translations[root.lang] ? root.lang : 'it';
    const key = 'nav.themeToggle';
    const lightKey = 'nav.themeToggleLight';
    const label = isDark
      ? (translations[lang][lightKey] || (lang === 'en' ? 'Switch to light theme' : 'Passa al tema chiaro'))
      : (translations[lang][key] || (lang === 'en' ? 'Switch to dark theme' : 'Passa al tema scuro'));
    toggle.setAttribute('aria-label', label);
  }
}

/* ---------- Form -> Web3Forms (email) + WhatsApp ---------- */
function getContactFormState(form) {
  const emailEl = form?.querySelector('#email');
  const phoneEl = form?.querySelector('#phone');
  const email = emailEl?.value.trim() || '';
  const phone = phoneEl?.value.trim() || '';

  return {
    name: form?.querySelector('#name')?.value.trim() || '',
    emailEl,
    phoneEl,
    email,
    phone,
    service: form?.querySelector('#service')?.value || '',
    message: form?.querySelector('#message')?.value.trim() || '',
    emailIsValid: !emailEl || !email || emailEl.validity.valid,
    hasContactMethod: Boolean(email || phone)
  };
}

function isContactFormReady(form) {
  if (!form) return false;
  const state = getContactFormState(form);
  return Boolean(
    state.name &&
    state.service &&
    state.message &&
    state.hasContactMethod &&
    state.emailIsValid
  );
}

function updateContactSubmitState(form) {
  const targetForm = form || document.getElementById('contactForm');
  if (!targetForm) return;
  const submitBtn = targetForm.querySelector('button[type="submit"]');
  if (!submitBtn) return;
  const ready = isContactFormReady(targetForm);
  const state = getContactFormState(targetForm);
  submitBtn.disabled = !ready;
  submitBtn.setAttribute('aria-disabled', ready ? 'false' : 'true');
  if (state.emailEl) {
    state.emailEl.setAttribute('aria-invalid', state.emailIsValid ? 'false' : 'true');
  }
  if (state.phoneEl) {
    state.phoneEl.setAttribute('aria-invalid', 'false');
  }
}

async function sendForm(e) {
  e.preventDefault();
  const lang = document.documentElement.lang || 'it';
  const form = e.currentTarget;
  const feedbackEl = document.getElementById('contactFormFeedback');
  const submitBtn = form ? form.querySelector('button[type="submit"]') : null;
  const name = document.getElementById('name').value.trim();
  const emailEl = document.getElementById('email');
  const email = emailEl ? emailEl.value.trim() : '';
  const phone = document.getElementById('phone')?.value.trim() || '';
  const availability = document.getElementById('availability')?.value.trim() || '';
  const serviceSelect = document.getElementById('service');
  const serviceLabel = serviceSelect.options[serviceSelect.selectedIndex].text;
  const message = document.getElementById('message').value.trim();

  if (!isContactFormReady(form)) {
    if (feedbackEl) {
      feedbackEl.textContent = translations[lang]?.['contact.form.requiredFeedback'] ||
        (lang === 'en'
          ? 'Please complete all required fields before sending.'
          : 'Compila tutti i campi obbligatori prima di inviare.');
    }
    updateContactSubmitState(form);
    return false;
  }

  let intro;
  if (lang === 'en') {
    intro =
      `Hi Francesco,\n\n` +
      `My name is *${name}* and I'm reaching out from your website.\n\n` +
      `▸ Service: ${serviceLabel}\n` +
      (phone ? `▸ Phone / WhatsApp: ${phone}\n` : '') +
      (email ? `▸ Email: ${email}\n` : '') +
      (availability ? `▸ Availability: ${availability}\n` : '') +
      `▸ Message:\n${message}\n\n` +
      `Looking forward to hearing back. Thanks!`;
  } else {
    intro =
      `Ciao Francesco,\n\n` +
      `mi chiamo *${name}* e ti contatto dal tuo sito.\n\n` +
      `▸ Servizio: ${serviceLabel}\n` +
      (phone ? `▸ Telefono / WhatsApp: ${phone}\n` : '') +
      (email ? `▸ Email: ${email}\n` : '') +
      (availability ? `▸ Disponibilità: ${availability}\n` : '') +
      `▸ Messaggio:\n${message}\n\n` +
      `Resto in attesa di una tua risposta. Grazie!`;
  }

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(intro)}`;
  if (feedbackEl) {
    feedbackEl.textContent = lang === 'en'
      ? 'Opening WhatsApp in a new tab...'
      : 'Apro WhatsApp in una nuova scheda...';
  }
  if (submitBtn) submitBtn.disabled = true;

  // Open WhatsApp immediately — don't block on network request
  window.open(waUrl, '_blank');

  // Clear status feedback after a few seconds
  if (feedbackEl) setTimeout(() => { feedbackEl.textContent = ''; }, 4500);

  // Email trail via Web3Forms — silent fail if network unavailable
  try {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name,
        email: email || '(non fornita)',
        phone: phone || '(non fornito)',
        availability: availability || '(non fornita)',
        service: serviceLabel,
        message,
        subject: `[Eolietech] Richiesta da ${name} — ${serviceLabel}`,
        from_name: 'Eolietech Website'
      })
    });
  } catch (_) { /* WhatsApp already opened — email is just the paper trail */ }

  if (submitBtn) {
    setTimeout(() => { updateContactSubmitState(form); }, 600);
  }
  return false;
}

/* ---------- Cookie consent ---------- */
function getConsent() {
  try {
    const val = localStorage.getItem('cookieConsent');
    return val === '1' ? 'accepted' : val; // migrate legacy value
  } catch (e) { return null; }
}
function setConsent(val) {
  try { localStorage.setItem('cookieConsent', val); } catch (e) {}
}
function loadMap() {
  const iframe = document.getElementById('mapIframe');
  const placeholder = document.getElementById('mapPlaceholder');
  if (iframe && !iframe.src) iframe.src = iframe.getAttribute('data-src') || '';
  if (iframe) iframe.style.display = '';
  if (placeholder) placeholder.style.display = 'none';
}
function showMapPlaceholder() {
  const iframe = document.getElementById('mapIframe');
  const placeholder = document.getElementById('mapPlaceholder');
  if (iframe) iframe.style.display = 'none';
  if (placeholder) placeholder.style.display = '';
}
function dismissBanner(banner) {
  if (banner) banner.classList.remove('visible');
  document.body.classList.remove('cookie-banner-open');
}
function initCookieBanner() {
  const banner = document.getElementById('cookieBanner');
  const acceptBtn = document.getElementById('cookieAccept');
  const declineBtn = document.getElementById('cookieDecline');
  const mapLoadBtn = document.getElementById('mapLoadBtn');
  const consent = getConsent();
  if (consent === 'accepted') {
    loadMap();
  } else {
    showMapPlaceholder();
    if (banner && consent === null) {
      banner.classList.add('visible');
      document.body.classList.add('cookie-banner-open');
    }
  }
  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      setConsent('accepted');
      dismissBanner(banner);
      loadMap();
    });
  }
  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      setConsent('declined');
      dismissBanner(banner);
    });
  }
  if (mapLoadBtn) {
    mapLoadBtn.addEventListener('click', () => {
      setConsent('accepted');
      loadMap();
    });
  }
}

/* ---------- Init on page ready ---------- */
document.addEventListener('DOMContentLoaded', function () {
  // Wire every WhatsApp link to the single number constant.
  // Anchors carry a plain href as fallback for no-JS users; JS overrides it.
  document.querySelectorAll('a[data-role="whatsapp-link"]').forEach(a => {
    a.setAttribute('href', `https://wa.me/${WHATSAPP_NUMBER}`);
  });

  // Theme toggle (saved preference first, fallback to system)
  const themeToggle = document.getElementById('themeToggle');
  applyTheme(resolvedTheme());
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }
  if (window.matchMedia) {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const syncWithSystem = (e) => {
      if (!getStoredTheme()) applyTheme(e.matches ? 'dark' : 'light');
    };
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', syncWithSystem);
    } else if (typeof media.addListener === 'function') {
      media.addListener(syncWithSystem);
    }
  }

  // Language buttons
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
      setLanguageUrl(lang);
    });
  });

  // URL language wins; otherwise keep the user's saved preference.
  let initialLang = languageFromUrl() || 'it';
  try {
    const saved = localStorage.getItem('lang');
    if (!languageFromUrl() && saved && translations[saved]) initialLang = saved;
  } catch (e) {}
  setLanguage(initialLang);

  // Mobile menu — accessible toggle with body-scroll lock and auto-close
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    };
    const openMenu = () => {
      navLinks.classList.add('open');
      menuToggle.setAttribute('aria-expanded', 'true');
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

  // Brand link — smooth-scroll to top when already on the home page
  const brandLink = document.querySelector('.brand');
  if (brandLink) {
    brandLink.addEventListener('click', (e) => {
      const path = window.location.pathname;
      if (path === '/' || path.endsWith('/index.html')) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form
  const form = document.getElementById('contactForm');
  if (form) {
    updateContactSubmitState(form);
    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => updateContactSubmitState(form));
      field.addEventListener('change', () => updateContactSubmitState(form));
    });
    form.addEventListener('submit', sendForm);
  }

  // FAQ animated accordion
  initFaqAccordion();

  // Cookie consent + Google Maps gating
  initCookieBanner();
});

function initFaqAccordion() {
  document.querySelectorAll('.faq-summary').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const body = item.querySelector('.faq-body');
      const inner = item.querySelector('.faq-body-inner');
      const isOpen = item.classList.contains('open');

      if (isOpen) {
        body.style.maxHeight = '0';
        btn.setAttribute('aria-expanded', 'false');
        body.setAttribute('aria-hidden', 'true');
        item.classList.remove('open');
      } else {
        body.style.maxHeight = inner.offsetHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
        body.setAttribute('aria-hidden', 'false');
        item.classList.add('open');
      }
    });
  });
}
