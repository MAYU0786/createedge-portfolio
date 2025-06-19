"use client"

import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", clients: 10, revenue: 25000, satisfaction: 85 },
  { month: "Feb", clients: 15, revenue: 35000, satisfaction: 88 },
  { month: "Mar", clients: 22, revenue: 48000, satisfaction: 90 },
  { month: "Apr", clients: 28, revenue: 62000, satisfaction: 92 },
  { month: "May", clients: 35, revenue: 78000, satisfaction: 94 },
  { month: "Jun", clients: 42, revenue: 95000, satisfaction: 96 },
  { month: "Jul", clients: 50, revenue: 115000, satisfaction: 97 },
  { month: "Aug", clients: 58, revenue: 135000, satisfaction: 98 },
]

export function GrowthChart() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Growth Story</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've grown alongside our clients, delivering consistent results and satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Client Growth & Revenue</CardTitle>
              <CardDescription>Monthly progression over the past year</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  clients: {
                    label: "Clients",
                    color: "hsl(var(--chart-1))",
                  },
                  revenue: {
                    label: "Revenue",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="clients"
                      stroke="var(--color-clients)"
                      strokeWidth={3}
                      dot={{ fill: "var(--color-clients)", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Client Satisfaction</CardTitle>
              <CardDescription>Consistent improvement in client happiness</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  satisfaction: {
                    label: "Satisfaction %",
                    color: "hsl(var(--chart-3))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[80, 100]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="satisfaction"
                      stroke="var(--color-satisfaction)"
                      strokeWidth={3}
                      dot={{ fill: "var(--color-satisfaction)", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
