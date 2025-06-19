"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Github } from "lucide-react"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "10+ years of experience in brand design and creative strategy for Fortune 500 companies.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    bio: "Full-stack developer specializing in React, Node.js, and cloud architecture solutions.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Marcus Rodriguez",
    role: "UX/UI Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Award-winning designer focused on creating intuitive and accessible user experiences.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Emily Watson",
    role: "Marketing Strategist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "Digital marketing expert with proven track record of driving 300%+ growth for startups.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Talented professionals dedicated to bringing your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=300&background=6366f1&color=ffffff&bold=true`
                    }}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-muted-foreground hover:text-blue-400 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-muted-foreground hover:text-gray-800 dark:hover:text-white transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
