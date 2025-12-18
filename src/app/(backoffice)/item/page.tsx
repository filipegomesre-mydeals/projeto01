import PageHeading from '@/components/layout/page-heading'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemMedia,
    ItemTitle,
} from '@/components/ui/item'
import { Separator } from '@/components/ui/separator'
import {
    BadgeCheck,
    BadgeX,
    ChevronRight,
    OctagonAlert,
    Plus,
    ShieldAlert,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const music = [
    {
        image: '/images/profile.png',
        title: 'Midnight City Lights',
        artist: 'Neon Dreams',
        album: 'Electric Nights',
        duration: '3:45',
    },
    {
        image: '/images/profile.png',
        title: 'Coffee Shop Conversations',
        artist: 'The Morning Brew',
        album: 'Urban Stories',
        duration: '4:05',
    },
]
const people = [
    {
        username: 'janedoe',
        avatar: '/images/avatar1.svg',
        email: 'janedoe@example.com',
    },
    {
        username: 'johndoe',
        avatar: '/images/avatar5.svg',
        email: 'johndoe@example.com',
    },
    {
        username: 'alexsmith',
        avatar: '/images/avatar4.svg',
        email: 'alexsmith@example.com',
    },
]
export default function ItemPage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Item'} />

            <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 lg:py-4">
                <Card>
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Item
                    </CardHeader>
                    <CardContent className="relative flex flex-col gap-4 px-5 py-4">
                        <Item variant={'outline'}>
                            <ItemContent>
                                <ItemTitle>Basic Item</ItemTitle>
                                <ItemDescription>
                                    A simple item with title and description.
                                </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Button variant="outline-general">
                                    Action
                                </Button>
                            </ItemActions>
                        </Item>
                        <Item asChild>
                            <Link href="#">
                                <ItemMedia>
                                    <BadgeCheck className="text-success size-5" />
                                </ItemMedia>
                                <ItemContent>
                                    <ItemTitle>
                                        Your profile has been verified.
                                    </ItemTitle>
                                </ItemContent>
                                <ItemActions>
                                    <ChevronRight className="size-4 rtl:rotate-180" />
                                </ItemActions>
                            </Link>
                        </Item>
                        <Item asChild>
                            <Link href="#">
                                <ItemMedia>
                                    <BadgeX className="text-danger size-5" />
                                </ItemMedia>
                                <ItemContent>
                                    <ItemTitle>Status: Inactive</ItemTitle>
                                </ItemContent>
                                <ItemActions>
                                    <ChevronRight className="size-4 rtl:rotate-180" />
                                </ItemActions>
                            </Link>
                        </Item>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Examples
                    </CardHeader>
                    <CardContent className="relative flex flex-col gap-4 px-5 py-4">
                        <Item>
                            <ItemContent>
                                <ItemTitle>Default Variant</ItemTitle>
                                <ItemDescription>
                                    Standard styling with subtle background and
                                    borders.
                                </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Button variant="outline-general">Open</Button>
                            </ItemActions>
                        </Item>
                        <Item variant="outline">
                            <ItemContent>
                                <ItemTitle>Outline Variant</ItemTitle>
                                <ItemDescription>
                                    Outlined style with clear borders and
                                    transparent background.
                                </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Button variant="outline-general">Open</Button>
                            </ItemActions>
                        </Item>
                        <Item variant="muted">
                            <ItemContent>
                                <ItemTitle>Muted Variant</ItemTitle>
                                <ItemDescription>
                                    Subdued appearance with muted colors for
                                    secondary content.
                                </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Button variant="outline-general">Open</Button>
                            </ItemActions>
                        </Item>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Icon
                    </CardHeader>
                    <CardContent className="relative flex flex-col gap-4 px-5 py-4">
                        <Item variant="outline">
                            <ItemMedia variant="icon">
                                <ShieldAlert />
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitle>Security Alert</ItemTitle>
                                <ItemDescription>
                                    New login detected from unknown device.
                                </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Button variant="black" type="button">
                                    Review
                                </Button>
                            </ItemActions>
                        </Item>
                        <Item variant="outline">
                            <ItemMedia variant="icon">
                                <OctagonAlert />
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitle>Payment Failed</ItemTitle>
                                <ItemDescription>
                                    Your recent transaction could not be
                                    processed.
                                </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Button variant="black" type="button">
                                    Review
                                </Button>
                            </ItemActions>
                        </Item>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Avatar
                    </CardHeader>
                    <CardContent className="relative flex flex-col gap-4 px-5 py-4">
                        <Item variant="outline" className="flex-wrap">
                            <ItemMedia>
                                <div className="flex -space-x-2 *:data-[slot=avatar]:grayscale">
                                    <Avatar className="dark:border-black-dark border-2 border-white">
                                        <AvatarImage src="/images/avatar.svg" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Avatar className="dark:border-black-dark border-2 border-white">
                                        <AvatarImage src="/images/avatar-two.svg" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Avatar className="dark:border-black-dark border-2 border-white">
                                        <AvatarImage src="/images/avatar-three.svg" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                            </ItemMedia>
                            <ItemContent className="grow">
                                <ItemTitle>No Team Members</ItemTitle>
                                <ItemDescription>
                                    Invite your team to collaborate on this
                                    project.
                                </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Button variant="black">
                                    <Plus />
                                    Invite
                                </Button>
                            </ItemActions>
                        </Item>
                        <Item variant="outline" className="flex-wrap">
                            <ItemMedia>
                                <Avatar className="dark:border-black-dark border-2 border-white">
                                    <AvatarImage src="/images/avatar.svg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </ItemMedia>
                            <ItemContent className="grow gap-0">
                                <ItemDescription className="text-xs">
                                    Welcome back 👋
                                </ItemDescription>
                                <ItemTitle>Jackson James</ItemTitle>
                            </ItemContent>
                        </Item>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Image
                    </CardHeader>
                    <CardContent className="relative flex flex-col gap-4 px-5 py-4">
                        <ItemGroup className="gap-4">
                            {music.map((song) => (
                                <Item
                                    key={song.title}
                                    variant="outline"
                                    asChild
                                    role="listitem"
                                >
                                    <Link href="#">
                                        <ItemMedia variant="image">
                                            <Image
                                                src={song.image}
                                                alt="Music album"
                                                width={32}
                                                height={32}
                                                className="size-full object-cover"
                                            />
                                        </ItemMedia>
                                        <ItemContent>
                                            <ItemTitle className="line-clamp-1">
                                                {song.title} -{' '}
                                                <span className="text-gray-700">
                                                    {song.album}
                                                </span>
                                            </ItemTitle>
                                            <ItemDescription>
                                                {song.artist}
                                            </ItemDescription>
                                        </ItemContent>
                                        <ItemContent className="flex-none text-center">
                                            <ItemDescription>
                                                {song.duration}
                                            </ItemDescription>
                                        </ItemContent>
                                    </Link>
                                </Item>
                            ))}
                        </ItemGroup>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Image
                    </CardHeader>
                    <CardContent className="relative flex flex-col gap-4 px-5 py-4">
                        <ItemGroup>
                            {people.map((person, index) => (
                                <div key={person.username}>
                                    <Item
                                        variant={'muted'}
                                        className="flex-nowrap px-2"
                                    >
                                        <ItemMedia>
                                            <Avatar>
                                                <AvatarImage
                                                    src={person.avatar}
                                                />
                                                <AvatarFallback>
                                                    {person.username.charAt(0)}
                                                </AvatarFallback>
                                            </Avatar>
                                        </ItemMedia>
                                        <ItemContent className="gap-1">
                                            <ItemTitle>
                                                {person.username}
                                            </ItemTitle>
                                            <ItemDescription>
                                                {person.email}
                                            </ItemDescription>
                                        </ItemContent>
                                        <ItemActions>
                                            <Button
                                                variant={'black'}
                                                className="size-8 rounded-full"
                                            >
                                                <Plus />
                                            </Button>
                                        </ItemActions>
                                    </Item>
                                    {index !== people.length - 1 && (
                                        <Separator />
                                    )}
                                </div>
                            ))}
                        </ItemGroup>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
