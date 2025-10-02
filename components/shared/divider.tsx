export default function Divider({ className = "" }: { className?: string }) {
    return <div className={`rule ${className}`} aria-hidden="true" />
  }
  