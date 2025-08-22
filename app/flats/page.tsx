import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FloatingActions from "@/components/floating-actions"
import FlatsShowcase from "@/components/flats-showcase"
import StickyEnquiry from "@/components/sticky-enquiry"

export const metadata = {
  title: "Premium Flats & Apartments - RoofTopia",
  description:
    "Browse our collection of 1BHK, 2BHK, 3BHK, and 4BHK apartments with modern amenities and prime locations.",
}

export default function FlatsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <FlatsShowcase />
      </main>
      <Footer />
      <FloatingActions />
      <StickyEnquiry />
    </div>
  )
}
