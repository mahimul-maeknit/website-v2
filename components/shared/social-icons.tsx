"use client"

import Link from "next/link"
import Image from "next/image"

interface SocialIconsProps {
  size?: number
  bordered?: boolean
  className?: string
}

export default function SocialIcons({ size = 18, bordered = false, className = "" }: SocialIconsProps) {
  const iconClass = bordered ? "border border-black p-1" : ""

  return (
    <ul className={`flex items-center justify-center gap-2 ${className}`}>
      <li className={iconClass}>
        <Link href="/" aria-label="Website">
          <Image src="/images/icons/google_pin.png" alt="Website" width={size} height={size} />
        </Link>
      </li>
      <li className={iconClass}>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Image src="/images/icons/linked_in.png" alt="LinkedIn" width={size} height={size} />
        </a>
      </li>
      <li className={iconClass}>
        <a href="tel:+10000000000" aria-label="Phone">
          <Image src="/images/icons/phone.png" alt="Phone" width={size} height={size} />
        </a>
      </li>
      <li className={iconClass}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
          <Image src="/images/icons/insta.png" alt="Instagram" width={size} height={size} />
        </a>
      </li>
      <li className={iconClass}>
        <a href="mailto:hello@maeknit.example" aria-label="Email">
          <Image src="/images/icons/mail.png" alt="Email" width={size} height={size} />
        </a>
      </li>
      <li className={iconClass}>
        <Link href="/labs" aria-label="Location">
          <Image src="/images/icons/us_flag.png" alt="Location" width={size} height={size} />
        </Link>
      </li>
    </ul>
  )
}
