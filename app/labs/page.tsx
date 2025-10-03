"use client"

import { useState } from "react"
import Image from "next/image"
import SiteLayout from "@/components/site-layout"
import { ChevronRight } from "lucide-react"

export default function LabsPage() {
  const [panel, setPanel] = useState<"overview" | "nyc" | "london">("overview")

  return (
    <SiteLayout>
      <section className="about-content-frame" aria-label="Labs">
        <div className="about-layout">
          {/* --- Panel 1: Overview --- */}
          {panel === "overview" && (
            <>
              <div className="about-static-panel">
                <div className="static-panel-inner">
                  <h2 className="static-panel-title">OUR LABS</h2>
                  <div className="static-panel-image">
                    <Image src="/images/latest/our_labs.png" alt="Our Labs Overview" fill className="object-cover" />
                  </div>
                </div>
              </div>

              <div className="about-scroll-container">
                <div className="about-scroll-panel">
                  <div className="scroll-panel-header">
                    <h2 className="scroll-panel-title">THE FUTURE OF THE FACTORY</h2>
                    <button onClick={() => setPanel("nyc")} className="scroll-indicator" aria-label="Go to NYC panel">
                      <ChevronRight size={32} />
                      <ChevronRight size={32} className="-ml-4" />
                      <ChevronRight size={32} className="-ml-4" />
                    </button>
                  </div>
                  <div className="scroll-panel-content no-image">
                    <div className="scroll-panel-text">
                      <p>
                        Our two state-of-the-art facilities are designed for speed, precision, and sustainability.
                        Light-filled studios built to inspire creativity and hands-on collaboration.
                      </p>
                      <p>
                        Equipped with the most advanced, low-energy machinery, we maximize efficiency while minimizing
                        environmental impact.
                      </p>
                      <p>
                        Join us in the world’s fashion hubs, where every idea can be explored, refined, and brought to
                        life with the tools, technology, and expertise to turn your vision into reality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* --- Panel 2: NYC --- */}
          {panel === "nyc" && (
            <>
              <div className="about-static-panel">
                <div className="static-panel-inner">
                  <h2 className="static-panel-title">NEW YORK CITY</h2>
                  <div className="static-panel-image">
                    <Image src="/images/latest/nyct.png" alt="NYC Lab" fill className="object-cover" />
                  </div>
                </div>
              </div>

              <div className="about-scroll-container">
                <div className="about-scroll-panel">
                  <div className="scroll-panel-header">
                    <h2 className="scroll-panel-title">JAMAICA, QUEENS</h2>
                    <button
                      onClick={() => setPanel("london")}
                      className="scroll-indicator"
                      aria-label="Go to London panel"
                    >
                      <ChevronRight size={32} />
                      <ChevronRight size={32} className="-ml-4" />
                      <ChevronRight size={32} className="-ml-4" />
                    </button>
                  </div>
                  <div className="scroll-panel-content no-image">
                    <div className="scroll-panel-text">
                      <p>
                        Our 3,600-square-foot lab houses a skilled team of knitwear engineers and state-of-the-art
                        equipment. We bring designs to life with precision and efficiency, from prototyping to small-run
                        production.
                      </p>
                      <p>
                        <strong>Machine List:</strong>
                        <ul>
                          <li>
                            <strong>STOLL: </strong>CMS 530 7.2, CMS 530 3.5.2, CMS 822 7.2
                          </li>
                          <li>
                            <strong>SHIMA SEIKI: </strong>SWG 091 N2 18gg (Whole garment)
                          </li>
                          <li>
                            <strong>Linkers: </strong>18gg, 16gg, 14gg, 12gg, 10gg, 7gg, 5gg
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* --- Panel 3: London --- */}
          {panel === "london" && (
            <>
              <div className="about-static-panel">
                <div className="static-panel-inner">
                  <h2 className="static-panel-title">LONDON</h2>
                  <div className="static-panel-image">
                    <Image src="/images/latest/london.png" alt="London Lab" fill className="object-cover" />
                  </div>
                </div>
              </div>

              <div className="about-scroll-container">
                <div className="about-scroll-panel">
                  <div className="scroll-panel-header">
                    <h2 className="scroll-panel-title">Harringay Warehouse District</h2>
                    <button
                      onClick={() => setPanel("overview")}
                      className="scroll-indicator"
                      aria-label="Back to overview"
                    >
                      <ChevronRight size={32} />
                      <ChevronRight size={32} className="-ml-4" />
                      <ChevronRight size={32} className="-ml-4" />
                    </button>
                  </div>
                  <div className="scroll-panel-content no-image">
                    <div className="scroll-panel-text">
                      <p>
                        Located in a creative industrial neighborhood of North London, our studio is part of the Fashion
                        Enter network, surrounded by makers, artists, and innovators shaping the city’s fashion future.
                      </p>
                      <p>
                        Surrounded by designers, artisans, and innovators, our London lab is built to foster
                        collaboration and experimentation, pushing the boundaries of modern knitwear.
                      </p>
                      <p>
                        <strong>Machine List:</strong>
                        <ul>
                          <li>
                            <strong>SHIMA SEIKI: </strong>122FF 5gg, SHIMA SEIKI: SWG091N2 10gg
                          </li>
                          <li>
                            <strong>SHIMA SEIKI: </strong>NSSR112V 7gg, SHIMA SEIKI: NSSSR112V 12gg
                          </li>
                          <li>
                            <strong>Linkers: </strong>5gg, 7gg, 9gg, 12gg, 14gg
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </SiteLayout>
  )
}
