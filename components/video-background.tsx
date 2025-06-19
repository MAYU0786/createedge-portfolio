"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

interface VideoBackgroundProps {
  src: string
  fallbackImage?: string
  className?: string
  children?: React.ReactNode
}

export function VideoBackground({ src, fallbackImage, className = "", children }: VideoBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoaded(true)
    }

    const handleError = () => {
      setHasError(true)
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("error", handleError)

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("error", handleError)
    }
  }, [])

  return (
    <div className={`relative ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded && !hasError ? "opacity-100" : "opacity-0"
        }`}
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Fallback Image */}
      {(fallbackImage || hasError) && (
        <div
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            !isLoaded || hasError ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${fallbackImage || "/placeholder.svg?height=1080&width=1920"})`,
          }}
        />
      )}

      {/* Loading State */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-white/20 border-t-white/80 rounded-full animate-spin mb-4"></div>
            <p className="text-white/60 text-sm">Loading video...</p>
          </div>
        </div>
      )}

      {/* Content Overlay */}
      {children}
    </div>
  )
}
