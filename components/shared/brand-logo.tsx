import Image from "next/image"
import Link from "next/link"

interface BrandLogoProps {
  size?: number
  linkable?: boolean
  className?: string
}

export default function BrandLogo({ size = 30, linkable = false, className = "" }: BrandLogoProps) {
  const img = (
    <Image src="/brand/round_logo.png" alt="MAEKNIT round logo" width={size} height={size} className={className} />
  )

  return linkable ? (
    <Link href="/" aria-label="MAEKNIT Home">
      {img}
    </Link>
  ) : (
    img
  )
}
