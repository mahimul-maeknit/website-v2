"use client";

import { useState } from "react";
import Image from "next/image";
import SiteLayout from "@/components/site-layout";
import { ChevronRight } from "lucide-react";

export default function WorkPage() {
  const workItems = [
    {
      title: "Mock Rib Side Seam",
      client: "Loop Tackle",
      manufactured: "Jul 25, 2025",
      yarnType: "100% MERINO WOOL",
      knitBy: "Lauren McDermott",
      image: "/images/11.png",
    },
    {
      title: "Mock Rib Side Seam",
      client: "Loop Tackle",
      manufactured: "Jul 25, 2025",
      yarnType: "100% MERINO WOOL",
      knitBy: "Lauren McDermott",
      image: "/images/12.png",
    },
    {
      title: "Swatch",
      client: "Tory Burch",
      manufactured: "Jul 25, 2025",
      yarnType: "MOHAIR & ACRYLIC",
      knitBy: "Lauren McDermott",
      image: "/images/13.png",
    },
    {
      title: "Cable Knit Sample",
      client: "Everlane",
      manufactured: "Aug 12, 2025",
      yarnType: "ORGANIC COTTON",
      knitBy: "Lauren McDermott",
      image: "/images/13.png",
    },
    {
      title: "Textured Weave",
      client: "COS",
      manufactured: "Aug 18, 2025",
      yarnType: "RECYCLED WOOL",
      knitBy: "Lauren McDermott",
      image: "/images/12.png",
    },
    {
      title: "Ribbed Collar",
      client: "Uniqlo",
      manufactured: "Sep 02, 2025",
      yarnType: "CASHMERE BLEND",
      knitBy: "Lauren McDermott",
      image: "/images/11.png",
    },
  ];

  // split into panels of 3
  const panels = [];
  for (let i = 0; i < workItems.length; i += 3) {
    panels.push(workItems.slice(i, i + 3));
  }

  const [panelIndex, setPanelIndex] = useState(0);

  const handleNext = () => {
    setPanelIndex((prev) => (prev + 1) % panels.length);
  };

  return (
    <SiteLayout>
      <section className="about-content-frame" aria-label="Our Work">
        <div className="about-scroll-container">
          <div className="about-scroll-panel">
            <div className="scroll-panel-header">
              <h2 className="scroll-panel-title">OUR WORK</h2>
              <button
                onClick={handleNext}
                className="scroll-indicator"
                aria-label="Go to next work panel"
              >
                <ChevronRight size={32} />
                <ChevronRight size={32} className="-ml-4" />
                <ChevronRight size={32} className="-ml-4" />
              </button>
            </div>

            {/* Panel of 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {panels[panelIndex].map((item, index) => (
                <div key={index} className="border-b border-black pb-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-sans text-sm font-medium tracking-wide uppercase">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs text-gray-600 mt-1">
                        {item.client}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-sans text-xs font-medium tracking-wide uppercase">
                        MANUFACTURED
                      </p>
                      <p className="font-sans text-xs text-gray-600 mt-1">
                        {item.manufactured}
                      </p>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="aspect-square mb-4 bg-gray-100 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="font-sans text-xs font-medium tracking-wide uppercase mb-1">
                        YARN TYPE
                      </p>
                      <p className="font-sans text-xs text-gray-800">
                        {item.yarnType}
                      </p>
                    </div>
                    <div className="text-right flex items-end gap-3">
                      <div>
                        <p className="font-sans text-xs font-medium tracking-wide uppercase mb-1">
                          KNIT BY
                        </p>
                        <p className="font-sans text-xs text-gray-800">
                          {item.knitBy}
                        </p>
                      </div>
                      <div className="w-6 h-6">
                        <Image
                          src="/brand/round_logo.png"
                          alt="MAEKNIT round logo"
                          width={12}
                          height={12}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" style={{ marginTop: "20px" }}></div>
      </section>
    </SiteLayout>
  );
}
