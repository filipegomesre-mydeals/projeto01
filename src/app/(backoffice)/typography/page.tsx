import PageHeading from '@/components/layout/page-heading'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function Typography() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Typography'} />

            <div className="min-h-[calc(100vh-160px)] w-full space-y-4">
                <Card>
                    <CardContent className="space-y-5 p-5">
                        <h2 className="text-xs/tight font-semibold text-primary">
                            Font Family
                        </h2>
                        <h3 className="text-[22px]/tight font-semibold text-black dark:text-white">
                            Plus Jakarta Sans
                        </h3>
                        <div className="flex items-start gap-5 overflow-x-auto p-0.5 font-medium">
                            <div className="flex flex-col items-start justify-start gap-4">
                                <Badge
                                    variant={'outline'}
                                    className="border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    Extrabold 800 Italic
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    Extrabold 800
                                </Badge>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-4">
                                <Badge
                                    variant={'outline'}
                                    className="border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    Bold 700 Italic
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    Bold 700
                                </Badge>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-4">
                                <Badge
                                    variant={'outline'}
                                    className="border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    Bold 600 Italic
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    Bold 600
                                </Badge>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-4">
                                <Badge
                                    variant={'outline'}
                                    className="border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    Bold 500 Italic
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    Bold 500
                                </Badge>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-4">
                                <Badge
                                    variant={'outline'}
                                    className="border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    Bold 400 Italic
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    Bold 400
                                </Badge>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-4">
                                <Badge
                                    variant={'outline'}
                                    className="border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    Bold 300 Italic
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    Bold 300
                                </Badge>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-4">
                                <Badge
                                    variant={'outline'}
                                    className="border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    Bold 200 Italic
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    Bold 200
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="overflow-hidden">
                    <CardHeader className="border-b border-gray-300 bg-gray-100 px-5 py-3.5 font-semibold text-black dark:border-white/30 dark:bg-black/30 dark:text-white">
                        Plus Jakarta Sans for Headings
                    </CardHeader>
                    <CardContent className="divide-y divide-gray-300/50 dark:divide-gray-700/50">
                        <div className="space-y-5 px-5 py-6 sm:py-[30px]">
                            <span className="block text-xs/none font-semibold uppercase text-gray-700 dark:text-gray-600">
                                H 1 / Heading
                            </span>
                            <h2 className="line-clamp-1 text-[40px]/tight font-extrabold text-black dark:text-white">
                                The quick brown fox jumps over the lazy dog
                            </h2>
                            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Size:
                                    </span>{' '}
                                    40
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Weight:
                                    </span>
                                    Extrabold / 800
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Letter Spacing:
                                    </span>
                                    0%
                                </Badge>
                            </div>
                        </div>
                        <div className="space-y-5 px-5 py-6 sm:py-[30px]">
                            <span className="block text-xs/none font-semibold uppercase text-gray-700 dark:text-gray-600">
                                H 2 / Heading
                            </span>
                            <h2 className="line-clamp-1 text-[32px]/10 font-bold text-black dark:text-white">
                                The quick brown fox jumps over the lazy dog
                            </h2>
                            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Size:
                                    </span>{' '}
                                    32
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Weight:
                                    </span>
                                    Bold / 700
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Letter Spacing:
                                    </span>
                                    0%
                                </Badge>
                            </div>
                        </div>
                        <div className="space-y-5 px-5 py-6 sm:py-[30px]">
                            <span className="block text-xs/none font-semibold uppercase text-gray-700 dark:text-gray-600">
                                H 3 / Heading
                            </span>
                            <h2 className="line-clamp-1 text-[28px]/tight font-semibold text-black dark:text-white">
                                The quick brown fox jumps over the lazy dog
                            </h2>
                            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Size:
                                    </span>{' '}
                                    28
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Weight:
                                    </span>
                                    Semibold / 600
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Letter Spacing:
                                    </span>
                                    0%
                                </Badge>
                            </div>
                        </div>
                        <div className="space-y-5 px-5 py-6 sm:py-[30px]">
                            <span className="block text-xs/none font-semibold uppercase text-gray-700 dark:text-gray-600">
                                H 4 / Heading
                            </span>
                            <h2 className="line-clamp-1 text-2xl/tight font-medium text-black dark:text-white">
                                The quick brown fox jumps over the lazy dog
                            </h2>
                            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Size:
                                    </span>{' '}
                                    24
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Weight:
                                    </span>
                                    Medium / 500
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Letter Spacing:
                                    </span>
                                    0%
                                </Badge>
                            </div>
                        </div>
                        <div className="space-y-5 px-5 py-6 sm:py-[30px]">
                            <span className="block text-xs/none font-semibold uppercase text-gray-700 dark:text-gray-600">
                                H 5 / Heading
                            </span>
                            <h2 className="line-clamp-1 text-xl/tight font-semibold text-black dark:text-white">
                                The quick brown fox jumps over the lazy dog
                            </h2>
                            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Size:
                                    </span>{' '}
                                    20
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Weight:
                                    </span>
                                    Semibold / 600
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Letter Spacing:
                                    </span>
                                    0%
                                </Badge>
                            </div>
                        </div>
                        <div className="space-y-5 px-5 py-6 sm:py-[30px]">
                            <span className="block text-xs/none font-semibold uppercase text-gray-700 dark:text-gray-600">
                                H 6 / Heading
                            </span>
                            <h2 className="line-clamp-1 text-base/tight font-medium text-black dark:text-white">
                                The quick brown fox jumps over the lazy dog
                            </h2>
                            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Size:
                                    </span>{' '}
                                    16
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Weight:
                                    </span>
                                    Medium / 500
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Letter Spacing:
                                    </span>
                                    0%
                                </Badge>
                            </div>
                        </div>
                        <div className="space-y-5 px-5 py-6 sm:py-[30px]">
                            <span className="block text-xs/none font-semibold uppercase text-gray-700 dark:text-gray-600">
                                Sub Heading / small
                            </span>
                            <h2 className="line-clamp-1 text-sm/tight font-semibold text-black dark:text-white">
                                The quick brown fox jumps over the lazy dog
                            </h2>
                            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Size:
                                    </span>{' '}
                                    14
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Weight:
                                    </span>
                                    Semibold / 600
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Letter Spacing:
                                    </span>
                                    0%
                                </Badge>
                            </div>
                        </div>
                        <div className="space-y-5 px-5 py-6 sm:py-[30px]">
                            <span className="block text-xs/none font-semibold uppercase text-gray-700 dark:text-gray-600">
                                Sub text / small
                            </span>
                            <h2 className="line-clamp-1 text-xs/tight font-medium text-black dark:text-white">
                                The quick brown fox jumps over the lazy dog
                            </h2>
                            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Size:
                                    </span>{' '}
                                    12
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Weight:
                                    </span>
                                    Medium / 500
                                </Badge>
                                <Badge
                                    variant={'outline'}
                                    className="gap-1 border border-gray-300 py-[7px] text-black shadow-sm dark:border-black dark:bg-black dark:text-white"
                                >
                                    <span className="text-gray dark:text-gray-500">
                                        Letter Spacing:
                                    </span>
                                    0%
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
