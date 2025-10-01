"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import SiteLayout from "@/components/site-layout"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
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
    handleScroll() // Initial check

    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      id: "swatching",
      title: "SWATCHING",
      image: "/images/latest/swatching.jpg",
    },
    {
      id: "development",
      title: "DEVELOPMENT",
      image: "/images/latest/development.jpg",
    },
    {
      id: "production",
      title: "PRODUCTION",
      image: "/images/latest/about_us_left_1.jpg",
    },
    {
      id: "labs",
      title: "OUR LABS",
      image: "/images/latest/our_labs.png",
    },
    {
      id: "education",
      title: "EDUCATION",
      image: "/images/latest/education.png",
    },
    {
      id: "get-a-quote",
      title: "GET A QUOTE",
      image: "/images/latest/get_a_q.png",
    },
  ]

  return (
    <SiteLayout>
      <section className="services-content-frame" aria-label="Services">
        <div className="services-scroll-wrapper">
          <div className="services-scroll-container" ref={scrollContainerRef}>
            {services.map((service, index) => (
              <Link   href={service.id === "labs" ? "/labs" : `/services/${service.id}`}
              key={service.id} className="service-box">
                <div className="service-box-header">
                  <h2 className="service-box-title">{service.title}</h2>
                  {index === 2 && canScrollRight && (
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToNext()
                      }}
                      className="scroll-indicator-right"
                      aria-label="Scroll to next services"
                    >
                      <ChevronRight size={32} />
                      <ChevronRight size={32} className="-ml-4" />
                      <ChevronRight size={32} className="-ml-4" />
                    </button>
                  )}
                  {index === 5 && canScrollLeft && (
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToPrev()
                      }}
                      className="scroll-indicator"
                      aria-label="Scroll to previous services"
                    >
                      <ChevronRight size={32} />
                      <ChevronRight size={32} className="-ml-4" />
                      <ChevronRight size={32} className="-ml-4" />
                    </button>
                  )}
                </div>
                <div className="service-box-image">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="rule" style={{ marginTop: "20px" }}></div>
      </section>
    </SiteLayout>
  )
}
