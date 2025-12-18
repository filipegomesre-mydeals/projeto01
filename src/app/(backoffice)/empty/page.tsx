import PageHeading from '@/components/layout/page-heading'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from '@/components/ui/empty'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from '@/components/ui/input-group'
import { Kbd, KbdGroup } from '@/components/ui/kbd'
import {
    ArrowUpRightIcon,
    BellOff,
    Cloud,
    Folder,
    Plus,
    RefreshCcw,
    Search,
} from 'lucide-react'

export default function EmptyPage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Empty'} />

            <div className="items flex flex-wrap gap-4 sm:gap-6 lg:gap-8 lg:py-4">
                <Card>
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Empty
                    </CardHeader>
                    <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                        <Empty>
                            <EmptyHeader>
                                <EmptyMedia variant="icon">
                                    <Folder />
                                </EmptyMedia>
                                <EmptyTitle>No Projects Yet</EmptyTitle>
                                <EmptyDescription>
                                    You haven&apos;t created any projects yet.
                                    Get started by creating your first project.
                                </EmptyDescription>
                            </EmptyHeader>
                            <EmptyContent>
                                <div className="flex gap-2">
                                    <Button>Import Project</Button>
                                    <Button variant="black">
                                        Import Project
                                    </Button>
                                </div>
                            </EmptyContent>
                            <Button asChild variant="outline-general">
                                <a href="#">
                                    Learn More <ArrowUpRightIcon />
                                </a>
                            </Button>
                        </Empty>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Outline
                    </CardHeader>
                    <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                        <Empty className="border border-dashed border-gray-300 p-4 dark:border-gray-700/30">
                            <EmptyHeader>
                                <EmptyMedia variant="icon">
                                    <Cloud />
                                </EmptyMedia>
                                <EmptyTitle>Cloud Storage Empty</EmptyTitle>
                                <EmptyDescription>
                                    Upload files to your cloud storage to access
                                    them anywhere.
                                </EmptyDescription>
                            </EmptyHeader>
                            <EmptyContent>
                                <Button type="button" variant="outline-general">
                                    Upload Files
                                </Button>
                            </EmptyContent>
                        </Empty>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Background
                    </CardHeader>
                    <CardContent className="from-primary/10 relative inline-flex flex-wrap items-center gap-4 bg-gradient-to-b px-5 py-4">
                        <Empty className="py-4">
                            <EmptyHeader>
                                <EmptyMedia variant="icon">
                                    <BellOff />
                                </EmptyMedia>
                                <EmptyTitle>No Notifications</EmptyTitle>
                                <EmptyDescription>
                                    This is dummy text for development purposes.
                                    Replace it with real data later.
                                </EmptyDescription>
                            </EmptyHeader>

                            <Button type="button" variant="outline-general">
                                <RefreshCcw />
                                Refresh
                            </Button>
                        </Empty>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Avatar
                    </CardHeader>
                    <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                        <Empty className="py-4">
                            <EmptyHeader>
                                <EmptyMedia>
                                    <Avatar>
                                        <AvatarImage
                                            src="/images/avatar.svg"
                                            className="grayscale"
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </EmptyMedia>
                                <EmptyTitle>John Doe</EmptyTitle>
                                <EmptyDescription>
                                    John is away right now. This is placeholder
                                    content used during development. Feel free
                                    to replace it with real user info later.
                                </EmptyDescription>
                            </EmptyHeader>

                            <Button type="button" variant="black">
                                Leave message
                            </Button>
                        </Empty>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Avatar Group
                    </CardHeader>
                    <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                        <Empty className="py-4">
                            <EmptyHeader>
                                <EmptyMedia>
                                    <div className="flex -space-x-2 *:data-[slot=avatar]:grayscale">
                                        <Avatar className="dark:border-black-dark border-2 border-white">
                                            <AvatarImage
                                                src="/images/avatar.svg"
                                                className="grayscale"
                                            />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <Avatar className="dark:border-black-dark border-2 border-white">
                                            <AvatarImage
                                                src="/images/avatar-two.svg"
                                                className="grayscale"
                                            />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <Avatar className="dark:border-black-dark border-2 border-white">
                                            <AvatarImage
                                                src="/images/avatar-three.svg"
                                                className="grayscale"
                                            />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </div>
                                </EmptyMedia>
                                <EmptyTitle>No Members</EmptyTitle>
                                <EmptyDescription>
                                    Invite your team members to join the team.
                                </EmptyDescription>
                            </EmptyHeader>

                            <Button type="button" variant={'black'}>
                                <Plus />
                                Invite
                            </Button>
                        </Empty>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        InputGroup
                    </CardHeader>
                    <CardContent className="relative inline-flex flex-wrap items-center gap-4 px-5 py-4">
                        <Empty className="py-4">
                            <EmptyHeader>
                                <EmptyTitle>Coming Soon</EmptyTitle>
                                <EmptyDescription>
                                    This section is under development. Stay
                                    tuned for updates or check back later.
                                </EmptyDescription>
                            </EmptyHeader>
                            <InputGroup>
                                <InputGroupInput placeholder="Try searching for pages..." />
                                <InputGroupAddon>
                                    <Search />
                                </InputGroupAddon>
                                <InputGroupAddon align="inline-end">
                                    <KbdGroup>
                                        <Kbd>⌘</Kbd>
                                    </KbdGroup>
                                </InputGroupAddon>
                            </InputGroup>
                        </Empty>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
