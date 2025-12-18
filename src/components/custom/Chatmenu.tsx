import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export type Message = {
    text: string
    time: string
    status: number
    fromUserId: number
}

export type Contact = {
    userId: number
    name: string
    path?: string
    active: boolean
    type?: 'group' | string
    messages?: Message[]
    time?: string
    preview?: string
}

export type User = {
    id: number
    userId?: number
    name?: string
    path?: string
    designation?: string
}

const Chatmenu = ({
    contactList,
    setSelectedUser,
    selectedUser,
    loginUser,
}: {
    contactList: Contact[]
    setSelectedUser: (val: Contact) => void
    selectedUser: Contact | null
    loginUser: User
}) => {
    return (
        <Card className="h-[calc(100vh-172px)] w-[314px] shrink-0 overflow-y-auto shadow-none!">
            <CardHeader className="dark:bg-black-dark sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-gray-300 bg-white px-5 py-3 dark:border-gray-700/50">
                <h3 className="line-clamp-1 leading-tight font-semibold text-black dark:text-white">
                    Chats
                </h3>
                <button
                    type="button"
                    className="hidden text-xs/tight font-medium transition hover:text-black md:block dark:hover:text-white"
                >
                    See All
                </button>
            </CardHeader>
            <CardContent className="overflow-x-auto">
                <div className="flex items-center gap-2.5 overflow-x-auto bg-gray-200 p-4 shadow-sm dark:bg-black/30">
                    {contactList
                        ?.filter((contact: Contact) => contact.active)
                        ?.map((contact) => (
                            <div
                                key={contact?.userId}
                                className="relative size-10 shrink-0"
                            >
                                <Image
                                    src={
                                        contact?.path ||
                                        '/images/blog-avatar.svg'
                                    }
                                    alt="chat-avatar"
                                    height={40}
                                    width={40}
                                    className="size-full rounded-full"
                                ></Image>
                                <span className="bg-success dark:ring-black-dark absolute right-0.5 bottom-0.5 size-1.5 rounded-full ring-[3px] ring-white"></span>
                            </div>
                        ))}
                </div>
                <div className="max-h-96 divide-y divide-gray-300 overflow-y-auto dark:divide-gray-300/20">
                    {contactList
                        ?.filter(
                            (contact: Contact) => contact?.type !== 'group',
                        )
                        ?.map((contact: Contact) => (
                            <div
                                key={contact?.userId}
                                className={cn(
                                    'group hover:bg-primary/5 relative transition-all',
                                    {
                                        'bg-primary/5':
                                            selectedUser?.userId ===
                                            contact?.userId,
                                    },
                                )}
                            >
                                <button
                                    type="button"
                                    className="absolute inset-0 z-1 size-full"
                                    onClick={() => setSelectedUser(contact)}
                                />
                                <div className="group-hover:border-primary dark:border-black-dark flex items-center gap-2.5 p-4 text-gray-700 transition ltr:border-l-2 rtl:border-r-2 dark:text-gray-500">
                                    <div className="relative size-10 shrink-0">
                                        <Image
                                            src={contact?.path || ''}
                                            alt="chat-avatar"
                                            height={40}
                                            width={40}
                                            className="size-full rounded-full"
                                        ></Image>
                                        {!!contact?.active && (
                                            <span className="bg-success dark:ring-black-dark absolute right-0.5 bottom-0.5 size-1.5 rounded-full ring-[3px] ring-white"></span>
                                        )}
                                    </div>
                                    <div className="grow space-y-1.5">
                                        <div className="flex items-center justify-between gap-1.5">
                                            <h4 className="line-clamp-1 leading-tight font-semibold text-black dark:text-white">
                                                {contact?.name}
                                            </h4>
                                            {!!contact?.messages?.length && (
                                                <span className="shrink-0 text-xs/tight font-semibold">
                                                    {
                                                        contact?.messages[
                                                            contact?.messages
                                                                ?.length - 1
                                                        ]?.time
                                                    }
                                                </span>
                                            )}
                                        </div>
                                        {!!contact?.messages?.length && (
                                            <div className="flex items-center justify-between gap-1.5">
                                                <p className="line-clamp-1 text-xs/tight font-medium">
                                                    {
                                                        contact?.messages[
                                                            contact?.messages
                                                                ?.length - 1
                                                        ]?.text
                                                    }
                                                </p>
                                                {!!contact?.messages?.filter(
                                                    (message: Message) =>
                                                        !message.status &&
                                                        message?.fromUserId !==
                                                            loginUser?.userId,
                                                )?.length && (
                                                    <Badge
                                                        variant={'primary'}
                                                        size={'number'}
                                                    >
                                                        {
                                                            contact?.messages?.filter(
                                                                (
                                                                    message: Message,
                                                                ) =>
                                                                    !message.status &&
                                                                    message?.fromUserId !==
                                                                        loginUser?.userId,
                                                            )?.length
                                                        }
                                                    </Badge>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="flex items-center justify-between gap-1.5 bg-gray-200 px-5 py-3 dark:bg-black/30">
                    <h3 className="line-clamp-1 leading-tight font-semibold text-black dark:text-white">
                        Groups
                    </h3>
                    <button
                        type="button"
                        className="text-xs/tight font-medium transition hover:text-black dark:hover:text-white"
                    >
                        See All
                    </button>
                </div>
                <div className="max-h-[210px] divide-y divide-gray-300 overflow-y-auto border-b border-gray-300 dark:divide-gray-300/20 dark:border-gray-300/20">
                    {contactList
                        ?.filter(
                            (contact: Contact) => contact?.type === 'group',
                        )
                        ?.map((contact: Contact) => (
                            <div
                                key={contact?.userId}
                                className={cn(
                                    'group hover:bg-primary/5 relative transition-all',
                                    {
                                        'bg-primary/5':
                                            selectedUser?.userId ===
                                            contact?.userId,
                                    },
                                )}
                            >
                                <button
                                    type="button"
                                    className="absolute inset-0 z-1 size-full"
                                    onClick={() => setSelectedUser(contact)}
                                />
                                <div className="group-hover:border-l-primary dark:border-black-dark flex items-center gap-2.5 border-l-2 p-4 text-gray-700 transition dark:text-gray-500">
                                    <div className="relative size-10 shrink-0">
                                        <Image
                                            src={contact?.path || ''}
                                            alt="chat-avatar"
                                            height={40}
                                            width={40}
                                            className="size-full rounded-full"
                                        ></Image>
                                        {!!contact?.active && (
                                            <span className="bg-success dark:ring-black-dark absolute right-0.5 bottom-0.5 size-1.5 rounded-full ring-[3px] ring-white"></span>
                                        )}
                                    </div>
                                    <div className="grow space-y-1.5">
                                        <div className="flex items-center justify-between gap-1.5">
                                            <h4 className="line-clamp-1 leading-tight font-semibold text-black dark:text-white">
                                                {contact?.name}
                                            </h4>
                                            {!!contact?.messages?.length && (
                                                <span className="shrink-0 text-xs/tight font-semibold">
                                                    {
                                                        contact?.messages[
                                                            contact?.messages
                                                                ?.length - 1
                                                        ]?.time
                                                    }
                                                </span>
                                            )}
                                        </div>
                                        {!!contact?.messages?.length && (
                                            <div className="flex items-center justify-between gap-1.5">
                                                <p className="line-clamp-1 text-xs/tight font-medium">
                                                    {
                                                        contact?.messages[
                                                            contact?.messages
                                                                ?.length - 1
                                                        ]?.text
                                                    }
                                                </p>
                                                {!!contact?.messages?.filter(
                                                    (message: Message) =>
                                                        !message.status &&
                                                        message?.fromUserId !==
                                                            loginUser?.userId,
                                                )?.length && (
                                                    <Badge
                                                        variant={'primary'}
                                                        size={'number'}
                                                    >
                                                        {
                                                            contact?.messages?.filter(
                                                                (
                                                                    message: Message,
                                                                ) =>
                                                                    !message.status &&
                                                                    message?.fromUserId !==
                                                                        loginUser?.userId,
                                                            )?.length
                                                        }
                                                    </Badge>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </CardContent>
        </Card>
    )
}
export default Chatmenu
