import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"
import "./site.css"

const ttCommonsLight = localFont({
  src: "../public/fonts/tt-commons/TT-Commons-ExtraLight.otf",
  variable: "--font-tt-commons-light",
  weight: "200", // Extra Light
})

const ttCommonsDemi = localFont({
  src: "../public/fonts/tt-commons/TT-Commons-DemiBold.otf",
  variable: "--font-tt-commons-demi",
  weight: "600", // Demi Bold
})



export const metadata: Metadata = {
  title: "MAEKNIT",
  description: "Knitwear Development Lab",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${ttCommonsLight.variable} ${ttCommonsDemi.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
