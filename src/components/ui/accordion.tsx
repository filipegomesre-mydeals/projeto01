'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { cn } from '@/lib/utils'
import { ChevronDown, Minus, Plus } from 'lucide-react'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn(
            'rounded-lg shadow-3xl dark:border dark:border-gray-300/20 dark:shadow-sm',
            className,
        )}
        {...props}
    />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
        icons?: string
        iconsPosition?: 'left' | 'right'
    }
>(({ className, icons, iconsPosition = 'right', children, ...props }, ref) => (
    <AccordionPrimitive.Header className="">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                'group flex w-full gap-2.5 px-4 py-3 text-left text-black outline-hidden hover:text-black data-[state=open]:text-black! dark:text-gray-500 dark:hover:text-white dark:data-[state=open]:text-white! [&[data-state=open]>svg.arrow]:rotate-180 [&[data-state=open]>svg.arrow]:text-black dark:[&[data-state=open]>svg.arrow]:text-white [&[data-state=open]>svg.minus]:block [&[data-state=open]>svg.plus]:hidden',
                className,
                iconsPosition === 'right' ? 'justify-between xl:gap-5' : '',
            )}
            {...props}
        >
            {iconsPosition === 'left' &&
                (icons === 'plus-minus' ? (
                    <>
                        <Plus className="plus h-[18px] w-[18px] shrink-0 text-gray-600 transition-transform duration-200" />
                        <Minus className="minus hidden h-[18px] w-[18px] shrink-0 transition-transform duration-200" />
                    </>
                ) : (
                    <ChevronDown className="arrow h-[18px] w-[18px] shrink-0 text-gray-600 transition-transform duration-200" />
                ))}
            {children}

            {iconsPosition === 'right' &&
                (icons === 'plus-minus' ? (
                    <>
                        <Plus className="plus h-[18px] w-[18px] shrink-0 text-gray-600 transition-transform duration-200 ltr:ml-auto rtl:mr-auto" />
                        <Minus className="minus hidden h-[18px] w-[18px] shrink-0 transition-transform duration-200 ltr:ml-auto rtl:mr-auto" />
                    </>
                ) : (
                    <ChevronDown className="arrow h-[18px] w-[18px] shrink-0 text-gray transition-transform duration-200 group-hover:text-black ltr:ml-auto rtl:mr-auto dark:text-gray-600 dark:group-hover:text-white" />
                ))}
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
        parentClassName?: string
    }
>(({ className, children, parentClassName, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className={cn(
            'overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down data-[state=open]:transition-all data-[state=open]:duration-300 ltr:text-left rtl:text-right',
            parentClassName,
        )}
        {...props}
    >
        <div className={cn('', className)}>{children}</div>
    </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

const AccordionItemTwo = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn(
            'rounded-lg shadow-3xl dark:border dark:border-gray-300/20 dark:shadow-sm',
            className,
        )}
        {...props}
    />
))
AccordionItemTwo.displayName = 'AccordionItemTwo'

const AccordionTriggerTwo = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
        icons?: string
        iconsPosition?: 'left' | 'right'
    }
>(({ className, icons, iconsPosition = 'right', children, ...props }, ref) => (
    <AccordionPrimitive.Header className="">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                'group flex w-full gap-2.5 rounded-t-lg px-4 py-3 text-black hover:text-black ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:text-white [&[data-state=open]>svg.arrow]:rotate-180 [&[data-state=open]>svg.arrow]:text-black dark:[&[data-state=open]>svg.arrow]:text-white [&[data-state=open]>svg.minus]:block [&[data-state=open]>svg.plus]:hidden data-[state=open]:border-b data-[state=open]:border-gray-300 data-[state=open]:bg-gray-200 dark:data-[state=open]:border-gray-300/20 dark:data-[state=open]:bg-black-dark dark:data-[state=open]:text-white',
                className,
                iconsPosition === 'right' ? 'justify-between xl:gap-5' : '',
            )}
            {...props}
        >
            {iconsPosition === 'left' &&
                (icons === 'plus-minus' ? (
                    <>
                        <Plus className="plus h-[18px] w-[18px] shrink-0 text-gray-600 transition-transform duration-200" />
                        <Minus className="minus hidden h-[18px] w-[18px] shrink-0 transition-transform duration-200" />
                    </>
                ) : (
                    <ChevronDown className="arrow h-[18px] w-[18px] shrink-0 text-gray-600 transition-transform duration-200" />
                ))}
            {children}

            {iconsPosition === 'right' &&
                (icons === 'plus-minus' ? (
                    <>
                        <Plus className="plus ml-auto h-[18px] w-[18px] shrink-0 text-gray-600 transition-transform duration-200" />
                        <Minus className="minus ml-auto hidden h-[18px] w-[18px] shrink-0 transition-transform duration-200" />
                    </>
                ) : (
                    <ChevronDown className="arrow h-[18px] w-[18px] shrink-0 text-gray-600 transition-transform duration-200 group-hover:text-black ltr:ml-auto rtl:mr-auto dark:group-hover:text-white" />
                ))}
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
))
AccordionTriggerTwo.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContentTwo = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
        parentClassName?: string
    }
>(({ className, children, parentClassName, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className={cn(
            'overflow-hidden px-4 text-left transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down dark:text-gray-500',
            parentClassName,
        )}
        {...props}
    >
        <div className={cn('', className)}>{children}</div>
    </AccordionPrimitive.Content>
))

AccordionContentTwo.displayName = AccordionPrimitive.Content.displayName

export {
    Accordion,
    AccordionItem,
    AccordionItemTwo,
    AccordionTrigger,
    AccordionTriggerTwo,
    AccordionContent,
    AccordionContentTwo,
}
