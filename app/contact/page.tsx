import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FloatingActions from "@/components/floating-actions"
import ContactShowcase from "@/components/contact-showcase"

export const metadata = {
  title: "Contact Us - Rooftopia Apartments",
  description: "Get in touch with Rooftopia for inquiries about our premium apartments and properties.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <ContactShowcase />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
