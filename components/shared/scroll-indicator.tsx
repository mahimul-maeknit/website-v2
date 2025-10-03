"use client"

import type React from "react"

interface ScrollIndicatorProps {
  direction?: "right" | "left"
  onClick: () => void
  ariaLabel: string
  className?: string
}

function ChevronRight({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function ChevronLeft({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

export default function ScrollIndicator({
  direction = "right",
  onClick,
  ariaLabel,
  className = "",
}: ScrollIndicatorProps) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onClick()
  }

  return (
    <button onClick={handleClick} className={`scroll-indicator ${className}`} aria-label={ariaLabel}>
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
