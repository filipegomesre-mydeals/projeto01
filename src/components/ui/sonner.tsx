'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const ToastSonner = ({ visibleToasts = 3, ...props }: ToasterProps) => {
    const { theme = 'system' } = useTheme()

    return (
        <Sonner
            theme={theme as ToasterProps['theme']}
            visibleToasts={visibleToasts}
            className="toaster group"
            toastOptions={{
                classNames: {
                    toast: 'group overflow-hidden toast group-[.toaster]:bg-white group-[.toaster]:border-0! group-[.toaster]:p-0 group-[.toaster]:block group-[.toaster]:text-foreground group-[.toaster]:shadow-3xl  *:w-full [data-sonner-toast]:items-start!',
                    description: 'group-[.toast]:text-black ',
                    actionButton:
                        'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground w-fit!',
                    cancelButton: 'text-black!',
                    closeButton:
                        'text-black dark:text-white [&>svg]:size-[18px] border-0 hover:opacity-70 top-[22px]! absolute right-2! ml-auto! ',
                },
            }}
            {...props}
        />
    )
}

export { ToastSonner }
