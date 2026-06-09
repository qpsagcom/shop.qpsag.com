import { Metadata } from "next"
import { getLocale } from "@lib/data/locale-actions"
import { getTranslator } from "@lib/i18n/translations"

export const metadata: Metadata = {
  title: "Datenschutz | QPS Engineering AG",
}

export default async function DatenschutzPage() {
  const currentLocale = await getLocale()
  const translate = getTranslator(currentLocale)
  const isDE = !currentLocale || currentLocale.startsWith("de")

  return (
    <div className="content-container py-16 max-w-3xl">
      <h1 className="text-3xl font-semibold mb-8">
        {translate("footer_privacy")}
      </h1>

      {isDE ? (
        <div className="prose prose-sm max-w-none text-ui-fg-subtle space-y-6">
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">Datenschutzerklärung für QPS Engineering AG</h2>
            <p>
              Willkommen im Shop der QPS Engineering AG. Diese
              Datenschutzerklärung beschreibt, wie wir personenbezogene Daten
              erheben, verwenden und schützen, wenn Sie unsere Website besuchen,
              mit unseren Services interagieren oder uns kontaktieren.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">1. Erhebung von Informationen</h2>
            <p>
              Wenn Sie unsere Website besuchen, Formulare nutzen oder Services
              anfragen, können wir personenbezogene Daten wie Name,
              E-Mail-Adresse, Telefonnummer, Rechnungs- und Lieferadresse sowie
              Informationen zur Nutzung der Website verarbeiten.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">2. Nutzung der Informationen</h2>
            <p>
              Wir verwenden diese Informationen, um angefragte Leistungen und
              Bestellungen bereitzustellen, Anfragen zu beantworten, wichtige
              Updates zu senden und unsere Website sowie die Nutzererfahrung zu
              verbessern.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">3. Bestellungen und Zahlungsabwicklung</h2>
            <p>
              Für Bestellungen im Shop verarbeiten wir die für Bestellung,
              Lieferung, Kommunikation und Abrechnung erforderlichen Daten. Die
              Zahlungsabwicklung kann über externe Zahlungsdienstleister wie
              Stripe erfolgen.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">4. Weitergabe von Informationen</h2>
            <p>
              Wir geben personenbezogene Daten nicht an Dritte weiter, ausser
              soweit dies für Dienstleister, technische Unterstützung,
              Zahlungsabwicklung, Lieferung, gesetzliche Pflichten oder den
              Schutz unserer Rechte erforderlich ist.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">5. Datensicherheit</h2>
            <p>
              Wir setzen angemessene technische und organisatorische Massnahmen
              ein, um personenbezogene Daten vor unbefugtem Zugriff,
              Veränderung, Offenlegung oder Zerstörung zu schützen. Dazu zählen
              marktübliche Sicherheitsmassnahmen wie SSL-Verschlüsselung.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">6. Cookies</h2>
            <p>
              Unsere Website verwendet technisch notwendige Cookies, zum
              Beispiel für Warenkorb, Session und Shop-Funktionen. Weitere
              Informationen zu Cookies können in einer separaten Cookie Policy
              bereitgestellt werden.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">7. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung und Widerspruch gegen bestimmte
              Verarbeitungen Ihrer personenbezogenen Daten.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">8. Kontakt</h2>
            <p>
              QPS Engineering AG<br />
              Schaffhauserstrasse 30<br />
              4332 Stein, Switzerland<br />
              Telefon: <a href="tel:+41562819114" className="hover:underline">+41 56 281 91 14</a><br />
              E-Mail: <a href="mailto:info@qpsag.com" className="hover:underline">info@qpsag.com</a>
            </p>
          </section>
          <p className="text-ui-fg-muted txt-small mt-8">
            Quelle: Privacy Policy von qpsag.com, angepasst für shop.qpsag.com.
          </p>
        </div>
      ) : (
        <div className="prose prose-sm max-w-none text-ui-fg-subtle space-y-6">
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">Privacy Policy for QPS Engineering AG</h2>
            <p>
              Welcome to the QPS Engineering AG shop. This Privacy Policy
              outlines our practices concerning the collection, use, and
              protection of personal information when you visit our website,
              interact with our services, or contact us.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">1. Information Collection</h2>
            <p>
              When you visit our website, use forms, or request services, we
              may collect personal details such as name, email address, phone
              number, billing and shipping address, and information about how
              you use the website.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">2. Use of Information</h2>
            <p>
              We use the information we collect to provide requested services,
              process orders, respond to inquiries, send important updates, and
              improve our website and user experience.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">3. Orders and Payment Processing</h2>
            <p>
              For shop orders, we process the information required for order
              handling, delivery, communication, and billing. Payment processing
              may be handled by external payment service providers such as
              Stripe.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">4. Information Sharing</h2>
            <p>
              We do not share personal data with third parties except where
              required for service providers, technical support, payment
              processing, delivery, legal compliance, or protecting our rights.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">5. Data Security</h2>
            <p>
              We implement measures to protect personal data against
              unauthorized access, alteration, disclosure, or destruction,
              including industry-standard security measures such as SSL
              encryption.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">6. Cookies</h2>
            <p>
              Our website uses technically necessary cookies for shopping cart,
              session, and shop functionality. Additional information may be
              provided in a separate Cookie Policy.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">7. Your Rights</h2>
            <p>
              You have the right to access, rectify, erase, restrict, and object
              to certain uses of your personal data.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">8. Contact Information</h2>
            <p>
              QPS Engineering AG<br />
              Schaffhauserstrasse 30<br />
              4332 Stein, Switzerland<br />
              Phone: <a href="tel:+41562819114" className="hover:underline">+41 56 281 91 14</a><br />
              Email: <a href="mailto:info@qpsag.com" className="hover:underline">info@qpsag.com</a>
            </p>
          </section>
          <p className="text-ui-fg-muted txt-small mt-8">
            Source: Privacy Policy from qpsag.com, adapted for shop.qpsag.com.
          </p>
        </div>
      )}
    </div>
  )
}
