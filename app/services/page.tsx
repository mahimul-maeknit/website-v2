"use client";

import PageFooter from "@/components/page-footer";
import PageHeader from "@/components/page-header";
import { useState } from "react";
import Image from "next/image";

type ServiceSection =
  | "production"
  | "swatches"
  | "development"
  | "education"
  | "ourlabs"
  | null;

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState<ServiceSection>(null);

  const serviceContent = {
    production: {
      title: "PRODUCTION",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Image */}
          <div className="aspect-square relative">
            <Image
              src="/images/1.png"
              alt="Production"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Heading inside right column */}
            <div>
              <h2 className="text-2xl font-bold tracking-wide uppercase">
                PRODUCTION
              </h2>
              <div className="w-full border-t-2 border-black mt-2 mb-6"></div>
            </div>

            <p className="text-sm font-medium">
              <span className="font-bold">MAEKNIT</span> offers small-batch and
              on-demand production in our zero-waste labs in New York and London
              — built for speed, flexibility, and precision. For larger orders,
              we partner with a trusted global network of mills and
              manufacturers across the USA, UK, Peru, Turkey, Romania, Bulgaria,
              Spain, Bangladesh, Canada, Madagascar & more.
            </p>

            <p className="text-sm font-bold">
              No minimums. Transparent pricing. Clean, energy-efficient
              machinery.
            </p>

            <p className="text-sm">
              Whether you're developing a single standout piece or scaling a
              full collection, we adapt to your needs — with the same standard
              of excellence at every level.
            </p>

            <p className="text-sm">
              The future of knitwear is responsive. We're built to move with
              you. From one piece to thousands,{" "}
              <span className="font-bold">without compromise</span>
            </p>

            <button className="bg-pink-200 text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-pink-300 transition-colors">
              BOOK A CONSULTATION
            </button>
          </div>
        </div>
      ),
    },
    swatches: {
      title: "SWATCHES",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="aspect-square relative">
            <Image
              src="/images/3.png"
              alt="Swatches"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-wide uppercase">
                SWATCHES
              </h2>
              <div className="w-full border-t-2 border-black mt-2 mb-6"></div>
            </div>
            <p className="text-sm font-bold">
              SWATCHES ARE THE BLUEPRINT OF EXCEPTIONAL KNITWEAR.
            </p>
            <p className="text-sm">
              At <span className="font-bold">MAEKNIT</span>, we offer an
              extensive in-house yarn library and source specialty yarns from
              leading mills around the world — curated for quality, provenance,
              and performance. All swatches are knit in our New York or London
              labs using industry-standard machinery, ensuring what you sample
              is what goes into production.
            </p>
            <p className="text-sm">
              Our swatch packages invite experimentation — across materials,
              stitch structures, and finishes — without limitations. Track your
              development in real time through our collaborative digital
              whiteboard, designed to help you organize, refine, and evolve your
              collection.
            </p>
          </div>
        </div>
      ),
    },
    development: {
      title: "DEVELOPMENT",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="aspect-square relative">
            <Image
              src="/images/6.png"
              alt="Development"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-wide uppercase">
                DEVELOPMENT
              </h2>
              <div className="w-full border-t-2 border-black mt-2 mb-6"></div>
            </div>
            <p className="text-sm font-bold">FROM VISION TO PRECISION.</p>
            <p className="text-sm">
              <span className="font-bold">MAEKNIT</span> takes you from sketch
              to shelf in weeks — without compromising craft. Our expert team of
              technicians, knitwear programmers, linkers, and 3D specialists
              delivers fully fashioned knitwear with speed, accuracy, and
              intention.
            </p>
            <p className="text-sm">
              Using advanced tools — including 3D modeling, virtual mannequins,
              and real-time simulation — we bring your ideas to life while
              minimizing waste, revisions, and guesswork.
            </p>
            <p className="text-sm">
              Work with us in person at our development labs in New York and
              London, or <span className="underline">collaborate</span> remotely
              from anywhere in the world.
            </p>
            <p className="text-sm">
              Whether you're refining a signature silhouette or building
              something entirely new, we meet you where you are — and move with
              you, every step of the way.
            </p>
            <button className="bg-pink-200 text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-pink-300 transition-colors">
              BOOK A CONSULTATION
            </button>
          </div>
        </div>
      ),
    },
    education: {
      title: "EDUCATION",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="aspect-square relative">
            <Image
              src="/images/6.png"
              alt="Education"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-wide uppercase">
                EDUCATION
              </h2>
              <div className="w-full border-t-2 border-black mt-2 mb-6"></div>
            </div>
            <p className="text-sm">
              We train the next generation of knitwear leaders through hands-on,
              in-house instruction led by seasoned industry professionals.
            </p>
            <p className="text-sm">
              At our New York and London labs, you'll gain real-world experience
              across every stage of the knitwear development process — no
              gatekeeping, no guesswork.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-bold">Learn to:</p>
              <ul className="text-sm space-y-1">
                <li>– Knit and link garments</li>
                <li>– Program industrial machines</li>
                <li>– Build 3D visuals, avatars, and virtual mannequins</li>
                <li>– Create precise tech packs</li>
                <li>– Source materials and evaluate factory capabilities</li>
              </ul>
            </div>
            <p className="text-sm">
              Whether you're launching a brand or mastering the craft, we equip
              you with the tools, knowledge, and independence to create with
              confidence.
            </p>
            <button className="bg-pink-200 text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-pink-300 transition-colors">
              BOOK A CONSULTATION
            </button>
          </div>
        </div>
      ),
    },
    ourlabs: {
      title: "OUR LABS",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="aspect-square relative">
            <Image
              src="/images/3.png"
              alt="Our Labs"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-wide uppercase">
                OUR LABS
              </h2>
              <div className="w-full border-t-2 border-black mt-2 mb-6"></div>
            </div>
            <p className="text-sm font-bold">THE FUTURE OF THE FACTORY</p>
            <p className="text-sm">
              At Maeknit, we operate two state-of-the-art labs, one in New York
              and one in London, where we transform creative ideas into reality
              with speed, precision, and sustainability. Our labs are equipped
              with the latest low-energy machines, reducing environmental impact
              while maximizing efficiency.
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between bg-pink-200 border-y-2 border-black px-4 py-2">
                  <h3 className="text-lg font-bold tracking-wider uppercase">
                    NEW YORK
                  </h3>
                  <Image
                    src="/images/us_flag.png"
                    alt="US Flag"
                    width={32}
                    height={20}
                    className="object-contain"
                  />
                </div>

                <p className="text-sm">
                  Our 3,600-square-foot lab in Jamaica, Queens, is home to our
                  most advanced knitting and linking equipment. Here, we bring
                  your designs to life with precision and efficiency, handling
                  everything from prototyping to small-run production.
                </p>

                <div className="mt-3 space-y-2">
                  <p className="text-xs font-bold">MACHINE LIST FOR NYC:</p>
                  <ul className="text-xs space-y-1">
                    <li>• STOLL CMS 530 72</li>
                    <li>• STOLL CMS 530 3.5.2</li>
                    <li>• STOLL CMS 822 HP</li>
                    <li>• SHIMA SEIKI SWG 091 N2 165G (WHOLEGARMENT)</li>
                  </ul>

                  <p className="text-xs font-bold mt-3">LINKERS:</p>
                  <p className="text-xs">
                    165G, 165G, 145G, 125G, 105G, 70G, 50G
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between bg-pink-200 border-y-2 border-black px-4 py-2">
                  <h3 className="text-lg font-bold tracking-wider uppercase">
                    LONDON, UK
                  </h3>
                  <Image
                    src="/images/uk_flag.png"
                    alt="UK Flag"
                    width={32}
                    height={20}
                    className="object-contain"
                  />
                </div>

                <p className="text-sm">
                  Our London lab, located in the vibrant Haringey Warehouse
                  District, is part of the Fashion Enter network. This
                  collaborative space is dedicated to providing fast, flexible
                  knitwear development, where creativity meets industrial-grade
                  production.
                </p>

                <div className="mt-3 space-y-2">
                  <p className="text-xs font-bold">MACHINE LIST FOR LONDON:</p>
                  <ul className="text-xs space-y-1">
                    <li>• SHIMA SEIKI 122FF 50G</li>
                    <li>• SHIMA SEIKI SES 122 10G</li>
                    <li>• SHIMA SEIKI N3SR112V 70G</li>
                    <li>• SHIMA SEIKI N5SSR112V 125G</li>
                  </ul>

                  <p className="text-xs font-bold mt-3">LINKERS:</p>
                  <p className="text-xs">50G, 70G, 90G, 105G, 145G</p>
                </div>
              </div>
            </div>

            <button className="bg-pink-200 text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-pink-300 transition-colors">
              BOOK A CONSULTATION
            </button>
          </div>
        </div>
      ),
    },
  };

  const serviceImages = {
    production: "/images/1.png",
    swatches: "/images/3.png",
    development: "/images/6.png",
    education: "/images/4.png",
  };
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader title="SERVICES" />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex justify-between items-center py-4">
            <div className="flex space-x-8">
              {(
                [
                  "production",
                  "swatches",
                  "development",
                  "education",
                  "ourlabs",
                ] as const
              ).map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`cursor-pointer text-sm font-medium uppercase tracking-wide transition-colors ${
                    activeSection === section
                      ? "text-pink-600"
                      : "text-black hover:text-pink-600"
                  }`}
                >
                  {section === "ourlabs" ? "OUR LABS" : section}
                </button>
              ))}
            </div>
          </nav>
          <hr className="border-t-2 border-black" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {activeSection ? (
            <div className="space-y-8">
              {serviceContent[activeSection].content}
            </div>
          ) : (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-2xl font-bold tracking-wide mb-4">
                  SERVICES
                </h1>
                <div className="w-full h-px bg-black mb-8"></div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {(
                  [
                    "production",
                    "swatches",
                    "development",
                    "education",
                  ] as const
                ).map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className="aspect-square relative group overflow-hidden"
                  >
                    <Image
                      src={serviceImages[section]}
                      alt={section}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white text-sm font-medium uppercase tracking-wide">
                      {section === "ourlabs" ? "OUR LABS" : section}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <PageFooter />
    </div>
  );
}
