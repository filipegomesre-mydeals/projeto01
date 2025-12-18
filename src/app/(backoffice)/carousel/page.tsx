'use client'
import PageHeading from '@/components/layout/page-heading'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'

const items = [
    {
        id: 1,
        image: '/images/blogcard-one.svg',
    },
    {
        id: 2,
        image: '/images/blogcard-two.svg',
    },
    {
        id: 3,
        image: '/images/blogcard-three.svg',
    },
    {
        id: 4,
        image: '/images/blogcard-four.svg',
    },
    {
        id: 5,
        image: '/images/blogcard-five.svg',
    },
]

export default function CarouselPage() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

    return (
        <div className="space-y-4">
            <PageHeading heading={'Carousel'} />

            <div className="grid gap-4 lg:gap-6 xl:grid-cols-2">
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Horizontal Orientation
                    </CardTitle>
                    <CardContent className="relative flex grow items-center justify-center gap-4 px-2.5 py-4 sm:px-4 lg:py-6">
                        <Carousel className="w-full max-w-72">
                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card className="p-4 shadow-none ring-1 ring-gray-300/90 ring-inset sm:p-6 dark:bg-black dark:shadow-none dark:ring-white/10">
                                                <Image
                                                    src={
                                                        items[index]?.image ||
                                                        '/images/blogcard-one.svg'
                                                    }
                                                    alt="blog-img"
                                                    width={180}
                                                    height={180}
                                                    className="h-full max-h-50 w-full object-contain"
                                                ></Image>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </CardContent>
                </Card>

                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Vertical Orientation
                    </CardTitle>
                    <CardContent className="relative flex grow justify-center gap-4 px-2.5 py-13 sm:px-4 lg:py-20">
                        <Carousel
                            opts={{
                                align: 'start',
                            }}
                            orientation="vertical"
                            className="w-full max-w-xs"
                        >
                            <CarouselContent className="-mt-1 h-[200px]">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="basis-1/2 pt-1"
                                    >
                                        <div className="p-1">
                                            <Card className="p-4 shadow-none ring-1 ring-gray-300/90 ring-inset sm:p-6 dark:bg-black dark:shadow-none dark:ring-white/10">
                                                <Image
                                                    src={
                                                        items[index]?.image ||
                                                        '/images/blogcard-one.svg'
                                                    }
                                                    alt="blog-img"
                                                    width={180}
                                                    height={180}
                                                    className="h-full max-h-20 w-full object-contain"
                                                ></Image>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </CardContent>
                </Card>

                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        API
                    </CardTitle>
                    <CardContent className="relative flex grow flex-col items-center justify-center gap-4 px-2.5 py-4 sm:px-4 lg:py-6">
                        <Carousel setApi={setApi} className="w-full max-w-xs">
                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                        <Card className="p-4 shadow-none ring-1 ring-gray-300/90 ring-inset sm:p-6 dark:bg-black dark:shadow-none dark:ring-white/10">
                                            <Image
                                                src={
                                                    items[index]?.image ||
                                                    '/images/blogcard-one.svg'
                                                }
                                                alt="blog-img"
                                                width={180}
                                                height={180}
                                                className="h-full max-h-50 w-full object-contain"
                                            ></Image>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <div className="pt-1 text-center text-sm">
                            Slide{' '}
                            <span className="font-semibold text-black dark:text-white">
                                {current}
                            </span>{' '}
                            of{' '}
                            <span className="font-semibold text-black dark:text-white">
                                {count}
                            </span>
                        </div>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Autoplay
                    </CardTitle>
                    <CardContent className="relative flex grow flex-col items-center justify-center gap-4 px-2.5 py-4 sm:px-4 lg:py-6">
                        <Carousel
                            plugins={[plugin.current]}
                            className="w-full max-w-xs"
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                        >
                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card className="p-4 shadow-none ring-1 ring-gray-300/90 ring-inset sm:p-6 dark:bg-black dark:shadow-none dark:ring-white/10">
                                                <Image
                                                    src={
                                                        items[index]?.image ||
                                                        '/images/blogcard-one.svg'
                                                    }
                                                    alt="blog-img"
                                                    width={180}
                                                    height={180}
                                                    className="h-full max-h-50 w-full object-contain"
                                                ></Image>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </CardContent>
                </Card>

                <Card className="flex flex-col xl:col-span-2">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Sizes
                    </CardTitle>
                    <CardContent className="relative flex grow items-center justify-center gap-4 px-2.5 py-4 md:px-14 lg:py-6 xl:px-4">
                        <Carousel
                            opts={{
                                align: 'start',
                            }}
                            className="w-full sm:max-w-3xl"
                        >
                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="basis-1/3"
                                    >
                                        <Card className="p-4 shadow-none ring-1 ring-gray-300/90 ring-inset sm:p-6 dark:bg-black dark:shadow-none dark:ring-white/10">
                                            <Image
                                                src={
                                                    items[index]?.image ||
                                                    '/images/blogcard-one.svg'
                                                }
                                                alt="blog-img"
                                                width={180}
                                                height={180}
                                                className="h-full max-h-50 w-full object-contain"
                                            ></Image>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
