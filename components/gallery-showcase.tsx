"use client"

import { useState } from "react"

const galleryImages = [
  {
    id: 1,
    src: "/1bhk-apartment-interior.png",
    alt: "1BHK Apartment Interior",
    category: "Interior",
    title: "Modern 1BHK Living Space",
  },
  {
    id: 2,
    src: "/2bhk-apartment.png",
    alt: "2BHK Apartment",
    category: "Interior",
    title: "Spacious 2BHK Layout",
  },
  {
    id: 3,
    src: "/luxury-3bhk-apartment.png",
    alt: "Luxury 3BHK Apartment",
    category: "Interior",
    title: "Premium 3BHK Suite",
  },
  {
    id: 4,
    src: "/luxurious-penthouse.png",
    alt: "Luxurious Penthouse",
    category: "Interior",
    title: "Penthouse Living Room",
  },
  {
    id: 5,
    src: "/andheri-west-apartments.png",
    alt: "Andheri West Building",
    category: "Exterior",
    title: "Andheri West Complex",
  },
  {
    id: 6,
    src: "/bandra-east-luxury-residence.png",
    alt: "Bandra East Residence",
    category: "Exterior",
    title: "Bandra Luxury Towers",
  },
  {
    id: 7,
    src: "/powai-lake-apartments.png",
    alt: "Powai Lake View",
    category: "Exterior",
    title: "Powai Lake View Apartments",
  },
  {
    id: 8,
    src: "/thane-residential-complex.png",
    alt: "Thane Complex",
    category: "Exterior",
    title: "Thane Residential Complex",
  },
  {
    id: 9,
    src: "/1bhk-living-room.png",
    alt: "1BHK Living Room",
    category: "Interior",
    title: "Cozy Living Room",
  },
  {
    id: 10,
    src: "/2bhk-living-area.png",
    alt: "2BHK Living Area",
    category: "Interior",
    title: "Modern Living Area",
  },
  {
    id: 11,
    src: "/3bhk-living-room.png",
    alt: "3BHK Living Room",
    category: "Interior",
    title: "Elegant Living Space",
  },
  {
    id: 12,
    src: "/4bhk-living-area.png",
    alt: "4BHK Living Area",
    category: "Interior",
    title: "Luxury Living Area",
  },
  {
    id: 13,
    src: "/swimming-pool-amenity.png",
    alt: "Swimming Pool",
    category: "Amenities",
    title: "Resort-style Swimming Pool",
  },
  {
    id: 14,
    src: "/gym-fitness-center.png",
    alt: "Fitness Center",
    category: "Amenities",
    title: "State-of-art Gym",
  },
  {
    id: 15,
    src: "/landscaped-gardens.png",
    alt: "Landscaped Gardens",
    category: "Amenities",
    title: "Beautiful Gardens",
  },
  {
    id: 16,
    src: "/clubhouse-lounge.png",
    alt: "Clubhouse Lounge",
    category: "Amenities",
    title: "Premium Clubhouse",
  },
]

export default function GalleryShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)

  const categories = ["All", "Interior", "Exterior", "Amenities"]

  const filteredImages = galleryImages.filter(
    (image) => selectedCategory === "All" || image.category === selectedCategory,
  )

  const openLightbox = (imageId: number) => {
    setLightboxImage(imageId)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxImage === null) return

    const currentIndex = filteredImages.findIndex((img) => img.id === lightboxImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setLightboxImage(filteredImages[newIndex].id)
  }

  const currentLightboxImage = filteredImages.find((img) => img.id === lightboxImage)

  return (
    <section className="py-8 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-work-sans font-bold text-4xl md:text-5xl text-foreground mb-6">Photo Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our stunning collection of apartment interiors, exteriors, and world-class amenities
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-card-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground text-center">
            Showing {filteredImages.length} of {galleryImages.length} images
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-lg hover-lift"
              onClick={() => openLightbox(image.id)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 text-primary p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground mb-1">{image.title}</h3>
                <p className="text-sm text-muted-foreground">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && currentLightboxImage && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
              >
                ✕
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateLightbox("prev")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
              >
                ←
              </button>
              <button
                onClick={() => navigateLightbox("next")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
              >
                →
              </button>

              {/* Image */}
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={currentLightboxImage.src || "/placeholder.svg"}
                  alt={currentLightboxImage.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <h3 className="font-work-sans font-bold text-xl text-foreground mb-2">
                    {currentLightboxImage.title}
                  </h3>
                  <p className="text-muted-foreground">{currentLightboxImage.category}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📷</div>
            <h3 className="font-work-sans font-semibold text-2xl text-foreground mb-2">No images found</h3>
            <p className="text-muted-foreground mb-6">Try selecting a different category</p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors duration-200"
            >
              View All Images
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
