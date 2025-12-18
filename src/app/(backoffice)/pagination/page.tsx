import PageHeading from '@/components/layout/page-heading'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'
import { Ellipsis } from 'lucide-react'

export default function PaginationDemo() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Pagination'} />

            <div className="flex w-full flex-col sm:items-start gap-4 lg:gap-6">
                <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center">
                    <Card className="flex flex-col">
                        <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Previous and next with icons
                        </CardTitle>
                        <CardContent className="relative flex grow flex-col gap-4 px-2.5 py-4 sm:px-4 lg:py-6">
                            <Pagination className="ms-0 w-auto justify-normal rounded-lg border border-gray-300 dark:border-gray-600/50">
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious
                                            href="#"
                                            text
                                            className="w-auto!"
                                        />
                                    </PaginationItem>

                                    <PaginationItem>
                                        <PaginationNext
                                            href="#"
                                            text
                                            className="w-auto!"
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col">
                        <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Previous and next
                        </CardTitle>
                        <CardContent className="relative flex grow flex-col gap-4 px-2.5 py-4 sm:px-4 lg:py-6">
                            <Pagination className="ms-0 w-auto justify-normal rounded-lg border border-gray-300 dark:border-gray-600/50">
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#" />
                                    </PaginationItem>

                                    <PaginationItem>
                                        <PaginationNext href="#" />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center">
                    <Card className="flex flex-col">
                        <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Default pagination
                        </CardTitle>
                        <CardContent className="relative flex grow flex-col gap-4 px-2.5 py-4 sm:px-4 lg:py-6">
                            <Pagination className="ms-0 w-auto justify-normal rounded-lg border border-gray-300 dark:border-gray-600/50">
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious
                                            href="#"
                                            text
                                            className="w-auto!"
                                        />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive>
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            3
                                        </PaginationLink>
                                    </PaginationItem>

                                    <PaginationItem className="flex size-7.5 items-end justify-center border-x border-gray-300 dark:border-gray-300/20">
                                        <Ellipsis className="size-4" />
                                    </PaginationItem>

                                    <PaginationItem>
                                        <PaginationNext
                                            href="#"
                                            text
                                            className="w-auto!"
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col">
                        <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Pagination with icons
                        </CardTitle>
                        <CardContent className="relative flex grow flex-col gap-4 px-2.5 py-4 sm:px-4 lg:py-6">
                            <Pagination className="ms-0 w-auto justify-normal rounded-lg border border-gray-300 dark:border-gray-600/50">
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive>
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            3
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem className="flex size-7.5 items-end justify-center border-x border-gray-300 dark:border-gray-300/20">
                                        <Ellipsis className="size-4" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            10
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#" />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </CardContent>
                    </Card>
                </div>

                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Table data pagination with icons
                    </CardTitle>
                    <CardContent className="relative flex grow flex-wrap gap-4 px-2.5 py-4 sm:px-4 lg:py-6">
                        <div className="dark:bg-black-dark rounded-lg border border-gray-300 bg-white px-3 py-[7px] text-xs font-medium text-[#707079] shadow-sm dark:border-gray-600/50 dark:text-gray-500">
                            Showing &nbsp;
                            <span className="text-black dark:text-white">
                                1
                            </span>
                            &nbsp;to&nbsp;
                            <span className="text-black dark:text-white">
                                10
                            </span>
                            &nbsp;of&nbsp;
                            <span className="text-black dark:text-white">
                                100
                            </span>
                            &nbsp;Entries
                        </div>
                        <Pagination className="ms-0 w-auto justify-normal rounded-lg border border-gray-300 dark:border-gray-600/50">
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious
                                        href="#"
                                        text
                                        className="w-auto!"
                                    />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" isActive>
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>

                                <PaginationItem className="flex size-7.5 items-end justify-center border-x border-gray-300 dark:border-gray-300/20">
                                    <Ellipsis className="size-4" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext
                                        href="#"
                                        text
                                        className="w-auto!"
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
