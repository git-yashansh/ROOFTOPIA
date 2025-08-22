"use client"

import { useState, useEffect } from "react"

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Quick Action Buttons */}
      <div className="fixed right-4 bottom-20 z-40 flex flex-col gap-3">
        <a
          href="tel:+919876543210"
          className="bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-accent transition-all duration-300 hover:scale-110 group"
          title="Call Now"
        >
          <span className="text-xl">📞</span>
          <span className="absolute right-16 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Call Now
          </span>
        </a>

        <a
          href="https://wa.me/919876543210?text=Hi, I'm interested in your apartments"
          className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 group"
          title="WhatsApp"
        >
          <span className="text-xl">💬</span>
          <span className="absolute right-16 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            WhatsApp
          </span>
        </a>

        <a
          href="/contact"
          className="bg-secondary text-secondary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-accent transition-all duration-300 hover:scale-110 group"
          title="Book a Visit"
        >
          <span className="text-xl">🏠</span>
          <span className="absolute right-16 bg-secondary text-secondary-foreground px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Book Visit
          </span>
        </a>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-4 bottom-4 z-40 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-accent transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        title="Scroll to Top"
      >
        <span className="text-lg">↑</span>
      </button>
    </>
  )
}
