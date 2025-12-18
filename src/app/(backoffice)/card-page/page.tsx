import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

import { X } from 'lucide-react'

export default function CardPage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Card'} />

            <div className="flex min-h-[calc(100vh-160px)] items-center justify-center">
                <Card className="w-full max-w-[392px] p-4">
                    <CardHeader className="flex items-start justify-between gap-2">
                        <div className="space-y-1.5 text-base/5 font-semibold text-black dark:text-white">
                            <h2>Add Task</h2>
                            <p className="text-xs/snug font-medium text-gray-700 dark:text-gray-600">
                                New tasks are added to the default category.
                            </p>
                        </div>
                        <button type="button">
                            <X className="h-4 w-4 text-black hover:text-gray dark:text-white dark:hover:text-gray-500" />
                        </button>
                    </CardHeader>
                    <CardContent className="my-[30px] space-y-5">
                        <div className="space-y-3">
                            <label className="block font-semibold leading-none text-black dark:text-white">
                                Task name
                            </label>
                            <Input placeholder="Victoria Gillham" />
                        </div>
                        <div className="space-y-3">
                            <label className="block font-semibold leading-none text-black dark:text-white">
                                Assignee
                            </label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Add someone" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Sofia Walker">
                                        Sofia Walker
                                    </SelectItem>
                                    <SelectItem value="Aubrey Green">
                                        Aubrey Green
                                    </SelectItem>
                                    <SelectItem value="Robert Fox">
                                        Robert Fox
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="flex items-center justify-end gap-2">
                            <Button variant={'outline-general'}>Reset</Button>
                            <Button variant={'black'}>Add</Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
