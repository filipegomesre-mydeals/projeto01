import ButtonCard from '@/app/(auth)/input-group/_button-card'
import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Spinner } from '@/components/ui/spinner'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import {
    ArrowUpIcon,
    Check,
    ChevronDown,
    Copy,
    CornerDownLeft,
    DollarSign,
    Info,
    InfoIcon,
    Loader,
    Mail,
    MailIcon,
    MoreHorizontal,
    Plus,
    RefreshCcw,
    Search,
    User,
} from 'lucide-react'

export default function InputGroupPage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Input Group'} />

            <div className="grid gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Input Group
                    </CardTitle>
                    <CardContent className="relative grow space-y-5 px-2.5 py-4 sm:px-4 lg:py-6">
                        <InputGroup>
                            <InputGroupInput placeholder="Search..." />
                            <InputGroupAddon>
                                <Search />
                            </InputGroupAddon>
                            <InputGroupAddon align="inline-end">
                                12 results
                            </InputGroupAddon>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupInput
                                placeholder="example.com"
                                className="ltr:pl-1.5! rtl:pr-1.5!"
                            />
                            <InputGroupAddon>
                                <InputGroupText>https://</InputGroupText>
                            </InputGroupAddon>
                            <InputGroupAddon align="inline-end">
                                <TooltipProvider delayDuration={0}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button type="button">
                                                <Info className="size-4" />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            This is content in a tooltip.
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </InputGroupAddon>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupTextarea placeholder="Ask, Search or Chat..." />
                            <InputGroupAddon align="block-end">
                                <InputGroupButton
                                    variant="outline-general"
                                    className="rounded-full"
                                    size="icon-xs"
                                >
                                    <Plus />
                                </InputGroupButton>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            type="button"
                                            variant={'outline-general'}
                                            size={'small'}
                                            className="py-2"
                                        >
                                            Auto
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        side="top"
                                        align="start"
                                    >
                                        <DropdownMenuItem>
                                            Auto
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Agent
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Manual
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <InputGroupText className="ml-auto">
                                    52% used
                                </InputGroupText>
                                <Separator
                                    orientation="vertical"
                                    className="!h-4"
                                />
                                <InputGroupButton
                                    variant="default"
                                    className="rounded-full"
                                    size="icon-xs"
                                    disabled
                                >
                                    <ArrowUpIcon />
                                    <span className="sr-only">Send</span>
                                </InputGroupButton>
                            </InputGroupAddon>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupInput placeholder="@shadcn" />
                            <InputGroupAddon align="inline-end">
                                <div className="bg-primary flex size-4 items-center justify-center rounded-full text-white">
                                    <Check className="size-3" />
                                </div>
                            </InputGroupAddon>
                        </InputGroup>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Icon
                    </CardTitle>
                    <CardContent className="relative grow space-y-5 px-2.5 py-4 sm:px-4 lg:py-6">
                        <InputGroup>
                            <InputGroupInput placeholder="Search..." />
                            <InputGroupAddon>
                                <Search />
                            </InputGroupAddon>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupInput
                                type="email"
                                placeholder="Enter your email"
                            />
                            <InputGroupAddon>
                                <MailIcon />
                            </InputGroupAddon>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupInput placeholder="Name" />
                            <InputGroupAddon>
                                <User />
                            </InputGroupAddon>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupInput placeholder="Username" />
                            <InputGroupAddon align="inline-end">
                                <Check />
                                <TooltipProvider delayDuration={0}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button type="button">
                                                <Info className="size-4" />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent className="max-w-40 text-center text-xs/snug">
                                            Enter a unique username for your
                                            account.
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </InputGroupAddon>
                        </InputGroup>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Text
                    </CardTitle>
                    <CardContent className="relative grow space-y-5 px-2.5 py-4 sm:px-4 lg:py-6">
                        <InputGroup>
                            <InputGroupAddon>
                                <DollarSign />
                            </InputGroupAddon>
                            <InputGroupInput placeholder="0.00" />
                            <InputGroupAddon align={'inline-end'}>
                                USD
                            </InputGroupAddon>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupInput
                                type="email"
                                placeholder="http://exmple.com"
                            />
                            <InputGroupAddon align={'inline-end'}>
                                .com
                            </InputGroupAddon>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupInput placeholder="Username" />
                            <InputGroupAddon align="inline-end">
                                <Check />
                                <TooltipProvider delayDuration={0}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button type="button">
                                                <Info className="size-4" />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent className="max-w-40 text-center text-xs/snug">
                                            Enter a unique username for your
                                            account.
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </InputGroupAddon>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupTextarea placeholder="Ask, Search or Chat..." />
                            <InputGroupAddon align={'block-end'}>
                                <p>60 characters left</p>
                            </InputGroupAddon>
                        </InputGroup>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Button
                    </CardTitle>
                    <CardContent className="relative grow space-y-5 px-2.5 py-4 sm:px-4 lg:py-6">
                        <ButtonCard />
                    </CardContent>
                </Card>

                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Tooltip
                    </CardTitle>
                    <CardContent className="relative grow space-y-5 px-2.5 py-4 sm:px-4 lg:py-6">
                        <InputGroup>
                            <InputGroupInput placeholder="Username" />
                            <InputGroupAddon align="inline-end">
                                <Check />
                                <TooltipProvider delayDuration={0}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button type="button">
                                                <Info className="size-4" />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent className="max-w-40 text-center text-xs/snug">
                                            Enter a unique username for your
                                            account.
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </InputGroupAddon>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupInput placeholder="Enter your email" />
                            <InputGroupAddon align="inline-start">
                                <Mail />
                            </InputGroupAddon>
                            <InputGroupAddon align="inline-end">
                                <TooltipProvider delayDuration={0}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button type="button">
                                                <Info className="size-4" />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent className="max-w-40 text-center text-xs/snug">
                                            Enter a valid email address.
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </InputGroupAddon>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupInput
                                placeholder="Enter your password"
                                type="password"
                                className="pe-9"
                            />
                            <InputGroupAddon align="inline-start">
                                <TooltipProvider delayDuration={0}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button type="button">
                                                <Info className="size-4" />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent className="max-w-40 text-center text-xs/snug">
                                            Must be 8 characters long.
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </InputGroupAddon>
                        </InputGroup>
                    </CardContent>
                </Card>

                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Textarea
                    </CardTitle>
                    <CardContent className="relative grow space-y-5 px-2.5 py-4 sm:px-4 lg:py-6">
                        <InputGroup>
                            <InputGroupTextarea
                                id="textarea-code-32"
                                placeholder="console.log('Hello, world!');"
                                rows={4}
                            />
                            <InputGroupAddon
                                align="block-end"
                                className="border-t border-gray-300 dark:border-gray-700/30"
                            >
                                <InputGroupText>
                                    Line 1, Column 1
                                </InputGroupText>
                                <InputGroupButton
                                    size="xs"
                                    className="ms-auto"
                                    variant="default"
                                >
                                    Run <CornerDownLeft />
                                </InputGroupButton>
                            </InputGroupAddon>
                            <InputGroupAddon
                                align="block-start"
                                className="border-b border-gray-300 dark:border-gray-700/30"
                            >
                                <InputGroupText className="font-mono font-medium">
                                    script.js
                                </InputGroupText>
                                <InputGroupButton
                                    className="ms-auto"
                                    variant={'black'}
                                    size="icon-xs"
                                >
                                    <RefreshCcw className="size-3!" />
                                </InputGroupButton>
                                <InputGroupButton
                                    variant={'outline-general'}
                                    size="icon-xs"
                                >
                                    <Copy className="size-3!" />
                                </InputGroupButton>
                            </InputGroupAddon>
                        </InputGroup>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Spinner
                    </CardTitle>
                    <CardContent className="relative grow space-y-5 px-2.5 py-4 sm:px-4 lg:py-6">
                        <InputGroup data-disabled>
                            <InputGroupInput
                                placeholder="Searching..."
                                disabled
                            />
                            <InputGroupAddon align="inline-end">
                                <Spinner />
                            </InputGroupAddon>
                        </InputGroup>
                        <InputGroup data-disabled>
                            <InputGroupInput
                                placeholder="Saving changes..."
                                disabled
                            />
                            <InputGroupAddon align="inline-end">
                                <InputGroupText>Saving...</InputGroupText>
                                <Spinner />
                            </InputGroupAddon>
                        </InputGroup>
                        <InputGroup data-disabled>
                            <InputGroupInput
                                placeholder="Refreshing data..."
                                disabled
                            />
                            <InputGroupAddon>
                                <Loader className="animate-spin" />
                            </InputGroupAddon>
                            <InputGroupAddon align="inline-end">
                                <InputGroupText className="text-muted-foreground">
                                    Please wait...
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Label
                    </CardTitle>
                    <CardContent className="relative grow space-y-5 px-2.5 py-4 sm:px-4 lg:py-6">
                        <InputGroup>
                            <InputGroupInput
                                id="email-2"
                                placeholder="example@email.com"
                            />
                            <InputGroupAddon align="block-start">
                                <Label htmlFor="email-2">Email</Label>
                                <TooltipProvider delayDuration={0}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button
                                                type="button"
                                                aria-label="Help"
                                                className="ms-auto rounded-full"
                                            >
                                                <InfoIcon className="size-4" />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent className="text-xs">
                                            <p>
                                                We&apos;ll use this to send you
                                                notifications.
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </InputGroupAddon>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupInput
                                id="UserName"
                                placeholder="SB_Themes"
                            />
                            <InputGroupAddon align="block-start">
                                <Label htmlFor="UserName">Username</Label>
                                <TooltipProvider delayDuration={0}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button
                                                type="button"
                                                aria-label="Help"
                                                className="ms-auto rounded-full"
                                            >
                                                <InfoIcon className="size-4" />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent className="text-xs">
                                            <p>
                                                Enter a unique username for your
                                                account.
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </InputGroupAddon>
                        </InputGroup>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Dropdown
                    </CardTitle>
                    <CardContent className="relative grow space-y-5 px-2.5 py-4 sm:px-4 lg:py-6">
                        <InputGroup>
                            <InputGroupInput placeholder="Enter file name" />
                            <InputGroupAddon align="inline-end">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <InputGroupButton
                                            aria-label="More"
                                            size="icon-xs"
                                            variant={'outline-general'}
                                        >
                                            <MoreHorizontal />
                                        </InputGroupButton>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>
                                            Settings
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Copy path
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Open location
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </InputGroupAddon>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupInput placeholder="Enter search query" />
                            <InputGroupAddon
                                align="inline-end"
                                className="ltr:pr-1 rtl:pl-1"
                            >
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <InputGroupButton
                                            variant="black"
                                            size={'sm'}
                                            className="ltr:!pr-1.5 rtl:!pl-1.5"
                                        >
                                            Search
                                            <ChevronDown className="size-3" />
                                        </InputGroupButton>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>
                                            Documentation
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Blog Posts
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Changelog
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </InputGroupAddon>
                        </InputGroup>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Button Group
                    </CardTitle>
                    <CardContent className="relative grow space-y-5 px-2.5 py-4 sm:px-4 lg:py-6">
                        <ButtonGroup className="w-full [&>*:not(:first-child)]:ms-px dark:[&>*:not(:first-child)]:-ms-px">
                            <ButtonGroupText asChild>
                                <Label htmlFor="url">https://</Label>
                            </ButtonGroupText>
                            <InputGroup>
                                <InputGroupInput id="url" />
                            </InputGroup>
                            <ButtonGroupText>.com</ButtonGroupText>
                        </ButtonGroup>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
