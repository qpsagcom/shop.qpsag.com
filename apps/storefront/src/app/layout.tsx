import { getBaseURL } from "@lib/util/env"
import { QpsMotionProvider } from "@modules/common/components/motion"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <QpsMotionProvider>
          <main className="relative">{props.children}</main>
        </QpsMotionProvider>
      </body>
    </html>
  )
}
