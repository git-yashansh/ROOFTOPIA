"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import ScrollAnimation from "./scroll-animations"
//YE  MAIN PAGE KA HAI CHNAGEKRN EKEIYE ISKO CHNAG EKRO------------------//
const heroSlides = [
  {
    id: 1,
    image: "/images/new.png",
    title: "20% Discount on All Flats Call Now!!",
    subtitle: "Limited time offer on premium apartments",
    cta: "Explore Flats",
    ctaLink: "/flats",
  },
  {
    id: 2,
    image: "/elegant-apartment-living-room.png",
    title: "Book Now, Pay Later ",
    subtitle: "Flexible payment plans available",
    cta: "View Options",
    ctaLink: "/flats",
  },
  {
    id: 3,
    image: "/furnished-ready-apartment.png",
    title: "Ready to Move Flats",
    subtitle: "Move in immediately with zero waiting",
    cta: "Book Visit",
    ctaLink: "/contact",
  },
]

export default function EnhancedHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume after 10 seconds
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <ScrollAnimation animation="slideUp" delay={300}>
            <h1 className="font-work-sans font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="slideUp" delay={600}>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="slideUp" delay={900}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={heroSlides[currentSlide].ctaLink}
                className="group bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                  {heroSlides[currentSlide].cta}
                </span>
              </Link>
              <Link
                href="/contact"
                className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                  Contact Us
                </span>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-12 h-3 rounded-full transition-all duration-300 overflow-hidden ${
              index === currentSlide ? "bg-secondary scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          >
            {index === currentSlide && <div className="absolute inset-0 bg-accent rounded-full animate-pulse" />}
          </button>
        ))}
      </div>

      {/* Animated Scroll Indicator */}
      <ScrollAnimation animation="fadeIn" delay={1200}>
        <div className="absolute bottom-8 right-8 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
            <div className="absolute top-2 w-1 h-2 bg-secondary rounded-full animate-ping" />
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}
