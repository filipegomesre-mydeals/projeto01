import PageHeading from '@/components/layout/page-heading'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function SeparatorDemo() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Separator'} />

            <div className="grid gap-4 sm:grid-cols-2 lg:gap-6 2xl:grid-cols-3">
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Mixed separator
                    </CardTitle>
                    <CardContent className="relative flex grow flex-col gap-4 p-2.5 lg:p-4">
                        <div>
                            <div className="space-y-1">
                                <h4 className="leading-none font-semibold text-black dark:text-white">
                                    Radix Primitives
                                </h4>
                                <p className="text-muted-foreground text-sm">
                                    An open-source UI component library.
                                </p>
                            </div>
                            <Separator className="my-4" />
                            <div className="flex h-5 items-center space-x-4 font-semibold text-black dark:text-white">
                                <div>Blog</div>
                                <Separator orientation="vertical" />
                                <div>Docs</div>
                                <Separator orientation="vertical" />
                                <div>Source</div>
                            </div>
                            <Separator className="my-4" />
                            <div className="space-y-1">
                                <h4 className="leading-none font-semibold text-black dark:text-white">
                                    Radix Primitives
                                </h4>
                                <p className="text-muted-foreground text-sm">
                                    An open-source UI component library.
                                </p>
                            </div>
                            <Separator className="my-4" />
                            <div className="flex h-5 items-center space-x-4 font-semibold text-black dark:text-white">
                                <div>Blog</div>
                                <Separator orientation="vertical" />
                                <div>Docs</div>
                                <Separator orientation="vertical" />
                                <div>Source</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Vertical separator
                    </CardTitle>
                    <CardContent className="relative flex grow flex-col gap-4 p-2.5 lg:p-4">
                        <div>
                            <div className="space-y-1">
                                <h4 className="leading-none font-semibold text-black dark:text-white">
                                    Radix Primitives
                                </h4>
                                <p className="text-muted-foreground text-sm">
                                    An open-source UI component library.
                                </p>
                            </div>
                            <Separator className="my-4" />
                            <div className="space-y-1">
                                <h4 className="leading-none font-semibold text-black dark:text-white">
                                    Radix Primitives
                                </h4>
                                <p className="text-muted-foreground text-sm">
                                    An open-source UI component library.
                                </p>
                            </div>
                            <Separator className="my-4" />
                            <div className="space-y-1">
                                <h4 className="leading-none font-semibold text-black dark:text-white">
                                    Radix Primitives
                                </h4>
                                <p className="text-muted-foreground text-sm">
                                    An open-source UI component library.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="flex flex-col sm:col-span-2 2xl:col-span-1">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Horizontal separator
                    </CardTitle>
                    <CardContent className="relative flex grow flex-col gap-4 p-2.5 lg:p-4">
                        <div className="flex h-5 flex-wrap items-center space-x-4 gap-y-3 font-semibold text-black dark:text-white">
                            <div>Blog</div>
                            <Separator orientation="vertical" />
                            <div>Docs</div>
                            <Separator orientation="vertical" />
                            <div>Source</div>
                            <Separator orientation="vertical" />
                            <div>News</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
