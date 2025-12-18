import TemplateCustomize from '@/components/custom/template-customize'
import Header from '@/components/layout/header'
import Sidebar from '@/components/layout/sidebar'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { Settings } from 'lucide-react'
import { Suspense } from 'react'

export default async function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="main-content">
            <Suspense>
                <Header />
            </Suspense>
            <Sidebar />
            <div
                id="main-content"
                className="mt-[60px] p-4 transition-all lg:ltr:ml-[260px] lg:rtl:mr-[260px]"
            >
                {children}
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        type="button"
                        className="fixed top-1/2 z-60 -translate-y-1/2 px-3 ltr:right-0 ltr:rounded-r-none rtl:left-0 rtl:rounded-l-none [&>svg]:size-5"
                    >
                        <Settings className="animate-[3.5s_spin_linear_infinite]" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="z-60" side={'right'}>
                    <SheetTitle className="sr-only"></SheetTitle>
                    <SheetDescription hidden></SheetDescription>
                    <TemplateCustomize />
                </SheetContent>
            </Sheet>
        </div>
    )
}
