"use client"

import { useState } from "react"

interface Facility {
  name: string
  distance: string
  type: "transport" | "shopping" | "hospital" | "school" | "recreation"
}

interface Flat {
  id: string
  type: string
  title: string
  location: string
  sqft: number
  rooms: number
  bathrooms: number
  balconies: number
  floor: string
  price: string
  originalPrice: string
  offer: string
  images: string[]
  mapEmbed: string
  nearbyFacilities: Facility[]
}

interface FlatCardProps {
  flat: Flat
}

const facilityIcons = {
  transport: "🚇",
  shopping: "🛒",
  hospital: "🏥",
  school: "🎓",
  recreation: "🌊",
}

export default function FlatCard({ flat }: FlatCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % flat.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + flat.images.length) % flat.images.length)
  }

  const downloadBrochure = () => {
    // Create a dummy PDF download
    const link = document.createElement("a")
    link.href = `/brochures/${flat.id}-brochure.pdf`
    link.download = `${flat.title}-Brochure.pdf`
    link.click()
  }

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg hover-lift group">
      {/* Image Gallery */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={flat.images[currentImageIndex] || "/placeholder.svg"}
          alt={flat.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Image Navigation */}
        {flat.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
            >
              →
            </button>
          </>
        )}

        {/* Image Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {flat.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentImageIndex ? "bg-secondary" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Offer Badge */}
        <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {flat.offer}
        </div>

        {/* Type Badge */}
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {flat.type}
        </div>
      </div>

      <div className="p-6">
        {/* Title and Location */}
        <div className="mb-4">
          <h3 className="font-work-sans font-bold text-xl text-card-foreground mb-1">{flat.title}</h3>
          <p className="text-muted-foreground flex items-center">
            <span className="mr-1">📍</span>
            {flat.location}
          </p>
        </div>

        {/* Flat Details */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center space-x-2">
            <span>📐</span>
            <span>{flat.sqft} sq.ft</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>🛏️</span>
            <span>{flat.rooms} Rooms</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>🚿</span>
            <span>{flat.bathrooms} Bathrooms</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>🌅</span>
            <span>{flat.balconies} Balconies</span>
          </div>
          <div className="flex items-center space-x-2 col-span-2">
            <span>🏢</span>
            <span>{flat.floor}</span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">{flat.price}</span>
            <span className="text-muted-foreground line-through">{flat.originalPrice}</span>
          </div>
        </div>

        {/* Nearby Facilities */}
        <div className="mb-6">
          <h4 className="font-semibold text-card-foreground mb-3">Nearby Facilities:</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {flat.nearbyFacilities.map((facility, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span>{facilityIcons[facility.type]}</span>
                <span className="truncate">
                  {facility.name} ({facility.distance})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Google Maps */}
        <div className="mb-6">
          <h4 className="font-semibold text-card-foreground mb-3">Location:</h4>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src={flat.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={downloadBrochure}
            className="bg-muted text-muted-foreground px-4 py-3 rounded-lg font-semibold hover:bg-border transition-colors duration-200 text-center"
          >
            📄 Download Brochure
          </button>
          <a
            href="https://forms.gle/78ShmAZWczpZkUyq8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold hover:bg-accent transition-colors duration-200 text-center"
          >
            📋 Enquiry
          </a>
          <a
            href={`https://wa.me/9304840306?text=Hi, I'm interested in ${flat.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 text-center"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
