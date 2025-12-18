'use client'
import PageHeading from '@/components/layout/page-heading'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from '@/components/ui/context-menu'
import {
    ContextMenuItemIndicator,
    ContextMenuLabel,
} from '@radix-ui/react-context-menu'
import { CheckIcon } from 'lucide-react'
import { useState } from 'react'

export default function ContextMenuPage() {
    const [checked, setChecked] = useState(true)
    const [checked2, setChecked2] = useState(false)
    const [color, setColor] = useState('blue')
    return (
        <div className="space-y-4">
            <PageHeading heading={'Context Menu'} />

            <div className="grid sm:grid-cols-2 md:grid-cols-3 flex-wrap gap-4 lg:gap-6 xl:flex">
                <Card>
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Simple Context Menu
                    </CardTitle>
                    <CardContent className="p-4">
                        <ContextMenu>
                            <ContextMenuTrigger className="border border-dashed border-gray-300 dark:border-gray-600/50">
                                Right click here
                            </ContextMenuTrigger>
                            <ContextMenuContent>
                                <ContextMenuItem>Profile</ContextMenuItem>
                                <ContextMenuItem>Billing</ContextMenuItem>
                                <ContextMenuItem>Team</ContextMenuItem>
                                <ContextMenuItem>Subscription</ContextMenuItem>
                            </ContextMenuContent>
                        </ContextMenu>
                    </CardContent>
                </Card>
                <Card>
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Submenus Context Menu
                    </CardTitle>
                    <CardContent className="p-4">
                        <ContextMenu>
                            <ContextMenuTrigger className="border border-dashed border-gray-300 dark:border-gray-600/50">
                                Right click here
                            </ContextMenuTrigger>
                            <ContextMenuContent>
                                <ContextMenuItem>Profile</ContextMenuItem>
                                <ContextMenuItem> Billing</ContextMenuItem>
                                <ContextMenuSeparator />
                                <ContextMenuSub>
                                    <ContextMenuSubTrigger>
                                        Sub menu
                                    </ContextMenuSubTrigger>
                                    <ContextMenuSubContent>
                                        <ContextMenuItem>
                                            Sub menu item
                                        </ContextMenuItem>
                                        <ContextMenuItem>
                                            Sub menu item
                                        </ContextMenuItem>
                                    </ContextMenuSubContent>
                                </ContextMenuSub>
                                <ContextMenuSeparator />
                                <ContextMenuItem>Logout</ContextMenuItem>
                            </ContextMenuContent>
                        </ContextMenu>
                    </CardContent>
                </Card>
                <Card>
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        disabled items
                    </CardTitle>
                    <CardContent className="p-4">
                        <ContextMenu>
                            <ContextMenuTrigger className="border border-dashed border-gray-300 dark:border-gray-600/50">
                                Right click here
                            </ContextMenuTrigger>
                            <ContextMenuContent>
                                <ContextMenuItem>Profile</ContextMenuItem>
                                <ContextMenuItem>Billing</ContextMenuItem>
                                <ContextMenuItem disabled>Team</ContextMenuItem>
                                <ContextMenuItem>Subscription</ContextMenuItem>
                            </ContextMenuContent>
                        </ContextMenu>
                    </CardContent>
                </Card>
                <Card>
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Checkbox items
                    </CardTitle>
                    <CardContent className="p-4">
                        <ContextMenu>
                            <ContextMenuTrigger className="border border-dashed border-gray-300 dark:border-gray-600/50">
                                Right click here
                            </ContextMenuTrigger>
                            <ContextMenuContent>
                                <ContextMenuLabel className="px-2 pt-2 font-medium text-black dark:text-white">
                                    Items
                                </ContextMenuLabel>
                                <ContextMenuCheckboxItem
                                    checked={checked}
                                    onCheckedChange={setChecked}
                                >
                                    Checkbox item
                                </ContextMenuCheckboxItem>
                                <ContextMenuCheckboxItem
                                    checked={checked2}
                                    onCheckedChange={setChecked2}
                                >
                                    Checkbox item
                                </ContextMenuCheckboxItem>
                            </ContextMenuContent>
                        </ContextMenu>
                    </CardContent>
                </Card>
                <Card>
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Radio items
                    </CardTitle>
                    <CardContent className="p-4">
                        <ContextMenu>
                            <ContextMenuTrigger className="border border-dashed border-gray-300 dark:border-gray-600/50">
                                Right click here
                            </ContextMenuTrigger>
                            <ContextMenuContent>
                                <ContextMenuLabel className="px-2 pt-2 font-medium text-black dark:text-white">
                                    Items
                                </ContextMenuLabel>
                                <ContextMenuRadioGroup
                                    value={color}
                                    onValueChange={setColor}
                                >
                                    <ContextMenuRadioItem value="red">
                                        Red
                                    </ContextMenuRadioItem>
                                    <ContextMenuRadioItem value="blue">
                                        Blue
                                    </ContextMenuRadioItem>
                                    <ContextMenuRadioItem value="green">
                                        Green
                                    </ContextMenuRadioItem>
                                </ContextMenuRadioGroup>
                            </ContextMenuContent>
                        </ContextMenu>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
