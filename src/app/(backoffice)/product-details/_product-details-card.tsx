'use client'
import IconCardPayment from '@/components/icons/icon-card-payment'
import IconCourierReturn from '@/components/icons/icon-courier-return'
import IconSupport from '@/components/icons/icon-support'
import IconTruck from '@/components/icons/icon-truck'
import PageHeading from '@/components/layout/page-heading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { RadioGroup } from '@/components/ui/radio-group'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { Check, Heart, ShoppingBag, Star, Truck } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const product = [
    {
        id: 1,
        tag: 'Hypro',
        name: ' Grain Free Kangaroo & Turkey – Active Adult',
        description:
            'Hypro Premium with Kangaroo & Turkey Grain Free is a precisely balanced, all-natural, endurance formula for active and working dogs.',
        price: '111.00',
        discount: '199.00',
        discountPercentage: '32',
        rating: 4.8,
        review: 15200,
        saveMoney: 40,
        image: '/images/dog-powder4.png',
        delivery: 'Delivery Options',
    },
    {
        id: 2,
        tag: 'Express',
        name: 'Dog Powder',
        description:
            'Hypro Premium with Kangaroo & Turkey Grain Free is a precisely balanced, all-natural for active and working dogs.',
        price: '179.00',
        discount: '220.00',
        discountPercentage: '29',
        rating: 4.6,
        review: 13200,
        saveMoney: 60,
        image: '/images/dog-powder5.png',
        delivery: 'Delivery Options',
    },
    {
        id: 3,
        tag: 'Overnight',
        name: 'Overnight Shipping',
        description:
            'Hypro Premium with Kangaroo & Turkey Grain Free is a precisely balanced, endurance formula for active and working dogs.',
        price: '299.00',
        discount: '150.00',
        discountPercentage: '25',
        rating: 4.5,
        review: 10800,
        saveMoney: 200,
        image: '/images/dog-powder6.png',
        delivery: 'Delivery Options',
    },
]

const productVariants = [
    {
        id: 1,
        image: '/images/dog-powder1.png',
        name: 'Dog Powder',
    },
    {
        id: 2,
        image: '/images/dog-powder2.png',
        name: 'Dog Powder',
    },
    {
        id: 3,
        image: '/images/dog-powder3.png',
        name: 'Dog Powder',
    },
    {
        id: 4,
        image: '/images/dog-powder4.png',
        name: 'Dog Powder',
    },
]

const ProductDetailsCard = () => {
    const [currntProduct, setCurrntProduct] = useState(product[0])

    const [currentProductVariant, setCurrentProductVariant] = useState(
        productVariants[0],
    )
    return (
        <div className="space-y-4">
            <PageHeading heading={'Product Details'} />

            <div className="min-h-[calc(100vh-160px)] w-full rounded-lg bg-white p-4 dark:bg-black">
                <div className="mx-auto w-full max-w-[948px] space-y-[50px] font-medium">
                    <div className="flex flex-col gap-8 md:flex-row">
                        <div className="flex w-full grow flex-col gap-3 md:max-w-[438px]">
                            <div className="h-72 w-full max-w-96 overflow-hidden rounded-lg bg-gray-400 sm:h-96 md:h-[536px] md:max-w-[438px] lg:p-16 dark:bg-black-dark">
                                <Image
                                    src={
                                        currentProductVariant.image ||
                                        '/images/dog-powder.png'
                                    }
                                    alt="blog-img"
                                    width={248}
                                    height={400}
                                    className="mx-auto h-full w-full object-contain"
                                ></Image>
                            </div>
                            <div className="overflow-x-auto">
                                <div className="flex min-w-fit shrink-0 gap-2.5 overflow-x-auto md:grid md:grid-cols-4">
                                    {!!productVariants?.length &&
                                        productVariants?.map(
                                            (option, index) => {
                                                const isActive =
                                                    option?.id ===
                                                    currentProductVariant?.id
                                                return (
                                                    <div
                                                        onClick={() => {
                                                            setCurrentProductVariant(
                                                                option,
                                                            )
                                                        }}
                                                        onMouseEnter={() => {
                                                            setCurrentProductVariant(
                                                                option,
                                                            )
                                                        }}
                                                        className={cn(
                                                            'h-[116px] w-24 rounded-lg border border-transparent bg-light-theme py-4 md:w-full md:max-w-[102px] dark:bg-black-dark',
                                                            isActive &&
                                                            'border-primary/40 dark:border-primary',
                                                        )}
                                                        key={index}
                                                    >
                                                        <Image
                                                            src={
                                                                option.image ||
                                                                '/images/dog-powder1.png'
                                                            }
                                                            alt={option.name}
                                                            width={52}
                                                            height={84}
                                                            className="mx-auto h-full w-full object-contain"
                                                        ></Image>
                                                    </div>
                                                )
                                            },
                                        )}
                                </div>
                            </div>
                        </div>

                        <div className="w-full space-y-[30px] md:max-w-[478px] xl:shrink-0">
                            <div className="space-y-3">
                                <Badge
                                    variant={'orange'}
                                    className="font-semibold"
                                >
                                    {currntProduct.tag}
                                </Badge>
                                <h2 className="text-xl/tight font-semibold text-black dark:text-white">
                                    {currntProduct.name}
                                </h2>
                                <p className="leading-[26px]">
                                    {currntProduct.description}
                                </p>
                            </div>
                            <div className="space-y-3 font-semibold">
                                <div className="inline-flex flex-wrap items-center gap-3">
                                    <h3 className="text-[26px]/8 text-black dark:text-white">
                                        ${currntProduct.price}
                                    </h3>
                                    <span className="text-base/5 text-gray-600 line-through">
                                        ${currntProduct.discount}
                                    </span>
                                    <span className="font-medium leading-tight text-primary">
                                        ({currntProduct.discountPercentage}%
                                        Off)
                                    </span>
                                </div>
                                <p className="text-xs/tight">
                                    inclusive of all taxes
                                </p>
                                <Card className="inline-flex items-center divide-gray-300 ltr:divide-x dark:divide-gray-300/15 dark:border dark:border-gray-300/20 dark:shadow-none">
                                    <div className="flex items-center gap-1 border-gray-300 px-2 py-1 text-xs/tight font-medium text-black rtl:border-l dark:border-gray-300/15 dark:text-white">
                                        {currntProduct.rating}
                                        <Star className="size-3 fill-warning text-warning" />
                                    </div>
                                    <p className="px-2 py-1 text-xs/tight font-medium text-black dark:text-white">
                                        {currntProduct.review}
                                    </p>
                                </Card>
                            </div>
                            <RadioGroup
                                defaultValue="Save$60"
                                className="grid w-full max-w-[364px] grid-cols-3 gap-3 md:gap-5"
                            >
                                {product.map((option, index) => {
                                    const isActive =
                                        option?.id === currntProduct?.id
                                    return (
                                        <Card
                                            className={`relative cursor-pointer pb-3 ring-1 ring-transparent ${isActive && 'ring-black/20'}`}
                                            key={index}
                                            onClick={() =>
                                                setCurrntProduct(option)
                                            }
                                        >
                                            {isActive && (
                                                <div className="absolute -right-1 -top-1.5 grid size-3.5 place-items-center rounded-full bg-black dark:bg-white dark:ring-1 dark:ring-black">
                                                    <Check className="size-1.5 stroke-[5px] font-bold text-white dark:text-black" />
                                                </div>
                                            )}
                                            <div>
                                                <span
                                                    className={cn(
                                                        'block rounded-t-lg py-[7px] text-center text-[10px]/none font-semibold uppercase text-black',
                                                        option.saveMoney < 50
                                                            ? 'bg-[#DCFCE7]'
                                                            : option.saveMoney >
                                                                100
                                                                ? 'bg-[#FEE2E2]'
                                                                : 'bg-[#F3E8FF]',
                                                    )}
                                                >
                                                    Save ${option.saveMoney}
                                                </span>
                                                <div className="relative my-2.5 h-[76px] overflow-hidden px-2.5">
                                                    <Image
                                                        src={
                                                            option.image ||
                                                            `/images/dog-powder4.png`
                                                        }
                                                        alt="blog-img"
                                                        width={48}
                                                        height={76}
                                                        className="relative z-1 mx-auto h-full w-full object-contain"
                                                    ></Image>
                                                    <span className="absolute left-0 top-1/2 h-7 w-full -translate-y-1/2 -rotate-12 scale-110 bg-gray-300/50 dark:bg-gray-300/10"></span>
                                                </div>
                                                <div className="space-y-1 px-3">
                                                    <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                                        {option.price}
                                                    </h4>
                                                    <p className="text-[9px]/none font-medium">
                                                        inclusive of all taxes
                                                    </p>
                                                </div>
                                            </div>
                                        </Card>
                                    )
                                })}
                            </RadioGroup>
                            <div className="grid grid-cols-2 gap-4">
                                <Button size={'large'}>
                                    <ShoppingBag />
                                    Add to bag
                                </Button>
                                <Button
                                    variant={'outline-general'}
                                    size={'large'}
                                    type="button"
                                >
                                    <Heart />
                                    Wishlist
                                </Button>
                            </div>
                            <Card className="space-y-3 border border-gray-300 bg-gray-200 p-3 shadow-none dark:border-gray-300/10">
                                <div className="flex items-center gap-2 font-medium leading-tight text-black dark:text-white">
                                    <Truck className="size-[18px] shrink-0" />
                                    Delivery Options
                                </div>
                                <div className="relative w-full max-w-[300px]">
                                    <Input
                                        placeholder="Enter pin code"
                                        type="text"
                                        className="placeholder:text-black ltr:pr-16 rtl:pl-16 dark:placeholder:text-white bg-white"
                                    />
                                    <button
                                        type="button"
                                        className="absolute top-2.5 font-semibold leading-tight text-primary hover:text-black ltr:right-3 rtl:left-3 dark:hover:text-white"
                                    >
                                        Check
                                    </button>
                                </div>
                                <p className="text-xs/tight">
                                    Please enter PIN code to check delivery time
                                    & Pay on Delivery Availability
                                </p>
                            </Card>
                        </div>
                    </div>
                    <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-4 md:grid-cols-4">
                        <Card className="flex items-center gap-3 bg-warning/6! p-2.5 pr-2.5 shadow-none md:p-5">
                            <IconSupport className="size-7 shrink-0 sm:size-[38px]" />
                            <div className="space-y-1.5">
                                <h3 className="font-semibold leading-tight text-black dark:text-white">
                                    Support 24/7
                                </h3>
                                <p className="text-xs/tight">
                                    Deliciated 24/7 Support
                                </p>
                            </div>
                        </Card>
                        <Card className="flex items-center gap-3 bg-primary/6! p-2.5 pr-2.5 shadow-none md:p-5">
                            <IconCourierReturn className="size-7 shrink-0 sm:size-[38px]" />
                            <div className="space-y-1.5">
                                <h3 className="font-semibold leading-tight text-black dark:text-white">
                                    Easy Returns
                                </h3>
                                <p className="text-xs/tight">
                                    Shop With Confidence
                                </p>
                            </div>
                        </Card>
                        <Card className="flex items-center gap-3 bg-danger/6! p-2.5 pr-2.5 shadow-none md:p-5">
                            <IconCardPayment className="size-7 shrink-0 sm:size-[38px]" />
                            <div className="space-y-1.5">
                                <h3 className="font-semibold leading-tight text-black dark:text-white">
                                    Card Payment
                                </h3>
                                <p className="text-xs/tight">
                                    12 Months Installments
                                </p>
                            </div>
                        </Card>
                        <Card className="flex items-center gap-3 bg-success/6! p-2.5 pr-2.5 shadow-none md:p-5">
                            <IconTruck className="size-7 shrink-0 sm:size-[38px]" />
                            <div className="space-y-1.5">
                                <h3 className="font-semibold leading-tight text-black dark:text-white">
                                    Free Shipping
                                </h3>
                                <p className="text-xs/tight">
                                    Capped at $50 per order
                                </p>
                            </div>
                        </Card>
                    </div>
                    <Tabs defaultValue="Product benefits">
                        <TabsList className="overflow-x-auto border-b border-gray-300 dark:border-gray-700/50">
                            <div className="inline-flex gap-[30px] px-5 text-sm/[18px] font-semibold">
                                <TabsTrigger
                                    value="Product benefits"
                                    className="rounded-none border-b border-transparent bg-transparent! px-5 pt-0 data-[state=active]:border-primary"
                                >
                                    Product benefits
                                </TabsTrigger>
                                <TabsTrigger
                                    value="Ingredients & nutrition"
                                    className="rounded-none border-b border-transparent bg-transparent! px-5 pt-0 data-[state=active]:border-primary"
                                >
                                    Ingredients & nutrition
                                </TabsTrigger>
                                <TabsTrigger
                                    value="Feeding instructions"
                                    className="rounded-none border-b border-transparent bg-transparent! px-5 pt-0 data-[state=active]:border-primary"
                                >
                                    Feeding instructions
                                </TabsTrigger>
                            </div>
                        </TabsList>
                        <TabsContent
                            value="Product benefits"
                            className="space-y-[30px] pt-[30px]"
                        >
                            <ul className="list-disc space-y-4 leading-6 sm:leading-tight ltr:pl-6 rtl:pr-6">
                                <li>Care Instructions: Machine Wash</li>
                                <li>Fit Type: slim fit</li>
                                <li className="leading-6">
                                    100% BCI COTTON - Almo Men&apos;s Shorts are
                                    made of BCI (Better Cotton Initiative)
                                    Cotton designed to be stretchable & long
                                    lasting keeping you throughout the day.
                                    Choose product that&apos;s good for you &
                                    the earth
                                </li>
                                <li>
                                    DUAL POCKETS - Almo shorts ensure that all
                                    your belongings are safe with you.
                                </li>
                                <li>
                                    ELASTIC WITH DRAWSTRINGS - Stretchable
                                    waistband with adjustable drawstrings.
                                </li>
                                <li>
                                    Rise - Mid-Rise |Pockets - 2 | Occasion -
                                    Casual Everyday
                                </li>
                                <li>
                                    Material Type - 100% BCI Cotton | Fit Type -
                                    Slim Fit | Care Instruction
                                </li>
                            </ul>
                            <div className="space-y-2.5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    Features
                                </h4>
                                <p className="leading-[26px]">
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout.
                                </p>
                                <ul className="list-disc space-y-4 leading-tight ltr:pl-6 rtl:pr-6">
                                    <li>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing eli
                                    </li>
                                    <li>
                                        In non libero non mi scelerisque
                                        suscipit.
                                    </li>
                                    <li>
                                        Etiam at nisi nec nulla suscipit
                                        facilisis sed eu ex.
                                    </li>
                                    <li>
                                        Curabitur quis lectus ac dolor convallis
                                        consequat.
                                    </li>
                                    <li>
                                        Donec consectetur magna at velit aliquet
                                        hendrerit.
                                    </li>
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent
                            value="Ingredients & nutrition"
                            className="pt-[30px]"
                        >
                            <div className="space-y-2.5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    Ingredients & nutrition
                                </h4>
                                <p className="leading-[26px]">
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout.
                                </p>
                                <ul className="list-disc space-y-4 leading-tight ltr:pl-6 rtl:pr-6">
                                    <li>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing eli
                                    </li>
                                    <li>
                                        In non libero non mi scelerisque
                                        suscipit.
                                    </li>
                                    <li>
                                        Etiam at nisi nec nulla suscipit
                                        facilisis sed eu ex.
                                    </li>
                                    <li>
                                        Curabitur quis lectus ac dolor convallis
                                        consequat.
                                    </li>
                                    <li>
                                        Donec consectetur magna at velit aliquet
                                        hendrerit.
                                    </li>
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent
                            value="Feeding instructions"
                            className="pt-[30px]"
                        >
                            <ul className="list-disc space-y-4 leading-6 sm:leading-tight ltr:pl-6 rtl:pr-6">
                                <li>
                                    ELASTIC WITH DRAWSTRINGS - Stretchable
                                    waistband with adjustable drawstrings.
                                </li>
                                <li>
                                    Rise - Mid-Rise |Pockets - 2 | Occasion -
                                    Casual Everyday
                                </li>
                                <li>
                                    Material Type - 100% BCI Cotton | Fit Type -
                                    Slim Fit | Care Instruction
                                </li>
                            </ul>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsCard
