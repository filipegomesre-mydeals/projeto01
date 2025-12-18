'use client'
import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from '@/components/ui/input-group'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import {
    AlertTriangleIcon,
    ArchiveIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    AudioLines,
    BotIcon,
    CalendarPlusIcon,
    CheckIcon,
    ChevronDownIcon,
    ClockIcon,
    CopyIcon,
    ListFilterPlusIcon,
    MailCheckIcon,
    MinusIcon,
    MoreHorizontalIcon,
    PlusIcon,
    ShareIcon,
    TrashIcon,
    UserRoundXIcon,
    VolumeOffIcon,
} from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const CURRENCIES = [
    {
        value: '$',
        label: 'US Dollar',
    },
    {
        value: '€',
        label: 'Euro',
    },
    {
        value: '£',
        label: 'British Pound',
    },
]

export default function ButtonGroupPage() {
    const [voiceEnabled, setVoiceEnabled] = useState(false)
    const [currency, setCurrency] = React.useState('$')
    return (
        <div className="space-y-4">
            <PageHeading heading={'Button Group'} />

            <div className="min-h-[calc(100vh-160px)] space-y-[30px] rounded-lg">
                <div className="flex flex-wrap items-start gap-4 sm:gap-6 lg:gap-8">
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Default
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                            <ButtonGroup>
                                <ButtonGroup className="hidden sm:flex">
                                    <Button
                                        variant="outline-general"
                                        aria-label="Go Back"
                                    >
                                        <ArrowLeftIcon />
                                    </Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button variant="outline-general">
                                        Archive
                                    </Button>
                                    <Button variant="outline-general">
                                        Report
                                    </Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button variant="outline-general">
                                        Snooze
                                    </Button>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="outline-general"
                                                aria-label="More Options"
                                            >
                                                <MoreHorizontalIcon />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align="end"
                                            className="w-52"
                                        >
                                            <DropdownMenuItem asChild>
                                                <Link
                                                    href="#"
                                                    className="inline-flex w-full items-center gap-1.5 text-black dark:text-white"
                                                >
                                                    <MailCheckIcon className="size-[18px] shrink-0 text-black dark:text-white" />
                                                    Mark as Read
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link
                                                    href="#"
                                                    className="inline-flex items-center gap-1.5"
                                                >
                                                    <ArchiveIcon className="size-[18px] shrink-0" />
                                                    Archive
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem asChild>
                                                <Link
                                                    href="#"
                                                    className="inline-flex items-center gap-1.5"
                                                >
                                                    <ClockIcon className="size-[18px] shrink-0" />
                                                    Snooze
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link
                                                    href="#"
                                                    className="inline-flex items-center gap-1.5"
                                                >
                                                    <CalendarPlusIcon className="size-[18px] shrink-0" />
                                                    Add to Calendar
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link
                                                    href="#"
                                                    className="inline-flex items-center gap-1.5"
                                                >
                                                    <ListFilterPlusIcon className="size-[18px] shrink-0" />
                                                    Add to List
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </ButtonGroup>
                            </ButtonGroup>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Orientation
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                            <ButtonGroup
                                orientation="vertical"
                                aria-label="Media controls"
                                className="h-fit"
                            >
                                <Button variant="outline-general">
                                    <PlusIcon />
                                </Button>
                                <Button variant="outline-general">
                                    <MinusIcon />
                                </Button>
                            </ButtonGroup>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Size
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                            <div className="flex flex-col items-start gap-8">
                                <ButtonGroup>
                                    <Button
                                        variant="outline-general"
                                        size="small"
                                    >
                                        Small
                                    </Button>
                                    <Button
                                        variant="outline-general"
                                        size="small"
                                    >
                                        Button
                                    </Button>
                                    <Button
                                        variant="outline-general"
                                        size="small"
                                    >
                                        Group
                                    </Button>
                                    <Button variant="outline-general">
                                        <PlusIcon />
                                    </Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button variant="outline-general">
                                        Default
                                    </Button>
                                    <Button variant="outline-general">
                                        Button
                                    </Button>
                                    <Button variant="outline-general">
                                        Group
                                    </Button>
                                    <Button variant="outline-general">
                                        <PlusIcon />
                                    </Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button
                                        variant="outline-general"
                                        size="large"
                                    >
                                        Large
                                    </Button>
                                    <Button
                                        variant="outline-general"
                                        size="large"
                                    >
                                        Button
                                    </Button>
                                    <Button
                                        variant="outline-general"
                                        size="large"
                                    >
                                        Group
                                    </Button>
                                    <Button variant="outline-general">
                                        <PlusIcon />
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Nested
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                            <ButtonGroup>
                                <ButtonGroup>
                                    <Button
                                        variant="outline-general"
                                        size="icon"
                                    >
                                        1
                                    </Button>
                                    <Button
                                        variant="outline-general"
                                        size="icon"
                                    >
                                        2
                                    </Button>
                                    <Button
                                        variant="outline-general"
                                        size="icon"
                                    >
                                        3
                                    </Button>
                                    <Button
                                        variant="outline-general"
                                        size="icon"
                                    >
                                        4
                                    </Button>
                                    <Button
                                        variant="outline-general"
                                        size="icon"
                                    >
                                        5
                                    </Button>
                                </ButtonGroup>
                                <ButtonGroup className="">
                                    <Button
                                        variant="outline-general"
                                        aria-label="Previous"
                                    >
                                        <ArrowLeftIcon className="rtl:rotate-180" />
                                    </Button>
                                    <Button
                                        variant="outline-general"
                                        aria-label="Next"
                                    >
                                        <ArrowRightIcon className="rtl:rotate-180" />
                                    </Button>
                                </ButtonGroup>
                            </ButtonGroup>
                        </CardContent>
                    </Card>
                    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                        <Card>
                            <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                                Dropdown Menu
                            </CardHeader>
                            <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                                <ButtonGroup>
                                    <Button variant="outline-general">
                                        Follow
                                    </Button>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="outline-general"
                                                className="!pl-2"
                                            >
                                                <ChevronDownIcon />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align="end"
                                            className="w-min"
                                        >
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem asChild>
                                                    <Link
                                                        href="#"
                                                        className="inline-flex items-center gap-1.5"
                                                    >
                                                        <VolumeOffIcon className="size-[18px] shrink-0" />
                                                        Mute Conversation
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                    <Link
                                                        href="#"
                                                        className="inline-flex items-center gap-1.5"
                                                    >
                                                        <CheckIcon className="size-[18px] shrink-0" />
                                                        Mark as Read
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                    <Link
                                                        href="#"
                                                        className="inline-flex items-center gap-1.5"
                                                    >
                                                        <AlertTriangleIcon className="size-[18px] shrink-0" />
                                                        Report Conversation
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                    <Link
                                                        href="#"
                                                        className="inline-flex items-center gap-1.5"
                                                    >
                                                        <UserRoundXIcon className="size-[18px] shrink-0" />
                                                        Block User
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                    <Link
                                                        href="#"
                                                        className="inline-flex items-center gap-1.5"
                                                    >
                                                        <ShareIcon className="size-[18px] shrink-0" />
                                                        Share Conversation
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                    <Link
                                                        href="#"
                                                        className="inline-flex items-center gap-1.5"
                                                    >
                                                        <CopyIcon className="size-[18px] shrink-0" />
                                                        Copy Conversation
                                                    </Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem asChild>
                                                    <Link
                                                        href="#"
                                                        className="inline-flex items-center gap-1.5"
                                                    >
                                                        <TrashIcon className="size-[18px] shrink-0" />
                                                        Delete Conversation
                                                    </Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </ButtonGroup>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                                Popover
                            </CardHeader>
                            <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                                <ButtonGroup>
                                    <Button variant="outline-general">
                                        <BotIcon /> Copilot
                                    </Button>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline-general"
                                                size="icon"
                                                aria-label="Open Popover"
                                            >
                                                <ChevronDownIcon />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent
                                            align="end"
                                            className="rounded-xl p-0 text-sm"
                                        >
                                            <div className="px-4 py-3">
                                                <div className="text-sm font-medium">
                                                    Agent Tasks
                                                </div>
                                            </div>
                                            <Separator />
                                            <div className="p-4 text-sm *:[p:not(:last-child)]:mb-2">
                                                <Textarea
                                                    placeholder="Describe your task in natural language."
                                                    className="mb-4 resize-none"
                                                />
                                                <p className="font-medium">
                                                    Start a new task with
                                                    Copilot
                                                </p>
                                                <p className="text-muted-foreground">
                                                    Describe your task in
                                                    natural language. Copilot
                                                    will work in the background
                                                    and open a pull request for
                                                    your review.
                                                </p>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </ButtonGroup>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                        <Card>
                            <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                                Input Group
                            </CardHeader>
                            <CardContent className="relative flex flex-wrap items-center gap-4 px-5 py-4">
                                <ButtonGroup>
                                    <ButtonGroup>
                                        <Button variant="outline-general">
                                            <PlusIcon />
                                        </Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="w-full">
                                        <InputGroup>
                                            <InputGroupInput
                                                placeholder={
                                                    voiceEnabled
                                                        ? 'Record and send audio...'
                                                        : 'Send a message...'
                                                }
                                                disabled={voiceEnabled}
                                            />
                                            <InputGroupAddon align="inline-end">
                                                <TooltipProvider
                                                    delayDuration={0}
                                                >
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <InputGroupButton
                                                                onClick={() =>
                                                                    setVoiceEnabled(
                                                                        !voiceEnabled,
                                                                    )
                                                                }
                                                                variant={
                                                                    'black'
                                                                }
                                                                data-active={
                                                                    voiceEnabled
                                                                }
                                                                className="data-[active=true]:bg-danger data-[active=true]:text-white"
                                                                aria-pressed={
                                                                    voiceEnabled
                                                                }
                                                            >
                                                                <AudioLines />
                                                            </InputGroupButton>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            Voice Mode
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </ButtonGroup>
                                </ButtonGroup>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                                Select
                            </CardHeader>
                            <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                                <ButtonGroup>
                                    <ButtonGroup className="[&>*:not(:first-child)]:ms-px">
                                        <Select
                                            value={currency}
                                            onValueChange={setCurrency}
                                        >
                                            <SelectTrigger className="w-fit font-mono">
                                                {currency}
                                            </SelectTrigger>
                                            <SelectContent className="min-w-24">
                                                {CURRENCIES.map((currency) => (
                                                    <SelectItem
                                                        key={currency.value}
                                                        value={currency.value}
                                                    >
                                                        {currency.value}{' '}
                                                        <span>
                                                            {currency.label}
                                                        </span>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <Input
                                            placeholder="10.00"
                                            className="rounded-s-none"
                                        />
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button
                                            aria-label="Send"
                                            type="button"
                                            variant="black"
                                        >
                                            <ArrowRightIcon className="rtl:rotate-180" />
                                        </Button>
                                    </ButtonGroup>
                                </ButtonGroup>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
