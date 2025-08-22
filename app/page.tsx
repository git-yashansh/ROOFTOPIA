import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import EnhancedHeroSection from "@/components/enhanced-hero-section"
import FlatCategories from "@/components/flat-categories"
import LocationHighlights from "@/components/location-highlights"
import EnhancedFloatingActions from "@/components/enhanced-floating-actions"
import LoadingSpinner from "@/components/loading-spinner"
import ScrollAnimation from "@/components/scroll-animations"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <LoadingSpinner />
      <Navigation />
      <main>
        <EnhancedHeroSection />
        <ScrollAnimation animation="slideUp" delay={200}>
          <FlatCategories />
        </ScrollAnimation>
        <ScrollAnimation animation="slideUp" delay={400}>
          <LocationHighlights />
        </ScrollAnimation>
      </main>
      <ScrollAnimation animation="fadeIn" delay={600}>
        <Footer />
      </ScrollAnimation>
      <EnhancedFloatingActions />
    </div>
  )
}
