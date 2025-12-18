import PageHeading from '@/components/layout/page-heading'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Camera, Crown, Gem, Plus, Zap } from 'lucide-react'

export default function AvatarPage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Avatar'} />

            <div className="min-h-[calc(100vh-160px)] space-y-[30px] rounded-lg">
                <div className="flex-wrap gap-4 space-y-4 sm:flex sm:space-y-0">
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Avatars
                        </CardHeader>
                        <CardContent className="relative flex items-center gap-7 overflow-x-auto p-7">
                            <Avatar>
                                <AvatarImage src="/images/avatar.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarImage src="/images/avatar-two.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarImage src="/images/avatar-three.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarImage src="/images/avatar-four.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarImage src="/images/avatar-six.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Avatar Sizes
                        </CardHeader>
                        <CardContent className="relative flex items-center gap-7 overflow-x-auto px-5 py-4">
                            <Avatar className="size-6">
                                <AvatarImage src="/images/avatar.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className="size-[34px]">
                                <AvatarImage src="/images/avatar-two.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className="size-11">
                                <AvatarImage src="/images/avatar-three.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className="size-14">
                                <AvatarImage src="/images/avatar-four.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className="size-16">
                                <AvatarImage src="/images/avatar-six.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Avatar with Icons
                        </CardHeader>
                        <CardContent className="relative flex items-center gap-7 overflow-x-auto px-5 py-4">
                            <Avatar size={'thin'}>
                                <Badge
                                    size={'number'}
                                    variant={'pending'}
                                    className="absolute bottom-0 right-0 grid size-1.5 place-content-center rounded-full border-[0.6px] border-white p-0 shadow-[0_0_11px_0_rgba(51,92,255,0.2)] dark:border-black-dark"
                                >
                                    <Camera className="size-1!" />
                                </Badge>
                                <AvatarImage src="/images/avatar.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar size={'small'}>
                                <Badge
                                    size={'number'}
                                    variant={'primary'}
                                    className="absolute bottom-0 right-0 grid size-2.5 place-content-center rounded-full border border-white p-0 shadow-[0_0_11px_0_rgba(51,92,255,0.2)] dark:border-black-dark"
                                >
                                    <Gem className="size-1.5!" />
                                </Badge>
                                <AvatarImage src="/images/avatar-two.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar size={'medium'}>
                                <Badge
                                    size={'number'}
                                    variant={'success'}
                                    className="absolute bottom-0 right-0 grid size-3 place-content-center rounded-full border border-white p-0 shadow-[0_0_14px_0_rgba(51,92,255,0.2)] dark:border-black-dark"
                                >
                                    <Crown className="size-2!" />
                                </Badge>
                                <AvatarImage src="/images/avatar-three.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar size={'large'}>
                                <Badge
                                    size={'number'}
                                    variant={'danger'}
                                    className="absolute bottom-0 right-0 grid size-4 place-content-center rounded-full border border-white shadow-[0_0_17px_0_rgba(51,92,255,0.2)] dark:border-black-dark"
                                >
                                    <Zap className="size-2.5!" />
                                </Badge>
                                <AvatarImage src="/images/avatar-four.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar size={'extralarge'}>
                                <AvatarImage src="/images/avatar-six.svg" />
                                <Badge
                                    size={'number'}
                                    variant={'primary'}
                                    className="absolute bottom-0 right-0 grid size-5 place-content-center rounded-full border-2 border-white shadow-[0_0_21px_0_rgba(51,92,255,0.2)] dark:border-black-dark"
                                >
                                    <Plus />
                                </Badge>
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex-wrap gap-4 space-y-4 sm:flex sm:space-y-0">
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Avatar with Online Status Indicators
                        </CardHeader>
                        <CardContent className="relative flex items-center gap-7 overflow-x-auto px-5 py-4">
                            <Avatar size={'thin'}>
                                <span className="absolute bottom-0 right-0 size-1.5 rounded-full border border-white bg-success dark:border-black-dark"></span>
                                <AvatarImage src="/images/avatar.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar size={'small'}>
                                <span className="absolute bottom-0 right-0 size-2.5 rounded-full border border-white bg-success dark:border-black-dark"></span>
                                <AvatarImage src="/images/avatar-two.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar size={'medium'}>
                                <span className="absolute bottom-0 right-0 size-3 rounded-full border-[1.5px] border-white bg-success dark:border-black-dark"></span>
                                <AvatarImage src="/images/avatar-three.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar size={'large'}>
                                <span className="absolute bottom-0 right-0 size-3.5 rounded-full border-2 border-white bg-success dark:border-black-dark"></span>
                                <AvatarImage src="/images/avatar-four.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar size={'extralarge'}>
                                <AvatarImage src="/images/avatar-six.svg" />
                                <span className="absolute bottom-0 right-0 size-3.5 rounded-full border-2 border-white bg-success dark:border-black-dark"></span>
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Avatar with Offline Status Indicators
                        </CardHeader>
                        <CardContent className="relative flex items-center gap-7 overflow-x-auto px-5 py-4">
                            <Avatar size={'thin'}>
                                <span className="absolute bottom-0 right-0 size-1.5 rounded-full border border-white bg-gray-500 dark:border-black-dark"></span>
                                <AvatarImage src="/images/avatar.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar size={'small'}>
                                <span className="absolute bottom-0 right-0 size-2.5 rounded-full border border-white bg-gray-500 dark:border-black-dark"></span>
                                <AvatarImage src="/images/avatar-two.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar size={'medium'}>
                                <span className="absolute bottom-0 right-0 size-3 rounded-full border-[1.5px] border-white bg-gray-500 dark:border-black-dark"></span>
                                <AvatarImage src="/images/avatar-three.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar size={'large'}>
                                <span className="absolute bottom-0 right-0 size-3.5 rounded-full border-2 border-white bg-gray-500 dark:border-black-dark"></span>
                                <AvatarImage src="/images/avatar-four.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar size={'extralarge'}>
                                <AvatarImage src="/images/avatar-six.svg" />
                                <span className="absolute bottom-0 right-0 size-3.5 rounded-full border-2 border-white bg-gray-500 dark:border-black-dark"></span>
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Avatar with Icons
                        </CardHeader>
                        <CardContent className="relative flex items-center gap-7 overflow-x-auto px-5 py-4">
                            <Avatar size={'thin'}>
                                <Badge
                                    size={'number'}
                                    variant={'pending'}
                                    className="absolute right-0 top-0 grid h-1.5 min-w-1.5 place-content-center rounded-full px-0.5 py-0 text-[3px]"
                                >
                                    6
                                </Badge>
                                <AvatarImage src="/images/avatar.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar size={'small'}>
                                <Badge
                                    size={'number'}
                                    variant={'primary'}
                                    className="absolute right-0 top-0 grid h-2.5 min-w-2.5 place-content-center rounded-full px-0.5 py-0 text-[5px]"
                                >
                                    21
                                </Badge>
                                <AvatarImage src="/images/avatar-two.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar size={'medium'}>
                                <Badge
                                    size={'number'}
                                    variant={'success'}
                                    className="absolute right-0 top-0 grid h-3 min-w-3 place-content-center rounded-full px-0.5 py-0 text-[6px]"
                                >
                                    58
                                </Badge>
                                <AvatarImage src="/images/avatar-three.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar size={'large'}>
                                <Badge
                                    size={'number'}
                                    variant={'danger'}
                                    className="absolute right-0 top-0 grid h-4 min-w-4 place-content-center rounded-full px-0.5 py-0 text-[8px]"
                                >
                                    120
                                </Badge>
                                <AvatarImage src="/images/avatar-four.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar size={'extralarge'}>
                                <AvatarImage src="/images/avatar-six.svg" />
                                <Badge
                                    size={'number'}
                                    variant={'primary'}
                                    className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-content-center rounded-full px-0.5 py-0 text-[10px]"
                                >
                                    12
                                </Badge>
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex-wrap gap-4 space-y-4 sm:flex sm:space-y-0">
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Avatar With Initials
                        </CardHeader>
                        <CardContent className="relative flex items-center gap-7 overflow-x-auto px-5 py-4">
                            <Avatar
                                size={'thin'}
                                variant={'letters'}
                                className="bg-[#00C7BE]"
                            >
                                AB
                            </Avatar>
                            <Avatar
                                size={'small'}
                                variant={'letters'}
                                className="bg-[#32ADE6]"
                            >
                                CD
                            </Avatar>
                            <Avatar
                                size={'medium'}
                                variant={'letters'}
                                className="bg-[#007AFF]"
                            >
                                EF
                            </Avatar>
                            <Avatar
                                size={'large'}
                                variant={'letters'}
                                className="bg-[#AF52DE]"
                            >
                                GH
                            </Avatar>
                            <Avatar
                                size={'extralarge'}
                                variant={'letters'}
                                className="bg-[#FF2D55]"
                            >
                                IJ
                            </Avatar>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Stacked Avatars
                        </CardHeader>
                        <CardContent className="relative flex items-center -space-x-2 overflow-x-auto p-7">
                            <Avatar className="border-2 border-white dark:border-black-dark">
                                <AvatarImage src="/images/avatar.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-white dark:border-black-dark">
                                <AvatarImage src="/images/avatar-two.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-white dark:border-black-dark">
                                <AvatarImage src="/images/avatar-three.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-white dark:border-black-dark">
                                <AvatarImage src="/images/avatar-four.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-white dark:border-black-dark">
                                <AvatarImage src="/images/avatar-six.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className="grid place-content-center border-2 border-white bg-gray-300 font-semibold text-black dark:border-black-dark">
                                +5
                            </Avatar>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Squared Stacked Avatars
                        </CardHeader>
                        <CardContent className="relative flex items-center -space-x-3 overflow-x-auto p-7">
                            <Avatar className="overflow-hidden rounded-lg border-2 border-white dark:border-black-dark">
                                <AvatarImage src="/images/avatar1.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className="overflow-hidden rounded-lg border-2 border-white dark:border-black-dark">
                                <AvatarImage src="/images/avatar2.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className="overflow-hidden rounded-lg border-2 border-white dark:border-black-dark">
                                <AvatarImage src="/images/avatar3.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className="overflow-hidden rounded-lg border-2 border-white dark:border-black-dark">
                                <AvatarImage src="/images/avatar4.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className="overflow-hidden rounded-lg border-2 border-white dark:border-black-dark">
                                <AvatarImage src="/images/avatar5.svg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className="grid place-content-center rounded-lg border-2 border-white bg-gray-300 font-semibold text-black dark:border-black-dark">
                                +5
                            </Avatar>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
