"use client"
import Link from "next/link"
import { Linkedin, Phone, Instagram, Mail, MapPin } from "lucide-react"

interface PageHeaderProps {
  title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left title */}
          <h1 className="text-lg font-semibold tracking-wider uppercase">
            {title}
          </h1>

          {/* Right icons */}
          <ul className="flex items-center gap-2">
            <li className="border border-black p-1">
              <Link href="/" aria-label="Website">
                <MapPin size={14} />
              </Link>
            </li>
            <li className="border border-black p-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            </li>
            <li className="border border-black p-1">
              <a href="tel:+10000000000" aria-label="Phone">
                <Phone size={14} />
              </a>
            </li>
            <li className="border border-black p-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
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

        {/* Underline */}
        <div className="mt-2">
          <hr className="border-t border-black" />
        </div>
      </div>
    </header>
  )
}
