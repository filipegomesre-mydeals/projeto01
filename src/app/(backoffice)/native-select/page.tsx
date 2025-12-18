import PageHeading from '@/components/layout/page-heading'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
    NativeSelect,
    NativeSelectOptGroup,
    NativeSelectOption,
} from '@/components/ui/native-select'

export default function NativeSelectPage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Native Select'} />

            <div className="min-h-[calc(100vh-160px)] space-y-[30px] rounded-lg">
                <div className="flex flex-wrap items-start gap-4 sm:gap-6 lg:gap-8">
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Default
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                            <NativeSelect>
                                <NativeSelectOption value="">
                                    Select payment status
                                </NativeSelectOption>
                                <NativeSelectOption value="pending">
                                    Pending
                                </NativeSelectOption>
                                <NativeSelectOption value="completed">
                                    Completed
                                </NativeSelectOption>
                                <NativeSelectOption value="failed">
                                    Failed
                                </NativeSelectOption>
                                <NativeSelectOption value="refunded">
                                    Refunded
                                </NativeSelectOption>
                            </NativeSelect>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Groups
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                            <NativeSelect>
                                <NativeSelectOption value="">
                                    Select a food
                                </NativeSelectOption>
                                <NativeSelectOptGroup label="Fruits">
                                    <NativeSelectOption value="apple">
                                        Apple
                                    </NativeSelectOption>
                                    <NativeSelectOption value="banana">
                                        Banana
                                    </NativeSelectOption>
                                    <NativeSelectOption value="blueberry">
                                        Blueberry
                                    </NativeSelectOption>
                                </NativeSelectOptGroup>
                                <NativeSelectOptGroup label="Vegetables">
                                    <NativeSelectOption value="carrot">
                                        Carrot
                                    </NativeSelectOption>
                                    <NativeSelectOption value="broccoli">
                                        Broccoli
                                    </NativeSelectOption>
                                    <NativeSelectOption value="spinach">
                                        Spinach
                                    </NativeSelectOption>
                                </NativeSelectOptGroup>
                            </NativeSelect>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Disabled
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                            <NativeSelect disabled>
                                <NativeSelectOption value="">
                                    Select status
                                </NativeSelectOption>
                                <NativeSelectOption value="pending">
                                    Pending
                                </NativeSelectOption>
                                <NativeSelectOption value="completed">
                                    Completed
                                </NativeSelectOption>
                                <NativeSelectOption value="failed">
                                    Failed
                                </NativeSelectOption>
                                <NativeSelectOption value="refunded">
                                    Refunded
                                </NativeSelectOption>
                            </NativeSelect>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Invalid State
                        </CardHeader>
                        <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                            <NativeSelect aria-invalid="true">
                                <NativeSelectOption value="">
                                    Select priority
                                </NativeSelectOption>
                                <NativeSelectOption value="low">
                                    Low
                                </NativeSelectOption>
                                <NativeSelectOption value="medium">
                                    Medium
                                </NativeSelectOption>
                                <NativeSelectOption value="high">
                                    High
                                </NativeSelectOption>
                                <NativeSelectOption value="critical">
                                    Critical
                                </NativeSelectOption>
                            </NativeSelect>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
