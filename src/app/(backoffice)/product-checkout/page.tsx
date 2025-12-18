import CountryField from '@/components/custom/country-field'
import IconCheckboxCheck from '@/components/icons/icon-checkbox-check'
import PageHeading from '@/components/layout/page-heading'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
    RadioGroup,
    RadioGroupCheck,
    RadioGroupItem,
} from '@/components/ui/radio-group'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { useStore } from '@/store'
import {
    BadgeCheck,
    Calendar,
    CreditCard,
    Info,
    Plus,
    ShoppingBag,
    Truck,
    User,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCheckout() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Product Checkout'} />

            <div className="flex min-h-[calc(100vh-160px)] w-full flex-col gap-4 xl:flex-row xl:items-start">
                <Card className="grow shadow-none">
                    <Tabs defaultValue="Shipping">
                        <TabsList className="overflow-x-auto rounded-t-lg border-b border-gray-300 bg-white dark:border-gray-700/50 dark:bg-black/30">
                            <div className="inline-flex gap-2.5 px-4 py-[11px] text-sm/[18px]">
                                <TabsTrigger value="Shipping" className="">
                                    <Truck />
                                    Shipping
                                </TabsTrigger>
                                <TabsTrigger value="Personal Details">
                                    <User />
                                    Personal Details
                                </TabsTrigger>
                                <TabsTrigger value="Payment">
                                    <CreditCard />
                                    Payment
                                </TabsTrigger>
                                <TabsTrigger value="Confirmation">
                                    <BadgeCheck />
                                    Confirmation
                                </TabsTrigger>
                            </div>
                        </TabsList>

                        <TabsContent value="Shipping">
                            <form className="space-y-5 p-4">
                                <h2 className="font-semibold leading-tight text-black dark:text-white">
                                    Shipping Address
                                </h2>
                                <div className="space-y-2.5">
                                    <label className="block font-semibold leading-tight text-black dark:text-white">
                                        Full name
                                        <span className="text-primary">*</span>
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="Darlene Robertson"
                                    />
                                </div>
                                <div className="grid gap-5 sm:grid-cols-2 sm:gap-3">
                                    <div className="space-y-2.5">
                                        <label className="block font-semibold leading-tight text-black dark:text-white">
                                            Phone number
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </label>
                                        <CountryField />
                                    </div>
                                    <div className="space-y-2.5">
                                        <label className="block font-semibold leading-tight text-black dark:text-white">
                                            Email
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </label>
                                        <Input
                                            type="email"
                                            placeholder="john.example@gmail.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2.5">
                                    <label className="block font-semibold leading-tight text-black dark:text-white">
                                        Address
                                        <span className="text-primary">*</span>
                                    </label>
                                    <Textarea
                                        rows={4}
                                        placeholder="Enter address here"
                                    />
                                    <label className="flex items-center gap-1.5">
                                        <Checkbox />
                                        <span className="text-xs/tight font-medium text-black dark:text-white">
                                            Same as Shipping Address ?
                                        </span>
                                    </label>
                                </div>
                                <div className="grid gap-5 sm:grid-cols-3 sm:gap-3">
                                    <div className="space-y-2.5">
                                        <label className="block font-semibold leading-tight text-black dark:text-white">
                                            City
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </label>
                                        <Select>
                                            <SelectTrigger
                                                className="w-full"
                                                icons="shorting"
                                            >
                                                <SelectValue placeholder="Chicago" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Newyork">
                                                    Newyork
                                                </SelectItem>
                                                <SelectItem value="London">
                                                    London
                                                </SelectItem>
                                                <SelectItem value="Calgary">
                                                    Calgary
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2.5">
                                        <label className="block font-semibold leading-tight text-black dark:text-white">
                                            State
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </label>
                                        <Select>
                                            <SelectTrigger icons="shorting">
                                                <SelectValue placeholder="Illinois" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="California">
                                                    California
                                                </SelectItem>
                                                <SelectItem value="Texas">
                                                    Texas
                                                </SelectItem>
                                                <SelectItem value="Florida">
                                                    Florida
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2.5">
                                        <label className="block font-semibold leading-tight text-black dark:text-white">
                                            Zip Code
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </label>
                                        <Input placeholder="60131" />
                                    </div>
                                </div>
                                <Button
                                    type="button"
                                    variant={'black'}
                                    className="bg-light-theme text-black hover:text-white dark:bg-white/10 dark:text-white"
                                >
                                    <Plus className="size-4" />
                                    Add Shopping Address
                                </Button>
                                <DropdownMenuSeparator className="mx-0" />
                                <h2 className="font-semibold leading-tight text-black dark:text-white">
                                    Shipping Methods
                                </h2>
                                <RadioGroup defaultValue="Ecom-Express">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <Card className="dark:border dark:border-gray-300/20">
                                            <label className="flex cursor-pointer items-center justify-between gap-4 p-3">
                                                <div className="flex items-center gap-2.5">
                                                    <div className="size-[38px] shrink-0 overflow-hidden rounded-[10px]">
                                                        <Image
                                                            src="/images/ecom-express.svg"
                                                            width={38}
                                                            height={38}
                                                            alt="Ecom Express"
                                                            className="size-full dark:bg-gray-300 object-cover"
                                                        />
                                                    </div>
                                                    <div className="space-y-1.5 font-medium leading-tight">
                                                        <h3 className="text-black dark:text-white">
                                                            Ecom Express
                                                        </h3>
                                                        <p className="line-clamp-1">
                                                            Delivered By 24,Nov
                                                            2022
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="font-semibold leading-tight text-black dark:text-white">
                                                        $40.54
                                                    </span>
                                                    <RadioGroupItem value="Ecom-Express" />
                                                </div>
                                            </label>
                                        </Card>
                                        <Card className="dark:border dark:border-gray-300/20">
                                            <label className="flex cursor-pointer items-center justify-between gap-4 p-3">
                                                <div className="flex items-center gap-2.5">
                                                    <div className="size-[38px] shrink-0 overflow-hidden rounded-[10px]">
                                                        <Image
                                                            src="/images/delhivery.svg"
                                                            width={38}
                                                            height={38}
                                                            alt="Delhivery"
                                                            className="size-full dark:bg-gray-300 object-cover"
                                                        />
                                                    </div>
                                                    <div className="space-y-1.5 font-medium leading-tight">
                                                        <h3 className="text-black dark:text-white">
                                                            Delhivery
                                                        </h3>
                                                        <p className="line-clamp-1">
                                                            Delivered By 22,Nov
                                                            2022
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="font-semibold leading-tight text-black dark:text-white">
                                                        $40.54
                                                    </span>
                                                    <RadioGroupItem value="Delhivery" />
                                                </div>
                                            </label>
                                        </Card>
                                        <Card className="dark:border dark:border-gray-300/20">
                                            <label className="flex cursor-pointer items-center justify-between gap-4 p-3">
                                                <div className="flex items-center gap-2.5">
                                                    <div className="size-[38px] shrink-0 overflow-hidden rounded-[10px]">
                                                        <Image
                                                            src="/images/fedex.svg"
                                                            width={38}
                                                            height={38}
                                                            alt="Fedex"
                                                            className="size-full dark:bg-gray-300 object-cover"
                                                        />
                                                    </div>
                                                    <div className="space-y-1.5 font-medium leading-tight">
                                                        <h3 className="text-black dark:text-white">
                                                            FedEx
                                                        </h3>
                                                        <p className="line-clamp-1">
                                                            Delivered Tomorrow
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="font-semibold leading-tight text-black dark:text-white">
                                                        $40.54
                                                    </span>
                                                    <RadioGroupItem value="Fedex" />
                                                </div>
                                            </label>
                                        </Card>
                                        <Card className="dark:border dark:border-gray-300/20">
                                            <label className="flex cursor-pointer items-center justify-between gap-4 p-3">
                                                <div className="flex items-center gap-2.5">
                                                    <div className="size-[38px] shrink-0 overflow-hidden rounded-[10px]">
                                                        <Image
                                                            src="/images/dhl.svg"
                                                            width={38}
                                                            height={38}
                                                            alt="DHL"
                                                            className="size-full dark:bg-gray-300 object-cover"
                                                        />
                                                    </div>
                                                    <div className="space-y-1.5 font-medium leading-tight">
                                                        <h3 className="text-black dark:text-white">
                                                            DHL
                                                        </h3>
                                                        <p className="line-clamp-1">
                                                            Delivered Today
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="font-semibold leading-tight text-black dark:text-white">
                                                        $40.54
                                                    </span>
                                                    <RadioGroupItem value="dhl" />
                                                </div>
                                            </label>
                                        </Card>
                                    </div>
                                </RadioGroup>
                                <div className="flex items-center justify-end gap-4">
                                    <Button
                                        variant={'outline-general'}
                                        size={'large'}
                                        className="text-danger"
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant={'black'}
                                        size={'large'}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </form>
                        </TabsContent>

                        <TabsContent value="Personal Details">
                            <form className="space-y-5 p-4">
                                <h2 className="font-semibold leading-tight text-black dark:text-white">
                                    Shipping Address
                                </h2>
                                <div className="grid gap-5 sm:grid-cols-2 sm:gap-3">
                                    <div className="space-y-2.5">
                                        <label className="block font-semibold leading-tight text-black dark:text-white">
                                            First name
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </label>
                                        <Input
                                            type="text"
                                            placeholder="Darlene"
                                        />
                                    </div>
                                    <div className="space-y-2.5">
                                        <label className="block font-semibold leading-tight text-black dark:text-white">
                                            Last name
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </label>
                                        <Input
                                            type="text"
                                            placeholder="Robertson"
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-5 sm:grid-cols-2 sm:gap-3">
                                    <div className="space-y-2.5">
                                        <label className="block font-semibold leading-tight text-black dark:text-white">
                                            Phone number
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </label>
                                        <CountryField />
                                    </div>
                                    <div className="space-y-2.5">
                                        <label className="block font-semibold leading-tight text-black dark:text-white">
                                            Email
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </label>
                                        <Input
                                            type="email"
                                            placeholder="john.example@gmail.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2.5">
                                    <label className="block font-semibold leading-tight text-black dark:text-white">
                                        Address
                                        <span className="text-primary">*</span>
                                    </label>
                                    <Textarea
                                        rows={4}
                                        placeholder="Enter address here"
                                    />
                                    <label className="flex items-center gap-1.5">
                                        <Checkbox />
                                        <span className="text-xs/tight font-medium text-black dark:text-white">
                                            Same as Shipping Address ?
                                        </span>
                                    </label>
                                </div>
                                <div className="grid gap-5 sm:grid-cols-3 sm:gap-3">
                                    <div className="space-y-2.5">
                                        <label className="block font-semibold leading-tight text-black dark:text-white">
                                            City
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </label>
                                        <Select>
                                            <SelectTrigger
                                                className="w-full"
                                                icons="shorting"
                                            >
                                                <SelectValue placeholder="Chicago" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Newyork">
                                                    Newyork
                                                </SelectItem>
                                                <SelectItem value="London">
                                                    London
                                                </SelectItem>
                                                <SelectItem value="Calgary">
                                                    Calgary
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2.5">
                                        <label className="block font-semibold leading-tight text-black dark:text-white">
                                            State
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </label>
                                        <Select>
                                            <SelectTrigger icons="shorting">
                                                <SelectValue placeholder="Illinois" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="California">
                                                    California
                                                </SelectItem>
                                                <SelectItem value="Texas">
                                                    Texas
                                                </SelectItem>
                                                <SelectItem value="Florida">
                                                    Florida
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2.5">
                                        <label className="block font-semibold leading-tight text-black dark:text-white">
                                            Zip Code
                                            <span className="text-primary">
                                                *
                                            </span>
                                        </label>
                                        <Input placeholder="60131" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-end gap-4">
                                    <Button
                                        variant={'outline-general'}
                                        size={'large'}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant={'black'}
                                        size={'large'}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </form>
                        </TabsContent>

                        <TabsContent value="Payment">
                            <form className="space-y-5 p-4">
                                <h2 className="font-semibold leading-tight text-black dark:text-white">
                                    Payment Details
                                </h2>
                                <div className="space-y-2.5">
                                    <label className="block font-semibold leading-tight text-black dark:text-white">
                                        Delivery Address
                                        <span className="text-primary">*</span>
                                    </label>
                                    <div className="relative flex items-center justify-between gap-2.5 rounded-lg px-3 py-2.5 text-xs font-medium shadow-3xl sm:text-sm/tight">
                                        <span className="line-clamp-2">
                                            MIG-1-11,Monroe Street,Washington
                                            D.C,USA
                                        </span>
                                        <button
                                            type="button"
                                            className="font-semibold text-primary transition hover:text-black dark:hover:text-white"
                                        >
                                            Change
                                        </button>
                                    </div>
                                </div>
                                <DropdownMenuSeparator className="mx-0" />
                                <h2 className="font-semibold leading-tight text-black dark:text-white">
                                    Payment Methods
                                </h2>
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="space-y-4"
                                >
                                    <AccordionItem
                                        value="item-1"
                                        className="overflow-hidden rounded-lg p-0"
                                    >
                                        <AccordionTrigger className="flex items-center justify-start! gap-3! p-3 data-[state=open]:bg-gray-200 dark:data-[state=open]:bg-white/5 [&>svg]:hidden [&[data-state=open]>span]:border-4 [&[data-state=open]>span]:border-black dark:[&[data-state=open]>span]:border-white">
                                            <span className="size-3.5 shrink-0 rounded-full border border-gray-300 bg-transparent"></span>
                                            <div className="space-y-1.5">
                                                <h3 className="font-semibold uppercase leading-tight text-black ltr:text-left rtl:text-right dark:text-white">
                                                    Upi
                                                </h3>
                                                <p className="line-clamp-1 text-xs/tight text-gray sm:text-sm/tight dark:text-gray-600">
                                                    You will be redirected to
                                                    the website to complete your
                                                    purchase securely.
                                                </p>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="border-t border-gray-300 p-3 dark:border-gray-300/20">
                                            <Accordion
                                                type="single"
                                                className="space-y-5"
                                                collapsible
                                            >
                                                <AccordionItem
                                                    value="subitem-1"
                                                    className="overflow-hidden rounded-none border-none p-0 shadow-none!"
                                                >
                                                    <AccordionTrigger className="p-0! [&>svg]:hidden [&[data-state=open]_.radio-check]:border-black [&[data-state=open]_.radio-check]:bg-black dark:[&[data-state=open]_.radio-check]:border-white dark:[&[data-state=open]_.radio-check]:bg-white">
                                                        <div className="flex cursor-pointer items-center gap-3">
                                                            <span className="radio-check flex size-3 shrink-0 items-center justify-center rounded-[2px] border-[1.5px] border-gray-300">
                                                                <IconCheckboxCheck className="size-1.5 text-white dark:text-black" />
                                                            </span>
                                                            <div className="flex items-center gap-1.5">
                                                                <Image
                                                                    src="/images/upi-logo.svg"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="UPI Logo"
                                                                    className="size-4"
                                                                />
                                                                <span className="font-semibold leading-tight text-black dark:text-white">
                                                                    UPI ID
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </AccordionTrigger>
                                                </AccordionItem>

                                                <AccordionItem
                                                    value="subitem-2"
                                                    className="overflow-hidden rounded-none p-0 shadow-none! dark:border-none"
                                                >
                                                    <AccordionTrigger className="p-0! [&>svg]:hidden [&[data-state=open]_.radio-check]:border-black [&[data-state=open]_.radio-check]:bg-black dark:[&[data-state=open]_.radio-check]:border-white dark:[&[data-state=open]_.radio-check]:bg-white">
                                                        <label className="flex cursor-pointer items-center gap-3 [&>button]:rounded-[2px]">
                                                            <span className="radio-check flex size-3 shrink-0 items-center justify-center rounded-[2px] border-[1.5px] border-gray-300">
                                                                <IconCheckboxCheck className="size-1.5 text-white dark:text-black" />
                                                            </span>
                                                            <div className="flex items-center gap-1.5">
                                                                <Image
                                                                    src="/images/gpay-logo.svg"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Gpay Logo"
                                                                    className="size-4"
                                                                />
                                                                <span className="font-semibold leading-tight text-black dark:text-white">
                                                                    Google Pay
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </AccordionTrigger>
                                                    <AccordionContent className="flex flex-wrap items-center gap-4 p-1 pt-4 sm:flex-nowrap">
                                                        <div className="flex w-full max-w-[395px] items-center">
                                                            <div className="w-full">
                                                                <Input
                                                                    type="text"
                                                                    placeholder="UPI ID"
                                                                    className="py-[9px] ltr:rounded-r-none rtl:rounded-l-none"
                                                                />
                                                            </div>
                                                            <Select>
                                                                <SelectTrigger className="w-28 shrink-0 gap-2 bg-gray-100 px-3 py-[9px] text-black placeholder:text-black focus:ring-0 ltr:rounded-l-none rtl:rounded-r-none [&>svg]:text-black dark:[&>svg]:text-gray-500">
                                                                    <SelectValue placeholder="@okhdfc" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="@okicici">
                                                                        @okicici
                                                                    </SelectItem>
                                                                    <SelectItem value="@oksbi-1">
                                                                        @oksbi-1
                                                                    </SelectItem>
                                                                    <SelectItem value="@okbob">
                                                                        @okbob
                                                                    </SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                        <Button
                                                            variant={'black'}
                                                            size={'large'}
                                                        >
                                                            Pay Now
                                                        </Button>
                                                    </AccordionContent>
                                                </AccordionItem>
                                                <AccordionItem
                                                    value="subitem-3"
                                                    className="overflow-hidden rounded-none border-none p-0 shadow-none!"
                                                >
                                                    <AccordionTrigger className="p-0! [&>svg]:hidden [&[data-state=open]_.radio-check]:border-black [&[data-state=open]_.radio-check]:bg-black dark:[&[data-state=open]_.radio-check]:border-white dark:[&[data-state=open]_.radio-check]:bg-white">
                                                        <div className="flex cursor-pointer items-center gap-3">
                                                            <span className="radio-check flex size-3 shrink-0 items-center justify-center rounded-[2px] border-[1.5px] border-gray-300">
                                                                <IconCheckboxCheck className="size-1.5 text-white dark:text-black" />
                                                            </span>
                                                            <div className="flex items-center gap-1.5">
                                                                <Image
                                                                    src="/images/paypal-logo.svg"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Paypal Logo"
                                                                    className="size-4"
                                                                />
                                                                <span className="font-semibold leading-tight text-black dark:text-white">
                                                                    Paypal
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </AccordionTrigger>
                                                </AccordionItem>
                                            </Accordion>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <div className="relative">
                                        <AccordionItem
                                            value="item-2"
                                            className="overflow-hidden rounded-lg p-0"
                                        >
                                            <AccordionTrigger className="relative flex flex-wrap items-center justify-start! gap-3! p-3 data-[state=open]:bg-gray-200 dark:data-[state=open]:bg-white/5 [&>svg]:hidden [&[data-state=open]>span]:border-4 [&[data-state=open]>span]:border-black dark:[&[data-state=open]>span]:border-white">
                                                <span className="size-3.5 shrink-0 rounded-full border border-gray-300 bg-transparent"></span>
                                                <div className="grow space-y-1.5 ltr:text-left rtl:text-right">
                                                    <div className="font-semibold leading-tight text-black dark:text-white">
                                                        Credit / Debit / ATM
                                                        Card
                                                    </div>
                                                    <p className="line-clamp-1 text-xs/tight text-gray sm:text-sm/tight dark:text-gray-600">
                                                        Secure transfer via bank
                                                        account.
                                                    </p>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="space-y-5 border-t border-gray-300 p-3 dark:border-gray-300/20">
                                                <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
                                                    <div className="w-[261px] overflow-hidden">
                                                        <Image
                                                            src="/images/card.svg"
                                                            width={261}
                                                            height={157}
                                                            alt="Card"
                                                            className="h-auto w-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="space-y-2.5">
                                                        <div className="inline-flex items-center gap-1.5">
                                                            <h4 className="font-semibold leading-tight text-black dark:text-white">
                                                                HDFC Bank
                                                            </h4>
                                                            <BadgeCheck className="size-[18px] fill-success text-white dark:text-black-dark" />
                                                        </div>
                                                        <p className="font-semibold leading-tight text-primary">
                                                            Joseph Canine
                                                        </p>
                                                        <p className="font-semibold leading-tight">
                                                            Credit Card: ****
                                                            **** **** 5154
                                                        </p>
                                                        <p className="font-semibold leading-tight">
                                                            Expire: 10/28
                                                        </p>
                                                        <div className="flex items-center gap-4">
                                                            <div className="relative w-full max-w-32">
                                                                <Input
                                                                    type="text"
                                                                    placeholder="CVV"
                                                                    className="pr-8"
                                                                />
                                                                <TooltipProvider>
                                                                    <Tooltip>
                                                                        <TooltipTrigger
                                                                            asChild
                                                                        >
                                                                            <Info className="absolute right-2.5 top-3 size-4 text-black dark:text-white" />
                                                                        </TooltipTrigger>
                                                                        <TooltipContent
                                                                            className="text-xs/tight"
                                                                            side={
                                                                                'top'
                                                                            }
                                                                        >
                                                                            <p>
                                                                                CVV
                                                                                code
                                                                            </p>
                                                                        </TooltipContent>
                                                                    </Tooltip>
                                                                </TooltipProvider>
                                                            </div>
                                                            <Button
                                                                variant={
                                                                    'black'
                                                                }
                                                                size={'large'}
                                                            >
                                                                Pay Now
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>

                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button
                                                    variant={'outline-general'}
                                                    className="top-4 z-10 sm:absolute ltr:right-2 sm:ltr:right-4 rtl:left-2 sm:rtl:left-4"
                                                >
                                                    <Plus />
                                                    Add Card
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="w-full max-w-[392px]">
                                                <Card className="shadow-none!">
                                                    <CardHeader>
                                                        <div className="space-y-1.5 text-base/5 font-semibold text-black dark:text-white">
                                                            <h2>Add Card</h2>
                                                        </div>
                                                    </CardHeader>
                                                    <CardContent className="my-[30px] space-y-5">
                                                        <div className="space-y-3">
                                                            <label className="block font-semibold leading-none text-black dark:text-white">
                                                                Enter Cardholder
                                                                name
                                                            </label>
                                                            <Input
                                                                placeholder="Ally Wilson"
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className="space-y-3">
                                                            <label className="block font-semibold leading-none text-black dark:text-white">
                                                                Enter Card
                                                                Number
                                                            </label>
                                                            <Input placeholder="**** **** **** 5154" />
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-5">
                                                            <div className="space-y-3">
                                                                <label className="block font-semibold leading-none text-black dark:text-white">
                                                                    Expiry Date
                                                                </label>
                                                                <Input
                                                                    type="text"
                                                                    placeholder="MM / YY"
                                                                    iconRight={
                                                                        <Calendar className="size-4 text-black dark:text-white" />
                                                                    }
                                                                    className="ltr:pr-9 rtl:pl-9"
                                                                />
                                                            </div>
                                                            <div className="space-y-3">
                                                                <label className="block font-semibold leading-none text-black dark:text-white">
                                                                    CVV code
                                                                </label>
                                                                <div className="relative">
                                                                    <Input
                                                                        type="text"
                                                                        placeholder="CVV"
                                                                        className="ltr:pr-9 rtl:pl-9"
                                                                    />
                                                                    <TooltipProvider>
                                                                        <Tooltip>
                                                                            <TooltipTrigger
                                                                                asChild
                                                                            >
                                                                                <Info className="absolute top-3 size-4 text-black ltr:right-2.5 rtl:left-2.5 dark:text-white" />
                                                                            </TooltipTrigger>
                                                                            <TooltipContent
                                                                                className="text-xs/tight"
                                                                                side={
                                                                                    'top'
                                                                                }
                                                                            >
                                                                                <p>
                                                                                    CVV
                                                                                    code
                                                                                </p>
                                                                            </TooltipContent>
                                                                        </Tooltip>
                                                                    </TooltipProvider>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                    <CardFooter>
                                                        <div className="flex items-center justify-end gap-4">
                                                            <Button
                                                                variant={
                                                                    'outline-general'
                                                                }
                                                            >
                                                                Reset
                                                            </Button>
                                                            <Button
                                                                variant={
                                                                    'black'
                                                                }
                                                            >
                                                                Add
                                                            </Button>
                                                        </div>
                                                    </CardFooter>
                                                </Card>
                                            </DialogContent>
                                        </Dialog>
                                    </div>

                                    <AccordionItem
                                        value="item-3"
                                        className="overflow-hidden rounded-lg p-0"
                                    >
                                        <AccordionTrigger className="flex items-center justify-start! gap-3! p-3 data-[state=open]:bg-gray-200 dark:data-[state=open]:bg-white/5 [&>svg]:hidden [&[data-state=open]>span]:border-4 [&[data-state=open]>span]:border-black dark:[&[data-state=open]>span]:border-white">
                                            <span className="size-3.5 shrink-0 rounded-full border border-gray-300 bg-transparent"></span>
                                            <div className="space-y-1.5 ltr:text-left rtl:text-right">
                                                <h3 className="font-semibold uppercase leading-tight text-black dark:text-white">
                                                    Cash on Delivery
                                                </h3>
                                                <p className="line-clamp-1 text-xs/tight text-gray sm:text-sm/tight dark:text-gray-600">
                                                    Pay with cash when your
                                                    order is delivered.
                                                </p>
                                            </div>
                                        </AccordionTrigger>
                                    </AccordionItem>
                                </Accordion>

                                <div className="flex items-center justify-end gap-4">
                                    <Button
                                        variant={'outline-general'}
                                        size={'large'}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant={'black'}
                                        size={'large'}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </form>
                        </TabsContent>

                        <TabsContent value="Confirmation">
                            <div className="space-y-[30px] py-14 text-center">
                                <Image
                                    src="/images/payment-conformation.svg"
                                    width={200}
                                    height={200}
                                    alt="Payment Conformation"
                                    className="mx-auto"
                                />
                                <h3 className="text-base/5 font-bold text-success">
                                    Payment Successful...
                                </h3>
                                <div className="space-y-2">
                                    <p className="font-medium text-black dark:text-white">
                                        You can track your order with Order Id
                                        SPK#1FR from&nbsp;
                                        <Link
                                            href="#"
                                            className="text-primary underline underline-offset-2 transition hover:text-primary/80"
                                        >
                                            Track Order
                                        </Link>
                                    </p>
                                    <p className="font-medium leading-tight">
                                        Thankyou for shopping with us.
                                    </p>
                                </div>
                                <Button variant={'black'} size={'large'}>
                                    <ShoppingBag />
                                    Continue Shopping
                                </Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </Card>

                <div className="space-y-4 xl:w-[309px] xl:shrink-0">
                    <Card>
                        <CardHeader className="border-b border-gray-300 p-4 text-sm/tight font-semibold text-black dark:border-gray-700/50 dark:text-white">
                            Price Details
                        </CardHeader>
                        <CardContent className="space-y-5 p-4">
                            <div className="flex items-center justify-between leading-tight text-black dark:text-white">
                                <span className="font-medium">
                                    Price (1 items)
                                </span>
                                <span className="font-semibold">$50</span>
                            </div>
                            <div className="flex items-center justify-between leading-tight text-black dark:text-white">
                                <span className="font-medium">
                                    Discount{' '}
                                    <span className="text-primary">(25%)</span>
                                </span>
                                <span className="font-semibold text-success">
                                    -$50
                                </span>
                            </div>
                            <div className="dark:text-whites flex items-center justify-between leading-tight text-black dark:text-white">
                                <div className="inline-flex items-center gap-1.5 font-medium">
                                    <span>Coupon Discount</span>
                                    <TooltipProvider delayDuration={0}>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Info className="size-[18px]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>10% off</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                                <span className="font-semibold text-success">
                                    -$87
                                </span>
                            </div>
                            <div className="flex items-center justify-between leading-tight text-black dark:text-white">
                                <span className="font-medium">
                                    Delivery Charges
                                </span>
                                <span className="font-semibold text-success">
                                    Free
                                </span>
                            </div>
                            <div className="flex items-center justify-between border-y border-gray-300 py-4 leading-tight text-black dark:border-gray-300/20 dark:text-white mb-2.5!">
                                <span className="font-semibold uppercase">
                                    Total amount
                                </span>
                                <span className="font-bold">$682</span>
                            </div>
                            <span className="line-clamp-2 block text-xs/tight font-semibold text-success">
                                You will save ₹250 on this order
                            </span>
                        </CardContent>
                    </Card>
                    <Card className="shadow-sm">
                        <CardHeader className="border-b border-gray-300 p-4 text-sm/tight font-semibold text-black dark:border-gray-700/50 dark:text-white">
                            Offers
                        </CardHeader>
                        <CardContent className="space-y-4 p-4">
                            <p className="font-medium text-black dark:text-white">
                                Get Rs 100 OFF on Order of Rs 700{' '}
                                <Link
                                    href="#"
                                    className="font-semibold text-primary transition hover:text-primary/80"
                                >
                                    T&C
                                </Link>
                            </p>
                            <p className="font-medium text-black dark:text-white">
                                Today&apos;s Deals Of The Day - Up to 90% OFF On
                                Products{' '}
                                <Link
                                    href="#"
                                    className="font-semibold text-primary transition hover:text-primary/80"
                                >
                                    T&C
                                </Link>
                            </p>
                            <p className="font-medium text-black dark:text-white">
                                Made In India (Bring Home Bharat) - Up To 80%
                                Off On All Categories{' '}
                                <Link
                                    href="#"
                                    className="font-semibold text-primary transition hover:text-primary/80"
                                >
                                    T&C
                                </Link>
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
