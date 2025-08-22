"use client"

import type React from "react"

import { useState } from "react"

const contactInfo = [
  {
    icon: "📞",
    title: "Phone",
    details: ["+91 98765 43210", "+91 98765 43211"],
    action: "tel:+919876543210",
  },
  {
    icon: "✉️",
    title: "Email",
    details: ["info@primebuild.com", "sales@primebuild.com"],
    action: "mailto:info@primebuild.com",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    details: ["+91 98765 43210"],
    action: "https://wa.me/919876543210",
  },
  {
    icon: "📍",
    title: "Address",
    details: ["123 Business District,", "Mumbai, Maharashtra 400001"],
    action: null,
  },
]

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
]

const faqData = [
  {
    question: "What is the booking process?",
    answer:
      "Our booking process is simple: Visit our site, choose your preferred flat, submit required documents, pay the booking amount, and sign the agreement. Our team will guide you through each step.",
  },
  {
    question: "What are the payment options available?",
    answer:
      "We offer flexible payment plans including construction-linked plans, down payment schemes, and bank loan assistance. We also accept payments through cash, cheque, NEFT, and RTGS.",
  },
  {
    question: "Do you provide home loans assistance?",
    answer:
      "Yes, we have tie-ups with leading banks and financial institutions to provide competitive home loan rates. Our team will help you with the entire loan process and documentation.",
  },
  {
    question: "What amenities are included?",
    answer:
      "Our projects include modern amenities like swimming pool, gymnasium, landscaped gardens, children's play area, security systems, power backup, and parking facilities.",
  },
  {
    question: "Is there a maintenance fee?",
    answer:
      "Yes, there is a monthly maintenance fee that covers common area maintenance, security, housekeeping, and utility services. The amount varies by project and flat size.",
  },
]

export default function ContactShowcase() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Dummy form submission
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <section className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-work-sans font-bold text-4xl md:text-5xl text-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team for any inquiries about our premium apartments and properties
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h2 className="font-work-sans font-bold text-2xl text-foreground mb-8">Get In Touch</h2>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-lg hover-lift">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{info.icon}</span>
                    <h3 className="font-work-sans font-semibold text-lg text-card-foreground">{info.title}</h3>
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {info.action ? (
                          <a
                            href={info.action}
                            className="hover:text-primary transition-colors duration-200"
                            target={info.action.startsWith("http") ? "_blank" : undefined}
                            rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="bg-primary text-primary-foreground rounded-lg p-6">
              <h3 className="font-work-sans font-semibold text-lg mb-4">Office Hours</h3>
              <div className="space-y-2">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{schedule.day}</span>
                    <span className="font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-work-sans font-bold text-2xl text-foreground mb-8">Send us a Message</h2>
            <p className="text-sm italic text-red-500 mb-6 flex items-center">
            <span className="mr-2">⚠️</span>
              Important: Please fill the enquiry form present on every enquiry button on the website.⚠️Avoid filling this bottom form👇due to website maintenance!!
            </p>
            <form onSubmit={handleSubmit} className="bg-card rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking Information</option>
                    <option value="site-visit">Schedule Site Visit</option>
                    <option value="payment">Payment Related</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mb-16">
          <h2 className="font-work-sans font-bold text-2xl text-foreground mb-8 text-center">Find Our Office</h2>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
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

        {/* FAQ Section */}
        <div>
          <h2 className="font-work-sans font-bold text-2xl text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted transition-colors duration-200"
                >
                  <span className="font-semibold text-card-foreground">{faq.question}</span>
                  <span
                    className={`text-primary transition-transform duration-200 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFaq === index ? "max-h-96 pb-4" : "max-h-0"
                  }`}
                >
                  <div className="px-6 text-muted-foreground leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
