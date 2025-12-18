import PageHeading from '@/components/layout/page-heading'
import {
    AlertDialog as AlertDialogPrimitive,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { ArchiveRestore, Heart, Play } from 'lucide-react'
import Link from 'next/link'

export default function AlertDialog() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Alert Dialog'} />

            <div className="flex items-start gap-5 py-5">
                <AlertDialogPrimitive>
                    <AlertDialogTrigger asChild>
                        <Button
                            type="button"
                            variant="outline-general"
                            size={'large'}
                        >
                            Archived item
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                <div className="flex gap-2.5 text-black dark:text-white">
                                    <ArchiveRestore className="size-[18px] shrink-0" />
                                    Archived item
                                </div>
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                This item will be removed from the POS, Square
                                online site and all channel listing. Reports
                                will not be impacted.
                            </AlertDialogDescription>
                            <AlertDialogDescription>
                                <Link
                                    href="#"
                                    className="text-xs/4 font-semibold text-primary underline transition hover:opacity-80"
                                >
                                    {' '}
                                    Learn more
                                </Link>
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Archived</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogPrimitive>
                <AlertDialogPrimitive>
                    <AlertDialogTrigger asChild>
                        <Button
                            type="button"
                            variant="outline-general"
                            size={'large'}
                        >
                            Welcome to ASL
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                <div className="flex gap-2.5 text-black dark:text-white">
                                    <Heart className="size-[18px] shrink-0" />
                                    Welcome to ASL
                                </div>
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                Bring your next big idea to life in no time
                                using our expensive and customizable Design
                                System
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>
                                <Play className="size-4" />
                                Watch tutorials
                            </AlertDialogCancel>
                            <AlertDialogAction>Get started</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogPrimitive>
            </div>
        </div>
    )
}
