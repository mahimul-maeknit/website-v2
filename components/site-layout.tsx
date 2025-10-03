"use client";

import type React from "react";
import Link from "next/link";
import Header from "@/components/header";
import SocialIcons from "@/components/shared/social-icons";
import BrandLogo from "@/components/shared/brand-logo";
import Divider from "@/components/shared/divider";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <Header />
      {children}

      {/* BOTTOM brand (nav + round logo) */}
      <Divider />
      <section className="bottom-brand" aria-label="Primary navigation">
        <div className="container brand-inner">
          <ul className="brand-nav">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/onboarding">Onboarding</Link>
            </li>
            <li>
              <Link href="/work">Our Work</Link>
            </li>
            <li className="brand-logo">
              <Link href="/">
                <BrandLogo />
              </Link>
            </li>
          </ul>
        </div>

        {/* City + Social Row */}
        <div className="container city-social">
          <p className="city">New York &amp; London</p>
          <SocialIcons />
        </div>
      </section>
    </>
  );
}
