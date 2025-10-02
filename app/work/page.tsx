"use client"

import Image from "next/image"
import SiteLayout from "@/components/site-layout"
import ScrollIndicator from "@/components/shared/scroll-indicator"
import BrandLogo from "@/components/shared/brand-logo"
import Divider from "@/components/shared/divider"
import { useHorizontalScroll } from "@/hooks/use-horizontal-scroll"

export default function WorkPage() {
  const { scrollContainerRef, canScrollLeft, canScrollRight, scrollToNext, scrollToPrev } = useHorizontalScroll()

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
  ]

  return (
    <SiteLayout>
      <section className="works-content-frame" aria-label="Our Work">
        <div className="services-scroll-wrapper">
          <div className="services-scroll-container" ref={scrollContainerRef}>
            {workItems.map((item, index) => (
              <div key={index} className="service-box">
                <div className="service-box-header">
                  <div>
                    <h2 className="service-box-title">{item.title}</h2>
                    <p className="text-xs text-gray-600">{item.client}</p>
                  </div>
                  {index === 2 && canScrollRight && (
                    <ScrollIndicator
                      onClick={scrollToNext}
                      ariaLabel="Next work items"
                      className="scroll-indicator-right"
                    />
                  )}
                  {index === workItems.length - 1 && canScrollLeft && (
                    <ScrollIndicator
                      direction="right"
                      onClick={scrollToPrev}
                      ariaLabel="Previous work items"
                      className="scroll-indicator-left"
                    />
                  )}
                </div>

                <div className="service-box-image">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>

                <div className="mt-4 flex justify-between items-end">
                  <div>
                    <p className="text-xs font-medium uppercase mb-1">YARN TYPE</p>
                    <p className="text-xs text-gray-800">{item.yarnType}</p>
                  </div>
                  <div className="flex items-end gap-3 text-right">
                    <div>
                      <p className="text-xs font-medium uppercase mb-1">KNIT BY</p>
                      <p className="text-xs text-gray-800">{item.knitBy}</p>
                    </div>
                    <BrandLogo size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Divider className="mt-5" />
      </section>
    </SiteLayout>
  )
}
