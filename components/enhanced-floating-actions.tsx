"use client"
// ye quick action ka hai isse details option chnagh ekro but dhyan se color code comnined hai //
import { useState, useEffect } from "react"
import { Phone, MessageCircle, Home } from "lucide-react" // prettier icons

export default function EnhancedFloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  const actions = [
    {
      icon: <Phone size={22} />,
      label: "Call Now",
      href: "tel:+9304840306",
      bg: "bg-black hover:bg-white",
      color: "text-white hover:text-black",
    },
    {
      icon: <MessageCircle size={22} />,
      label: "WhatsApp",
      href: "https://wa.me/9304840306?text=Hi, I'm interested in your apartments",
      bg: "bg-green-500 hover:bg-green-600",
      color: "text-white",
    },
    {
      icon: <Home size={22} />,
      label: "Book Visit",
      href: "/contact",
      bg: "bg-gray-800 hover:bg-gray-900",
      color: "text-white",
    },
  ]

  return (
    <div className="fixed right-6 bottom-6 flex flex-col items-end z-50 gap-4">
      
      {/* Quick Actions */}
      <div className="flex flex-col items-end gap-3">
        {/* Action Buttons */}
        <div
          className={`flex flex-col gap-3 transition-all duration-500 ${
            isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {actions.map((action, index) => (
            <a
              key={index}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${action.bg} ${action.color} transition-all duration-300 hover:scale-110 relative`}
              style={{ transitionDelay: isExpanded ? `${index * 100}ms` : "0ms" }}
              title={action.label}
            >
              {action.icon}
              <span className="absolute right-16 bg-black text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 whitespace-nowrap">
                {action.label}
              </span>
            </a>
          ))}
        </div>

        {/* Main Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-black text-white shadow-xl hover:bg-white hover:text-black transition-transform duration-300 hover:scale-110"
        >
          <span className={`text-2xl transition-transform duration-300 ${isExpanded ? "rotate-45" : ""}`}>✚</span>
        </button>
      </div>

      {/* Scroll to Top */}
      {!isExpanded && (
        <button
          onClick={scrollToTop}
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-black text-white hover:bg-white hover:text-black transition-all duration-300 ${
            showScrollTop ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-75 pointer-events-none"
          }`}
          title="Scroll to Top"
        >
          ↑
        </button>
      )}
    </div>
  )
}
