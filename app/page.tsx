"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/contexts/theme-context"
import { Loader } from "@/components/loader"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { StatsSection } from "@/components/stats-section"
import { ClientsSection } from "@/components/clients-section"
import { TeamSection } from "@/components/team-section"
import { GrowthChart } from "@/components/growth-chart"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll(".parallax")

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed") || "0.5"
        const yPos = -(scrolled * Number.parseFloat(speed))
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <ThemeProvider defaultTheme="light" storageKey="createedge-theme">
      {isLoading ? (
        <Loader onComplete={handleLoadingComplete} />
      ) : (
        <div className="min-h-screen">
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <StatsSection />
            <ClientsSection />
            <TeamSection />
            <GrowthChart />
            <TestimonialsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  )
}
