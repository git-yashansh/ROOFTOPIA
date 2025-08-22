"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn"
  delay?: number
  className?: string
}

export default function ScrollAnimation({
  children,
  animation = "fadeIn",
  delay = 0,
  className = "",
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay])

  const getAnimationClass = () => {
    const baseClass = "transition-all duration-700 ease-out"
    if (!isVisible) {
      switch (animation) {
        case "fadeIn":
          return `${baseClass} opacity-0`
        case "slideUp":
          return `${baseClass} opacity-0 translate-y-8`
        case "slideLeft":
          return `${baseClass} opacity-0 translate-x-8`
        case "slideRight":
          return `${baseClass} opacity-0 -translate-x-8`
        case "scaleIn":
          return `${baseClass} opacity-0 scale-95`
        default:
          return `${baseClass} opacity-0`
      }
    }
    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={elementRef} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
