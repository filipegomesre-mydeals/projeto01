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
    Atom,
    Baseline,
    Biohazard,
    BriefcaseBusiness,
    ChevronDown,
    Chrome,
    Compass,
    Component,
    Disc,
    Earth,
    EggFried,
    Ellipsis,
    Feather,
    Flame,
    Globe,
    HandCoins,
    Rocket,
    TrendingDown,
    TrendingUp,
    Wallet,
} from 'lucide-react'
import { DataTable } from '@/components/custom/table/data-table'
import { LineChart } from '@/components/custom/charts/line-chart'
import { CryptoChart } from '@/components/custom/table/crypto-chart'
import { CrmColumns, ITable } from '@/components/custom/table/crm-columns'
import Image from 'next/image'
import {
    CrmDealsColumns,
    ITable1,
} from '@/components/custom/table/crm-deals-columns'

const CrmDashboard = () => {
    const data: ITable[] = [
        {
            id: 1,
            company: {
                icon: <Globe />,
                name: 'Stark Industries',
            },
            value: '$9281.41',
            sales: '21,325',
        },
        {
            id: 2,
            company: {
                icon: <Compass />,
                name: 'Acme Corp',
            },
            value: '$5381.41',
            sales: '8,325',
        },
        {
            id: 3,
            company: {
                icon: <Rocket />,
                name: 'Forbes Corp',
            },
            value: '$8451.41',
            sales: '13,325',
        },
        {
            id: 4,
            company: {
                icon: <Feather />,
                name: 'Feather Industries',
            },
            value: '$5231.41',
            sales: '6,785',
        },
        {
            id: 5,
            company: {
                icon: <Atom />,
                name: 'Wind Industries',
            },
            value: '$5663.01',
            sales: '7,585',
        },
        {
            id: 6,
            company: {
                icon: <Baseline />,
                name: 'Arkline infotech',
            },
            value: '$10,263.78',
            sales: '14,246',
        },
        {
            id: 7,
            company: {
                icon: <Biohazard />,
                name: 'Biohazard infotech',
            },
            value: '$11,513.12',
            sales: '13,442',
        },
        {
            id: 8,
            company: {
                icon: <Flame />,
                name: 'Flame Finance',
            },
            value: '$4331.41',
            sales: '5,535',
        },
    ]
    const statisticsData: ITable1[] = [
        {
            id: 1,
            company: {
                icon: <Earth />,
                name: 'Sigma Industries',
            },
            assigned_to: 'Sofia Walker',
            value: '$65,624.00',
            sales: '52,325',
            due_date: 'Mar 31, 2024',
            status: 'done',
        },
        {
            id: 2,
            company: {
                icon: <Component />,
                name: 'Gamma Inc.',
            },
            assigned_to: 'johny Lee',
            value: '$22,341.41',
            sales: '23,521',
            due_date: 'June 02, 2024',
            status: 'pending',
        },
        {
            id: 3,
            company: {
                icon: <EggFried />,
                name: 'Theta Systems',
            },
            assigned_to: 'Michael Wilson',
            value: '$53,252.41',
            sales: '45,214',
            due_date: 'July 21, 2024',
            status: 'done',
        },
        {
            id: 4,
            company: {
                icon: <Disc />,
                name: 'Omega Tech',
            },
            assigned_to: 'Sophia Moore',
            value: '$32,411.41',
            sales: '20,785',
            due_date: 'Feb 16, 2024',
            status: 'pending',
        },
        {
            id: 5,
            company: {
                icon: <Atom />,
                name: 'Zeta Group',
            },
            assigned_to: 'Emily Clark',
            value: '$23,413.01',
            sales: '24,034',
            due_date: 'Aug 23, 2023',
            status: 'done',
        },
        {
            id: 6,
            company: {
                icon: <Baseline />,
                name: 'Echo Enterprises',
            },
            assigned_to: 'Alice Johnson',
            value: '$16,263.78',
            sales: '32,124',
            due_date: 'Nov 02, 2023',
            status: 'done',
        },
        {
            id: 7,
            company: {
                icon: <Biohazard />,
                name: 'Lambda Corp',
            },
            assigned_to: 'Jane Smith',
            value: '$23,513.12',
            sales: '21,442',
            due_date: 'Nov 09, 2023',
            status: 'done',
        },
    ]

    return (
        <div className="relative space-y-4">
            <PageHeading heading={'CRM Dashboard'} />
            <span className="absolute -inset-4 -top-8 -z-1 h-4/6 bg-linear-to-b from-light-purple/30 to-transparent dark:h-auto dark:from-white/10 dark:to-white/5" />

            <div className="min-h-[calc(100vh-160px)] w-full space-y-4">
                <div className="grid gap-4 xl:grid-cols-3">
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                        <Card className="relative flex flex-wrap items-center justify-between gap-2.5 overflow-hidden px-5 py-4 shadow-sm sm:flex-nowrap">
                            <div className="flex grow flex-col gap-2.5">
                                <Badge
                                    variant={'blue'}
                                    className="size-10! place-content-center"
                                >
                                    <Wallet className="size-5!" />
                                </Badge>
                                <div className="flex shrink-0 items-center gap-2.5">
                                    <h4 className="whitespace-nowrap text-xl/6 font-semibold text-black dark:text-white">
                                        $ 85.5k
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
                                <div className="flex items-center gap-1.5">
                                    <h3 className="text-sm/tight font-semibold">
                                        Total Revenue
                                    </h3>
                                </div>
                            </div>
                            <CryptoChart
                                className="h-24 w-full sm:w-60"
                                color={'#335CFF'}
                                data={[
                                    { market_cap: 985 },
                                    { market_cap: 1235 },
                                    { market_cap: 1603 },
                                    { market_cap: 1000 },
                                    { market_cap: 3000 },
                                    { market_cap: 4000 },
                                ]}
                            />
                        </Card>
                        <Card className="relative flex flex-wrap items-center justify-between gap-2.5 overflow-hidden px-5 py-4 shadow-sm sm:flex-nowrap">
                            <div className="flex grow flex-col gap-2.5">
                                <Badge
                                    variant={'orange'}
                                    className="size-10! place-content-center"
                                >
                                    <HandCoins className="size-5!" />
                                </Badge>
                                <div className="flex shrink-0 items-center gap-2.5">
                                    <h4 className="whitespace-nowrap text-xl/6 font-semibold text-black dark:text-white">
                                        $ 45.7k
                                    </h4>
                                    <Badge
                                        variant={'green'}
                                        size={'small'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingUp />
                                        10.02%
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <h3 className="text-sm/tight font-semibold">
                                        Total Profit
                                    </h3>
                                </div>
                            </div>
                            <CryptoChart
                                className="h-24 w-full sm:w-60"
                                color={'#EAB308'}
                                data={[
                                    { market_cap: 1234 },
                                    { market_cap: 2513 },
                                    { market_cap: 1863 },
                                    { market_cap: 2300 },
                                    { market_cap: 5423 },
                                    { market_cap: 5210 },
                                ]}
                            />
                        </Card>
                        <Card className="relative flex flex-wrap items-center justify-between gap-2.5 overflow-hidden px-5 py-4 shadow-sm sm:flex-nowrap">
                            <div className="flex grow flex-col gap-2.5">
                                <Badge
                                    variant={'purple'}
                                    className="size-10! place-content-center"
                                >
                                    <Activity className="size-5!" />
                                </Badge>
                                <div className="flex shrink-0 items-center gap-2.5">
                                    <h4 className="whitespace-nowrap text-xl/6 font-semibold text-black dark:text-white">
                                        32.5%
                                    </h4>
                                    <Badge
                                        variant={'red'}
                                        size={'small'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingDown />
                                        15.52%
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <h3 className="text-sm/tight font-semibold">
                                        Conversion Ratio
                                    </h3>
                                </div>
                            </div>
                            <CryptoChart
                                className="h-24 w-full sm:w-60"
                                color={'#7C3AED'}
                                data={[
                                    { market_cap: 42 },
                                    { market_cap: 25 },
                                    { market_cap: 71 },
                                    { market_cap: 45 },
                                    { market_cap: 60 },
                                    { market_cap: 52 },
                                ]}
                            />
                        </Card>
                        <Card className="relative flex flex-wrap items-center justify-between gap-2.5 overflow-hidden px-5 py-4 shadow-sm sm:flex-nowrap">
                            <div className="flex grow flex-col gap-2.5">
                                <Badge
                                    variant={'red'}
                                    className="size-10! place-content-center"
                                >
                                    <BriefcaseBusiness className="size-5!" />
                                </Badge>
                                <div className="flex shrink-0 items-center gap-2.5">
                                    <h4 className="whitespace-nowrap text-xl/6 font-semibold text-black dark:text-white">
                                        $ 80.7k
                                    </h4>
                                    <Badge
                                        variant={'green'}
                                        size={'small'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingUp />
                                        23.02%
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <h3 className="text-sm/tight font-semibold">
                                        Total Deals
                                    </h3>
                                </div>
                            </div>
                            <CryptoChart
                                className="h-24 w-full sm:w-60"
                                color={'#EF4444'}
                                data={[
                                    { market_cap: 3223 },
                                    { market_cap: 4515 },
                                    { market_cap: 4289 },
                                    { market_cap: 8456 },
                                    { market_cap: 7562 },
                                    { market_cap: 9045 },
                                ]}
                            />
                        </Card>
                    </div>
                    <Card className="flex flex-col justify-between p-5 shadow-sm xl:col-span-2">
                        <h3 className="text-base/5 font-semibold text-black dark:text-white">
                            Balance Overview
                        </h3>
                        <LineChart
                            className="mt-auto h-auto w-full p-0 shadow-none! sm:h-80 xl:h-[500px]"
                            isCardHeaderTitle={false}
                        />
                    </Card>
                </div>
                <div className="flex w-full flex-col gap-4 md:grid md:grid-cols-2 xl:grid-cols-3">
                    <Card className="p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <h3 className="text-base/5 font-semibold text-black dark:text-white">
                                Recent Leads
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
                        <div className="mt-8 space-y-6 overflow-y-auto">
                            <div className="flex items-center gap-2.5">
                                <div className="size-9 shrink-0 overflow-hidden">
                                    <Image
                                        src="/images/avatar-seven.svg"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <div className="min-w-52 grow space-y-0.5 leading-5">
                                        <h4 className="line-clamp-1 break-all text-black dark:text-white">
                                            Michele Clark
                                        </h4>
                                        <p className="text-xs font-medium text-gray-700 dark:text-gray-500">
                                            michele@gmail.com
                                        </p>
                                    </div>
                                    <Badge
                                        variant={'purple'}
                                        className="rounded-lg font-semibold"
                                    >
                                        Last
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="size-9 shrink-0 overflow-hidden">
                                    <Image
                                        src="/images/avatar-three.svg"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <div className="min-w-52 grow space-y-0.5 leading-5">
                                        <h4 className="line-clamp-1 break-all text-black dark:text-white">
                                            Adam Smith
                                        </h4>
                                        <p className="text-xs font-medium text-gray-700 dark:text-gray-500">
                                            adam@gmail.com
                                        </p>
                                    </div>
                                    <Badge
                                        variant={'green'}
                                        className="rounded-lg font-semibold"
                                    >
                                        New
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="size-9 shrink-0 overflow-hidden">
                                    <Image
                                        src="/images/avatar-four.svg"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <div className="min-w-52 grow space-y-0.5 leading-5">
                                        <h4 className="line-clamp-1 break-all text-black dark:text-white">
                                            Charlie Davis
                                        </h4>
                                        <p className="text-xs font-medium text-gray-700 dark:text-gray-500">
                                            charlie@gmail.com
                                        </p>
                                    </div>
                                    <Badge
                                        variant={'blue'}
                                        className="rounded-lg font-semibold"
                                    >
                                        Contacted
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="size-9 shrink-0 overflow-hidden">
                                    <Image
                                        src="/images/avatar-two.svg"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <div className="min-w-52 grow space-y-0.5 leading-5">
                                        <h4 className="line-clamp-1 break-all text-black dark:text-white">
                                            Sophia Moore
                                        </h4>
                                        <p className="text-xs font-medium text-gray-700 dark:text-gray-500">
                                            sophia.moore@example.com
                                        </p>
                                    </div>
                                    <Badge
                                        variant={'orange'}
                                        className="rounded-lg font-semibold"
                                    >
                                        Qualified
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="size-9 shrink-0 overflow-hidden">
                                    <Image
                                        src="/images/avatar-ten.svg"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <div className="min-w-52 grow space-y-0.5 leading-5">
                                        <h4 className="line-clamp-1 break-all text-black dark:text-white">
                                            Daniel Taylor
                                        </h4>
                                        <p className="text-xs font-medium text-gray-700 dark:text-gray-500">
                                            daniel.taylor@example.com
                                        </p>
                                    </div>
                                    <Badge
                                        variant={'blue'}
                                        className="rounded-lg font-semibold"
                                    >
                                        Contacted
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="size-9 shrink-0 overflow-hidden">
                                    <Image
                                        src="/images/avatar-six.svg"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <div className="min-w-52 grow space-y-0.5 leading-5">
                                        <h4 className="line-clamp-1 break-all text-black dark:text-white">
                                            Olivia White
                                        </h4>
                                        <p className="text-xs font-medium text-gray-700 dark:text-gray-500">
                                            olivia@example.com
                                        </p>
                                    </div>
                                    <Badge
                                        variant={'green'}
                                        className="rounded-lg font-semibold"
                                    >
                                        New
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="size-9 shrink-0 overflow-hidden">
                                    <Image
                                        src="/images/avatar.svg"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <div className="min-w-52 grow space-y-0.5 leading-5">
                                        <h4 className="line-clamp-1 break-all text-black dark:text-white">
                                            Bob Brown
                                        </h4>
                                        <p className="text-xs font-medium text-gray-700 dark:text-gray-500">
                                            bob.brown@example.com
                                        </p>
                                    </div>
                                    <Badge
                                        variant={'green'}
                                        className="rounded-lg font-semibold"
                                    >
                                        New
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="shadow-sm">
                        <div className="flex items-center justify-between p-5 pb-0">
                            <h3 className="text-base/5 font-semibold text-black dark:text-white">
                                Top Deals
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
                                        View all
                                    </button>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="mt-8 space-y-4">
                            <div id="search-table" className="hidden"></div>
                            <DataTable
                                columns={CrmColumns}
                                data={data}
                                filterField={'company'}
                                isRemovePagination={false}
                                className="h-[450px] overflow-auto shadow-none"
                            />
                        </div>
                    </Card>
                    <Card className="p-5 shadow-sm md:col-span-2 xl:col-span-1">
                        <div className="flex items-center justify-between">
                            <h3 className="text-base/5 font-semibold text-black dark:text-white">
                                Country
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
                                        View all
                                    </button>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="mt-8 space-y-6 overflow-y-auto">
                            <div className="flex items-center gap-2.5">
                                <div className="h-7 w-9 shrink-0 overflow-hidden">
                                    <Image
                                        src="/images/flags/US.svg"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <div className="min-w-40 grow leading-5 ltr:pr-3 rtl:pl-3">
                                        <h4 className="line-clamp-2 break-all text-black dark:text-white">
                                            United States
                                        </h4>
                                    </div>
                                    <h5 className="font-semibold text-black dark:text-white">
                                        $85.5k
                                    </h5>
                                    <Badge
                                        variant={'green'}
                                        size={'number'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingUp />
                                        5.02%
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="h-7 w-9 shrink-0 overflow-hidden">
                                    <Image
                                        src="/images/flags/IN.svg"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <div className="min-w-40 grow leading-5 ltr:pr-3 rtl:pl-3">
                                        <h4 className="line-clamp-2 break-all text-black dark:text-white">
                                            India
                                        </h4>
                                    </div>
                                    <h5 className="font-semibold text-black dark:text-white">
                                        $70.3k
                                    </h5>
                                    <Badge
                                        variant={'green'}
                                        size={'number'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingUp />
                                        10.02%
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="h-7 w-9 shrink-0 overflow-hidden">
                                    <Image
                                        src="/images/flags/EN.svg"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <div className="min-w-40 grow leading-5 ltr:pr-3 rtl:pl-3">
                                        <h4 className="line-clamp-2 break-all text-black dark:text-white">
                                            England
                                        </h4>
                                    </div>
                                    <h5 className="font-semibold text-black dark:text-white">
                                        $30.4k
                                    </h5>
                                    <Badge
                                        variant={'red'}
                                        size={'number'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingDown />
                                        15.53%
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="h-7 w-9 shrink-0 overflow-hidden">
                                    <Image
                                        src="/images/flags/FR.svg"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <div className="min-w-40 grow leading-5 ltr:pr-3 rtl:pl-3">
                                        <h4 className="line-clamp-2 break-all text-black dark:text-white">
                                            France
                                        </h4>
                                    </div>
                                    <h5 className="font-semibold text-black dark:text-white">
                                        $34.22k
                                    </h5>
                                    <Badge
                                        variant={'red'}
                                        size={'number'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingDown />
                                        6.15%
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="h-7 w-9 shrink-0 overflow-hidden">
                                    <Image
                                        src="/images/flags/JP.svg"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <div className="min-w-40 grow leading-5 ltr:pr-3 rtl:pl-3">
                                        <h4 className="line-clamp-2 break-all text-black dark:text-white">
                                            Japan
                                        </h4>
                                    </div>
                                    <h5 className="font-semibold text-black dark:text-white">
                                        $15.13k
                                    </h5>
                                    <Badge
                                        variant={'red'}
                                        size={'number'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingDown />
                                        10.24%
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="h-7 w-9 shrink-0 overflow-hidden">
                                    <Image
                                        src="/images/flags/AU.svg"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <div className="min-w-40 grow leading-5 ltr:pr-3 rtl:pl-3">
                                        <h4 className="line-clamp-2 break-all text-black dark:text-white">
                                            Australia
                                        </h4>
                                    </div>
                                    <h5 className="font-semibold text-black dark:text-white">
                                        $24.13k
                                    </h5>
                                    <Badge
                                        variant={'green'}
                                        size={'number'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingDown />
                                        7.68%
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="h-7 w-9 shrink-0 overflow-hidden">
                                    <Image
                                        src="/images/flags/RU.svg"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <div className="min-w-40 grow leading-5 ltr:pr-3 rtl:pl-3">
                                        <h4 className="line-clamp-2 break-all text-black dark:text-white">
                                            Russia
                                        </h4>
                                    </div>
                                    <h5 className="font-semibold text-black dark:text-white">
                                        $45.13k
                                    </h5>
                                    <Badge
                                        variant={'green'}
                                        size={'number'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingDown />
                                        2.68%
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="h-7 w-9 shrink-0 overflow-hidden">
                                    <Image
                                        src="/images/flags/CN.svg"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <div className="min-w-40 grow leading-5 ltr:pr-3 rtl:pl-3">
                                        <h4 className="line-clamp-2 break-all text-black dark:text-white">
                                            Chaina
                                        </h4>
                                    </div>
                                    <h5 className="font-semibold text-black dark:text-white">
                                        $16.45k
                                    </h5>
                                    <Badge
                                        variant={'green'}
                                        size={'number'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingDown />
                                        4.42%
                                    </Badge>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="h-7 w-9 shrink-0 overflow-hidden">
                                    <Image
                                        src="/images/flags/NZ.svg"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="flex grow items-center justify-between gap-4 font-semibold">
                                    <div className="min-w-40 grow leading-5 ltr:pr-3 rtl:pl-3">
                                        <h4 className="line-clamp-2 break-all text-black dark:text-white">
                                            New Zealand
                                        </h4>
                                    </div>
                                    <h5 className="font-semibold text-black dark:text-white">
                                        $10.13k
                                    </h5>
                                    <Badge
                                        variant={'green'}
                                        size={'number'}
                                        className="rounded-lg font-semibold"
                                    >
                                        <TrendingDown />
                                        3.24%
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <Card className="shadow-sm">
                    <CardHeader className="flex items-center justify-between gap-2.5 px-5 py-3.5">
                        <h2 className="whitespace-nowrap text-base/5 font-semibold text-black dark:text-white">
                            Deals Statistics
                        </h2>
                        <div className="flex flex-wrap items-center gap-2.5">
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
                                        className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black hover:bg-light-theme ltr:text-left rtl:text-right dark:bg-black-dark dark:text-white dark:ring-gray dark:hover:bg-black"
                                    >
                                        Last 6 month
                                    </button>
                                    <button
                                        type="button"
                                        className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black hover:bg-light-theme ltr:text-left rtl:text-right dark:bg-black-dark dark:text-white dark:ring-gray dark:hover:bg-black"
                                    >
                                        1 year ago
                                    </button>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <DataTable
                            columns={CrmDealsColumns}
                            data={statisticsData}
                            filterField={'company'}
                            isRemovePagination={false}
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
export default CrmDashboard
