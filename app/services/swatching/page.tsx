"use client";

import { useState } from "react";
import Image from "next/image";
import SiteLayout from "@/components/site-layout";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SwatchingPage() {
  const [showExploreGrid, setShowExploreGrid] = useState(false);

  return (
    <SiteLayout>
      <section className="about-content-frame" aria-label="Swatching">
      <div className={`swatching-layout ${showExploreGrid ? "full" : ""}`}>
      {!showExploreGrid ? (
            <>
              {/* Left static panel */}
              <div className="about-static-panel">
                <div className="static-panel-inner">
                  <h2 className="static-panel-title">SWATCHING</h2>
                  <div className="static-panel-image">
                    <Image
                      src="/images/latest/swatching.jpg"
                      alt="Swatching fabric samples"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right content panel */}
              <div className="about-scroll-container">
                <div className="about-scroll-panel">
                  <div className="scroll-panel-header">
                    <h2 className="scroll-panel-title">
                      YOUR VISION, OUR YARN LIBRARY
                    </h2>
                    {/* Always show chevron */}
                    <button
                      onClick={() => setShowExploreGrid(true)}
                      className="scroll-indicator"
                      aria-label="Go to explore grid"
                    >
                      <ChevronRight size={32} />
                      <ChevronRight size={32} className="-ml-4" />
                      <ChevronRight size={32} className="-ml-4" />
                    </button>
                  </div>
                  <div className="scroll-panel-content no-image">
                    <div className="scroll-panel-text">
                      <p>
                        Swatches delivered in <strong>1-2 weeks</strong>, knit
                        on industry-standard machinery and tailored to your
                        aesthetic.
                      </p>
                      <p>
                        <strong>Our in-house yarn library</strong> and global
                        mill partnerships provide specialty materials curated
                        for quality, provenance, and performance.
                      </p>
                      <p>
                        <strong>Track progress</strong> in real time on our
                        collaborative digital whiteboard, and skip the
                        guesswork—we turn your sketches into production-ready
                        knitwear.
                      </p>
                      <p>
                        <strong>Limitless experimentation</strong>, fast
                        turnaround, and what you sample is what you get.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="explore-grid-full">
              {/* Box 1 */}
              <div className="explore-box">
                <div className="scroll-panel-header">
                  <h2 className="scroll-panel-title">ORDER SWATCHES</h2>
                </div>
                <Link href="/onboarding" className="static-panel-image">
                  <Image
                    src="/images/latest/order_swatches.png"
                    alt="Order Swatches"
                    fill
                    className="object-cover"
                  />
                </Link>
              </div>

              {/* Box 2 */}
              <div className="explore-box">
                <div className="scroll-panel-header">
                  <h2 className="scroll-panel-title">GET A QUOTE</h2>
                </div>
                <Link href="/onboarding" className="static-panel-image">
                  <Image
                    src="/images/latest/get_a_q.png"
                    alt="Get a Quote"
                    fill
                    className="object-cover"
                  />
                </Link>
              </div>

              {/* Box 3 */}
              <div className="explore-box">
                <div className="scroll-panel-header">
                  <h2 className="scroll-panel-title">READY TO SCALE?</h2>
                  <button
                    onClick={() => setShowExploreGrid(false)}
                    className="scroll-indicator"
                    aria-label="Back to swatching panels"
                  >
                    <ChevronRight size={32} />
                    <ChevronRight size={32} className="-ml-4" />
                    <ChevronRight size={32} className="-ml-4" />
                  </button>
                </div>
                <Link href="/services/production" className="static-panel-image">
                  <Image
                    src="/images/latest/about_us_left_1.jpg"
                    alt="Ready to Scale"
                    fill
                    className="object-cover"
                  />
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="rule" style={{ marginTop: "20px" }}></div>
      </section>
    </SiteLayout>
  );
}
