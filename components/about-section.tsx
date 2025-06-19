"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Lightbulb, Target } from "lucide-react"

const achievements = [
  {
    icon: Award,
    title: "Award-Winning",
    description: "Recognized by industry leaders for exceptional design and innovation",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Building lasting partnerships through transparent communication and results",
    color: "from-blue-400 to-purple-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description: "Pushing boundaries with cutting-edge technology and creative solutions",
    color: "from-green-400 to-teal-500",
  },
  {
    icon: Target,
    title: "Results-Oriented",
    description: "Delivering measurable outcomes that drive business growth and success",
    color: "from-pink-400 to-red-500",
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-900"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                About
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  CreateEdge
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                We are a passionate team of designers, developers, and strategists who believe in the power of creative
                excellence. Since our founding, we've helped businesses transform their digital presence and achieve
                remarkable growth.
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                Our mission is simple: to create digital experiences that not only look stunning but also drive real
                business results. We combine artistic vision with technical expertise to deliver solutions that exceed
                expectations.
              </p>
            </div>
          </div>

          {/* Right Content - Achievement Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${achievement.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <achievement.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{achievement.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
