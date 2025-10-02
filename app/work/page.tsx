"use client"

import Image from "next/image"
import SiteLayout from "@/components/site-layout"
import ScrollIndicator from "@/components/shared/scroll-indicator"
import Divider from "@/components/shared/divider"
import { useHorizontalScroll } from "@/hooks/use-horizontal-scroll"

export default function WorkPage() {
  const { scrollContainerRef, canScrollRight } = useHorizontalScroll()

  const workImages = Array.from({ length: 21 }, (_, i) => `/images/our_wk/${i + 3}.png`)

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const containerWidth = container.offsetWidth
      if (!canScrollRight) {
        container.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        container.scrollBy({ left: containerWidth, behavior: "smooth" })
      }
    }
  }

  return (
    <SiteLayout>
      <section className="works-content-frame" aria-label="Our Work">
        <div className="services-scroll-wrapper">
          <div className="services-scroll-container" ref={scrollContainerRef}>
            {workImages.map((src, index) => (
              <div key={index} className="service-box relative flex flex-col bg-white border-2 border-black">
                <div className="relative w-full h-full">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Work ${index + 3}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {(index + 1) % 3 === 0 && canScrollRight && (
                  <div className="absolute top-[140px] right-4 z-10">
                    <ScrollIndicator
                      onClick={scrollToNext}
                      ariaLabel="Next work items"
                      className="scroll-indicator-right bg-white/80 p-2 rounded-full hover:bg-white"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <Divider className="mt-5" />
      </section>
    </SiteLayout>
  )
}
