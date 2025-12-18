'use client'

import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { CalendarDays } from 'lucide-react'
import 'react-quill-new/dist/quill.snow.css'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import IconMastercard from '@/components/icons/icon-mastercard'
import IconVisacard from '@/components/icons/icon-visacard'
import IconApplepay from '@/components/icons/icon-applepay'
import IconPaypal from '@/components/icons/icon-paypal'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { useState } from 'react'

const CreateInvoice = () => {
    const [date, setDate] = useState<Date>()
    const [mainDate, setMainDate] = useState<Date>()

    return (
        <div className="space-y-4">
            <PageHeading heading={'Create Invoice'} />

            <div className="flex min-h-[calc(100vh-160px)] w-full flex-col items-start gap-4 xl:flex-row">
                <Card className="w-full grow xl:w-auto">
                    <CardHeader className="rounded-t-lg border-b border-gray-300 bg-gray-100 px-5 py-4 text-base/5 font-semibold text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                        Invoice Details
                    </CardHeader>
                    <CardContent className="p-4">
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-2.5">
                            <div className="space-y-2.5">
                                <label className="font-semibold leading-tight text-black dark:text-white inline-block">
                                    Invoice Number
                                </label>
                                <Input
                                    type="text"
                                    placeholder="#27346733-022"
                                />
                            </div>
                            <div className="space-y-2.5">
                                <label className="font-semibold leading-tight text-black dark:text-white inline-block">
                                    GST Number
                                </label>
                                <Input
                                    type="text"
                                    placeholder="22AAAA0000A1Z5"
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardHeader className="border-y border-gray-300 bg-gray-100 px-5 py-3.5 text-base/5 font-semibold text-black dark:border-gray-700/40 dark:bg-black/20 dark:text-white">
                        Items
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <div className="flex min-w-fit items-start gap-2.5 p-4">
                                <div className="min-w-48 grow space-y-2.5">
                                    <label className="font-semibold leading-tight text-black dark:text-white inline-block">
                                        Description
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="Secret Stadium Sauce"
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Secret Stadium Sauce"
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Secret Stadium Sauce"
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Secret Stadium Sauce"
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Secret Stadium Sauce"
                                    />
                                </div>
                                <div className="w-20 shrink-0 space-y-2.5">
                                    <label className="font-semibold leading-tight text-black dark:text-white inline-block">
                                        Qty
                                    </label>
                                    <Input type="text" placeholder="15" />
                                    <Input type="text" placeholder="15" />
                                    <Input type="text" placeholder="15" />
                                    <Input type="text" placeholder="15" />
                                    <Input type="text" placeholder="15" />
                                </div>
                                <div className="w-24 shrink-0 space-y-2.5">
                                    <label className="font-semibold leading-tight text-black dark:text-white inline-block">
                                        Price
                                    </label>
                                    <Input type="text" placeholder="$8.99" />
                                    <Input type="text" placeholder="$8.99" />
                                    <Input type="text" placeholder="$8.99" />
                                    <Input type="text" placeholder="$8.99" />
                                    <Input type="text" placeholder="$8.99" />
                                </div>
                                <div className="w-32 shrink-0 space-y-2.5">
                                    <label className="font-semibold leading-tight text-black dark:text-white inline-block">
                                        Total Amount
                                    </label>
                                    <Input type="text" placeholder="134.85" />
                                    <Input type="text" placeholder="134.85" />
                                    <Input type="text" placeholder="134.85" />
                                    <Input type="text" placeholder="134.85" />
                                    <Input type="text" placeholder="134.85" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-2.5 p-4">
                            <Button variant={'outline-general'} size={'large'}>
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant={'black'}
                                size={'large'}
                            >
                                Save
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="w-full shrink-0 overflow-hidden xl:w-[432px]">
                    <CardHeader className="rounded-t-lg border-b border-gray-300 bg-gray-100 px-5 py-4 text-base/5 font-semibold text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                        Invoice Information and Payment
                    </CardHeader>
                    <CardContent className="space-y-5 p-4">
                        <div className="space-y-2.5">
                            <label className="block font-semibold leading-tight text-black dark:text-white">
                                Send To
                            </label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Person" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Darrell Steward">
                                        <p className="text-black dark:text-white">
                                            Darrell Steward
                                            <span className="ml-1.5 text-xs/tight text-gray-700 dark:text-gray-600">
                                                New York, USA.
                                            </span>
                                        </p>
                                    </SelectItem>
                                    <SelectItem value="Smith Adward">
                                        <p className="text-black dark:text-white">
                                            Smith Adward
                                            <span className="ml-1.5 text-xs/tight text-gray-700 dark:text-gray-600">
                                                London, UK.
                                            </span>
                                        </p>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <span className="text-xs/none font-medium text-gray-700 dark:text-gray-600">
                                *Select one recipient
                            </span>
                        </div>
                        <div className="space-y-2.5">
                            <label className="block font-semibold leading-tight text-black dark:text-white">
                                Payment Method
                            </label>
                            <div className="flex flex-wrap items-center justify-start gap-2.5 mb-0!">
                                <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-2.5 py-1 dark:border-gray-300/20 dark:bg-white/10">
                                    <Checkbox />
                                    <IconMastercard className="shrink-0" />
                                </label>
                                <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-2.5 py-1 dark:border-gray-300/20 dark:bg-white/10">
                                    <Checkbox />
                                    <IconVisacard className="shrink-0" />
                                </label>
                                <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-2.5 py-1 dark:border-gray-300/20 dark:bg-white/10">
                                    <Checkbox defaultChecked />
                                    <IconApplepay className="shrink-0" />
                                </label>
                                <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-2.5 py-1 dark:border-gray-300/20 dark:bg-white/10">
                                    <Checkbox />
                                    <IconPaypal className="shrink-0" />
                                </label>
                            </div>
                            <span className="text-xs/none font-medium text-gray-700 dark:text-gray-600">
                                *You can add more than one method
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-2.5">
                                <label className="block font-semibold leading-tight text-black dark:text-white">
                                    Invoice Date
                                </label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            type="button"
                                            variant={'outline-general'}
                                            size={'large'}
                                            className="w-full justify-between"
                                        >
                                            {date ? (
                                                format(date, 'PP')
                                            ) : (
                                                <span>Start date</span>
                                            )}
                                            <CalendarDays />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto! p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <div className="space-y-2.5">
                                <label className="block font-semibold leading-tight text-black dark:text-white">
                                    Due Date
                                </label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            type="button"
                                            variant={'outline-general'}
                                            size={'large'}
                                            className="w-full justify-between"
                                        >
                                            {mainDate ? (
                                                format(mainDate, 'PPP')
                                            ) : (
                                                <span>End date</span>
                                            )}
                                            <CalendarDays />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto! p-0">
                                        <Calendar
                                            mode="single"
                                            selected={mainDate}
                                            onSelect={setMainDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="divide-y divide-gray-300 border-t border-gray-300 dark:divide-gray-700/50 dark:border-gray-700">
                        <div className="flex items-center justify-between gap-3 bg-gray-200 px-5 py-3 font-medium leading-tight dark:bg-black/20">
                            <span>Subtotal</span>
                            <span>$95,000</span>
                        </div>
                        <div className="flex items-center justify-between gap-3 px-5 py-3 font-medium leading-tight">
                            <span>Total excluding tax</span>
                            <span>$95,000</span>
                        </div>
                        <div className="flex items-center justify-between gap-3 px-5 py-3 font-medium leading-tight">
                            <span>Total</span>
                            <span>$93,100</span>
                        </div>
                        <div className="flex items-center justify-between gap-3 bg-gray-200 px-5 py-3 font-bold leading-tight text-black dark:bg-black/20 dark:text-white">
                            <span>Amount Due</span>
                            <span>$93,100</span>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
export default CreateInvoice
