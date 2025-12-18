import { Button } from '@/components/ui/button'
import { Plus, Printer, AlertCircle, X } from 'lucide-react'

export default function InvoiceDetails() {
    return (
        <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg bg-white px-5 py-3.5 shadow-sm dark:bg-black-dark">
                <h2 className="text-base font-semibold text-black dark:text-white">
                    Invoice Details
                </h2>
                <div className="flex items-center gap-2.5">
                    <Button type="button" variant={'outline-general'}>
                        <Printer className="size-3.5" />
                        Print
                    </Button>
                    <Button type="button" variant={'black'}>
                        <Plus className="size-3.5" />
                        Download
                    </Button>
                </div>
            </div>

            <div className="min-h-[calc(100vh-172px)] w-full overflow-hidden rounded-lg bg-white dark:bg-black-dark">
                <div className="space-y-3 border-b border-gray-300 bg-gray-100 px-5 py-[15px] dark:border-gray-700/50 dark:bg-black/30">
                    <h2 className="text-base/6 font-semibold text-black dark:text-white">
                        Invoice{' '}
                        <span className="text-primary">#27346733-022</span>
                    </h2>
                    <p className="text-base/5 font-semibold">
                        Titania Infotech
                    </p>
                </div>
                <div className="grid w-full max-w-[852px] gap-4 px-5 py-[15px] sm:grid-cols-2 sm:gap-3">
                    <div className="space-y-3 font-medium leading-tight">
                        <h3>Bill From:</h3>
                        <h4 className="text-base/5 font-semibold text-black dark:text-white">
                            Din Djarin
                        </h4>
                        <p>WendyRFrazier@teleworm.us</p>
                        <p>(+254) 724-453-233</p>
                        <p>4458 Dennison Street, Stockton, CA 95204</p>
                    </div>
                    <div className="space-y-3 font-medium leading-tight">
                        <h3>Bill To:</h3>
                        <h4 className="text-base/5 font-semibold text-black dark:text-white">
                            Starfleet Alliance
                        </h4>
                        <p>OliviaDKaiser@teleworm.us</p>
                        <p>(+254) 243-124-392</p>
                        <p>4548 Pinnickinnick Street, Piscataway, NJ 08854</p>
                    </div>
                </div>
                <div className="grid w-full max-w-[852px] grid-cols-2 gap-3 px-5 py-[15px]">
                    <div className="space-y-3 font-medium leading-tight">
                        <p>Invoice Date</p>
                        <h5 className="text-base/5 font-semibold text-black dark:text-white">
                            6 March, 2023
                        </h5>
                    </div>
                    <div className="space-y-3 font-medium leading-tight">
                        <p>Due Date</p>
                        <h5 className="text-base/5 font-semibold text-black dark:text-white">
                            7 March, 2023
                        </h5>
                    </div>
                </div>
                <div className="border-t border-gray-300 p-5 text-base/5 font-medium text-black dark:border-gray-700/60 dark:text-white">
                    Invoice Detail
                </div>
                <div className="overflow-auto rounded-b-lg bg-white dark:bg-black-dark">
                    <table className="w-full">
                        <thead className="border-y border-gray-300 bg-gray-100 dark:border-gray-700/50 dark:bg-black/30">
                            <tr>
                                <th className="min-w-72 px-5 py-4 text-sm/tight font-medium ltr:text-left rtl:text-right">
                                    Description
                                </th>
                                <th className="w-0 min-w-28 px-5 py-4 text-sm/tight font-medium ltr:text-left rtl:text-right">
                                    Price
                                </th>
                                <th className="w-0 min-w-28 px-5 py-4 text-sm/tight font-medium ltr:text-left rtl:text-right">
                                    Qty
                                </th>
                                <th className="w-0 min-w-36 whitespace-nowrap px-5 py-4 text-sm/tight font-medium ltr:text-right rtl:text-left">
                                    Total Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300 dark:divide-gray-300/20">
                            <tr>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black dark:text-white">
                                    Secret Stadium Sauce
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black dark:text-white">
                                    $8.99
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black dark:text-white">
                                    50
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black ltr:text-right rtl:text-left dark:text-white">
                                    $23,482.45
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black dark:text-white">
                                    Quaker Instant Oatmeal
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black dark:text-white">
                                    $5.22
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black dark:text-white">
                                    15
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black ltr:text-right rtl:text-left dark:text-white">
                                    $1,000.00
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black dark:text-white">
                                    Nutella
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black dark:text-white">
                                    $6.48
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black dark:text-white">
                                    16
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black ltr:text-right rtl:text-left dark:text-white">
                                    $42.42
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black dark:text-white">
                                    Magnetic Paper Clip
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black dark:text-white">
                                    $11.70
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black dark:text-white">
                                    22
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black ltr:text-right rtl:text-left dark:text-white">
                                    $12,345.67
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black dark:text-white">
                                    Easy Cheese
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black dark:text-white">
                                    $17.84
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black dark:text-white">
                                    10
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black ltr:text-right rtl:text-left dark:text-white">
                                    $4,254.01
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black dark:text-white">
                                    White pepper
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black dark:text-white">
                                    $14.81
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black dark:text-white">
                                    12
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium text-black ltr:text-right rtl:text-left dark:text-white">
                                    $49,999.99
                                </td>
                            </tr>
                            <tr className="bg-gray-100 dark:bg-black/30">
                                <td className="px-5 py-3.5 text-sm/tight font-medium">
                                    Subtotal
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium"></td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium"></td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium ltr:text-right rtl:text-left">
                                    $95,000
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3.5 text-sm/tight font-medium">
                                    Total excluding tax
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium"></td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium"></td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium ltr:text-right rtl:text-left">
                                    $95,000
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3.5 text-sm/tight font-medium">
                                    Discount (2%)
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium"></td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium"></td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium ltr:text-right rtl:text-left">
                                    $1,900
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3.5 text-sm/tight font-medium">
                                    Total
                                </td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium"></td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium"></td>
                                <td className="px-5 py-3.5 text-sm/tight font-medium ltr:text-right rtl:text-left">
                                    $93,100
                                </td>
                            </tr>
                            <tr className="bg-gray-100 dark:bg-black/30">
                                <td className="px-5 py-4 text-base/5 font-bold text-black dark:text-white">
                                    Amount Due
                                </td>
                                <td></td>
                                <td></td>
                                <td className="px-5 py-4 text-base/5 font-bold text-black ltr:text-right rtl:text-left dark:text-white">
                                    $93,100
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-wrap-reverse items-center justify-between gap-2.5 border-t border-gray-300 px-4 py-3.5 font-medium leading-tight sm:px-5 dark:border-gray-700">
                    <Button variant={'outline-general'} size={'large'}>
                        Cancel
                    </Button>
                    <div className="flex items-center gap-2.5">
                        <Button
                            type="button"
                            variant={'outline-general'}
                            size={'large'}
                        >
                            Save to Draft
                        </Button>
                        <Button type="submit" variant={'black'} size={'large'}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-5! flex w-full max-w-[653px] items-center gap-2.5 rounded-lg bg-danger-light px-5 py-3.5">
                <AlertCircle className="size-5 shrink-0 text-danger" />
                <p className="font-semibold leading-tight text-black">
                    Client will get notify to make payment with any credit,
                    debit card, or bank transfer
                </p>
                <button type="button" className="ml-auto">
                    <X className="ml-auto size-[18px] shrink-0 text-black hover:text-gray" />
                </button>
            </div>
        </div>
    )
}
