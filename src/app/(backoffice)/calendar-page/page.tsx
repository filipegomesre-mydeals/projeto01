'use client'

import PageHeading from '@/components/layout/page-heading'
import dynamic from 'next/dynamic'
const Calendar = dynamic(() =>
  import('@/components/ui/calendar').then((mod) => ({ default: mod.Calendar })),
  { ssr: false }
)
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { ComponentProps, useState } from 'react'
import * as chrono from 'chrono-node'
import { DateRange } from 'react-day-picker'
import { CalendarHijri } from '@/app/(auth)/calendar-page/_calendarHijri'

function formatDate(month: Date | undefined) {
    if (!month) {
        return ''
    }
    return month.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    })
}

export default function CalendarPage() {
    const [date, setDate] = useState<Date>()
    const [dateTwo, setDateTwo] = useState<Date>()

    const [rangeDate, setRangeDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: new Date(),
    })

    const [dropdown, setDropdown] =
        useState<ComponentProps<typeof Calendar>['captionLayout']>('dropdown')
    const [monthYearSelector, setMonthYearSelector] = useState<
        Date | undefined
    >(new Date(2025, 5, 12))

    return (
        <div className="space-y-4">
            <PageHeading heading={'Calendar'} />

            <div className="flex flex-col gap-4 lg:gap-6">
                <div className="flex flex-wrap justify-center gap-4 sm:justify-start lg:gap-6">
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Simple Header Calendar
                        </CardHeader>
                        <CardContent className="relative flex gap-2.5 overflow-x-auto p-2.5 md:p-4">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Dropdown Header Calendar
                        </CardHeader>
                        <CardContent className="relative flex gap-2.5 overflow-x-auto p-2.5 md:p-4">
                            <Calendar
                                mode="single"
                                selected={dateTwo}
                                onSelect={setDateTwo}
                                captionLayout="dropdown"
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Month and Year Selector
                        </CardHeader>
                        <CardContent className="relative flex gap-2.5 overflow-x-auto p-2.5 md:p-4">
                            <div className="flex flex-col gap-4">
                                <Calendar
                                    mode="single"
                                    defaultMonth={date}
                                    selected={monthYearSelector}
                                    onSelect={setMonthYearSelector}
                                    captionLayout={dropdown}
                                />
                                <div className="flex flex-col gap-2.5">
                                    <label className="block leading-tight font-semibold text-black dark:text-white">
                                        Dropdown
                                    </label>
                                    <Select
                                        value={dropdown}
                                        onValueChange={(value) =>
                                            setDropdown(
                                                value as React.ComponentProps<
                                                    typeof Calendar
                                                >['captionLayout'],
                                            )
                                        }
                                    >
                                        <SelectTrigger
                                            id="dropdown"
                                            className="bg-background w-full"
                                        >
                                            <SelectValue placeholder="Dropdown" />
                                        </SelectTrigger>
                                        <SelectContent align="center">
                                            <SelectItem value="dropdown">
                                                Month and Year
                                            </SelectItem>
                                            <SelectItem value="dropdown-months">
                                                Month Only
                                            </SelectItem>
                                            <SelectItem value="dropdown-years">
                                                Year Only
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <CalendarHijri />

                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Range Calendar
                        </CardHeader>
                        <CardContent className="relative flex gap-2.5 overflow-x-auto p-2.5 md:p-4">
                            <Calendar
                                mode="range"
                                numberOfMonths={2}
                                defaultMonth={rangeDate?.from}
                                selected={rangeDate}
                                onSelect={setRangeDate}
                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
