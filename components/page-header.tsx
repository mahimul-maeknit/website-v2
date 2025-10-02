"use client"
import SocialIcons from "@/components/shared/social-icons"

interface PageHeaderProps {
  title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  const isAbout = title?.toUpperCase() === "ABOUT"

  return (
    <header className="py-6">
      <div className="max-w-7xl mx-auto px-6">
        {isAbout ? (
          <>
            <div className="flex justify-end mb-2">
              <SocialIcons size={14} bordered />
            </div>
            <div className="flex items-center justify-between">
              <h1>ABOUT</h1>
              <h2 className="subheading">REDEFINING KNITWEAR</h2>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold tracking-wider uppercase font-sans">{title}</h1>
            <SocialIcons size={14} bordered />
          </div>
        )}
        <div className="mt-2">
          <hr className="border-t-2 border-black" />
        </div>
      </div>
    </header>
  )
}
