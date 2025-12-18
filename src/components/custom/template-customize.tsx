'use client'

import { SheetHeader } from '@/components/ui/sheet'
import { useStore } from '@/store'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useState, useEffect } from 'react'

const TemplateCustomize = () => {
    const isRTL = useStore((state) => state.isRTL)
    useEffect(() => {
        document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
    }, [isRTL])

    const isBox = useStore((state) => state.isBox)
    useEffect(() => {
        if (isBox) {
            document.body.classList.add('box-layout')
            document.body.classList.remove('full-layout')
        } else {
            document.body.classList.add('full-layout')
            document.body.classList.remove('box-layout')
        }
        return () => {
            document.body.classList.remove('full-layout')
        }
    }, [isBox])

    const selectedLayout = useStore((state) => state.selectedLayout)
    useEffect(() => {
        document.body.classList.remove('vertical', 'horizontal', 'collapsible')
        document.body.classList.add(selectedLayout)
        return () => {
            document.body.classList.remove('vertical')
        }
    }, [selectedLayout])

    const { theme, setTheme } = useTheme()

    return (
        <div>
            <SheetHeader>
                <h2 className="text-lg/5">Template Customizer</h2>
            </SheetHeader>
            <div className="space-y-5 px-2.5 py-5">
                <div className="rounded-lg border border-gray-300 p-2.5 dark:border-gray-300/20">
                    <div className="space-y-1">
                        <h3 className="text-base/5 font-medium text-black dark:text-white">
                            Direction
                        </h3>
                        <p className="text-xs/tight">
                            Select the direction for your app
                        </p>
                    </div>

                    <div className="relative mt-3 grid grid-cols-2 gap-1 rounded-xl bg-gray-400 p-1.5 dark:bg-white/5">
                        <button
                            onClick={() => useStore.setState({ isRTL: false })}
                            className={`rounded-lg p-1.5 font-medium ${!isRTL ? 'bg-primary text-white' : 'bg-transparent text-primary dark:text-white'}`}
                        >
                            LTR
                        </button>
                        <button
                            onClick={() => useStore.setState({ isRTL: true })}
                            className={`rounded-lg p-1.5 font-medium ${isRTL ? 'bg-primary text-white' : 'bg-transparent text-primary dark:text-white'}`}
                        >
                            RTL
                        </button>
                    </div>
                </div>

                <div className="rounded-lg border border-gray-300 p-2.5 dark:border-gray-300/20">
                    <div className="space-y-1">
                        <h3 className="text-base/5 font-medium text-black dark:text-white">
                            Layout Style
                        </h3>
                        <p className="text-xs/tight">
                            Select the primary layout style for your app.
                        </p>
                    </div>

                    <div className="relative mt-3 grid grid-cols-2 gap-1 rounded-xl bg-gray-400 p-1.5 dark:bg-white/5">
                        <button
                            onClick={() => useStore.setState({ isBox: false })}
                            className={`rounded-lg p-1.5 font-medium ${!isBox ? 'bg-primary text-white' : 'bg-transparent text-primary dark:text-white'}`}
                        >
                            Full
                        </button>
                        <button
                            onClick={() => useStore.setState({ isBox: true })}
                            className={`rounded-lg p-1.5 font-medium ${isBox ? 'bg-primary text-white' : 'bg-transparent text-primary dark:text-white'}`}
                        >
                            Box
                        </button>
                    </div>
                </div>

                <div className="rounded-lg border border-gray-300 p-2.5 dark:border-gray-300/20">
                    <div className="space-y-1">
                        <h3 className="text-base/5 font-medium text-black dark:text-white">
                            Navigation Position
                        </h3>
                        <p className="text-xs/tight">
                            Select the primary navigation paradigm for your app.
                        </p>
                    </div>

                    <div className="relative mt-3 grid grid-cols-3 gap-1 rounded-xl bg-gray-400 p-1.5 dark:bg-white/5">
                        <button
                            onClick={() =>
                                useStore.setState({
                                    selectedLayout: 'horizontal',
                                })
                            }
                            className={`rounded-lg p-1.5 font-medium ${selectedLayout === 'horizontal' ? 'bg-primary text-white' : 'bg-transparent text-primary dark:text-white'}`}
                        >
                            Horizontal
                        </button>

                        <button
                            onClick={() =>
                                useStore.setState({
                                    selectedLayout: 'vertical',
                                })
                            }
                            className={`rounded-lg p-1.5 font-medium ${selectedLayout === 'vertical' ? 'bg-primary text-white' : 'bg-transparent text-primary dark:text-white'}`}
                        >
                            Vertical
                        </button>

                        <button
                            onClick={() =>
                                useStore.setState({
                                    selectedLayout: 'collapsible',
                                })
                            }
                            className={`rounded-lg p-1.5 font-medium ${selectedLayout === 'collapsible' ? 'bg-primary text-white' : 'bg-transparent text-primary dark:text-white'}`}
                        >
                            Collapsible
                        </button>
                    </div>
                </div>

                <div className="rounded-lg border border-gray-300 p-2.5 dark:border-gray-300/20">
                    <div className="space-y-1">
                        <h3 className="text-base/5 font-medium text-black dark:text-white">
                            Color Scheme
                        </h3>
                        <p className="text-xs/tight">
                            Overall light or dark presentation.
                        </p>
                    </div>

                    <div className="relative mt-3 grid grid-cols-3 gap-1 rounded-xl bg-gray-400 p-1.5 dark:bg-white/5">
                        <button
                            type="button"
                            onClick={() => setTheme('light')}
                            className={`flex items-center justify-center gap-2 rounded-lg p-1.5 font-medium shadow-sm ${theme === 'light' ? 'bg-primary text-white' : 'bg-transparent text-primary dark:text-white'}`}
                        >
                            <Sun className="size-[18px] shrink-0" />
                            Light
                        </button>

                        <button
                            type="button"
                            onClick={() => setTheme('dark')}
                            className={`flex items-center justify-center gap-2 rounded-lg p-1.5 font-medium shadow-sm ${theme === 'dark' ? 'bg-primary text-white' : 'bg-transparent text-primary dark:text-white'}`}
                        >
                            <Moon className="size-[18px] shrink-0" />
                            Dark
                        </button>

                        <button
                            type="button"
                            onClick={() => setTheme('system')}
                            className={`flex items-center justify-center gap-2 rounded-lg p-1.5 font-medium shadow-sm ${theme === 'system' ? 'bg-primary text-white' : 'bg-transparent text-primary dark:text-white'}`}
                        >
                            <Monitor className="size-[18px] shrink-0" />
                            System
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TemplateCustomize
