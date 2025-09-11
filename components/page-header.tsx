"use client"
import Link from "next/link"
import { Linkedin, Phone, Instagram, Mail, MapPin } from "lucide-react"

interface PageHeaderProps {
  title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  const isAbout = title.toUpperCase() === "ABOUT"

  return (
    <header className="py-6">
      <div className="max-w-7xl mx-auto px-6">
        {isAbout ? (
          <>
            {/* Row 1: Icons right */}
            <div className="flex justify-end mb-2">
              <ul className="flex items-center gap-2">
                <li className="border border-black p-1">
                  <Link href="/" aria-label="Website">
                    <MapPin size={14} />
                  </Link>
                </li>
                <li className="border border-black p-1">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Linkedin size={14} />
                  </a>
                </li>
                <li className="border border-black p-1">
                  <a href="tel:+10000000000" aria-label="Phone">
                    <Phone size={14} />
                  </a>
                </li>
                <li className="border border-black p-1">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <Instagram size={14} />
                  </a>
                </li>
                <li className="border border-black p-1">
                  <a href="mailto:hello@maeknit.example" aria-label="Email">
                    <Mail size={14} />
                  </a>
                </li>
                <li className="border border-black p-1">
                  <Link href="/labs" aria-label="Location">
                    <MapPin size={14} />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Row 2: Title left, tagline right */}
            <div className="flex items-center justify-between">
            <h1>ABOUT</h1>   {/* Heading – Demi Bold, 22px */}
            <h2 className="subheading">REDEFINING KNITWEAR</h2>   {/* Subheading – Extra Light, 17px */}
              </div>
          </>
        ) : (
          <>
            {/* Row: Title left, icons right */}
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold tracking-wider uppercase font-sans">{title}</h1>
              <ul className="flex items-center gap-2">
                <li className="border border-black p-1">
                  <Link href="/" aria-label="Website">
                    <MapPin size={14} />
                  </Link>
                </li>
                <li className="border border-black p-1">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Linkedin size={14} />
                  </a>
                </li>
                <li className="border border-black p-1">
                  <a href="tel:+10000000000" aria-label="Phone">
                    <Phone size={14} />
                  </a>
                </li>
                <li className="border border-black p-1">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <Instagram size={14} />
                  </a>
                </li>
                <li className="border border-black p-1">
                  <a href="mailto:hello@maeknit.example" aria-label="Email">
                    <Mail size={14} />
                  </a>
                </li>
                <li className="border border-black p-1">
                  <Link href="/labs" aria-label="Location">
                    <MapPin size={14} />
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}

        {/* Underline */}
        <div className="mt-2">
          <hr className="border-t-2 border-black" />
        </div>
      </div>
    </header>
  )
}
