'use client'

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { ChevronDown, ChevronsUpDown } from 'lucide-react'

function Collapsible({
    ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
    return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
    ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
    return (
        <CollapsiblePrimitive.CollapsibleTrigger
            data-slot="collapsible-trigger"
            {...props}
            className="group flex w-full items-center justify-between gap-4 text-left font-medium text-black !ring-0 !outline-0 dark:text-white"
        >
            {props.children}
            <span className="grid size-7 place-content-center rounded-md transition group-hover:bg-gray-300/50">
                <ChevronsUpDown className="arrow size-4 shrink-0 transition-transform duration-200" />
            </span>
        </CollapsiblePrimitive.CollapsibleTrigger>
    )
}

function CollapsibleContent({
    ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
    return (
        <CollapsiblePrimitive.CollapsibleContent
            data-slot="collapsible-content"
            {...props}
            className="flex flex-col gap-2 CollapsibleContent"
        />
    )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
