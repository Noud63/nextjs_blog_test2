"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

import { Card, CardFooter, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"

const chartData = [
  { jaar: "2014", inwoners: 12754 },
  { jaar: "2015", inwoners: 13056 },
  { jaar: "2016", inwoners: 13187 },
  { jaar: "2017", inwoners: 13268 },
  { jaar: "2018", inwoners: 13315 },
  { jaar: "2019", inwoners: 13162 },
  { jaar: "2020", inwoners: 13098 },
  { jaar: "2021", inwoners: 12903 },
  { jaar: "2022", inwoners: 12909 },
  { jaar: "2023", inwoners: 12970 },
  { jaar: "2024", inwoners: 13004 },
]

const chartConfig = {
  inwoners: {
    label: "Inwoners",
    color: "#854d0e",
  },
}

export function InwonersAantallen() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Card className="mt-6 max-w-[620px] px-4">
      <CardHeader className="mb-4 w-full border-b border-gray-400 px-0 py-4 text-lg text-yellow-900">
        <CardTitle>Inwoners aantallen</CardTitle>
        <CardDescription>2014 - 2024</CardDescription>
      </CardHeader>
      <CardContent className="pl-0 pr-6 pb-0">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={600}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="jaar" tickLine={false} axisLine={false} />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip
                contentStyle={{
                  background: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
              />
              <Bar dataKey="inwoners" fill="#854d0e" radius={[0, 0, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex items-start text-sm pl-0 border-t border-black pt-4">
        <div className="text-gray-500">
          Data, onderzoek & statistiek Gemeente Amsterdam
        </div>
      </CardFooter>
    </Card>
  );
}

