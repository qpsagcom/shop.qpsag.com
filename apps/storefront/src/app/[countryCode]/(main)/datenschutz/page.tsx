import { Metadata } from "next"
import { getLocale } from "@lib/data/locale-actions"
import { getTranslator } from "@lib/i18n/translations"

export const metadata: Metadata = {
  title: "Datenschutz | QPS AG",
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
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">1. Datenschutz auf einen Blick</h2>
            <p>
              Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und
              den Zweck der Verarbeitung von personenbezogenen Daten auf unserer
              Website auf. Verantwortlicher für die Datenverarbeitung ist die
              QPS AG, Schweiz.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">2. Datenerhebung auf unserer Website</h2>
            <p>
              Beim Besuch unserer Website werden automatisch technische Informationen
              (z. B. Browser, Betriebssystem, IP-Adresse) in Server-Logfiles gespeichert.
              Diese Daten werden ausschliesslich zur Sicherstellung des Betriebs
              verwendet und nicht an Dritte weitergegeben.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">3. Bestelldaten</h2>
            <p>
              Zur Abwicklung von Bestellungen verarbeiten wir Name, Adresse,
              E-Mail-Adresse und Zahlungsinformationen. Die Zahlungsabwicklung
              erfolgt über Stripe. Stripe unterliegt der PCI-DSS-Zertifizierung.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">4. Cookies</h2>
            <p>
              Unsere Website verwendet technisch notwendige Cookies für den
              Warenkorb und die Sitzungsverwaltung. Es werden keine Tracking-
              oder Werbe-Cookies ohne Ihre Einwilligung gesetzt.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">5. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
              Kontakt: <a href="mailto:info@qpsag.com" className="hover:underline">info@qpsag.com</a>
            </p>
          </section>
          <p className="text-ui-fg-muted txt-small mt-8">
            {/* TODO: Datum aktualisieren nach Livegang */}
            Stand: {new Date().getFullYear()}
          </p>
        </div>
      ) : (
        <div className="prose prose-sm max-w-none text-ui-fg-subtle space-y-6">
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">1. Privacy at a Glance</h2>
            <p>
              This privacy policy explains the nature, scope and purpose of the
              processing of personal data on our website. The responsible party
              for data processing is QPS AG, Switzerland.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">2. Data Collection</h2>
            <p>
              When visiting our website, technical information (e.g. browser,
              operating system, IP address) is automatically stored in server log
              files. This data is used solely to ensure the operation of the site.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">3. Order Data</h2>
            <p>
              To process orders we collect name, address, email and payment
              information. Payments are processed by Stripe, which is PCI-DSS
              certified.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">4. Cookies</h2>
            <p>
              Our website uses technically necessary cookies for the shopping cart
              and session management only. No tracking or advertising cookies are
              set without your consent.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">5. Your Rights</h2>
            <p>
              You have the right to access, rectify, erase and restrict the
              processing of your personal data.
              Contact: <a href="mailto:info@qpsag.com" className="hover:underline">info@qpsag.com</a>
            </p>
          </section>
        </div>
      )}
    </div>
  )
}
