"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const initialSlides = [
  {
    id: 1,
    image: "/images/new.png",
    title: "20% Discount on All Flats",
    subtitle: "Limited time offer on premium apartments Call Now!!",
    cta: "Explore Flats",
    ctaLink: "/flats",
  },
  {
    id: 2,
    image: "/elegant-apartment-living-room.png",
    title: "Book Now, Pay Later",
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

export default function HeroSection() {
  const [slides, setSlides] = useState(initialSlides)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  // Function to change slide 1 image dynamically
  const changeSlide1Image = (newImage: string) => {
    setSlides((prev) =>
      prev.map((slide) =>
        slide.id === 1 ? { ...slide, image: newImage } : slide
      )
    )
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-work-sans font-bold text-4xl md:text-6xl lg:text-7xl mb-6 fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 fade-in">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <Link
              href={slides[currentSlide].ctaLink}
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent transition-all duration-300 hover:scale-105"
            >
              {slides[currentSlide].cta}
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-secondary scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Example Button to Change Slide 1 Image */}
      <div className="absolute top-8 right-8">
        <button
          onClick={() => changeSlide1Image("/images/new-image.png")}
          className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200 transition"
        >
          Change Slide 1 Image
        </button>
      </div>
    </section>
  )
}
