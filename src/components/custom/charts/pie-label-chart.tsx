'use client'

import { ChevronDown } from 'lucide-react'
import { LabelList, Pie, PieChart, RadialBar, RadialBarChart } from 'recharts'

import { Card, CardContent } from '@/components/ui/card'
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart'
import Image from 'next/image'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
// const chartData = [
//     { month: 'january', desktop: 15_800, mobile: 8074, other: 3150 },
// ]

const chartConfig = {
    visitors: {
        label: 'Visitors',
    },
    desktop: {
        label: 'Desktop',
        color: '#335CFF',
    },
    laptop: {
        label: 'Laptop',
        color: '#22C55E',
    },
    tablet: {
        label: 'Tablet',
        color: '#EAB308',
    },
    mobile: {
        label: 'Mobile',
        color: '#525866',
    },

    other: {
        label: 'Other',
        color: '#EF4444',
    },
} satisfies ChartConfig

const chartData = [
    { device: 'Desktop', visitors: 2575, fill: 'var(--color-desktop)' },
    { device: 'Laptop', visitors: 2050, fill: 'var(--color-laptop)' },
    { device: 'Tablet', visitors: 579, fill: 'var(--color-tablet)' },
    { device: 'Mobile', visitors: 1800, fill: 'var(--color-mobile)' },
    { device: 'other', visitors: 500, fill: 'var(--color-other)' },
]

export function PieLabelChart({
    isShowHeader = true,
    className,
}: {
    className?: string
    isShowHeader?: boolean
    title?: string
    label?: string
    isShowTitle?: boolean
}) {
    return (
        <Card className={cn('relative p-5 shadow-sm', className)}>
            {isShowHeader && (
                <div className="flex flex-wrap items-start justify-between">
                    <h3 className="text-base/5 font-semibold text-black dark:text-white">
                        Device Overview
                    </h3>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant={'outline-general'}>
                                Monthly
                                <ChevronDown />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full space-y-1.5 p-1.5">
                            <button
                                type="button"
                                className="hover:bg-light-theme block w-full rounded-lg px-2.5 py-1.5 text-left text-xs/tight font-medium whitespace-nowrap text-black dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                            >
                                Yearly
                            </button>
                            <button
                                type="button"
                                className="hover:bg-light-theme block w-full rounded-lg px-2.5 py-1.5 text-left text-xs/tight font-medium text-black dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                            >
                                Quarterly
                            </button>
                        </PopoverContent>
                    </Popover>
                </div>
            )}

            <CardContent className="relative z-10 flex flex-col pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto size-60 sm:size-72"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    indicator="line"
                                    className="min-w-[32px] border-none bg-black px-1.5 py-1 text-xs/[10px] text-white"
                                />
                            }
                        />
                        <Pie data={chartData} dataKey="visitors">
                            <LabelList
                                dataKey="device"
                                className="text-black!"
                                stroke="1"
                                fontSize={12}
                                formatter={(value: keyof typeof chartConfig) =>
                                    chartConfig[value]?.label
                                }
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
                <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 rounded-lg font-semibold">
                    <div className="to-light-purple/5 relative rounded-lg border border-gray-300/20 bg-linear-to-b from-[#7C3AED]/5 p-4 dark:border-gray-300/5">
                        <h4 className="flex items-center gap-1.5 text-xs/tight whitespace-nowrap">
                            <span className="inline-block size-2 rounded-xs bg-[#7C3AED]"></span>
                            Desktop
                        </h4>
                        <p className="mt-1.5 text-lg/tight text-black dark:text-white">
                            2575
                            <span className="ml-1.5 text-[10px]/none">
                                devices
                            </span>
                        </p>
                    </div>
                    <div className="from-success/5 to-success-light/5 relative rounded-lg border border-gray-300/20 bg-linear-to-b p-4 dark:border-gray-300/5">
                        <h4 className="flex items-center gap-1.5 text-xs/tight whitespace-nowrap">
                            <span className="bg-success inline-block size-2 rounded-xs"></span>
                            Laptop
                        </h4>
                        <p className="mt-1.5 text-lg/tight text-black dark:text-white">
                            2050
                            <span className="ml-1.5 text-[10px]/none">
                                devices
                            </span>
                        </p>
                    </div>
                    <div className="from-warning/5 to-light-orange/5 relative rounded-lg border border-gray-300/20 bg-linear-to-b p-4 dark:border-gray-300/5">
                        <h4 className="flex items-center gap-1.5 text-xs/tight whitespace-nowrap">
                            <span className="bg-warning inline-block size-2 rounded-xs"></span>
                            Tablet
                        </h4>
                        <p className="mt-1.5 text-lg/tight text-black dark:text-white">
                            579
                            <span className="ml-1.5 text-[10px]/none">
                                devices
                            </span>
                        </p>
                    </div>
                    <div className="from-gray/5 relative rounded-lg border border-gray-300/20 bg-linear-to-b to-gray-200/5 p-4 dark:border-gray-300/5">
                        <h4 className="flex items-center gap-1.5 text-xs/tight whitespace-nowrap">
                            <span className="bg-gray inline-block size-2 rounded-xs"></span>
                            Mobile
                        </h4>
                        <p className="mt-1.5 text-lg/tight text-black dark:text-white">
                            1800
                            <span className="ml-1.5 text-[10px]/none">
                                devices
                            </span>
                        </p>
                    </div>
                    <div className="from-danger/5 to-danger-light/5 relative rounded-lg border border-gray-300/20 bg-linear-to-b p-4 dark:border-gray-300/5">
                        <h4 className="flex items-center gap-1.5 text-xs/tight whitespace-nowrap">
                            <span className="bg-danger inline-block size-2 rounded-xs"></span>
                            Other
                        </h4>
                        <p className="mt-1.5 text-lg/tight text-black dark:text-white">
                            500
                            <span className="ml-1.5 text-[10px]/none">
                                devices
                            </span>
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
