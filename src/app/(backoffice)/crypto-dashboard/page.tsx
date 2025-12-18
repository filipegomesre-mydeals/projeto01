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
import { ChevronDown, TrendingDown, TrendingUp } from 'lucide-react'
import IconBitcoin from '@/components/icons/icon-bitcoin'
import IconEthereum from '@/components/icons/icon-ethereum'
import IconBinance from '@/components/icons/icon-binance'
import IconTether from '@/components/icons/icon-tether'
import { StatisticMultibarChart } from '@/components/custom/charts/statistic-multibar-chart'
import { cryptoColumn, ITable } from '@/components/custom/table/crypto-columns'
import { DataTable } from '@/components/custom/table/data-table'
import DashboardCryptoBalanceChart from '@/components/custom/charts/dashboard-crypto-balance-chart'

const CryptoDashboard = () => {
    const data: ITable[] = [
        {
            id: '200257',
            coin: {
                image: '/images/bitcoin.svg',
                short_name: 'btc',
                name: 'bitcoin',
            },
            price: '$67,585.96',
            change: '-2.47',
            volume: '+ $35,085,400,156',
            market_cap: '$1,332,234,593,855',
            chart: {
                color: '#7C3AED',
                chartData: [
                    { market_cap: 341 },
                    { market_cap: 408 },
                    { market_cap: 169 },
                    { market_cap: 317 },
                    { market_cap: 480 },
                    { market_cap: 132 },
                    { market_cap: 141 },
                    { market_cap: 434 },
                    { market_cap: 448 },
                    { market_cap: 149 },
                    { market_cap: 103 },
                    { market_cap: 446 },
                    { market_cap: 446 },
                ],
            },
        },
        {
            id: '200545',
            coin: {
                image: '/images/ethereum.svg',
                short_name: 'eth',
                name: 'Ethereum',
            },
            price: '$3,488.63',
            change: '-4.10',
            volume: '+ $16,466,252,829',
            market_cap: '$419,167,667,882',
            chart: {
                color: '#22C55E',
                chartData: [
                    { market_cap: 110 },
                    { market_cap: 408 },
                    { market_cap: 200 },
                    { market_cap: 317 },
                    { market_cap: 250 },
                    { market_cap: 132 },
                    { market_cap: 200 },
                    { market_cap: 434 },
                    { market_cap: 120 },
                    { market_cap: 149 },
                    { market_cap: 150 },
                    { market_cap: 446 },
                    { market_cap: 446 },
                ],
            },
        },
        {
            id: '200452',
            coin: {
                image: '/images/tether.svg',
                short_name: 'USDT',
                name: 'Tether',
            },
            price: '$3,488.63',
            change: '0.03',
            volume: '+ $67,249,995,074',
            market_cap: '$112,558,508,336',
            chart: {
                color: '#EF4444',
                chartData: [
                    { market_cap: 341 },
                    { market_cap: 320 },
                    { market_cap: 169 },
                    { market_cap: 100 },
                    { market_cap: 480 },
                    { market_cap: 132 },
                    { market_cap: 200 },
                    { market_cap: 200 },
                    { market_cap: 448 },
                    { market_cap: 1180 },
                    { market_cap: 300 },
                    { market_cap: 446 },
                    { market_cap: 446 },
                ],
            },
        },
        {
            id: '200452',
            coin: {
                image: '/images/bnb.svg',
                short_name: 'BNB',
                name: 'Binance',
            },
            price: '$605.59',
            change: '-3.27',
            volume: '+ $2,133,181,800',
            market_cap: '$89,375,980,072',
            chart: {
                color: '#EAB308',
                chartData: [
                    { market_cap: 100 },
                    { market_cap: 230 },
                    { market_cap: 169 },
                    { market_cap: 317 },
                    { market_cap: 280 },
                    { market_cap: 132 },
                    { market_cap: 141 },
                    { market_cap: 434 },
                    { market_cap: 448 },
                    { market_cap: 149 },
                    { market_cap: 103 },
                    { market_cap: 446 },
                    { market_cap: 446 },
                ],
            },
        },
        {
            id: '200452',
            coin: {
                image: '/images/solana.svg',
                short_name: 'SOL',
                name: 'Solana',
            },
            price: '$149.92',
            change: '-5.4',
            volume: '+ $2,680,043,269',
            market_cap: '+ $2,680,043,269',
            chart: {
                color: '#335CFF',
                chartData: [
                    { market_cap: 341 },
                    { market_cap: 408 },
                    { market_cap: 169 },
                    { market_cap: 317 },
                    { market_cap: 450 },
                    { market_cap: 132 },
                    { market_cap: 141 },
                    { market_cap: 120 },
                    { market_cap: 448 },
                    { market_cap: 149 },
                    { market_cap: 103 },
                    { market_cap: 320 },
                    { market_cap: 480 },
                ],
            },
        },
        {
            id: '200321',
            coin: {
                image: '/images/bitcoin.svg',
                short_name: 'btc',
                name: 'bitcoin',
            },
            price: '$67,585.96',
            change: '-2.47',
            volume: '+ $35,085,400,156',
            market_cap: '$1,332,234,593,855',
            chart: {
                color: '#22C55E',
                chartData: [
                    { market_cap: 341 },
                    { market_cap: 300 },
                    { market_cap: 220 },
                    { market_cap: 317 },
                    { market_cap: 300 },
                    { market_cap: 132 },
                    { market_cap: 141 },
                    { market_cap: 220 },
                    { market_cap: 150 },
                    { market_cap: 149 },
                    { market_cap: 103 },
                    { market_cap: 446 },
                    { market_cap: 446 },
                ],
            },
        },
        {
            id: '200546',
            coin: {
                image: '/images/ethereum.svg',
                short_name: 'eth',
                name: 'Ethereum',
            },
            price: '$3,488.63',
            change: '-4.10',
            volume: '+ $16,466,252,829',
            market_cap: '$419,167,667,882',
            chart: {
                color: '#EF4444',
                chartData: [
                    { market_cap: 341 },
                    { market_cap: 240 },
                    { market_cap: 169 },
                    { market_cap: 317 },
                    { market_cap: 270 },
                    { market_cap: 132 },
                    { market_cap: 141 },
                    { market_cap: 434 },
                    { market_cap: 310 },
                    { market_cap: 149 },
                    { market_cap: 280 },
                    { market_cap: 220 },
                    { market_cap: 446 },
                ],
            },
        },
    ]
    return (
        <div className="relative space-y-4">
            <PageHeading heading={'Crypto Dashboard'} />

            <div className="min-h-[calc(100vh-160px)] w-full space-y-4">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <Card className="relative rounded-b-none shadow-[0_8px_20px_0_rgba(124,58,237,0.08)]">
                        <div className="space-y-3.5 p-5 font-semibold">
                            <div className="flex items-center justify-between">
                                <div className="inline-flex items-center gap-1.5">
                                    <IconBitcoin className="size-6" />
                                    <h3 className="leading-tight">Bitcoin</h3>
                                </div>
                                <span className="text-xs/tight font-medium">
                                    BTC
                                </span>
                            </div>
                            <div className="flex items-center justify-between gap-2.5">
                                <h4 className="text-xl/6 font-bold text-black dark:text-white">
                                    $293.01
                                </h4>
                                <Badge
                                    variant={'green'}
                                    size={'small'}
                                    className="rounded-lg font-semibold"
                                >
                                    <TrendingUp />
                                    78.88%
                                </Badge>
                            </div>
                        </div>
                        <span className="absolute -bottom-0 h-px w-full bg-linear-to-r from-[#7C3AED] to-[#A78BFA]"></span>
                    </Card>
                    <Card className="relative rounded-b-none shadow-[0_8px_20px_0_rgba(34,197,94,0.08)]">
                        <div className="space-y-3.5 p-5 font-semibold">
                            <div className="flex items-center justify-between">
                                <div className="inline-flex items-center gap-1.5">
                                    <IconEthereum className="size-6" />
                                    <h3 className="leading-tight">Ethereum</h3>
                                </div>
                                <span className="text-xs/tight font-medium">ETH</span>
                            </div>
                            <div className="flex items-center justify-between gap-2.5">
                                <h4 className="text-xl/6 font-bold text-black dark:text-white">
                                    $450.54
                                </h4>
                                <Badge
                                    variant={'green'}
                                    size={'small'}
                                    className="rounded-lg font-semibold"
                                >
                                    <TrendingUp />
                                    2.15%
                                </Badge>
                            </div>
                        </div>
                        <span className="absolute -bottom-0 h-px w-full bg-success"></span>
                    </Card>
                    <Card className="relative rounded-b-none shadow-[0_8px_20px_0_rgba(239,68,68,0.08)]">
                        <div className="space-y-3.5 p-5 font-semibold">
                            <div className="flex items-center justify-between">
                                <div className="inline-flex items-center gap-1.5">
                                    <IconTether className="size-6" />
                                    <h3 className="leading-tight">Tether </h3>
                                </div>
                                <span className="text-xs/tight font-medium">USDT</span>
                            </div>
                            <div className="flex items-center justify-between gap-2.5">
                                <h4 className="text-xl/6 font-bold text-black dark:text-white">
                                    $169.43
                                </h4>
                                <Badge
                                    variant={'red'}
                                    size={'small'}
                                    className="rounded-lg font-semibold"
                                >
                                    <TrendingDown />
                                    47.10%
                                </Badge>
                            </div>
                        </div>
                        <span className="absolute -bottom-0 h-px w-full bg-danger"></span>
                    </Card>
                    <Card className="relative rounded-b-none shadow-[0_8px_20px_0_rgba(234,179,8,0.08)]">
                        <div className="space-y-3.5 p-5 font-semibold">
                            <div className="flex items-center justify-between">
                                <div className="inline-flex items-center gap-1.5">
                                    <IconBinance className="size-6" />
                                    <h3 className="leading-tight">Binance</h3>
                                </div>
                                <span className="text-xs/tight font-medium">BNB</span>
                            </div>
                            <div className="flex items-center justify-between gap-2.5">
                                <h4 className="text-xl/6 font-bold text-black dark:text-white">
                                    $275.43
                                </h4>
                                <Badge
                                    variant={'green'}
                                    size={'small'}
                                    className="rounded-lg font-semibold"
                                >
                                    <TrendingUp />
                                    78.88%
                                </Badge>
                            </div>
                        </div>
                        <span className="absolute -bottom-0 h-px w-full bg-warning"></span>
                    </Card>
                </div>
                <div className="flex flex-col md:grid w-full gap-4 md:grid-cols-2">
                    <Card className="flex flex-col justify-between gap-3 p-5 pb-0 shadow-sm">
                        <div className="flex items-center gap-[30px] font-semibold">
                            <h3 className="text-base/5 text-black dark:text-white">
                                Statistic
                            </h3>
                            <div className="inline-flex items-center gap-1.5 leading-none">
                                <span className="block size-1.5 rounded-full bg-success"></span>
                                Bitcoin
                            </div>
                        </div>
                        <div className="relative mb-5">
                            <StatisticMultibarChart />
                        </div>
                    </Card>
                    <Card className="flex flex-col justify-between gap-7 p-5 pb-0 shadow-sm">
                        <h3 className="text-base/5 font-semibold text-black dark:text-white">
                            Your Balance
                        </h3>
                        <DashboardCryptoBalanceChart />
                    </Card>
                </div>

                <Card className="shadow-sm">
                    <CardHeader className="flex flex-col justify-between gap-2.5 px-5 py-3.5 sm:flex-row sm:items-center">
                        <h2 className="whitespace-nowrap text-base/5 font-semibold text-black dark:text-white">
                            My Portfolio
                        </h2>
                        <div className="flex flex-wrap items-center gap-2.5">
                            <div id="search-table"></div>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        type="button"
                                        variant={'outline-general'}
                                        className="ml-auto"
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
                            columns={cryptoColumn}
                            data={data}
                            filterField={'coin'}
                            isRemovePagination={false}
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
export default CryptoDashboard
