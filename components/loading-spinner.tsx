"use client"
////loading ka time chnage yaha se krna hoga comment add kiya gaya h or laoding spinner ko bhi yaha se chnage kiye h ham//
import { useState, useEffect } from "react"
import Image from "next/image"

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000) // 5 seconds
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        {/* Circular loader */}
        <div className="relative w-28 h-28">
          {/* Spinner Circle */}
          <div className="absolute inset-0 rounded-full border-8 border-gray-200 overflow-hidden">
            <div className="absolute inset-0 rounded-full border-8 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent animate-spin-slow shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
            <div className="absolute inset-0 rounded-full border-8 border-t-green-500 border-r-transparent border-b-transparent border-l-transparent animate-spin-fast shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
          </div>

          {/* Static Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 relative">
              <Image src="/images/ROOFTOPIA.png" alt="Rooftopia Logo" fill className="object-contain" />
            </div>
          </div>
        </div>

        {/* Branding */}
        <div className="mt-6 text-center">
          <h2 className="font-work-sans font-bold text-2xl text-black mb-1">
            ROOFTOPIA
          </h2>
          <p className="text-gray-500">Loading your dream home...🏡🏡</p>
        </div>
      </div>

      {/* Custom animation speeds */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-fast {
          from { transform: rotate(0deg); }
          to { transform: rotate(720deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
        .animate-spin-fast {
          animation: spin-fast 1s linear infinite;
        }
      `}</style>
    </div>
  )
}
