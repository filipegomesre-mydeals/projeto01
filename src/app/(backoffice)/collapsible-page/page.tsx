'use client'
import PageHeading from '@/components/layout/page-heading'
import { Card } from '@/components/ui/card'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { useState } from 'react'

export default function CollapsiblePage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Collapsible'} />

            <Card className='lg:w-1/2'>
                <Collapsible className="flex flex-col gap-2 p-4">
                    <CollapsibleTrigger>
                        @peduarte starred 3 repositories
                    </CollapsibleTrigger>
                    <div className="rounded-md border border-gray-300 px-4 py-2 text-sm">
                        @radix-ui/primitives
                    </div>
                    <CollapsibleContent>
                        <div className="rounded-md border border-gray-300 px-4 py-2 text-sm">
                            @radix-ui/colors
                        </div>
                        <div className="rounded-md border border-gray-300 px-4 py-2 text-sm">
                            @stitches/react
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </Card>
        </div>
    )
}
