import PageHeading from '@/components/layout/page-heading'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BadgePercent, Cloud, X } from 'lucide-react'
import Image from 'next/image'

export default function Alertpage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Alert'} />

            <div className="flex min-h-[calc(100vh-160px)] w-full flex-col gap-[30px] rounded-lg bg-white p-5 lg:flex-row dark:bg-black-dark">
                <div className="grow space-y-[30px]">
                    <Alert variant={'warning'}>
                        <Cloud className="size-5 shrink-0 text-[#C74A1A]" />
                        <div className="grow">
                            <AlertTitle className="font-semibold text-[#C74A1A]">
                                Sync is disabled
                            </AlertTitle>
                            <AlertDescription className="text-[#662309]">
                                Enable cloud sync to help safeguard your data
                            </AlertDescription>
                        </div>
                        <button
                            type="button"
                            className="ml-auto text-danger hover:opacity-70"
                        >
                            <X className="size-[18px] shrink-0" />
                        </button>
                    </Alert>
                    <Alert variant={'discount'}>
                        <BadgePercent className="size-5 shrink-0 text-primary" />
                        <div className="grow">
                            <AlertTitle className="text-primary">
                                Get discount
                            </AlertTitle>
                            <AlertDescription className="text-[#0E1F65]">
                                Upgrade your plan before your trial ends to get
                                5% discount
                            </AlertDescription>
                        </div>
                        <Button type="button" className="ml-auto">
                            Upgrade
                        </Button>
                    </Alert>
                    <Alert variant={'destructive'}>
                        <div className="space-y-3 px-5 py-4">
                            <div className="flex grow items-center justify-between">
                                <Badge
                                    variant={'red'}
                                    className="font-semibold text-danger"
                                >
                                    Delete recurring event
                                </Badge>
                                <button
                                    type="button"
                                    className="grid size-[26px] place-content-center rounded-full bg-gray-400 transition hover:opacity-70 dark:bg-white/5"
                                >
                                    <X className="size-[18px] shrink-0 text-black dark:text-white" />
                                </button>
                            </div>
                            <div className="grow">
                                <AlertTitle className="text-black dark:text-white">
                                    Caring is the new marketing
                                </AlertTitle>
                                <AlertDescription className="text-gray-700 dark:text-gray-600">
                                    Are you sure you went to delete this event?
                                </AlertDescription>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-gray-400 px-5 py-4 dark:bg-black/30">
                            <Button
                                type="button"
                                size={'large'}
                                variant={'outline-general'}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="button"
                                size={'large'}
                                className="border-none bg-danger hover:bg-danger/90"
                            >
                                Delete Event
                            </Button>
                        </div>
                    </Alert>
                </div>
                <div>
                    <Alert className="block max-w-[400px] p-0 shadow-3xl xl:w-[400px] dark:shadow-sm">
                        <div className="relative">
                            <div className="h-[180px] overflow-hidden rounded-t-lg">
                                <Image
                                    src="/images/alert-card-img.png"
                                    alt="alert-card"
                                    width={400}
                                    height={180}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <button
                                type="button"
                                className="absolute right-2.5 top-2.5 grid size-[26px] place-content-center rounded-full bg-white/20 transition hover:opacity-70"
                            >
                                <X className="size-[18px] text-white" />
                            </button>
                            <div className="space-y-1.5 p-5">
                                <AlertTitle className="text-sm/tight text-black dark:text-white">
                                    How to design your site footer like we did
                                </AlertTitle>
                                <AlertDescription className="mb-0 text-xs/normal font-medium text-gray-700 dark:text-gray-600">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </AlertDescription>
                                <div className="mt-4! inline-flex items-center gap-4">
                                    <Button
                                        type="button"
                                        variant={'outline-general'}
                                    >
                                        Edit Message
                                    </Button>
                                    <Button type="button" variant={'black'}>
                                        Send
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Alert>
                </div>
            </div>
        </div>
    )
}
