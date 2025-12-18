import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ChevronDown, Home, Loader, Settings } from 'lucide-react'

export default function Buttons() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Buttons'} />

            <div className="min-h-[calc(100vh-160px)] space-y-[30px] rounded-lg">
                <div className="flex flex-wrap items-center gap-8">
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Primary Buttons
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                            <Button type="button" size="large">
                                Blue
                            </Button>
                            <Button type="button" variant="black" size="large">
                                Dark
                            </Button>
                            <Button type="button">Blue</Button>
                            <Button type="button" variant="black">
                                Dark
                            </Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Primary Outline
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                            <Button
                                type="button"
                                size="large"
                                variant={'outline'}
                            >
                                Blue
                            </Button>
                            <Button
                                type="button"
                                variant="outline-black"
                                size="large"
                            >
                                Dark
                            </Button>
                            <Button type="button" variant={'outline'}>
                                Blue
                            </Button>
                            <Button type="button" variant="outline-black">
                                Dark
                            </Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Primary Disable
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                            <Button type="button" disabled size={'large'}>
                                Blue
                            </Button>
                            <Button
                                type="button"
                                disabled
                                variant="black"
                                size={'large'}
                            >
                                Dark
                            </Button>
                            <Button type="button" disabled>
                                Blue
                            </Button>
                            <Button type="button" disabled variant="black">
                                Dark
                            </Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Primary Outline Disable
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                            <Button
                                type="button"
                                disabled
                                variant="outline"
                                size={'large'}
                            >
                                Blue
                            </Button>
                            <Button
                                type="button"
                                disabled
                                variant="outline-black"
                                size={'large'}
                            >
                                Dark
                            </Button>
                            <Button type="button" disabled variant="outline">
                                Blue
                            </Button>
                            <Button
                                type="button"
                                disabled
                                variant="outline-black"
                            >
                                Dark
                            </Button>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex flex-wrap items-center gap-8">
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Loader Buttons
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                            <Button type="button" size="large">
                                <span>Loading</span>
                                <Loader />
                            </Button>
                            <Button type="button" size="large" variant="black">
                                Setting
                                <Loader />
                            </Button>
                            <Button type="button">
                                Loading
                                <Loader />
                            </Button>
                            <Button type="button" variant="black">
                                Setting
                                <Loader />
                            </Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Buttons with Icon
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                            <Button type="button" size="large">
                                <Home />
                                Home
                            </Button>
                            <Button type="button" size="large" variant="black">
                                <Settings />
                                Setting
                            </Button>
                            <Button type="button">
                                <Home />
                                Home
                            </Button>
                            <Button type="button" variant="black">
                                <Settings />
                                Setting
                            </Button>
                        </CardContent>
                    </Card>

                    <div className="flex flex-wrap items-center gap-8">
                        <Card>
                            <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                                Outline Buttons
                            </CardHeader>
                            <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                                <Button
                                    type="button"
                                    size="large"
                                    variant="outline-general"
                                >
                                    Large
                                </Button>
                                <Button type="button" variant="outline-general">
                                    Small
                                </Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                                Outline Disable
                            </CardHeader>
                            <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                                <Button
                                    type="button"
                                    disabled
                                    size="large"
                                    variant="outline-general"
                                >
                                    Large
                                </Button>
                                <Button
                                    type="button"
                                    disabled
                                    variant="outline-general"
                                >
                                    Small
                                </Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                                Outline with Icon
                            </CardHeader>
                            <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                                <Button
                                    type="button"
                                    size="large"
                                    variant="outline-general"
                                >
                                    Large
                                    <ChevronDown />
                                </Button>
                                <Button type="button" variant="outline-general">
                                    Small
                                    <ChevronDown />
                                </Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                                Outline Loader
                            </CardHeader>
                            <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                                <Button
                                    type="button"
                                    size="large"
                                    variant="outline-general"
                                >
                                    General
                                    <Loader />
                                </Button>
                                <Button type="button" variant="outline-general">
                                    General
                                    <Loader />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
