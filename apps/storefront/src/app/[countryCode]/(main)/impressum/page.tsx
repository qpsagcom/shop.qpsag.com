import { Metadata } from "next"
import { getTranslator } from "@lib/i18n/translations"

export const metadata: Metadata = {
  title: "Imprint | QPS Engineering AG",
}

export default async function ImpressumPage() {
  const translate = getTranslator()

  return (
    <div className="content-container py-16 max-w-3xl">
      <h1 className="text-3xl font-semibold mb-8">
        {translate("footer_imprint")}
      </h1>

      <div className="prose prose-sm max-w-none text-ui-fg-subtle space-y-6">
        <section>
          <h2 className="text-lg font-medium text-ui-fg-base mb-2">Legal Information</h2>
          <p>
            <strong>QPS Engineering AG</strong><br />
            Schaffhauserstrasse 30<br />
            4332 Stein<br />
            Switzerland
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium text-ui-fg-base mb-2">Contact</h2>
          <p>
            Phone: <a href="tel:+41562819114" className="hover:underline">+41 56 281 91 14</a><br />
            Email: <a href="mailto:info@qpsag.com" className="hover:underline">info@qpsag.com</a><br />
            Website: <a href="https://qpsag.com" className="hover:underline">qpsag.com</a>
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium text-ui-fg-base mb-2">Content Responsibility</h2>
          <p>
            QPS Engineering AG is responsible for the content of this shop.
            The offering addresses customers in pharma, biotech, food tech,
            and regulated industrial environments.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-medium text-ui-fg-base mb-2">Disclaimer</h2>
          <p>
            QPS Engineering AG reviews the content carefully but assumes no
            liability for the accuracy, completeness, or timeliness of the
            information provided, to the extent permitted by law.
          </p>
        </section>
      </div>
    </div>
  )
}
