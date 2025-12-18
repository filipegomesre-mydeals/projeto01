'use client'

import * as React from 'react'
import {
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from 'lucide-react'
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    captionLayout = 'label',
    formatters,
    components,
    ...props
}: React.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React.ComponentProps<typeof Button>['variant']
}) {
    const defaultClassNames = getDefaultClassNames()

    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn(
                'group/calendar shadow-3xl rounded-lg bg-white p-1.5 [--cell-size:--spacing(8)] dark:bg-black dark:shadow-none [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent',
                String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
                String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
                className,
            )}
            captionLayout={captionLayout}
            formatters={{
                formatMonthDropdown: (date) =>
                    date.toLocaleString('default', { month: 'short' }),
                ...formatters,
            }}
            classNames={{
                root: cn('w-fit', defaultClassNames.root),
                months: cn(
                    'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 relative',
                    defaultClassNames.months,
                ),
                month: cn('space-y-1.5', defaultClassNames.month),
                nav: cn(
                    'flex items-center justify-between absolute top-0 h-5.5 left-0 right-0 px-2 sm:px-3 w-full top-2 z-[1]',
                    defaultClassNames.nav,
                ),
                button_previous: cn(
                    buttonVariants({ variant: 'outline-general' }),
                    'size-[22px] bg-transparent p-0 rounded-full text-black dark:text-white hover:opacity-70 hover:bg-white bg-white shadow-none ring-0',
                    defaultClassNames.button_previous,
                ),
                button_next: cn(
                    buttonVariants({ variant: 'outline-general' }),
                    'size-[22px] bg-transparent p-0 rounded-full text-black dark:text-white hover:opacity-70 hover:bg-white bg-white shadow-none ring-0',
                    defaultClassNames.button_next,
                ),
                month_caption: cn(
                    'flex bg-gray-400 dark:bg-white/10 justify-center rounded-lg h-9.5 relative items-center',
                    defaultClassNames.month_caption,
                ),
                dropdowns: cn(
                    'w-full flex items-center text-sm font-medium justify-center gap-1.5 ',
                    defaultClassNames.dropdowns,
                ),
                dropdown_root: cn(
                    'relative border border-gray-300 bg-white dark:bg-black dark:border-gray has-focus:ring-primary/50 has-focus:ring-2 rounded-lg z-2',
                    defaultClassNames.dropdown_root,
                ),
                dropdown: cn(
                    'absolute bg-white dark:bg-black-dark inset-0 opacity-0',
                    defaultClassNames.dropdown,
                ),
                caption_label: cn(
                    'text-sm/4 font-semibold text-black dark:text-white',
                    captionLayout === 'label'
                        ? 'text-sm'
                        : 'rounded-lg pl-2 pr-1 flex items-center gap-1 text-xs h-6  [&>svg]:text-muted-foreground [&>svg]:size-3.5',
                    defaultClassNames.caption_label,
                ),
                table: 'w-full border-collapse',
                weekdays: cn(
                    'flex gap-2.5 md:gap-3 px-1 md:px-3',
                    defaultClassNames.weekdays,
                ),
                weekday: cn(
                    'rounded-lg w-7 py-1.5 px-px text-center font-semibold text-xs/tight',
                    defaultClassNames.weekday,
                ),
                week: cn(
                    'flex w-full mt-1.5 gap-2.5 md:gap-3 px-1 md:px-3',
                    defaultClassNames.week,
                ),
                week_number_header: cn(
                    'select-none w-(--cell-size)',
                    defaultClassNames.week_number_header,
                ),
                week_number: cn(
                    'text-[0.8rem] select-none text-muted-foreground',
                    defaultClassNames.week_number,
                ),
                day: cn(
                    'text-center rounded-lg text-sm p-px relative [&:has([aria-selected].day-range-end)]:rounded-r-lg [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-lg last:[&:has([aria-selected])]:rounded-r-lg focus-within:relative focus-within:z-20',
                    defaultClassNames.day,
                ),
                range_start: cn(
                    'rounded-l-lg bg-accent',
                    defaultClassNames.range_start,
                ),
                range_middle: cn(
                    'rounded-none',
                    defaultClassNames.range_middle,
                ),
                range_end: cn(
                    'rounded-r-lg bg-accent',
                    defaultClassNames.range_end,
                ),
                today: cn(
                    'bg-accent text-accent-foreground ring-1 ring-inset ring-gray-300 dark:ring-gray-600/60 rounded-lg data-[selected=true]:ring-transparent',
                    defaultClassNames.today,
                ),
                outside: cn(
                    'text-muted-foreground aria-selected:text-muted-foreground opacity-50 pointer-events-none',
                    defaultClassNames.outside,
                ),
                disabled: cn(
                    'text-muted-foreground opacity-50',
                    defaultClassNames.disabled,
                ),
                hidden: cn('invisible', defaultClassNames.hidden),
                ...classNames,
            }}
            components={{
                Root: ({ className, rootRef, ...props }) => {
                    return (
                        <div
                            data-slot="calendar"
                            ref={rootRef}
                            className={cn(className)}
                            {...props}
                        />
                    )
                },
                Chevron: ({ className, orientation, ...props }) => {
                    if (orientation === 'left') {
                        return (
                            <ChevronLeftIcon
                                className={cn('size-4', className)}
                                {...props}
                            />
                        )
                    }

                    if (orientation === 'right') {
                        return (
                            <ChevronRightIcon
                                className={cn('size-4', className)}
                                {...props}
                            />
                        )
                    }

                    return (
                        <ChevronDownIcon
                            className={cn('size-4', className)}
                            {...props}
                        />
                    )
                },
                DayButton: CalendarDayButton,
                WeekNumber: ({ children, ...props }) => {
                    return (
                        <td {...props}>
                            <div className="flex size-(--cell-size) items-center justify-center text-center">
                                {children}
                            </div>
                        </td>
                    )
                },
                ...components,
            }}
            {...props}
        />
    )
}
function CalendarDayButton({
    className,
    day,
    modifiers,
    ...props
}: React.ComponentProps<typeof DayButton>) {
    const defaultClassNames = getDefaultClassNames()

    const ref = React.useRef<HTMLButtonElement>(null)
    const [clientDate, setClientDate] = React.useState<string | null>(null)

    React.useEffect(() => {
        if (modifiers.focused) ref.current?.focus()
        setClientDate(day.date.toLocaleDateString())
    }, [modifiers.focused, day.date])

    return (
        <Button
            ref={ref}
            data-day={clientDate ?? undefined}
            data-selected-single={
                modifiers.selected &&
                !modifiers.range_start &&
                !modifiers.range_end &&
                !modifiers.range_middle
            }
            data-range-start={modifiers.range_start}
            data-range-end={modifiers.range_end}
            data-range-middle={modifiers.range_middle}
            className={cn(
                'group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-6.5 w-full flex-col gap-1 bg-transparent p-0 text-xs leading-none font-medium text-black group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] hover:bg-gray-300/50 data-[range-end=true]:rounded-lg data-[range-end=true]:bg-black dark:data-[range-end=true]:bg-white data-[range-end=true]:text-white dark:data-[range-end=true]:text-black data-[range-middle=true]:bg-black dark:data-[range-middle=true]:bg-white data-[range-middle=true]:text-white dark:data-[range-middle=true]:text-black data-[range-start=true]:rounded-lg data-[range-start=true]:rounded-l-lg data-[range-start=true]:bg-black dark:data-[range-start=true]:bg-white data-[range-start=true]:text-white dark:data-[range-start=true]:text-black data-[selected-single=true]:bg-black data-[selected-single=true]:text-white dark:text-white dark:hover:bg-black-dark dark:data-[selected-single=true]:bg-white dark:data-[selected-single=true]:text-black [&>span]:text-xs [&>span]:opacity-70',
                defaultClassNames.day,
                className,
            )}
            {...props}
        />
    )
}

export { Calendar, CalendarDayButton }
