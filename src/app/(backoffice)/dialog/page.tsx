'use client'
import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogTrigger,
    DialogTitle,
    DialogDescription,
    DialogOverlay,
} from '@/components/ui/dialog'
import { useState } from 'react'
import { Input } from '@/components/ui/input'

export default function DialogDemo() {
    const [open, setOpen] = useState(false)
    const wait = () => new Promise((res) => setTimeout(res, 1000))

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await wait()
        setOpen(false)
    }
    return (
        <div className="space-y-4">
            <PageHeading heading={'Dialog'} />

            <div className="flex flex-col gap-4 sm:flex-row lg:gap-6">
                <Card className="flex min-w-60 flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Defult Dialog
                    </CardTitle>
                    <CardContent className="relative flex grow flex-col items-start gap-4 px-2.5 py-4 sm:px-4 lg:py-6">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant="outline-general"
                                    size={'large'}
                                >
                                    Open Dialog
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="w-full max-w-[368px] bg-transparent p-0 shadow-none">
                                <DialogTitle
                                    className="sr-only"
                                    hidden
                                ></DialogTitle>
                                <DialogDescription
                                    className="sr-only"
                                    hidden
                                ></DialogDescription>
                                <Card>
                                    <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                                        <h2>Notification Settings</h2>
                                    </CardHeader>
                                    <CardContent className="p-5">
                                        <RadioGroup defaultValue="Stress Detection">
                                            <label className="flex items-center gap-2.5">
                                                <RadioGroupItem value="Night Mode" />
                                                <div className="space-y-1.5">
                                                    <h3 className="leading-tight font-semibold text-black dark:text-white">
                                                        Night Mode Enhancement
                                                    </h3>
                                                    <p className="leading-tight">
                                                        Switches to a dark, warm
                                                        theme in low light.
                                                    </p>
                                                </div>
                                            </label>
                                            <label className="flex items-center gap-2.5">
                                                <RadioGroupItem value="Stress Detection" />
                                                <div className="space-y-1.5">
                                                    <h3 className="leading-tight font-semibold text-black dark:text-white">
                                                        Stress Detection
                                                    </h3>
                                                    <p className="leading-tight">
                                                        Calming blue theme for
                                                        rapid taps.
                                                    </p>
                                                </div>
                                            </label>
                                            <label className="flex items-center gap-2.5">
                                                <RadioGroupItem value="Morning Boost" />
                                                <div className="space-y-1.5">
                                                    <h3 className="leading-tight font-semibold text-black dark:text-white">
                                                        Morning Boost
                                                    </h3>
                                                    <p className="leading-tight">
                                                        Vibrant theme in bright
                                                        light.
                                                    </p>
                                                </div>
                                            </label>
                                        </RadioGroup>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="flex items-center justify-end gap-2 border-t border-gray-300 px-5 py-3.5 dark:border-gray-700/50">
                                            <DialogClose asChild>
                                                <Button
                                                    type="button"
                                                    variant={'outline-general'}
                                                >
                                                    Cancel
                                                </Button>
                                            </DialogClose>
                                            <Button
                                                type="submit"
                                                variant={'black'}
                                            >
                                                Save
                                            </Button>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </DialogContent>
                        </Dialog>
                    </CardContent>
                </Card>

                <Card className="flex min-w-60 flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Close after asynchronous form submission
                    </CardTitle>
                    <CardContent className="relative flex grow flex-col items-start gap-4 px-2.5 py-4 sm:px-4 lg:py-6">
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                                <Button
                                    variant="outline-general"
                                    size={'large'}
                                >
                                    Share
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="w-full bg-transparent p-0 shadow-none sm:max-w-md">
                                <Card>
                                    <DialogTitle></DialogTitle>
                                    <DialogDescription></DialogDescription>
                                    <Card>
                                        <CardHeader className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                                            <h2>Share this form</h2>
                                        </CardHeader>
                                        <form onSubmit={handleSubmit}>
                                            <CardContent className="p-5">
                                                <p className="leading-tight">
                                                    Please confirm and submit
                                                    your data.
                                                </p>
                                                <div className="mt-4 flex flex-col gap-4">
                                                    <Input
                                                        type="text"
                                                        placeholder="Your name"
                                                        required
                                                    />
                                                    <Input
                                                        type="email"
                                                        placeholder="Your email"
                                                        required
                                                    />
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                                <div className="flex items-center justify-end gap-2 border-t border-gray-300 px-5 py-3.5 dark:border-gray-700/50">
                                                    {' '}
                                                    <Button
                                                        type="submit"
                                                        className="self-end"
                                                    >
                                                        Submit
                                                    </Button>
                                                </div>
                                            </CardFooter>
                                        </form>
                                    </Card>
                                </Card>
                            </DialogContent>
                        </Dialog>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
