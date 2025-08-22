"use client"

import { useState } from "react"
import Link from "next/link"

const locationsData = [
  {
    id: "andheri-west",
    name: "Andheri West",
    projectName: "PrimeBuild Residency",
    image: "/andheri-west-apartments.png",
    description:
      "Experience premium living in the heart of Andheri West with excellent connectivity to business districts, entertainment hubs, and transportation networks.",
    flatsAvailable: ["1BHK", "2BHK", "3BHK"],
    totalFlats: 120,
    priceRange: "₹45L - ₹85L",
    possession: "Ready to Move",
    amenities: ["Swimming Pool", "Gym", "Garden", "Security", "Parking"],
    nearbyAttractions: ["Infinity Mall", "Metro Station", "Lokhandwala Market", "Versova Beach"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8!2d72.8347!3d19.1136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzQ5LjAiTiA3MsKwNTAnMDUuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    id: "bandra-east",
    name: "Bandra East",
    projectName: "PrimeBuild Luxury Towers",
    image: "/bandra-east-luxury-residence.png",
    description:
      "Luxury redefined in Bandra East with stunning city views, premium amenities, and proximity to the Bandra-Kurla Complex business district.",
    flatsAvailable: ["2BHK", "3BHK", "4BHK"],
    totalFlats: 85,
    priceRange: "₹70L - ₹1.5Cr",
    possession: "Under Construction",
    amenities: ["Rooftop Pool", "Clubhouse", "Spa", "Concierge", "Valet Parking"],
    nearbyAttractions: ["BKC", "Palladium Mall", "Bandra Station", "Carter Road"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2!2d72.8405!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM0LjYiTiA3MsKwNTAnMjUuOCJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    id: "powai",
    name: "Powai",
    projectName: "PrimeBuild Lake View",
    image: "/powai-lake-apartments.png",
    description:
      "Serene lakeside living with breathtaking views of Powai Lake, surrounded by IT parks and educational institutions in Mumbai's tech hub.",
    flatsAvailable: ["1BHK", "2BHK", "3BHK"],
    totalFlats: 95,
    priceRange: "₹55L - ₹1.2Cr",
    possession: "Ready to Move",
    amenities: ["Lake View", "Jogging Track", "Kids Play Area", "Library", "Cafeteria"],
    nearbyAttractions: ["Powai Lake", "R City Mall", "IIT Bombay", "Hiranandani Gardens"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5!2d72.9051!3d19.1197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzExLjAiTiA3MsKwNTQnMTguNCJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    id: "thane-west",
    name: "Thane West",
    projectName: "PrimeBuild Grand Heights",
    image: "/thane-residential-complex.png",
    description:
      "Affordable luxury in Thane West with excellent infrastructure, green spaces, and connectivity to Mumbai via multiple transportation modes.",
    flatsAvailable: ["2BHK", "3BHK", "4BHK"],
    totalFlats: 150,
    priceRange: "₹65L - ₹1.8Cr",
    possession: "Under Construction",
    amenities: ["Landscaped Gardens", "Multi-purpose Hall", "Gymnasium", "Children's Pool", "Senior Citizen Area"],
    nearbyAttractions: ["Viviana Mall", "Thane Station", "Upvan Lake", "Korum Mall"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8!2d72.9781!3d19.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzA2LjAiTiA3MsKwNTgnNDEuMiJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    id: "goregaon-east",
    name: "Goregaon East",
    projectName: "PrimeBuild Metro Connect",
    image: "/goregaon-east-apartments.png",
    description:
      "Strategic location with direct metro connectivity, close to Film City and major IT parks, perfect for modern urban living.",
    flatsAvailable: ["1BHK", "2BHK", "3BHK"],
    totalFlats: 110,
    priceRange: "₹50L - ₹95L",
    possession: "Ready to Move",
    amenities: ["Metro Connectivity", "Shopping Complex", "Food Court", "Banquet Hall", "Yoga Studio"],
    nearbyAttractions: ["Film City", "Oberoi Mall", "Aarey Colony", "Metro Station"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2!2d72.8697!3d19.1553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA5JzE5LjEiTiA3MsKwNTInMTAuOSJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    id: "malad-west",
    name: "Malad West",
    projectName: "PrimeBuild Skyline",
    image: "/malad-west-towers.png",
    description:
      "High-rise living with panoramic city views, modern amenities, and excellent connectivity to Western Express Highway and suburbs.",
    flatsAvailable: ["2BHK", "3BHK", "4BHK"],
    totalFlats: 200,
    priceRange: "₹60L - ₹1.3Cr",
    possession: "Under Construction",
    amenities: ["Sky Deck", "Infinity Pool", "Home Theater", "Business Center", "Electric Car Charging"],
    nearbyAttractions: ["Inorbit Mall", "Malad Station", "Mindspace", "Aksa Beach"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5!2d72.8421!3d19.1918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDExJzMwLjUiTiA3MsKwNTAnMzEuNiJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
]

export default function LocationsShowcase() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  return (
    <section className="py-8 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-work-sans font-bold text-4xl md:text-5xl text-foreground mb-6">Prime Locations</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our premium apartment projects strategically located across Mumbai's most sought-after
            neighborhoods
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locationsData.map((location) => (
            <div key={location.id} className="bg-card rounded-xl overflow-hidden shadow-lg hover-lift group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.projectName}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-work-sans font-bold text-xl mb-1">{location.name}</h3>
                  <p className="text-white/90 text-sm">{location.projectName}</p>
                </div>
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {location.possession}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">{location.description}</p>

                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="font-semibold text-card-foreground">Total Flats:</span>
                    <p className="text-muted-foreground">{location.totalFlats} units</p>
                  </div>
                  <div>
                    <span className="font-semibold text-card-foreground">Price Range:</span>
                    <p className="text-primary font-semibold">{location.priceRange}</p>
                  </div>
                </div>

                {/* Available Flats */}
                <div className="mb-4">
                  <span className="font-semibold text-card-foreground mb-2 block">Available:</span>
                  <div className="flex flex-wrap gap-2">
                    {location.flatsAvailable.map((flat) => (
                      <span key={flat} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                        {flat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Amenities Preview */}
                <div className="mb-6">
                  <span className="font-semibold text-card-foreground mb-2 block">Key Amenities:</span>
                  <div className="flex flex-wrap gap-1">
                    {location.amenities.slice(0, 3).map((amenity) => (
                      <span key={amenity} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                        {amenity}
                      </span>
                    ))}
                    {location.amenities.length > 3 && (
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                        +{location.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={`/flats?location=${location.id}`}
                    className="flex-1 bg-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold text-center hover:bg-accent transition-colors duration-200"
                  >
                    Explore Flats
                  </Link>
                  <button
                    onClick={() => setSelectedLocation(location.id)}
                    className="flex-1 border-2 border-primary text-primary px-4 py-3 rounded-lg font-semibold text-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location Detail Modal */}
        {selectedLocation && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {(() => {
                const location = locationsData.find((loc) => loc.id === selectedLocation)
                if (!location) return null

                return (
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="font-work-sans font-bold text-2xl text-card-foreground">
                          {location.projectName}
                        </h2>
                        <p className="text-muted-foreground">{location.name}</p>
                      </div>
                      <button
                        onClick={() => setSelectedLocation(null)}
                        className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-border transition-colors duration-200"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Left Column */}
                      <div>
                        <img
                          src={location.image || "/placeholder.svg"}
                          alt={location.projectName}
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />

                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold text-card-foreground mb-2">Description</h3>
                            <p className="text-muted-foreground leading-relaxed">{location.description}</p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-card-foreground mb-2">Amenities</h3>
                            <div className="grid grid-cols-2 gap-2">
                              {location.amenities.map((amenity) => (
                                <div key={amenity} className="flex items-center space-x-2">
                                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                                  <span className="text-sm text-muted-foreground">{amenity}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="font-semibold text-card-foreground mb-2">Nearby Attractions</h3>
                            <div className="grid grid-cols-2 gap-2">
                              {location.nearbyAttractions.map((attraction) => (
                                <div key={attraction} className="flex items-center space-x-2">
                                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                                  <span className="text-sm text-muted-foreground">{attraction}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div>
                        <div className="bg-muted rounded-lg p-4 mb-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-semibold text-card-foreground">Total Flats:</span>
                              <p className="text-muted-foreground">{location.totalFlats} units</p>
                            </div>
                            <div>
                              <span className="font-semibold text-card-foreground">Price Range:</span>
                              <p className="text-primary font-semibold">{location.priceRange}</p>
                            </div>
                            <div>
                              <span className="font-semibold text-card-foreground">Possession:</span>
                              <p className="text-muted-foreground">{location.possession}</p>
                            </div>
                            <div>
                              <span className="font-semibold text-card-foreground">Available:</span>
                              <p className="text-muted-foreground">{location.flatsAvailable.join(", ")}</p>
                            </div>
                          </div>
                        </div>

                        {/* Map */}
                        <div className="mb-4">
                          <h3 className="font-semibold text-card-foreground mb-2">Location Map</h3>
                          <div className="aspect-video rounded-lg overflow-hidden">
                            <iframe
                              src={location.mapEmbed}
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
                        <div className="space-y-3">
                          <Link
                            href={`/flats?location=${location.id}`}
                            className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold text-center hover:bg-accent transition-colors duration-200 block"
                          >
                            View Available Flats
                          </Link>
                          <a
                            href="https://forms.gle/78ShmAZWczpZkUyq8"
                            className="w-full bg-secondary text-secondary-foreground px-4 py-3 rounded-lg font-semibold text-center hover:bg-accent transition-colors duration-200 block"
                          >
                            Schedule Site Visit
                          </a>
                          <a
                            href={`https://wa.me/919876543210?text=Hi, I'm interested in ${location.projectName} at ${location.name}`}
                            className="w-full bg-green-500 text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-green-600 transition-colors duration-200 block"
                          >
                            WhatsApp Enquiry
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
