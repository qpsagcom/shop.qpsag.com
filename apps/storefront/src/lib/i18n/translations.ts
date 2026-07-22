/**
 * QPS Shop – UI-Übersetzungen (DE / EN)
 * Locale wird aus dem Medusa-Locale-Cookie gelesen.
 * Neue Keys einfach in beiden Sprachen ergänzen.
 */

export type SupportedLocale = "de" | "en"

const translations = {
  de: {
    // Navigation
    nav_account: "Konto",
    nav_cart: "Warenkorb",
    nav_search: "Suchen",
    nav_menu: "Menü",

    // Side menu items
    menu_home: "Startseite",
    menu_home_eyebrow: "Start",
    menu_home_desc: "Robotik und visuelle Inspektion",
    menu_store: "Robotik-Katalog",
    menu_store_eyebrow: "Sortiment",
    menu_store_desc: "AVI-Robot, Roboter, Testsets und Software",
    menu_account_eyebrow: "Beschaffung",
    menu_account_desc: "Bestellungen und Adressen",

    // Footer
    footer_categories: "Kategorien",
    footer_collections: "Kollektionen",
    footer_company: "Unternehmen",
    footer_imprint: "Impressum",
    footer_privacy: "Datenschutz",
    footer_copyright: "Alle Rechte vorbehalten.",
    footer_tagline: "AVI-Roboter, Robotersysteme, Testsets, Software und Inspektionsboxen für die visuelle Inspektion in Pharma, Biotech und Food Tech.",
    footer_contact: "Kontakt",
    footer_location: "Standort",

    // Cart
    cart_empty: "Ihr Warenkorb ist leer",
    cart_subtotal: "Zwischensumme",
    cart_shipping: "Versand",
    cart_taxes: "Steuern",
    cart_total: "Gesamtbetrag",
    cart_checkout: "Zur Kasse",
    cart_continue: "Weiter einkaufen",
    cart_remove: "Entfernen",

    // Checkout
    checkout_shipping_address: "Lieferadresse",
    checkout_billing_address: "Rechnungsadresse",
    checkout_delivery: "Versandmethode",
    checkout_payment: "Zahlung",
    checkout_review: "Überprüfen",
    checkout_place_order: "Bestellung aufgeben",
    checkout_first_name: "Vorname",
    checkout_last_name: "Nachname",
    checkout_address: "Adresse",
    checkout_city: "Stadt",
    checkout_postal_code: "Postleitzahl",
    checkout_country: "Land",
    checkout_phone: "Telefon",
    checkout_email: "E-Mail",
    checkout_same_as_shipping: "Gleiche wie Lieferadresse",

    // Account
    account_login: "Anmelden",
    account_register: "Registrieren",
    account_logout: "Abmelden",
    account_orders: "Bestellungen",
    account_addresses: "Adressen",
    account_profile: "Profil",
    account_welcome: "Willkommen",
    account_no_orders: "Noch keine Bestellungen",

    // Products
    product_add_to_cart: "In den Warenkorb",
    product_out_of_stock: "Nicht verfügbar",
    product_related: "Ähnliche Produkte",
    product_details: "Produktdetails",
    product_shipping_returns: "Versand & Rückgabe",
    product_info_tab: "Produktinformationen",
    product_material: "Material",
    product_country_origin: "Herkunftsland",
    product_type: "Typ",
    product_weight: "Gewicht",
    product_dimensions: "Abmessungen",
    product_fast_delivery: "Schnelle Lieferung",
    product_fast_delivery_body: "Ihr Paket kommt innerhalb von 3–5 Werktagen an Ihrem Abholort oder bei Ihnen zu Hause an.",
    product_exchanges: "Einfacher Umtausch",
    product_exchanges_body: "Passt die Grösse nicht ganz? Kein Problem – wir tauschen Ihr Produkt gegen ein neues um.",
    product_returns: "Einfache Rückgabe",
    product_returns_body: "Geben Sie einfach Ihr Produkt zurück und wir erstatten Ihr Geld. Keine Fragen gestellt.",

    // Price
    price_on_request: "Preis auf Anfrage",
    price_from: "Ab",
    price_original: "Original",

    // Store / Listing
    store_all_products: "Alle Produkte",
    store_sort_by: "Sortieren nach",
    store_sort_created_at: "Neueste",
    store_sort_price_asc: "Preis aufsteigend",
    store_sort_price_desc: "Preis absteigend",
    store_sort_latest: "Neueste Eingänge",
    store_sort_category: "Kategorie",
    store_categories: "Kategorien",
    store_breadcrumb_home: "Startseite",
    store_page_title: "Alle Produkte",

    // Inquiry form
    inquiry_button: "Informationen anfordern",
    inquiry_title: "Informationen anfordern",
    inquiry_name: "Name",
    inquiry_company: "Unternehmen",
    inquiry_email: "E-Mail",
    inquiry_phone: "Telefon",
    inquiry_quantity: "Menge",
    inquiry_message: "Nachricht",
    inquiry_send: "Anfrage senden",
    inquiry_close: "Schliessen",
    inquiry_thank_you: "Danke.",
    inquiry_in_touch: "Wir melden uns in Kürze.",
    inquiry_error: "Anfrage konnte nicht gesendet werden. Bitte erneut versuchen.",

    // Breadcrumb
    breadcrumb_home: "Startseite",
    breadcrumb_all_products: "Alle Produkte",

    // Contact page
    contact_title: "QPS Engineering AG kontaktieren",
    contact_body: "Anfragen zu AVI-Robot, Testsets, Inspektionsboxen, Robotersoftware oder unseren Technologielösungen.",
    contact_get_in_touch: "Kontakt aufnehmen",
    contact_phone: "Telefon",
    contact_website: "Webseite",
    contact_address: "Adresse",

    // Hero
    hero_title: "Products for the Lifesciences",
    hero_subtitle: "QPS Engineering AG bündelt AVI-Roboter, Testsets, Inspektionsboxen und Software für sichere Prüfprozesse in Pharma, Biotech und Food Tech.",
    hero_cta: "Katalog ansehen",
    hero_cta_secondary: "Kontakt",
    hero_pill_1: "Technologielösungen",
    hero_pill_2: "KI-Geschäftssysteme",
    hero_pill_3: "Lösungen für visuelle Inspektion",
    hero_pill_4: "Fehler-Testsets",
    hero_card_label: "Industrielle Robotik",
    hero_card_title: "Testsets und Inspektionsboxen",
    hero_card_body: "Zubehör und Referenzen für visuelle Inspektion, Qualifizierung und reproduzierbare Prüfprozesse.",
    hero_cycle_1: "Positionieren",
    hero_cycle_2: "Prüfen",
    hero_cycle_3: "Dokumentieren",
    hero_focus_body: "Der QPS-Roboter für die visuelle Inspektion in regulierten Umgebungen.",
    hero_cycle_ready: "Zyklus bereit",

    // Home – feature bar
    home_feature1_title: "Industrielle Robotik",
    home_feature1_body: "AVI-Robot und robotische Bausteine für wiederholbare Prüfprozesse in der regulierten Produktion.",
    home_feature2_title: "Testsets für visuelle Inspektion",
    home_feature2_body: "Referenzproben, Fehlerproben und Trainingsmaterial für sichere Prüfentscheidungen.",
    home_feature3_title: "GxP-konforme Lieferung",
    home_feature3_body: "Engineering, Qualifizierung und Compliance-Know-how von QPS Engineering AG.",

    // Home – discover section
    home_discover_eyebrow: "Discover QxTec",
    home_discover_heading: "Ein klares System für regulierte Industrien.",
    home_discover_body: "QPS kombiniert Robotik, visuelle Inspektion und KI, um kundenorientierte Lösungen zu liefern.",

    // Home – workflow steps
    home_step1_title: "Roboterautomatisierung für Life Sciences",
    home_step1_eyebrow: "Roboterlösungen",
    home_step1_body: "QPS liefert schlüsselfertige Roboterautomatisierung für Life-Science-Anwendungen – vom Konzept bis zum validierten System. Design, Integration und regulatorische Compliance werden mit einem herstellerneutralen Full-Service-Ansatz abgedeckt, der auf Ihre Prozessanforderungen zugeschnitten ist.",

    home_step2_title: "KI-Geschäftssysteme",
    home_step2_eyebrow: "KI-Automatisierung für Life Sciences",
    home_step2_body: "Die Pharmaindustrie benötigt Innovation, die strenge regulatorische Standards erfüllt. QPS bietet skalierbare KI-Automatisierung für Life-Science-Umgebungen – von Beratung und Agenten-Setup bis zu Dr. Project, unserem unternehmensweiten KI-Projektmanagementsystem für qualifizierte, validierte Workflows.",

    home_step3_title: "Lösungen für visuelle Inspektion",
    home_step3_eyebrow: "Inspektionslösungen für injizierbare Pharmazeutika",
    home_step3_body: "Unser AVI-Robot-System liefert hochgeschwindige, wiederholbare Fehlererkennung für pharmazeutische Injektionsprodukte. In Kombination mit Inspektionsschränken von Quantum Packaging Technologies für die manuelle Sichtprüfung bieten wir eine flexible Komplettlösung, die regulatorische und qualitative Anforderungen erfüllt.",

    home_step4_title: "Fehler-Testsets",
    home_step4_eyebrow: "QLabs Fehler-Testsets",
    home_step4_body: "QLabs-Fehler-Testsets replizieren reale Produktdefekte zur Unterstützung der Entwicklung, Validierung und laufenden Verifizierung von AVI- und MVI-Systemen. Entwickelt für regulierte pharmazeutische Umgebungen, ermöglichen sie robuste Qualifizierungsaktivitäten und halten Prüfprozesse dauerhaft audit-ready.",

    // Home – product range section
    home_range_eyebrow: "Robotik-Sortiment",
    home_range_heading: "AVI-Robot, Roboter, Testsets, Inspektionsboxen und Software – alles in einem Katalog.",
    home_range_body: "QxTec ist der Beschaffungspunkt für QPS-Robotik: Durchsuchen Sie das vollständige Sortiment, identifizieren Sie was zu Ihrem Prüfprozess passt, und fordern Sie direkt ein Angebot an.",
    home_range_error_eyebrow: "Sortiment vorübergehend nicht verfügbar",
    home_range_error_heading: "Die Robotikprodukte laden, sobald die Shop-API wieder antwortet.",
    home_range_error_body: "Die Startseite bleibt verfügbar, damit AVI-Robot, Roboter, Testsets, Inspektionsboxen und QPS-Know-how auch bei einer vorübergehenden API-Störung sichtbar bleiben.",

    // Home – lab section
    home_lab_eyebrow: "QPS Robotics Lab — Stein, Schweiz",
    home_lab_heading: "Robotik, Inspektion und Prozessumgebung als ein System.",
    home_lab_body: "Vom Isolator über die Inspektionslinie bis zum humanoiden Roboter: QPS entwickelt und integriert die Bausteine, die im Shop einzeln verfügbar sind – massgeschneidert für die regulierte Produktion.",

    // Home – CTA section
    home_cta_eyebrow: "Bereit für regulierte Workflows",
    home_cta_heading: "Von AVI-Robot bis Fehler-Testsets: Der Shop wird zur ersten Adresse für Robotik und visuelle Inspektion mit QPS Engineering Know-how.",
    home_cta_body: "Das Ziel ist ein Sortiment, das sofort verständlich ist: was es löst, wo es eingesetzt wird und wie es Ihre Prüfprozesse reproduzierbarer macht.",
    home_cta_primary: "Robotik-Sortiment ansehen",
    home_cta_secondary_btn: "QPS kontaktieren",

    // Order
    order_confirmed: "Bestellung bestätigt",
    order_thank_you: "Vielen Dank für Ihre Bestellung!",
    order_number: "Bestellnummer",
    order_date: "Bestelldatum",

    // General
    general_loading: "Laden...",
    general_error: "Ein Fehler ist aufgetreten",
    general_language: "Sprache",
    general_region: "Region",
  },

  en: {
    // Navigation
    nav_account: "Account",
    nav_cart: "Cart",
    nav_search: "Search",
    nav_menu: "Menu",

    // Side menu items
    menu_home: "Home",
    menu_home_eyebrow: "Start",
    menu_home_desc: "Robotics and visual inspection",
    menu_store: "Robotics Catalog",
    menu_store_eyebrow: "Range",
    menu_store_desc: "AVI-Robot, robots, test sets, and software",
    menu_account_eyebrow: "Procurement",
    menu_account_desc: "Orders and addresses",

    // Footer
    footer_categories: "Categories",
    footer_collections: "Collections",
    footer_company: "Company",
    footer_imprint: "Imprint",
    footer_privacy: "Privacy Policy",
    footer_copyright: "All rights reserved.",
    footer_tagline: "AVI-Robot robots, robotics systems, test sets, software, and inspection boxes for visual inspection in pharma, biotech, and food tech.",
    footer_contact: "Contact",
    footer_location: "Our Location",

    // Cart
    cart_empty: "Your cart is empty",
    cart_subtotal: "Subtotal",
    cart_shipping: "Shipping",
    cart_taxes: "Taxes",
    cart_total: "Total",
    cart_checkout: "Checkout",
    cart_continue: "Continue Shopping",
    cart_remove: "Remove",

    // Checkout
    checkout_shipping_address: "Shipping Address",
    checkout_billing_address: "Billing Address",
    checkout_delivery: "Delivery Method",
    checkout_payment: "Payment",
    checkout_review: "Review",
    checkout_place_order: "Place Order",
    checkout_first_name: "First Name",
    checkout_last_name: "Last Name",
    checkout_address: "Address",
    checkout_city: "City",
    checkout_postal_code: "Postal Code",
    checkout_country: "Country",
    checkout_phone: "Phone",
    checkout_email: "Email",
    checkout_same_as_shipping: "Same as shipping address",

    // Account
    account_login: "Sign In",
    account_register: "Register",
    account_logout: "Sign Out",
    account_orders: "Orders",
    account_addresses: "Addresses",
    account_profile: "Profile",
    account_welcome: "Welcome",
    account_no_orders: "No orders yet",

    // Products
    product_add_to_cart: "Add to Cart",
    product_out_of_stock: "Out of Stock",
    product_related: "Related Products",
    product_details: "Product Details",
    product_shipping_returns: "Shipping & Returns",
    product_info_tab: "Product Information",
    product_material: "Material",
    product_country_origin: "Country of origin",
    product_type: "Type",
    product_weight: "Weight",
    product_dimensions: "Dimensions",
    product_fast_delivery: "Fast delivery",
    product_fast_delivery_body: "Your package will arrive in 3-5 business days at your pick up location or in the comfort of your home.",
    product_exchanges: "Simple exchanges",
    product_exchanges_body: "Is the fit not quite right? No worries - we'll exchange your product for a new one.",
    product_returns: "Easy returns",
    product_returns_body: "Just return your product and we'll refund your money. No questions asked – we'll do our best to make sure your return is hassle-free.",

    // Price
    price_on_request: "Price on request",
    price_from: "From",
    price_original: "Original",

    // Store / Listing
    store_all_products: "All Products",
    store_sort_by: "Sort by",
    store_sort_created_at: "Latest",
    store_sort_price_asc: "Price: Low to High",
    store_sort_price_desc: "Price: High to Low",
    store_sort_latest: "Latest Arrivals",
    store_sort_category: "Category",
    store_categories: "Categories",
    store_breadcrumb_home: "Home",
    store_page_title: "All products",

    // Inquiry form
    inquiry_button: "Request Information",
    inquiry_title: "Request Information",
    inquiry_name: "Name",
    inquiry_company: "Company",
    inquiry_email: "Email",
    inquiry_phone: "Phone",
    inquiry_quantity: "Quantity",
    inquiry_message: "Message",
    inquiry_send: "Send Inquiry",
    inquiry_close: "Close",
    inquiry_thank_you: "Thank you.",
    inquiry_in_touch: "We'll be in touch shortly.",
    inquiry_error: "Could not send your inquiry. Please try again.",

    // Breadcrumb
    breadcrumb_home: "Home",
    breadcrumb_all_products: "All Products",

    // Contact page
    contact_title: "Contact QPS Engineering AG",
    contact_body: "Reach out for enquiries about AVI-Robot, test sets, inspection boxes, robotics software, or any of our technology solutions.",
    contact_get_in_touch: "Get in Touch",
    contact_phone: "Phone",
    contact_website: "Website",
    contact_address: "Address",

    // Hero
    hero_title: "Products for the Lifesciences",
    hero_subtitle: "QPS Engineering delivers engineering and validation services, robotic-based solutions, visual inspection technologies, AI-driven tools, and defect test sets—helping customers achieve safe, efficient, and reliable production processes.",
    hero_cta: "View Catalog",
    hero_cta_secondary: "Contact",
    hero_pill_1: "Technology solutions",
    hero_pill_2: "AI business systems",
    hero_pill_3: "Visual Inspection solutions",
    hero_pill_4: "Defect Test Sets",
    hero_card_label: "Industrial Robotics",
    hero_card_title: "Test sets and inspection boxes",
    hero_card_body: "Accessories and references for visual inspection, qualification, and reproducible inspection processes.",
    hero_cycle_1: "Position",
    hero_cycle_2: "Inspect",
    hero_cycle_3: "Document",
    hero_focus_body: "The QPS robot for visual inspection in regulated environments.",
    hero_cycle_ready: "Cycle ready",

    // Home – feature bar
    home_feature1_title: "Industrial Robotics",
    home_feature1_body: "AVI-Robot and robotics building blocks for repeatable inspection processes in regulated production.",
    home_feature2_title: "Test Sets for Visual Inspection",
    home_feature2_body: "Reference samples, defect samples, and training material for confident inspection decisions.",
    home_feature3_title: "GxP-Aligned Delivery",
    home_feature3_body: "Engineering, qualification, and compliance thinking from QPS Engineering AG.",

    // Home – discover section
    home_discover_eyebrow: "Discover QxTec",
    home_discover_heading: "A clear stack for regulated industries.",
    home_discover_body: "QPS combines robotics, visual inspection and AI to provide customer-driven solutions.",

    // Home – workflow steps
    home_step1_title: "Robotic automation for life sciences",
    home_step1_eyebrow: "Robotic Solutions",
    home_step1_body: "QPS delivers turnkey robotic automation for life science applications—from concept to validated system. We cover design, integration, and regulatory compliance with a vendor-neutral, full-service approach built around your process requirements.",

    home_step2_title: "AI business systems",
    home_step2_eyebrow: "AI automation for life sciences",
    home_step2_body: "The pharmaceutical industry needs innovation that meets strict regulatory standards. QPS provides scalable AI automation for life science environments—from consulting and agent setup to Dr. Project, our enterprise-grade AI project management platform built for qualified, validated workflows.",

    home_step3_title: "Visual Inspection solutions",
    home_step3_eyebrow: "Visual Inspection Solutions for Injectable Pharmaceuticals",
    home_step3_body: "Our AVI-Robot system delivers high-speed, repeatable defect detection for pharmaceutical injectables. Combined with Quantum Packaging Technologies inspection cabinets for Manual Visual Inspection, we provide a flexible end-to-end solution that meets regulatory and quality requirements.",

    home_step4_title: "Defect test sets",
    home_step4_eyebrow: "QLabs Defect Test Sets",
    home_step4_body: "QLabs defect test sets replicate real-world product defects to support the development, validation, and ongoing verification of AVI and MVI systems. Purpose-built for regulated environments, they enable robust qualification activities and keep inspection processes audit-ready over time.",

    // Home – product range section
    home_range_eyebrow: "Robotics Range",
    home_range_heading: "AVI-Robot, robots, test sets, inspection boxes, and software — all in one catalog.",
    home_range_body: "QxTec is the procurement point for QPS robotics: browse the full range, identify what fits your inspection process, and request a quote directly.",
    home_range_error_eyebrow: "Range temporarily unavailable",
    home_range_error_heading: "The robotics products will load as soon as the store API responds again.",
    home_range_error_body: "The home page stays available so that AVI-Robot, robots, test sets, inspection boxes, and QPS expertise remain visible even during a temporary API disruption.",

    // Home – lab section
    home_lab_eyebrow: "QPS Robotics Lab — Stein, Switzerland",
    home_lab_heading: "Robotics, inspection, and process environment as one system.",
    home_lab_body: "From the isolator through the inspection line to the humanoid robot: QPS develops and integrates the building blocks that are available individually in the shop — tailored to regulated production.",

    // Home – CTA section
    home_cta_eyebrow: "Ready for regulated workflows",
    home_cta_heading: "From AVI-Robot to defect test sets: the shop becomes the first address for robotics and visual inspection with QPS Engineering know-how.",
    home_cta_body: "The goal is a range that is immediately understandable: what it solves, where it is used, and how it makes your inspection processes more reproducible.",
    home_cta_primary: "View robotics range",
    home_cta_secondary_btn: "Contact QPS",

    // Order
    order_confirmed: "Order Confirmed",
    order_thank_you: "Thank you for your order!",
    order_number: "Order Number",
    order_date: "Order Date",

    // General
    general_loading: "Loading...",
    general_error: "An error occurred",
    general_language: "Language",
    general_region: "Region",
  },
} satisfies Record<SupportedLocale, Record<string, string>>

export type TranslationKey = keyof typeof translations.de

export function t(key: TranslationKey, locale?: string | null): string {
  const lang = (locale && locale in translations ? locale : "en") as SupportedLocale
  return translations[lang][key] ?? translations.en[key] ?? key
}

export function getTranslator(locale?: string | null) {
  return (key: TranslationKey) => t(key, locale)
}
