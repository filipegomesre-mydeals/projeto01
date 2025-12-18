'use client'
import { Button } from '@/components/ui/button'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from '@/components/ui/input-group'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Check, Copy, Info, Star } from 'lucide-react'

import { useState } from 'react'

export default function ButtonCard() {
    const [isCopied, setIsCopied] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    const copyToClipboard = () => {
        navigator.clipboard.writeText('https://sbthemes.com').then(() => {
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000) // reset after 2s
        })
    }

    return (
        <div className="space-y-5">
            <InputGroup>
                <InputGroupInput placeholder="https://sbthemes.com" readOnly />
                <InputGroupAddon align="inline-end">
                    <InputGroupButton
                        className="rounded-md"
                        aria-label="Copy"
                        title="Copy"
                        size="xs"
                        variant={'outline-general'}
                        onClick={() => {
                            copyToClipboard()
                        }}
                    >
                        {isCopied ? <Check /> : <Copy />}
                    </InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
            <InputGroup>
                <Popover>
                    <PopoverTrigger asChild>
                        <InputGroupAddon>
                            <button type="button">
                                <Info className="size-4" />
                            </button>
                        </InputGroupAddon>
                    </PopoverTrigger>
                    <PopoverContent
                        align="start"
                        className="flex flex-col gap-1 rounded-xl text-sm"
                    >
                        <p className="font-medium">
                            Your connection is not secure.
                        </p>
                        <p>
                            You should not enter any sensitive information on
                            this site.
                        </p>
                    </PopoverContent>
                </Popover>
                <InputGroupAddon>https://</InputGroupAddon>
                <InputGroupInput className="ps-1.5" />
                <InputGroupAddon align="inline-end">
                    <InputGroupButton
                        onClick={() => setIsFavorite(!isFavorite)}
                        size="icon-xs"
                    >
                        <Star
                            data-favorite={isFavorite}
                            className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
                        />
                    </InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
            <InputGroup>
                <InputGroupInput placeholder="Type to search..." />
                <InputGroupAddon
                    align="inline-end"
                    className="ltr:pr-1 rtl:pl-1"
                >
                    <InputGroupButton variant="black" size={'sm'}>
                        Search
                    </InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}
