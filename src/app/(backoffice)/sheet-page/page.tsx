import PageHeading from '@/components/layout/page-heading'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export default function SheetPage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Sheet'} />

            <div className="flex w-full flex-wrap items-start gap-2.5 py-5 lg:gap-4">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant={'outline-general'} size={'large'}>
                            Right Sheet
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className="sr-only"></SheetTitle>
                            <SheetDescription hidden></SheetDescription>
                            <h2>Add port forward</h2>
                        </SheetHeader>
                        <div className="space-y-5 px-4 py-5">
                            <div className="space-y-3">
                                <label className="inline-flex text-sm/tight font-semibold text-black dark:text-white">
                                    Select the device for this port forward.
                                </label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Stans-Pc" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Assignee1">
                                            PC 1
                                        </SelectItem>
                                        <SelectItem value="Assignee2">
                                            PC 2
                                        </SelectItem>
                                        <SelectItem value="Assignee3">
                                            PC 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <span className="mt-2.5! block text-xs/[18px] font-medium">
                                    Choose from common applications to use a
                                    recommended configuration, or set up
                                    manually.
                                </span>
                            </div>
                            <div className="space-y-3">
                                <label className="inline-flex leading-none font-semibold text-black dark:text-white">
                                    Choose a preset or manual setup
                                </label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Manual Setup" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Assignee1">
                                            Manual
                                        </SelectItem>
                                        <SelectItem value="Assignee2">
                                            Automatic
                                        </SelectItem>
                                        <SelectItem value="Assignee3">
                                            Custom
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <span className="mt-2.5! block text-xs/[18px] font-medium">
                                    these are recommended configurations for
                                    Manual set up.
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-4 border-t border-gray-300 p-4 dark:border-gray-700/50">
                            <SheetClose asChild>
                                <Button variant={'outline-general'}>
                                    Cancel
                                </Button>
                            </SheetClose>
                            <Button type="submit" variant={'black'}>
                                Apply changes
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant={'outline-general'} size={'large'}>
                            Left Sheet
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={'left'}>
                        <SheetHeader>
                            <SheetTitle className="sr-only"></SheetTitle>
                            <SheetDescription hidden></SheetDescription>
                            <h2>Add port forward</h2>
                        </SheetHeader>
                        <div className="space-y-5 px-4 py-5">
                            <div className="space-y-3">
                                <label className="inline-flex text-sm/tight font-semibold text-black dark:text-white">
                                    Select the device for this port forward.
                                </label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Stans-Pc" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Assignee1">
                                            PC 1
                                        </SelectItem>
                                        <SelectItem value="Assignee2">
                                            PC 2
                                        </SelectItem>
                                        <SelectItem value="Assignee3">
                                            PC 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <span className="mt-2.5! block text-xs/[18px] font-medium">
                                    Choose from common applications to use a
                                    recommended configuration, or set up
                                    manually.
                                </span>
                            </div>
                            <div className="space-y-3">
                                <label className="inline-flex leading-none font-semibold text-black dark:text-white">
                                    Choose a preset or manual setup
                                </label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Manual Setup" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Assignee1">
                                            Manual
                                        </SelectItem>
                                        <SelectItem value="Assignee2">
                                            Automatic
                                        </SelectItem>
                                        <SelectItem value="Assignee3">
                                            Custom
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <span className="mt-2.5! block text-xs/[18px] font-medium">
                                    these are recommended configurations for
                                    Manual set up.
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-4 border-t border-gray-300 p-4 dark:border-gray-700/50">
                            <SheetClose asChild>
                                <Button variant={'outline-general'}>
                                    Cancel
                                </Button>
                            </SheetClose>
                            <Button type="submit" variant={'black'}>
                                Apply changes
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant={'outline-general'} size={'large'}>
                            Top Sheet
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={'top'}>
                        <SheetHeader>
                            <SheetTitle className="sr-only"></SheetTitle>
                            <SheetDescription hidden></SheetDescription>
                            <h2>Add port forward</h2>
                        </SheetHeader>
                        <div className="space-y-5 px-4 py-5">
                            <div className="space-y-3">
                                <label className="inline-flex text-sm/tight font-semibold text-black dark:text-white">
                                    Select the device for this port forward.
                                </label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Stans-Pc" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Assignee1">
                                            PC 1
                                        </SelectItem>
                                        <SelectItem value="Assignee2">
                                            PC 2
                                        </SelectItem>
                                        <SelectItem value="Assignee3">
                                            PC 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <span className="mt-2.5! block text-xs/[18px] font-medium">
                                    Choose from common applications to use a
                                    recommended configuration, or set up
                                    manually.
                                </span>
                            </div>
                            <div className="space-y-3">
                                <label className="inline-flex leading-none font-semibold text-black dark:text-white">
                                    Choose a preset or manual setup
                                </label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Manual Setup" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Assignee1">
                                            Manual
                                        </SelectItem>
                                        <SelectItem value="Assignee2">
                                            Automatic
                                        </SelectItem>
                                        <SelectItem value="Assignee3">
                                            Custom
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <span className="mt-2.5! block text-xs/[18px] font-medium">
                                    these are recommended configurations for
                                    Manual set up.
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-4 border-t border-gray-300 p-4 dark:border-gray-700/50">
                            <SheetClose asChild>
                                <Button variant={'outline-general'}>
                                    Cancel
                                </Button>
                            </SheetClose>
                            <Button type="submit" variant={'black'}>
                                Apply changes
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant={'outline-general'} size={'large'}>
                            Bottom Sheet
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={'bottom'}>
                        <SheetHeader>
                            <SheetTitle className="sr-only"></SheetTitle>
                            <SheetDescription hidden></SheetDescription>
                            <h2>Add port forward</h2>
                        </SheetHeader>
                        <div className="space-y-5 px-4 py-5">
                            <div className="space-y-3">
                                <label className="inline-flex text-sm/tight font-semibold text-black dark:text-white">
                                    Select the device for this port forward.
                                </label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Stans-Pc" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Assignee1">
                                            PC 1
                                        </SelectItem>
                                        <SelectItem value="Assignee2">
                                            PC 2
                                        </SelectItem>
                                        <SelectItem value="Assignee3">
                                            PC 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <span className="mt-2.5! block text-xs/[18px] font-medium">
                                    Choose from common applications to use a
                                    recommended configuration, or set up
                                    manually.
                                </span>
                            </div>
                            <div className="space-y-3">
                                <label className="inline-flex leading-none font-semibold text-black dark:text-white">
                                    Choose a preset or manual setup
                                </label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Manual Setup" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Assignee1">
                                            Manual
                                        </SelectItem>
                                        <SelectItem value="Assignee2">
                                            Automatic
                                        </SelectItem>
                                        <SelectItem value="Assignee3">
                                            Custom
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <span className="mt-2.5! block text-xs/[18px] font-medium">
                                    these are recommended configurations for
                                    Manual set up.
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-4 border-t border-gray-300 p-4 dark:border-gray-700/50">
                            <SheetClose asChild>
                                <Button variant={'outline-general'}>
                                    Cancel
                                </Button>
                            </SheetClose>
                            <Button type="submit" variant={'black'}>
                                Apply changes
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}
