'use client'

import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

import { cn } from '@/lib/utils'
import { useStore } from '@/store'

const ScrollArea = React.forwardRef<
    React.ElementRef<typeof ScrollAreaPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => {
    const isRTL = useStore((state) => state.isRTL)
    return (
        <ScrollAreaPrimitive.Root
            ref={ref}
            dir={isRTL ? 'rtl' : 'ltr'}
            className={cn(
                'relative overflow-hidden rounded-lg bg-white shadow-3xl dark:bg-black-dark dark:shadow-none',
                className,
            )}
            {...props}
        >
            <ScrollAreaPrimitive.Viewport className="h-full w-full">
                {children}
            </ScrollAreaPrimitive.Viewport>
            <ScrollBar />
            <ScrollAreaPrimitive.Corner />
        </ScrollAreaPrimitive.Root>
    )
})
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
    React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
    React.ComponentPropsWithoutRef<
        typeof ScrollAreaPrimitive.ScrollAreaScrollbar
    >
>(({ className, orientation = 'vertical', ...props }, ref) => (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
        ref={ref}
        orientation={orientation}
        className={cn(
            'mr-2 flex touch-none select-none transition-colors',
            orientation === 'vertical' &&
                'h-full w-2.5 border-l border-l-transparent p-px',
            orientation === 'horizontal' &&
                'h-1.5 flex-col border-t border-t-transparent p-px',
            className,
        )}
        {...props}
    >
        <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-gray-300 dark:bg-gray-300/20" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
