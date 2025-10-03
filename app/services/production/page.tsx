"use client";

import { useState } from "react";
import Image from "next/image";
import SiteLayout from "@/components/site-layout";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function DevelopmentPage() {
  const [showExploreGrid, setShowExploreGrid] = useState(false);

  return (
    <SiteLayout>
      <section className="about-content-frame" aria-label="Production">
        <div className={`swatching-layout ${showExploreGrid ? "full" : ""}`}>
          {!showExploreGrid ? (
            <>
              {/* Left static panel */}
              <div className="about-static-panel">
                <div className="static-panel-inner">
                  <h2 className="static-panel-title">Production</h2>
                  <div className="static-panel-image">
                    <Image
                      src="/images/latest/about_us_left_1.jpg"
                      alt="Production"
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
                    BUILT TO SCALE WITH YOU
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
                      From  <strong>rapid development</strong> in our NYC and London labs designed for speed, flexibility, and hands on collaboration to 
                      <strong> small batch domestic runs</strong> for boutiques and test markets, we adapt to your needs. 
                      </p>
                      <p>
                      Our vetted factory marketplace spans the USA, UK, Peru, Turkey, Romania, Bulgaria, Spain, Bangladesh, Canada, Madagascar, and beyond, 
                      delivering the same uncompromising standard from <strong>prototype to full production.</strong>

                      </p>

                      <p>
                      With <strong>no minimums,</strong> transparent pricing, and fast quoting for production ready designs, 
                      <strong> scaling has never been simpler.</strong>
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
                  <h2 className="scroll-panel-title">PRODUCTION</h2>
                </div>
                <Link href="/onboarding" className="static-panel-image">
                  <Image
                    src="/images/latest/about_us_left_1.jpg"
                    alt="Production"
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
                  <h2 className="scroll-panel-title">Order Swatches</h2>
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
                <Link
                  href="/services/production"
                  className="static-panel-image"
                >
                  <Image
                    src="/images/latest/order_swatches.png"
                    alt="Order Swatches"
                    fill
                    className="object-cover"
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
