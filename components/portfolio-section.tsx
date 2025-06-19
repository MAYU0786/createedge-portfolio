"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ExternalLink, Github } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "HDFC Mobile Banking App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    description:
      "Complete mobile banking solution with secure transactions, account management, and investment tracking for HDFC Bank customers.",
    technologies: ["React Native", "Node.js", "MongoDB", "Biometric Auth"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Starbucks Brand Redesign",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&h=400&fit=crop",
    description:
      "Complete brand identity redesign for Starbucks including logo modernization, packaging design, and digital brand guidelines.",
    technologies: ["Illustrator", "Photoshop", "Figma", "Brand Strategy"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Tesla E-commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    description:
      "Modern e-commerce platform for Tesla with advanced car configurator, payment integration, and inventory management.",
    technologies: ["React", "Next.js", "Stripe", "3D Configurator"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Nike Digital Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop",
    description:
      "Comprehensive digital marketing campaign for Nike's new product launch that increased engagement by 300%.",
    technologies: ["Google Ads", "Facebook Ads", "Instagram", "Analytics"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Slack Dashboard Redesign",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    description:
      "Clean and intuitive dashboard redesign for Slack with improved navigation and advanced collaboration features.",
    technologies: ["Figma", "React", "TypeScript", "Design System"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Apple Product Launch Video",
    category: "Video Production",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=400&fit=crop",
    description:
      "Cinematic product launch video for Apple's latest iPhone with stunning visuals and professional cinematography.",
    technologies: ["After Effects", "Premiere Pro", "Cinema 4D", "Motion Graphics"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Uber Driver App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
    description:
      "Enhanced driver application for Uber with real-time navigation, earnings tracking, and driver support features.",
    technologies: ["Flutter", "Firebase", "Google Maps", "Real-time DB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Coca-Cola Brand Campaign",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&h=400&fit=crop",
    description:
      "Global brand campaign for Coca-Cola focusing on sustainability and community engagement across multiple markets.",
    technologies: ["Brand Strategy", "Creative Direction", "Global Campaign", "Sustainability"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "Amazon Web Services Dashboard",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    description:
      "Advanced cloud management dashboard for AWS with real-time monitoring, cost optimization, and resource management.",
    technologies: ["React", "AWS SDK", "D3.js", "Real-time Analytics"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

const categories = [
  "All",
  "Web Development",
  "Branding",
  "Mobile App",
  "Digital Marketing",
  "UI/UX Design",
  "Video Production",
]

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(null)

  const filteredItems =
    selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our latest projects and see how we've helped businesses achieve their goals
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary">View Details</Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-2">{item.category}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Popup */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
            <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10"
                  onClick={() => setSelectedItem(null)}
                >
                  <X className="h-6 w-6" />
                </Button>
                <img
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
              <div className="p-8">
                <div className="text-sm text-primary font-medium mb-2">{selectedItem.category}</div>
                <h3 className="text-3xl font-bold mb-4">{selectedItem.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedItem.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button asChild>
                    <a href={selectedItem.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={selectedItem.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
