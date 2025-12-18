'use client'
import { DataTable } from '@/components/custom/table/data-table'
import {
    invoiceColumn,
    ITable,
} from '@/components/custom/table/invoice-columns'
import IconPDF from '@/components/icons/icon-pdf'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Invoice() {
    const [isActiveTab, setIsActiveTab] = useState('invoice')

    const data: ITable[] = [
        {
            id: '200257',
            invoice_id: '#200257',
            client: {
                image: '/images/avatar.svg',
                name: 'Jerome Bell',
                email: 'jeromebell@gamil.com',
            },
            issued_date: '25,Nov 2022',
            amount: '$450.54',
            status: 'paid',
            due_date: 'Mar 31, 2024',
        },
        {
            id: '#526587',
            invoice_id: '#526587',
            client: {
                image: '/images/avatar-two.svg',
                name: 'Victoria Alonso',
                email: 'victoriaalonso@gamil.com',
            },
            issued_date: '13,Nov 2022',
            amount: '$576.28',
            status: 'pending',
            due_date: 'Mar 29, 2024',
        },
        {
            id: '#696589',
            invoice_id: '#696589',
            client: {
                image: '/images/avatar-three.svg',
                name: 'Arlene McCoy',
                email: 'arlenemccoy@gamil.com',
            },
            issued_date: '30,Nov 2022',
            amount: '$782.01',
            status: 'Unpaid',
            due_date: 'Mar 20, 2024',
        },
        {
            id: '#256584',
            invoice_id: '#256584',
            client: {
                image: '/images/avatar-four.svg',
                name: 'Grace Hopper',
                email: 'gracehopper@gamil.com',
            },
            issued_date: '18,Nov 2022',
            amount: '$446.61',
            status: 'overdue',
            due_date: 'Feb 20, 2024',
        },
        {
            id: '#105986',
            invoice_id: '#105986',
            client: {
                image: '/images/avatar-six.svg',
                name: 'Darrell Steward',
                email: 'darrellsteward@gamil.com',
            },
            issued_date: '18,Nov 2022',
            amount: '$779.58',
            status: 'paid',
            due_date: 'Feb 16, 2024',
        },
        {
            id: '#526534',
            invoice_id: '#526534',
            client: {
                image: '/images/avatar-seven.svg',
                name: 'Elizabeth Feinler',
                email: 'elizabethfeinler@gamil.com',
            },
            issued_date: '02,Nov 2022',
            amount: '$293.01',
            status: 'pending',
            due_date: 'Jan 28, 2024',
        },
        {
            id: '#526584',
            invoice_id: '#526584',
            client: {
                image: '/images/avatar-eight.svg',
                name: 'Courtney Henry',
                email: 'courtneyhenry@gamil.com',
            },
            issued_date: '15,Nov 2022',
            amount: '$630.44',
            status: 'pending',
            due_date: 'Jan 28, 2024',
        },
        {
            id: '#526589',
            invoice_id: '#526589',
            client: {
                image: '/images/avatar-nine.svg',
                name: 'Radia Perlman',
                email: 'radiaperlman@gamil.com',
            },
            issued_date: '21,Nov 2022',
            amount: '$406.27',
            status: 'pending',
            due_date: 'Jan 22, 2024',
        },
        {
            id: '#526587',
            invoice_id: '#526587',
            client: {
                image: '/images/avatar-ten.svg',
                name: 'Jane Cooper',
                email: 'janecooper@gamil.com',
            },
            issued_date: '15,Oct 2022',
            amount: '$928.41',
            status: 'paid',
            due_date: 'Jan 18, 2024',
        },
    ]

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg bg-white px-5 py-3.5 shadow-sm dark:bg-black-dark">
                <h2 className="text-base font-semibold text-black dark:text-white">
                    Invoice
                </h2>
                <div className="flex items-center gap-2.5">
                    <Button type="button" variant={'outline-general'}>
                        <IconPDF className="size-3.5" />
                        Export PDF
                    </Button>
                    <Link href="/create-invoice">
                        <Button variant={'black'}>
                            <Plus className="size-3.5" />
                            Create Invoice
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="min-h-[calc(100vh-172px)] w-full rounded-lg">
                <Tabs value={isActiveTab} onValueChange={setIsActiveTab}>
                    <div className="flex items-center justify-between gap-4 overflow-x-auto rounded-t-lg bg-white px-5 py-4 dark:bg-white/6">
                        <TabsList className="flex items-center gap-2.5 text-sm/tight">
                            <TabsTrigger value="invoice">Invoices</TabsTrigger>
                            <TabsTrigger value="Unpaid">Unpaid</TabsTrigger>
                            <TabsTrigger value="overdue">Overdue</TabsTrigger>
                            <TabsTrigger value="paid">Paid</TabsTrigger>
                        </TabsList>
                        <div className="flex items-center gap-2.5">
                            <div id="search-table"></div>
                            <Select>
                                <SelectTrigger className="p-2 text-xs text-black shadow-sm ring-1 ring-gray-300">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <div className="space-y-1.5">
                                        <SelectItem
                                            className="text-xs/tight"
                                            value="Weekly"
                                        >
                                            Weekly
                                        </SelectItem>
                                        <SelectItem
                                            className="text-xs/tight"
                                            value="Monthly"
                                        >
                                            Monthly
                                        </SelectItem>
                                        <SelectItem
                                            className="text-xs/tight"
                                            value="Yearly"
                                        >
                                            Yearly
                                        </SelectItem>
                                    </div>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <TabsContent value={isActiveTab}>
                        <DataTable
                            columns={invoiceColumn}
                            data={data}
                            filterField={'client'}
                            isFilterRow={true}
                            isFilterRowBasedOnValue={isActiveTab}
                            isAllRowKey="invoice"
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
