import PageHeading from '@/components/layout/page-heading'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ThumbsUp, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogList() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Blog List'} />

            <div className="mx-auto grid w-full max-w-[938px] gap-[13px] sm:grid-cols-2 md:grid-cols-3">
                <Card>
                    <CardContent className="space-y-4 p-3">
                        <Link
                            href="/blog-details"
                            className="mt-0! block rounded-sm bg-gray-200 p-2.5 ring-1 ring-gray-300 dark:bg-black-dark dark:ring-gray-300/10"
                        >
                            <Image
                                src="/images/blogcard-one.svg"
                                alt="blog-img"
                                width={180}
                                height={180}
                                className="mx-auto duration-300 hover:scale-105"
                            ></Image>
                        </Link>
                        <Badge variant="red">Marketing</Badge>
                        <div className="space-y-1.5">
                            <Link
                                href="/blog-details"
                                className="text-sm/tight font-semibold text-black duration-300 hover:text-primary dark:text-white inline-flex"
                            >
                                The Impact of Bankruptcy
                            </Link>
                            <p className="line-clamp-2 text-xs/normal font-medium">
                                Refund is the most popular payment gateways,
                                which is the most convenient to use for you.
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                className="inline-flex items-end gap-1.5 text-xs/tight font-semibold transition hover:text-black dark:hover:text-white"
                            >
                                <ThumbsUp className="size-4 shrink-0" />
                                120k
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-end gap-1.5 text-xs/tight font-semibold transition hover:text-black dark:hover:text-white"
                            >
                                <Users className="size-4 shrink-0" />
                                140k
                            </button>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="space-y-4 p-3">
                        <Link
                            href="/blog-details"
                            className="mt-0! block rounded-sm bg-gray-200 p-2.5 ring-1 ring-gray-300 dark:bg-black-dark dark:ring-gray-300/10"
                        >
                            <Image
                                src="/images/blogcard-two.svg"
                                alt="blog-img"
                                width={180}
                                height={180}
                                className="mx-auto duration-300 hover:scale-105"
                            ></Image>
                        </Link>
                        <Badge variant="purple">Marketing</Badge>
                        <div className="space-y-1.5">
                            <Link
                                href="/blog-details"
                                className="text-sm/tight font-semibold text-black duration-300 hover:text-primary dark:text-white inline-flex"
                            >
                                The Pros and Cons of Different Credit
                            </Link>
                            <p className="line-clamp-2 text-xs/normal font-medium">
                                Letters to customers are an essential element of
                                customer service. Here we have some ideas for
                                your
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                className="inline-flex items-end gap-1.5 text-xs/tight font-semibold transition hover:text-black dark:hover:text-white"
                            >
                                <ThumbsUp className="size-4 shrink-0" />
                                120k
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-end gap-1.5 text-xs/tight font-semibold transition hover:text-black dark:hover:text-white"
                            >
                                <Users className="size-4 shrink-0" />
                                140k
                            </button>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="space-y-4 p-3">
                        <Link
                            href="/blog-details"
                            className="mt-0! block rounded-sm bg-gray-200 p-2.5 ring-1 ring-gray-300 dark:bg-black-dark dark:ring-gray-300/10"
                        >
                            <Image
                                src="/images/blogcard-three.svg"
                                alt="blog-img"
                                width={180}
                                height={180}
                                className="mx-auto duration-300 hover:scale-105"
                            ></Image>
                        </Link>
                        <Badge variant="blue">Marketing</Badge>
                        <div className="space-y-1.5">
                            <Link
                                href="/blog-details"
                                className="text-sm/tight font-semibold text-black duration-300 hover:text-primary dark:text-white inline-flex"
                            >
                                Credit Utilization on Your Score
                            </Link>
                            <p className="line-clamp-2 text-xs/normal font-medium">
                                Learn how to write effective letters to your
                                customers and clients. Use this guide to build
                                your cus
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                className="inline-flex items-end gap-1.5 text-xs/tight font-semibold transition hover:text-black dark:hover:text-white"
                            >
                                <ThumbsUp className="size-4 shrink-0" />
                                120k
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-end gap-1.5 text-xs/tight font-semibold transition hover:text-black dark:hover:text-white"
                            >
                                <Users className="size-4 shrink-0" />
                                140k
                            </button>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="space-y-4 p-3">
                        <Link
                            href="/blog-details"
                            className="mt-0! block rounded-sm bg-gray-200 p-2.5 ring-1 ring-gray-300 dark:bg-black-dark dark:ring-gray-300/10"
                        >
                            <Image
                                src="/images/blogcard-four.svg"
                                alt="blog-img"
                                width={180}
                                height={180}
                                className="mx-auto duration-300 hover:scale-105"
                            ></Image>
                        </Link>
                        <Badge variant="green">Marketing</Badge>
                        <div className="space-y-1.5">
                            <Link
                                href="/blog-details"
                                className="text-sm/tight font-semibold text-black duration-300 hover:text-primary dark:text-white inline-flex"
                            >
                                Start a blog to reach your creative peak
                            </Link>
                            <p className="line-clamp-2 text-xs/normal font-medium">
                                Refund is the most popular payment gateways,
                                which is the most convenient to use for you.
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                className="inline-flex items-end gap-1.5 text-xs/tight font-semibold transition hover:text-black dark:hover:text-white"
                            >
                                <ThumbsUp className="size-4 shrink-0" />
                                120k
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-end gap-1.5 text-xs/tight font-semibold transition hover:text-black dark:hover:text-white"
                            >
                                <Users className="size-4 shrink-0" />
                                140k
                            </button>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="space-y-4 p-3">
                        <Link
                            href="/blog-details"
                            className="mt-0! block rounded-sm bg-gray-200 p-2.5 ring-1 ring-gray-300 dark:bg-black-dark dark:ring-gray-300/10"
                        >
                            <Image
                                src="/images/blogcard-five.svg"
                                alt="blog-img"
                                width={180}
                                height={180}
                                className="mx-auto duration-300 hover:scale-105"
                            ></Image>
                        </Link>
                        <Badge variant="orange">Marketing</Badge>
                        <div className="space-y-1.5">
                            <Link
                                href="/blog-details"
                                className="text-sm/tight font-semibold text-black duration-300 hover:text-primary dark:text-white inline-flex"
                            >
                                How does writing influence brand?
                            </Link>
                            <p className="line-clamp-2 text-xs/normal font-medium">
                                Letters to customers are an essential element of
                                customer service. Here we have some ideas for
                                your
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                className="inline-flex items-end gap-1.5 text-xs/tight font-semibold transition hover:text-black dark:hover:text-white"
                            >
                                <ThumbsUp className="size-4 shrink-0" />
                                120k
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-end gap-1.5 text-xs/tight font-semibold transition hover:text-black dark:hover:text-white"
                            >
                                <Users className="size-4 shrink-0" />
                                140k
                            </button>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="space-y-4 p-3">
                        <Link
                            href="/blog-details"
                            className="mt-0! block rounded-sm bg-gray-200 p-2.5 ring-1 ring-gray-300 dark:bg-black-dark dark:ring-gray-300/10"
                        >
                            <Image
                                src="/images/blogcard-six.svg"
                                alt="blog-img"
                                width={180}
                                height={180}
                                className="mx-auto duration-300 hover:scale-105"
                            ></Image>
                        </Link>
                        <Badge variant="red">Marketing</Badge>
                        <div className="space-y-1.5">
                            <Link
                                href="/blog-details"
                                className="text-sm/tight font-semibold text-black duration-300 hover:text-primary dark:text-white inline-flex"
                            >
                                The unseen of spending three Pixelgrade
                            </Link>
                            <p className="line-clamp-2 text-xs/normal font-medium">
                                Learn how to write effective letters to your
                                customers and clients. Use this guide to build
                                your cus
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                className="inline-flex items-end gap-1.5 text-xs/tight font-semibold transition hover:text-black dark:hover:text-white"
                            >
                                <ThumbsUp className="size-4 shrink-0" />
                                120k
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-end gap-1.5 text-xs/tight font-semibold transition hover:text-black dark:hover:text-white"
                            >
                                <Users className="size-4 shrink-0" />
                                140k
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
