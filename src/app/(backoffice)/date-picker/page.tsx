'use client'

import PageHeading from '@/components/layout/page-heading'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ComponentProps, useState } from 'react'
import * as chrono from 'chrono-node'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { CalendarIcon, ChevronDown } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { DateRange } from 'react-day-picker'
import { FormCalender } from '@/app/(auth)/date-picker/_form-calender'

function formatDate(date: Date | undefined) {
    if (!date) return ''
    return date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    })
}

export default function DatePicker() {
    const [date, setDate] = useState<Date>()
    const [open, setOpen] = useState(false)
    const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined)
    const [dateTimePicker, setDateTimePicker] = useState<Date | undefined>(
        undefined,
    )

    const [month, setMonth] = useState<Date | undefined>(date)
    const [value, setValue] = useState('In 2 days')
    const [naturalLanguage, setNaturalLanguage] = useState<Date | undefined>(
        chrono.parseDate(value) || undefined,
    )

    return (
        <div className="space-y-4">
            <PageHeading heading={'Date Picker'} />

            <div className="grid gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3 2xl:flex 2xl:flex-wrap">
                <Card className="w-full 2xl:max-w-84">
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Date and Birth Picker
                    </CardHeader>
                    <CardContent className="relative flex flex-col gap-2.5 overflow-x-auto p-2.5 sm:p-4">
                        <label className="block leading-tight font-semibold text-black dark:text-white">
                            Date of birth
                        </label>
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <button
                                    id="date"
                                    className="text-gray shadow-3xl placeholder:text-gray flex w-full items-center justify-between gap-1.5 rounded-lg px-3.5 py-2.5 text-left text-sm/[18px] font-medium transition-all focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 data-[state=open]:text-black dark:bg-white/5 dark:text-gray-500 dark:shadow-sm dark:ring-1 dark:ring-white/10 dark:data-[state=open]:text-white [&>span]:line-clamp-1 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-black dark:[&[data-state=open]>svg]:text-white"
                                >
                                    {dateOfBirth
                                        ? dateOfBirth.toLocaleDateString()
                                        : 'Select date'}
                                    <ChevronDown className="text-gray h-4 w-4 transition dark:text-gray-500" />
                                </button>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-auto overflow-hidden p-0"
                                align="start"
                            >
                                <Calendar
                                    mode="single"
                                    selected={dateOfBirth}
                                    captionLayout="dropdown"
                                    onSelect={(dateOfBirth) => {
                                        setDateOfBirth(dateOfBirth)
                                        setOpen(false)
                                    }}
                                />
                            </PopoverContent>
                        </Popover>
                    </CardContent>
                </Card>
                <Card className="w-full 2xl:max-w-84">
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Date and Time Picker
                    </CardHeader>
                    <CardContent className="relative flex gap-4 overflow-x-auto p-2.5 sm:p-4">
                        <div className="flex grow flex-col gap-2.5">
                            <label className="block leading-tight font-semibold text-black dark:text-white">
                                Date
                            </label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <button
                                        id="date-picker"
                                        className="text-gray shadow-3xl placeholder:text-gray flex w-full items-center justify-between gap-1.5 rounded-lg px-3.5 py-2.5 text-left text-sm/[18px] font-medium transition-all focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 data-[state=open]:text-black dark:bg-white/5 dark:text-gray-500 dark:shadow-sm dark:ring-1 dark:ring-white/10 dark:data-[state=open]:text-white [&>span]:line-clamp-1 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-black dark:[&[data-state=open]>svg]:text-white"
                                    >
                                        {dateTimePicker
                                            ? dateTimePicker.toLocaleDateString()
                                            : 'Select date'}
                                        <ChevronDown className="text-gray h-4 w-4 transition dark:text-gray-500" />
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent
                                    className="w-auto overflow-hidden p-0"
                                    align="start"
                                >
                                    <Calendar
                                        mode="single"
                                        selected={dateTimePicker}
                                        captionLayout="dropdown"
                                        onSelect={(dateTimePicker) => {
                                            setDateTimePicker(dateTimePicker)
                                            setOpen(false)
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <label className="block leading-tight font-semibold text-black dark:text-white">
                                Time
                            </label>
                            <Input
                                type="time"
                                id="time-picker"
                                step="1"
                                defaultValue="10:30:00"
                                className="text-gray appearance-none px-3.5 py-2.5 text-sm/4.5 outline-none dark:text-gray-500 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                            />
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-full 2xl:max-w-84">
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Natural Language Picker
                    </CardHeader>
                    <CardContent className="relative flex flex-col gap-2.5 overflow-x-auto p-2.5 sm:p-4">
                        <label className="block leading-tight font-semibold text-black dark:text-white">
                            Schedule Date
                        </label>
                        <div className="relative">
                            <Input
                                id="date"
                                value={value}
                                placeholder="Tomorrow or next week"
                                className="w-full pr-10"
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    const inputVal = e.target.value
                                    setValue(inputVal)

                                    const parsed = chrono.parseDate(inputVal)
                                    if (parsed) {
                                        setNaturalLanguage(parsed)
                                        setMonth(parsed)
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'ArrowDown') {
                                        e.preventDefault()
                                        setOpen(true)
                                    }
                                }}
                            />
                            <Popover>
                                <PopoverTrigger asChild>
                                    <button
                                        id="date-picker"
                                        className="dark:hover:bg-black-dark absolute top-1/2 right-2 grid size-6 -translate-y-1/2 place-content-center rounded-md hover:bg-gray-300/60"
                                    >
                                        <CalendarIcon className="size-3.5" />
                                        <span className="sr-only">
                                            Select date
                                        </span>
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent
                                    className="w-auto overflow-hidden p-0"
                                    align="end"
                                >
                                    <Calendar
                                        mode="single"
                                        selected={naturalLanguage}
                                        captionLayout="dropdown"
                                        month={month}
                                        onMonthChange={setMonth}
                                        onSelect={(date) => {
                                            setNaturalLanguage(date)
                                            setValue(formatDate(date))
                                            setOpen(false)
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        <div className="text-gray px-1 text-xs/4 dark:text-gray-500">
                            Your post will be published on{' '}
                            <span className="font-medium">
                                {formatDate(naturalLanguage)}
                            </span>
                            .
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-full 2xl:max-w-84">
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Form
                    </CardHeader>
                    <CardContent className="relative flex w-full gap-4 overflow-x-auto p-2.5 sm:p-4">
                        <FormCalender />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
