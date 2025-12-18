import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Heart, Play } from 'lucide-react'

export default function Hovercard() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Hover Card'} />

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <Card className="flex flex-col min-w-60">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Show instantly
                    </CardTitle>
                    <CardContent className="relative flex grow flex-col items-start gap-4 px-2.5 py-4 sm:px-4 lg:py-6">
                        <HoverCard openDelay={0}>
                            <HoverCardTrigger asChild>
                                <Button
                                    type="button"
                                    variant="outline-general"
                                    size={'large'}
                                >
                                    Hover me
                                </Button>
                            </HoverCardTrigger>
                            <HoverCardContent align="start">
                                <div className="flex items-center gap-2.5 leading-tight font-semibold text-black dark:text-white">
                                    <Heart className="hover:fill-danger hover:text-danger size-[18px] shrink-0" />
                                    Welcome to ASL
                                </div>
                                <p className="mt-2 text-xs/normal font-medium text-gray-700 dark:text-gray-600">
                                    Bring your next big idea to life in no time
                                    using our expensive and customizable Design
                                    System
                                </p>
                                <div className="mt-4 flex items-center gap-4">
                                    <Button
                                        variant="outline-general"
                                        size={'large'}
                                    >
                                        <Play className="size-4" />
                                        Watch tutorials
                                    </Button>
                                    <Button variant="black" size={'large'}>
                                        Get started
                                    </Button>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </CardContent>
                </Card>
                <Card className="flex flex-col min-w-60">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Constrain the content size
                    </CardTitle>
                    <CardContent className="relative flex grow flex-col items-start gap-4 px-2.5 py-4 sm:px-4 lg:py-6">
                        <HoverCard>
                            <HoverCardTrigger>
                                <Button
                                    type="button"
                                    variant="outline-general"
                                    size={'large'}
                                >
                                    Hover me
                                </Button>
                            </HoverCardTrigger>
                            <HoverCardContent
                                className="HoverCardContent"
                                sideOffset={5}
                            >
                                Constrain the content size
                            </HoverCardContent>
                        </HoverCard>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
