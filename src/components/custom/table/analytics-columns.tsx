'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ColumnDef } from '@tanstack/react-table'
import { MoveDown, MoveUp, PenLine, Trash2 } from 'lucide-react'

export type ITable = {
    id: string
    channel: {
        icon: React.ReactNode
        name: string
    }
    bounce_rate: string
    user_interactions: string
    change: string
    visit_duration: string
}

export const analyticsColumn: ColumnDef<ITable>[] = [
    {
        id: 'channel',
        accessorKey: 'channel',
        accessorFn: (row) => `${row.channel.name}`,
        header: 'Channel',
        cell: ({ row }) => {
            const { icon, name } = row.original.channel
            return (
                <div className="flex items-center gap-1.5">
                    <Badge
                        variant={'grey-400'}
                        className="size-7 overflow-hidden dark:bg-gray-400/10 dark:text-white"
                    >
                        {icon}
                    </Badge>
                    <span className="capitalize">{name}</span>
                </div>
            )
        },
    },
    {
        accessorKey: 'bounce_rate',
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
                    Bounce Rate
                </button>
            )
        },
        cell: ({ row }) => <div>{row.getValue('bounce_rate')}</div>,
    },

    {
        accessorKey: 'user_interactions',
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
                    <p>User Interactions</p>
                </button>
            )
        },
        cell: ({ row }) => <div>{row.getValue('user_interactions')}</div>,
    },
    {
        accessorKey: 'change',
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
                    <p>
                        Change
                    </p>
                </button>
            )
        },
        cell: ({ row }) => {
            const ChangeValue: string = row.getValue('change')
            return (
                <Badge
                    size={'small'}
                    variant={Number(ChangeValue) > 0 ? 'green' : 'red'}
                >
                    {row.getValue('change')}%
                </Badge>
            )
        },
    },
    {
        accessorKey: 'visit_duration',
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
                    <p>Visit Duration</p>
                </button>
            )
        },
        cell: ({ row }) => (
            <div className="text-primary">{row.getValue('visit_duration')}</div>
        ),
    },

    {
        id: 'actions',
        enableHiding: false,
        header: () => {
            return <span></span>
        },
        cell: ({ row }) => {
            return (
                <div className="flex justify-end gap-2.5">
                    <Button size={'small'} variant={'outline-general'}>
                        <PenLine />
                    </Button>
                    <Button
                        size={'small'}
                        variant={'outline-general'}
                        className="text-danger"
                    >
                        <Trash2 />
                    </Button>
                </div>
            )
        },
    },
]
