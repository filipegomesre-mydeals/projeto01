'use client'

import PageHeading from '@/components/layout/page-heading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from '@/components/ui/command'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'

const features = [
    {
        value: 'typescript',
        label: 'Typescript',
    },
    {
        value: 'redux',
        label: 'Redux',
    },
    {
        value: 'vue.js',
        label: 'Vue.js',
    },
    {
        value: 'linux',
        label: 'Linux',
    },
    {
        value: 'react',
        label: 'React',
    },
    {
        value: 'micronaut',
        label: 'Micronaut',
    },
    {
        value: 'angular',
        label: 'Angular',
    },
]
export default function Combobox() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')
    return (
        <div className="space-y-4">
            <PageHeading heading={'Combobox'} />

            <div className="flex items-start py-5">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline-general"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[250px] justify-between bg-gray-100 px-3 py-2.5 text-sm shadow-3xl ring-0 dark:border dark:border-gray-300/20 dark:shadow-sm"
                        >
                            <div className="flex items-center gap-1.5">
                                <label className="max-w-32 truncate">
                                    {value
                                        ? features.find(
                                              (framework) =>
                                                  framework.value === value,
                                          )?.label
                                        : 'Select features'}
                                </label>
                                <Badge
                                    size={'number'}
                                    variant={'primary'}
                                    className="px-1"
                                >
                                    10
                                </Badge>
                            </div>
                            <ChevronsUpDown className="size-4 shrink-0" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-1.5 shadow-3xl dark:shadow-sm">
                        <Command>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup className="p-0!">
                                <CommandList className="*:space-y-1.5">
                                    {features.map((framework) => (
                                        <CommandItem
                                            className="py-2"
                                            isSelected={
                                                value === framework.value
                                            }
                                            key={framework.value}
                                            value={framework.value}
                                            onSelect={(currentValue) => {
                                                setValue(
                                                    currentValue === value
                                                        ? ''
                                                        : currentValue,
                                                )
                                                setOpen(false)
                                            }}
                                        >
                                            {framework.label}
                                        </CommandItem>
                                    ))}
                                </CommandList>
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}
