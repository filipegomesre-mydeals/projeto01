'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

import { ColumnDef } from '@tanstack/react-table'
import { MoveDown, MoveUp } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export type ITable1 = {
    id: number
    company: {
        icon: React.ReactNode
        name: string
    }
    assigned_to: string
    value: string
    sales: string
    due_date: string
    status: string
}

export const CrmDealsColumns: ColumnDef<ITable1>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'company',
        header: ({ column }) => {
            return (
                <button
                    type="button"
                    className="flex items-center gap-1.5"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    <span className="inline-flex items-center ltr:-space-x-[5px]">
                        <MoveDown
                            className={`size-2.5 shrink-0 text-black rtl:-ml-[5px] dark:text-gray-500 ${column.getIsSorted() === 'asc' && 'text-gray-500 dark:text-white'}`}
                        />
                        <MoveUp
                            className={`size-2.5 shrink-0 text-gray-500 dark:text-white ${column.getIsSorted() === 'asc' && 'text-black! dark:text-gray-500!'}`}
                        />
                    </span>
                    Company
                </button>
            )
        },
        cell: ({ row }) => {
            const image = row.original.company

            return (
                <div className="flex items-center gap-2">
                    <Badge
                        variant={'grey-300'}
                        className="grid size-6 place-content-center overflow-hidden dark:bg-gray-400/10 dark:text-white [&>svg]:size-4"
                    >
                        {image.icon}
                    </Badge>
                    <span className="w-full max-w-72 truncate">
                        {image.name}
                    </span>
                </div>
            )
        },
    },
    {
        accessorKey: 'assigned_to',
        header: ({ column }) => {
            return (
                <button
                    type="button"
                    className="flex items-center gap-1.5"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    <span className="inline-flex items-center ltr:-space-x-[5px]">
                        <MoveDown
                            className={`size-2.5 shrink-0 text-black rtl:-ml-[5px] dark:text-gray-500 ${column.getIsSorted() === 'asc' && 'text-gray-500 dark:text-white'}`}
                        />
                        <MoveUp
                            className={`size-2.5 shrink-0 text-gray-500 dark:text-white ${column.getIsSorted() === 'asc' && 'text-black! dark:text-gray-500!'}`}
                        />
                    </span>
                    Assigned To
                </button>
            )
        },
        cell: ({ row }) => (
            <div className="w-full max-w-52 truncate">
                {row.getValue('assigned_to')}
            </div>
        ),
    },
    {
        accessorKey: 'value',
        header: ({ column }) => {
            return (
                <button
                    type="button"
                    className="flex items-center gap-1.5"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    <span className="inline-flex items-center ltr:-space-x-[5px]">
                        <MoveDown
                            className={`size-2.5 shrink-0 text-black rtl:-ml-[5px] dark:text-gray-500 ${column.getIsSorted() === 'asc' && 'text-gray-500 dark:text-white'}`}
                        />
                        <MoveUp
                            className={`size-2.5 shrink-0 text-gray-500 dark:text-white ${column.getIsSorted() === 'asc' && 'text-black! dark:text-gray-500!'}`}
                        />
                    </span>
                    Value
                </button>
            )
        },
        cell: ({ row }) => <div>{row.getValue('value')}</div>,
    },
    {
        accessorKey: 'sales',
        header: ({ column }) => {
            return (
                <button
                    type="button"
                    className="flex items-center gap-1.5"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    <span className="inline-flex items-center ltr:-space-x-[5px]">
                        <MoveDown
                            className={`size-2.5 shrink-0 text-black rtl:-ml-[5px] dark:text-gray-500 ${column.getIsSorted() === 'asc' && 'text-gray-500 dark:text-white'}`}
                        />
                        <MoveUp
                            className={`size-2.5 shrink-0 text-gray-500 dark:text-white ${column.getIsSorted() === 'asc' && 'text-black! dark:text-gray-500!'}`}
                        />
                    </span>
                    Sales
                </button>
            )
        },
        cell: ({ row }) => <div>{row.getValue('sales')}</div>,
    },
    {
        accessorKey: 'due_date',
        header: ({ column }) => {
            return (
                <button
                    type="button"
                    className="flex items-center gap-1.5"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    <span className="inline-flex items-center ltr:-space-x-[5px]">
                        <MoveDown
                            className={`size-2.5 shrink-0 text-black rtl:-ml-[5px] dark:text-gray-500 ${column.getIsSorted() === 'asc' && 'text-gray-500 dark:text-white'}`}
                        />
                        <MoveUp
                            className={`size-2.5 shrink-0 text-gray-500 dark:text-white ${column.getIsSorted() === 'asc' && 'text-black! dark:text-gray-500!'}`}
                        />
                    </span>
                    Due Date
                </button>
            )
        },
        cell: ({ row }) => <div>{row.getValue('due_date')}</div>,
    },
    {
        accessorKey: 'status',
        header: ({ column }) => {
            return (
                <button
                    type="button"
                    className="flex items-center gap-1.5"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }
                >
                    <span className="inline-flex items-center ltr:-space-x-[5px]">
                        <MoveDown
                            className={`size-2.5 shrink-0 text-black rtl:-ml-[5px] dark:text-gray-500 ${column.getIsSorted() === 'asc' && 'text-gray-500 dark:text-white'}`}
                        />
                        <MoveUp
                            className={`size-2.5 shrink-0 text-gray-500 dark:text-white ${column.getIsSorted() === 'asc' && 'text-black! dark:text-gray-500!'}`}
                        />
                    </span>
                    Status
                </button>
            )
        },
        cell: ({ row }) => (
            <Badge
                variant={
                    row.getValue('status') === 'done'
                        ? 'green'
                        : row.getValue('status') === 'pending'
                            ? 'orange'
                            : 'red'
                }
                className="capitalize"
            >
                {row.getValue('status')}
            </Badge>
        ),
    },
]
