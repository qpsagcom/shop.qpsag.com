import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { getLocale as getLocaleCookie } from "@lib/data/locale-actions"
import { getTranslator } from "@lib/i18n/translations"

export const metadata: Metadata = {
  title: "Thank you | QPS AG Shop",
  description: "Thank you for your inquiry.",
  robots: { index: false, follow: false },
}

export default async function ThankYouPage() {
  const locale = await getLocaleCookie()
  const translate = getTranslator(locale)

  return (
    <div className="content-container flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-qps-signal/40 bg-qps-signal/10">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-qps-signal"
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>
      <h1 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-qps-ink small:text-4xl">
        {translate("thankyou_title")}
      </h1>
      <p className="mt-3 max-w-md text-base leading-7 text-qps-graphite">
        {translate("thankyou_body")}
      </p>
      <LocalizedClientLink
        href="/store"
        className="qps-btn-ink mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm font-semibold uppercase tracking-[0.14em] transition-colors focus:outline-none focus:ring-2 focus:ring-qps-signal focus:ring-offset-2 focus:ring-offset-qps-paper"
      >
        {translate("thankyou_back")}
      </LocalizedClientLink>
    </div>
  )
}
