'use client'

import PageHeading from '@/components/layout/page-heading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import {
    Activity,
    Aperture,
    ChevronDown,
    Chrome,
    CircleX,
    Clock,
    Compass,
    CornerDownRight,
    Ellipsis,
    FlagTriangleRight,
    Flame,
    Globe,
    Mail,
    Mails,
    MailsIcon,
    Megaphone,
    Mouse,
    OctagonAlert,
    PanelTop,
    Share2,
    ShieldPlus,
    SmartphoneNfc,
    SquareArrowOutUpRight,
    TicketPlus,
    TrendingDown,
    TrendingUp,
    Users,
} from 'lucide-react'
import {
    analyticsColumn,
    ITable,
} from '@/components/custom/table/analytics-columns'
import { DataTable } from '@/components/custom/table/data-table'
import { OnlineSalesAreaChart } from '@/components/custom/charts/online-sales-area-chart'
import { PieLabelChart } from '@/components/custom/charts/pie-label-chart'
import IconGoogle from '@/components/icons/icon-google'

const AnalyticsDashboard = () => {
    const data: ITable[] = [
        {
            id: '1',
            channel: {
                icon: <Share2 />,
                name: 'Share',
            },
            bounce_rate: '52.14%',
            user_interactions: '1264',
            change: '12.3',
            visit_duration: '3m 10s',
        },
        {
            id: '2',
            channel: {
                icon: <CornerDownRight />,
                name: 'Referral',
            },
            bounce_rate: '34.54%',
            user_interactions: '934',
            change: '25.59',
            visit_duration: '5m 39s',
        },
        {
            id: '3',
            channel: {
                icon: <Megaphone />,
                name: 'Advertisement',
            },
            bounce_rate: '24.96%',
            user_interactions: '1479',
            change: '5.47',
            visit_duration: '2m 23s',
        },
        {
            id: '4',
            channel: {
                icon: <PanelTop />,
                name: 'Website',
            },
            bounce_rate: '29.96%',
            user_interactions: '875',
            change: '-4.89',
            visit_duration: '6m 47s',
        },
        {
            id: '5',
            channel: {
                icon: <SmartphoneNfc />,
                name: 'Direct contact',
            },
            bounce_rate: '35.96%',
            user_interactions: '579',
            change: '-7.51',
            visit_duration: '1hour 20m',
        },
        {
            id: '6',
            channel: {
                icon: <Mails />,
                name: 'Mail',
            },
            bounce_rate: '12.96%',
            user_interactions: '754',
            change: '5.51',
            visit_duration: '5hour 54m',
        },
    ]
    return (
        <div className="relative space-y-4">
            <PageHeading heading={'Analytics Dashboard'} />

            <div className="min-h-[calc(100vh-160px)] w-full space-y-4">
                <div className="grid gap-4 lg:grid-cols-3">
                    <Card className="relative overflow-hidden border border-primary/15 shadow-sm">
                        <div className="space-y-2 p-5 font-semibold">
                            <div className="flex items-start justify-between gap-2.5">
                                <div>
                                    <span className="inline-block text-sm/tight font-semibold tracking-wide">
                                        Active Users
                                    </span>
                                    <h4 className="mt-3.5 text-2xl/6 font-bold text-black dark:text-white">
                                        15,246
                                    </h4>
                                    <p className="mt-1 text-xs/tight font-medium tracking-wide text-gray-600">
                                        Currently active users
                                    </p>
                                </div>
                                <Badge
                                    variant={'grey-400'}
                                    className="size-12! place-content-center rounded-lg"
                                >
                                    <Activity className="size-6!" />
                                </Badge>
                            </div>
                            <OnlineSalesAreaChart
                                isCardHeader={false}
                                className="h-40 p-0 pb-8 shadow-none! [&>span]:hidden"
                            />
                        </div>
                    </Card>
                    <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
                        <Card className="relative flex items-center justify-between overflow-hidden border border-light-purple p-5 shadow-sm dark:border-light-purple/15">
                            <div className="flex grow flex-col gap-5">
                                <h3 className="text-sm/tight font-semibold">
                                    Total Users
                                </h3>
                                <div className="flex items-end gap-2.5">
                                    <h4 className="text-2xl/6 font-bold text-black dark:text-white">
                                        24.5k
                                    </h4>
                                    <Badge
                                        variant={'green'}
                                        size={'small'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingUp />
                                        47.10%
                                    </Badge>
                                </div>
                                <p className="-mt-2.5 text-xs/tight font-medium tracking-wide text-gray-600">
                                    20.2% up in last week
                                </p>
                            </div>
                            <Badge
                                variant={'grey-400'}
                                className="size-12! place-content-center"
                            >
                                <Users className="size-6!" />
                            </Badge>
                        </Card>
                        <Card className="relative flex items-center justify-between overflow-hidden border border-success/15 p-5 shadow-sm">
                            <div className="flex grow flex-col gap-5">
                                <h3 className="text-sm/tight font-semibold">
                                    Bonus Rate
                                </h3>
                                <div className="flex items-end gap-2.5">
                                    <h4 className="text-2xl/6 font-bold text-black dark:text-white">
                                        40.50%
                                    </h4>
                                    <Badge
                                        variant={'green'}
                                        size={'small'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingUp />
                                        8.10%
                                    </Badge>
                                </div>
                                <p className="-mt-2.5 text-xs/tight font-medium tracking-wide text-gray-600">
                                    20.2% up in last week
                                </p>
                            </div>
                            <Badge
                                variant={'grey-400'}
                                className="size-12! place-content-center"
                            >
                                <SquareArrowOutUpRight className="size-6!" />
                            </Badge>
                        </Card>
                        <Card className="relative flex items-center justify-between overflow-hidden border border-light-orange/80 p-5 shadow-sm dark:border-light-orange/15">
                            <div className="flex grow flex-col gap-5">
                                <h3 className="text-sm/tight font-semibold">
                                    User Sessions
                                </h3>
                                <div className="flex items-end gap-2.5">
                                    <h4 className="text-2xl/6 font-bold text-black dark:text-white">
                                        85.20%
                                    </h4>
                                    <Badge
                                        variant={'red'}
                                        size={'small'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingDown />
                                        5.10%
                                    </Badge>
                                </div>
                                <p className="-mt-2.5 text-xs/tight font-medium tracking-wide text-gray-600">
                                    20.2% up in last week
                                </p>
                            </div>
                            <Badge
                                variant={'grey-400'}
                                className="size-12! place-content-center"
                            >
                                <FlagTriangleRight className="size-6!" />
                            </Badge>
                        </Card>
                        <Card className="relative flex items-center justify-between overflow-hidden border border-light-blue p-5 shadow-sm dark:border-light-blue/15">
                            <div className="flex grow flex-col gap-5">
                                <h3 className="text-sm/tight font-semibold">
                                    Avarage Visit Duration
                                </h3>
                                <div className="flex items-end gap-2.5">
                                    <h4 className="text-2xl/6 font-bold text-black dark:text-white">
                                        2m 30s
                                    </h4>
                                    <Badge
                                        variant={'red'}
                                        size={'small'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingDown />
                                        10.10%
                                    </Badge>
                                </div>
                                <p className="-mt-2.5 text-xs/tight font-medium tracking-wide text-gray-600">
                                    20.2% up in last week
                                </p>
                            </div>
                            <Badge
                                variant={'grey-400'}
                                className="size-12! place-content-center"
                            >
                                <Clock className="size-6!" />
                            </Badge>
                        </Card>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-4 sm:grid sm:grid-cols-2 xl:grid-cols-3">
                    <Card className="p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <h3 className="text-base/5 font-semibold text-black dark:text-white">
                                Monthly Outreach
                            </h3>
                            <Popover>
                                <PopoverTrigger>
                                    <Ellipsis className="size-4 text-black transition hover:text-gray dark:text-white dark:hover:text-gray-500" />
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
                                        Download
                                    </button>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="mt-8 space-y-4 overflow-y-auto">
                            <div className="flex items-center justify-between gap-4 font-semibold">
                                <div className="flex grow items-center gap-2.5">
                                    <Badge
                                        variant={'green'}
                                        className="size-12 place-content-center"
                                    >
                                        <Mail className="size-5!" />
                                    </Badge>
                                    <h4 className="grow text-black dark:text-white">
                                        Emails
                                    </h4>
                                </div>
                                <div className="ml-auto flex items-center gap-4">
                                    <p>12,346</p>
                                    <Badge
                                        variant={'green'}
                                        size={'small'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingUp />
                                        20.10%
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-4 font-semibold">
                                <div className="flex grow items-center gap-2.5">
                                    <Badge
                                        variant={'orange'}
                                        className="size-12 place-content-center"
                                    >
                                        <TicketPlus className="size-5!" />
                                    </Badge>
                                    <h4 className="grow text-black dark:text-white">
                                        Subcribe
                                    </h4>
                                </div>
                                <div className="ml-auto flex items-center gap-4">
                                    <p>5423</p>
                                    <Badge
                                        variant={'red'}
                                        size={'small'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingDown />
                                        5.10%
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-4 font-semibold">
                                <div className="flex grow items-center gap-2.5">
                                    <Badge
                                        variant={'blue'}
                                        className="size-12 place-content-center"
                                    >
                                        <Mouse className="size-5!" />
                                    </Badge>
                                    <h4 className="grow text-black dark:text-white">
                                        Opened
                                    </h4>
                                </div>
                                <div className="ml-auto flex items-center gap-4">
                                    <p>11,452</p>
                                    <Badge
                                        variant={'red'}
                                        size={'small'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingDown />
                                        5.10%
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-4 font-semibold">
                                <div className="flex grow items-center gap-2.5">
                                    <Badge
                                        variant={'grey-300'}
                                        className="size-12 place-content-center"
                                    >
                                        <CircleX className="size-5!" />
                                    </Badge>
                                    <h4 className="grow text-black dark:text-white">
                                        Unsubscribed
                                    </h4>
                                </div>
                                <div className="ml-auto flex items-center gap-4">
                                    <p>3524</p>
                                    <Badge
                                        variant={'red'}
                                        size={'small'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingDown />
                                        10.54%
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-4 font-semibold">
                                <div className="flex grow items-center gap-2.5">
                                    <Badge
                                        variant={'purple'}
                                        className="size-12 place-content-center"
                                    >
                                        <ShieldPlus className="size-5!" />
                                    </Badge>
                                    <h4 className="grow text-black dark:text-white">
                                        Upgrade
                                    </h4>
                                </div>
                                <div className="ml-auto flex items-center gap-4">
                                    <p>2215</p>
                                    <Badge
                                        variant={'green'}
                                        size={'small'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingUp />
                                        7.47%
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-4 font-semibold">
                                <div className="flex grow items-center gap-2.5">
                                    <Badge
                                        variant={'red'}
                                        className="size-12 place-content-center"
                                    >
                                        <OctagonAlert className="size-5!" />
                                    </Badge>
                                    <h4 className="grow text-black dark:text-white">
                                        Compaints
                                    </h4>
                                </div>
                                <div className="ml-auto flex items-center gap-4">
                                    <p>542</p>
                                    <Badge
                                        variant={'red'}
                                        size={'small'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingDown />
                                        6.41%
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-5 shadow-sm sm:order-last sm:col-span-2 xl:order-2 xl:col-span-1">
                        <PieLabelChart className="p-0 shadow-none!" />
                    </Card>
                    <Card className="p-5 shadow-sm sm:order-2 xl:order-last">
                        <div className="flex items-center justify-between">
                            <h3 className="text-base/5 font-semibold text-black dark:text-white">
                                Browser Traffic
                            </h3>
                            <Popover>
                                <PopoverTrigger>
                                    <Ellipsis className="size-4 text-black transition hover:text-gray dark:text-white dark:hover:text-gray-500" />
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
                                        Download
                                    </button>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="mt-8 space-y-4 overflow-y-auto">
                            <div className="flex items-center gap-2.5">
                                <Badge
                                    variant={'blue'}
                                    className="size-12 place-content-center"
                                >
                                    <Chrome className="size-5!" />
                                </Badge>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <h4 className="text-black dark:text-white">
                                        Chrome
                                    </h4>
                                    <p className="ml-auto">45,214</p>
                                    <Badge
                                        variant={'green'}
                                        size={'small'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingUp />
                                        42.10%
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Badge
                                    variant={'purple'}
                                    className="size-12 place-content-center"
                                >
                                    <Compass className="size-5!" />
                                </Badge>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <h4 className="text-black dark:text-white">
                                        Safari
                                    </h4>
                                    <p className="ml-auto">34,251</p>
                                    <Badge
                                        variant={'green'}
                                        size={'small'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingUp />
                                        30.45%
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Badge
                                    variant={'green'}
                                    className="size-12 place-content-center"
                                >
                                    <Flame className="size-5!" />
                                </Badge>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <h4 className="text-black dark:text-white">
                                        Firefox
                                    </h4>
                                    <p className="ml-auto">11,242</p>
                                    <Badge
                                        variant={'red'}
                                        size={'small'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingDown />
                                        24.23%
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Badge
                                    variant={'grey-400'}
                                    className="size-12 place-content-center"
                                >
                                    <Globe className="size-5!" />
                                </Badge>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <h4 className="text-black dark:text-white">
                                        Edge
                                    </h4>
                                    <p className="ml-auto">8456</p>
                                    <Badge
                                        variant={'red'}
                                        size={'small'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingDown />
                                        15.54%
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Badge
                                    variant={'red'}
                                    className="size-12 place-content-center"
                                >
                                    <Aperture className="size-5!" />
                                </Badge>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <h4 className="text-black dark:text-white">
                                        Opera
                                    </h4>
                                    <p className="ml-auto">1753</p>
                                    <Badge
                                        variant={'green'}
                                        size={'small'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingUp />
                                        5.05%
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Badge
                                    variant={'pending'}
                                    className="size-12 place-content-center bg-warning/10"
                                >
                                    <IconGoogle className="size-5!" />
                                </Badge>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <h4 className="text-black dark:text-white">
                                        Google
                                    </h4>
                                    <p className="ml-auto">6758</p>
                                    <Badge
                                        variant={'green'}
                                        size={'small'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingUp />
                                        12.41%
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <Card className="shadow-sm">
                    <CardHeader className="flex flex-col justify-between gap-2.5 px-5 py-3.5 sm:flex-row sm:items-center">
                        <h2 className="whitespace-nowrap text-base/5 font-semibold text-black dark:text-white">
                            Visitor Acquisition Channels
                        </h2>
                        <div className="flex flex-wrap justify-end ms-auto items-center gap-2.5">
                            <div id="search-table"></div>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        type="button"
                                        variant={'outline-general'}
                                    >
                                        Last 30 Days
                                        <ChevronDown />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full space-y-1.5 p-1.5">
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
                            columns={analyticsColumn}
                            data={data}
                            filterField={'channel'}
                            isRemovePagination={false}
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
export default AnalyticsDashboard
