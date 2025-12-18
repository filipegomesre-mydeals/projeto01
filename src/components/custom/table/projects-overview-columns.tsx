'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

import { ColumnDef } from '@tanstack/react-table'
import { MoveDown, MoveUp } from 'lucide-react'
import React from 'react'

export type ITable = {
    id: number
    project: string
    project_lead: string
    progress: string
    tasks: string
    due_date: string
    status: string
}

export const ProjectsOverviewColumns: ColumnDef<ITable>[] = [
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
        accessorKey: 'project',
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
                    Project Name
                </button>
            )
        },
        cell: ({ row }) => (
            <div className="w-full max-w-80 truncate">
                {row.getValue('project')}
            </div>
        ),
    },
    {
        accessorKey: 'project_lead',
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
                    Project Lead
                </button>
            )
        },
        cell: ({ row }) => (
            <div className="w-full max-w-52 truncate">
                {row.getValue('project_lead')}
            </div>
        ),
    },
    {
        accessorKey: 'progress',
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
                    Progress
                </button>
            )
        },
        cell: ({ row }) => (
            <Badge variant={'outline'} className="font-bold">
                {row.getValue('progress')}
            </Badge>
        ),
    },
    {
        accessorKey: 'tasks',
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
                    Tasks
                </button>
            )
        },
        cell: ({ row }) => <div>{row.getValue('tasks')}</div>,
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
                    row.getValue('status') === 'Completed'
                        ? 'purple'
                        : row.getValue('status') === 'Inprogress'
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
