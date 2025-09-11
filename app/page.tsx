"use client"

import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import { Linkedin, Phone, Instagram, Mail, MapPin } from "lucide-react"

export default function Page() {
  return (
    <>
      <Header />

      {/* HERO FRAME (carousel placeholder) */}
      <section className="hero-frame" aria-label="Featured">
        <div className="rule"></div> {/* Top rule */}
        <div className="container">
          <Image
            src="/images/carousel.png"
            alt="MAEKNIT carousel image"
            width={1200}
            height={520}
            priority
            className="carousel-image"
          />
        </div>
        <div className="rule"></div> {/* Bottom rule */}
      </section>

      {/* BOTTOM brand (nav + round logo) */}
      <section className="bottom-brand" aria-label="Primary navigation">
        <div className="rule" aria-hidden="true"></div> {/* This is the rule *above* the menu */}
        <div className="container brand-inner">
          <nav className="brand-nav" aria-label="Section links">
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/onboarding">Onboarding</Link>
              </li>
              <li>
                <Link href="/work">Our Work</Link>
              </li>
              <li>
                <Link href="/services#development">Design</Link>
              </li>
            </ul>
          </nav>
          <div className="brand-logo">
            <Image
              src="/brand/round_logo.png"
              alt="MAEKNIT round logo"
              width={100} // Increased size to be more prominent
              height={100} // Increased size to be more prominent
            />
          </div>
        </div>
        {/* Removed the rule that was previously here, below the menu */}
        {/* City + Social Row */}
        <div className="container city-social">
          <p className="city">New York &amp; London</p>
          <ul className="social">
            <li>
              <Link href="/" aria-label="Website">
                <MapPin size={18} />
              </Link>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </li>
            <li>
              <a href="tel:+10000000000" aria-label="Phone">
                <Phone size={18} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </li>
            <li>
              <a href="mailto:hello@maeknit.example" aria-label="Email">
                <Mail size={18} />
              </a>
            </li>
            <li>
              <Link href="/labs" aria-label="Location">
                <MapPin size={18} />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <main id="main">{/* No content here, as per your request for the homepage */}</main>
    </>
  )
}
