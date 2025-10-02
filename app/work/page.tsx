"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import SiteLayout from "@/components/site-layout"
import { ChevronRight, ChevronLeft } from "lucide-react"

export default function WorkPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollBy({
        left: containerWidth,
        behavior: "smooth",
      })
    }
  }

  const scrollToPrev = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollBy({
        left: -containerWidth,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const scrollWidth = container.scrollWidth
      const clientWidth = container.clientWidth

      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }

    container.addEventListener("scroll", handleScroll)
    handleScroll() // run once
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

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
                    <button
                      onClick={scrollToNext}
                      className="scroll-indicator-right"
                      aria-label="Next work items"
                    >
                      <ChevronRight size={32} />
                      <ChevronRight size={32} className="-ml-4" />
                      <ChevronRight size={32} className="-ml-4" />
                    </button>
                  )}
                  {index === workItems.length - 1 && canScrollLeft && (
                    <button
                      onClick={scrollToPrev}
                      className="scroll-indicator-left"
                      aria-label="Previous work items"
                    >
                      <ChevronLeft size={32} />
                    </button>
                  )}
                </div>

                {/* Image */}
                <div className="service-box-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Footer */}
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
                    <div className="w-6 h-6">
                      <Image
                        src="/brand/round_logo.png"
                        alt="MAEKNIT logo"
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rule" style={{ marginTop: "20px" }}></div>
      </section>
    </SiteLayout>
  )
}
