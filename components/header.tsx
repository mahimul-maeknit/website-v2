'use client'

import Link from "next/link"

export default function Header() {
  return (
    <header className="site-header" role="banner" aria-label="Top"  style={{ marginTop: "-60px" }} >
      <div
        className="container header-inner"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '100px',
        }}
      >
        <Link href="/" className="brand" aria-label="MAEKNIT Home">
          <span
            style={{
              fontFamily: "Gulp, sans-serif",
              fontSize: "42.6px",   // matches “Gulp 42.6”
              fontWeight: "normal",
              display: "block",
              lineHeight: 1,
            }}
          >
            maeknit
          </span>
        </Link>

        <div
          className="tagline subheading caps"
          style={{
            fontFamily: "TT Commons, sans-serif",
            fontSize: "14.6px",
            fontWeight: "BOLD",
            letterSpacing: "1px", // optional, if you want spaced caps
          }}
        >
          Knitwear Development Lab
        </div>
      </div>
    </header>
  )
}
