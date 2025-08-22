import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FloatingActions from "@/components/floating-actions"
import AboutShowcase from "@/components/about-showcase"

export const metadata = {
  title: "About Us - RoofTopia Apartments",
  description: "Learn about PrimeBuild's mission, vision, and commitment to creating premium residential spaces.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <AboutShowcase />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
