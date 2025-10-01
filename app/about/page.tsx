"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import { Linkedin, Phone, Instagram, Mail, MapPin, ChevronRight } from "lucide-react"

export default function AboutPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: window.innerWidth * 0.6, behavior: "smooth" })
    }
  }

  return (
    <>
      <Header />

      {/* Main Content Area - replaces carousel */}
      <section className="about-content-frame" aria-label="About">
        <div className="about-layout">
          {/* Left Static Panel */}
          <div className="about-static-panel">
            <div className="static-panel-inner">
              <h2 className="static-panel-title">HOW IT WORKS</h2>
              <div className="static-panel-image">
                <Image
                  src="/images/how-it-works.png"
                  alt="Colorful yarn and textile samples"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Scrollable Panels */}
          <div className="about-scroll-container" ref={scrollContainerRef}>
            {/* Panel 1: About Us */}
            <div className="about-scroll-panel">
              <div className="scroll-panel-header">
                <h2 className="scroll-panel-title">NO MINIMUMS, NO DELAYS, NO COMPROMISES</h2>
                <button onClick={scrollToNext} className="scroll-indicator" aria-label="Scroll to next section">
                  <ChevronRight size={32} />
                  <ChevronRight size={32} className="-ml-4" />
                  <ChevronRight size={32} className="-ml-4" />
                </button>
              </div>
              <div className="scroll-panel-content">
                <div className="scroll-panel-image">
                  <Image src="/images/about-1.png" alt="Colorful yarn spools" fill className="object-cover" />
                </div>
                <div className="scroll-panel-text">
                  <p>
                    We&apos;re not just a knitwear factory, we&apos;re the bridge between creative vision and industrial
                    execution.
                  </p>
                  <p>
                    With advanced studios in <strong>NYC</strong> and <strong>LONDON</strong>, we combine cutting edge
                    technology, deep expertise, and vetted global factory access to deliver knitwear at the speed of
                    modern fashion.
                  </p>
                  <p>
                    We&apos;ve <strong>rebuilt the entire system</strong> from the ground up, ensuring you&apos;ll never
                    compromise on your vision.
                  </p>
                  <p>
                    From first sketch to final delivery, consider <strong>MAEKNIT</strong> your partner in creation.
                  </p>
                </div>
              </div>
            </div>

            {/* Panel 2: Conception */}
            <div className="about-scroll-panel">
              <div className="scroll-panel-header">
                <h2 className="scroll-panel-title">CONCEPTION</h2>
                <button onClick={scrollToNext} className="scroll-indicator" aria-label="Scroll to next section">
                  <ChevronRight size={32} />
                  <ChevronRight size={32} className="-ml-4" />
                  <ChevronRight size={32} className="-ml-4" />
                </button>
              </div>
              <div className="scroll-panel-content">
                <div className="scroll-panel-image">
                  <Image src="/images/about-2.png" alt="Textile conception" fill className="object-cover" />
                </div>
                <div className="scroll-panel-text">
                  <p>
                    Transform ideas into tangible possibilities through hands-on collaboration, 3D modeling, and
                    advanced visualization.
                  </p>
                  <p>Our NYC and London studios turn concepts into reality with speed and precision.</p>
                </div>
              </div>
            </div>

            {/* Panel 3: Refinement */}
            <div className="about-scroll-panel">
              <div className="scroll-panel-header">
                <h2 className="scroll-panel-title">REFINEMENT</h2>
                <button onClick={scrollToNext} className="scroll-indicator" aria-label="Scroll to next section">
                  <ChevronRight size={32} />
                  <ChevronRight size={32} className="-ml-4" />
                  <ChevronRight size={32} className="-ml-4" />
                </button>
              </div>
              <div className="scroll-panel-content">
                <div className="scroll-panel-image">
                  <Image src="/images/about-3.png" alt="Refined textile sample" fill className="object-cover" />
                </div>
                <div className="scroll-panel-text">
                  <p>
                    Perfect every detail with precision sampling and real-time iteration, refining designs quickly and
                    confidently.
                  </p>
                  <p>
                    Industry-standard machinery ensures what you sample is exactly what goes into production, with no
                    surprises when it matters most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation - same as homepage */}
      <section className="bottom-brand" aria-label="Primary navigation">
        <div className="rule" aria-hidden="true"></div>
        <div className="container brand-inner">
          <nav className="brand-nav" aria-label="Section links">
            <ul>
              <li>
                <Link href="/about" className="active">
                  About
                </Link>
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
            <Image src="/brand/round_logo.png" alt="MAEKNIT round logo" width={100} height={100} />
          </div>
        </div>

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
    </>
  )
}
