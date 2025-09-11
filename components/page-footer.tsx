import Image from "next/image"
import Link from "next/link"

export default function PageFooter() {
  return (
    <footer className="pt-0 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Divider line */}
        <hr className="border-t border-black" />

        {/* Row: brand left, logo right */}
        <div className="flex items-center justify-between pt-2">
          <Link href="/" className="brand" aria-label="MAEKNIT Home">
            <Image
              src="/brand/maeknit_font.png"
              alt="MAEKNIT"
              width={200}
              height={200}
              style={{ height: "auto", display: "block" }}
            />
          </Link>

          <div className="brand-logo">
              <Link href="/" className="brand" aria-label="MAEKNIT Home">
                <Image
                src="/brand/round_logo.png"
                alt="MAEKNIT round logo"
                width={60}
                height={60}
                className="block"
                />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
