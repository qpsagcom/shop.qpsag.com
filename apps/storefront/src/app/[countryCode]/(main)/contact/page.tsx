import { Metadata } from "next"
import Breadcrumb from "@modules/common/components/breadcrumb"
import { getLocale as getLocaleCookie } from "@lib/data/locale-actions"
import { getTranslator } from "@lib/i18n/translations"

export const metadata: Metadata = {
  title: "Contact | QPS Engineering AG",
  description:
    "Get in touch with QPS Engineering AG for questions about ROVIS, test sets, robotics, and visual inspection solutions.",
}

export default async function ContactPage() {
  const locale = await getLocaleCookie()
  const translate = getTranslator(locale)

  return (
    <div className="content-container py-16 max-w-3xl">
      <Breadcrumb
        items={[
          { label: translate("breadcrumb_home"), href: "/" },
          { label: translate("contact_get_in_touch") },
        ]}
      />

      <h1 className="text-3xl font-semibold tracking-[-0.04em] text-qps-ink mb-4">
        {translate("contact_title")}
      </h1>
      <p className="text-base leading-7 text-qps-graphite mb-12 max-w-xl">
        {translate("contact_body")}
      </p>

      <div className="grid gap-8 small:grid-cols-2">
        <div className="rounded-[1.25rem] border border-qps-line bg-qps-surface p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-qps-signal mb-4">
            {translate("contact_get_in_touch")}
          </p>
          <div className="space-y-3 text-sm leading-6 text-qps-graphite">
            <p>
              <span className="font-semibold text-qps-ink">{translate("contact_phone")}</span>
              <br />
              <a
                href="tel:+41562819114"
                className="hover:text-qps-signal transition-colors"
              >
                +41 56 281 91 14
              </a>
            </p>
            <p>
              <span className="font-semibold text-qps-ink">{translate("inquiry_email")}</span>
              <br />
              <a
                href="mailto:info@qpsag.com"
                className="hover:text-qps-signal transition-colors"
              >
                info@qpsag.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-qps-ink">{translate("contact_website")}</span>
              <br />
              <a
                href="https://qpsag.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-qps-signal transition-colors"
              >
                qpsag.com
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-[1.25rem] border border-qps-line bg-qps-surface p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-qps-signal mb-4">
            {translate("contact_address")}
          </p>
          <address className="not-italic text-sm leading-7 text-qps-graphite">
            <span className="font-semibold text-qps-ink">
              QPS Engineering AG
            </span>
            <br />
            Schaffhauserstrasse 30
            <br />
            4332 Stein
            <br />
            Switzerland
          </address>
        </div>
      </div>
    </div>
  )
}
