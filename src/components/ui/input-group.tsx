'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

function InputGroup({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="input-group"
            role="group"
            className={cn(
                'group/input-group shadow-3xl placeholder:text-gray foucs:ring-1 dark:focus:shadow-3xl relative flex w-full items-center rounded-lg bg-transparent text-sm/[10px] font-medium text-black transition outline-none ring-inset placeholder:font-medium focus:ring-black ltr:text-left rtl:text-right dark:bg-white/5 dark:text-white dark:shadow-sm dark:ring-1 dark:ring-white/10 dark:placeholder:text-gray-500 dark:focus:ring-white [&>.relative]:w-full',
                'has-[>textarea]:h-auto',

                // Variants based on alignment.
                'ltr:has-[>[data-align=inline-start]]:[&>input]:pl-2 rtl:has-[>[data-align=inline-start]]:[&>input]:pr-2',
                'ltr:has-[>[data-align=inline-end]]:[&>input]:pr-2 rtl:has-[>[data-align=inline-end]]:[&>input]:pl-2',
                'has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3',
                'has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3',

                // Focus state.
                'has-[[data-slot=input-group-control]:focus-visible]:ring-1 dark:has-[[data-slot=input-group-control]:focus-visible]:ring-white',

                // Error state.
                'has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40',

                className,
            )}
            {...props}
        />
    )
}

const inputGroupAddonVariants = cva(
    "text-muted-foreground flex h-auto cursor-text select-none items-center justify-center gap-2 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
    {
        variants: {
            align: {
                'inline-start':
                    'order-first ltr:pl-3 rtl:pr-3 has-[>kbd]:ml-[-0.35rem]',
                'inline-end':
                    'order-last rtl:pl-3 ltr:pr-3 has-[>kbd]:mr-[-0.35rem]',
                'block-start':
                    '[.border-b]:pb-3 order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5',
                'block-end':
                    '[.border-t]:pt-3 order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5',
            },
        },
        defaultVariants: {
            align: 'inline-start',
        },
    },
)

function InputGroupAddon({
    className,
    align = 'inline-start',
    ...props
}: React.ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>) {
    return (
        <div
            role="group"
            data-slot="input-group-addon"
            data-align={align}
            className={cn(
                'shrink-0',
                inputGroupAddonVariants({ align }),
                className,
            )}
            onClick={(e) => {
                if ((e.target as HTMLElement).closest('button')) {
                    return
                }
                e.currentTarget.parentElement?.querySelector('input')?.focus()
            }}
            {...props}
        />
    )
}

const inputGroupButtonVariants = cva(
    'flex items-center gap-2 text-sm shadow-none',
    {
        variants: {
            size: {
                xs: "h-6 gap-1 rounded-sm px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
                sm: 'h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5',
                'icon-xs': 'size-6 rounded-sm p-0 has-[>svg]:p-0',
                'icon-sm': 'size-8 p-0 has-[>svg]:p-0',
            },
        },
        defaultVariants: {
            size: 'xs',
        },
    },
)

function InputGroupButton({
    className,
    type = 'button',
    variant = 'default',
    size = 'xs',
    ...props
}: Omit<React.ComponentProps<typeof Button>, 'size'> &
    VariantProps<typeof inputGroupButtonVariants>) {
    return (
        <Button
            type={type}
            data-size={size}
            variant={variant}
            className={cn(inputGroupButtonVariants({ size }), className)}
            {...props}
        />
    )
}

function InputGroupText({ className, ...props }: React.ComponentProps<'span'>) {
    return (
        <span
            className={cn(
                "text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
                className,
            )}
            {...props}
        />
    )
}

function InputGroupInput({
    className,
    ...props
}: React.ComponentProps<'input'>) {
    return (
        <Input
            data-slot="input-group-control"
            className={cn(
                'w-full flex-1 rounded-none border-0 text-sm/[10px] shadow-none! focus-visible:ring-0 dark:bg-transparent dark:ring-0',
                className,
            )}
            {...props}
        />
    )
}

function InputGroupTextarea({
    className,
    ...props
}: React.ComponentProps<'textarea'>) {
    return (
        <Textarea
            data-slot="input-group-control"
            className={cn(
                'flex-1 resize-none rounded-none border-0 bg-transparent px-3.5 py-2.5 shadow-none! ring-0! focus-visible:ring-0 dark:bg-transparent',
                className,
            )}
            {...props}
        />
    )
}

export {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupText,
    InputGroupInput,
    InputGroupTextarea,
}
