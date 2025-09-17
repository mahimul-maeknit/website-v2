import PageFooter from "@/components/page-footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader title="ABOUT" />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  We streamline the knitwear process with no minimums, no delays, and no compromises. Our end-to-end
                  model connects designers with expert technicians, bridging the gap between concept and production
                  through precision, speed, and craft.
                </p>

                <p className="text-base leading-relaxed">
                  At <strong>MAEKNIT</strong>, we <span className="underline">bring</span> advanced knitting technology,
                  zero-waste labs, and expert support to help brands move from sketch to shelf in record time. Our team
                  of knitwear designers, programmers, and technicians partner with you at every step, from first
                  prototype to scalable production.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-bold tracking-wider mb-6 border-b border-black pb-2">
                  RESHORING WITH INTENTION
                </h3>

                <div className="space-y-4">
                  <p className="text-base leading-relaxed">
                    With laboratories in <strong>New York</strong> and <strong>London</strong> and a global production
                    network, we bring technical excellence back to the center of fashion. We don&apos;t just accelerate
                    timelines — we <span className="underline">redesign</span> the system. Transparent, responsive, and
                    built to match the rhythm of modern design.
                  </p>

                  <p className="text-base leading-relaxed">
                    We collaborate with brands, retailers and emerging designers to bring ideas to life — whether it&apos;s a
                    single sample or a full collection. Every piece we produce reflects discipline, care, and a lifetime
                    of experience.
                  </p>

                  <p className="text-base leading-relaxed">
                    We manage the complexity behind the scenes, so you receive exactly what you envisioned — on time, at
                    scale, without compromise. Delivered to your studio, showroom, or doorstep.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Images */}
            <div className="space-y-4">
              <div className="h-[320px] overflow-hidden">
                <Image
                  src="/images/ab1.png"
                  alt="Knit fabric texture detail"
                  className="w-full h-full object-cover"
                  width={800}   
                  height={320}                 
                />
              </div>
              <div className="h-[320px] overflow-hidden">
                <Image
                  src="/images/ab2.png"
                  alt="Textile material close-up"
                  className="w-full h-full object-cover"
                  width={800}   
                  height={320}  
                />
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-2">
            <button className="px-8 py-3 bg-pink-200 text-black font-medium tracking-wider rounded-lg hover:bg-pink-300 transition-colors">
              BOOK A CONSULTATION
            </button>
            <button className="px-8 py-3 bg-pink-200 text-black font-medium tracking-wider rounded-lg hover:bg-pink-300 transition-colors">
              EXPLORE OUR LABS
            </button>
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  )
}
