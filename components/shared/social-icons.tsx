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
        <Link href="https://www.google.com/maps/dir/40.7092444,-73.7746381/184-10+Jamaica+Ave,+Jamaica,+NY+11423/@40.7103136,-73.7764035,18z/data=!3m1!4b1!4m19!1m8!3m7!1s0x89c261145eb525e7:0xaf9ce7eb6009d902!2s184-10+Jamaica+Ave,+Jamaica,+NY+11423!3b1!8m2!3d40.7089436!4d-73.7745473!16s%2Fg%2F11khsgb_t4!4m9!1m1!4e1!1m5!1m1!1s0x89c261145eb525e7:0xaf9ce7eb6009d902!2m2!1d-73.7745473!2d40.7089436!3e0?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D" aria-label="Website">
          <Image src="/images/icons/google_pin.png" alt="Website" width={size} height={size} />
        </Link>
      </li>
      <li className={iconClass}>
        <a href="https://linkedin.com/company/maeknit-inc" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Image src="/images/icons/linked_in.png" alt="LinkedIn" width={size} height={size} />
        </a>
      </li>
      <li className={iconClass}>
        <a href="tel:+1-206-909-7684" aria-label="Phone">
          <Image src="/images/icons/phone.png" alt="Phone" width={size} height={size} />
        </a>
      </li>
      <li className={iconClass}>
        <a href="https://www.instagram.com/maeknit/" target="_blank" rel="noreferrer" aria-label="Instagram">
          <Image src="/images/icons/insta.png" alt="Instagram" width={size} height={size} />
        </a>
      </li>
      <li className={iconClass}>
        <a href="mailto:intel@maeknit.io" aria-label="Email">
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
