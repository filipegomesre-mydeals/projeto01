'use client'

import React, { useEffect, useState } from 'react'
import PageHeading from '@/components/layout/page-heading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import {
    Check,
    KanbanIcon,
    ListFilter,
    ListTodo,
    Plus,
    Settings,
    Share2,
    Star,
} from 'lucide-react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { InputSearch } from '@/components/ui/input-search'
import AddTask from '@/components/custom/add-task'
import Sortable from 'sortablejs'
import ScrumboardTaskCard from './scrumboard-task-card'
import { cn } from '@/lib/utils'
import AddNewTask from './_add-new-task'
import { toast } from '@/hooks/use-toast'
import TaskAction from './task-action'
import { useStore } from '@/store'

export type ITask = {
    id: number
    title: string
    description: string
    status: string
    banner: string
    priority: string
    assignee: {
        id: number
        name: string
        avatar: string
        email: string
    }
    dueDate: string
}

export type ITaskColumn = {
    id: number
    name: string
    theme: string
    variant: string
    tasks: ITask[] | []
}

const Scrumboard = () => {
    const isRTL = useStore((state) => state.isRTL)

    const [task, setTask] = useState<ITaskColumn[]>([
        {
            id: 1,
            name: 'to_do',
            theme: 'bg-primary',
            variant: 'blue',
            tasks: [
                {
                    id: 1,
                    title: 'UX/UI Design Overhaul',
                    description:
                        'Engaging and welcoming tone of voice for the new and excising users.',
                    status: 'to_do',
                    banner: '/images/todo-img.png',
                    priority: 'Medium',
                    assignee: {
                        id: 1,
                        name: 'Sofia Walker',
                        avatar: '/images/avatar.svg',
                        email: 'sofia@example.com',
                    },
                    dueDate: 'January 01, 2024',
                },
                {
                    id: 2,
                    title: 'Cloud Migration Initiative',
                    description:
                        'Engaging and welcoming tone of voice for the new and excising users.',
                    status: 'to_do',
                    banner: '',
                    priority: 'Medium',
                    assignee: {
                        id: 7,
                        name: 'Ella Young',
                        avatar: '/images/avatar-forty.svg',
                        email: 'ella@example.com',
                    },
                    dueDate: 'January 01, 2024',
                },
            ],
        },
        {
            id: 2,
            name: 'in_progress',
            theme: 'bg-warning',
            variant: 'blue',
            tasks: [
                {
                    id: 3,
                    title: 'Software Security Enhancements',
                    description:
                        'Engaging and welcoming tone of voice for the new and excising users.',
                    status: 'in_progress',
                    banner: '/images/kanban-bg2.png',
                    priority: 'Medium',
                    assignee: {
                        id: 7,
                        name: 'Ella Young',
                        avatar: '/images/avatar-forty.svg',
                        email: 'ella@example.com',
                    },
                    dueDate: 'January 01, 2024',
                },
                {
                    id: 4,
                    title: 'Software Security Enhancements',
                    description:
                        'Engaging and welcoming tone of voice for the new and excising users.',
                    status: 'in_progress',
                    banner: '',
                    priority: 'Medium',
                    assignee: {
                        id: 1,
                        name: 'Sofia Walker',
                        avatar: '/images/avatar.svg',
                        email: 'sofia@example.com',
                    },
                    dueDate: 'January 01, 2024',
                },
                {
                    id: 6,
                    title: 'Software Security Enhancements',
                    description:
                        'Engaging and welcoming tone of voice for the new and excising users.',
                    status: 'in_progress',
                    banner: '',
                    priority: 'Medium',
                    assignee: {
                        id: 7,
                        name: 'Ella Young',
                        avatar: '/images/avatar-forty.svg',
                        email: 'ella@example.com',
                    },
                    dueDate: 'January 01, 2024',
                },
            ],
        },
        {
            id: 5,
            name: 'review',
            theme: 'bg-danger',
            variant: 'blue',
            tasks: [
                {
                    id: 1,
                    title: 'UX/UI Design Overhaul',
                    description:
                        'Engaging and welcoming tone of voice for the new and excising users.',
                    status: 'review',
                    priority: 'Medium',
                    banner: '/images/kanban-bg3.png',
                    assignee: {
                        id: 5,
                        name: 'Aubrey Green',
                        avatar: '/images/avatar-seven.svg',
                        email: 'aubrey@example.com',
                    },
                    dueDate: 'January 01, 2024',
                },
                {
                    id: 2,
                    title: 'Cloud Migration Initiative',
                    description:
                        'Engaging and welcoming tone of voice for the new and excising users.',
                    status: 'review',
                    banner: '',
                    priority: 'High',
                    assignee: {
                        id: 6,
                        name: 'Darlene Robertson',
                        avatar: '/images/avatar-eleven.svg',
                        email: 'darlene@example.com',
                    },
                    dueDate: 'January 01, 2024',
                },
            ],
        },
        {
            id: 6,
            name: 'done',
            theme: 'bg-success',
            variant: 'blue',
            tasks: [
                {
                    id: 1,
                    title: 'UX/UI Design Overhaul',
                    description:
                        'Engaging and welcoming tone of voice for the new and excising users.',
                    status: 'done',
                    banner: '/images/kanban-bg4.png',
                    priority: 'Medium',
                    assignee: {
                        id: 1,
                        name: 'Scarlett Hernandez',
                        avatar: '/images/avatar-two.svg',
                        email: 'scarlett@example.com',
                    },
                    dueDate: 'January 01, 2024',
                },
                {
                    id: 2,
                    title: 'Cloud Migration Initiative',
                    description:
                        'Engaging and welcoming tone of voice for the new and excising users.',
                    status: 'done',
                    banner: '',
                    priority: 'High',
                    assignee: {
                        id: 3,
                        name: 'Ralph Edwards',
                        avatar: '/images/avatar-thirty.svg',
                        email: 'ralph@example.com',
                    },
                    dueDate: 'January 01, 2024',
                },
            ],
        },
    ])

    const assigneesUsers = [
        {
            id: 1,
            name: 'Sofia Walker',
            avatar: '/images/avatar.svg',
            email: 'sofia@example.com',
            role: 'Admin',
        },
        {
            id: 2,
            name: 'Scarlett Hernandez',
            avatar: '/images/avatar-two.svg',
            email: 'scarlett@example.com',
            role: 'Admin',
        },
        {
            id: 3,
            name: 'Ralph Edwards',
            avatar: '/images/avatar-thirty.svg',
            email: 'ralph@example.com',
            role: 'Admin',
        },
        {
            id: 4,
            name: 'Darlene Robertson',
            avatar: '/images/avatar-eleven.svg',
            email: 'darlene@example.com',
            role: 'Admin',
        },
        {
            id: 5,
            name: 'Aubrey Green',
            avatar: '/images/avatar-seven.svg',
            email: 'aubrey@example.com',
            role: 'Admin',
        },
        {
            id: 6,
            name: 'Robert Fox',
            avatar: '/images/avatar-nine.svg',
            email: 'robert@example.com',
            role: 'Admin',
        },
        {
            id: 7,
            name: 'Ella Young',
            avatar: '/images/avatar-forty.svg',
            email: 'ella@example.com',
            role: 'Admin',
        },
    ]

    const updatedTasks = ({
        taskType,
        taskDetails,
    }: {
        taskType: string
        taskDetails: {
            id: string
            name: string
            priority: string
            description: string
        }
    }) => {
        const newTask: ITask = {
            id: Date.now(),
            title: taskDetails.name,
            description: taskDetails.description || '',
            status: taskType.toUpperCase(),
            banner: '',
            priority: taskDetails.priority || 'Medium',
            assignee:
                assigneesUsers.find(
                    (user) => user.id.toString() === taskDetails.id,
                ) || assigneesUsers[0],
            dueDate: 'January 01, 2024',
        }

        const newTasks = task.map((column) => {
            if (column.name === taskType) {
                return {
                    ...column,
                    tasks: [...column.tasks, newTask],
                }
            }
            return column
        })

        setTask(newTasks)
    }

    const updatedTaskName = ({ id, name }: { id: number; name: string }) => {
        const newTasks = task.map((column) => {
            if (column.id === id) {
                return {
                    ...column,
                    name: name,
                }
            }
            return column
        })

        setTask(newTasks)
    }

    const addTaskColumn = ({ name }: { name: string }) => {
        const newTaskColumn: ITaskColumn = {
            id: task.length + 1,
            name: name || '',
            theme: 'bg-primary',
            variant: 'blue',
            tasks: [],
        }

        setTask([...task, newTaskColumn])
    }

    const deleteTask = (columnId: number) => {
        setTask((prevTasks) =>
            prevTasks.filter((column) => column.id !== columnId),
        )

        toast({
            title: 'Task Deleted Successfully',
            description: 'You can now start working on it.',
            icon: <Check className="mt-0.5 size-5 text-success" />,
            variant: 'default',
        })
    }

    const clearTasks = (columnId: number) => {
        setTask((prevTasks) =>
            prevTasks.map((column) =>
                column.id === columnId
                    ? {
                          ...column,
                          tasks: [],
                      }
                    : column,
            ),
        )

        toast({
            title: 'Task Cleared Successfully',
            description: 'You can now start working on it.',
            icon: <Check className="mt-0.5 size-5 text-success" />,
            variant: 'default',
        })
    }

    useEffect(() => {
        const sortables = document.querySelectorAll('.sortable')
        sortables.forEach((node) => {
            new Sortable(node as HTMLElement, {
                group: 'scoreboard',
                direction: 'vertical',
                animation: 250,
                scroll: true,
                bubbleScroll: true,
            })
        })
    }, [task])

    return (
        <div className="relative space-y-4">
            <PageHeading heading={'Scrumboard'} />

            <span className="absolute -inset-4 -top-8 -z-1 rotate-180 dark:hidden">
                <Image
                    src="/images/kanban-bg.png"
                    width={1180}
                    height={200}
                    alt="home-bg"
                    className="h-full w-full opacity-10"
                />
            </span>

            <div className="min-h-[calc(100vh-160px)] w-full">
                <Card className="flex flex-col justify-between gap-4 rounded-b-none px-5 py-3.5 shadow-sm md:flex-row md:items-center">
                    <div className="flex shrink-0 grow flex-col items-start gap-1.5">
                        <div className="inline-flex items-center gap-2.5">
                            <h2 className="text-lg/tight font-semibold text-black dark:text-white">
                                eCommerce Website Design
                            </h2>
                            <button type="button">
                                <Star className="size-[18px] transition hover:fill-warning hover:text-warning" />
                            </button>
                            <Popover>
                                <PopoverTrigger className="data-[state=open]:text-black dark:data-[state=open]:text-white">
                                    <Settings className="size-[18px] transition hover:text-black dark:hover:text-white" />
                                </PopoverTrigger>
                                <PopoverContent
                                    align="center"
                                    className="w-auto space-y-1.5 p-1.5"
                                >
                                    <button
                                        type="button"
                                        className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden hover:bg-light-theme ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                    >
                                        Project Details
                                    </button>
                                    <button
                                        type="button"
                                        className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden hover:bg-light-theme ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                    >
                                        Copy Project Link
                                    </button>
                                    <button
                                        type="button"
                                        className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden hover:bg-light-theme ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                    >
                                        Task Status List
                                    </button>
                                    <button
                                        type="button"
                                        className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden hover:bg-light-theme ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                    >
                                        Activity List
                                    </button>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <Badge variant={'orange'} size={'small'}>
                            In Progress
                        </Badge>
                    </div>
                    <div className="inline-flex flex-wrap items-center gap-2.5 md:justify-end">
                        <div className="inline-flex items-center -space-x-2">
                            <Image
                                src="/images/kanban-avatar1.svg"
                                width={30}
                                height={30}
                                alt="avatar"
                                className="hidden size-[30px] rounded-full xl:block"
                            />
                            <Image
                                src="/images/kanban-avatar2.svg"
                                width={30}
                                height={30}
                                alt="avatar"
                                className="hidden size-[30px] rounded-full xl:block"
                            />
                            <Image
                                src="/images/kanban-avatar3.svg"
                                width={30}
                                height={30}
                                alt="avatar"
                                className="size-[30px] rounded-full"
                            />
                            <Image
                                src="/images/kanban-avatar4.svg"
                                width={30}
                                height={30}
                                alt="avatar"
                                className="size-[30px] rounded-full"
                            />
                            <Popover>
                                <PopoverTrigger asChild>
                                    <button
                                        type="button"
                                        className="grid h-[30px] min-w-[30px] shrink-0 place-content-center rounded-full border-2 border-white bg-gray-300 px-1 text-[11px]/none font-bold text-black shadow-sm"
                                    >
                                        +5
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent
                                    align="center"
                                    className="max-h-60 w-[200px] space-y-1 overflow-y-auto p-1.5"
                                >
                                    <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden dark:text-white">
                                        <span className="size-6 overflow-hidden rounded-lg">
                                            <Image
                                                src="/images/avatar-two.svg"
                                                width={24}
                                                height={24}
                                                alt="avatar"
                                                className="size-full object-cover"
                                            />
                                        </span>
                                        Sofia Walker
                                    </div>
                                    <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden dark:text-white">
                                        <span className="size-6 overflow-hidden rounded-lg">
                                            <Image
                                                src="/images/avatar-six.svg"
                                                width={24}
                                                height={24}
                                                alt="avatar"
                                                className="size-full object-cover"
                                            />
                                        </span>
                                        Scarlett Hernandez
                                    </div>
                                    <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden dark:text-white">
                                        <span className="size-6 overflow-hidden rounded-lg">
                                            <Image
                                                src="/images/avatar-thirty.svg"
                                                width={24}
                                                height={24}
                                                alt="avatar"
                                                className="size-full object-cover"
                                            />
                                        </span>
                                        Ralph Edwards
                                    </div>
                                    <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black outline-hidden dark:text-white">
                                        <span className="size-6 overflow-hidden rounded-lg">
                                            <Image
                                                src="/images/avatar-eleven.svg"
                                                width={24}
                                                height={24}
                                                alt="avatar"
                                                className="size-full object-cover"
                                            />
                                        </span>
                                        Darlene Robertson
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <Button
                            type="button"
                            className="grid size-[30px] place-content-center rounded-full border-2 border-white shadow-[0_0_21px_0_rgba(51,92,255,0.2)]"
                        >
                            <Plus className="size-4" />
                        </Button>
                        <span className="hidden h-6 w-px rounded-full bg-gray-300 sm:block dark:bg-gray-300/50" />
                        <div className="flex flex-wrap items-center gap-2.5">
                            <AddNewTask addTaskColumn={addTaskColumn} />
                            <Button type="button" variant={'outline-general'}>
                                <Share2 />
                                Share
                            </Button>
                        </div>
                    </div>
                </Card>
                <Tabs defaultValue="Overview">
                    <div className="flex items-center justify-between overflow-x-auto rounded-b-lg border-t border-gray-300 bg-white shadow-sm dark:border-gray-700/50 dark:bg-white/6">
                        <TabsList className="inline-flex gap-[30px] px-5 text-sm/4 font-semibold sm:px-[30px]">
                            <TabsTrigger
                                value="Overview"
                                className="rounded-none border-b-2 border-transparent bg-transparent! px-0 py-4 data-[state=active]:border-primary"
                            >
                                Overview
                                <Badge
                                    variant={'blue'}
                                    size={'number'}
                                    className="font-semibold"
                                >
                                    50
                                </Badge>
                            </TabsTrigger>
                            <TabsTrigger
                                value="Task"
                                className="rounded-none border-b-2 border-transparent bg-transparent! px-0 py-4 data-[state=active]:border-primary"
                            >
                                Task
                                <Badge
                                    variant={'purple'}
                                    size={'number'}
                                    className="font-semibold"
                                >
                                    50
                                </Badge>
                            </TabsTrigger>
                            <TabsTrigger
                                value="Files"
                                className="rounded-none border-b-2 border-transparent bg-transparent! px-0 py-4 data-[state=active]:border-primary"
                            >
                                Files
                            </TabsTrigger>

                            <TabsTrigger
                                value="Password"
                                className="rounded-none border-b-2 border-transparent bg-transparent! px-0 py-4 data-[state=active]:border-primary"
                            >
                                Password
                            </TabsTrigger>
                            <TabsTrigger
                                value="Verifications"
                                className="rounded-none border-b-2 border-transparent bg-transparent! px-0 py-4 data-[state=active]:border-primary"
                            >
                                Verifications
                            </TabsTrigger>
                        </TabsList>
                        <div className="inline-flex items-center gap-2.5 ltr:pr-5 rtl:pl-5">
                            <InputSearch
                                type="text"
                                placeholder="Search Task"
                            />
                            <Button type="button" variant={'outline-general'}>
                                <ListFilter />
                                Filter
                            </Button>
                            <span className="h-6 w-px rounded-full bg-gray-300 dark:bg-gray-300/50" />
                            <div className="inline-flex items-center justify-center divide-gray-300 overflow-hidden rounded-lg border border-gray-300 shadow-sm ltr:divide-x dark:divide-gray-700/50 dark:border-gray-700/70">
                                <label className="relative inline-flex items-center gap-1.5 whitespace-nowrap border-gray-300 px-2.5 py-2 text-xs/tight font-medium has-checked:bg-gray-400 has-checked:text-black rtl:border-l">
                                    <input
                                        type="radio"
                                        name="view"
                                        className="absolute inset-0 cursor-pointer opacity-0"
                                    />
                                    <ListTodo className="size-4 shrink-0" />
                                    List view
                                </label>
                                <label className="relative inline-flex items-center gap-1.5 whitespace-nowrap px-2.5 py-2 text-xs/tight font-medium has-checked:bg-gray-400 has-checked:text-black">
                                    <input
                                        name="view"
                                        type="radio"
                                        className="absolute inset-0 cursor-pointer opacity-0"
                                        defaultChecked
                                    />
                                    <KanbanIcon className="size-4 shrink-0" />
                                    Kanban view
                                </label>
                            </div>
                        </div>
                    </div>
                    <TabsContent
                        value="Overview"
                        className="mt-4 overflow-x-auto"
                    >
                        <div className="overflow-x-auto pb-2">
                            <div
                                className="flex justify-start gap-4 pb-2"
                                id="scoreboard sortable"
                            >
                                {task?.map((taskColumn) => {
                                    return (
                                        <div
                                            className="h-fit w-[275px] shrink-0 space-y-2 rounded-lg bg-white p-2 dark:bg-white/10"
                                            key={taskColumn.id}
                                        >
                                            <Card className="flex items-center justify-between px-4 py-2.5">
                                                <div className="inline-flex items-center gap-2.5">
                                                    <span
                                                        className={cn(
                                                            'size-1.5 rounded-full',
                                                            taskColumn.theme
                                                                ? taskColumn.theme ||
                                                                      'bg-primary'
                                                                : 'bg-primary',
                                                        )}
                                                    ></span>
                                                    <h3 className="text-xs/tight font-bold lowercase text-black first-letter:uppercase dark:text-white">
                                                        {taskColumn.name.replace(
                                                            '_',
                                                            ' ',
                                                        )}
                                                    </h3>
                                                </div>
                                                <div className="inline-flex items-center gap-2.5">
                                                    <TaskAction
                                                        taskColumn={taskColumn}
                                                        updatedTaskName={
                                                            updatedTaskName
                                                        }
                                                        deleteTask={deleteTask}
                                                        clearTasks={clearTasks}
                                                    />
                                                    <AddTask
                                                        taskType={
                                                            taskColumn.name ||
                                                            'to_do'
                                                        }
                                                        assigneesUsers={
                                                            assigneesUsers
                                                        }
                                                        onUpdateTasks={
                                                            updatedTasks
                                                        }
                                                    />
                                                </div>
                                            </Card>

                                            <div
                                                id="group__goals"
                                                className={cn(
                                                    'sortable min-h-20 space-y-2',
                                                )}
                                            >
                                                {!!taskColumn?.tasks?.length &&
                                                    taskColumn?.tasks?.map(
                                                        (
                                                            task: ITask,
                                                            index: number,
                                                        ) => {
                                                            return (
                                                                <ScrumboardTaskCard
                                                                    key={
                                                                        task?.id
                                                                    }
                                                                    task={task}
                                                                />
                                                            )
                                                        },
                                                    )}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
export default Scrumboard
