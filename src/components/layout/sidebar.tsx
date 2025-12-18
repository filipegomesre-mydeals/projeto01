'use client'
import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import {
    BrushCleaning,
    ChevronDown,
    ClipboardType,
    Component,
    FileType,
    Fingerprint,
    Gauge,
    Gem,
    MessageSquareText,
    Minus,
    PanelLeftDashed,
    Phone,
    PieChart,
    RectangleEllipsis,
    Rocket,
    ScrollText,
    Settings,
    Sheet,
    SquareKanban,
    TableProperties,
    X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import NavLink from '@/components/layout/nav-link'
import { useStore } from '@/store'
import { Badge } from '@/components/ui/badge'

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const pathName = usePathname()

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
        const mainContent = document.getElementById('main-content')
        if (mainContent) {
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl'
            if (isRTL) {
                mainContent.style.marginRight = isSidebarOpen ? '260px' : '60px'
                mainContent.style.marginLeft = '0'
            } else {
                mainContent.style.marginLeft = isSidebarOpen ? '260px' : '60px'
            }
        }
    }

    const toggleSidebarResponsive = () => {
        document.getElementById('sidebar')?.classList.remove('open')
        document.getElementById('overlay')?.classList.toggle('open')
    }
    const selectedLayout = useStore((state) => state.selectedLayout)
    useEffect(() => {
        if (selectedLayout === 'collapsible') {
            setIsSidebarOpen(false)
            document.getElementById('sidebar')?.classList.add('closed')
        } else {
            document.getElementById('sidebar')?.classList.remove('closed')
        }
    }, [selectedLayout])

    const isOpen = () => {
        if (['/blog-list', '/blog-details', '/add-blog'].includes(pathName)) {
            return 'item-2'
        } else if (
            [
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
            ].includes(pathName)
        ) {
            return 'item-1'
        } else if (
            ['/invoice', '/invoice-details', '/create-invoice'].includes(
                pathName,
            )
        ) {
            return 'item-3'
        } else if (
            [
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
            ].includes(pathName)
        ) {
            return 'item-4'
        } else if (
            [
                '/checkbox',
                '/combobox',
                '/command',
                '/form',
                '/inputs',
                '/input-otp',
            ].includes(pathName)
        ) {
            return 'item-5'
        } else {
            return ''
        }
    }

    useEffect(() => {
        if (document?.getElementById('overlay')?.classList?.contains('open')) {
            toggleSidebarResponsive()
        }
    }, [pathName])

    return (
        <>
            <div
                id="overlay"
                className="fixed inset-0 z-30 hidden bg-black/50"
                onClick={toggleSidebarResponsive}
            ></div>
            <Card
                id="sidebar"
                className={`sidebar fixed top-0 z-40 flex h-screen w-[260px] flex-col rounded-none transition-all duration-300 lg:top-16 lg:h-[calc(100vh-64px)] ltr:-left-[260px] lg:ltr:left-0 rtl:-right-[260px] lg:rtl:right-0 dark:border-t dark:border-gray-300/10 ${isSidebarOpen ? 'closed' : ''}`}
            >
                <button
                    type="button"
                    onClick={toggleSidebar}
                    className="dark:bg-gray absolute -top-3.5 hidden size-6 place-content-center rounded-full border border-gray-300 bg-white text-black lg:grid ltr:-right-2.5 rtl:-left-2.5 dark:border-gray-700 dark:text-white"
                >
                    <ChevronDown
                        className={`h-4 w-4 ltr:rotate-90 rtl:-rotate-90 ${isSidebarOpen ? 'hidden' : ''}`}
                    />
                    <ChevronDown
                        className={`hidden h-4 w-4 ltr:-rotate-90 rtl:rotate-90 ${isSidebarOpen ? 'block!' : ''}`}
                    />
                </button>
                <div className="flex items-start justify-between border-b border-gray-300 px-4 py-5 lg:hidden dark:border-gray-700/50">
                    <Link href="/" className="inline-block">
                        <Image
                            src="/images/logo.svg"
                            width={145}
                            height={34}
                            alt="Logo"
                            className="h-auto w-auto dark:hidden"
                        />
                        <Image
                            src="/images/logo-white.svg"
                            width={145}
                            height={34}
                            alt="Logo"
                            className="hidden h-auto w-36 dark:block"
                        />
                    </Link>
                    <button type="button" onClick={toggleSidebarResponsive}>
                        <X className="-mt-2 ml-auto size-4 hover:text-black ltr:-mr-2 rtl:-ml-2" />
                    </button>
                </div>
                <Accordion
                    type="single"
                    defaultValue={isOpen()}
                    collapsible
                    className="sidemenu grow overflow-x-hidden overflow-y-auto px-2.5 pt-2.5 pb-10 transition-all"
                    key={pathName}
                >
                    <AccordionItem
                        value="item-1"
                        className="p-0 shadow-none! dark:border-none"
                    >
                        <AccordionTrigger className="nav-link">
                            <Gauge className="size-[18px] shrink-0" />
                            <span>Dashboard</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="submenu space-y-2 ltr:pr-5 ltr:pl-12 rtl:pr-12 rtl:pl-5">
                                <li>
                                    <NavLink href="/" isAccordion={true}>
                                        Sales
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/crypto-dashboard"
                                        isAccordion={true}
                                    >
                                        Crypto
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/analytics-dashboard"
                                        isAccordion={true}
                                    >
                                        Analytics
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/crm-dashboard"
                                        isAccordion={true}
                                    >
                                        CRM
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/projects-dashboard"
                                        isAccordion={true}
                                    >
                                        Projects
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/hospitality-dashboard"
                                        isAccordion={true}
                                    >
                                        Hospitality
                                    </NavLink>
                                </li>
                                <li>
                                    <Accordion
                                        type="single"
                                        collapsible
                                        defaultValue={
                                            [
                                                '/product-card',
                                                '/add-product',
                                                '/product-details',
                                                '/product-checkout',
                                            ].includes(pathName)
                                                ? 'subitem-1'
                                                : ''
                                        }
                                    >
                                        <AccordionItem
                                            value="subitem-1"
                                            className="p-0 shadow-none! dark:border-none"
                                        >
                                            <AccordionTrigger className="text-gray hover:bg-light-theme hover:text-primary relative items-center rounded-lg px-2 py-1 font-medium dark:text-gray-600 dark:hover:bg-[#818CF8]/6 dark:hover:text-white [&[data-state=open]>.dot]:bg-black! dark:[&[data-state=open]>.dot]:bg-[#6683F8]!">
                                                <div className="dot absolute top-3 size-[5px] rounded-full bg-gray-700/50 ltr:-left-5 rtl:-right-5 dark:bg-gray-600"></div>
                                                <span>eCommerce</span>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="submenu mt-2 space-y-2 ltr:pl-4 rtl:pr-4">
                                                    <li>
                                                        <NavLink
                                                            href="/product-card"
                                                            isSubAccordion={
                                                                true
                                                            }
                                                        >
                                                            Product list
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink
                                                            href="/add-product"
                                                            isSubAccordion={
                                                                true
                                                            }
                                                        >
                                                            Add new product
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink
                                                            href="/product-details"
                                                            isSubAccordion={
                                                                true
                                                            }
                                                        >
                                                            Product Details
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink
                                                            href="/product-checkout"
                                                            isSubAccordion={
                                                                true
                                                            }
                                                            className="text-nowrap"
                                                        >
                                                            Product Checkout
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <h3 className="mt-2.5 rounded-lg bg-gray-400 px-5 py-2.5 text-xs/tight font-semibold whitespace-nowrap text-black uppercase dark:bg-gray-400/6 dark:text-white">
                        <span>Apps</span>
                        <Minus className="text-gray hidden h-4 w-5" />
                    </h3>
                    <NavLink href="/chat" className={`nav-link`}>
                        <MessageSquareText className="size-[18px] shrink-0" />
                        <span>Chat</span>
                    </NavLink>
                    <NavLink href="/scrumboard" className={`nav-link`}>
                        <SquareKanban className="size-[18px] shrink-0" />
                        <span>Scrumboard</span>
                    </NavLink>
                    <AccordionItem
                        value="item-2"
                        className="p-0 shadow-none! dark:border-none"
                    >
                        <AccordionTrigger
                            defaultValue={
                                [
                                    '/blog-list',
                                    '/blog-details',
                                    '/add-blog',
                                ].includes(pathName)
                                    ? 'item-2'
                                    : ''
                            }
                            className="nav-link"
                        >
                            <SquareKanban className="size-[18px] shrink-0 -rotate-90" />
                            <span>Blog</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="submenu space-y-2 ltr:pr-5 ltr:pl-12 rtl:pr-12 rtl:pl-5">
                                <li>
                                    <NavLink
                                        href="/blog-list"
                                        isAccordion={true}
                                    >
                                        Blog-list
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/blog-details"
                                        isAccordion={true}
                                    >
                                        Blog details
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/add-blog"
                                        isAccordion={true}
                                    >
                                        Add New Blog
                                    </NavLink>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-3"
                        className="p-0 shadow-none! dark:border-none"
                    >
                        <AccordionTrigger className="nav-link">
                            <ScrollText className="size-[18px] shrink-0" />
                            <span>Invoice</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="submenu space-y-2 ltr:pr-5 ltr:pl-12 rtl:pr-12 rtl:pl-5">
                                <li>
                                    <NavLink href="/invoice" isAccordion={true}>
                                        Invoice
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/invoice-details"
                                        isAccordion={true}
                                    >
                                        Invoice details
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/create-invoice"
                                        isAccordion={true}
                                    >
                                        Create Invoice
                                    </NavLink>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <h3 className="mt-2.5 rounded-lg bg-gray-400 px-5 py-2.5 text-xs/tight font-semibold whitespace-nowrap text-black uppercase dark:bg-gray-400/6 dark:text-white">
                        <span>User Interface</span>
                        <Minus className="text-gray hidden h-4 w-5" />
                    </h3>
                    <AccordionItem
                        value="item-4"
                        className="p-0 shadow-none! dark:border-none"
                    >
                        <AccordionTrigger className="nav-link">
                            <Component className="size-[18px] shrink-0" />
                            <span>Components</span>
                            <Badge
                                variant={'primary'}
                                size={'number'}
                                className="new-badge"
                            >
                                New
                            </Badge>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="submenu space-y-2 ltr:pr-5 ltr:pl-12 rtl:pr-12 rtl:pl-5">
                                <li>
                                    <NavLink
                                        href="/accordion-page"
                                        isAccordion={true}
                                    >
                                        Accordion
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="/alert" isAccordion={true}>
                                        Alert
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/alert-dialog"
                                        isAccordion={true}
                                    >
                                        Alert Dialog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="/avatar" isAccordion={true}>
                                        Avatar
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/breadcrumbs"
                                        isAccordion={true}
                                    >
                                        Breadcrumb
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="/buttons" isAccordion={true}>
                                        Button
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/button-group"
                                        isAccordion={true}
                                        newTag
                                    >
                                        Button Group
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/calendar-page"
                                        isAccordion={true}
                                    >
                                        Calendar
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/card-page"
                                        isAccordion={true}
                                    >
                                        Cards
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/carousel"
                                        isAccordion={true}
                                    >
                                        Carousel
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/collapsible-page"
                                        isAccordion={true}
                                    >
                                        Collapsible
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/context-menu-page"
                                        isAccordion={true}
                                    >
                                        Context Menu
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/date-picker"
                                        isAccordion={true}
                                    >
                                        Date Picker
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="/dialog" isAccordion={true}>
                                        Dialog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/drawer-page"
                                        isAccordion={true}
                                    >
                                        Drawer
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/dropdown"
                                        isAccordion={true}
                                    >
                                        Dropdown Menu
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/empty"
                                        isAccordion={true}
                                        newTag
                                    >
                                        Empty
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/field"
                                        isAccordion={true}
                                        newTag
                                    >
                                        Field
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/hover-card"
                                        isAccordion={true}
                                    >
                                        Hover Card
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/input-group"
                                        isAccordion={true}
                                        newTag
                                    >
                                        Input Group
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/item"
                                        isAccordion={true}
                                        newTag
                                    >
                                        Item
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/kbd"
                                        isAccordion={true}
                                        newTag
                                    >
                                        Kbd
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="/menubar" isAccordion={true}>
                                        Menubar
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/native-select"
                                        isAccordion={true}
                                        newTag
                                    >
                                        Native Select
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/pagination"
                                        isAccordion={true}
                                    >
                                        Pagination
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="/popover" isAccordion={true}>
                                        Popover
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/progress"
                                        isAccordion={true}
                                    >
                                        Progress
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/resizable"
                                        isAccordion={true}
                                    >
                                        Resizable
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/scroll-area"
                                        isAccordion={true}
                                    >
                                        Scroll Area
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/separator"
                                        isAccordion={true}
                                    >
                                        Separator
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/sheet-page"
                                        isAccordion={true}
                                    >
                                        Sheet
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/skeleton"
                                        isAccordion={true}
                                    >
                                        Skeleton
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="/slider" isAccordion={true}>
                                        Slider
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="/sonner" isAccordion={true}>
                                        Sonner
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/spinner"
                                        isAccordion={true}
                                        newTag
                                    >
                                        Spinner
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="/tabs" isAccordion={true}>
                                        Tab
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink href="/tag" isAccordion={true}>
                                        Tag
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink href="/toasts" isAccordion={true}>
                                        Toasts
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/toggle-group"
                                        isAccordion={true}
                                    >
                                        Toggle Group
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="/tooltip" isAccordion={true}>
                                        Tooltip
                                    </NavLink>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <NavLink href="/chart" className={`nav-link`}>
                        <PieChart className="size-[18px] shrink-0" />
                        <span>Charts</span>
                    </NavLink>
                    <NavLink href="/typography" className={`nav-link`}>
                        <FileType className="size-[18px] shrink-0" />
                        <span>Typography</span>
                    </NavLink>
                    <NavLink href="/sidebar-page" className={`nav-link`}>
                        <PanelLeftDashed className="size-[18px] shrink-0" />
                        <span>Sidebar</span>
                    </NavLink>
                    <NavLink href="/navigation-menu" className={`nav-link`}>
                        <RectangleEllipsis className="size-[18px] shrink-0" />
                        <span>Navigation Menu</span>
                    </NavLink>
                    <NavLink href="/pricing-plan" className={`nav-link`}>
                        <Gem className="size-[18px] shrink-0" />
                        <span>Pricing</span>
                    </NavLink>
                    <NavLink href="/empty-stats" className={`nav-link`}>
                        <BrushCleaning className="size-[18px] shrink-0" />
                        <span>Empty Stats</span>
                    </NavLink>
                    <h3 className="mt-2.5 rounded-lg bg-gray-400 px-5 py-2.5 text-xs/tight font-semibold whitespace-nowrap text-black uppercase dark:bg-gray-400/6 dark:text-white">
                        <span>Tables and Forms</span>
                        <Minus className="text-gray hidden h-4 w-5" />
                    </h3>
                    <NavLink href="/table" className={`nav-link`}>
                        <TableProperties className="size-[18px] shrink-0" />
                        <span>Table</span>
                    </NavLink>
                    <AccordionItem
                        value="item-5"
                        className="p-0 shadow-none! dark:border-none"
                    >
                        <AccordionTrigger className="nav-link">
                            <ClipboardType className="size-[18px] shrink-0" />
                            <span>Forms</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="submenu space-y-2 ltr:pr-5 ltr:pl-12 rtl:pr-12 rtl:pl-5">
                                <li>
                                    <NavLink
                                        href="/checkbox"
                                        isAccordion={true}
                                    >
                                        Check Box & Radio
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/combobox"
                                        isAccordion={true}
                                    >
                                        Combobox
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink href="/command" isAccordion={true}>
                                        Command
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="/form" isAccordion={true}>
                                        Form
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="/inputs" isAccordion={true}>
                                        Input
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        href="/input-otp"
                                        isAccordion={true}
                                    >
                                        Input OTP
                                    </NavLink>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <h3 className="mt-2.5 rounded-lg bg-gray-400 px-5 py-2.5 text-xs/tight font-semibold whitespace-nowrap text-black uppercase dark:bg-gray-400/6 dark:text-white">
                        <span>Pages</span>
                        <Minus className="text-gray hidden h-4 w-5" />
                    </h3>
                    <NavLink href="/setting" className={`nav-link`}>
                        <Settings className="size-[18px] shrink-0" />
                        <span>Settings</span>
                    </NavLink>
                    <AccordionItem
                        value="item-6"
                        className="p-0 shadow-none! dark:border-none"
                    >
                        <AccordionTrigger className="nav-link">
                            <Fingerprint className="size-[18px] shrink-0" />
                            <span>Authentication</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="submenu space-y-2 ltr:pr-5 ltr:pl-12 rtl:pr-12 rtl:pl-5">
                                <li>
                                    <NavLink
                                        href="/login"
                                        target="_blank"
                                        isAccordion={true}
                                    >
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/register"
                                        target="_blank"
                                        isAccordion={true}
                                    >
                                        Register
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/forgot"
                                        target="_blank"
                                        isAccordion={true}
                                    >
                                        Forgot
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href="/password"
                                        target="_blank"
                                        isAccordion={true}
                                    >
                                        Password
                                    </NavLink>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <NavLink href="/contact-us" className={`nav-link`}>
                        <Phone className="size-[18px] shrink-0" />
                        <span>Contact Us</span>
                    </NavLink>
                </Accordion>
                <div className="upgrade-menu bg-light-theme sticky bottom-0 rounded-[10px] p-4 transition-all">
                    <span className="absolute top-0 right-0 left-0 -z-1">
                        <Image
                            src="/images/rectangle-gird.png"
                            width={250}
                            height={230}
                            alt="rectangle-grid"
                            className="h-full w-full rounded-[10px]"
                        />
                    </span>
                    <span className="grid size-9 place-content-center rounded-lg bg-white shadow-[0_1px_1px_0_rgba(0,0,0,0.05),0_1px_4px_0_rgba(0,0,0,0.03)]">
                        <Rocket className="text-primary size-5" />
                    </span>
                    <p className="mt-3 mb-4 leading-5 font-semibold text-black">
                        Get detailed report, sales analysis, with pro plan
                    </p>
                    <Link
                        href="https://sbthemes.lemonsqueezy.com/buy/69aeae3f-6c81-4804-a211-7b96e7e0e56a"
                        target="_blank"
                    >
                        <Button
                            type="button"
                            variant={'black'}
                            className="dark:bg-black dark:text-white dark:hover:bg-[#3C3C3D]"
                        >
                            Upgrade Now
                        </Button>
                    </Link>
                </div>
            </Card>
        </>
    )
}

export default Sidebar
