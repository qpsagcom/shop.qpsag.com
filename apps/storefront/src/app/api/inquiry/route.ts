import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { product, name, company, email, phone, quantity, message } =
      await req.json()

    if (!name || !email || !product) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const rows = [
      ["Product", `<strong>${product}</strong>`],
      ["Name", name],
      company && ["Company", company],
      ["Email", `<a href="mailto:${email}">${email}</a>`],
      phone && ["Phone", phone],
      quantity && ["Quantity", quantity],
      message && ["Message", message.replace(/\n/g, "<br>")],
    ]
      .filter(Boolean)
      .map(
        ([label, value]) =>
          `<tr>
            <td style="padding:8px 16px 8px 0;color:#666;white-space:nowrap;vertical-align:top">${label}</td>
            <td style="padding:8px 0">${value}</td>
          </tr>`
      )
      .join("")

    await resend.emails.send({
      from: "QPS Shop <shop@qpsag.com>",
      to: "info@qpsag.com",
      replyTo: email,
      subject: `Product Inquiry: ${product}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;color:#111">
          <h2 style="margin:0 0 24px;font-size:20px">Product Inquiry: ${product}</h2>
          <table style="border-collapse:collapse;width:100%">${rows}</table>
        </div>`,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Inquiry email error:", err)
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}
