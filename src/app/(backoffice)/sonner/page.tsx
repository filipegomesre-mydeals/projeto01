'use client'

import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { ToastSonner } from '@/components/ui/sonner'
import { ToastDescription } from '@radix-ui/react-toast'
import Image from 'next/image'
import { toast, Toaster } from 'sonner'

export default function Sonner() {
    const promise = (): Promise<{ name: string }> =>
        new Promise((resolve) =>
            setTimeout(() => resolve({ name: 'Sonner' }), 2000),
        )
    const positions: Array<
        | 'top-left'
        | 'top-center'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-center'
        | 'bottom-right'
    > = [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
    ]
    return (
        <div className="space-y-4">
            <PageHeading heading={'Sonner'} />

            <div className="flex flex-col items-start gap-7.5">
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Types
                    </CardTitle>
                    <CardContent className="relative flex grow flex-wrap gap-2.5 lg:gap-4 p-2.5 lg:p-4">
                        <Button
                            variant="outline-general"
                            size={'large'}
                            onClick={() => toast('Event has been created')}
                        >
                            Default
                        </Button>
                        <Button
                            variant="outline-general"
                            size={'large'}
                            onClick={() =>
                                toast('Event has been created', {
                                    description:
                                        'Monday, January 3rd at 6:00pm',
                                })
                            }
                        >
                            Descripiton
                        </Button>
                        <Button
                            variant="outline-general"
                            size={'large'}
                            onClick={() =>
                                toast.success('Event has been created', {
                                    description:
                                        'Monday, January 3rd at 6:00pm',
                                })
                            }
                        >
                            Success
                        </Button>
                        <Button
                            variant="outline-general"
                            size={'large'}
                            onClick={() =>
                                toast.info(
                                    'Be at the area 10 minutes before the event time',
                                )
                            }
                        >
                            Info
                        </Button>
                        <Button
                            variant="outline-general"
                            size={'large'}
                            onClick={() =>
                                toast.warning(
                                    'Event start time cannot be earlier than 8am',
                                )
                            }
                        >
                            Warning
                        </Button>
                        <Button
                            variant="outline-general"
                            size={'large'}
                            onClick={() =>
                                toast.error('Event has not been created')
                            }
                        >
                            Error
                        </Button>
                        <Button
                            variant="outline-general"
                            size={'large'}
                            onClick={() =>
                                toast('Event has been created', {
                                    action: {
                                        label: 'Undo',
                                        onClick: () => console.log('Undo'),
                                    },
                                })
                            }
                        >
                            Action
                        </Button>

                        <Button
                            variant="outline-general"
                            size="large"
                            onClick={() =>
                                toast.promise(promise, {
                                    loading: 'Loading...',
                                    success: (data) =>
                                        `${data.name} toast has been added`,
                                    error: 'Error',
                                })
                            }
                        >
                            Promise
                        </Button>
                        <Button
                            variant="outline-general"
                            size="large"
                            onClick={() =>
                                toast(
                                    <div>
                                        A custom toast with default styling
                                    </div>,
                                )
                            }
                        >
                            Custom
                        </Button>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Position
                    </CardTitle>
                    <CardContent className="relative flex grow flex-wrap gap-2.5 lg:gap-4 p-2.5 lg:p-4">
                        {positions.map((position) => (
                            <Button
                                key={position}
                                variant="outline-general"
                                className='capitalize'
                                size={'large'}
                                onClick={() =>
                                    toast('Event created', {
                                        description: `Monday, January 3rd at 6:00pm`,
                                        position: position,
                                    })
                                }
                            >
                                {position}
                            </Button>
                        ))}
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Other
                    </CardTitle>
                    <CardContent className="relative flex grow flex-wrap gap-2.5 lg:gap-4 p-2.5 lg:p-4">
                        <Button
                            variant="outline-general"
                            size={'large'}
                            onClick={() =>
                                toast.success('Event has been created', {
                                    richColors: true,
                                })
                            }
                        >
                            Rich Colors Success
                        </Button>
                        <Button
                            variant="outline-general"
                            size={'large'}
                            onClick={() =>
                                toast.error('Event has not been created', {
                                    richColors: true,
                                })
                            }
                        >
                            Rich Colors Error
                        </Button>
                        <Button
                            variant="outline-general"
                            size={'large'}
                            onClick={() =>
                                toast.info(
                                    'Be at the area 10 minutes before the event time',
                                    {
                                        richColors: true,
                                    },
                                )
                            }
                        >
                            Rich Colors Info
                        </Button>
                        <Button
                            variant="outline-general"
                            size={'large'}
                            onClick={() =>
                                toast.warning(
                                    'Event start time cannot be earlier than 8am',
                                    {
                                        richColors: true,
                                    },
                                )
                            }
                        >
                            Rich Colors Warning
                        </Button>
                        <Button
                            variant="outline-general"
                            size={'large'}
                            onClick={() =>
                                toast('Event has been created', {
                                    description:
                                        'Monday, January 3rd at 6:00pm',
                                    closeButton: true,
                                })
                            }
                        >
                            Close Button
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
