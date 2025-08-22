"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import PillNav from "./pill-nav"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home", ariaLabel: "Go to homepage" },
    { href: "/locations", label: "Locations", ariaLabel: "View all locations" },
    { href: "/flats", label: "Flats", ariaLabel: "Browse available flats" },
    { href: "/gallery", label: "Gallery", ariaLabel: "View photo gallery" },
    { href: "/about", label: "About", ariaLabel: "Learn about us" },
    { href: "/contact", label: "Contact", ariaLabel: "Contact us" },
  ]

  return (
    <>
      <PillNav
        logo="/apartment-builder-logo.png"
        logoAlt="PrimeBuild Apartments"
        items={navItems}
        baseColor={isScrolled ? "#000000" : ""}
        pillColor="#FFFFFF"
        hoveredPillTextColor="#FFFFFF"
        pillTextColor="#000000"
        className={`transition-all duration-300 ${isScrolled ? "opacity-95" : "opacity-90"}`}
        initialLoadAnimation={true}
      />

      <div className="fixed top-20 right-4 z-40 flex flex-col gap-2">
        <a
          href="tel:+919876543210"
          className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold hover:bg-accent transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
        >
          📞 Call Now
        </a>
        <Link
          href="/contact"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
        >
          Get Quote
        </Link>
      </div>
    </>
  )
}
