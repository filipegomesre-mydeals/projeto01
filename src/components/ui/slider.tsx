'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'
import { useStore } from '@/store'

function Slider({
    className,
    defaultValue,
    value,
    min = 0,
    max = 100,
    orientation = 'horizontal',
    onValueChange,
    ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
    const isRTL = useStore((state) => state.isRTL)

    const [_values, setValues] = React.useState<number[]>(
        Array.isArray(value)
            ? value
            : Array.isArray(defaultValue)
              ? defaultValue
              : [min, max],
    )

    React.useEffect(() => {
        if (Array.isArray(value)) {
            setValues(value)
        }
    }, [value])

    const isVertical = orientation === 'vertical'

    return (
        <SliderPrimitive.Root
            dir={isRTL ? 'rtl' : 'ltr'}
            orientation={orientation}
            data-slot="slider"
            defaultValue={defaultValue}
            value={value}
            min={min}
            max={max}
            onValueChange={(val) => {
                setValues(val)
                onValueChange?.(val)
            }}
            className={cn(
                'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50',
                isVertical ? 'h-48 min-h-48 w-auto flex-col' : 'flex-row',
                className,
            )}
            {...props}
        >
            <SliderPrimitive.Track
                data-slot="slider-track"
                className={cn(
                    'relative grow overflow-hidden rounded-full bg-gray-300/80 dark:bg-gray-600/60',
                    isVertical ? 'h-full w-1.5' : 'h-1.5 w-full',
                )}
            >
                <SliderPrimitive.Range
                    data-slot="slider-range"
                    className={cn(
                        'bg-primary absolute',
                        isVertical ? 'w-full' : 'h-full',
                    )}
                />
            </SliderPrimitive.Track>

            {Array.from({ length: _values.length }, (_, index) => (
                <SliderPrimitive.Thumb
                    data-slot="slider-thumb"
                    key={index}
                    className={cn(
                        'group border-primary ring-primary/30 dark:ring-primary/50 relative block size-4 shrink-0 cursor-pointer rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-3 focus-visible:ring-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50',
                    )}
                >
                    {/* Tooltip on hover — horizontal: top, vertical: right */}
                    <div
                        className={cn(
                            'absolute rounded-md bg-black  font-medium px-2 pt-1 pb-0.5 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100',
                            isVertical
                                ? 'top-1/2 left-full ml-2 -translate-y-1/2 before:absolute before:-left-0.5 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:-rotate-45 before:rounded-[2px] before:bg-black before:-z-1'
                                : 'bottom-full left-1/2 mb-2 -translate-x-1/2 before:absolute before:-bottom-0.5 before:left-1/2 before:h-2 before:w-2 before:-translate-x-1/2 before:-rotate-45 before:rounded-[2px] before:bg-black before:-z-1',
                        )}
                    >
                        {_values[index]}
                    </div>
                </SliderPrimitive.Thumb>
            ))}
        </SliderPrimitive.Root>
    )
}

export { Slider }


