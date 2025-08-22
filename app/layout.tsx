import type React from "react"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import { Open_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "RoofTopia Apartments - Premium Residential Properties",
  description:
    "Discover luxury apartments and flats with modern amenities. 1BHK, 2BHK, 3BHK, 4BHK available. Book now with exclusive offers.",
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${openSans.variable}`}>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" async></script>
        <style>{`
html {
  font-family: ${openSans.style.fontFamily};
  --font-heading: ${workSans.variable};
  --font-body: ${openSans.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
