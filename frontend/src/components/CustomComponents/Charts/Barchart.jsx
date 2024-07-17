import React from "react"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart"

export const description = "A bar chart"

const chartData = [
  { month: "January", crop: 186 },
  { month: "February", crop: 305 },
  { month: "March", crop: 237 },
  { month: "April", crop: 73 },
  { month: "May", crop: 209 },
  { month: "June", crop: 214 },
]

const chartConfig = {
  crop: {
    label: "crop",
    color: "rgb(var(--primary-main))",
  },
}

export default function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Crop Dashboard</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="crop" fill="var(--color-crop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Persionlized Portfolio  <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total data of finance for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}