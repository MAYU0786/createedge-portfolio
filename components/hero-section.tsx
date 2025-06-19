"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Sparkles, Zap, Palette, Star, Circle, Triangle } from "lucide-react"

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  const dynamicWords = ["Creative", "Innovative", "Bold", "Stunning", "Modern"]

  const floatingShapes = [
    { icon: Circle, size: "w-4 h-4", color: "text-blue-400", delay: 0 },
    { icon: Triangle, size: "w-6 h-6", color: "text-purple-400", delay: 1000 },
    { icon: Star, size: "w-5 h-5", color: "text-pink-400", delay: 2000 },
    { icon: Zap, size: "w-7 h-7", color: "text-yellow-400", delay: 1500 },
    { icon: Sparkles, size: "w-4 h-4", color: "text-green-400", delay: 500 },
    { icon: Palette, size: "w-6 h-6", color: "text-red-400", delay: 2500 },
  ]

  useEffect(() => {
    setIsVisible(true)
    const wordTimer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % dynamicWords.length)
    }, 2000)
    return () => clearInterval(wordTimer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
      return () => heroElement.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900"
    >
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(147,51,234,0.4) 50%, transparent 100%)",
            left: `${20 + mousePosition.x * 10}%`,
            top: `${10 + mousePosition.y * 5}%`,
            transform: `translate(-50%, -50%) scale(${1 + mousePosition.x * 0.2})`,
            transition: "all 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-15 animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(236,72,153,0.8) 0%, rgba(59,130,246,0.4) 50%, transparent 100%)",
            right: `${15 + mousePosition.y * 8}%`,
            bottom: `${20 + mousePosition.x * 6}%`,
            transform: `translate(50%, 50%) scale(${1 + mousePosition.y * 0.3})`,
            transition: "all 0.4s ease-out",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-25 animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(34,197,94,0.6) 0%, rgba(236,72,153,0.3) 50%, transparent 100%)",
            left: `${60 + mousePosition.y * 5}%`,
            top: `${60 + mousePosition.x * 4}%`,
            transform: `translate(-50%, -50%) scale(${1 + mousePosition.y * 0.15})`,
            transition: "all 0.5s ease-out",
            animationDelay: "2s",
          }}
        />

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Interactive Shapes */}
        {floatingShapes.map((shape, index) => (
          <div
            key={index}
            className={`absolute ${shape.size} ${shape.color} animate-bounce opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer`}
            style={{
              left: `${10 + (index * 15) + mousePosition.x * 5}%`,
              top: `${15 + (index * 12) + mousePosition.y * 3}%`,
              animationDelay: `${shape.delay}ms`,
              animationDuration: `${3 + index * 0.5}s`,
              transform: `rotate(${mousePosition.x * 360}deg) scale(${1 + mousePosition.y * 0.5})`,
              transition: "all 0.3s ease-out",
            }}
          >
            <shape.icon className="w-full h-full drop-shadow-lg" />
          </div>
        ))}

        {/* Dynamic Particle System */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.3 + Math.random() * 0.4,
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 15}px)`,
              transition: "transform 0.3s ease-out",
            }}
          />
        ))}
      </div>

      {/* Interactive Mesh Gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at ${20 + mousePosition.x * 60}% ${30 + mousePosition.y * 40}%, rgba(59,130,246,0.4) 0%, transparent 50%),
            radial-gradient(circle at ${80 - mousePosition.x * 60}% ${70 - mousePosition.y * 40}%, rgba(147,51,234,0.4) 0%, transparent 50%),
            radial-gradient(circle at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 30}%, rgba(236,72,153,0.3) 0%, transparent 50%)
          `,
          transition: "background 0.3s ease-out",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Animated Badge */}

          {/* Main Heading with Dynamic Word and Creative Typography */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none">
              <span className="block text-white drop-shadow-2xl hover:scale-105 transition-transform duration-300 cursor-default">
                We Create
              </span>
              <span className="block relative">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                  {dynamicWords.map((word, index) => (
                    <span
                      key={word}
                      className={`absolute inset-0 transition-all duration-700 ${
                        index === currentWord
                          ? "opacity-100 transform translate-y-0 scale-100"
                          : "opacity-0 transform translate-y-8 scale-95"
                      }`}
                      style={{
                        textShadow: "0 0 30px rgba(59,130,246,0.5)",
                      }}
                    >
                      {word}
                    </span>
                  ))}
                  <span className="opacity-0">{dynamicWords[0]}</span>
                </span>
              </span>
              <span className="block text-white drop-shadow-2xl hover:scale-105 transition-transform duration-300 cursor-default">
                Experiences
              </span>
            </h1>
          </div>

          {/* Creative Subtitle with Typewriter Effect */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative mb-12">
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                Transform your vision into reality with cutting-edge design and development. We craft digital
                experiences that <span className="text-yellow-400 font-semibold animate-pulse">captivate</span>,
                <span className="text-blue-400 font-semibold animate-pulse"> engage</span>, and
                <span className="text-pink-400 font-semibold animate-pulse"> convert</span>.
              </p>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Button
              size="lg"
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:border-white/50"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </Button>
          </div>

          {/* Interactive Stats Row */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {[
              { number: "150+", label: "Projects Delivered", color: "from-blue-400 to-cyan-400" },
              { number: "50+", label: "Happy Clients", color: "from-purple-400 to-pink-400" },
              { number: "5+", label: "Years Experience", color: "from-green-400 to-emerald-400" },
              { number: "98%", label: "Success Rate", color: "from-yellow-400 to-orange-400" },
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl border border-white/10 hover:border-white/20">
                  <div
                    className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Creative Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm bg-white/10 mb-2">
              <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
            </div>
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-white/60 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <p className="text-white/70 text-xs mt-2 uppercase tracking-wider font-medium">Scroll</p>
          </div>
        </div>
      </div>

      {/* Creative Corner Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-white/20 opacity-50"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-white/20 opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-white/20 opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-white/20 opacity-50"></div>
    </section>
  )
}
