'use client'
import PageHeading from '@/components/layout/page-heading'
import { Progress } from '@/components/ui/progress'
import { useEffect, useState } from 'react'

export default function ProgressDemo() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        let current = 0
        const target = 66
        const interval = setInterval(() => {
            current += 1
            setProgress(current)
            if (current >= target) clearInterval(interval)
        }, 15) // Adjust speed here
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="space-y-4">
            <PageHeading heading={'Progress'} />

            <div className="dark:bg-black-dark shadow-3xl flex w-full items-center gap-2.5 overflow-x-auto rounded-lg bg-white px-3 py-3.5 sm:p-5 text-sm/4 lg:w-1/2 dark:shadow-sm">
                <Progress value={progress} />
                <div className="w-[40px] font-semibold text-right text-black dark:text-white">{progress}%</div>
            </div>
        </div>
    )
}
