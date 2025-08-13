import type { Metadata } from 'next'
import { ttCommons } from './fonts/tt-commons'
import './globals.css'
import './site.css'

export const metadata: Metadata = {
  title: 'MAEKNIT',
  description: 'Knitwear Development Lab',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ttCommons.variable}>
      <body>{children}</body>
    </html>
  )
}
