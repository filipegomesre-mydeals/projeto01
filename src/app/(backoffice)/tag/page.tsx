import PageHeading from '@/components/layout/page-heading'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { BadgeCheck, CircleX, Clock } from 'lucide-react'

export default function Tag() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Tag'} />

            <div className="min-h-[calc(100vh-160px)] space-y-[30px] rounded-lg">
                <div className="flex flex-col items-start gap-8">
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Tag
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                            <Badge variant="orange">Pending</Badge>
                            <Badge variant="green">Done</Badge>
                            <Badge variant="blue">Booked</Badge>
                            <Badge variant="purple">Status</Badge>
                            <Badge variant="red">Canceled</Badge>
                            <Badge size={'small'} variant="orange">
                                Pending
                            </Badge>
                            <Badge size={'small'} variant="green">
                                Done
                            </Badge>
                            <Badge size={'small'} variant="blue">
                                Booked
                            </Badge>
                            <Badge size={'small'} variant="purple">
                                Status
                            </Badge>
                            <Badge size={'small'} variant="red">
                                Canceled
                            </Badge>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Tag
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                            <Badge size="large" variant="success">
                                Success
                            </Badge>
                            <Badge size="large" variant="pending">
                                Pending
                            </Badge>
                            <Badge size="large" variant="danger">
                                Danger
                            </Badge>
                            <Badge variant="success">Success</Badge>
                            <Badge variant="pending">Pending</Badge>
                            <Badge variant="danger">Danger</Badge>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Tag
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                            <Badge variant={'primary'}>Blue</Badge>
                            <Badge>Dark</Badge>
                            <Badge variant={'grey'}>Grey 1</Badge>
                            <Badge variant={'grey-700'}>Grey 2</Badge>
                            <Badge variant={'grey-600'}>Grey 3</Badge>
                            <Badge variant={'grey-500'}>Grey 4</Badge>
                            <Badge variant={'grey-400'}>Card BG</Badge>
                            <Badge variant={'grey-300'}>Border</Badge>
                            <Badge size={'small'} variant={'primary'}>
                                Blue
                            </Badge>
                            <Badge size={'small'}>Dark</Badge>
                            <Badge size={'small'} variant={'grey'}>
                                Grey 1
                            </Badge>
                            <Badge size={'small'} variant={'grey-700'}>
                                Grey 2
                            </Badge>
                            <Badge size={'small'} variant={'grey-600'}>
                                Grey 3
                            </Badge>
                            <Badge size={'small'} variant={'grey-500'}>
                                Grey 4
                            </Badge>
                            <Badge size={'small'} variant={'grey-400'}>
                                Card BG
                            </Badge>
                            <Badge size={'small'} variant={'grey-300'}>
                                Border
                            </Badge>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Number Tag
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                            <Badge size="number" variant="primary">
                                10
                            </Badge>
                            <Badge size="number">50</Badge>
                            <Badge size="number" variant="outline">
                                100
                            </Badge>
                            <Badge size="number" variant="danger">
                                200
                            </Badge>
                            <Badge size="number" variant="pending">
                                500
                            </Badge>
                            <Badge size="number" variant="success">
                                1000
                            </Badge>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Tag with Icon
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                            <Badge variant="success">
                                <BadgeCheck />
                                Success
                            </Badge>
                            <Badge variant="pending">
                                <Clock />
                                Pending
                            </Badge>
                            <Badge variant="danger">
                                <CircleX />
                                Danger
                            </Badge>
                            <Badge size={'icon'} variant="success">
                                <BadgeCheck />
                                Success
                            </Badge>
                            <Badge size={'icon'} variant="pending">
                                <Clock />
                                Pending
                            </Badge>
                            <Badge size={'icon'} variant="danger">
                                <CircleX />
                                Danger
                            </Badge>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
