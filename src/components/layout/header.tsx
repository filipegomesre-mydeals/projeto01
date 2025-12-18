'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
    Bell,
    BrushCleaning,
    CalendarCheck,
    ChevronDown,
    ChevronRight,
    CircleX,
    ClipboardType,
    Component,
    FileType,
    Fingerprint,
    Gauge,
    Gem,
    Headphones,
    Info,
    LogOut,
    Menu,
    MessageSquareText,
    Monitor,
    Moon,
    PanelLeftDashed,
    Phone,
    PieChart,
    RectangleEllipsis,
    ScrollText,
    Settings,
    Sheet,
    SquareKanban,
    Sun,
    TableProperties,
    UserCog,
} from 'lucide-react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { Badge } from '@/components/ui/badge'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card'
import NavLink from '@/components/layout/nav-link'
import { useTheme } from 'next-themes'
import { IState, useStore } from '@/store'
import { cn } from '@/lib/utils'

const Header = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [date, setDate] = useState<Date>()

    const pathName = usePathname()

    const toggleSidebar = () => {
        document.getElementById('sidebar')?.classList.toggle('open')
        document.getElementById('overlay')?.classList.toggle('open')
    }

    const { theme, setTheme } = useTheme()
    const handleToggle = () => {
        setTheme(
            theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light',
        )
    }
    const getIcon = () => {
        if (theme === 'light') {
            return <Sun className="size-5 shrink-0" />
        } else if (theme === 'dark') {
            return <Moon className="size-5 shrink-0" />
        } else if (theme === 'system') {
            return <Monitor className="size-5 shrink-0" />
        }
    }

    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            profile: 'avatar.svg',
            user: 'Brooklyn Simmons',
            message:
                'recommended this online shop to byu electronics, <strong class="text-black dark:text-white">Advantage Electric</strong>',
            time: '5 minutes ago',
            shop: 'Advantage Electric',
        },
        {
            id: 2,
            profile: 'avatar-two.svg',
            user: 'Sophia Williams',
            message:
                'invites you ABC.fig file with you, <strong class="text-black dark:text-white">check item now</strong>',
            time: '10 minutes ago',
            shop: 'New item',
        },
        {
            id: 3,
            profile: 'avatar-three.svg',
            user: 'Ava Davis',
            message:
                'changed <strong class="text-black dark:text-white">the cosmetic payment</strong> due date to Sunday 05 March 2023',
            time: '15 minutes ago',
            shop: 'New item',
        },
    ])

    const removeNotification = (id: number) => {
        setNotifications((prevNotifications) =>
            prevNotifications.filter((notification) => notification.id !== id),
        )
    }

    const isActive = () => {
        const blogPaths = ['/blog-list', '/blog-details', '/add-blog']
        const dashboardPaths = [
            '/',
            '/crypto-dashboard',
            '/analytics-dashboard',
            '/crm-dashboard',
            '/projects-dashboard',
            '/hospitality-dashboard',
            '/product-card',
            '/add-product',
            '/product-details',
            '/product-checkout',
        ]
        const invoicePaths = ['/invoice', '/invoice-details', '/create-invoice']
        const componentPaths = [
            '/accordion-page',
            '/alert',
            '/alert-dialog',
            '/avatar',
            '/breadcrumbs',
            '/buttons',
            '/button-group',
            '/calendar-page',
            '/card-page',
            '/carousel',
            '/collapsible-page',
            '/context-menu-page',
            '/date-picker',
            '/dialog',
            '/drawer-page',
            '/dropdown',
            '/empty',
            '/field',
            '/hover-card',
            '/input-group',
            '/item',
            '/kbd',
            '/menubar',
            '/native-select',
            '/pagination',
            '/popover',
            '/progress',
            '/resizable',
            '/scroll-area',
            '/separator',
            '/sheet-page',
            '/skeleton',
            '/slider',
            '/sonner',
            '/spinner',
            '/tabs',
            '/tag',
            '/toasts',
            '/toggle-group',
            '/tooltip',
        ]
        const formPaths = [
            '/checkbox',
            '/combobox',
            '/command',
            '/form',
            '/inputs',
            '/input-otp',
        ]

        if (blogPaths.includes(pathName)) return 'blog'
        if (dashboardPaths.includes(pathName)) return 'dashboard'
        if (invoicePaths.includes(pathName)) return 'voice'
        if (componentPaths.includes(pathName)) return 'components'
        if (formPaths.includes(pathName)) return 'forms'
        return ''
    }

    const ecommercePaths = [
        '/product-card',
        '/add-product',
        '/product-details',
        '/product-checkout',
    ]

    const isEcommerceActive = ecommercePaths.includes(pathName)

    useEffect(() => {
        const isRTL = searchParams.get('isRTL')
        const tempTheme = {} as IState
        let clearSearchParams = false
        if (isRTL) {
            tempTheme.isRTL = true
            document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
        }
        const isBox = searchParams.get('isBox')
        if (isBox) {
            tempTheme.isBox = true
            document.body.classList.add('box-layout')
            document.body.classList.remove('full-layout')
            clearSearchParams = true
        }
        const selectedLayout = searchParams.get('selectedLayout')
        if (
            selectedLayout === 'vertical' ||
            selectedLayout === 'horizontal' ||
            selectedLayout === 'collapsible'
        ) {
            tempTheme.selectedLayout = selectedLayout
            document.body.classList.remove(
                'vertical',
                'horizontal',
                'collapsible',
            )
            document.body.classList.add(selectedLayout)
            clearSearchParams = true
        }
        const theme = searchParams.get('theme')
        if (theme === 'light' || theme === 'dark' || theme === 'system') {
            setTheme(theme)
            clearSearchParams = true
        }
        Object.keys(tempTheme).length && useStore.setState(tempTheme)
        clearSearchParams && router.replace('/')
    }, [searchParams, setTheme, router])

    return (
        <header className="dark:bg-black-dark fixed top-0 z-30 w-full bg-white shadow-sm">
            <div className="flex items-center justify-between gap-5 px-4 py-[15px] lg:px-5">
                <Link
                    href="/"
                    className="inline-block shrink-0 lg:ltr:ml-2.5 lg:rtl:mr-2.5"
                >
                    <Image
                        src="/images/logo.svg"
                        width={145}
                        height={34}
                        alt="Logo"
                        className="h-auto w-32 lg:w-[145px] dark:hidden"
                    />
                    <Image
                        src="/images/logo-footer.svg"
                        width={145}
                        height={34}
                        alt="Logo"
                        className="hidden h-auto w-32 lg:w-[145px] dark:block"
                    />
                </Link>

                <div className="flex items-center gap-3 sm:gap-5">
                    <button
                        type="button"
                        onClick={handleToggle}
                        className="bg-primary/5 text-primary hover:text-opacity-80 grid size-8 place-items-center rounded-full dark:bg-white/5 dark:text-white"
                    >
                        {isClient ? getIcon() : null}
                    </button>
                    <Link
                        href="/chat"
                        className="hidden duration-300 hover:opacity-80 lg:block dark:text-white"
                    >
                        <MessageSquareText className="h-5 w-5" />
                    </Link>
                    <div className="order-2 inline-flex lg:order-none">
                        <Popover>
                            <PopoverTrigger asChild>
                                <button
                                    type="button"
                                    className="relative duration-300 hover:opacity-80 dark:text-white"
                                >
                                    <Bell className="h-5 w-5" />
                                    {!!notifications?.length && (
                                        <Badge
                                            variant={'primary'}
                                            size={'number'}
                                            className="absolute -top-0.5 grid h-3 min-w-3 place-content-center px-1 text-[9px] ltr:-right-0.5 rtl:-left-0.5"
                                        >
                                            {notifications?.length ?? 0}
                                        </Badge>
                                    )}
                                </button>
                            </PopoverTrigger>
                            <PopoverContent
                                sideOffset={12}
                                className="dark:divide-gray mr-4 w-full max-w-80 divide-y divide-gray-300 p-0"
                            >
                                <div className="rounded-t-lg bg-gray-100 p-3 text-black dark:bg-black/30 dark:text-white">
                                    <h2 className="leading-5 font-semibold">
                                        Notifications
                                    </h2>
                                </div>
                                <div className="max-h-64 divide-y divide-gray-300 overflow-y-auto dark:divide-gray-300/10">
                                    {!notifications?.length ? (
                                        <div className="!grid min-h-[255px] w-full min-w-72 place-content-center p-10 text-lg hover:bg-transparent! sm:min-w-80">
                                            <div className="text-primary mx-auto mb-4 rounded-full">
                                                <Info className="h-10 w-10" />
                                            </div>
                                            No data available.
                                        </div>
                                    ) : (
                                        notifications.map((notification) => (
                                            <div
                                                key={notification.id}
                                                className="flex items-start gap-3 px-3 py-5 hover:bg-gray-100 dark:hover:bg-gray-100/5"
                                            >
                                                <Link
                                                    href="#"
                                                    className="size-9 shrink-0 overflow-hidden rounded-lg"
                                                >
                                                    <Image
                                                        alt="Profile"
                                                        width={36}
                                                        height={36}
                                                        className="h-full object-cover"
                                                        src={`/images/${notification.profile}`}
                                                    />
                                                </Link>
                                                <div className="grow space-y-2.5">
                                                    <p className="text-gray text-xs/5 font-medium dark:text-gray-500">
                                                        <span className="font-bold text-black dark:text-white">
                                                            {notification.user}
                                                        </span>{' '}
                                                        <span
                                                            dangerouslySetInnerHTML={{
                                                                __html: notification.message,
                                                            }}
                                                        ></span>
                                                    </p>
                                                    <div className="text-gray flex flex-wrap items-center gap-2.5 text-xs/4 font-medium dark:text-gray-600">
                                                        <span>
                                                            {notification.time}
                                                        </span>
                                                        <span className="bg-primary size-1 shrink-0 rounded-full"></span>
                                                        <span>
                                                            {notification.shop}
                                                        </span>
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="hover:text-danger shrink-0 text-gray-500 transition"
                                                    onClick={() =>
                                                        removeNotification(
                                                            notification.id,
                                                        )
                                                    }
                                                >
                                                    <CircleX className="size-5" />
                                                </button>
                                            </div>
                                        ))
                                    )}
                                </div>
                                {!!notifications?.length && (
                                    <div className="px-5 py-2.5">
                                        <Button className="w-full">
                                            Show All Notifications
                                        </Button>
                                    </div>
                                )}
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="order-1 inline-flex lg:order-none">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={'outline-general'}
                                    className="p-0 text-wrap shadow-none ring-0 lg:px-2.5 lg:py-2 lg:shadow-sm lg:ring-1"
                                >
                                    <CalendarCheck className="text-gray size-5! lg:size-4! dark:text-white" />
                                    {date ? (
                                        format(date, 'PPP')
                                    ) : (
                                        <span className="hidden lg:block">
                                            Schedule
                                        </span>
                                    )}
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
                    <div className="hidden lg:block">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="group flex cursor-pointer items-center gap-2.5 rounded-lg [&[data-state=open]>button>svg]:rotate-180">
                                    <div className="size-8 shrink-0 overflow-hidden rounded-full">
                                        <Image
                                            src="/images/profile.png"
                                            width={32}
                                            height={32}
                                            className="h-full w-full object-cover"
                                            alt="Profile Img"
                                        />
                                    </div>
                                    <div className="hidden space-y-1 lg:block">
                                        <h5 className="line-clamp-1 text-[10px]/3 font-semibold dark:text-gray-500">
                                            Welcome back 👋
                                        </h5>
                                        <h2 className="line-clamp-1 text-xs font-bold text-black dark:text-white">
                                            Jackson James
                                        </h2>
                                    </div>
                                    <button
                                        type="button"
                                        className="mt-auto text-black transition group-hover:opacity-70 ltr:-ml-1 rtl:-mr-1 dark:text-white"
                                    >
                                        <ChevronDown className="h-4 w-4 shrink-0 duration-300" />
                                    </button>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                sideOffset={12}
                                className="min-w-[200px] space-y-1 rounded-lg p-1.5 text-sm font-medium"
                            >
                                <DropdownMenuItem className="p-0">
                                    <Link
                                        href="/setting"
                                        className={`flex items-center gap-1.5 rounded-lg px-3 py-2 ${pathName === '/setting' && 'bg-gray-400! text-black! dark:bg-white/5! dark:text-white!'}`}
                                    >
                                        <UserCog className="size-[18px] shrink-0" />
                                        Profile
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="p-0">
                                    <Link
                                        href="/contact-us"
                                        className={`flex items-center gap-1.5 rounded-lg px-3 py-2 ${pathName === '/contact-us' && 'bg-gray-400! text-black! dark:bg-white/5! dark:text-white!'}`}
                                    >
                                        <Headphones className="size-[18px] shrink-0" />
                                        Help Center
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="p-0">
                                    <Link
                                        href="/login"
                                        className={`text-danger flex items-center gap-1.5 rounded-lg px-3 py-2 ${pathName === '/login' && 'text-danger! bg-gray-400! dark:bg-white/5!'}`}
                                    >
                                        <LogOut className="size-[18px] shrink-0" />
                                        Sign out
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <button
                        type="button"
                        className="order-3 duration-300 hover:opacity-80 lg:hidden dark:text-white"
                        onClick={toggleSidebar}
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Horizontal sidebar */}
            <div className="sidebar hidden items-center gap-4 overflow-y-auto border-t border-gray-300 px-6 py-2.5 dark:border-gray-700/70">
                <HoverCard openDelay={0}>
                    <HoverCardTrigger asChild>
                        <button
                            type="button"
                            className={cn(
                                'nav-link rounded-lg px-2.5! hover:bg-gray-400 data-[state=open]:bg-gray-400 data-[state=open]:text-black dark:hover:bg-white/10 dark:data-[state=open]:bg-white/10 dark:data-[state=open]:text-white',
                                isActive() === 'dashboard' &&
                                    'bg-gray-400 text-black dark:bg-white/10 dark:text-white',
                            )}
                        >
                            <Gauge className="size-[18px] shrink-0" />
                            <span>Dashboard</span>
                            <ChevronDown className="size-4 shrink-0" />
                        </button>
                    </HoverCardTrigger>
                    <HoverCardContent
                        align="start"
                        className="h-full max-h-96 min-w-40 overflow-y-auto p-1.5"
                    >
                        <ul className="submenu space-y-1">
                            <li>
                                <NavLink href="/">Sales</NavLink>
                            </li>
                            <li>
                                <NavLink href="/crypto-dashboard">
                                    Crypto
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/analytics-dashboard">
                                    Analytics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/crm-dashboard">CRM</NavLink>
                            </li>
                            <li>
                                <NavLink href="/projects-dashboard">
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/hospitality-dashboard">
                                    Hospitality
                                </NavLink>
                            </li>
                            <li>
                                <HoverCard openDelay={0}>
                                    <HoverCardTrigger asChild>
                                        <button
                                            type="button"
                                            className={cn(
                                                'flex w-full items-center rounded-lg px-2 py-1 font-medium transition',
                                                'hover:bg-light-theme hover:text-primary text-gray-700 dark:text-gray-600 dark:hover:bg-[#818CF8]/6 dark:hover:text-white',
                                                isEcommerceActive &&
                                                    'text-black dark:text-white',
                                            )}
                                        >
                                            eCommerce
                                            <ChevronRight className="ms-auto size-3.5 shrink-0 rtl:rotate-180" />
                                        </button>
                                    </HoverCardTrigger>
                                    <HoverCardContent
                                        align="start"
                                        side="right"
                                        className="max-h-96 min-w-40 overflow-y-auto p-1.5"
                                    >
                                        <ul className="submenu space-y-1">
                                            <li>
                                                <NavLink href="/product-card">
                                                    Product list
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink href="/add-product">
                                                    Add new product
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink href="/product-details">
                                                    Product Details
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink href="/product-checkout">
                                                    Product Checkout
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </HoverCardContent>
                                </HoverCard>
                            </li>
                        </ul>
                    </HoverCardContent>
                </HoverCard>
                <NavLink
                    href="/chat"
                    className={`nav-link rounded-lg px-2.5! hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === '/chat' && 'bg-gray-400! text-black! dark:bg-white/10! dark:text-white!'}`}
                >
                    <MessageSquareText className="size-[18px] shrink-0" />
                    <span>Chat</span>
                </NavLink>

                <NavLink
                    href="/scrumboard"
                    className={`nav-link rounded-lg px-2.5! hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === '/scrumboard' && 'bg-gray-400! text-black! dark:bg-white/10! dark:text-white!'}`}
                >
                    <SquareKanban className="size-[18px] shrink-0" />
                    <span>Scrumboard</span>
                </NavLink>

                <HoverCard openDelay={0}>
                    <HoverCardTrigger asChild>
                        <button
                            type="button"
                            className={cn(
                                'nav-link rounded-lg px-2.5! hover:bg-gray-400 data-[state=open]:bg-gray-400 data-[state=open]:text-black dark:hover:bg-white/10 dark:data-[state=open]:bg-white/10 dark:data-[state=open]:text-white',
                                isActive() === 'blog' &&
                                    'bg-gray-400 text-black dark:bg-white/10 dark:text-white',
                            )}
                        >
                            <SquareKanban className="size-[18px] shrink-0 -rotate-90" />
                            <span>Blog</span>
                            <ChevronDown className="size-4 shrink-0" />
                        </button>
                    </HoverCardTrigger>
                    <HoverCardContent
                        align="start"
                        className="h-full max-h-96 min-w-40 overflow-y-auto p-1.5"
                    >
                        <ul className="submenu space-y-1">
                            <li>
                                <NavLink href="/blog-list">Blog-list</NavLink>
                            </li>
                            <li>
                                <NavLink href="/blog-details">
                                    Blog details
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/add-blog">Add New Blog</NavLink>
                            </li>
                        </ul>
                    </HoverCardContent>
                </HoverCard>

                <HoverCard openDelay={0}>
                    <HoverCardTrigger asChild>
                        <button
                            type="button"
                            className={cn(
                                'nav-link rounded-lg px-2.5! hover:bg-gray-400 data-[state=open]:bg-gray-400 data-[state=open]:text-black dark:hover:bg-white/10 dark:data-[state=open]:bg-white/10 dark:data-[state=open]:text-white',
                                isActive() === 'voice' &&
                                    'bg-gray-400 text-black dark:bg-white/10 dark:text-white',
                            )}
                        >
                            <ScrollText className="size-[18px] shrink-0" />
                            <span>Invoice</span>
                            <ChevronDown className="size-4 shrink-0" />
                        </button>
                    </HoverCardTrigger>
                    <HoverCardContent
                        align="start"
                        className="h-full max-h-96 min-w-40 overflow-y-auto p-1.5"
                    >
                        <ul className="submenu space-y-1">
                            <li>
                                <NavLink href="/invoice">Invoice</NavLink>
                            </li>
                            <li>
                                <NavLink href="/invoice-details">
                                    Invoice details
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/create-invoice">
                                    Create Invoice
                                </NavLink>
                            </li>
                        </ul>
                    </HoverCardContent>
                </HoverCard>

                <HoverCard openDelay={0}>
                    <HoverCardTrigger asChild>
                        <button
                            type="button"
                            className={cn(
                                'nav-link rounded-lg px-2.5! hover:bg-gray-400 data-[state=open]:bg-gray-400 data-[state=open]:text-black dark:hover:bg-white/10 dark:data-[state=open]:bg-white/10 dark:data-[state=open]:text-white',
                                isActive() === 'components' &&
                                    'bg-gray-400 text-black dark:bg-white/10 dark:text-white',
                            )}
                        >
                            <Component className="size-[18px] shrink-0" />
                            <span>Components</span>
                            <Badge variant={'primary'} size={'number'}>
                                New
                            </Badge>
                            <ChevronDown className="size-4 shrink-0" />
                        </button>
                    </HoverCardTrigger>
                    <HoverCardContent
                        align="start"
                        className="h-full max-h-96 min-w-40 overflow-y-auto"
                    >
                        <ul className="submenu space-y-1">
                            <li>
                                <NavLink href="/accordion-page">
                                    Accordion
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/alert">Alert</NavLink>
                            </li>
                            <li>
                                <NavLink href="/alert-dialog">
                                    Alert Dialog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/avatar">Avatar</NavLink>
                            </li>
                            <li>
                                <NavLink href="/breadcrumbs">
                                    Breadcrumb
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/buttons">Button</NavLink>
                            </li>
                            <li>
                                <NavLink href="/button-group" newTag>
                                    Button Group
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/calendar-page">
                                    Calendar
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/card-page">Cards</NavLink>
                            </li>
                            <li>
                                <NavLink href="/carousel">Carousel</NavLink>
                            </li>
                            <li>
                                <NavLink href="/collapsible-page">
                                    Collapsible
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/context-menu-page">
                                    Context Menu
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/date-picker">
                                    Date Picker
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/dialog">Dialog</NavLink>
                            </li>
                            <li>
                                <NavLink href="/drawer-page">Drawer</NavLink>
                            </li>
                            <li>
                                <NavLink href="/dropdown">
                                    Dropdown Menu
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/empty" newTag>
                                    Empty
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/field" newTag>
                                    Field
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/hover-card">Hover Card</NavLink>
                            </li>
                            <li>
                                <NavLink href="/input-group" newTag>
                                    Input Group
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/item" newTag>
                                    Item
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/kbd" newTag>
                                    Kbd
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/menubar">Menubar</NavLink>
                            </li>
                            <li>
                                <NavLink href="/native-select" newTag>
                                    Native Select
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/pagination">Pagination</NavLink>
                            </li>
                            <li>
                                <NavLink href="/popover">Popover</NavLink>
                            </li>
                            <li>
                                <NavLink href="/progress">Progress</NavLink>
                            </li>
                            <li>
                                <NavLink href="/resizable">Resizable</NavLink>
                            </li>
                            <li>
                                <NavLink href="/scroll-area">
                                    Scroll Area
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/separator">Separator</NavLink>
                            </li>
                            <li>
                                <NavLink href="/sheet-page">Sheet</NavLink>
                            </li>
                            <li>
                                <NavLink href="/skeleton">Skeleton</NavLink>
                            </li>
                            <li>
                                <NavLink href="/slider">Slider</NavLink>
                            </li>
                            <li>
                                <NavLink href="/sonner">Sonner</NavLink>
                            </li>
                            <li>
                                <NavLink href="/spinner" newTag>
                                    Spinner
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/tabs">Tab</NavLink>
                            </li>

                            <li>
                                <NavLink href="/tag">Tag</NavLink>
                            </li>

                            <li>
                                <NavLink href="/toasts">Toasts</NavLink>
                            </li>
                            <li>
                                <NavLink href="/toggle-group">
                                    Toggle Group
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/tooltip">Tooltip</NavLink>
                            </li>
                        </ul>
                    </HoverCardContent>
                </HoverCard>

                <NavLink
                    href="/chart"
                    className={`nav-link rounded-lg px-2.5! hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === '/chart' && 'bg-gray-400! text-black! dark:bg-white/10! dark:text-white!'}`}
                >
                    <PieChart className="size-[18px] shrink-0" />
                    <span>Charts</span>
                </NavLink>

                <NavLink
                    href="/typography"
                    className={`nav-link rounded-lg px-2.5! hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === '/typography' && 'bg-gray-400! text-black! dark:bg-white/10! dark:text-white!'}`}
                >
                    <FileType className="size-[18px] shrink-0" />
                    <span>Typography</span>
                </NavLink>
                <NavLink
                    href="/sidebar-page"
                    className={`nav-link rounded-lg px-2.5! hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === '/sidebar-page' && 'bg-gray-400! text-black! dark:bg-white/10! dark:text-white!'}`}
                >
                    <PanelLeftDashed className="size-[18px] shrink-0" />
                    <span>Sidebar</span>
                </NavLink>

                <NavLink
                    href="/navigation-menu"
                    className={`nav-link rounded-lg px-2.5! hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === '/navigation-menu' && 'bg-gray-400! text-black! dark:bg-white/10! dark:text-white!'}`}
                >
                    <RectangleEllipsis className="size-[18px] shrink-0" />
                    <span>Navigation Menu</span>
                </NavLink>
                <NavLink
                    href="/pricing-plan"
                    className={`nav-link rounded-lg px-2.5! hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === '/pricing-plan' && 'bg-gray-400! text-black! dark:bg-white/10! dark:text-white!'}`}
                >
                    <Gem className="size-[18px] shrink-0" />
                    <span>Pricing</span>
                </NavLink>
                <NavLink
                    href="/empty-stats"
                    className={`nav-link rounded-lg px-2.5! hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === '/empty-stats' && 'bg-gray-400! text-black! dark:bg-white/10! dark:text-white!'}`}
                >
                    <BrushCleaning className="size-[18px] shrink-0" />
                    <span>Empty Stats</span>
                </NavLink>
                <NavLink
                    href="/table"
                    className={`nav-link rounded-lg px-2.5! hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === '/table' && 'bg-gray-400! text-black! dark:bg-white/10! dark:text-white!'}`}
                >
                    <TableProperties className="size-[18px] shrink-0" />
                    <span>Table</span>
                </NavLink>

                <HoverCard openDelay={0}>
                    <HoverCardTrigger asChild>
                        <button
                            type="button"
                            className={cn(
                                'nav-link rounded-lg px-2.5! hover:bg-gray-400 data-[state=open]:bg-gray-400 data-[state=open]:text-black dark:hover:bg-white/10 dark:data-[state=open]:bg-white/10 dark:data-[state=open]:text-white',
                                isActive() === 'forms' &&
                                    'bg-gray-400 text-black dark:bg-white/10 dark:text-white',
                            )}
                        >
                            <ClipboardType className="size-[18px] shrink-0" />
                            <span>Forms</span>
                            <ChevronDown className="size-4 shrink-0" />
                        </button>
                    </HoverCardTrigger>
                    <HoverCardContent
                        align="start"
                        className="h-full max-h-96 min-w-40 overflow-y-auto p-1.5"
                    >
                        <ul className="submenu space-y-1">
                            <li>
                                <NavLink href="/checkbox">
                                    Check Box & Radio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/combobox">Combobox</NavLink>
                            </li>

                            <li>
                                <NavLink href="/command">Command</NavLink>
                            </li>
                            <li>
                                <NavLink href="/form">Form</NavLink>
                            </li>
                            <li>
                                <NavLink href="/inputs">Input</NavLink>
                            </li>

                            <li>
                                <NavLink href="/input-otp">Input OTP</NavLink>
                            </li>
                        </ul>
                    </HoverCardContent>
                </HoverCard>

                <NavLink
                    href="/setting"
                    className={`nav-link rounded-lg px-2.5! hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === '/setting' && 'bg-gray-400! text-black! dark:bg-white/10! dark:text-white!'}`}
                >
                    <Settings className="size-[18px] shrink-0" />
                    <span>Settings</span>
                </NavLink>

                <HoverCard openDelay={0}>
                    <HoverCardTrigger asChild>
                        <button
                            type="button"
                            className="nav-link rounded-lg px-2.5! hover:bg-gray-400 data-[state=open]:bg-gray-400 data-[state=open]:text-black dark:hover:bg-white/10 dark:data-[state=open]:bg-white/10 dark:data-[state=open]:text-white"
                        >
                            <Fingerprint className="size-[18px] shrink-0" />
                            <span>Authentication</span>
                            <ChevronDown className="size-4 shrink-0" />
                        </button>
                    </HoverCardTrigger>
                    <HoverCardContent
                        align="start"
                        className="h-full max-h-96 min-w-40 overflow-y-auto p-1.5"
                    >
                        <ul className="submenu space-y-1">
                            <li>
                                <NavLink href="/login" target="_blank">
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/register" target="_blank">
                                    Register
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/forgot" target="_blank">
                                    Forgot
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/password" target="_blank">
                                    Password
                                </NavLink>
                            </li>
                        </ul>
                    </HoverCardContent>
                </HoverCard>

                <NavLink
                    href="/contact-us"
                    className={`nav-link rounded-lg px-2.5! hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === '/contact-us' && 'bg-gray-400! text-black! dark:bg-white/10! dark:text-white!'}`}
                >
                    <Phone className="size-[18px] shrink-0" />
                    <span>Contact Us</span>
                </NavLink>
            </div>
        </header>
    )
}

export default Header
