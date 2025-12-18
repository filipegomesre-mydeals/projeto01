import PageHeading from '@/components/layout/page-heading'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'

export default function SliderDemo() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Slider'} />

            <div className="grid xl:grid-cols-2 gap-4 xl:gap-6">
                <div className="grid sm:grid-cols-2 xl:grid-cols-1 gap-4">
                    <Card>
                        <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Horizontal orientation
                        </CardTitle>
                        <CardContent className="relative flex flex-col gap-4 p-4 lg:p-6">
                            <Slider defaultValue={[33]} max={100} step={1} />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Define step size
                        </CardTitle>
                        <CardContent className="relative flex flex-col gap-4 p-4 lg:p-6">
                            <Slider defaultValue={[30]} max={100} step={10} />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Create a range
                        </CardTitle>
                        <CardContent className="relative flex flex-col gap-4 p-4 lg:p-6">
                            <Slider defaultValue={[25, 75]} />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Prevent thumb overlap
                        </CardTitle>
                        <CardContent className="relative flex flex-col gap-4 p-4 lg:p-6">
                            <Slider
                                defaultValue={[25, 75]}
                                step={10}
                                minStepsBetweenThumbs={1}
                            />
                        </CardContent>
                    </Card>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    <Card className="flex flex-col">
                        <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Vertical orientation
                        </CardTitle>
                        <CardContent className="relative flex grow flex-col gap-4 p-2.5 lg:p-4">
                            <Slider
                                defaultValue={[33]}
                                max={100}
                                step={1}
                                orientation="vertical"
                                className="h-full"
                            />
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col">
                        <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Vertical Create a range
                        </CardTitle>
                        <CardContent className="relative flex grow flex-col gap-4 p-2.5 lg:p-4">
                            <Slider
                                defaultValue={[30, 70]}
                                max={100}
                                step={1}
                                orientation="vertical"
                                className="h-full"
                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
