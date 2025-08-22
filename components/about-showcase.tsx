"use client"

import { useState } from "react"

const teamMembers = [
  {
    id: 1,
    name: "Rajesh Sharma",
    position: "Founder & CEO",
    image: "/team-ceo.png",
    bio: "With over 20 years in real estate development, Rajesh leads PrimeBuild's vision of creating premium living spaces.",
    experience: "20+ Years",
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "Chief Architect",
    image: "/team-architect.png",
    bio: "Award-winning architect specializing in sustainable and modern residential design with international experience.",
    experience: "15+ Years",
  },
  {
    id: 3,
    name: "Amit Kumar",
    position: "Project Director",
    image: "/team-director.png",
    bio: "Expert in project management and construction, ensuring timely delivery of all PrimeBuild projects.",
    experience: "18+ Years",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    position: "Sales Head",
    image: "/team-sales.png",
    bio: "Customer-focused sales leader helping families find their perfect homes with personalized service.",
    experience: "12+ Years",
  },
]

const testimonials = [
  {
    id: 1,
    name: "Vikram & Sunita Agarwal",
    location: "Andheri West",
    rating: 5,
    text: "PrimeBuild delivered exactly what they promised. Our 2BHK apartment is beautifully designed with excellent amenities. The entire process was smooth and transparent.",
    image: "/customer-1.png",
    flat: "2BHK",
  },
  {
    id: 2,
    name: "Rohit Mehta",
    location: "Bandra East",
    rating: 5,
    text: "Outstanding quality and attention to detail. The location is perfect and the building amenities are world-class. Highly recommend PrimeBuild to anyone looking for premium apartments.",
    image: "/customer-2.png",
    flat: "3BHK",
  },
  {
    id: 3,
    name: "Kavya & Arjun Singh",
    location: "Powai",
    rating: 5,
    text: "We love our lake view apartment! The construction quality is excellent and the customer service team was always helpful throughout our buying journey.",
    image: "/customer-3.png",
    flat: "3BHK",
  },
  {
    id: 4,
    name: "Deepak Joshi",
    location: "Thane West",
    rating: 4,
    text: "Great value for money. The apartment is spacious and well-planned. PrimeBuild's team was professional and delivered on time as promised.",
    image: "/customer-4.png",
    flat: "4BHK",
  },
]

const achievements = [
  { number: "500+", label: "Happy Families" },
  { number: "15+", label: "Projects Completed" },
  { number: "20+", label: "Years Experience" },
  { number: "6", label: "Prime Locations" },
]

const certifications = ["RERA Certified", "ISO 9001:2015", "Green Building Council", "CREDAI Member"]

export default function AboutShowcase() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-work-sans font-bold text-4xl md:text-5xl text-foreground mb-6">About RoofTopia</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building dreams with premium residential properties. Your trusted partner for luxury apartments and modern
            living spaces across Mumbai's prime locations.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <img
              src="/company-building.png"
              alt="PrimeBuild Office"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="font-work-sans font-bold text-3xl text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2004, RoofTopia has been at the forefront of Mumbai's real estate development, creating
                homes that blend luxury with affordability. Our journey began with a simple vision: to build not just
                apartments, but communities where families can thrive.
              </p>
            </div>
            <div>
              <h3 className="font-work-sans font-semibold text-xl text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create premium residential spaces that enhance the quality of life for our customers while
                maintaining the highest standards of construction, design, and customer service.
              </p>
            </div>
            <div>
              <h3 className="font-work-sans font-semibold text-xl text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be Mumbai's most trusted real estate developer, known for innovation, quality, and customer
                satisfaction in every project we undertake.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-primary text-primary-foreground rounded-xl p-8 mb-20">
          <h2 className="font-work-sans font-bold text-3xl text-center mb-8">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-primary-foreground/80">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h2 className="font-work-sans font-bold text-3xl text-center text-foreground mb-8">
            Certifications & Awards
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card rounded-lg p-6 text-center shadow-lg hover-lift">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground text-2xl">🏆</span>
                </div>
                <h3 className="font-semibold text-card-foreground">{cert}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-work-sans font-bold text-3xl text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experienced leadership team brings decades of expertise in real estate development and customer
              service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-card rounded-xl overflow-hidden shadow-lg hover-lift group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {member.experience}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-work-sans font-bold text-xl text-card-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-card rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="font-work-sans font-bold text-3xl text-card-foreground mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">Real experiences from our happy homeowners</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-work-sans font-bold text-lg text-foreground">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-muted-foreground">
                    {testimonials[currentTestimonial].flat} • {testimonials[currentTestimonial].location}
                  </p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className="text-secondary text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-muted-foreground text-lg leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
            </div>

            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200"
            >
              →
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
