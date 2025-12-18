import CountsUp from '@/components/custom/counts-up'
import IconFigma from '@/components/icons/icon-figma'
import IconGreaterthan from '@/components/icons/icon-greaterthan'
import { Button } from '@/components/ui/button'
import { List, Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Documentation() {
    return (
        <>
            <div className="mb-10 overflow-hidden sm:mb-0">
                <div className="border-b border-gray-300 bg-linear-to-b from-primary/0 to-primary/2 py-14 sm:rounded-[50%] sm:pb-80 md:-mx-10 lg:pt-[100px]">
                    <div className="container relative">
                        <div className="absolute -inset-x-5 -top-8 hidden items-center justify-between md:flex lg:top-0 xl:inset-x-24 2xl:inset-x-40">
                            <Image
                                src="/images/html.svg"
                                width={100}
                                height={100}
                                alt="HTML"
                                className="size-20 lg:size-28"
                            />
                            <Image
                                src="/images/tailwind.svg"
                                width={80}
                                height={80}
                                alt="Tailwind"
                                className="size-16 lg:size-20"
                            />
                        </div>
                        <div className="absolute -inset-x-10 bottom-14 hidden items-center justify-between md:flex lg:inset-x-10 xl:inset-x-44 2xl:inset-x-64">
                            <Image
                                src="/images/next-js.svg"
                                width={60}
                                height={60}
                                alt="Next js"
                                className="size-16 lg:size-20"
                            />
                            <Image
                                src="/images/shad-cn.svg"
                                width={60}
                                height={60}
                                alt="Shad cn"
                                className="-mt-14 size-16 lg:size-20"
                            />
                        </div>
                        <div className="mx-auto w-full max-w-[950px] space-y-7 text-center sm:space-y-10 md:space-y-14">
                            <div className="space-y-2 xl:space-y-0">
                                <h1 className="text-balance text-[28px]/snug -tracking-wide sm:text-3xl md:text-5xl/snug lg:text-[70px]/snug">
                                    <span className="sm:block">
                                        Elevate Your Project with&nbsp;
                                    </span>
                                    <span className="bg-linear-to-r from-[#7C3AED] to-[#A78BFA] to-100% bg-clip-text font-semibold text-transparent">
                                        NexaDash
                                    </span>
                                    &nbsp; Admin Dashboard
                                </h1>
                                <p className="text-gray">
                                    A professional website will help you take
                                    the next step towards success.
                                </p>
                            </div>
                            <div className="gradient-border items-center justify-center overflow-hidden rounded-full p-px md:inline-flex">
                                <div className="rounded-full bg-white/90">
                                    <div className="gradient-bar relative flex flex-wrap items-center justify-center gap-2 rounded-full p-2.5 sm:gap-3 sm:p-4">
                                        <div className="flex items-center gap-1.5 font-semibold">
                                            <IconFigma className="hidden size-5 shrink-0 sm:block" />
                                            <p className="text-sm/tight sm:text-base">
                                                Design File Available
                                            </p>
                                        </div>
                                        <div className="flex gap-3 text-center font-semibold sm:items-center sm:text-left">
                                            <IconGreaterthan className="hidden size-3.5 shrink-0 sm:block" />
                                            <p className="text-sm/tight sm:text-base">
                                                In order to get design Figma
                                                files Contact us via{' '}
                                                <Link
                                                    href="https://sbthemes.freshdesk.com/support/tickets/new"
                                                    target="_blank"
                                                    className="text-success transition hover:opacity-70"
                                                >
                                                    Support
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-3 sm:gap-5">
                                <Link href="#pages">
                                    <Button
                                        variant={'black'}
                                        type="button"
                                        size={'extralarge'}
                                        className='bg-black! text-white! hover:bg-[#3C3C3D]!'
                                    >
                                        <List />
                                        Explore Features
                                    </Button>
                                </Link>
                                <Link href="/" target="_blank">
                                    <Button
                                        type="button"
                                        variant={'outline-general'}
                                        size={'extralarge'}
                                        className='ring-1! ring-inset ring-gray-300! bg-white! text-black! hover:bg-gray-200!'
                                    >
                                        <Play />
                                        View Demo
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="to-white/4 relative mx-auto w-full max-w-[1280px] rounded-[20px] bg-linear-to-b from-white to-100% p-3 shadow-[0_24px_44px_3px_rgba(0,0,0,0.09),0_7px_14px_-2px_rgba(0,0,0,0.09),0_2px_5px_-1px_rgba(0,0,0,0.09),0_1px_1px_0_rgba(0,0,0,0.09)] sm:-mt-[270px] sm:p-5 sm:pt-10 lg:p-[30px] lg:pt-16">
                    <div className="absolute left-5 top-4 hidden items-center gap-3 sm:flex lg:left-8 lg:top-8">
                        <span className="size-2.5 rounded-full bg-danger lg:size-3.5"></span>
                        <span className="size-2.5 rounded-full bg-warning lg:size-3.5"></span>
                        <span className="size-2.5 rounded-full bg-success lg:size-3.5"></span>
                    </div>
                    <Image
                        src="/images/nexa-dashboard.png"
                        width={1220}
                        height={770}
                        alt="Dashboard"
                    />
                </div>
            </div>
            <div className="bg-black 2xl:bg-transparent">
                <div className="container">
                    <div className="-mt-32 rounded-[20px] bg-black pb-10 pt-40 sm:-mt-64 sm:px-10 sm:pt-72 lg:-mt-[432px] lg:px-20 lg:pb-20 lg:pt-[512px]">
                        <div className="mx-auto grid w-full max-w-[1136px] grid-cols-2 gap-7 md:grid-cols-4 md:gap-10 2xl:gap-28">
                            <div className="space-y-2.5 border-b border-light-orange pb-3 md:pb-5">
                                <p className="text-gray-500">Loved By</p>
                                <CountsUp
                                    className="block text-[26px] font-semibold text-white sm:text-3xl md:text-4xl"
                                    start={0}
                                    end={110}
                                    duration={2}
                                    delay={0}
                                    suffix={'k+'}
                                />
                            </div>
                            <div className="space-y-2.5 border-b border-light-orange pb-3 md:pb-5">
                                <p className="text-gray-500">Rated 5 Stars</p>
                                <CountsUp
                                    className="block text-[26px] font-semibold text-white sm:text-3xl md:text-4xl"
                                    start={0}
                                    end={8000}
                                    duration={2}
                                    delay={0}
                                    suffix={'+'}
                                />
                            </div>
                            <div className="space-y-2.5 border-b border-light-orange pb-3 md:pb-5">
                                <p className="text-gray-500">End Users</p>
                                <CountsUp
                                    className="block text-[26px] font-semibold text-white sm:text-3xl md:text-4xl"
                                    start={0}
                                    end={100}
                                    duration={2}
                                    delay={0}
                                    suffix={'M+'}
                                />
                            </div>
                            <div className="space-y-2.5 border-b border-light-orange pb-3 md:pb-5">
                                <p className="text-gray-500">On Theme Market</p>
                                <CountsUp
                                    className="block text-[26px] font-semibold text-white sm:text-3xl md:text-4xl"
                                    start={0}
                                    end={11}
                                    duration={2}
                                    delay={0}
                                    suffix={' Years'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="pages" className="space-y-14 lg:space-y-20 py-14 lg:pb-20 lg:pt-28">
                <div className="container">
                    <div className="mx-auto w-full max-w-[464px] space-y-2.5 text-center">
                        <h2 className="text-2xl font-bold sm:text-3xl">
                            Pages & Components
                        </h2>
                        <p className="leading-6 text-gray">
                            Over 100 pages, 40+ components and 1000+ elements
                            built with Tailwind CSS.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-5 sm:grid-cols-2 md:gap-[30px] lg:mt-14 xl:grid-cols-3">
                        <Link
                            href="/"
                            target="_blank"
                            className="group relative overflow-hidden rounded-[10px] border border-gray-300 bg-light-orange/20 pl-4 pt-12 lg:pt-[60px]"
                        >
                            <span className="absolute left-1/2 top-2.5 block -translate-x-1/2 -rotate-1 whitespace-nowrap text-xl font-extrabold uppercase -tracking-tight opacity-10 lg:top-4 lg:text-3xl">
                                Sales Dashboard
                            </span>
                            <Image
                                src="/images/sales-dashboard.png"
                                width={500}
                                height={362}
                                alt="Sales Dashboard"
                                className="-rotate-1 rounded-t-lg shadow-[-3px_3px_60px_0_rgba(0,0,0,0.1)] duration-300 group-hover:scale-105"
                            />
                        </Link>
                        <Link
                            href="/crypto-dashboard"
                            target="_blank"
                            className="group relative overflow-hidden rounded-[10px] border border-gray-300 bg-success-light/10 pl-4 pt-12 lg:pt-[60px]"
                        >
                            <span className="absolute left-1/2 top-2.5 block -translate-x-1/2 -rotate-1 whitespace-nowrap text-xl font-extrabold uppercase -tracking-tight opacity-10 lg:top-4 lg:text-3xl">
                                crypto Dashboard
                            </span>
                            <Image
                                src="/images/crypto-dashboard.png"
                                width={500}
                                height={362}
                                alt="Crypto Dashboard"
                                className="-rotate-1 rounded-t-lg shadow-[-3px_3px_60px_0_rgba(0,0,0,0.1)] duration-300 group-hover:scale-105"
                            />
                        </Link>
                        <Link
                            href="/chart"
                            target="_blank"
                            className="group relative overflow-hidden rounded-[10px] border border-gray-300 bg-light-blue/10 pl-4 pt-12 lg:pt-[60px]"
                        >
                            <span className="absolute left-1/2 top-2.5 block -translate-x-1/2 -rotate-1 whitespace-nowrap text-xl font-extrabold uppercase -tracking-tight opacity-10 lg:top-4 lg:text-3xl">
                                chart
                            </span>
                            <Image
                                src="/images/chart.png"
                                width={500}
                                height={362}
                                alt="chart"
                                className="-rotate-1 rounded-t-lg shadow-[-3px_3px_60px_0_rgba(0,0,0,0.1)] duration-300 group-hover:scale-105"
                            />
                        </Link>
                        <Link
                            href="/scrumboard"
                            target="_blank"
                            className="group relative overflow-hidden rounded-[10px] border border-gray-300 bg-light-purple/20 pl-4 pt-12 lg:pt-[60px]"
                        >
                            <span className="absolute left-1/2 top-2.5 block -translate-x-1/2 -rotate-1 whitespace-nowrap text-xl font-extrabold uppercase -tracking-tight opacity-10 lg:top-4 lg:text-3xl">
                                Scrum board
                            </span>
                            <Image
                                src="/images/scrumboard.png"
                                width={500}
                                height={362}
                                alt="Scrum board"
                                className="-rotate-1 rounded-t-lg shadow-[-3px_3px_60px_0_rgba(0,0,0,0.1)] duration-300 group-hover:scale-105"
                            />
                        </Link>
                        <Link
                            href="/chat"
                            target="_blank"
                            className="group relative overflow-hidden rounded-[10px] border border-gray-300 bg-success-light/10 pl-4 pt-12 lg:pt-[60px]"
                        >
                            <span className="absolute left-1/2 top-2.5 block -translate-x-1/2 -rotate-1 whitespace-nowrap text-xl font-extrabold uppercase -tracking-tight opacity-10 lg:top-4 lg:text-3xl">
                                chat
                            </span>
                            <Image
                                src="/images/chat.png"
                                width={500}
                                height={362}
                                alt="chat"
                                className="-rotate-1 rounded-t-lg shadow-[-3px_3px_60px_0_rgba(0,0,0,0.1)] duration-300 group-hover:scale-105"
                            />
                        </Link>
                        <Link
                            href="/product-card"
                            target="_blank"
                            className="group relative overflow-hidden rounded-[10px] border border-gray-300 bg-light-blue/10 pl-4 pt-12 lg:pt-[60px]"
                        >
                            <span className="absolute left-1/2 top-2.5 block -translate-x-1/2 -rotate-1 whitespace-nowrap text-xl font-extrabold uppercase -tracking-tight opacity-10 lg:top-4 lg:text-3xl">
                                ecommerce product
                            </span>
                            <Image
                                src="/images/ecommerce-product.png"
                                width={500}
                                height={362}
                                alt="ecommerce product"
                                className="-rotate-1 rounded-t-lg shadow-[-3px_3px_60px_0_rgba(0,0,0,0.1)] duration-300 group-hover:scale-105"
                            />
                        </Link>
                    </div>
                </div>

                <div className="container">
                    <div className="rounded-[20px] border border-gray-300 bg-linear-to-b from-primary/2 to-primary/0 to-100% px-5 py-10 lg:px-10 xl:p-20">
                        <div className="space-y-2.5">
                            <h2 className="text-2xl font-bold sm:text-3xl">
                                Components, Core Elements, and more!
                            </h2>
                            <p className="w-full max-w-[464px] leading-6 text-gray">
                                The list of Core Elements, Base Components, and
                                more within our design system.
                            </p>
                        </div>
                        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mt-14 xl:grid-cols-4 xl:gap-8">
                            <div className="overflow-hidden rounded-[20px] border border-gray-300">
                                <div className="mx-auto py-8 lg:py-14">
                                    <Image
                                        src="/images/icon-color.svg"
                                        width={100}
                                        height={100}
                                        alt="Icon"
                                        className="mx-auto size-20 rounded-full shadow-[0_0_10px_0_rgba(0,0,0,0.03)] lg:size-[100px]"
                                    />
                                </div>
                                <div className="space-y-1.5 border-t border-gray-300 bg-white p-5 font-semibold lg:text-lg/tight">
                                    Color Palette
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[20px] border border-gray-300">
                                <div className="mx-auto py-8 lg:py-14">
                                    <Image
                                        src="/images/icon-avatar.svg"
                                        width={100}
                                        height={100}
                                        alt="Icon"
                                        className="mx-auto size-20 rounded-full shadow-[0_0_10px_0_rgba(0,0,0,0.03)] lg:size-[100px]"
                                    />
                                </div>
                                <div className="space-y-1.5 border-t border-gray-300 bg-white p-5 font-semibold lg:text-lg/tight">
                                    Avatar
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[20px] border border-gray-300">
                                <div className="mx-auto py-8 lg:py-14">
                                    <Image
                                        src="/images/icon-modal.svg"
                                        width={100}
                                        height={100}
                                        alt="Icon"
                                        className="mx-auto size-20 rounded-full shadow-[0_0_10px_0_rgba(0,0,0,0.03)] lg:size-[100px]"
                                    />
                                </div>
                                <div className="space-y-1.5 border-t border-gray-300 bg-white p-5 font-semibold lg:text-lg/tight">
                                    Modal
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[20px] border border-gray-300">
                                <div className="mx-auto py-8 lg:py-14">
                                    <Image
                                        src="/images/icon-alert.svg"
                                        width={100}
                                        height={100}
                                        alt="Icon"
                                        className="mx-auto size-20 rounded-full shadow-[0_0_10px_0_rgba(0,0,0,0.03)] lg:size-[100px]"
                                    />
                                </div>
                                <div className="space-y-1.5 border-t border-gray-300 bg-white p-5 font-semibold lg:text-lg/tight">
                                    Alert, Notification & Toast
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[20px] border border-gray-300">
                                <div className="mx-auto py-8 lg:py-14">
                                    <Image
                                        src="/images/icon-button.svg"
                                        width={100}
                                        height={100}
                                        alt="Icon"
                                        className="mx-auto size-20 rounded-full shadow-[0_0_10px_0_rgba(0,0,0,0.03)] lg:size-[100px]"
                                    />
                                </div>
                                <div className="h-full space-y-1.5 border-t border-gray-300 bg-white p-5 font-semibold lg:text-lg/tight">
                                    Button
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[20px] border border-gray-300">
                                <div className="mx-auto py-8 lg:py-14">
                                    <Image
                                        src="/images/icon-table.svg"
                                        width={100}
                                        height={100}
                                        alt="Icon"
                                        className="mx-auto size-20 rounded-full shadow-[0_0_10px_0_rgba(0,0,0,0.03)] lg:size-[100px]"
                                    />
                                </div>
                                <div className="h-full space-y-1.5 border-t border-gray-300 bg-white p-5 font-semibold lg:text-lg/tight">
                                    Table
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[20px] border border-gray-300">
                                <div className="mx-auto py-8 lg:py-14">
                                    <Image
                                        src="/images/dropdown.svg"
                                        width={100}
                                        height={100}
                                        alt="Icon"
                                        className="mx-auto size-20 rounded-full shadow-[0_0_10px_0_rgba(0,0,0,0.03)] lg:size-[100px]"
                                    />
                                </div>
                                <div className="space-y-1.5 border-t border-gray-300 bg-white p-5 font-semibold lg:text-lg/tight">
                                    Dropdown
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-[20px] border border-gray-300">
                                <div className="mx-auto py-8 lg:py-14">
                                    <Image
                                        src="/images/checkbox.svg"
                                        width={100}
                                        height={100}
                                        alt="Icon"
                                        className="mx-auto size-20 rounded-full shadow-[0_0_10px_0_rgba(0,0,0,0.03)] lg:size-[100px]"
                                    />
                                </div>
                                <div className="space-y-1.5 border-t border-gray-300 bg-white p-5 font-semibold lg:text-lg/tight">
                                    Checkbox
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative">
                    <Image
                        src="/images/quote.png"
                        width={640}
                        height={480}
                        alt="Quote"
                        className="absolute bottom-0 left-4 w-72 sm:w-96 lg:w-[640px]"
                    />
                    <div className="relative rounded-[20px] border border-gray-300 bg-linear-to-b from-danger/2 to-danger/0 to-100% px-5 py-10 lg:px-10 xl:p-20">
                        <div className="mx-auto w-full max-w-xl space-y-2.5 text-center">
                            <h2 className="text-2xl font-bold sm:text-3xl">
                                Real Customers Reviews
                            </h2>
                            <p className="leading-6 text-gray">
                                See what our&nbsp;
                                <span className="bg-linear-to-r from-[#7C3AED] to-[#A78BFA] to-100% bg-clip-text font-semibold text-transparent">
                                    customers have to say about their experience
                                </span>
                                &nbsp;with our products.
                            </p>
                        </div>
                        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
                            <div className="space-y-5 lg:space-y-8">
                                <div className="space-y-5 rounded-[20px] bg-white p-5 shadow-[0_0_0_1px_rgba(234,234,234,1),0_1px_3px_0_rgba(143,143,143,0.2),inset_0_-2.4px_0_0_rgba(61,61,61,0.04),0_6px_13px_0_rgba(0,0,0,0.04),0_53px_32px_0_rgba(0,0,0,0.02)]">
                                    <p className="leading-relaxed">
                                        Last night I showed the final version of{' '}
                                        <span className="text-primary">
                                            NexaDash
                                        </span>{' '}
                                        and you don’t even realize what awaits
                                        you, just wow 🫠
                                    </p>
                                    <div className="flex items-center">
                                        <span className="size-2 rounded-[2px] border border-gray-500 bg-gray-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]" />
                                        <span className="h-px w-full bg-gray-300" />
                                        <span className="size-2 rounded-[2px] border border-gray-500 bg-gray-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]" />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2.5">
                                        <span className="size-9 shrink-0 overflow-hidden rounded-full">
                                            <Image
                                                src="/images/avatar.svg"
                                                width={36}
                                                height={36}
                                                alt="Avatar"
                                                className="size-full object-cover"
                                            />
                                        </span>
                                        <div className="space-y-0.5">
                                            <h3 className="text-sm/tight font-semibold">
                                                John Lewis
                                            </h3>
                                            <p className="text-sm/tight text-gray">
                                                UI/UX Designer
                                            </p>
                                        </div>
                                        <span className="ml-auto block text-xs font-semibold uppercase tracking-wider text-gray">
                                            Oct 15, 2023
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-5 rounded-[20px] bg-white p-5 shadow-[0_0_0_1px_rgba(234,234,234,1),0_1px_3px_0_rgba(143,143,143,0.2),inset_0_-2.4px_0_0_rgba(61,61,61,0.04),0_6px_13px_0_rgba(0,0,0,0.04),0_53px_32px_0_rgba(0,0,0,0.02)]">
                                    <p className="leading-relaxed">
                                        Best UI kit in the game
                                        <span className="font-semibold text-primary">
                                            just got better.
                                        </span>
                                        Incredible stuff.
                                    </p>
                                    <div className="flex items-center">
                                        <span className="size-2 rounded-[2px] border border-gray-500 bg-gray-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]" />
                                        <span className="h-px w-full bg-gray-300" />
                                        <span className="size-2 rounded-[2px] border border-gray-500 bg-gray-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]" />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2.5">
                                        <span className="size-9 shrink-0 overflow-hidden rounded-full">
                                            <Image
                                                src="/images/avatar-two.svg"
                                                width={36}
                                                height={36}
                                                alt="Avatar"
                                                className="size-full object-cover"
                                            />
                                        </span>
                                        <div className="space-y-0.5">
                                            <h3 className="text-sm/tight font-semibold">
                                                John Lewis
                                            </h3>
                                            <p className="text-sm/tight text-gray">
                                                UI/UX Designer
                                            </p>
                                        </div>
                                        <span className="ml-auto block text-xs font-semibold uppercase tracking-wider text-gray">
                                            Oct 15, 2023
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-5 rounded-[20px] bg-white p-5 shadow-[0_0_0_1px_rgba(234,234,234,1),0_1px_3px_0_rgba(143,143,143,0.2),inset_0_-2.4px_0_0_rgba(61,61,61,0.04),0_6px_13px_0_rgba(0,0,0,0.04),0_53px_32px_0_rgba(0,0,0,0.02)]">
                                    <p className="leading-relaxed">
                                        Last night, I was busy with the final
                                        version of{' '}
                                        <span className="font-semibold text-primary">
                                            NexaDash
                                        </span>{' '}
                                        Absolutely stunning, folks! The best UI
                                        Kit I&apos;ve ever seen! 💯
                                    </p>
                                    <div className="flex items-center">
                                        <span className="size-2 rounded-[2px] border border-gray-500 bg-gray-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]" />
                                        <span className="h-px w-full bg-gray-300" />
                                        <span className="size-2 rounded-[2px] border border-gray-500 bg-gray-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]" />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2.5">
                                        <span className="size-9 shrink-0 overflow-hidden rounded-full">
                                            <Image
                                                src="/images/avatar-two.svg"
                                                width={36}
                                                height={36}
                                                alt="Avatar"
                                                className="size-full object-cover"
                                            />
                                        </span>
                                        <div className="space-y-0.5">
                                            <h3 className="text-sm/tight font-semibold">
                                                John Lewis
                                            </h3>
                                            <p className="text-sm/tight text-gray">
                                                UI/UX Designer
                                            </p>
                                        </div>
                                        <span className="ml-auto block text-xs font-semibold uppercase tracking-wider text-gray">
                                            Oct 15, 2023
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-5 lg:space-y-8">
                                <div className="space-y-5 rounded-[20px] bg-white p-5 shadow-[0_0_0_1px_rgba(234,234,234,1),0_1px_3px_0_rgba(143,143,143,0.2),inset_0_-2.4px_0_0_rgba(61,61,61,0.04),0_6px_13px_0_rgba(0,0,0,0.04),0_53px_32px_0_rgba(0,0,0,0.02)]">
                                    <p className="leading-relaxed">
                                        Finally got my hands on{' '}
                                        <span className="text-primary">
                                            NexaDash
                                        </span>{' '}
                                        – a design system that&apos;s pure gold.
                                        Worth every last penny spent!
                                    </p>
                                    <div className="flex items-center">
                                        <span className="size-2 rounded-[2px] border border-gray-500 bg-gray-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]" />
                                        <span className="h-px w-full bg-gray-300" />
                                        <span className="size-2 rounded-[2px] border border-gray-500 bg-gray-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]" />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2.5">
                                        <span className="size-9 shrink-0 overflow-hidden rounded-full">
                                            <Image
                                                src="/images/avatar-four.svg"
                                                width={36}
                                                height={36}
                                                alt="Avatar"
                                                className="size-full object-cover"
                                            />
                                        </span>
                                        <div className="space-y-0.5">
                                            <h3 className="text-sm/tight font-semibold">
                                                John Lewis
                                            </h3>
                                            <p className="text-sm/tight text-gray">
                                                UI/UX Designer
                                            </p>
                                        </div>
                                        <span className="ml-auto block text-xs font-semibold uppercase tracking-wider text-gray">
                                            Oct 15, 2023
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-5 rounded-[20px] bg-white p-5 shadow-[0_0_0_1px_rgba(234,234,234,1),0_1px_3px_0_rgba(143,143,143,0.2),inset_0_-2.4px_0_0_rgba(61,61,61,0.04),0_6px_13px_0_rgba(0,0,0,0.04),0_53px_32px_0_rgba(0,0,0,0.02)]">
                                    <p className="leading-relaxed">
                                        <span className="text-primary">
                                            NexaDash
                                        </span>{' '}
                                        will change how you design for the
                                        better. 😅 Never fails 😎
                                    </p>
                                    <div className="flex items-center">
                                        <span className="size-2 rounded-[2px] border border-gray-500 bg-gray-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]" />
                                        <span className="h-px w-full bg-gray-300" />
                                        <span className="size-2 rounded-[2px] border border-gray-500 bg-gray-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]" />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2.5">
                                        <span className="size-9 shrink-0 overflow-hidden rounded-full">
                                            <Image
                                                src="/images/avatar-eleven.svg"
                                                width={36}
                                                height={36}
                                                alt="Avatar"
                                                className="size-full object-cover"
                                            />
                                        </span>
                                        <div className="space-y-0.5">
                                            <h3 className="text-sm/tight font-semibold">
                                                John Lewis
                                            </h3>
                                            <p className="text-sm/tight text-gray">
                                                UI/UX Designer
                                            </p>
                                        </div>
                                        <span className="ml-auto block text-xs font-semibold uppercase tracking-wider text-gray">
                                            Oct 15, 2023
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-5 rounded-[20px] bg-white p-5 shadow-[0_0_0_1px_rgba(234,234,234,1),0_1px_3px_0_rgba(143,143,143,0.2),inset_0_-2.4px_0_0_rgba(61,61,61,0.04),0_6px_13px_0_rgba(0,0,0,0.04),0_53px_32px_0_rgba(0,0,0,0.02)]">
                                    <p className="leading-relaxed">
                                        <span className="font-semibold text-primary">
                                            NexaDash
                                        </span>{' '}
                                        is amazing and it&apos;s a beast! So
                                        well thought out and detailed and you
                                        can see the hours put into making this.
                                        Thanks again!
                                    </p>
                                    <div className="flex items-center">
                                        <span className="size-2 rounded-[2px] border border-gray-500 bg-gray-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]" />
                                        <span className="h-px w-full bg-gray-300" />
                                        <span className="size-2 rounded-[2px] border border-gray-500 bg-gray-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]" />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2.5">
                                        <span className="size-9 shrink-0 overflow-hidden rounded-full">
                                            <Image
                                                src="/images/avatar-two.svg"
                                                width={36}
                                                height={36}
                                                alt="Avatar"
                                                className="size-full object-cover"
                                            />
                                        </span>
                                        <div className="space-y-0.5">
                                            <h3 className="text-sm/tight font-semibold">
                                                John Lewis
                                            </h3>
                                            <p className="text-sm/tight text-gray">
                                                UI/UX Designer
                                            </p>
                                        </div>
                                        <span className="ml-auto block text-xs font-semibold uppercase tracking-wider text-gray">
                                            Oct 15, 2023
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-5 lg:space-y-8">
                                <div className="space-y-5 rounded-[20px] bg-white p-5 shadow-[0_0_0_1px_rgba(234,234,234,1),0_1px_3px_0_rgba(143,143,143,0.2),inset_0_-2.4px_0_0_rgba(61,61,61,0.04),0_6px_13px_0_rgba(0,0,0,0.04),0_53px_32px_0_rgba(0,0,0,0.02)]">
                                    <p className="leading-relaxed">
                                        Best UI design system on Figma. Looking
                                        forward to digging through it again.
                                    </p>
                                    <div className="flex items-center">
                                        <span className="size-2 rounded-[2px] border border-gray-500 bg-gray-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]" />
                                        <span className="h-px w-full bg-gray-300" />
                                        <span className="size-2 rounded-[2px] border border-gray-500 bg-gray-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]" />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2.5">
                                        <span className="size-9 shrink-0 overflow-hidden rounded-full">
                                            <Image
                                                src="/images/avatar-four.svg"
                                                width={36}
                                                height={36}
                                                alt="Avatar"
                                                className="size-full object-cover"
                                            />
                                        </span>
                                        <div className="space-y-0.5">
                                            <h3 className="text-sm/tight font-semibold">
                                                John Lewis
                                            </h3>
                                            <p className="text-sm/tight text-gray">
                                                UI/UX Designer
                                            </p>
                                        </div>
                                        <span className="ml-auto block text-xs font-semibold uppercase tracking-wider text-gray">
                                            Oct 15, 2023
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-5 rounded-[20px] bg-white p-5 shadow-[0_0_0_1px_rgba(234,234,234,1),0_1px_3px_0_rgba(143,143,143,0.2),inset_0_-2.4px_0_0_rgba(61,61,61,0.04),0_6px_13px_0_rgba(0,0,0,0.04),0_53px_32px_0_rgba(0,0,0,0.02)]">
                                    <div className="space-y-2.5">
                                        <p className="leading-relaxed">
                                            A world-class design system project
                                            is currently underway. I&apos;ve
                                            been fortunate enough to beta test
                                            it.
                                        </p>
                                        <p className="leading-relaxed">
                                            Keep tracking this - it might turn
                                            into the perfect design system for
                                            your upcoming side project or new
                                            SaaS platform.
                                        </p>
                                        <p>Stay tuned!</p>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="size-2 rounded-[2px] border border-gray-500 bg-gray-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]" />
                                        <span className="h-px w-full bg-gray-300" />
                                        <span className="size-2 rounded-[2px] border border-gray-500 bg-gray-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]" />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2.5">
                                        <span className="size-9 shrink-0 overflow-hidden rounded-full">
                                            <Image
                                                src="/images/avatar-eleven.svg"
                                                width={36}
                                                height={36}
                                                alt="Avatar"
                                                className="size-full object-cover"
                                            />
                                        </span>
                                        <div className="space-y-0.5">
                                            <h3 className="text-sm/tight font-semibold">
                                                John Lewis
                                            </h3>
                                            <p className="text-sm/tight text-gray">
                                                UI/UX Designer
                                            </p>
                                        </div>
                                        <span className="ml-auto block text-xs font-semibold uppercase tracking-wider text-gray">
                                            Oct 15, 2023
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-5 rounded-[20px] bg-white p-5 shadow-[0_0_0_1px_rgba(234,234,234,1),0_1px_3px_0_rgba(143,143,143,0.2),inset_0_-2.4px_0_0_rgba(61,61,61,0.04),0_6px_13px_0_rgba(0,0,0,0.04),0_53px_32px_0_rgba(0,0,0,0.02)]">
                                    <p className="leading-relaxed">
                                        <span className="font-semibold text-primary">
                                            NexaDash
                                        </span>{' '}
                                        is amazing and it&apos;s a beast! So
                                        well thought out and detailed and you
                                        can see the hours put into making this.
                                        Thanks again!
                                    </p>
                                    <div className="flex items-center">
                                        <span className="size-2 rounded-[2px] border border-gray-500 bg-gray-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]" />
                                        <span className="h-px w-full bg-gray-300" />
                                        <span className="size-2 rounded-[2px] border border-gray-500 bg-gray-300 shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]" />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2.5">
                                        <span className="size-9 shrink-0 overflow-hidden rounded-full">
                                            <Image
                                                src="/images/avatar-two.svg"
                                                width={36}
                                                height={36}
                                                alt="Avatar"
                                                className="size-full object-cover"
                                            />
                                        </span>
                                        <div className="space-y-0.5">
                                            <h3 className="text-sm/tight font-semibold">
                                                John Lewis
                                            </h3>
                                            <p className="text-sm/tight text-gray">
                                                UI/UX Designer
                                            </p>
                                        </div>
                                        <span className="ml-auto block text-xs font-semibold uppercase tracking-wider text-gray">
                                            Oct 15, 2023
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
