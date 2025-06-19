"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { number: 150, label: "Projects Completed", suffix: "+" },
  { number: 50, label: "Happy Clients", suffix: "+" },
  { number: 5, label: "Years Experience", suffix: "+" },
  { number: 98, label: "Client Satisfaction", suffix: "%" },
]

function CountUp({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence and client satisfaction
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <CountUp end={stat.number} suffix={stat.suffix} />
              <div className="text-muted-foreground mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
