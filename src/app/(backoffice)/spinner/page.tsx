import PageHeading from '@/components/layout/page-heading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from '@/components/ui/empty'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupTextarea,
} from '@/components/ui/input-group'
import { Item, ItemContent, ItemMedia, ItemTitle } from '@/components/ui/item'
import { Spinner } from '@/components/ui/spinner'
import {
    ArrowRight,
    Loader,
    Loader2,
    LoaderPinwheel,
    Search,
} from 'lucide-react'

export default function SpinnerPage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Spinner'} />

            <div className="flex flex-wrap items-start gap-4 sm:gap-6 lg:gap-8 lg:py-4">
                <Card>
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Spinner
                    </CardHeader>
                    <CardContent className="relative flex flex-col gap-4 px-5 py-4">
                        <Item variant="outline">
                            <ItemMedia>
                                <Spinner />
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitle className="line-clamp-1">
                                    Processing your payment...
                                </ItemTitle>
                            </ItemContent>
                            <ItemContent className="flex-none justify-end">
                                <span className="text-sm">$100.00</span>
                            </ItemContent>
                        </Item>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Customization
                    </CardHeader>
                    <CardContent className="relative flex items-center gap-6 px-5 py-4">
                        <Spinner icon={Loader} className="size-6" />
                        <Spinner icon={Loader2} className="size-6" />
                        <Spinner icon={LoaderPinwheel} className="size-6" />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Size
                    </CardHeader>
                    <CardContent className="relative flex flex-col items-center gap-8 px-5 py-4">
                        <div className="flex items-center gap-6">
                            <Spinner className="size-3" />
                            <Spinner className="size-4" />
                            <Spinner className="size-6" />
                            <Spinner className="size-8" />
                            <Spinner className="size-10" />
                        </div>
                        <div className="flex items-center gap-6">
                            <Spinner icon={Loader} className="size-3" />
                            <Spinner icon={Loader} className="size-4" />
                            <Spinner icon={Loader} className="size-6" />
                            <Spinner icon={Loader} className="size-8" />
                            <Spinner icon={Loader} className="size-10" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Color
                    </CardHeader>
                    <CardContent className="relative flex flex-col gap-8 px-5 py-4">
                        <div className="flex items-center gap-6">
                            <Spinner className="text-primary size-6" />
                            <Spinner className="size-6 text-black dark:text-white" />
                            <Spinner className="text-success size-6" />
                            <Spinner className="text-warning size-6" />
                            <Spinner className="text-danger size-6" />
                            <Spinner className="size-6 text-gray-700" />
                        </div>
                        <div className="flex items-center gap-6">
                            <Spinner
                                icon={Loader}
                                className="text-primary size-6"
                            />
                            <Spinner
                                icon={Loader}
                                className="size-6 text-black dark:text-white"
                            />
                            <Spinner
                                icon={Loader}
                                className="text-success size-6"
                            />
                            <Spinner
                                icon={Loader}
                                className="text-warning size-6"
                            />
                            <Spinner
                                icon={Loader}
                                className="text-danger size-6"
                            />
                            <Spinner
                                icon={Loader}
                                className="size-6 text-gray-700"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="flex flex-wrap items-start gap-4 sm:gap-6 lg:gap-8 lg:py-4">
                <Card>
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Button
                    </CardHeader>
                    <CardContent className="relative flex flex-wrap gap-5 px-5 py-4">
                        <Button disabled>
                            <Spinner />
                            Loading
                        </Button>
                        <Button variant={'outline'} disabled>
                            <Spinner />
                            Loading
                        </Button>
                        <Button variant={'black'} disabled>
                            <Spinner className="" />
                            Processing
                        </Button>
                        <Button variant={'outline-black'} disabled>
                            <Spinner />
                            Processing
                        </Button>
                        <Button variant={'outline-general'} disabled>
                            <Spinner />
                            Please wait
                        </Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Badge
                    </CardHeader>
                    <CardContent className="relative flex flex-wrap gap-5 px-5 py-4">
                        <Badge>
                            <span className="grid place-content-center">
                                <Spinner />
                            </span>
                            Syncing
                        </Badge>
                        <Badge variant="success">
                            <span className="grid place-content-center">
                                <Spinner />
                            </span>
                            Updating
                        </Badge>
                        <Badge variant="outline">
                            <span className="grid place-content-center">
                                <Spinner />
                            </span>
                            Processing
                        </Badge>
                    </CardContent>
                </Card>
            </div>
            <div className="flex flex-wrap items-start gap-4 sm:gap-6 lg:gap-8 lg:py-4">
                <Card className="w-full max-w-100">
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Input Group
                    </CardHeader>
                    <CardContent className="relative flex flex-wrap gap-5 px-5 py-4">
                        <InputGroup>
                            <InputGroupInput disabled placeholder="Search..." />
                            <InputGroupAddon>
                                <Search />
                            </InputGroupAddon>
                            <InputGroupAddon align="inline-end">
                                <Spinner />
                            </InputGroupAddon>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupTextarea
                                placeholder="Send a message..."
                                disabled
                            />
                            <InputGroupAddon align="block-end">
                                <Spinner /> Validating...
                                <InputGroupButton
                                    className="ms-auto"
                                    variant="black"
                                >
                                    <ArrowRight className="rtl:rotate-180" />
                                    <span className="sr-only">Send</span>
                                </InputGroupButton>
                            </InputGroupAddon>
                        </InputGroup>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Empty
                    </CardHeader>
                    <CardContent className="relative flex flex-wrap gap-5 px-5 py-4">
                        <Empty className="w-full">
                            <EmptyHeader>
                                <EmptyMedia variant="icon" className="size-8">
                                    <Spinner className="size-5" />
                                </EmptyMedia>
                                <EmptyTitle>Processing your request</EmptyTitle>
                                <EmptyDescription>
                                    Please wait while we process your request.
                                    Do not refresh the page.
                                </EmptyDescription>
                            </EmptyHeader>
                            <EmptyContent>
                                <Button variant="outline-general">
                                    Cancel
                                </Button>
                            </EmptyContent>
                        </Empty>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
