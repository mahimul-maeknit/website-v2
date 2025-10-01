"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import SiteLayout from "@/components/site-layout";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const router = useRouter();

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: window.innerWidth * 0.3,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsAtStart(container.scrollLeft < 50);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SiteLayout>
      {/* Main Content Area - replaces carousel */}
      <section className="about-content-frame" aria-label="About">
        <div className={`about-layout ${isAtEnd ? "full" : ""}`}>
          {/* Left Static Panel */}
          {!isAtEnd ? (
            <>
              <div className="about-static-panel">
                <div className="static-panel-inner">
                  <h2 className="static-panel-title">
                    {isAtStart ? "ABOUT US" : "HOW IT WORKS"}
                  </h2>
                  <div className="static-panel-image">
                    <Image
                      src={
                        isAtStart
                          ? "/images/latest/about_us_left_1.jpg"
                          : "/images/latest/how_it_works.jpg"
                      }
                      alt={
                        isAtStart
                          ? "About us yarn and textile samples"
                          : "How it works process imagery"
                      }
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
                    <h2 className="scroll-panel-title">
                      NO MINIMUMS, NO DELAYS, NO COMPROMISES
                    </h2>
                    <button
                      onClick={scrollToNext}
                      className="scroll-indicator"
                      aria-label="Scroll to next section"
                    >
                      <ChevronRight size={32} />
                      <ChevronRight size={32} className="-ml-4" />
                      <ChevronRight size={32} className="-ml-4" />
                    </button>
                  </div>
                  <div className="scroll-panel-content no-image">
                    <div className="scroll-panel-text">
                      <p>
                        We&apos;re not just a knitwear factory, we&apos;re the
                        bridge between creative vision and industrial execution.
                      </p>
                      <p>
                        With advanced studios in <strong>NYC</strong> and{" "}
                        <strong>LONDON</strong>, we combine cutting edge
                        technology, deep expertise, and vetted global factory
                        access to deliver knitwear at the speed of modern
                        fashion.
                      </p>
                      <p>
                        We&apos;ve <strong>rebuilt the entire system</strong>{" "}
                        from the ground up, ensuring you&apos;ll never
                        compromise on your vision.
                      </p>
                      <p>
                        From first sketch to final delivery, consider{" "}
                        <strong>MAEKNIT</strong> your partner in creation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Panel 2: Conception */}
                <div className="about-scroll-panel">
                  <div className="scroll-panel-header">
                    <h2 className="scroll-panel-title">CONCEPTION</h2>
                    <button
                      onClick={scrollToNext}
                      className="scroll-indicator"
                      aria-label="Scroll to next section"
                    >
                      <ChevronRight size={32} />
                      <ChevronRight size={32} className="-ml-4" />
                      <ChevronRight size={32} className="-ml-4" />
                    </button>
                  </div>
                  <div className="scroll-panel-content">
                    <div className="scroll-panel-image">
                      <Image
                        src="/images/latest/conception.jpg"
                        alt="Textile conception"
                        fill
                        style={{
                          objectFit: "contain",
                          backgroundColor: "#fff",
                        }}
                      />
                    </div>
                    <div className="scroll-panel-text">
                      <p>
                        Transform ideas into tangible possibilities through
                        hands-on collaboration, 3D modeling, and advanced
                        visualization.
                      </p>
                      <p>
                        Our NYC and London studios turn concepts into reality
                        with speed and precision.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Panel 3: Refinement */}
                <div className="about-scroll-panel">
                  <div className="scroll-panel-header">
                    <h2 className="scroll-panel-title">REFINEMENT</h2>
                    <button
                      onClick={scrollToNext}
                      className="scroll-indicator"
                      aria-label="Scroll to next section"
                    >
                      <ChevronRight size={32} />
                      <ChevronRight size={32} className="-ml-4" />
                      <ChevronRight size={32} className="-ml-4" />
                    </button>
                  </div>
                  <div className="scroll-panel-content">
                    <div className="scroll-panel-image">
                      <Image
                        src="/images/latest/refinement.jpg"
                        alt="Textile refinement"
                        fill
                        style={{
                          objectFit: "contain",
                          backgroundColor: "#fff",
                        }}
                      />
                    </div>
                    <div className="scroll-panel-text">
                      <p>
                        Perfect every detail with precision sampling and
                        real-time iteration, refining designs quickly and
                        confidently.
                      </p>
                      <p>
                        Industry-standard machinery ensures what you sample is
                        exactly what goes into production, with no surprises
                        when it matters most.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Panel 4: RELIZATION */}
                <div className="about-scroll-panel">
                  <div className="scroll-panel-header">
                    <h2 className="scroll-panel-title">REALIZATION</h2>
                    <button
                      onClick={() => setIsAtEnd(true)}
                      className="scroll-indicator"
                      aria-label="Scroll to next section"
                    >
                      <ChevronRight size={32} />
                      <ChevronRight size={32} className="-ml-4" />
                      <ChevronRight size={32} className="-ml-4" />
                    </button>
                  </div>
                  <div className="scroll-panel-content">
                    <div className="scroll-panel-image">
                      <Image
                        src="/images/latest/realization.png"
                        alt="Textile relization"
                        fill
                        style={{
                          objectFit: "contain",
                          backgroundColor: "#fff",
                        }}
                      />
                    </div>
                    <div className="scroll-panel-text">
                      <p>
                        Scale seamlessly through our curated global network,
                        handling everything from a single piece to thousands.
                      </p>
                      <p>
                        We maintain uncompromising standards of quality and
                        consistency at every stage of the process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="explore-grid">
              {/* Box 1 */}
              <div className="explore-box">
                <div className="scroll-panel-header">
                  <h2 className="scroll-panel-title">Get A QUOTE</h2>
                </div>{" "}
                <div className="static-panel-image">
                  <Image
                    src="/images/latest/get_a_q.png"
                    alt="Get a Quote"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Box 2 */}
              <div className="explore-box">
                <div className="scroll-panel-header">
                  <h2 className="scroll-panel-title">Our Labs</h2>
                </div>
                <div className="static-panel-image">
                  <Image
                    src="/images/latest/our_labs.png"
                    alt="Our Labs"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Box 3 */}
              <div className="explore-box">
                <div className="scroll-panel-header">
                  <h2 className="scroll-panel-title">Our Team</h2>
                  <button
                    onClick={() => setIsAtEnd(false)}
                    className="scroll-indicator"
                    aria-label="Scroll to next section"
                  >
                    <ChevronRight size={32} />
                    <ChevronRight size={32} className="-ml-4" />
                    <ChevronRight size={32} className="-ml-4" />
                  </button>
                </div>
                <div className="static-panel-image">
                  <Image
                    src="/images/latest/development.jpg"
                    alt="Our Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="rule" style={{ marginTop: "20px" }}></div>
      </section>
    </SiteLayout>
  );
}
