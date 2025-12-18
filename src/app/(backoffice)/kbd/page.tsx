import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from '@/components/ui/input-group'
import { Kbd, KbdGroup } from '@/components/ui/kbd'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { Search } from 'lucide-react'

export default function KbdPage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Kbd'} />

            <div className="flex flex-col flex-wrap gap-4 sm:flex-row lg:gap-6">
                <Card className="flex min-w-60 flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Show instantly
                    </CardTitle>
                    <CardContent className="relative grow px-2.5 py-4 sm:px-4 lg:py-6">
                        <div className="flex flex-col items-center gap-4">
                            <KbdGroup>
                                <Kbd>⌘</Kbd>
                                <Kbd>⇧</Kbd>
                                <Kbd>⌥</Kbd>
                                <Kbd>⌃</Kbd>
                            </KbdGroup>
                            <KbdGroup>
                                <Kbd>Ctrl</Kbd>
                                <span>+</span>
                                <Kbd>B</Kbd>
                            </KbdGroup>
                        </div>
                    </CardContent>
                </Card>
                <Card className="flex min-w-60 flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Group
                    </CardTitle>
                    <CardContent className="relative grow px-2.5 py-4 sm:px-4 lg:py-6">
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-muted-foreground text-sm">
                                Use{' '}
                                <KbdGroup>
                                    <Kbd>Ctrl + B</Kbd>
                                    <Kbd>Ctrl + K</Kbd>
                                </KbdGroup>{' '}
                                to open the command palette
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="flex min-w-60 flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Button
                    </CardTitle>
                    <CardContent className="relative grow px-2.5 py-4 sm:px-4 lg:py-6">
                        <div className="flex flex-wrap items-center gap-4">
                            <Button variant="outline-general" className="pr-2">
                                Accept <Kbd>⏎</Kbd>
                            </Button>
                            <Button variant="outline-general" className="pr-2">
                                Cancel <Kbd>Esc</Kbd>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <Card className="flex min-w-60 flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Tooltip
                    </CardTitle>
                    <CardContent className="relative grow px-2.5 py-4 sm:px-4 lg:py-6">
                        <div className="flex flex-wrap gap-4">
                            <ButtonGroup className="">
                                <TooltipProvider delayDuration={0}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="outline-general">
                                                Save
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <div className="flex items-center gap-2">
                                                Save Changes <Kbd>S</Kbd>
                                            </div>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="outline-general">
                                                Print
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <div className="flex items-center gap-2">
                                                Print Document{' '}
                                                <KbdGroup>
                                                    <Kbd>Ctrl</Kbd>
                                                    <Kbd>P</Kbd>
                                                </KbdGroup>
                                            </div>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="outline-general"
                                                className="ltr:rounded-r-lg! rtl:rounded-l-lg!"
                                            >
                                                Copy
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <div className="flex items-center gap-2">
                                                Copy Document{' '}
                                                <KbdGroup>
                                                    <Kbd>Ctrl</Kbd>
                                                    <Kbd>C</Kbd>
                                                </KbdGroup>
                                            </div>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </ButtonGroup>
                        </div>
                    </CardContent>
                </Card>
                <Card className="flex min-w-60 flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Input Group
                    </CardTitle>
                    <CardContent className="relative grow px-2.5 py-4 sm:px-4 lg:py-6">
                        <InputGroup>
                            <InputGroupInput placeholder="Search..." />
                            <InputGroupAddon>
                                <Search />
                            </InputGroupAddon>
                            <InputGroupAddon align="inline-end">
                                <KbdGroup>
                                    <Kbd>⌘</Kbd>
                                    <Kbd>K</Kbd>
                                </KbdGroup>
                            </InputGroupAddon>
                        </InputGroup>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
