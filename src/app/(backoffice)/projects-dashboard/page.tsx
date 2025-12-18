'use client'

import PageHeading from '@/components/layout/page-heading'
import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import {
    Briefcase,
    ChevronDown,
    Chrome,
    CircleDotDashed,
    ClipboardCheck,
    Component,
    EllipsisVertical,
    Grid3x3,
    Heart,
    Hourglass,
} from 'lucide-react'
import { DataTable } from '@/components/custom/table/data-table'
import Image from 'next/image'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import React from 'react'
import { Bar, BarChart, XAxis } from 'recharts'
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart'
import {
    ITable,
    ProjectsOverviewColumns,
} from '@/components/custom/table/projects-overview-columns'
import IconFigma from '@/components/icons/icon-figma'

const ProjectsDashboard = () => {
    const data: ITable[] = [
        {
            id: 1,
            project: 'E-commerce website',
            project_lead: 'John Smith',
            progress: '50%',
            tasks: '25/50',
            due_date: 'Mar 31, 2024',
            status: 'Completed',
        },
        {
            id: 2,
            project: 'Wellzone template',
            project_lead: 'John Smith',
            progress: '75%',
            tasks: '75/120',
            due_date: 'Apr 21, 2024',
            status: 'Inprogress',
        },
        {
            id: 3,
            project: 'Quickbooks website',
            project_lead: 'Mark Wood',
            progress: '64%',
            tasks: '46/109',
            due_date: 'Apr 13, 2024',
            status: 'Pending',
        },
        {
            id: 4,
            project: 'Lemonsqueezy website',
            project_lead: 'David Smith',
            progress: '40%',
            tasks: '53/150',
            due_date: 'Jun 23, 2024',
            status: 'Pending',
        },
        {
            id: 5,
            project: 'Zendesk application',
            project_lead: 'Zena Rick',
            progress: '37%',
            tasks: '34/124',
            due_date: 'Jun 12, 2024',
            status: 'Inprogress',
        },
        {
            id: 6,
            project: 'Minecraft application',
            project_lead: 'kim Jones',
            progress: '90%',
            tasks: '140/150',
            due_date: 'Jul 15, 2024',
            status: 'Completed',
        },
    ]

    const [date, setDate] = React.useState<Date>()

    const chartData = [
        { month: 'Jun', completed: 325, pending: 186, active: 80 },
        { month: 'Jul', completed: 245, pending: 305, active: 210 },
        { month: 'Aug', completed: 125, pending: 237, active: 120 },
        { month: 'Sep', completed: 235, pending: 73, active: 300 },
        { month: 'Oct', completed: 219, pending: 209, active: 250 },
        { month: 'Nov', completed: 375, pending: 214, active: 140 },
        { month: 'Dec', completed: 268, pending: 175, active: 250 },
    ]

    const chartConfig = {
        active: {
            label: 'Active',
            color: '#22C55E',
        },
        pending: {
            label: 'Pending',
            color: '#EAB308',
        },
        completed: {
            label: 'Completed',
            color: '#b083e1',
        },
    } satisfies ChartConfig

    return (
        <div className="relative space-y-4">
            <PageHeading heading={'Projects Dashboard'} />

            <div className="min-h-[calc(100vh-160px)] w-full space-y-5">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <Card className="relative flex flex-wrap overflow-hidden shadow-sm sm:flex-nowrap">
                        <Badge
                            variant={'blue'}
                            className="place-content-center rounded-e-none px-7 dark:shadow-sm"
                        >
                            <Briefcase className="size-7!" />
                        </Badge>
                        <div className="flex shrink-0 grow flex-col gap-2.5  px-5 py-5 ltr:pr-3 rtl:pl-3">
                            <h4 className="whitespace-nowrap text-2xl/6 font-semibold text-black dark:text-white">
                                234
                            </h4>
                            <h3 className="text-sm/tight font-semibold">
                                Total Projects
                            </h3>
                        </div>
                    </Card>
                    <Card className="relative flex flex-wrap overflow-hidden shadow-sm sm:flex-nowrap">
                        <Badge
                            variant={'success'}
                            className="place-content-center rounded-e-none px-7 text-black bg-success-light dark:shadow-sm"
                        >
                            <Hourglass className="size-7!" />
                        </Badge>
                        <div className="flex shrink-0 grow flex-col gap-2.5 px-5 py-5 ltr:pr-3 rtl:pl-3">
                            <h4 className="whitespace-nowrap text-2xl/6 font-semibold text-black dark:text-white">
                                119
                            </h4>
                            <h3 className="text-sm/tight font-semibold">
                                Ongoing Projects
                            </h3>
                        </div>
                    </Card>
                    <Card className="relative flex flex-wrap overflow-hidden shadow-sm sm:flex-nowrap">
                        <Badge
                            variant={'orange'}
                            className="place-content-center rounded-e-none px-7 dark:shadow-sm"
                        >
                            <CircleDotDashed className="size-7!" />
                        </Badge>
                        <div className="flex shrink-0 grow flex-col gap-2.5 px-5 py-5 ltr:pr-3 rtl:pl-3">
                            <h4 className="whitespace-nowrap text-2xl/6 font-semibold text-black dark:text-white">
                                53
                            </h4>
                            <h3 className="text-sm/tight font-semibold">
                                Pending Projects
                            </h3>
                        </div>
                    </Card>
                    <Card className="relative flex flex-wrap overflow-hidden shadow-sm sm:flex-nowrap">
                        <Badge
                            variant={'purple'}
                            className="place-content-center rounded-e-none px-7 dark:shadow-sm"
                        >
                            <ClipboardCheck className="size-7!" />
                        </Badge>
                        <div className="flex shrink-0 grow flex-col gap-2.5 px-5 py-5 ltr:pr-3 rtl:pl-3">
                            <h4 className="whitespace-nowrap text-2xl/6 font-semibold text-black dark:text-white">
                                210
                            </h4>
                            <h3 className="text-sm/tight font-semibold">
                                Completed Projects
                            </h3>
                        </div>
                    </Card>
                </div>
                <div className="flex flex-col gap-4 xl:grid xl:grid-cols-3">
                    <Card className="flex flex-col justify-between gap-5 p-5 shadow-sm xl:col-span-2">
                        <h3 className="text-base/5 font-semibold text-black dark:text-white">
                            Project Overview
                        </h3>
                        <div className="sm:mx-auto">
                            <div className="inline-flex flex-row flex-wrap justify-between gap-2.5 rounded-full border-gray-300 py-2.5 sm:items-center sm:justify-center sm:gap-4 sm:border sm:px-4 dark:border-gray-300/20">
                                <div className="flex items-center gap-2">
                                    <span className="size-3.5 shrink-0 rounded-sm border bg-success"></span>
                                    <p className="font-medium leading-tight text-black dark:text-white">
                                        Active Projects
                                    </p>
                                </div>
                                <span className="hidden h-6 w-px shrink-0 bg-gray-300 sm:block dark:bg-gray-300/15" />
                                <div className="flex items-center gap-2">
                                    <span className="size-3.5 shrink-0 rounded-sm border bg-warning"></span>
                                    <p className="font-medium leading-tight text-black dark:text-white">
                                        Pending Projects
                                    </p>
                                </div>
                                <span className="hidden h-6 w-px shrink-0 bg-gray-300 sm:block dark:bg-gray-300/15" />
                                <div className="flex items-center gap-2">
                                    <span className="size-3.5 shrink-0 rounded-sm border bg-primary"></span>
                                    <p className="font-medium leading-tight text-black dark:text-white">
                                        Complete Projects
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-y-auto">
                            <ChartContainer
                                config={chartConfig}
                                className={cn(
                                    'h-60 w-full min-w-[600px] overflow-y-auto sm:h-full sm:max-h-96',
                                )}
                            >
                                <BarChart
                                    accessibilityLayer
                                    data={chartData}
                                    barGap={8}
                                >
                                    <XAxis
                                        dataKey="month"
                                        tickLine={false}
                                        tickMargin={10}
                                        axisLine={false}
                                        className="font-semibold text-gray-700"
                                        tickFormatter={(value) =>
                                            value.slice(0, 3)
                                        }
                                    />
                                    <ChartTooltip
                                        cursor={false}
                                        content={
                                            <ChartTooltipContent
                                                indicator="line"
                                                className="min-w-[32px] border-none bg-black p-1.5 text-xs/[10px] font-medium text-white"
                                            />
                                        }
                                    />
                                    <Bar
                                        dataKey="active"
                                        fill="currentColor"
                                        radius={6}
                                        barSize={20}
                                        className="fill-success"
                                    />
                                    <Bar
                                        dataKey="pending"
                                        fill="currentColor"
                                        radius={6}
                                        barSize={20}
                                        className="fill-warning"
                                    />
                                    <Bar
                                        dataKey="completed"
                                        fill="currentColor"
                                        radius={6}
                                        barSize={20}
                                        className="fill-primary"
                                    />
                                </BarChart>
                            </ChartContainer>
                        </div>
                    </Card>
                    <Card className="p-5 shadow-sm">
                        <Calendar
                            className="w-full overflow-x-auto p-0 shadow-none dark:bg-transparent"
                            selected={date}
                            onSelect={setDate}
                            mode="single"
                            classNames={{
                                month: 'w-full',
                                month_grid:'w-full',
                                weekdays: 'flex pt-2.5 justify-between items-center sm:px-3 gap-1 sm:gap-3',
                                weekday:
                                    'rounded-md sm:w-10 w-7 py-1.5 px-px text-center font-semibold text-xs/tight sm:text-sm/tight uppercase tracking-wider',
                                week: 'flex w-full mt-1.5 gap-1 sm:gap-3 sm:px-3 justify-between',
                                cell: 'text-center rounded-lg text-sm p-px relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
                                day_button: cn(
                                    // buttonVariants({
                                    //     variant: 'outline-general',
                                    // }),
                                    'h-7 sm:h-9 w-7 sm:w-10 p-0 text-xs/tight sm:text-sm font-medium ring-0 shadow-none aria-selected:opacity-100',
                                ),
                            }}
                        />

                        <div className="mt-5 space-y-4">
                            <h3 className="text-base font-semibold text-black dark:text-white">
                                Schedule :
                            </h3>
                            <div className="max-h-40 divide-y divide-gray-300/50 overflow-y-auto pr-1.5 ps-px dark:divide-gray-300/15">
                                <div className="flex flex-wrap items-center gap-2 py-2.5 font-semibold sm:gap-3.5">
                                    <Badge
                                        variant={'outline'}
                                        className="font-bold dark:bg-black-dark dark:text-gray-500"
                                    >
                                        09 jun
                                    </Badge>
                                    <p className="line-clamp-2 grow break-words text-black dark:text-white">
                                        Sales Meeting
                                    </p>
                                    <p className="ml-auto shrink-0 text-right text-xs/tight">
                                        12:00 PM
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 py-2.5 font-semibold sm:gap-3.5">
                                    <Badge
                                        variant={'outline'}
                                        className="font-bold dark:bg-black-dark dark:text-gray-500"
                                    >
                                        15 Mar
                                    </Badge>
                                    <p className="line-clamp-2 grow break-words text-black dark:text-white">
                                        Project Meeting and Planning
                                    </p>
                                    <p className="ml-auto shrink-0 text-right text-xs/tight">
                                        3:45 PM
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 py-2.5 font-semibold sm:gap-3.5">
                                    <Badge
                                        variant={'outline'}
                                        className="font-bold dark:bg-black-dark dark:text-gray-500"
                                    >
                                        23 Jun
                                    </Badge>
                                    <p className="line-clamp-2 grow break-words text-black dark:text-white">
                                        Team data analysis
                                    </p>
                                    <p className="ml-auto shrink-0 text-right text-xs/tight">
                                        10:00 AM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                    <Card className="p-5 shadow-sm">
                        <div className="flex items-start justify-between gap-5">
                            <div className="flex grow items-center gap-2.5">
                                <Badge
                                    size={'icon'}
                                    variant={'outline'}
                                    className="size-9 place-content-center"
                                >
                                    <Component className="size-5!" />
                                </Badge>
                                <div className="grow space-y-1">
                                    <h3 className="line-clamp-1 break-words font-semibold leading-tight text-black dark:text-white">
                                        Web Development
                                    </h3>
                                    <p className="line-clamp-1 break-words text-xs/tight font-semibold">
                                        55 Tasks
                                    </p>
                                </div>
                            </div>
                            <div className="ml-auto flex shrink-0 gap-2.5">
                                <button type="button">
                                    <Heart className="size-4 shrink-0 transition hover:fill-warning hover:text-warning" />
                                </button>
                                <Popover>
                                    <PopoverTrigger>
                                        <EllipsisVertical className="size-4 text-black transition hover:text-gray dark:text-white dark:hover:text-gray-500" />
                                    </PopoverTrigger>
                                    <PopoverContent
                                        align="end"
                                        className="w-auto space-y-1.5 p-1.5"
                                    >
                                        <button
                                            type="button"
                                            className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black hover:bg-light-theme ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                        >
                                            Refresh
                                        </button>
                                        <button
                                            type="button"
                                            className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black hover:bg-light-theme ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                        >
                                            View all
                                        </button>
                                        <button
                                            type="button"
                                            className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black hover:bg-light-theme ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                        >
                                            Remove
                                        </button>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-2.5">
                            <div className="inline-flex items-center -space-x-2">
                                <Image
                                    src="/images/kanban-avatar1.svg"
                                    width={30}
                                    height={30}
                                    alt="avatar"
                                    className="hidden size-[30px] rounded-full xl:block"
                                />
                                <Image
                                    src="/images/kanban-avatar2.svg"
                                    width={30}
                                    height={30}
                                    alt="avatar"
                                    className="hidden size-[30px] rounded-full xl:block"
                                />
                                <Image
                                    src="/images/kanban-avatar3.svg"
                                    width={30}
                                    height={30}
                                    alt="avatar"
                                    className="size-[30px] rounded-full"
                                />
                                <Image
                                    src="/images/kanban-avatar4.svg"
                                    width={30}
                                    height={30}
                                    alt="avatar"
                                    className="size-[30px] rounded-full"
                                />
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <button
                                            type="button"
                                            className="grid h-[30px] min-w-[30px] shrink-0 place-content-center rounded-full border-2 border-white bg-gray-300 px-1 text-[11px]/none font-bold text-black shadow-sm"
                                        >
                                            +5
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        align="center"
                                        className="max-h-60 w-[200px] space-y-1 overflow-y-auto p-1.5"
                                    >
                                        <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden dark:text-white">
                                            <span className="size-6 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/avatar-two.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="avatar"
                                                    className="size-full object-cover"
                                                />
                                            </span>
                                            Sofia Walker
                                        </div>
                                        <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden dark:text-white">
                                            <span className="size-6 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/avatar-six.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="avatar"
                                                    className="size-full object-cover"
                                                />
                                            </span>
                                            Scarlett Hernandez
                                        </div>
                                        <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden dark:text-white">
                                            <span className="size-6 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/avatar-thirty.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="avatar"
                                                    className="size-full object-cover"
                                                />
                                            </span>
                                            Ralph Edwards
                                        </div>
                                        <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden dark:text-white">
                                            <span className="size-6 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/avatar-eleven.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="avatar"
                                                    className="size-full object-cover"
                                                />
                                            </span>
                                            Darlene Robertson
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="space-y-1 text-xs/tight font-semibold ltr:text-right rtl:text-left">
                                <p>Due date :</p>
                                <p className="text-danger">Mar 24, 2023</p>
                            </div>
                        </div>
                        <div className="mt-4 space-y-2.5 font-semibold">
                            <div className="flex items-center justify-between gap-2">
                                <p>In progress</p>
                                <Badge
                                    variant={'outline'}
                                    size={'small'}
                                    className="font-semibold"
                                >
                                    65%
                                </Badge>
                            </div>
                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-300 dark:bg-primary/20">
                                <span className="block h-full w-[calc(100%-35%)] rounded-full bg-primary"></span>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-5 shadow-sm">
                        <div className="flex items-start justify-between gap-5">
                            <div className="flex grow items-center gap-2.5">
                                <Badge
                                    size={'icon'}
                                    variant={'outline'}
                                    className="size-9 place-content-center"
                                >
                                    <Grid3x3 className="size-5!" />
                                </Badge>
                                <div className="grow space-y-1">
                                    <h3 className="line-clamp-1 break-words font-semibold leading-tight text-black dark:text-white">
                                        Web Designing
                                    </h3>
                                    <p className="line-clamp-1 break-words text-xs/tight font-semibold">
                                        77 Tasks
                                    </p>
                                </div>
                            </div>
                            <div className="ml-auto flex shrink-0 gap-2.5">
                                <button type="button">
                                    <Heart className="size-4 shrink-0 transition hover:fill-warning hover:text-warning" />
                                </button>
                                <Popover>
                                    <PopoverTrigger>
                                        <EllipsisVertical className="size-4 text-black transition hover:text-gray dark:text-white dark:hover:text-gray-500" />
                                    </PopoverTrigger>
                                    <PopoverContent
                                        align="end"
                                        className="w-auto space-y-1.5 p-1.5"
                                    >
                                        <button
                                            type="button"
                                            className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black hover:bg-light-theme ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                        >
                                            Refresh
                                        </button>
                                        <button
                                            type="button"
                                            className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black hover:bg-light-theme ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                        >
                                            View all
                                        </button>
                                        <button
                                            type="button"
                                            className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black hover:bg-light-theme ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                        >
                                            Remove
                                        </button>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-2.5">
                            <div className="inline-flex items-center -space-x-2">
                                <Image
                                    src="/images/kanban-avatar1.svg"
                                    width={30}
                                    height={30}
                                    alt="avatar"
                                    className="hidden size-[30px] rounded-full xl:block"
                                />
                                <Image
                                    src="/images/kanban-avatar2.svg"
                                    width={30}
                                    height={30}
                                    alt="avatar"
                                    className="hidden size-[30px] rounded-full xl:block"
                                />
                                <Image
                                    src="/images/kanban-avatar3.svg"
                                    width={30}
                                    height={30}
                                    alt="avatar"
                                    className="size-[30px] rounded-full"
                                />
                                <Image
                                    src="/images/kanban-avatar4.svg"
                                    width={30}
                                    height={30}
                                    alt="avatar"
                                    className="size-[30px] rounded-full"
                                />
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <button
                                            type="button"
                                            className="grid h-[30px] min-w-[30px] shrink-0 place-content-center rounded-full border-2 border-white bg-gray-300 px-1 text-[11px]/none font-bold text-black shadow-sm"
                                        >
                                            +5
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        align="center"
                                        className="max-h-60 w-[200px] space-y-1 overflow-y-auto p-1.5"
                                    >
                                        <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden dark:text-white">
                                            <span className="size-6 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/avatar-two.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="avatar"
                                                    className="size-full object-cover"
                                                />
                                            </span>
                                            Sofia Walker
                                        </div>
                                        <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden dark:text-white">
                                            <span className="size-6 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/avatar-six.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="avatar"
                                                    className="size-full object-cover"
                                                />
                                            </span>
                                            Scarlett Hernandez
                                        </div>
                                        <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden dark:text-white">
                                            <span className="size-6 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/avatar-thirty.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="avatar"
                                                    className="size-full object-cover"
                                                />
                                            </span>
                                            Ralph Edwards
                                        </div>
                                        <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden dark:text-white">
                                            <span className="size-6 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/avatar-eleven.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="avatar"
                                                    className="size-full object-cover"
                                                />
                                            </span>
                                            Darlene Robertson
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="space-y-1 text-xs/tight font-semibold ltr:text-right rtl:text-left">
                                <p>Due date :</p>
                                <p className="text-danger">Apr 15, 2023</p>
                            </div>
                        </div>
                        <div className="mt-4 space-y-2.5 font-semibold">
                            <div className="flex items-center justify-between gap-2">
                                <p>In progress</p>
                                <Badge
                                    variant={'outline'}
                                    size={'small'}
                                    className="font-semibold"
                                >
                                    81%
                                </Badge>
                            </div>
                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-300 dark:bg-primary/20">
                                <span className="block h-full w-[calc(100%-19%)] rounded-full bg-primary"></span>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-5 shadow-sm">
                        <div className="flex items-start justify-between gap-5">
                            <div className="flex grow items-center gap-2.5">
                                <Badge
                                    size={'icon'}
                                    variant={'outline'}
                                    className="size-9 place-content-center"
                                >
                                    <IconFigma className="size-5!" />
                                </Badge>
                                <div className="grow space-y-1">
                                    <h3 className="line-clamp-1 break-words font-semibold leading-tight text-black dark:text-white">
                                        UI/UX Designing
                                    </h3>
                                    <p className="line-clamp-1 break-words text-xs/tight font-semibold">
                                        102 Tasks
                                    </p>
                                </div>
                            </div>
                            <div className="ml-auto flex shrink-0 gap-2.5">
                                <button type="button">
                                    <Heart className="size-4 shrink-0 transition hover:fill-warning hover:text-warning" />
                                </button>
                                <Popover>
                                    <PopoverTrigger>
                                        <EllipsisVertical className="size-4 text-black transition hover:text-gray dark:text-white dark:hover:text-gray-500" />
                                    </PopoverTrigger>
                                    <PopoverContent
                                        align="end"
                                        className="w-auto space-y-1.5 p-1.5"
                                    >
                                        <button
                                            type="button"
                                            className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black hover:bg-light-theme ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                        >
                                            Refresh
                                        </button>
                                        <button
                                            type="button"
                                            className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black hover:bg-light-theme ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                        >
                                            View all
                                        </button>
                                        <button
                                            type="button"
                                            className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black hover:bg-light-theme ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                        >
                                            Remove
                                        </button>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-2.5">
                            <div className="inline-flex items-center -space-x-2">
                                <Image
                                    src="/images/kanban-avatar1.svg"
                                    width={30}
                                    height={30}
                                    alt="avatar"
                                    className="hidden size-[30px] rounded-full xl:block"
                                />
                                <Image
                                    src="/images/kanban-avatar2.svg"
                                    width={30}
                                    height={30}
                                    alt="avatar"
                                    className="hidden size-[30px] rounded-full xl:block"
                                />
                                <Image
                                    src="/images/kanban-avatar3.svg"
                                    width={30}
                                    height={30}
                                    alt="avatar"
                                    className="size-[30px] rounded-full"
                                />
                                <Image
                                    src="/images/kanban-avatar4.svg"
                                    width={30}
                                    height={30}
                                    alt="avatar"
                                    className="size-[30px] rounded-full"
                                />
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <button
                                            type="button"
                                            className="grid h-[30px] min-w-[30px] shrink-0 place-content-center rounded-full border-2 border-white bg-gray-300 px-1 text-[11px]/none font-bold text-black shadow-sm"
                                        >
                                            +5
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        align="center"
                                        className="max-h-60 w-[200px] space-y-1 overflow-y-auto p-1.5"
                                    >
                                        <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden dark:text-white">
                                            <span className="size-6 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/avatar-two.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="avatar"
                                                    className="size-full object-cover"
                                                />
                                            </span>
                                            Sofia Walker
                                        </div>
                                        <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden dark:text-white">
                                            <span className="size-6 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/avatar-six.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="avatar"
                                                    className="size-full object-cover"
                                                />
                                            </span>
                                            Scarlett Hernandez
                                        </div>
                                        <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden dark:text-white">
                                            <span className="size-6 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/avatar-thirty.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="avatar"
                                                    className="size-full object-cover"
                                                />
                                            </span>
                                            Ralph Edwards
                                        </div>
                                        <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden dark:text-white">
                                            <span className="size-6 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/avatar-eleven.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="avatar"
                                                    className="size-full object-cover"
                                                />
                                            </span>
                                            Darlene Robertson
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="space-y-1 text-xs/tight font-semibold ltr:text-right rtl:text-left">
                                <p>Due date :</p>
                                <p className="text-danger">June 23, 2023</p>
                            </div>
                        </div>
                        <div className="mt-4 space-y-2.5 font-semibold">
                            <div className="flex items-center justify-between gap-2">
                                <p>In progress</p>
                                <Badge
                                    variant={'outline'}
                                    size={'small'}
                                    className="font-semibold"
                                >
                                    44%
                                </Badge>
                            </div>
                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-300 dark:bg-primary/20">
                                <span className="block h-full w-[calc(100%-66%)] rounded-full bg-primary"></span>
                            </div>
                        </div>
                    </Card>
                </div>

                <Card className="shadow-sm">
                    <CardHeader className="flex flex-col justify-between gap-2.5 px-5 py-3.5 sm:flex-row sm:items-center">
                        <h2 className="whitespace-nowrap text-base/5 font-semibold text-black dark:text-white">
                            Projects Overview
                        </h2>
                        <div className="ms-auto flex flex-wrap items-center justify-end gap-2.5">
                            <div id="search-table"></div>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        type="button"
                                        variant={'outline-general'}
                                    >
                                        Sort by
                                        <ChevronDown />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full space-y-1.5 p-1.5">
                                    <button
                                        type="button"
                                        className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black hover:bg-light-theme ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                    >
                                        Last 1 month
                                    </button>
                                    <button
                                        type="button"
                                        className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black hover:bg-light-theme ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                    >
                                        Last 6 month
                                    </button>
                                    <button
                                        type="button"
                                        className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black hover:bg-light-theme ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                    >
                                        1 year ago
                                    </button>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <DataTable
                            columns={ProjectsOverviewColumns}
                            data={data}
                            filterField={'project'}
                            isRemovePagination={false}
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
export default ProjectsDashboard
