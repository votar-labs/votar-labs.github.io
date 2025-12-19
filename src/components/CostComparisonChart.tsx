
"use client"

import { TrendingDown } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { country: "Mexico 2024", traditional: 556, votar: 86 },
  { country: "Argentina 2023", traditional: 310, votar: 31 },
  { country: "Colombia 2022", traditional: 305, votar: 34 },
  { country: "Peru 2021", traditional: 135, votar: 22 },
  { country: "Chile 2021", traditional: 123, votar: 14 },
  { country: "Costa Rica 2022", traditional: 19, votar: 3 },
]

const chartConfig = {
  traditional: {
    label: "Costo Tradicional (USD M)",
    color: "var(--primary)", 
  },
  votar: {
    label: "Costo VotAR (USD M)",
    color: "var(--accent)",
  },
} satisfies ChartConfig

export function CostComparisonChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Comparación de Costos - Tradicional vs. VotAR</CardTitle>
        <CardDescription>Elecciones recientes en Latam (estimado en Millones de USD)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[400px] w-full">
          <BarChart accessibilityLayer data={chartData} layout="vertical" margin={{ left: 20 }}>
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="country"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              width={100}
            />
            <XAxis type="number" hide />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="traditional"
              fill="var(--color-traditional)"
              radius={[0, 4, 4, 0]}
              barSize={20}
            />
            <Bar
              dataKey="votar"
              fill="var(--color-votar)"
              radius={[0, 4, 4, 0]}
              barSize={20}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Ahorro promedio del 85-90% con VotAR <TrendingDown className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Basado en costos reportados vs. estimaciones de VotAR
        </div>
      </CardFooter>
    </Card>
  )
}
