'use client'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'

const chartData = [
    { month: 'June', previous: 10, current: 20 },
    { month: 'July', previous: 25, current: 5 },
    { month: 'August', previous: 20, current: 30 },
    { month: 'September', previous: 35, current: 1 },
    { month: 'October', previous: 10, current: 40 },
    { month: 'November', previous: 35, current: 5 },
    { month: 'December', previous: 40, current: 50 },
]

const chartConfig = {
    previous: {
        label: 'Previous',
        color: 'hsl(var(--chart-1))',
    },
    current: {
        label: 'Current',
        color: 'hsl(var(--chart-2))',
    },
} satisfies ChartConfig

type LineChartData = {
    month?: string
    date?: string
    previous?: number
    current?: number
    desktop?: number
}

export function LineChart({
    isCardHeaderTitle = true,
    className,
    data,
}: {
    className?: string
    isCardHeaderTitle?: boolean
    data?: LineChartData[]
}) {
    return (
        <Card
            className={cn(
                'relative flex flex-col justify-between space-y-9 p-5 shadow-sm',
                className,
            )}
        >
            {isCardHeaderTitle && (
                <span className="text-base/5 font-semibold text-black dark:text-white">
                    Simple Area
                </span>
            )}
            <CardContent className="h-full">
                <ChartContainer config={chartConfig} className="h-full w-full">
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid
                            horizontal={false}
                            vertical={true}
                            strokeDasharray={5}
                            fillOpacity={0.01}
                            className="shrink-0"
                        />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    hideLabel={true}
                                    label={true}
                                    indicator="dot"
                                    className="min-w-[32px] border-none bg-black px-1.5 py-1 text-xs/[10px] text-white"
                                />
                            }
                        />
                        <defs>
                            <linearGradient
                                id="fillprevious"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#335CFF"
                                    stopOpacity={0.4}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#335CFF"
                                    stopOpacity={0.01}
                                />
                            </linearGradient>
                        </defs>
                        <defs>
                            <linearGradient
                                id="fillcurrent"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#22C55E"
                                    stopOpacity={0.4}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#22C55E"
                                    stopOpacity={0.01}
                                />
                            </linearGradient>
                        </defs>
                        <Area
                            dataKey="previous"
                            type="natural"
                            fillOpacity={0.4}
                            stroke="#335CFF"
                            fill="url(#fillprevious)"
                            stackId="a"
                            activeDot={{
                                className:
                                    'fill-[#335CFF] stroke-white! stroke-2',
                                r: 8,
                            }}
                        />
                        <Area
                            dataKey="current"
                            type="natural"
                            fill="url(#fillcurrent)"
                            fillOpacity={0.4}
                            stroke="#22C55E"
                            stackId="a"
                            activeDot={{
                                className:
                                    'fill-[#22C55E] stroke-white! stroke-2',
                                r: 8,
                            }}
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
