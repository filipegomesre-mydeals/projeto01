'use client'

import IconAllHandsShared from '@/components/icons/icon-all-hands-shared'
import IconCreateDoc from '@/components/icons/icon-create-doc'
import IconEmail from '@/components/icons/icon-email'
import IconManageSchedule from '@/components/icons/icon-manage-schedule'
import IconNewTask from '@/components/icons/icon-new-task'
import PageHeading from '@/components/layout/page-heading'
import { Badge } from '@/components/ui/badge'
import {
    Command as CommandPrimitive,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command'
import { CreditCard, Settings, User } from 'lucide-react'
import Link from 'next/link'

export default function Command() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Command'} />

            <div className="flex min-h-[calc(100vh-160px)] items-center justify-center">
                <CommandPrimitive className="max-w-[519px]">
                    <CommandInput
                        placeholder="Search or type a command"
                        className="bg-transparent"
                    />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup className="space-y-2">
                            <CommandItem>
                                <Link
                                    href="#"
                                    className="flex grow items-center justify-between"
                                >
                                    <div className="flex items-center gap-1.5">
                                        <IconEmail className="size-[18px] shrink-0" />
                                        <h3>Compose an Email</h3>
                                        <span className="ml-1 mt-0.5 inline-block text-xs/none font-semibold text-gray-600">
                                            Gmail
                                        </span>
                                    </div>
                                    <span className="text-xs/4 font-semibold text-gray-700">
                                        March 12
                                    </span>
                                </Link>
                            </CommandItem>
                            <CommandItem>
                                <Link
                                    href="#"
                                    className="flex grow items-center justify-between"
                                >
                                    <div className="flex items-center gap-1.5">
                                        <IconManageSchedule className="size-[18px] shrink-0" />
                                        <h3>Manage my Schedule</h3>
                                        <span className="ml-1 mt-0.5 inline-block text-xs/none font-semibold text-gray-600">
                                            Calendar
                                        </span>
                                    </div>
                                    <span className="text-xs/4 font-semibold text-gray-700">
                                        March 20
                                    </span>
                                </Link>
                            </CommandItem>
                            <CommandItem>
                                <Link
                                    href="#"
                                    className="flex grow items-center justify-between"
                                >
                                    <div className="flex items-center gap-1.5">
                                        <IconCreateDoc className="size-[18px] shrink-0 text-black dark:text-primary" />
                                        <h3>Create a Doc</h3>
                                        <span className="mx-1 mt-0.5 inline-block text-xs/4 font-semibold text-gray-600">
                                            Notion
                                        </span>
                                        <Badge
                                            variant={'purple'}
                                            size={'small'}
                                        >
                                            New
                                        </Badge>
                                    </div>
                                    <span className="text-xs/4 font-semibold text-gray-700">
                                        March 26
                                    </span>
                                </Link>
                            </CommandItem>
                        </CommandGroup>
                        <CommandGroup heading="Recent">
                            <CommandItem>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5"
                                >
                                    <IconEmail className="size-[18px] shrink-0" />
                                    <h3>My Inbox</h3>
                                    <span className="ml-1 mt-0.5 inline-block text-xs/none font-semibold text-gray-600">
                                        Gmail
                                    </span>
                                </Link>
                            </CommandItem>
                            <CommandItem>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5"
                                >
                                    <IconAllHandsShared className="size-[18px] shrink-0" />
                                    <h3>All Hands - Shared</h3>
                                    <span className="ml-1 mt-0.5 inline-block text-xs/none font-semibold text-gray-600">
                                        Docs
                                    </span>
                                    <span className="size-[3px] shrink-0 rounded-full bg-gray-600"></span>
                                    <span className="ml-1 mt-0.5 inline-block text-xs/none font-semibold text-gray-600">
                                        Yesterday, 9:43am
                                    </span>
                                </Link>
                            </CommandItem>
                            <CommandItem>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5"
                                >
                                    <IconNewTask className="size-[18px] shrink-0" />
                                    <h3>New Task</h3>
                                    <span className="ml-1 mt-0.5 inline-block text-xs/none font-semibold text-gray-600">
                                        Todoist
                                    </span>
                                </Link>
                            </CommandItem>
                        </CommandGroup>
                        <CommandGroup heading="Common Actions">
                            <CommandItem>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5"
                                >
                                    <User className="size-[18px] shrink-0" />
                                    <span>Profile</span>
                                </Link>
                            </CommandItem>
                            <CommandItem>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5"
                                >
                                    <CreditCard className="size-[18px] shrink-0" />
                                    <span>Billing</span>
                                </Link>
                            </CommandItem>
                            <CommandItem>
                                <Link
                                    href="#"
                                    className="flex items-center gap-1.5"
                                >
                                    <Settings className="size-[18px] shrink-0" />
                                    <span>Settings</span>
                                </Link>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </CommandPrimitive>
            </div>
        </div>
    )
}
