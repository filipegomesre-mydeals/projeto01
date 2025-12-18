import PageHeading from '@/components/layout/page-heading'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { CircleUser, FileImage, FileVideoCamera, UserRound } from 'lucide-react'

export default function SkeletonDemo() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Skeleton'} />

            <div className="grid sm:grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-6">
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Avatar List Skeleton
                    </CardTitle>
                    <CardContent className="relative flex grow flex-col gap-4 p-2.5 sm:p-4">
                        <div className="flex items-center gap-2.5 sm:gap-4">
                            <Skeleton className="grid size-12 place-content-center rounded-full">
                                <UserRound className="size-6 text-gray-500" />
                            </Skeleton>
                            <div className="grow space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-2.5 w-[calc(100%-15%)]" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2.5 sm:gap-4">
                            <Skeleton className="grid size-12 place-content-center rounded-full">
                                <UserRound className="size-6 text-gray-500" />
                            </Skeleton>
                            <div className="grow space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-2.5 w-[calc(100%-15%)]" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2.5 sm:gap-4">
                            <Skeleton className="grid size-12 place-content-center rounded-full">
                                <UserRound className="size-6 text-gray-500" />
                            </Skeleton>
                            <div className="grow space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-2.5 w-[calc(100%-15%)]" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2.5 sm:gap-4">
                            <Skeleton className="grid size-12 place-content-center rounded-full">
                                <UserRound className="size-6 text-gray-500" />
                            </Skeleton>
                            <div className="grow space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-2.5 w-[calc(100%-15%)]" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Card Skeleton
                    </CardTitle>
                    <CardContent className="relative flex grow flex-col gap-4 p-2.5 sm:p-4">
                        <Skeleton className="grid h-44 place-content-center rounded-xl">
                            <FileImage className="size-8 stroke-[1.5px] text-gray-500" />
                        </Skeleton>
                        <div className="space-y-3">
                            <Skeleton className="h-4 w-[calc(100%-30%)]" />
                            <div className="space-y-1.5">
                                <Skeleton className="h-2.5 w-full" />
                                <Skeleton className="h-2.5 w-full" />
                                <Skeleton className="h-2.5 w-full" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Video Skeleton
                    </CardTitle>
                    <CardContent className="relative flex grow flex-col gap-4 p-2.5 sm:p-4">
                        <Skeleton className="grid h-56 place-content-center rounded-xl">
                            <FileVideoCamera className="size-8 stroke-[1.5px] text-gray-500" />
                        </Skeleton>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Widget Skeleton
                    </CardTitle>
                    <CardContent className="relative flex grow flex-col gap-6 p-2.5 sm:p-4">
                        <div className="space-y-2">
                            <Skeleton className="h-3 w-[calc(100%-60%)] rounded-xl" />
                            <Skeleton className="h-2 w-[calc(100%-40%)] rounded-xl" />
                        </div>
                        <div className="grid min-h-52 grow grid-cols-7 gap-2.5 2xl:gap-4">
                            <Skeleton className="rounded-t-lg rounded-b-none" />
                            <Skeleton className="mt-auto h-[calc(100%-20%)] rounded-t-lg rounded-b-none" />
                            <Skeleton className="mt-auto h-[calc(100%-10%)] rounded-t-lg rounded-b-none" />
                            <Skeleton className="mt-auto h-[calc(100%-25%)] rounded-t-lg rounded-b-none" />
                            <Skeleton className="mt-auto h-[calc(100%-40%)] rounded-t-lg rounded-b-none" />
                            <Skeleton className="rounded-t-lg rounded-b-none" />
                            <Skeleton className="mt-auto h-[calc(100%-50%)] rounded-t-lg rounded-b-none" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="sm:col-span-2 flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Table Skeleton
                    </CardTitle>
                    <CardContent className="relative flex grow flex-col gap-4 sm:gap-6 p-2.5 sm:p-4">
                        <div className="grid grid-cols-2 items-center">
                            <Skeleton className="h-4 w-[calc(100%-60%)] rounded-xl" />
                            <Skeleton className="ms-auto h-2.5 w-[calc(100%-30%)] rounded-xl" />
                        </div>
                        <table className="[&_td]:px-2 [&_td]:py-2.5 [&_td]:first:ps-0! [&_td]:last:w-0! [&_td]:last:pe-0! [&_th]:px-2 [&_th]:py-2.5 [&_th]:first:ps-0!">
                            <thead>
                                <tr>
                                    <th>
                                        <Skeleton className="h-5 max-w-20" />
                                    </th>
                                    <th>
                                        <Skeleton className="h-5 max-w-20" />
                                    </th>
                                    <th>
                                        <Skeleton className="h-5 max-w-20" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Skeleton className="h-3 w-full" />
                                    </td>
                                    <td>
                                        <Skeleton className="h-3 w-full" />
                                    </td>
                                    <td>
                                        <Skeleton className="h-3 w-full" />
                                    </td>
                                    <td>
                                        <Skeleton className="h-3 w-3 rounded" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Skeleton className="h-3 w-full" />
                                    </td>
                                    <td>
                                        <Skeleton className="h-3 w-full" />
                                    </td>
                                    <td>
                                        <Skeleton className="h-3 w-full" />
                                    </td>
                                    <td>
                                        <Skeleton className="h-3 w-3 rounded" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Skeleton className="h-3 w-full" />
                                    </td>
                                    <td>
                                        <Skeleton className="h-3 w-full" />
                                    </td>
                                    <td>
                                        <Skeleton className="h-3 w-full" />
                                    </td>
                                    <td>
                                        <Skeleton className="h-3 w-3 rounded" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Skeleton className="h-3 w-full" />
                                    </td>
                                    <td>
                                        <Skeleton className="h-3 w-full" />
                                    </td>
                                    <td>
                                        <Skeleton className="h-3 w-full" />
                                    </td>
                                    <td>
                                        <Skeleton className="h-3 w-3 rounded" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </CardContent>
                </Card>

                <Card className="sm:col-span-2 flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Testimonial Skeleton
                    </CardTitle>
                    <CardContent className="relative flex grow flex-col justify-center gap-6 p-2.5 sm:p-4">
                        <div className="space-y-2">
                            <Skeleton className="mx-auto h-2.5 w-[calc(100%-10%)] rounded-xl" />
                            <Skeleton className="mx-auto h-2.5 w-[calc(100%-20%)] rounded-xl" />
                            <Skeleton className="mx-auto h-2.5 w-[calc(100%-30%)] rounded-xl" />
                        </div>
                        <div className="flex items-center justify-center gap-2.5">
                            <Skeleton className="grid size-10 place-content-center rounded-full">
                                <UserRound className="size-5 text-gray-500" />
                            </Skeleton>
                            <div className="max-w-40 grow space-y-2">
                                <Skeleton className="h-3 w-full" />
                                <Skeleton className="h-2 w-[calc(100%-15%)]" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
