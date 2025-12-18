import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'

export default function DrawerPage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Drawer'} />

            <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="outline-general">Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>
                            This action cannot be undone.
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter className="mx-auto w-full max-w-md">
                        <Button variant="black">Submit</Button>
                        <DrawerClose asChild>
                            <Button variant="outline-general">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
