"use client"

import { useEffect, useState } from "react"
import { Sparkles, Zap, Palette, Code, Smartphone, Globe } from "lucide-react"

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [currentIcon, setCurrentIcon] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing...")

  const icons = [Sparkles, Zap, Palette, Code, Smartphone, Globe]
  const loadingTexts = [
    "Initializing...",
    "Loading Assets...",
    "Crafting Experience...",
    "Preparing Magic...",
    "Almost Ready...",
    "Welcome!",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1.5

        // Update icon and text based on progress
        const iconIndex = Math.floor((newProgress / 100) * icons.length)
        const textIndex = Math.floor((newProgress / 100) * loadingTexts.length)

        if (iconIndex !== currentIcon && iconIndex < icons.length) {
          setCurrentIcon(iconIndex)
        }

        if (textIndex < loadingTexts.length) {
          setLoadingText(loadingTexts[textIndex])
        }

        if (newProgress >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 800)
          return 100
        }
        return newProgress
      })
    }, 40)

    return () => clearInterval(timer)
  }, [onComplete, currentIcon])

  const CurrentIcon = icons[currentIcon]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-32 right-24 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Geometric Shapes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Loader Content */}
      <div className="relative z-10 text-center space-y-8 max-w-md mx-auto px-6">
        {/* Logo Animation */}
        <div className="relative">
          <div className="w-32 h-32 mx-auto relative">
            {/* Rotating Ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin"></div>
            <div
              className="absolute inset-2 border-4 border-transparent border-b-pink-500 border-l-green-500 rounded-full animate-spin"
              style={{ animationDirection: "reverse", animationDuration: "3s" }}
            ></div>

            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <CurrentIcon className="w-8 h-8 text-white animate-pulse" />
              </div>
            </div>

            {/* Pulsing Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Brand Name with Gradient Animation */}
        <div className="space-y-2">
          <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
            CreateEdge
          </h1>
          <p className="text-white/80 text-lg font-medium">Elevate Your Creative Presence</p>
        </div>

        {/* Progress Section */}
        <div className="space-y-6">
          {/* Loading Text */}
          <div className="h-6">
            <p className="text-white/90 text-sm font-medium animate-pulse">{loadingText}</p>
          </div>

          {/* Progress Bar */}
          <div className="relative">
            <div className="w-80 h-3 bg-white/10 rounded-full mx-auto overflow-hidden backdrop-blur-sm border border-white/20">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>

            {/* Progress Percentage */}
            <div className="mt-3">
              <span className="text-2xl font-bold text-white">{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Feature Icons */}
          <div className="flex justify-center space-x-4 mt-8">
            {icons.map((Icon, index) => (
              <div
                key={index}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${
                  index <= currentIcon
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white scale-110 shadow-lg"
                    : "bg-white/10 text-white/40 scale-100"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
            ))}
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/20 opacity-50"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/20 opacity-50"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/20 opacity-50"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/20 opacity-50"></div>
    </div>
  )
}
