"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Palette, Code, Smartphone, Video, Globe, Zap, ArrowRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Complete brand identity design including logos, color schemes, and brand guidelines that make your business memorable.",
    color: "from-pink-500 to-rose-500",
    delay: "0ms",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    color: "from-blue-500 to-cyan-500",
    delay: "200ms",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that engage users and drive business growth.",
    color: "from-green-500 to-emerald-500",
    delay: "400ms",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
  },
  {
    icon: Video,
    title: "Video Production",
    description:
      "Professional video content creation from concept to final edit, including motion graphics and animations.",
    color: "from-purple-500 to-violet-500",
    delay: "600ms",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to increase your online presence and reach your target audience.",
    color: "from-orange-500 to-red-500",
    delay: "800ms",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  },
  {
    icon: Zap,
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create intuitive and engaging digital experiences for your customers.",
    color: "from-yellow-500 to-amber-500",
    delay: "1000ms",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop",
  },
]

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(services.length).fill(false))
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 200)
          }
        },
        { threshold: 0.1 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Our Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Services That
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Drive Results
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We offer comprehensive creative services to help your business stand out in the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group transition-all duration-700 ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: service.delay }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden relative">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=300&width=400"
                    }}
                  />
                  {/* Gradient overlay that stays visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Icon that stays on top */}
                  <div
                    className={`absolute top-4 right-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} shadow-lg z-10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardContent className="p-6 relative bg-white dark:bg-slate-800">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-900 group-hover:to-slate-600 dark:group-hover:from-white dark:group-hover:to-slate-300 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>

                {/* Animated border effect */}
                <div
                  className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  style={{
                    background: `linear-gradient(45deg, transparent, transparent, transparent, rgba(59, 130, 246, 0.1))`,
                    backgroundSize: "400% 400%",
                    animation: "gradient-shift 3s ease infinite",
                  }}
                ></div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
