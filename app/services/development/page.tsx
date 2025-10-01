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
      <section className="about-content-frame" aria-label="Development">
        <div className={`swatching-layout ${showExploreGrid ? "full" : ""}`}>
          {!showExploreGrid ? (
            <>
              {/* Left static panel */}
              <div className="about-static-panel">
                <div className="static-panel-inner">
                  <h2 className="static-panel-title">Development</h2>
                  <div className="static-panel-image">
                    <Image
                      src="/images/latest/development.jpg"
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
                      FROM CONCEPT TO COTUORE
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
                        <strong>Skip the guesswork. </strong>
                        We turn your sketches into production-ready knitwear
                        using advanced 3D tools, virtual mannequins, and
                        real-time simulation.
                      </p>
                      <p>
                        <strong>FOR BRANDS </strong> <br></br>
                        Streamlined process from concept to market-ready samples
                      </p>

                      <p>
                        <strong>FOR TECHNICAL TEAMS</strong> <br></br>
                        Full access to CAD programming, linking expertise, and
                        3D advanced modeling
                      </p>

                      <p>
                        Whether you’re refining a signature silhouette or
                        building something entirely new, we meet you where you
                        are and move at your pace.
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
                  <h2 className="scroll-panel-title">COLLABORATE</h2>
                </div>
                <div className="collaborate-options">
                  <p>
                    <strong>IN-PERSON</strong>
                    <br />
                    AT OUR NYC OR LONDON LABS
                  </p>
                  <p>
                    <strong>REMOTELY</strong>
                    <br />
                    FROM ANYWHERE <br /> IN THE WORLD
                  </p>
                  <p>
                    <strong>HYBRID APPROACH</strong>
                    <br />
                    FOR MAXIMUM FLEXIBILITY
                  </p>
                </div>
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
                <Link
                  href="/services/production"
                  className="static-panel-image"
                >
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
