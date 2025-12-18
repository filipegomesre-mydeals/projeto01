'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

import { ColumnDef } from '@tanstack/react-table'
import { Eye, MoveDown, MoveUp, PenLine, Trash2 } from 'lucide-react'
import Image from 'next/image'

export type ITable = {
    id: number
    doctor: {
        image: string
        name: string
        speciality: string
    }
    qualification: string
    exprience: string
    status: 'Available' | 'on leave'
}

export const DoctorsTableColumns: ColumnDef<ITable>[] = [
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
        accessorKey: 'name',
        accessorFn: (row) => row.doctor.name,
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
                    Doctor Name
                </button>
            )
        },
        cell: ({ row }) => {
            const doctor = row.original.doctor

            return (
                <div className="flex items-center gap-2">
                    <div className="size-8 overflow-hidden">
                        <Image
                            src={doctor.image}
                            alt={doctor.name}
                            className="size-full object-cover"
                            width={32}
                            height={32}
                        />
                    </div>
                    <div className="flex max-w-72 flex-col space-y-0.5">
                        <span className="truncate font-semibold">
                            {doctor.name}
                        </span>
                        <span className="truncate text-[11px] text-gray dark:text-gray-500">
                            {doctor.speciality}
                        </span>
                    </div>
                </div>
            )
        },
    },

    {
        accessorKey: 'qualification',
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
                    Qualification
                </button>
            )
        },
        cell: ({ row }) => (
            <div className="w-full max-w-60 truncate">
                {row.getValue('qualification')}
            </div>
        ),
    },
    {
        accessorKey: 'exprience',
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
                    Exprience
                </button>
            )
        },
        cell: ({ row }) => <div>{row.getValue('exprience')}</div>,
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
                    row.getValue('status') === 'Available'
                        ? 'green'
                        : row.getValue('status') === 'on leave'
                          ? 'red'
                          : 'red'
                }
                className="capitalize"
            >
                {row.getValue('status')}
            </Badge>
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
                    <Button size={'small'} variant={'outline-general'}>
                        <Eye />
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
