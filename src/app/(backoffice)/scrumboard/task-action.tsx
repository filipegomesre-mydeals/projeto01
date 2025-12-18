'use client'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Ellipsis } from 'lucide-react'
import EditTask from '@/components/custom/edit-task'
import { useState } from 'react'
import { ITaskColumn } from '@/app/(auth)/scrumboard/page'

type TaskActionProps = {
    taskColumn: ITaskColumn
    updatedTaskName: (args: { id: number; name: string }) => void
    deleteTask: (id: number) => void
    clearTasks: (id: number) => void
}

const TaskAction = ({
    taskColumn,
    updatedTaskName,
    deleteTask,
    clearTasks,
}: TaskActionProps) => {
    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
                <Ellipsis className="hover:text-gray size-[18px] text-black transition dark:text-white dark:hover:text-gray-500" />
            </PopoverTrigger>
            <PopoverContent align="end" className="w-auto space-y-1.5 p-1.5">
                <EditTask
                    updatedTaskName={updatedTaskName}
                    id={taskColumn?.id}
                    value={taskColumn.name?.replace('_', ' ')}
                    onClose={() => setOpen(false)}
                />

                <button
                    type="button"
                    className="hover:bg-light-theme block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                    onClick={() => {
                        deleteTask(taskColumn.id)
                        setOpen(false)
                    }}
                >
                    Delete
                </button>
                <button
                    type="button"
                    className="hover:bg-light-theme block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                    onClick={() => {
                        clearTasks(taskColumn.id)
                        setOpen(false)
                    }}
                >
                    Clear All
                </button>
            </PopoverContent>
        </Popover>
    )
}

export default TaskAction
