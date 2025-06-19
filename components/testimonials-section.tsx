"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStartup Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    content:
      "CreateEdge transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations. The team was professional, responsive, and delivered exceptional results that increased our brand recognition by 400%.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, InnovateLab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    content:
      "Working with CreateEdge was a game-changer for our digital presence. They created a stunning website that not only looks amazing but also performs exceptionally well. Our conversion rate increased by 250% after the redesign.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, DesignStudio Pro",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    content:
      "The mobile app they developed for us has been a huge success. The user experience is intuitive, and the design is beautiful. Our customers love it, and it's significantly improved our business metrics with 5-star ratings.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "CMO, StartupHub Ventures",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    content:
      "CreateEdge's digital marketing strategy helped us increase our online presence by 400%. Their data-driven approach and creative campaigns delivered outstanding ROI. We've seen consistent growth month over month.",
    rating: 5,
  },
  {
    name: "Lisa Wang",
    role: "Product Manager, FinTech Solutions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
    content:
      "The UI/UX redesign CreateEdge delivered for our fintech platform was outstanding. User engagement increased by 300%, and our customer satisfaction scores reached an all-time high. Truly exceptional work!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-background/50 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentTestimonial ? "opacity-100" : "opacity-0 absolute inset-0 p-8 md:p-12"
                  }`}
                >
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-center mb-8 italic">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center justify-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4 object-cover shadow-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&size=80&background=6366f1&color=ffffff&bold=true`
                      }}
                    />
                    <div>
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button variant="ghost" size="icon" onClick={prevTestimonial}>
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button variant="ghost" size="icon" onClick={nextTestimonial}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
