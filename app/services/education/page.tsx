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
      <section className="about-content-frame" aria-label="Education">
        <div className={`swatching-layout`}>
          {!showExploreGrid ? (
            <>
              {/* Left static panel */}
              <div className="about-static-panel">
                <div className="static-panel-inner">
                  <h2 className="static-panel-title">EDUCATION</h2>
                  <div className="static-panel-image">
                    <Image
                      src="/images/latest/education.png"
                      alt="Education"
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
                    MASTER YOUR CRAFT
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
                      Hands on training led by industry professionals at our <strong>NYC</strong> and <strong>London</strong> labs. <strong>No gatekeeping, </strong> no guesswork, just real world experience across every stage of knitwear development. 
                      </p>
                      <p>
                      <ul>
                        <li><strong>Knit and link garments</strong></li>
                        <li><strong>Program industrial machines</strong></li>
                        <li><strong>Build 3D visuals and virtual mannequins</strong></li>
                        <li><strong>Create precise tech packs</strong></li>
                        <li><strong>Source materials and evaluate factories</strong></li>
                      </ul>
                      </p>

                      <p>
                      Whether you’re launching a brand or mastering the craft, we equip you with the tools and independence to create with confidence.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : <>
          {/* Left static panel */}

          <div className="about-scroll-container">
            <div className="about-scroll-panel">
              <div className="scroll-panel-header">
                <h2 className="scroll-panel-title">
                MASTER YOUR CRAFT
                </h2>
                {/* Always show chevron */}
              </div>
              <div className="scroll-panel-content no-image">
                <div className="scroll-panel-text">
                  <p>
                  Hands on training led by industry professionals at our <strong>NYC</strong> and <strong>London</strong> labs. <strong>No gatekeeping, </strong> no guesswork, just real world experience across every stage of knitwear development. 
                  </p>
                  <p>
                  <ul>
                    <li><strong>Knit and link garments</strong></li>
                    <li><strong>Program industrial machines</strong></li>
                    <li><strong>Build 3D visuals and virtual mannequins</strong></li>
                    <li><strong>Create precise tech packs</strong></li>
                    <li><strong>Source materials and evaluate factories</strong></li>
                  </ul>
                  </p>

                  <p>
                  Whether you’re launching a brand or mastering the craft, we equip you with the tools and independence to create with confidence.

                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-static-panel">
            <div className="static-panel-inner">
            <div className="scroll-panel-header">

              <h2 className="static-panel-title">VIEW COURSES</h2>
              <button
                      onClick={() => setShowExploreGrid(false)}
                      className="scroll-indicator"
                      aria-label="Go to explore grid"
                    >
                      <ChevronRight size={32} />
                      <ChevronRight size={32} className="-ml-4" />
                      <ChevronRight size={32} className="-ml-4" />
                    </button>
              </div>      
              <div className="static-panel-image">
                <Image
                  src="/images/latest/view_courses.png"
                  alt="Education"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right content panel */}
          
        </>}
        </div>

        <div className="rule" style={{ marginTop: "20px" }}></div>
      </section>
    </SiteLayout>
  );
}
