"use client"

import Image from "next/image"
import SiteLayout from "@/components/site-layout"
import ScrollIndicator from "@/components/shared/scroll-indicator"
import BrandLogo from "@/components/shared/brand-logo"
import { useHorizontalScroll } from "@/hooks/use-horizontal-scroll"

export default function WorkPage() {
  const { scrollContainerRef, canScrollLeft, canScrollRight, scrollToNext, scrollToPrev } = useHorizontalScroll()

  const workItems = [
    {
      title: "FELTED AND BRUSHED SWEATER",
      client: "LE PERE",
      manufactured: "Jul 25, 2025",
      yarnType: "MOHAIR AND MERINO",
      knitBy: "MAEKNIT ISTANBUL",
      image: "/images/images_old/1.jpeg",
    },
    {
      title: "COLLEGIATE FAIRISLE SWEATER AND SHORT",
      client: "NATASHA STUDIO",
      manufactured: "Jul 25, 2025",
      yarnType: "100% MERCERIZED COTTON",
      knitBy: "MAEKNIT NY",
      image: "/images/images_old/3.jpeg",
    },
    {
      title: "LE PERE JUVENTUS SCARF",
      client: "LE PERE",
      manufactured: "Jul 25, 2025",
      yarnType: "ACRYLIC",
      knitBy: "MAEKNIT UK",
      image: "/images/images_old/abc.webp",
    },
    {
      title: "WAVE ANORAK JACKET",
      client: "LOST DAZE",
      manufactured: "Aug 12, 2025",
      yarnType: "100% MERINO",
      knitBy: "MAEKNIT CHINA",
      image: "/images/images_old/5.jpeg",
    },
    {
      title: "ALPACA THROW BLANKET",
      client: "SHINOLA, PARIS WEST",
      manufactured: "Aug 18, 2025",
      yarnType: "100% ALPACA",
      knitBy: "MAEKNIT PERU",
      image: "/images/images_old/12.png",
    },
    {
      title: "STRIPED DOG SWEATER",
      client: "J. Crew",
      manufactured: "Sep 02, 2025",
      yarnType: "100% COTTON",
      knitBy: "MAEKNIT NY",
      image: "/images/images_old/dog.jpg",
    },

    {
      title: "KNIT PIQUE VEST",
      client: "LE PERE",
      manufactured: "Aug 12, 2025",
      yarnType: "OG COTTON BOUCLE AND COMBED COTTON",
      knitBy: "MAEKNIT NY",
      image: "/images/images_old/leperevest.webp",
    },
    {
      title: "KNIT PIQUE VEST",
      client: "LE PERE",
      manufactured: "Aug 12, 2025",
      yarnType: "OG COTTON BOUCLE AND COMBED COTTON",
      knitBy: "MAEKNIT NY",
      image: "/images/images_old/lepereBlueVest.webp",
    },
    {
      title: "KNIT BASKETWEAVE SWEATER",
      client: "LE PERE",
      manufactured: "Sep 02, 2025",
      yarnType: "LINEN AND ORGANIC COTTON",
      knitBy: "MAEKNIT BULGARIA",
      image: "/images/images_old/smart_pant.webp",
    },

    {
      title: "KNIT BASKETWEAVE POLO",
      client: "LE PERE",
      manufactured: "Aug 12, 2025",
      yarnType: "LINEN AND ORGANIC COTTON",
      knitBy: "MAEKNIT BULGARIA",
      image: "/images/images_old/red-pant.webp",
    },
    {
      title: "CARDIGAN SET LONDON FASHION WEEK",
      client: "EDELINE LEE",
      manufactured: "Aug 12, 2025",
      yarnType: "VISCOSE",
      knitBy: "MAEKNIT UK",
      image: "/images/images_old/pink_woman.JPG",
    },
    {
      title: "HANNAH DRESS LONDON FASHION WEEK",
      client: "EDELINE LEE",
      manufactured: "Sep 02, 2025",
      yarnType: "VISCOSE",
      knitBy: "MAEKNIT UK",
      image: "/images/images_old/white_socks.jpg",
    },

    {
      title: "PEDARNAL DRESS",
      client: "EDELINE LEE",
      manufactured: "Aug 12, 2025",
      yarnType: "VISCOSE",
      knitBy: "MAEKNIT UK",
      image: "/images/images_old/el_all_white.jpg",
    },
    {
      title: "RUFFLE TOP",
      client: "EDELINE LEE",
      manufactured: "Aug 12, 2025",
      yarnType: "VISCOSE",
      knitBy: "MAEKNIT UK",
      image: "/images/images_old/el_black_pant.jpg",
    },
    {
      title: "TURTLENECK TOP",
      client: "EDELINE LEE",
      manufactured: "Aug 12, 2025",
      yarnType: "VISCOSE",
      knitBy: "MAEKNIT UK",
      image: "/images/images_old/el_pink.jpg",
    },
  ]

  return (
    <SiteLayout>
      <section className="services-content-frame" aria-label="Our Work">
        <div className="services-scroll-wrapper">
          <div className="services-scroll-container" ref={scrollContainerRef}>
            {workItems.map((item, index) => (
              <div key={index} className="service-box">
                <div className="service-box-header">
                  <div>
                    <h2 className="service-box-title">{item.title}</h2>
                    <p className="text-xs text-gray-600">{item.client}</p>
                  </div>
                  {(index + 1) % 3 === 0 && canScrollRight && (
                    <ScrollIndicator
                      onClick={scrollToNext}
                      ariaLabel="Next work items"
                      className="scroll-indicator-right"
                    />
                  )}
                  {index === 0 && canScrollLeft && (
                    <ScrollIndicator
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
      </section>
    </SiteLayout>
  )
}
