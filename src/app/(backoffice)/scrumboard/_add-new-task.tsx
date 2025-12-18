import { AlertDialogHeader } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { toast } from '@/hooks/use-toast'
import { Check, FilePlus2 } from 'lucide-react'
import React from 'react'

type IAddTaskColumn = {
    name: string
}

const AddNewTask = ({
    addTaskColumn,
}: {
    addTaskColumn: ({ name }: { name: string }) => void
}) => {
    const [open, setOpen] = React.useState(false)

    const [taskDetails, setTaskDetails] = React.useState<IAddTaskColumn>({
        name: '',
    })

    const handleTaskDetailsChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        key: keyof IAddTaskColumn,
    ) => {
        setTaskDetails((prevTask) => ({
            ...prevTask,
            [key]: e.target.value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addTaskColumn({ name: taskDetails.name })
        setOpen(false)
        toast({
            title: 'Task Added Successfully',
            description: 'You can now start working on it.',
            icon: <Check className="mt-0.5 size-5 text-success" />,
            variant: 'default',
        })
        setTaskDetails({
            name: '',
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button type="button" variant={'black'}>
                    <FilePlus2 />
                    Add Project
                </Button>
            </DialogTrigger>
            <DialogContent>
                <AlertDialogHeader>
                    <DialogTitle>Add Project</DialogTitle>
                </AlertDialogHeader>
                <div className="mt-6">
                    <form className="space-y-8" onSubmit={handleSubmit}>
                        <div className="space-y-2.5">
                            <label className="block font-semibold leading-tight text-black dark:text-white">
                                Name
                            </label>
                            <Input
                                value={taskDetails.name}
                                onChange={(e) =>
                                    handleTaskDetailsChange(e, 'name')
                                }
                                type="text"
                                placeholder="Enter Name"
                            />
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <Button
                                variant={'outline-general'}
                                size={'large'}
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant={'black'}
                                size={'large'}
                            >
                                Add
                            </Button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AddNewTask
