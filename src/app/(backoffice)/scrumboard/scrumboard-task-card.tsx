import { ITask } from '@/app/(auth)/scrumboard/page'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { MessageSquareText, Paperclip } from 'lucide-react'
import Image from 'next/image'

const ScrumboardTaskCard = ({ task }: { task: ITask }) => {
    return (
        <Card key={task?.id} className="rounded" id="goal">
            <>
                {!!task?.banner && (
                    <div className="h-[100px] overflow-hidden rounded-t">
                        <Image
                            src={task?.banner || '/images/todo-img.png'}
                            width={259}
                            height={100}
                            alt="todo"
                            className="h-full w-full object-cover"
                        />
                    </div>
                )}
                <div className="space-y-4 p-3">
                    <Badge variant={'orange'} size={'small'} className='mb-3!'>
                        {task?.priority}
                    </Badge>
                    <div className="space-y-1.5">
                        <h4 className="font-semibold leading-tight text-black dark:text-white">
                            {task?.title}
                        </h4>
                        <p className="line-clamp-3 text-xs/5 font-medium">
                            {task?.description}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="size-6 shrink-0 overflow-hidden rounded-lg">
                            <Image
                                src={
                                    task?.assignee?.avatar ||
                                    '/images/avatar-two.svg'
                                }
                                width={24}
                                height={24}
                                alt={task?.assignee?.name || 'avatar'}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <span className="text-xs/tight font-medium text-black dark:text-white">
                            {task?.assignee?.name}
                        </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <p className="text-xs/tight font-medium ltr:ml-0 ltr:mr-auto rtl:ml-auto rtl:mr-0">
                            {task?.dueDate}
                        </p>
                        <button
                            type="button"
                            className="inline-flex items-center gap-1.5 text-xs/tight font-semibold text-black dark:text-white"
                        >
                            <Paperclip className="size-4 text-black hover:text-gray dark:text-white dark:hover:text-gray-500" />
                            15
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center gap-1.5 text-xs/tight font-semibold text-black dark:text-white"
                        >
                            <MessageSquareText className="size-4 text-black hover:text-gray dark:text-white dark:hover:text-gray-500" />
                            15
                        </button>
                    </div>
                </div>
            </>
        </Card>
    )
}

export default ScrumboardTaskCard
