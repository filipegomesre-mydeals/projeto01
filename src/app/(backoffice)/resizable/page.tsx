'use client'
import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable'
import { useState } from 'react'

export default function ResizableDemo() {
    const [showLeftPanel, setShowLeftPanel] = useState(true)
    const [showRightPanel, setShowRightPanel] = useState(true)
    return (
        <div className="space-y-4">
            <PageHeading heading={'Resizable'} />

            <div className="grid sm:grid-cols-3 gap-4 xl:gap-6">
                <Card className="sm:col-span-2 flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Horizontal layouts
                    </CardTitle>
                    <CardContent className="relative flex grow flex-col gap-4 p-4 lg:p-6">
                        <div className="flex gap-2.5">
                            <Button
                                type="button"
                                onClick={() => setShowLeftPanel(!showLeftPanel)}
                            >
                                {showLeftPanel
                                    ? 'Hide left panel'
                                    : 'Show left panel'}
                            </Button>

                            <Button
                                type="button"
                                onClick={() =>
                                    setShowRightPanel(!showRightPanel)
                                }
                            >
                                {showRightPanel
                                    ? 'Hide right panel'
                                    : 'Show right panel'}
                            </Button>
                        </div>
                        <ResizablePanelGroup
                            direction="horizontal"
                            className="min-h-60 grow rounded-lg"
                        >
                            {showLeftPanel && (
                                <>
                                    <ResizablePanel className="min-w-fit">
                                        <div className="flex h-full items-center justify-center p-4 font-semibold">
                                            Left
                                        </div>
                                    </ResizablePanel>
                                    <ResizableHandle withHandle />
                                </>
                            )}
                            <ResizablePanel className="min-w-fit">
                                <div className="flex h-full items-center justify-center p-4 font-semibold">
                                    Middle
                                </div>
                            </ResizablePanel>
                            {showRightPanel && (
                                <>
                                    <ResizableHandle withHandle />
                                    <ResizablePanel className="min-w-fit">
                                        <div className="flex h-full items-center justify-center p-4 font-semibold">
                                            Right
                                        </div>
                                    </ResizablePanel>
                                </>
                            )}
                        </ResizablePanelGroup>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Vertical layouts
                    </CardTitle>
                    <CardContent className="relative flex grow flex-col gap-4 p-4 lg:p-6">
                        <ResizablePanelGroup
                            direction="vertical"
                            className="min-h-60 rounded-lg"
                        >
                            <ResizablePanel className="min-h-fit">
                                <div className="flex h-full items-center justify-center p-4 font-semibold">
                                    Top
                                </div>
                            </ResizablePanel>

                            <ResizableHandle withHandle />
                            <ResizablePanel className="min-h-fit">
                                <div className="flex h-full items-center justify-center p-4 font-semibold">
                                    Bottom
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </CardContent>
                </Card>
                <Card className="sm:col-span-3 flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Nested groups layouts
                    </CardTitle>
                    <CardContent className="relative flex min-h-60 sm:min-h-100 flex-col gap-4 p-4 lg:p-6">
                        <ResizablePanelGroup
                            direction="horizontal"
                            className="rounded-lg"
                        >
                            <ResizablePanel defaultSize={25} className='min-w-fit'>
                                <div className="flex h-full items-center justify-center p-4 font-medium">
                                    Left
                                </div>
                            </ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel defaultSize={50} className='min-w-fit'>
                                <ResizablePanelGroup direction="vertical">
                                    <ResizablePanel
                                        defaultSize={40}
                                        minSize={20}
                                    >
                                        <div className="flex h-full items-center justify-center p-4 font-medium">
                                            top
                                        </div>
                                    </ResizablePanel>

                                    <ResizableHandle withHandle />
                                    <ResizablePanel defaultSize={60}>
                                        <ResizablePanelGroup direction="horizontal">
                                            <ResizablePanel defaultSize={50} className='min-w-fit'>
                                                <div className="flex h-full items-center justify-center p-4 font-medium">
                                                    left
                                                </div>
                                            </ResizablePanel>

                                            <ResizableHandle withHandle />

                                            <ResizablePanel defaultSize={50} className='min-w-fit'>
                                                <div className="flex h-full items-center justify-center p-4 font-medium">
                                                    right
                                                </div>
                                            </ResizablePanel>
                                        </ResizablePanelGroup>
                                    </ResizablePanel>
                                </ResizablePanelGroup>
                            </ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel defaultSize={25} className='min-w-fit'>
                                <div className="flex h-full items-center justify-center p-4 font-medium">
                                    Right
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
