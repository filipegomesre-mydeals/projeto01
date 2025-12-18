import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { CircleHelp, Info } from 'lucide-react'

export default function PopoverPage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Popover'} />

            <div className="min-h-[calc(100vh-160px)] space-y-[30px] rounded-lg">
                <div className="flex flex-wrap items-center justify-center gap-8 sm:justify-start">
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Default Popovers
                        </CardHeader>
                        <CardContent className="relative flex flex-wrap items-center justify-center gap-4 p-7">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={'outline-general'}
                                        size={'large'}
                                    >
                                        Popover on Top
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                    side="top"
                                    sideOffset={14}
                                    className="relative p-0 before:absolute before:-bottom-1.5 before:left-1/2 before:size-3 before:-translate-x-1/2 before:rotate-45 before:rounded-[2px] before:bg-white before:shadow-3xl after:absolute after:bottom-0 after:left-1/2 after:h-3 after:w-5 after:-translate-x-1/2 after:bg-white sm:w-full sm:max-w-[392px] dark:shadow-sm dark:before:bg-black-dark dark:after:bg-black-dark"
                                >
                                    <div className="border-b border-gray-300 px-4 py-3 leading-tight text-black dark:border-gray-300/20 dark:text-white">
                                        Popover on Top
                                    </div>
                                    <div className="p-4 font-medium">
                                        And here&apos;s some amazing content.
                                        It&apos;s very engaging. Right?
                                    </div>
                                </PopoverContent>
                            </Popover>

                            <div className="hidden sm:block">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={'outline-general'}
                                            size={'large'}
                                        >
                                            Popover on Left
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        side="left"
                                        sideOffset={14}
                                        className="relative p-0 before:absolute before:-right-1.5 before:top-1/2 before:size-3 before:-translate-y-1/2 before:rotate-45 before:rounded-[2px] before:bg-white before:shadow-3xl after:absolute after:right-0 after:top-1/2 after:h-5 after:w-3 after:-translate-y-1/2 after:bg-white sm:w-full sm:max-w-[392px] dark:shadow-sm dark:before:bg-black-dark dark:after:bg-black-dark"
                                    >
                                        <div className="border-b border-gray-300 px-4 py-3 leading-tight text-black dark:border-gray-300/20 dark:text-white">
                                            Popover on Left
                                        </div>
                                        <div className="p-4 font-medium">
                                            And here&apos;s some amazing
                                            content. It&apos;s very engaging.
                                            Right?
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={'outline-general'}
                                        size={'large'}
                                    >
                                        Popover on Bottom
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                    side="bottom"
                                    sideOffset={14}
                                    className="relative p-0 before:absolute before:-top-1.5 before:left-1/2 before:size-3 before:-translate-x-1/2 before:rotate-45 before:rounded-[2px] before:bg-white before:shadow-3xl after:absolute after:left-1/2 after:top-0 after:h-3 after:w-5 after:-translate-x-1/2 after:bg-white sm:w-full sm:max-w-[392px] dark:shadow-sm dark:before:bg-black-dark dark:after:bg-black-dark"
                                >
                                    <div className="border-b border-gray-300 px-4 py-3 leading-tight text-black dark:border-gray-300/20 dark:text-white">
                                        Popover on Bottom
                                    </div>
                                    <div className="p-4 font-medium">
                                        And here&apos;s some amazing content.
                                        It&apos;s very engaging. Right?
                                    </div>
                                </PopoverContent>
                            </Popover>

                            <div className="hidden sm:block">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={'outline-general'}
                                            size={'large'}
                                        >
                                            Popover on Right
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        side="right"
                                        sideOffset={14}
                                        className="relative p-0 before:absolute before:-left-1.5 before:top-1/2 before:size-3 before:-translate-y-1/2 before:rotate-45 before:rounded-[2px] before:bg-white before:shadow-3xl after:absolute after:left-0 after:top-1/2 after:h-5 after:w-3 after:-translate-y-1/2 after:bg-white sm:w-full sm:max-w-[392px] dark:shadow-sm dark:before:bg-black-dark dark:after:bg-black-dark"
                                    >
                                        <div className="border-b border-gray-300 px-4 py-3 leading-tight text-black dark:border-gray-300/20 dark:text-white">
                                            Popover on Right
                                        </div>
                                        <div className="p-4 font-medium">
                                            And here&apos;s some amazing
                                            content. It&apos;s very engaging.
                                            Right?
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Icon Popovers
                        </CardHeader>
                        <CardContent className="relative flex flex-wrap items-center justify-between gap-5 p-9">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <button type="button">
                                        <Info className="size-5 text-danger" />
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent
                                    side="bottom"
                                    sideOffset={14}
                                    className="relative bg-danger p-0 before:absolute before:-top-1.5 before:left-1/2 before:size-3 before:-translate-x-1/2 before:rotate-45 before:rounded-[2px] before:bg-danger sm:w-full sm:max-w-[392px] dark:bg-danger"
                                >
                                    <div className="p-4 font-medium text-white">
                                        This popover is used to provide details
                                        about this icon.
                                    </div>
                                </PopoverContent>
                            </Popover>

                            <Popover>
                                <PopoverTrigger asChild>
                                    <button type="button">
                                        <CircleHelp className="size-5 text-primary" />
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent
                                    side="bottom"
                                    sideOffset={14}
                                    className="relative bg-primary p-0 before:absolute before:-top-1.5 before:left-1/2 before:size-3 before:-translate-x-1/2 before:rotate-45 before:rounded-[2px] before:bg-primary sm:w-full sm:max-w-[392px] dark:bg-primary"
                                >
                                    <div className="p-4 font-medium text-white">
                                        This popover is used to provide details
                                        about this icon.
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Disabled Popover
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 p-7">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={'outline-general'}
                                        size={'large'}
                                        disabled
                                    >
                                        Disabled Popover
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                    side="top"
                                    sideOffset={14}
                                    className="relative p-0 before:absolute before:-bottom-1.5 before:left-1/2 before:size-3 before:-translate-x-1/2 before:rotate-45 before:rounded-[2px] before:bg-white before:shadow-3xl after:absolute after:bottom-0 after:left-1/2 after:h-3 after:w-5 after:-translate-x-1/2 after:bg-white sm:w-full sm:max-w-[392px]"
                                >
                                    <div className="border-b border-gray-300 px-4 py-3 leading-tight text-black dark:border-gray-300/20 dark:text-white">
                                        Popover on Top
                                    </div>
                                    <div className="p-4 font-medium">
                                        And here&apos;s some amazing content.
                                        It&apos;s very engaging. Right?
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
