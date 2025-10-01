"use client"
import Image from "next/image"
import SiteLayout from "@/components/site-layout"

export default function Page() {
  return (
    <SiteLayout>
      {/* HERO FRAME (carousel placeholder) */}
      <section className="hero-frame" aria-label="Featured">
        <div className="container" style={{ position: "relative", width: "100%", height: "60vh" }}>
          <Image
            src="/images/cover.png"
            alt="MAEKNIT Cover"
            fill
            priority
            className="carousel-image"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="rule" style={{ marginTop: "20px" }}></div>
      </section>

      <main id="main">{/* No content here, as per your request for the homepage */}</main>
    </SiteLayout>
  )
}
