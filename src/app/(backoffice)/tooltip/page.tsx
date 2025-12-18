import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { CircleDashed } from 'lucide-react'

export default function ToolTip() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Tooltip'} />

            <div className="flex w-full flex-wrap items-center gap-4 py-5">
                <TooltipProvider delayDuration={0}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline-general">
                                Tooltip on top
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side={'top'}>
                            <CircleDashed className="size-4 text-white dark:text-black" />
                            <p>Tooltip</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider delayDuration={0}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline-general">
                                Tooltip on left
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent
                            side={'left'}
                            className="before:-right-2.5 before:bottom-auto before:left-auto before:top-1/2 before:-translate-y-1/2 before:-rotate-45"
                        >
                            <CircleDashed className="size-4 text-white dark:text-black" />
                            <p>Tooltip</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider delayDuration={0}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline-general">
                                Tooltip on bottom
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent
                            side={'bottom'}
                            className="before:-top-[3px] before:bottom-auto before:left-1/2 before:-translate-x-1/2 before:-rotate-45"
                        >
                            <CircleDashed className="size-4 text-white dark:text-black" />
                            <p>Tooltip</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider delayDuration={0}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline-general">
                                Tooltip on right
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent
                            side={'right'}
                            className="before:bottom-auto before:left-[3px] before:top-1/2 before:-translate-y-1/2 before:rotate-45"
                        >
                            <CircleDashed className="size-4 text-white dark:text-black" />
                            <p>Tooltip</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}
