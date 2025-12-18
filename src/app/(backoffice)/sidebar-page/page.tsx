import IconMail from '@/components/icons/icon-mail'
import PageHeading from '@/components/layout/page-heading'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import {
    AppWindow,
    CircleUser,
    Compass,
    File,
    FileText,
    Fingerprint,
    Home,
    Layers3,
    LayoutPanelTop,
    Lock,
    MessageSquareText,
    Settings,
    Users,
    Workflow,
} from 'lucide-react'
import Link from 'next/link'

export default function SidebarPage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Drawer'} />

            <div className="flex min-h-[calc(100vh-160px)] w-full items-start justify-center pt-11">
                <Card className="min-w-[312px] rounded-lg bg-white">
                    <CardContent className="px-3 py-5">
                        <h2 className="mb-3 pl-3 text-xs/none font-semibold uppercase text-gray-700 dark:text-gray-600">
                            Main Menu
                        </h2>
                        <ul className="mb-2.5 space-y-1.5">
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg bg-gray-400 px-3 py-2.5 font-medium leading-snug text-black dark:bg-gray-200/10 dark:text-white dark:hover:text-white"
                                >
                                    <Home className="size-[18px] shrink-0 text-black dark:text-white" />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400 dark:text-white dark:hover:bg-gray-200/10"
                                >
                                    <MessageSquareText className="size-[18px] shrink-0 text-black dark:text-white" />
                                    Chat
                                </Link>
                            </li>
                            <li>
                                <Accordion type="single" collapsible>
                                    <AccordionItem
                                        value="item-1"
                                        className="border-none p-0 shadow-none!"
                                    >
                                        <AccordionTrigger className="flex items-center gap-1.5! rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400 dark:text-white dark:hover:bg-gray-200/10">
                                            <Layers3 className="size-[18px] shrink-0" />
                                            <span>Application</span>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="space-y-2 pl-9 pr-5">
                                                <li>
                                                    <Link
                                                        href="#"
                                                        className="block rounded-lg px-2 py-1 font-medium hover:bg-gray-400 hover:text-black dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                                    >
                                                        Elements 1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="#"
                                                        className="block rounded-lg px-2 py-1 font-medium hover:bg-gray-400 hover:text-black dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                                    >
                                                        Elements 1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="#"
                                                        className="block rounded-lg px-2 py-1 font-medium hover:bg-gray-400 hover:text-black dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                                    >
                                                        Elements 1
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400 dark:text-white dark:hover:bg-gray-200/10"
                                >
                                    <CircleUser className="size-[18px] shrink-0 text-black dark:text-white" />
                                    Account
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400 dark:text-white dark:hover:bg-gray-200/10"
                                >
                                    <FileText className="size-[18px] shrink-0 text-black dark:text-white" />
                                    Docs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400 dark:text-white dark:hover:bg-gray-200/10"
                                >
                                    <File className="size-[18px] shrink-0 text-black dark:text-white" />
                                    Files
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400 dark:text-white dark:hover:bg-gray-200/10"
                                >
                                    <Compass className="size-[18px] shrink-0 text-black dark:text-white" />
                                    Discover
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400 dark:text-white dark:hover:bg-gray-200/10"
                                >
                                    <Settings className="size-[18px] shrink-0 text-black dark:text-white" />
                                    Settings
                                </Link>
                            </li>
                        </ul>
                        <DropdownMenuSeparator />
                        <h2 className="mb-3 mt-4 pl-3 text-xs/none font-semibold uppercase text-gray-700 dark:text-gray-600">
                            Projects
                        </h2>
                        <ul className="mb-2.5 space-y-1.5">
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black hover:bg-gray-400 dark:text-white dark:hover:bg-gray-200/10"
                                >
                                    <Users className="size-[18px] shrink-0 text-black dark:text-white" />
                                    Community
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400 dark:text-white dark:hover:bg-gray-200/10"
                                >
                                    <IconMail className="size-[18px] shrink-0 text-black dark:text-white" />
                                    Email
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400 dark:text-white dark:hover:bg-gray-200/10"
                                >
                                    <AppWindow className="size-[18px] shrink-0 text-black dark:text-white" />
                                    Website
                                </Link>
                            </li>
                        </ul>
                        <DropdownMenuSeparator />
                        <h2 className="mb-3 mt-4 pl-3 text-xs/none font-semibold uppercase text-gray-700 dark:text-gray-600">
                            Configure
                        </h2>
                        <ul className="space-y-1.5">
                            <li>
                                <Accordion type="single" collapsible>
                                    <AccordionItem
                                        value="item-1"
                                        className="border-none p-0 shadow-none!"
                                    >
                                        <AccordionTrigger className="flex items-center gap-1.5! rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400 dark:text-white dark:hover:bg-gray-200/10">
                                            <Fingerprint className="size-[18px] shrink-0" />
                                            <span>Authentication</span>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="space-y-2 pl-9 pr-5">
                                                <li>
                                                    <Link
                                                        href="#"
                                                        className="block rounded-lg px-2 py-1 font-medium hover:bg-gray-400 hover:text-black dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                                    >
                                                        Elements 1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="#"
                                                        className="block rounded-lg px-2 py-1 font-medium hover:bg-gray-400 hover:text-black dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                                    >
                                                        Elements 1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="#"
                                                        className="block rounded-lg px-2 py-1 font-medium hover:bg-gray-400 hover:text-black dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                                    >
                                                        Elements 1
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400 dark:text-white dark:hover:bg-gray-200/10"
                                >
                                    <Lock className="size-[18px] shrink-0 text-black dark:text-white" />
                                    Sessions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400 dark:text-white dark:hover:bg-gray-200/10"
                                >
                                    <LayoutPanelTop className="size-[18px] shrink-0 text-black dark:text-white" />
                                    Templates
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 font-medium leading-snug text-black transition hover:bg-gray-400 dark:text-white dark:hover:bg-gray-200/10"
                                >
                                    <Workflow className="size-[18px] shrink-0 text-black dark:text-white" />
                                    Integration
                                </Link>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
