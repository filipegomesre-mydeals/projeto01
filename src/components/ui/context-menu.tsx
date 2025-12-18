'use client'

import * as React from 'react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useStore } from '@/store'

function ContextMenu({
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
    const isRTL = useStore((state) => state.isRTL)
    return (
        <ContextMenuPrimitive.Root
            data-slot="context-menu"
            {...props}
            dir={isRTL ? 'rtl' : 'ltr'}
        />
    )
}

function ContextMenuTrigger({
    className,
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
    return (
        <ContextMenuPrimitive.Trigger
            data-slot="context-menu-trigger"
            {...props}
            className={cn(
                'flex rounded-lg px-4 py-3 text-black dark:text-white',
                className,
            )}
        />
    )
}

function ContextMenuGroup({
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
    return (
        <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
    )
}

function ContextMenuPortal({
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
    return (
        <ContextMenuPrimitive.Portal
            data-slot="context-menu-portal"
            {...props}
        />
    )
}

function ContextMenuSub({
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
    return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />
}

function ContextMenuRadioGroup({
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
    return (
        <ContextMenuPrimitive.RadioGroup
            data-slot="context-menu-radio-group"
            {...props}
        />
    )
}

function ContextMenuSubTrigger({
    className,
    inset,
    children,
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
}) {
    return (
        <ContextMenuPrimitive.SubTrigger
            data-slot="context-menu-sub-trigger"
            data-inset={inset}
            className={cn(
                "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2.5 text-sm/none font-medium outline-hidden select-none hover:bg-gray-400 hover:text-black data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 dark:hover:bg-gray-200/10 dark:hover:text-white [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                className,
            )}
            {...props}
        >
            {children}
            <ChevronRightIcon className="ms-auto rtl:rotate-180" />
        </ContextMenuPrimitive.SubTrigger>
    )
}

function ContextMenuSubContent({
    className,
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
    return (
        <ContextMenuPrimitive.SubContent
            data-slot="context-menu-sub-content"
            className={cn(
                'text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:bg-black-dark z-50 ms-2.5 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-lg border border-gray-300 bg-white p-1 dark:border-white/10 dark:shadow-sm',
                className,
            )}
            {...props}
        />
    )
}

function ContextMenuContent({
    className,
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
    return (
        <ContextMenuPrimitive.Portal>
            <ContextMenuPrimitive.Content
                data-slot="context-menu-content"
                className={cn(
                    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 shadow-3xl dark:bg-black-dark z-50 max-h-(--radix-context-menu-content-available-height) origin-(--radix-context-menu-content-transform-origin) space-y-1.5 overflow-x-hidden overflow-y-auto rounded-lg bg-white p-1.5 text-gray-700 dark:border dark:border-white/10 dark:text-gray-500 dark:shadow-sm',
                    className,
                )}
                {...props}
            />
        </ContextMenuPrimitive.Portal>
    )
}

function ContextMenuItem({
    className,
    inset,
    variant = 'default',
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
    variant?: 'default' | 'destructive'
}) {
    return (
        <ContextMenuPrimitive.Item
            data-slot="context-menu-item"
            data-inset={inset}
            data-variant={variant}
            className={cn(
                "data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2.5 text-sm/none font-medium outline-hidden transition-colors select-none hover:bg-gray-400 hover:text-black data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 dark:hover:bg-gray-200/10 dark:hover:text-white [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                className,
            )}
            {...props}
        />
    )
}

function ContextMenuCheckboxItem({
    className,
    children,
    checked,
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
    return (
        <ContextMenuPrimitive.CheckboxItem
            data-slot="context-menu-checkbox-item"
            className={cn(
                "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 ps-8 pe-2 text-xs/4 outline-hidden select-none focus:bg-gray-400 focus:text-black data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-gray-200/10 dark:hover:text-white [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                className,
            )}
            checked={checked}
            {...props}
        >
            <span className="pointer-events-none absolute flex size-3.5 items-center justify-center ltr:left-2 rtl:right-2">
                <ContextMenuPrimitive.ItemIndicator>
                    <CheckIcon className="size-3.5" />
                </ContextMenuPrimitive.ItemIndicator>
            </span>
            {children}
        </ContextMenuPrimitive.CheckboxItem>
    )
}

function ContextMenuRadioItem({
    className,
    children,
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
    return (
        <ContextMenuPrimitive.RadioItem
            data-slot="context-menu-radio-item"
            className={cn(
                "focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-sm py-1 ps-8 pe-2 text-xs font-medium outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                className,
            )}
            {...props}
        >
            <span className="pointer-events-none absolute flex size-3.5 items-center justify-center rounded-full ring-[1.5px] ring-gray-300 ring-inset ltr:left-2 rtl:right-2">
                <ContextMenuPrimitive.ItemIndicator className="grid size-full place-content-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                    <CircleIcon className="size-1.5 fill-current" />
                </ContextMenuPrimitive.ItemIndicator>
            </span>
            {children}
        </ContextMenuPrimitive.RadioItem>
    )
}

function ContextMenuLabel({
    className,
    inset,
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
}) {
    return (
        <ContextMenuPrimitive.Label
            data-slot="context-menu-label"
            data-inset={inset}
            className={cn(
                'text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:ps-8',
                className,
            )}
            {...props}
        />
    )
}

function ContextMenuSeparator({
    className,
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
    return (
        <ContextMenuPrimitive.Separator
            data-slot="context-menu-separator"
            className={cn(
                '-mx-1 my-1 h-px bg-gray-300 dark:bg-gray-700/50',
                className,
            )}
            {...props}
        />
    )
}

function ContextMenuShortcut({
    className,
    ...props
}: React.ComponentProps<'span'>) {
    return (
        <span
            data-slot="context-menu-shortcut"
            className={cn(
                'text-muted-foreground ms-auto text-xs tracking-widest',
                className,
            )}
            {...props}
        />
    )
}

export {
    ContextMenu,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuCheckboxItem,
    ContextMenuRadioItem,
    ContextMenuLabel,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuGroup,
    ContextMenuPortal,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuRadioGroup,
}
