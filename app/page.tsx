"use client"
import Image from "next/image"
import SiteLayout from "@/components/site-layout"

export default function Page() {
  return (
    <SiteLayout>
      {/* HERO FRAME (carousel placeholder) */}
      <section className="hero-frame" aria-label="Featured">
        <div className="container" style={{ position: "relative", width: "100%", height: "440px" }}>
          <Image
            src="/images/latest/cover.png"
            alt="MAEKNIT Cover"
            fill
            priority
            className="carousel-image"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      <main id="main"></main>
    </SiteLayout>
  )
}
