import Filter from '@/components/custom/filter'
import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { Heart, Settings2, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard() {
    return (
        <div className="space-y-4">
            <div className="relative">
                <PageHeading heading={'eCommerce Product Card'} />

                <div className="block md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant={'black'}
                                className="absolute top-2 right-3"
                            >
                                <Settings2 />
                                Filter
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side={'right'}
                            className="top-0 right-0 h-screen w-[302px]"
                        >
                            <SheetTitle className="sr-only"></SheetTitle>
                            <SheetDescription hidden></SheetDescription>
                            <Filter />
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="min-h-[calc(100vh-160px)] md:flex md:flex-row md:gap-4">
                <div className="hidden md:block">
                    <Filter />
                </div>

                <div className="grow">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-3">
                        <Card className="relative p-3">
                            <CardContent>
                                <div className="relative">
                                    <Link
                                        href="/product-details"
                                        className="relative block overflow-hidden rounded-sm"
                                    >
                                        <Image
                                            src="/images/t-shirt.png"
                                            alt="product-img"
                                            width={240}
                                            height={240}
                                            className="h-full w-full object-contain duration-300 hover:scale-105 hover:rotate-3"
                                        ></Image>
                                    </Link>
                                    <button
                                        type="button"
                                        className="group/item dark:bg-black-dark absolute top-1 z-2 grid size-5 place-content-center rounded-full bg-white sm:top-3 sm:size-7 ltr:right-1 sm:ltr:right-3 rtl:left-1 sm:rtl:left-3"
                                    >
                                        <Heart className="group-hover/item:fill-danger group-hover/item:text-danger size-3 duration-300 sm:size-4" />
                                    </button>
                                </div>
                                <Card className="mt-4 inline-flex items-center divide-gray-300 ltr:divide-x dark:divide-gray-300/15 dark:border dark:border-gray-300/20 dark:shadow-none">
                                    <div className="flex items-center gap-1 border-gray-300 px-2 py-1 text-xs/tight font-medium text-black rtl:border-l dark:border-gray-300/15 dark:text-white">
                                        4.8
                                        <Star className="fill-warning text-warning size-3" />
                                    </div>
                                    <p className="px-2 py-1 text-xs/tight font-medium text-black dark:text-white">
                                        15.2k
                                    </p>
                                </Card>
                                <div className="mt-3! space-y-1.5 text-xs font-bold text-black sm:text-sm/tight dark:text-white">
                                    <Link
                                        href="/product-details"
                                        className="hover:text-primary inline-flex transition"
                                    >
                                        Escape Dri-FIT Legend T-Shirt
                                    </Link>
                                    <p className="text-gray line-clamp-2 text-[10px] font-medium sm:text-xs/normal dark:text-gray-500">
                                        Moisture-wicking comfort for intense
                                        workouts.
                                    </p>
                                    <p>$199.00</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative p-3">
                            <CardContent>
                                <div className="relative">
                                    <Link
                                        href="/product-details"
                                        className="relative block overflow-hidden rounded-sm"
                                    >
                                        <Image
                                            src="/images/goggles.png"
                                            alt="product-img"
                                            width={240}
                                            height={240}
                                            className="h-full w-full object-contain duration-300 hover:scale-105 hover:rotate-3"
                                        ></Image>
                                    </Link>
                                    <button
                                        type="button"
                                        className="group/item dark:bg-black-dark absolute top-1 z-2 grid size-5 place-content-center rounded-full bg-white sm:top-3 sm:size-7 ltr:right-1 sm:ltr:right-3 rtl:left-1 sm:rtl:left-3"
                                    >
                                        <Heart className="group-hover/item:fill-danger group-hover/item:text-danger size-3 duration-300 sm:size-4" />
                                    </button>
                                </div>
                                <Card className="mt-4 inline-flex items-center divide-gray-300 ltr:divide-x dark:divide-gray-300/15 dark:border dark:border-gray-300/20 dark:shadow-none">
                                    <div className="flex items-center gap-1 border-gray-300 px-2 py-1 text-xs/tight font-medium text-black rtl:border-l dark:border-gray-300/15 dark:text-white">
                                        4.8
                                        <Star className="fill-warning text-warning size-3" />
                                    </div>
                                    <p className="px-2 py-1 text-xs/tight font-medium text-black dark:text-white">
                                        1.68k
                                    </p>
                                </Card>
                                <div className="mt-3! space-y-1.5 text-xs font-bold text-black sm:text-sm/tight dark:text-white">
                                    <Link
                                        href="/product-details"
                                        className="hover:text-primary inline-flex transition"
                                    >
                                        Oakley Holbrook Polarized
                                    </Link>
                                    <p className="text-gray line-clamp-2 text-[10px] font-medium sm:text-xs/normal dark:text-gray-500">
                                        Iconic design with advanced, polarized
                                        optics.
                                    </p>
                                    <p>$151.00</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative p-3">
                            <CardContent>
                                <div className="relative">
                                    <Link
                                        href="/product-details"
                                        className="relative block overflow-hidden rounded-sm"
                                    >
                                        <Image
                                            src="/images/purse.png"
                                            alt="product-img"
                                            width={240}
                                            height={240}
                                            className="h-full w-full object-contain duration-300 hover:scale-105 hover:rotate-3"
                                        ></Image>
                                    </Link>
                                    <button
                                        type="button"
                                        className="group/item dark:bg-black-dark absolute top-1 z-2 grid size-5 place-content-center rounded-full bg-white sm:top-3 sm:size-7 ltr:right-1 sm:ltr:right-3 rtl:left-1 sm:rtl:left-3"
                                    >
                                        <Heart className="group-hover/item:fill-danger group-hover/item:text-danger size-3 duration-300 sm:size-4" />
                                    </button>
                                </div>
                                <Card className="mt-4 inline-flex items-center divide-gray-300 ltr:divide-x dark:divide-gray-300/15 dark:border dark:border-gray-300/20 dark:shadow-none">
                                    <div className="flex items-center gap-1 border-gray-300 px-2 py-1 text-xs/tight font-medium text-black rtl:border-l dark:border-gray-300/15 dark:text-white">
                                        4.5
                                        <Star className="fill-warning text-warning size-3" />
                                    </div>
                                    <p className="px-2 py-1 text-xs/tight font-medium text-black dark:text-white">
                                        1.68k
                                    </p>
                                </Card>
                                <div className="mt-3! space-y-1.5 text-xs font-bold text-black sm:text-sm/tight dark:text-white">
                                    <Link
                                        href="/product-details"
                                        className="hover:text-primary inline-flex transition"
                                    >
                                        Balenciaga Classic City Bag
                                    </Link>
                                    <p className="text-gray line-clamp-2 text-[10px] font-medium sm:text-xs/normal dark:text-gray-500">
                                        Elegant design with versatile, premium
                                        leather.
                                    </p>
                                    <p>$549.00</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative p-3">
                            <CardContent>
                                <div className="relative">
                                    <Link
                                        href="/product-details"
                                        className="relative block overflow-hidden rounded-sm"
                                    >
                                        <Image
                                            src="/images/t-shirt.png"
                                            alt="product-img"
                                            width={240}
                                            height={240}
                                            className="h-full w-full object-contain duration-300 hover:scale-105 hover:rotate-3"
                                        ></Image>
                                    </Link>
                                    <button
                                        type="button"
                                        className="group/item dark:bg-black-dark absolute top-1 z-2 grid size-5 place-content-center rounded-full bg-white sm:top-3 sm:size-7 ltr:right-1 sm:ltr:right-3 rtl:left-1 sm:rtl:left-3"
                                    >
                                        <Heart className="group-hover/item:fill-danger group-hover/item:text-danger size-3 duration-300 sm:size-4" />
                                    </button>
                                </div>
                                <Card className="mt-4 inline-flex items-center divide-gray-300 ltr:divide-x dark:divide-gray-300/15 dark:border dark:border-gray-300/20 dark:shadow-none">
                                    <div className="flex items-center gap-1 border-gray-300 px-2 py-1 text-xs/tight font-medium text-black rtl:border-l dark:border-gray-300/15 dark:text-white">
                                        4.8
                                        <Star className="fill-warning text-warning size-3" />
                                    </div>
                                    <p className="px-2 py-1 text-xs/tight font-medium text-black dark:text-white">
                                        15.2k
                                    </p>
                                </Card>
                                <div className="mt-3! space-y-1.5 text-xs font-bold text-black sm:text-sm/tight dark:text-white">
                                    <Link
                                        href="/product-details"
                                        className="hover:text-primary inline-flex transition"
                                    >
                                        Escape Dri-FIT Legend T-Shirt
                                    </Link>
                                    <p className="text-gray line-clamp-2 text-[10px] font-medium sm:text-xs/normal dark:text-gray-500">
                                        Moisture-wicking comfort for intense
                                        workouts.
                                    </p>
                                    <p>$199.00</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative p-3">
                            <CardContent>
                                <div className="relative">
                                    <Link
                                        href="/product-details"
                                        className="relative block overflow-hidden rounded-sm"
                                    >
                                        <Image
                                            src="/images/goggles.png"
                                            alt="product-img"
                                            width={240}
                                            height={240}
                                            className="h-full w-full object-contain duration-300 hover:scale-105 hover:rotate-3"
                                        ></Image>
                                    </Link>
                                    <button
                                        type="button"
                                        className="group/item dark:bg-black-dark absolute top-1 z-2 grid size-5 place-content-center rounded-full bg-white sm:top-3 sm:size-7 ltr:right-1 sm:ltr:right-3 rtl:left-1 sm:rtl:left-3"
                                    >
                                        <Heart className="group-hover/item:fill-danger group-hover/item:text-danger size-3 duration-300 sm:size-4" />
                                    </button>
                                </div>
                                <Card className="mt-4 inline-flex items-center divide-gray-300 ltr:divide-x dark:divide-gray-300/15 dark:border dark:border-gray-300/20 dark:shadow-none">
                                    <div className="flex items-center gap-1 border-gray-300 px-2 py-1 text-xs/tight font-medium text-black rtl:border-l dark:border-gray-300/15 dark:text-white">
                                        4.5
                                        <Star className="fill-warning text-warning size-3" />
                                    </div>
                                    <p className="px-2 py-1 text-xs/tight font-medium text-black dark:text-white">
                                        1.68k
                                    </p>
                                </Card>
                                <div className="mt-3! space-y-1.5 text-xs font-bold text-black sm:text-sm/tight dark:text-white">
                                    <Link
                                        href="/product-details"
                                        className="hover:text-primary inline-flex transition"
                                    >
                                        Oakley Holbrook Polarized
                                    </Link>
                                    <p className="text-gray line-clamp-2 text-[10px] font-medium sm:text-xs/normal dark:text-gray-500">
                                        Iconic design with advanced, polarized
                                        optics.
                                    </p>
                                    <p>$151.00</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative p-3">
                            <CardContent>
                                <div className="relative">
                                    <Link
                                        href="/product-details"
                                        className="relative block overflow-hidden rounded-sm"
                                    >
                                        <Image
                                            src="/images/purse.png"
                                            alt="product-img"
                                            width={240}
                                            height={240}
                                            className="h-full w-full object-contain duration-300 hover:scale-105 hover:rotate-3"
                                        ></Image>
                                    </Link>
                                    <button
                                        type="button"
                                        className="group/item dark:bg-black-dark absolute top-1 z-2 grid size-5 place-content-center rounded-full bg-white sm:top-3 sm:size-7 ltr:right-1 sm:ltr:right-3 rtl:left-1 sm:rtl:left-3"
                                    >
                                        <Heart className="group-hover/item:fill-danger group-hover/item:text-danger size-3 duration-300 sm:size-4" />
                                    </button>
                                </div>
                                <Card className="mt-4 inline-flex items-center divide-gray-300 ltr:divide-x dark:divide-gray-300/15 dark:border dark:border-gray-300/20 dark:shadow-none">
                                    <div className="flex items-center gap-1 border-gray-300 px-2 py-1 text-xs/tight font-medium text-black rtl:border-l dark:border-gray-300/15 dark:text-white">
                                        4.5
                                        <Star className="fill-warning text-warning size-3" />
                                    </div>
                                    <p className="px-2 py-1 text-xs/tight font-medium text-black dark:text-white">
                                        1.68k
                                    </p>
                                </Card>
                                <div className="mt-3! space-y-1.5 text-xs font-bold text-black sm:text-sm/tight dark:text-white">
                                    <Link
                                        href="/product-details"
                                        className="hover:text-primary inline-flex transition"
                                    >
                                        Balenciaga Classic City Bag
                                    </Link>
                                    <p className="text-gray line-clamp-2 text-[10px] font-medium sm:text-xs/normal dark:text-gray-500">
                                        Elegant design with versatile, premium
                                        leather.
                                    </p>
                                    <p>$549.00</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
