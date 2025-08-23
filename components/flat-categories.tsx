"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

// ye main page me jo flats hai uska edit krne keliye hai //
const flatTypes = [
  {
    id: "1bhk",
    title: "1BHK",
    image: "/1bhk-apartment-interior.png",
    size: "450-650 sq.ft",
    startingPrice: "₹45 Lakhs",
    location: "Multiple Locations",
    description: "Perfect for young professionals and couples",
  },
  {
    id: "2bhk",
    title: "2BHK",
    image: "/2bhk-apartment.png",
    size: "750-950 sq.ft",
    startingPrice: "₹65 Lakhs",
    location: "Premium Areas",
    description: "Ideal for small families",
  },
  {
    id: "3bhk",
    title: "3BHK",
    image: "/luxury-3bhk-apartment.png",
    size: "1100-1400 sq.ft",
    startingPrice: "₹95 Lakhs",
    location: "Prime Locations",
    description: "Spacious homes for growing families",
  },
  {
    id: "4bhk",
    title: "4BHK",
    image: "/luxurious-penthouse.png",
    size: "1500-2000 sq.ft",
    startingPrice: "₹1.25 Crores",
    location: "Exclusive Areas",
    description: "Luxury living with premium amenities",
  },
]

export default function FlatCategories() {
  const [hoveredFlat, setHoveredFlat] = useState<string | null>(null)

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-work-sans font-bold text-4xl md:text-5xl text-card-foreground mb-6">
            Choose Your Perfect Home
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our range of thoughtfully designed apartments that cater to every lifestyle and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {flatTypes.map((flat) => (
            <div
              key={flat.id}
              className="relative group cursor-pointer h-full"
              onMouseEnter={() => setHoveredFlat(flat.id)}
              onMouseLeave={() => setHoveredFlat(null)}
            >
              {/* Main Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover-lift flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={flat.image || "/placeholder.svg"}
                    alt={flat.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {flat.title}
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <h3 className="font-work-sans font-semibold text-xl text-card-foreground mb-2">
                    {flat.title} Apartments
                  </h3>
                  <p className="text-muted-foreground mb-4">{flat.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-primary font-semibold">{flat.startingPrice}</span>
                    <Link
                      href="https://forms.gle/78ShmAZWczpZkUyq8"
                      className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-accent transition-colors duration-200"
                    >
                      Enquiry
                    </Link>
                  </div>
                </div>
              </div>

              {/* Hover Popup with Framer Motion */}
              <AnimatePresence>
                {hoveredFlat === flat.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-0 left-0 right-0 bg-white rounded-xl shadow-2xl border-2 border-secondary p-6 z-10"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-work-sans font-bold text-lg text-card-foreground">
                        {flat.title} Details
                      </h4>
                      <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-semibold animate-pulse">
                        Popular
                      </span>
                    </div>

                    {/* Staggered content */}
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } },
                      }}
                      className="space-y-3 text-sm"
                    >
                      <motion.div
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        className="flex justify-between"
                      >
                        <span className="text-muted-foreground">Size:</span>
                        <span className="font-semibold text-card-foreground">{flat.size}</span>
                      </motion.div>
                      <motion.div
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        className="flex justify-between"
                      >
                        <span className="text-muted-foreground">Starting Price:</span>
                        <span className="font-semibold text-primary">{flat.startingPrice}</span>
                      </motion.div>
                      <motion.div
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        className="flex justify-between"
                      >
                        <span className="text-muted-foreground">Location:</span>
                        <span className="font-semibold text-card-foreground">{flat.location}</span>
                      </motion.div>
                    </motion.div>

                    <div className="flex gap-2 mt-4">
                      <Link
                        href={`/flats#${flat.id}`}
                        className="flex-1 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-semibold text-center hover:bg-accent transition-colors duration-200"
                      >
                        Quick View
                      </Link>
                      <Link
                        href="https://forms.gle/78ShmAZWczpZkUyq8"
                        className="flex-1 bg-secondary text-secondary-foreground px-3 py-2 rounded-lg text-sm font-semibold text-center hover:bg-accent transition-colors duration-200"
                      >
                        Enquiry
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
