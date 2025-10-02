"use client"

import { useRef, useState, useEffect } from "react"

export function useHorizontalScroll() {
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
    handleScroll()

    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  return {
    scrollContainerRef,
    canScrollLeft,
    canScrollRight,
    scrollToNext,
    scrollToPrev,
  }
}
