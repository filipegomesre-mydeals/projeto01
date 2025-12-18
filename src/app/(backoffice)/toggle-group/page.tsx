'use client'

import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import 'react-quill-new/dist/quill.snow.css'
import TextEditor from '@/components/custom/text-editor'

export default function ToggleGroup() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Toggle Group'} />

            <div className="flex min-h-[calc(100vh-160px)] w-full items-center justify-center">
                <div className="mx-auto w-full max-w-[738px]">
                    <TextEditor
                        placeholder="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                        className="toggle-editor rounded-b-none!"
                    />
                    <div className="flex flex-wrap items-center gap-4 rounded-b-lg border-t border-gray-300 bg-white p-4 shadow-3xl ltr:justify-end rtl:justify-start dark:border-gray-700/50 dark:bg-black/30">
                        <Button size={'large'} variant={'outline-general'}>
                            Cancel
                        </Button>
                        <Button type="submit" size={'large'} variant={'black'}>
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
