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

    // Footer
    footer_categories: "Kategorien",
    footer_collections: "Kollektionen",
    footer_company: "Unternehmen",
    footer_imprint: "Impressum",
    footer_privacy: "Datenschutz",
    footer_copyright: "Alle Rechte vorbehalten.",

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

    // Store / Listing
    store_all_products: "Alle Produkte",
    store_sort_by: "Sortieren nach",
    store_sort_created_at: "Neueste",
    store_sort_price_asc: "Preis aufsteigend",
    store_sort_price_desc: "Preis absteigend",

    // Hero
    hero_title: "Robotik für regulierte Industrie.",
    hero_subtitle: "QPS Engineering AG liefert High-Precision Technology Solutions für Pharma, Biotech und Food Tech: Robotics, Visual Inspection, Measurement und GxP-nahe Integration.",
    hero_cta: "Robotics ansehen",

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

    // Footer
    footer_categories: "Categories",
    footer_collections: "Collections",
    footer_company: "Company",
    footer_imprint: "Imprint",
    footer_privacy: "Privacy Policy",
    footer_copyright: "All rights reserved.",

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

    // Store / Listing
    store_all_products: "All Products",
    store_sort_by: "Sort by",
    store_sort_created_at: "Latest",
    store_sort_price_asc: "Price: Low to High",
    store_sort_price_desc: "Price: High to Low",

    // Hero
    hero_title: "Robotics for regulated industry.",
    hero_subtitle: "QPS Engineering AG delivers high-precision technology solutions for pharma, biotech, and food tech: robotics, visual inspection, measurement, and GxP-ready integration.",
    hero_cta: "Explore Robotics",

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

/**
 * Returns translation for a given key based on locale.
 * Falls back to 'en' if locale not supported.
 */
export function t(key: TranslationKey, locale: string | null): string {
  const lang = (locale?.split("-")[0] ?? "de") as SupportedLocale
  const dict = translations[lang] ?? translations.de
  return dict[key] ?? translations.en[key] ?? key
}

/**
 * Returns a translator function bound to a specific locale.
 * Usage: const translate = useTranslations(locale); translate('nav_cart')
 */
export function getTranslator(locale: string | null) {
  return (key: TranslationKey) => t(key, locale)
}
