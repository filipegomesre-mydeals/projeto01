import PageHeading from '@/components/layout/page-heading'
import { Card } from '@/components/ui/card'
import {
    BadgeCheck,
    Bell,
    Blocks,
    ChevronsUpDown,
    Headphones,
    LineChart,
    Lock,
    LogOut,
    Moon,
    ScrollText,
    UserCog,
} from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

export default function Dropdown() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Dropdown Menu'} />

            <div className="flex w-full items-start py-5">
                <Card className="min-w-[300px] rounded-lg bg-white outline-hidden dark:bg-black-dark">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="w-full rounded-t-lg bg-gray-100 outline-hidden dark:bg-black-dark">
                            <div className="flex w-full items-center gap-2 border-b border-gray-300 px-4 py-3 outline-hidden dark:border-gray-300/20">
                                <Image
                                    src="/images/dropdown-avatar.svg"
                                    alt="avatar"
                                    width={36}
                                    height={36}
                                ></Image>
                                <div className="-mt-0.5 space-y-1.5 text-left">
                                    <h2 className="flex items-center gap-2 text-xs/none font-semibold text-black dark:text-white">
                                        Elizabeth Martinez
                                        <BadgeCheck className="size-4 fill-primary text-white dark:text-black-dark" />
                                    </h2>
                                    <div className="flex items-center gap-1.5">
                                        <p className="text-xs/none font-medium">
                                            elizabethm@gmail.com
                                        </p>
                                        <Badge
                                            size={'small'}
                                            variant={'orange'}
                                        >
                                            Pro
                                        </Badge>
                                    </div>
                                </div>
                                <span className="shrink-0 ltr:ml-auto rtl:mr-auto">
                                    <ChevronsUpDown className="size-4" />
                                </span>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link
                                    href="#"
                                    className="inline-flex w-full items-center gap-1.5 text-black dark:text-white"
                                >
                                    <UserCog className="size-[18px] shrink-0 text-black dark:text-white" />
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-1.5"
                                >
                                    <Blocks className="size-[18px] shrink-0" />
                                    Integration
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-1.5"
                                >
                                    <Bell className="size-[18px] shrink-0" />
                                    Notifications
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-1.5"
                                >
                                    <LineChart className="size-[18px] shrink-0" />
                                    Analytics
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-1.5"
                                >
                                    <ScrollText className="size-[18px] shrink-0" />
                                    Billing
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem>
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-1.5"
                                >
                                    <Lock className="size-[18px] shrink-0" />
                                    Password
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-1.5"
                                >
                                    <Headphones className="size-[18px] shrink-0" />
                                    Help Center
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-1.5 text-danger"
                                >
                                    <LogOut className="size-[18px] shrink-0" />
                                    Sign out
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </Card>
            </div>
        </div>
    )
}
