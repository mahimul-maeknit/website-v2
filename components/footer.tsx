import Image from "next/image"
import Link from "next/link"
import BrandLogo from "@/components/shared/brand-logo"

export default function Footer() {
  return (
    <footer className="pt-0 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <hr className="border-t-2 border-black" />
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
          <BrandLogo size={12} linkable />
        </div>
      </div>
    </footer>
  )
}
