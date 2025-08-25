import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">RT</span>
              </div>
              <span className="font-work-sans font-bold text-xl">ROOFTOPIA</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Building dreams with premium residential properties. Your trusted partner for luxury apartments and modern
              living spaces.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200">
                <span className="sr-only">Facebook</span>📘
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200">
                <span className="sr-only">Instagram</span>📷
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>💼
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200">
                <span className="sr-only">YouTube</span>📺
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-work-sans font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Locations", "Flats", "Gallery", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-work-sans font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <span>📍</span>
                <span className="text-primary-foreground/80">
                  123 Business District,
                  <br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <a
                  href="tel:+9304840306"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                >
                  +91 9304840306
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <a
                  href="mailto:kr.yashansh123@gmail.com"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                >
                  kr.yashansh123@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>💬</span>
                <a
                  href="https://wa.me/9304840306"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-work-sans font-semibold text-lg">Stay Updated</h3>
            <p className="text-primary-foreground/80 text-sm">
              Get the latest updates on new properties and exclusive offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-accent transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="aspect-video w-full max-w-2xl mx-auto rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9999999999995!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2025 ROOFTOPIA Apartments. All rights reserved. |{" "}
            <a
              href="https://nexora-ai-tan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition duration-300 transform hover:scale-105 hover:underline cursor-pointer"
            >
              Managed by NexoraAI ֎ - Next-gen, Versatile Tech brand by Kumar yashansh ֎
            </a>{" "}
            |{" "}
            <Link href="/privacy" className="hover:text-secondary transition-colors duration-200 ml-1">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="hover:text-secondary transition-colors duration-200 ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
