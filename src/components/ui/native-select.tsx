import * as React from 'react'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function NativeSelect({ className, ...props }: React.ComponentProps<'select'>) {
    return (
        <div
            className="group/native-select relative w-fit has-[select:disabled]:opacity-50"
            data-slot="native-select-wrapper"
        >
            <select
                data-slot="native-select"
                className={cn(
                    'text-gray shadow-3xl placeholder:text-muted-foreground selection:bg-primary selection:text-primary dark:bg-input/30 dark:hover:bg-input/50 flex w-full min-w-0 appearance-none items-center rounded-lg bg-transparent px-3.5 py-2.5 pe-9 text-sm/4.5 font-medium transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed dark:bg-white/5 dark:text-gray-500 dark:shadow-sm dark:ring-1 dark:ring-white/10',
                    '',
                    'aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 aria-invalid:border-danger/60 aria-invalid:border aria-invalid:ring-1',
                    className,
                )}
                {...props}
            />
            <ChevronDownIcon
                className="text-gray pointer-events-none absolute top-1/2 mt-px size-4 h-4 w-4 -translate-y-1/2 transition select-none ltr:right-2.5 rtl:left-2.5 dark:text-gray-500"
                aria-hidden="true"
                data-slot="native-select-icon"
            />
        </div>
    )
}

function NativeSelectOption({ ...props }: React.ComponentProps<'option'>) {
    return (
        <option
            data-slot="native-select-option"
            {...props}
            className="text-gray shadow-3xl dark:bg-black-dark rounded-lg bg-white text-sm/4 font-medium dark:text-gray-500 dark:shadow-sm"
        />
    )
}

function NativeSelectOptGroup({
    className,
    ...props
}: React.ComponentProps<'optgroup'>) {
    return (
        <optgroup
            data-slot="native-select-optgroup"
            className={cn(
                'text-gray shadow-3xl dark:bg-black-dark my-1.5 rounded-lg bg-white text-sm/4 font-medium dark:text-gray-300 dark:shadow-sm',
                className,
            )}
            {...props}
        />
    )
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption }
