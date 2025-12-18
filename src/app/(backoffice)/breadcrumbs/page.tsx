import PageHeading from '@/components/layout/page-heading'
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Bell, Home, Settings } from 'lucide-react'

export default function Breadcrumbs() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Breadcrumbs'} />

            <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-white p-8 shadow-3xl xl:p-[50px] dark:bg-black-dark dark:shadow-sm">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="javascript:">
                                    <Home className="size-4" />
                                    <span>Home</span>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="javascript:">
                                    <Settings className="size-4" />
                                    <span>Settings</span>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    <Bell className="size-4" />
                                    <span>Notification</span>
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="rounded-lg bg-white p-8 shadow-3xl xl:p-[50px] dark:bg-black-dark dark:shadow-sm">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="javascript:">
                                    <span>Home</span>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="javascript:">
                                    <span>Settings</span>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    <span>Notification</span>
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="rounded-lg bg-white p-8 shadow-3xl xl:p-[50px] dark:bg-black-dark dark:shadow-sm">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="javascript:">
                                    <Home className="size-4" />
                                    <span>Home</span>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="javascript:">
                                    <span>Settings</span>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    <span>Notification</span>
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="rounded-lg bg-white p-8 shadow-3xl xl:p-[50px] dark:bg-black-dark dark:shadow-sm">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="javascript:">
                                    <Home className="size-4" />
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="javascript:">
                                    <span>Settings</span>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    <span>Notification</span>
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="rounded-lg bg-white p-8 shadow-3xl xl:p-[50px] dark:bg-black-dark dark:shadow-sm">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="javascript:">
                                    <Home className="size-4" />
                                    <span>Home</span>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="javascript:">
                                    <span>Settings</span>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center gap-1">
                                        <BreadcrumbEllipsis className="h-4 w-4" />
                                        <span className="sr-only">
                                            Toggle menu
                                        </span>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start">
                                        <DropdownMenuItem>
                                            Notification
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Chat
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Table
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="rounded-lg bg-white p-8 shadow-3xl xl:p-[50px] dark:bg-black-dark dark:shadow-sm">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="javascript:">
                                    <Home className="size-4" />
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="javascript:">
                                    <span>Settings</span>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center gap-1.5">
                                        <BreadcrumbEllipsis className="h-4 w-4 dark:hover:text-gray-600" />
                                        <span className="sr-only">
                                            Toggle menu
                                        </span>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start">
                                        <DropdownMenuItem>
                                            Notification
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Chat
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Table
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        </div>
    )
}
