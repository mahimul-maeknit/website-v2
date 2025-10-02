"use client";

import type React from "react";

import Image from "next/image";
import SiteLayout from "@/components/site-layout";
import ScrollIndicator from "@/components/shared/scroll-indicator";
import Divider from "@/components/shared/divider";
import { useHorizontalScroll } from "@/hooks/use-horizontal-scroll";
import Link from "next/link";

export default function ServicesPage() {
  const {
    scrollContainerRef,
    canScrollLeft,
    canScrollRight,
    scrollToNext,
    scrollToPrev,
  } = useHorizontalScroll();

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
    { id: "labs", title: "OUR LABS", image: "/images/latest/our_labs.png" },
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
  ];

  return (
    <SiteLayout>
      <section className="services-content-frame" aria-label="Services">
        <div className="services-scroll-wrapper">
          <div className="services-scroll-container" ref={scrollContainerRef}>
            {services.map((service, index) => (
              <Link
                href={
                  service.id === "labs" ? "/labs" : `/services/${service.id}`
                }
                key={service.id}
                className="service-box"
              >
                <div className="service-box-header">
                  <h2 className="service-box-title">{service.title}</h2>
                  {index === 2 && canScrollRight && (
                    <ScrollIndicator
                      onClick={() => {
                        scrollToNext();
                      }}
                      ariaLabel="Scroll to next services"
                      className="scroll-indicator-right"
                    />
                  )}
                  {index === 5 && canScrollLeft && (
                    <ScrollIndicator
                      onClick={() => {
                        scrollToPrev();
                      }}
                      ariaLabel={""}
                      className="scroll-indicator-left"
                    />
                  )}
                </div>
                <div className="service-box-image">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Divider className="mt-5" />
      </section>
    </SiteLayout>
  );
}
