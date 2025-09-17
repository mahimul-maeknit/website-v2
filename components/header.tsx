&apos;use client&apos;

import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="site-header" role="banner" aria-label="Top">
      
      <div className="container header-inner" style={{ display: &apos;flex&apos;, alignItems: &apos;center&apos;, justifyContent: &apos;space-between&apos;, marginTop: &apos;100px&apos; }}>
        <Link href="/" className="brand" aria-label="MAEKNIT Home">
        <Image
          src="/brand/maeknit_font.png"
          alt="MAEKNIT"
          width={200} /* bigger text */
          height={200}  /* let width control scaling */
          priority
          style={{
            height: &apos;auto&apos;,
            display: &apos;block&apos;,
          }}
          className="brand-logo"
        />

        </Link>
        <div className="tagline subheading caps">Knitwear Development Lab</div>
      </div>
      <div className="rule" aria-hidden="true"></div>
    </header>
  )
}
