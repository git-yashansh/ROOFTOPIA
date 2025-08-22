import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FloatingActions from "@/components/floating-actions"
import GalleryShowcase from "@/components/gallery-showcase"

export const metadata = {
  title: "Photo Gallery - RoofTopia Apartments",
  description: "Explore our stunning collection of apartment interiors, exteriors, and amenities.",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <GalleryShowcase />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
