import { Metadata } from "next"
import Breadcrumb from "@modules/common/components/breadcrumb"

export const metadata: Metadata = {
  title: "Contact | QPS Engineering AG",
  description:
    "Get in touch with QPS Engineering AG for questions about ROVIS, test sets, robotics, and visual inspection solutions.",
}

export default function ContactPage() {
  return (
    <div className="content-container py-16 max-w-3xl">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <h1 className="text-3xl font-semibold tracking-[-0.04em] text-qps-ink mb-4">
        Contact QPS Engineering AG
      </h1>
      <p className="text-base leading-7 text-qps-graphite mb-12 max-w-xl">
        Reach out for enquiries about ROVIS, test sets, inspection boxes,
        robotics software, or any of our technology solutions.
      </p>

      <div className="grid gap-8 small:grid-cols-2">
        <div className="rounded-[1.25rem] border border-qps-line bg-qps-surface p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-qps-signal mb-4">
            Get in Touch
          </p>
          <div className="space-y-3 text-sm leading-6 text-qps-graphite">
            <p>
              <span className="font-semibold text-qps-ink">Phone</span>
              <br />
              <a
                href="tel:+41562819114"
                className="hover:text-qps-signal transition-colors"
              >
                +41 56 281 91 14
              </a>
            </p>
            <p>
              <span className="font-semibold text-qps-ink">Email</span>
              <br />
              <a
                href="mailto:info@qpsag.com"
                className="hover:text-qps-signal transition-colors"
              >
                info@qpsag.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-qps-ink">Website</span>
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
            Address
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
