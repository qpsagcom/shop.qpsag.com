import { Metadata } from "next"
import { getLocale } from "@lib/data/locale-actions"
import { getTranslator } from "@lib/i18n/translations"

export const metadata: Metadata = {
  title: "Impressum | QPS AG",
}

export default async function ImpressumPage() {
  const currentLocale = await getLocale()
  const translate = getTranslator(currentLocale)
  const isDE = !currentLocale || currentLocale.startsWith("de")

  return (
    <div className="content-container py-16 max-w-3xl">
      <h1 className="text-3xl font-semibold mb-8">
        {translate("footer_imprint")}
      </h1>

      {isDE ? (
        <div className="prose prose-sm max-w-none text-ui-fg-subtle space-y-6">
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">Angaben gemäss Art. 3 UWG</h2>
            <p>
              <strong>QPS AG</strong><br />
              {/* TODO: Adresse eintragen */}
              Musterstrasse 1<br />
              8000 Zürich<br />
              Schweiz
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:info@qpsag.com" className="hover:underline">info@qpsag.com</a><br />
              {/* TODO: Telefonnummer */}
              Tel: +41 XX XXX XX XX
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">Handelsregistereintrag</h2>
            <p>
              {/* TODO: UID/Handelsregisternummer */}
              UID: CHE-XXX.XXX.XXX
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">Haftungsausschluss</h2>
            <p>
              Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit,
              Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
              Haftungsansprüche gegen den Autor wegen Schäden materieller oder
              immaterieller Art, die durch den Zugriff oder die Nutzung bzw.
              Nichtnutzung der veröffentlichten Informationen entstanden sind,
              werden ausgeschlossen.
            </p>
          </section>
        </div>
      ) : (
        <div className="prose prose-sm max-w-none text-ui-fg-subtle space-y-6">
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">Legal Information</h2>
            <p>
              <strong>QPS AG</strong><br />
              {/* TODO: Enter address */}
              Musterstrasse 1<br />
              8000 Zurich<br />
              Switzerland
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">Contact</h2>
            <p>
              Email: <a href="mailto:info@qpsag.com" className="hover:underline">info@qpsag.com</a><br />
              {/* TODO: Phone number */}
              Phone: +41 XX XXX XX XX
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">Company Registration</h2>
            <p>
              {/* TODO: UID/registration number */}
              UID: CHE-XXX.XXX.XXX
            </p>
          </section>
          <section>
            <h2 className="text-lg font-medium text-ui-fg-base mb-2">Disclaimer</h2>
            <p>
              The author assumes no responsibility for the accuracy, correctness,
              up-to-dateness, reliability or completeness of the information provided.
            </p>
          </section>
        </div>
      )}
    </div>
  )
}
