'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

import { ColumnDef } from '@tanstack/react-table'
import { Eye, MoveDown, MoveUp, PenLine, Trash2 } from 'lucide-react'
import Image from 'next/image'

export type IPatientsTable = {
    id: number
    doctor: {
        image: string
        name: string
    }
    gender: string
    age: number
    contact: string
    appointment_date: string
    assigned_doctor: string
    disease: string
}

export const PatientsTableColumns: ColumnDef<IPatientsTable>[] = [
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
                    Name
                </button>
            )
        },
        cell: ({ row }) => {
            const doctor = row.original.doctor

            return (
                <div className="flex items-center gap-2">
                    <div className="size-8 overflow-hidden rounded-xl">
                        <Image
                            src={doctor.image}
                            alt={doctor.name}
                            className="size-full object-cover"
                            width={32}
                            height={32}
                        />
                    </div>
                    <div className="max-w-72">
                        <span className="truncate font-semibold">
                            {doctor.name}
                        </span>
                    </div>
                </div>
            )
        },
    },

    {
        accessorKey: 'gender',
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
                    Gender
                </button>
            )
        },
        cell: ({ row }) => (
            <div className="w-full max-w-60 truncate">
                {row.getValue('gender')}
            </div>
        ),
    },
    {
        accessorKey: 'contact',
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
                    Contact no.
                </button>
            )
        },
        cell: ({ row }) => (
            <div className="font-semibold text-primary">
                {row.getValue('contact')}
            </div>
        ),
    },
    {
        accessorKey: 'age',
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
                    Age
                </button>
            )
        },
        cell: ({ row }) => <div>{row.getValue('age')} years</div>,
    },
    {
        accessorKey: 'appointment_date',
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
                    Appointment Date
                </button>
            )
        },
        cell: ({ row }) => <div>{row.getValue('appointment_date')}</div>,
    },
    {
        accessorKey: 'assigned_doctor',
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
                    Assigned Doctor
                </button>
            )
        },
        cell: ({ row }) => (
            <div className="w-full max-w-60 truncate">
                {row.getValue('assigned_doctor')}
            </div>
        ),
    },
    {
        accessorKey: 'disease',
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
                    Disease
                </button>
            )
        },
        cell: ({ row }) => (
            <Badge variant={'grey-300'}>{row.getValue('disease')}</Badge>
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
                </div>
            )
        },
    },
]
