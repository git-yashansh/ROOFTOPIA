"use client"

import { useState } from "react"

export default function StickyEnquiry() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Collapsed State */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4">
            <span className="font-semibold">Interested in our properties?</span>
            <span className="text-primary-foreground/80 text-sm hidden sm:block">Get instant assistance</span>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="tel:+919876543210"
              className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-accent transition-colors duration-200"
            >
              Call Now
            </a>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-primary-foreground text-primary px-4 py-2 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-200"
            >
              {isExpanded ? "Close" : "Quick Enquiry"}
            </button>
          </div>
        </div>

        {/* Expanded State */}
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96 pb-4" : "max-h-0"}`}>
          <div className="border-t border-primary-foreground/20 pt-4">
            <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-3 py-2 rounded-lg text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-3 py-2 rounded-lg text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <select className="px-3 py-2 rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-secondary">
                <option value="">Select BHK Type</option>
                <option value="1bhk">1BHK</option>
                <option value="2bhk">2BHK</option>
                <option value="3bhk">3BHK</option>
                <option value="4bhk">4BHK</option>
              </select>
              <button
                type="submit"
                className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-accent transition-colors duration-200"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
