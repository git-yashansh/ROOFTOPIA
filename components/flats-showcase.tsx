"use client"

import { useState, useMemo } from "react"
import FlatCard from "./flat-card"
// flat me map add karne keliye yaha kro//
const flatsData = [
  {
    id: "1bhk-andheri-1",
    type: "1BHK",
    title: "Cozy 1BHK in Andheri West",
    location: "Andheri West",
    sqft: 580,
    rooms: 1,
    bathrooms: 1,
    balconies: 1,
    floor: "3rd Floor",
    price: "₹48 Lakhs",
    originalPrice: "₹52 Lakhs",
    offer: "8% Off",
    images: ["/1bhk-apartment-interior.png", "/1bhk-living-room.png", "/1bhk-bedroom.png"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8!2d72.8347!3d19.1136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzQ5LjAiTiA3MsKwNTAnMDUuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
    nearbyFacilities: [
      { name: "Metro Station", distance: "0.5 km", type: "transport" },
      { name: "D-Mart", distance: "0.3 km", type: "shopping" },
      { name: "Kokilaben Hospital", distance: "1.2 km", type: "hospital" },
      { name: "Ryan International School", distance: "0.8 km", type: "school" },
    ],
  },
  {
    id: "2bhk-bandra-1",
    type: "2BHK",
    title: "Modern 2BHK in Bandra East",
    location: "Bandra East",
    sqft: 850,
    rooms: 2,
    bathrooms: 2,
    balconies: 2,
    floor: "7th Floor",
    price: "₹72 Lakhs",
    originalPrice: "₹78 Lakhs",
    offer: "Limited Time",
    images: ["/2bhk-apartment.png", "/2bhk-living-area.png", "/2bhk-master-bedroom.png"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2!2d72.8405!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM0LjYiTiA3MsKwNTAnMjUuOCJF!5e0!3m2!1sen!2sin!4v1234567890",
    nearbyFacilities: [
      { name: "Bandra Station", distance: "1.0 km", type: "transport" },
      { name: "Palladium Mall", distance: "1.5 km", type: "shopping" },
      { name: "Lilavati Hospital", distance: "2.0 km", type: "hospital" },
      { name: "Dhirubhai Ambani School", distance: "1.8 km", type: "school" },
    ],
  },
  {
    id: "3bhk-powai-1",
    type: "3BHK",
    title: "Spacious 3BHK with Lake View",
    location: "Powai",
    sqft: 1250,
    rooms: 3,
    bathrooms: 3,
    balconies: 2,
    floor: "12th Floor",
    price: "₹1.05 Crores",
    originalPrice: "₹1.15 Crores",
    offer: "Lake View Premium",
    images: ["/luxury-3bhk-apartment.png", "/3bhk-living-room.png", "/3bhk-master-suite.png"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5!2d72.9051!3d19.1197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzExLjAiTiA3MsKwNTQnMTguNCJF!5e0!3m2!1sen!2sin!4v1234567890",
    nearbyFacilities: [
      { name: "Powai Lake", distance: "0.2 km", type: "recreation" },
      { name: "R City Mall", distance: "2.5 km", type: "shopping" },
      { name: "Hiranandani Hospital", distance: "1.0 km", type: "hospital" },
      { name: "IIT Bombay", distance: "3.0 km", type: "school" },
    ],
  },
  {
    id: "4bhk-thane-1",
    type: "4BHK",
    title: "Luxury 4BHK Penthouse",
    location: "Thane West",
    sqft: 1800,
    rooms: 4,
    bathrooms: 4,
    balconies: 3,
    floor: "15th Floor (Penthouse)",
    price: "₹1.35 Crores",
    originalPrice: "₹1.50 Crores",
    offer: "Penthouse Special",
    images: ["/luxurious-penthouse.png", "/4bhk-living-area.png", "/4bhk-master-bedroom.png"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8!2d72.9781!3d19.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzA2LjAiTiA3MsKwNTgnNDEuMiJF!5e0!3m2!1sen!2sin!4v1234567890",
    nearbyFacilities: [
      { name: "Thane Station", distance: "1.5 km", type: "transport" },
      { name: "Viviana Mall", distance: "2.0 km", type: "shopping" },
      { name: "Jupiter Hospital", distance: "3.0 km", type: "hospital" },
      { name: "DAV School", distance: "1.0 km", type: "school" },
    ],
  },
]

export default function FlatsShowcase() {
  const [activeTab, setActiveTab] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [budgetFilter, setBudgetFilter] = useState("All")
  const [locationFilter, setLocationFilter] = useState("All")

  const tabs = ["All", "1BHK", "2BHK", "3BHK", "4BHK"]
  const budgetRanges = ["All", "Under ₹50L", "₹50L - ₹1Cr", "Above ₹1Cr"]
  const locations = ["All", "Andheri West", "Bandra East", "Powai", "Thane West"]

  const filteredFlats = useMemo(() => {
    return flatsData.filter((flat) => {
      const matchesTab = activeTab === "All" || flat.type === activeTab
      const matchesSearch =
        searchTerm === "" ||
        flat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flat.location.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesBudget =
        budgetFilter === "All" ||
        (budgetFilter === "Under ₹50L" && Number.parseFloat(flat.price.replace(/[₹,Lakhs]/g, "")) < 50) ||
        (budgetFilter === "₹50L - ₹1Cr" &&
          Number.parseFloat(flat.price.replace(/[₹,Lakhs,Crores]/g, "")) >= 50 &&
          Number.parseFloat(flat.price.replace(/[₹,Lakhs,Crores]/g, "")) <= 100) ||
        (budgetFilter === "Above ₹1Cr" && flat.price.includes("Crores"))
      const matchesLocation = locationFilter === "All" || flat.location === locationFilter

      return matchesTab && matchesSearch && matchesBudget && matchesLocation
    })
  }, [activeTab, searchTerm, budgetFilter, locationFilter])

  return (
    <section className="py-8 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-work-sans font-bold text-4xl md:text-5xl text-foreground mb-6">
            Premium Flats & Apartments
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover your perfect home from our curated collection of luxury apartments
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-xl p-6 mb-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Search</label>
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Budget</label>
              <select
                value={budgetFilter}
                onChange={(e) => setBudgetFilter(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Location</label>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchTerm("")
                  setBudgetFilter("All")
                  setLocationFilter("All")
                  setActiveTab("All")
                }}
                className="w-full bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-accent transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-card-foreground hover:bg-muted"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredFlats.length} of {flatsData.length} properties
          </p>
        </div>

        {/* Flats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredFlats.map((flat) => (
            <FlatCard key={flat.id} flat={flat} />
          ))}
        </div>

        {/* No Results */}
        {filteredFlats.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="font-work-sans font-semibold text-2xl text-foreground mb-2">No properties found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search criteria or filters</p>
            <button
              onClick={() => {
                setSearchTerm("")
                setBudgetFilter("All")
                setLocationFilter("All")
                setActiveTab("All")
              }}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors duration-200"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
