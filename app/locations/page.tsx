import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FloatingActions from "@/components/floating-actions"
import LocationsShowcase from "@/components/locations-showcase"

export const metadata = {
  title: "Prime Locations - RoofTopia Apartments",
  description: "Explore our premium apartment projects across Mumbai's most sought-after locations.",
}

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <LocationsShowcase />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
