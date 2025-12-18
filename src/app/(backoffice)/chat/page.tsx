'use client'
import Chatmenu, { Contact, Message } from '@/components/custom/Chatmenu'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { InputSearch } from '@/components/ui/input-search'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import {
    ArrowLeft,
    EllipsisVertical,
    Images,
    Mic,
    Paperclip,
    Phone,
    SendHorizontal,
    Smile,
    Video,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const contactList = [
    {
        userId: 1,
        name: 'Theresa Webb',
        path: '/images/avatar.svg',
        messages: [
            {
                fromUserId: 1,
                text: 'Hi, I am back from vacation',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 1,
                text: 'How are you?',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 15,
                text: 'Welcom Back',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 15,
                text: 'I am all well',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 1,
                text: 'Coffee?',
                time: '2:09 PM',
                status: 0,
            },
        ],
        active: true,
    },
    {
        userId: 2,
        name: 'Dianne Russell',
        path: '/images/avatar-two.svg',
        active: false,
        messages: [
            {
                fromUserId: 2,
                text: 'Hi, I am back from vacation',
                time: '2:09 PM',
                status: 0,
            },
            {
                fromUserId: 2,
                text: 'How are you?',
                time: '2:09 PM',
                status: 0,
            },
            {
                fromUserId: 15,
                text: 'Welcom Back',
                time: '2:09 PM',
                status: 0,
            },
            {
                fromUserId: 15,
                text: 'I am all well',
                time: '2:09 PM',
                status: 0,
            },
            {
                fromUserId: 2,
                text: 'Ravi?',
                time: '2:09 PM',
                status: 0,
            },
        ],
    },
    {
        userId: 3,
        name: 'Jacob Jones',
        path: '/images/avatar-three.svg',
        active: true,
        messages: [],
    },
    {
        userId: 4,
        name: 'Wade Warren',
        path: '/images/avatar-four.svg',
        time: '2:09 PM',
        preview: 'How do you do?',
        active: true,
        messages: [],
    },
    {
        userId: 5,
        name: 'Brooklyn Simmons',
        path: '/images/avatar-two.svg',
        time: '2:09 PM',
        preview: 'How do you do?',
        active: false,
        messages: [],
    },
    {
        userId: 6,
        name: 'Kathryn Murphy',
        path: '/images/avatar-six.svg',
        time: '2:09 PM',
        preview: 'How do you do?',
        active: true,
        messages: [],
    },
    {
        userId: 7,
        name: 'Nia Hillyer',
        path: '/images/avatar-seven.svg',
        time: '2:09 PM',
        preview: 'How do you do?',
        active: false,
        messages: [],
    },
    {
        userId: 8,
        name: 'Nia Hillyer',
        path: '/images/avatar-eight.svg',
        time: '2:09 PM',
        preview: 'How do you do?',
        active: true,
        messages: [],
    },
    {
        userId: 9,
        name: 'Student Hub',
        path: '/images/com-img.svg',
        messages: [
            {
                fromUserId: 1,
                text: 'Hi, I am back from vacation',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 2,
                text: 'How are you?',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 1,
                text: 'Welcom Back',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 1,
                text: 'I am all well',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 3,
                text: 'Coffee?',
                time: '2:09 PM',
                status: 0,
            },
        ],
        active: false,
        type: 'group',
    },
    {
        userId: 10,
        name: 'Society Meeting',
        path: '/images/chat-avatar-5.svg',
        messages: [
            {
                fromUserId: 1,
                text: 'Hi, I am back from vacation',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 2,
                text: 'How are you?',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 1,
                text: 'Welcom Back',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 1,
                text: 'I am all well',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 3,
                text: 'Coffee?',
                time: '2:09 PM',
                status: 0,
            },
        ],
        active: false,
        type: 'group',
    },
    {
        userId: 11,
        name: 'College Campus',
        path: '/images/chat-avatar-5.svg',
        messages: [
            {
                fromUserId: 1,
                text: 'Hi, I am back from vacation',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 2,
                text: 'How are you?',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 1,
                text: 'Welcom Back',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 1,
                text: 'I am all well',
                time: '2:09 PM',
                status: 1,
            },
            {
                fromUserId: 3,
                text: 'Coffee?',
                time: '2:09 PM',
                status: 0,
            },
        ],
        active: false,
        type: 'group',
    },
]

const loginUser = {
    id: 15,
    name: 'Alon Smith',
    path: '/images/chat-avatar.svg',
    designation: 'Software Developer',
}

const Chat = () => {
    const [searchUser, setSearchUser] = useState('')
    const [filteredItems, setFilteredItems] = useState<Contact[]>(contactList)
    const [selectedUser, setSelectedUser] = useState<Contact>(contactList[0])
    const [textMessage, setTextMessage] = useState('')

    const scrollToBottom = () => {
        setTimeout(() => {
            const element = document.querySelector<HTMLDivElement>(
                '.chat-conversation-box',
            )
            if (element) {
                element.scrollTo({
                    top: element.scrollHeight,
                    behavior: 'smooth',
                })
            }
        })
    }

    const sendMessage = () => {
        if (textMessage.trim()) {
            let list: Contact[] = filteredItems
            let user: Contact | undefined = list.find(
                (d: Contact) => d.userId === selectedUser.userId,
            )
            if (!user) return
            const newMessage: Message = {
                fromUserId: loginUser.id,
                text: textMessage,
                time: 'Just now',
                status: 1,
            }
            setSelectedUser({
                ...selectedUser,
                messages: [...(selectedUser.messages || []), newMessage],
            })
            user.messages = [...(user.messages || []), newMessage]
            setFilteredItems(list)
            setTextMessage('')
            scrollToBottom()
        }
    }
    const sendMessageHandle = (
        event: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (event.key === 'Enter') {
            sendMessage()
        }
    }

    const setUserSelection = (user: Contact) => {
        const messages =
            user?.messages?.map((message: Message) => ({
                ...message,
                status: 1,
            })) || []
        setSelectedUser(() => ({
            ...user,
            messages: messages,
        }))

        let list = filteredItems
        let userObj: Contact | undefined = list.find(
            (d: Contact) => d.userId === user.userId,
        )
        if (userObj) {
            userObj.messages = messages
        }
        setFilteredItems([...list])
        scrollToBottom()
        setTextMessage('')
    }

    useEffect(() => {
        setFilteredItems(() => {
            return contactList.filter((d) => {
                return d.name.toLowerCase().includes(searchUser.toLowerCase())
            })
        })
    }, [searchUser])

    return (
        <div className="space-y-4">
            <div className="dark:bg-black-dark flex flex-wrap items-center justify-between gap-4 rounded-lg bg-white px-5 py-3.5 shadow-sm">
                <h2 className="text-base font-semibold text-black dark:text-white">
                    Chat
                </h2>
                <InputSearch
                    placeholder="Search"
                    value={searchUser}
                    onChange={(e) => setSearchUser(e.target.value)}
                />
            </div>

            <div className="flex min-h-[calc(100vh-172px)] w-full flex-col gap-4 md:flex-row">
                <Card
                    key={selectedUser?.userId}
                    className="flex grow flex-col border border-gray-300 shadow-sm dark:border-gray-700/50"
                >
                    <CardHeader className="dark:bg-black-dark flex shrink-0 items-center justify-between gap-4 rounded-t-lg border-b border-gray-300 bg-gray-200 p-3 sm:p-4 dark:border-gray-700/50">
                        <div className="relative inline-flex items-center gap-2.5">
                            <Link
                                href="#"
                                className="absolute inset-0 z-1 size-full"
                            ></Link>
                            <div className="z-2 block md:hidden">
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <button type="button">
                                            <ArrowLeft className="size-4 rtl:rotate-180" />
                                        </button>
                                    </SheetTrigger>
                                    <SheetContent
                                        side={'left'}
                                        className="top-0 left-0 h-screen w-auto max-w-none! rounded-none border-0 [&>div]:h-[calc(100vh-32px)]"
                                    >
                                        <SheetTitle className="sr-only"></SheetTitle>
                                        <SheetDescription hidden></SheetDescription>
                                        <Chatmenu
                                            contactList={contactList}
                                            setSelectedUser={setSelectedUser}
                                            selectedUser={selectedUser}
                                            loginUser={loginUser}
                                        />
                                    </SheetContent>
                                </Sheet>
                            </div>
                            <div className="relative size-10 rounded-full">
                                {selectedUser?.path && (
                                    <Image
                                        src={selectedUser?.path}
                                        alt="chat-avatar"
                                        height={40}
                                        width={40}
                                        className="h-full w-full shrink-0 object-cover"
                                    ></Image>
                                )}
                                <span className="bg-success dark:ring-black-dark absolute right-0.5 bottom-0.5 size-1.5 rounded-full ring-[3px] ring-white"></span>
                            </div>
                            <div className="space-y-1.5 leading-tight font-medium text-black dark:text-white">
                                <p className="line-clamp-1">
                                    {selectedUser?.name}
                                </p>
                                <p className="text-success text-xs/tight">
                                    Online
                                </p>
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-2 sm:gap-3">
                            <button
                                type="button"
                                className="grid size-8 place-content-center rounded-full bg-gray-400 text-black hover:opacity-80 dark:bg-white/10 dark:text-white"
                            >
                                <Phone className="size-[18px] shrink-0" />
                            </button>
                            <button
                                type="button"
                                className="grid size-8 place-content-center rounded-full bg-gray-400 text-black hover:opacity-80 dark:bg-white/10 dark:text-white"
                            >
                                <Video className="size-[18px] shrink-0" />
                            </button>
                            <div className="hidden md:block">
                                <Popover>
                                    <PopoverTrigger>
                                        <span className="grid size-8 place-content-center rounded-full bg-gray-400 text-black hover:opacity-80 dark:bg-white/10">
                                            <EllipsisVertical className="size-[18px] shrink-0 text-black dark:text-white" />
                                        </span>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="w-32 space-y-1.5 p-2"
                                        align="end"
                                    >
                                        <Link
                                            href="#"
                                            className="hover:bg-light-theme block rounded-lg px-2.5 py-1.5 text-xs/tight hover:text-black ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                        >
                                            Block
                                        </Link>
                                        <Link
                                            href="#"
                                            className="hover:bg-light-theme block rounded-lg px-2.5 py-1.5 text-xs/tight hover:text-black ltr:text-left rtl:text-right dark:text-gray-500 dark:hover:bg-gray-200/10 dark:hover:text-white"
                                        >
                                            About
                                        </Link>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex w-full grow flex-col rounded-b-lg bg-[url('/images/chat-bg.png')] bg-cover bg-no-repeat p-3 shadow-none md:p-4 dark:bg-[url('/images/chat-bg-dark.png')]">
                        <div className="chat-conversation-box grid h-[calc(100vh-376px)] grow overflow-y-auto pb-0.5">
                            <div className="flex flex-col justify-between gap-5">
                                <div className="flex items-center justify-center text-center">
                                    <span className="h-px w-full bg-linear-to-r from-gray-500/0 to-gray-500/40 rtl:from-gray-500/40 rtl:to-gray-500/0"></span>
                                    <Badge
                                        variant={'outline'}
                                        className="inline-block shrink-0 rounded-full border border-gray-300 text-center text-black shadow-none dark:border-gray-300/30 dark:bg-transparent dark:text-white"
                                    >
                                        March 23, 2024
                                    </Badge>
                                    <span className="h-px w-full bg-linear-to-l from-gray-500/0 to-gray-500/40 rtl:from-gray-500/40 rtl:to-gray-500/0"></span>
                                </div>
                                <div
                                    key={selectedUser?.messages?.length}
                                    className="flex flex-col justify-end gap-5 pt-5 md:pt-0"
                                >
                                    {(selectedUser?.messages ?? []).map(
                                        (message: Message, index: number) => {
                                            const sender = contactList?.find(
                                                (d) =>
                                                    d.userId ===
                                                    message?.fromUserId,
                                            )

                                            return (
                                                <div
                                                    key={index}
                                                    className="space-y-3"
                                                >
                                                    {(index === 0 ||
                                                        (index > 0 &&
                                                            selectedUser
                                                                ?.messages?.[
                                                                index - 1
                                                            ]?.fromUserId !==
                                                                message.fromUserId)) && (
                                                        <div
                                                            className={`flex items-center gap-3 ${loginUser?.id === message.fromUserId ? 'flex-row-reverse' : ''}`}
                                                        >
                                                            <div className="relative">
                                                                <Image
                                                                    src={
                                                                        (loginUser?.id ===
                                                                        message?.fromUserId
                                                                            ? loginUser?.path
                                                                            : sender?.path) ||
                                                                        ''
                                                                    }
                                                                    alt="chat-avatar"
                                                                    height={40}
                                                                    width={40}
                                                                    className="shrink-0 rounded-full"
                                                                ></Image>
                                                                <span className="bg-success dark:ring-black-dark absolute right-0.5 bottom-0.5 size-1.5 rounded-full ring-[3px] ring-white"></span>
                                                            </div>
                                                            <h4 className="leading-tight font-medium text-black dark:text-white">
                                                                {loginUser?.id ===
                                                                message?.fromUserId
                                                                    ? loginUser?.name
                                                                    : sender?.name}
                                                            </h4>
                                                            <span className="bg-primary size-1 rounded-full"></span>
                                                            <span className="text-xs/tight font-medium">
                                                                {message?.time}
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div
                                                        className={cn(
                                                            'flex flex-col space-y-3 leading-tight font-medium text-black dark:text-white',
                                                            loginUser?.id ===
                                                                message.fromUserId
                                                                ? 'mr-8 ml-1 items-end md:mr-11'
                                                                : 'mr-1 ml-8 items-start md:ml-11',
                                                        )}
                                                    >
                                                        <p className="shadow-3xl dark:bg-black-dark rounded-lg bg-white p-2.5 dark:border dark:border-gray-300/10 dark:shadow-sm">
                                                            {message?.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        },
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="sticky bottom-4 mt-11 rounded-full bg-white dark:bg-black">
                            <div className="relative">
                                <Input
                                    placeholder="Let's meet or leave!"
                                    className="relative rounded-full border border-gray-300 py-4 shadow-none placeholder:text-black ltr:pr-32 ltr:pl-14 sm:ltr:pr-48 rtl:pr-14 rtl:pl-32 sm:rtl:pl-48 dark:border-gray-300/20"
                                    value={textMessage}
                                    onChange={(e) =>
                                        setTextMessage(e.target.value)
                                    }
                                    onKeyUp={sendMessageHandle}
                                ></Input>
                                <button
                                    type="button"
                                    className="absolute top-2.5 grid size-8 place-content-center rounded-full bg-gray-400 hover:opacity-80 ltr:left-3 rtl:right-3 dark:bg-white/10 dark:text-white"
                                >
                                    <Paperclip className="size-[18px] shrink-0" />
                                </button>
                                <p className="font-medium text-black"></p>
                                <div className="absolute top-2.5 inline-flex items-center gap-1.5 sm:gap-3 ltr:right-3 rtl:left-3">
                                    <button
                                        type="button"
                                        className="grid size-8 place-content-center rounded-full bg-gray-400 hover:opacity-80 dark:bg-white/10 dark:text-white"
                                    >
                                        <Smile className="size-[18px] shrink-0" />
                                    </button>
                                    <button
                                        type="button"
                                        className="hidden size-8 place-content-center rounded-full bg-gray-400 hover:opacity-80 sm:grid dark:bg-white/10 dark:text-white"
                                    >
                                        <Images className="size-[18px] shrink-0" />
                                    </button>
                                    <button
                                        type="button"
                                        className="grid size-8 place-content-center rounded-full bg-gray-400 hover:opacity-80 dark:bg-white/10 dark:text-white"
                                    >
                                        <Mic className="size-[18px] shrink-0" />
                                    </button>
                                    <Button
                                        className="size-8 rounded-full border-2 border-white shadow-[0_0_14px_0_rgba(41,60,137,0.18)]"
                                        onClick={() => sendMessage()}
                                    >
                                        <SendHorizontal className="rtl:rotate-180" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="hidden md:block">
                    <Chatmenu
                        contactList={filteredItems}
                        setSelectedUser={(user) => setUserSelection(user)}
                        selectedUser={selectedUser}
                        loginUser={loginUser}
                    />
                </div>
            </div>
        </div>
    )
}
export default Chat
