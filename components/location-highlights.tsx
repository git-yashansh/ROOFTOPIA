import Link from "next/link"
//flat ka loaction yaha se krna google form bhi yahi update krna //
//sara file link h so rename mat krna//
const locations = [
  {
    id: "andheri",
    name: "Andheri West",
    image: "/andheri-west-apartments.png",
    description: "Prime location with excellent connectivity to business districts",
    flatsAvailable: "1BHK, 2BHK, 3BHK",
    nearbyFacilities: ["Metro Station", "Shopping Mall", "Schools", "Hospitals"],
  },
  {
    id: "bandra",
    name: "Bandra East",
    image: "/bandra-east-luxury-residence.png",
    description: "Upscale neighborhood with premium amenities and lifestyle",
    flatsAvailable: "2BHK, 3BHK, 4BHK",
    nearbyFacilities: ["Airport Link", "Sea Link", "Restaurants", "Gyms"],
  },
  {
    id: "powai",
    name: "Powai",
    image: "/powai-lake-apartments.png",
    description: "Serene lakeside living with IT hub proximity",
    flatsAvailable: "1BHK, 2BHK, 3BHK",
    nearbyFacilities: ["IT Parks", "Lake View", "Colleges", "Malls"],
  },
  {
    id: "thane",
    name: "Thane West",
    image: "/thane-residential-complex.png",
    description: "Affordable luxury with great infrastructure development",
    flatsAvailable: "2BHK, 3BHK, 4BHK",
    nearbyFacilities: ["Railway Station", "Hospitals", "Parks", "Markets"],
  },
]

export default function LocationHighlights() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-work-sans font-bold text-4xl md:text-5xl text-foreground mb-6">Prime Locations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategically located projects in Mumbai's most sought-after neighborhoods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="bg-card rounded-xl overflow-hidden shadow-lg hover-lift group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-work-sans font-bold text-2xl mb-1">{location.name}</h3>
                  <p className="text-white/90">{location.flatsAvailable}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">{location.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-card-foreground mb-3">Nearby Facilities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.nearbyFacilities.map((facility) => (
                      <span key={facility} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`/locations#${location.id}`}
                    className="flex-1 bg-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold text-center hover:bg-accent transition-colors duration-200"
                  >
                    View Flats
                  </Link>
                  <Link
                    href="https://forms.gle/78ShmAZWczpZkUyq8"
                    className="flex-1 border-2 border-primary text-primary px-4 py-3 rounded-lg font-semibold text-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
