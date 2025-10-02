"use client"

import { ChevronRight, ChevronLeft } from "lucide-react"

interface ScrollIndicatorProps {
  direction?: "right" | "left"
  onClick: () => void
  ariaLabel: string
  className?: string
}

export default function ScrollIndicator({
  direction = "right",
  onClick,
  ariaLabel,
  className = "",
}: ScrollIndicatorProps) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight

  return (
    <button onClick={onClick} className={`scroll-indicator ${className}`} aria-label={ariaLabel}>
      {direction === "right" ? (
        <>
          <ChevronRight size={32} />
          <ChevronRight size={32} className="-ml-4" />
          <ChevronRight size={32} className="-ml-4" />
        </>
      ) : (
        <Icon size={32} />
      )}
    </button>
  )
}
