'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { ToastDescription } from '@radix-ui/react-toast'

const FormSchema = z.object({
    dob: z.date().refine((date) => date !== undefined, {
        message: 'A date of birth is required.',
    }),
})

export function FormCalender() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast('', {
            description: (
                <ToastDescription className="dark:bg-black-dark w-full dark:text-white">
                    <div className="bg-primary/5 -mt-0.5 border-b border-gray-300 px-4 py-3 dark:border-gray-700/30">
                        You submitted the following values
                    </div>
                    <pre className="p-4 leading-tight font-medium text-black dark:text-white">
                        <code className="text-gray">
                            {JSON.stringify(data, null, 2)}
                        </code>
                    </pre>
                </ToastDescription>
            ),
        })
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grow space-y-4"
            >
                <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <div className="flex flex-col gap-2">
                                <FormLabel>Date of birth</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <button
                                                className={cn(
                                                    'text-gray shadow-3xl placeholder:text-gray relative flex w-full items-center justify-between gap-1.5 rounded-lg px-3.5 py-2.5 pr-10 text-left text-sm/[18px] font-medium transition-all focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 data-[state=open]:text-black dark:bg-white/5 dark:text-gray-500 dark:shadow-sm dark:ring-1 dark:ring-white/10 dark:data-[state=open]:text-white [&>span]:line-clamp-1 [&[data-state=open]>svg]:text-black dark:[&[data-state=open]>svg]:text-white',
                                                    !field.value &&
                                                        'text-muted-foreground',
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, 'PPP')
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <span className="dark:hover:bg-black-dark absolute top-1/2 right-2 grid! size-6 -translate-y-1/2 place-content-center rounded-md hover:bg-gray-300/60">
                                                    <CalendarIcon className="text-gray h-4 w-4 transition dark:text-gray-500" />
                                                </span>
                                            </button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="w-auto p-0"
                                        align="start"
                                    >
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date > new Date() ||
                                                date < new Date('1900-01-01')
                                            }
                                            captionLayout="dropdown"
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <FormDescription>
                                Your date of birth is used to calculate your
                                age.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
