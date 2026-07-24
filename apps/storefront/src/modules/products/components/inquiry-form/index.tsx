"use client"

import { Dialog, Transition } from "@headlessui/react"
import { Button } from "@modules/common/components/ui"
import X from "@modules/common/icons/x"
import { Fragment, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { t } from "@lib/i18n/translations"

const inputCls =
  "h-9 w-full rounded-lg border border-qps-line bg-qps-paper px-3 text-sm text-qps-ink placeholder:text-qps-muted focus:outline-none focus:ring-2 focus:ring-qps-signal"
const labelCls =
  "text-[11px] font-semibold uppercase tracking-[0.12em] text-qps-muted"

export default function InquiryForm({
  productTitle,
  locale = "en",
}: {
  productTitle: string
  locale?: string
}) {
  const router = useRouter()
  const countryCode = (useParams().countryCode as string) ?? "ch"
  const [open, setOpen] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    quantity: "",
    message: "",
  })

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(null)
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, product: productTitle }),
      })
      if (!res.ok) throw new Error()
      // Redirect to the thank-you page (URL contains "thank-you" for
      // Google Ads conversion tracking via GTM).
      router.push(`/${countryCode}/thank-you`)
    } catch {
      setError(t("inquiry_error", locale))
      setSending(false)
    }
  }

  const handleClose = () => {
    setOpen(false)
    setTimeout(() => {
      setError(null)
    }, 300)
  }

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="primary" className="w-full h-10">
        {t("inquiry_button", locale)}
      </Button>

      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-[75]" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md rounded-2xl border border-qps-line bg-white p-6 shadow-2xl">
                <div className="mb-5 flex items-start justify-between">
                  <div>
                    <Dialog.Title className="text-base font-semibold text-qps-ink">
                      {t("inquiry_title", locale)}
                    </Dialog.Title>
                    <p className="text-sm text-qps-muted">{productTitle}</p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="rounded-full p-1 text-qps-muted transition-colors hover:text-qps-ink"
                  >
                    <X />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1">
                        <label className={labelCls}>{t("inquiry_name", locale)} *</label>
                        <input
                          required
                          value={form.name}
                          onChange={set("name")}
                          className={inputCls}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className={labelCls}>{t("inquiry_company", locale)}</label>
                        <input
                          value={form.company}
                          onChange={set("company")}
                          className={inputCls}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1">
                        <label className={labelCls}>{t("inquiry_email", locale)} *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={set("email")}
                          className={inputCls}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className={labelCls}>{t("inquiry_phone", locale)}</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={set("phone")}
                          className={inputCls}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className={labelCls}>{t("inquiry_quantity", locale)}</label>
                      <input
                        type="number"
                        min="1"
                        value={form.quantity}
                        onChange={set("quantity")}
                        className={inputCls}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className={labelCls}>{t("inquiry_message", locale)}</label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={set("message")}
                        className="w-full resize-none rounded-lg border border-qps-line bg-qps-paper px-3 py-2 text-sm text-qps-ink placeholder:text-qps-muted focus:outline-none focus:ring-2 focus:ring-qps-signal"
                      />
                    </div>

                    {error && (
                      <p className="text-xs text-ui-fg-error">{error}</p>
                    )}

                    <Button
                      type="submit"
                      className="mt-1 w-full"
                      isLoading={sending}
                      disabled={sending}
                    >
                      {t("inquiry_send", locale)}
                    </Button>
                  </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
