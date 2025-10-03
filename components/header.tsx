"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="site-header" role="banner" aria-label="Top">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="MAEKNIT Home">
          <span className="brand-text">maeknit</span>
        </Link>
        <div className="tagline subheading caps">Knitwear DEVELOPMENT & MARKETPLACE</div>
      </div>
    </header>
  )
}
