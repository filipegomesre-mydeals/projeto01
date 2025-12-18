'use client'

import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
    CalendarIcon,
    CirclePlus,
    Eye,
    FileText,
    Link,
    Send,
    X,
} from 'lucide-react'
import Image from 'next/image'
import 'react-quill-new/dist/quill.snow.css'
import TextEditor from '@/components/custom/text-editor'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { format, set } from 'date-fns'
import { useState } from 'react'

const AddBlog = () => {
    const [date, setDate] = useState<Date>()
    const [selectedImage, setSelectedImage] = useState<File | null>(null)
    const [selectedFile, setSelectedFile] = useState<File | null>(null)

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const image = event.target.files?.[0] || null

        setSelectedImage(image)
    }
    const handleRemoveImage = () => {
        setSelectedImage(null)
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null
        setSelectedFile(file)
    }
    const handleRemoveFile = () => {
        setSelectedFile(null)
    }
    return (
        <div className="space-y-4">
            <PageHeading heading={'Add new Blog'} />

            <div className="mx-auto flex min-h-[calc(100vh-160px)] w-full max-w-[948px] flex-col items-start gap-4 font-medium md:flex-row">
                <Card className="w-full grow md:w-auto">
                    <CardHeader className="rounded-t-lg border-b border-gray-300 bg-gray-100 px-5 py-3 text-base/5 font-semibold text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                        Description
                    </CardHeader>
                    <CardContent className="space-y-5 p-4">
                        <div className="w-full max-w-[348px] space-y-5">
                            <div className="space-y-2.5">
                                <label className="inline-block leading-tight text-black dark:text-white">
                                    Your display name
                                </label>
                                <Input
                                    type="text"
                                    placeholder="Your display name"
                                />
                            </div>
                            <div className="space-y-2.5">
                                <label className="inline-block leading-tight text-black dark:text-white">
                                    Choose a name for your blog
                                </label>
                                <p className="text-xs/tight text-gray-700 dark:text-gray-600">
                                    This is the title that will be displayed at
                                    the top of your Blog.
                                </p>
                                <Input placeholder="Type your blog title" />
                            </div>
                        </div>
                        <div className="space-y-2.5">
                            <label className="inline-block leading-tight text-black dark:text-white">
                                Blog descriptions
                            </label>
                            <TextEditor
                                placeholder="Add your product description here"
                                className="blog-editor"
                            />
                        </div>
                        <div className="space-y-2.5">
                            <label className="inline-block leading-tight text-black dark:text-white">
                                Attach a file or URL
                            </label>
                            <div className="flex items-center rounded-lg">
                                <span className="shadow-3xl grid place-content-center border-gray-300 bg-gray-200 p-[11px] ltr:rounded-l-lg ltr:border-r rtl:rounded-r-lg rtl:border-l dark:border dark:border-white/10 dark:bg-white/5 dark:shadow-sm">
                                    <Link className="size-4 text-black dark:text-white" />
                                </span>
                                <div className="w-full">
                                    <Input
                                        type="text"
                                        placeholder="Type your blog title"
                                        className="ltr:rounded-l-none ltr:rounded-r-lg rtl:rounded-l-lg rtl:rounded-r-none"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-2.5">
                                <div className="relative inline-block cursor-pointer rounded-lg border border-dashed border-gray-300 bg-gray-200 px-5 py-4 transition hover:bg-gray-400 dark:border-white/10 dark:bg-white/5 dark:hover:bg-black">
                                    <input
                                        type="file"
                                        className="absolute inset-0 cursor-pointer p-0 leading-none text-[0] opacity-0"
                                        onChange={handleFileChange}
                                        autoComplete="off"
                                        accept="text/html, application/zip, application/x-zip-compressed, multipart/x-zip, application/pdf, .pdf, .php, text/php"
                                    />
                                    <div className="flex items-center justify-center gap-1.5 text-xs/tight text-black dark:text-white">
                                        <CirclePlus className="size-4" />
                                        Add file
                                    </div>
                                </div>
                                {selectedFile && (
                                    <div className="flex items-center gap-1">
                                        <div className="flex items-center gap-0.5">
                                            <FileText className="mr-1 size-4" />
                                            <div className="max-w-40 truncate">
                                                {/* @ts-ignore */}
                                                {selectedFile?.name || ''}
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="hover:opacity-80"
                                            onClick={handleRemoveFile}
                                        >
                                            <X className="size-4" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="space-y-2.5">
                            <label className="inline-block leading-tight text-black dark:text-white">
                                Add Blog image
                            </label>
                            <div className="flex flex-col items-start gap-2.5 xl:flex-row">
                                <div className="relative w-36 shrink-0 rounded-lg border border-dashed border-gray-300 bg-gray-200 py-8 hover:bg-gray-400 md:w-[200px] md:py-[62px] dark:border-white/10 dark:bg-white/5 dark:hover:bg-black">
                                    <input
                                        type="file"
                                        className="absolute inset-0 cursor-pointer p-0 leading-none text-[0] opacity-0"
                                        onChange={handleImageChange}
                                        accept=".jpg, .png, .jpeg .webp"
                                    />
                                    <div className="flex items-center justify-center gap-1.5 text-xs/tight text-black dark:text-white">
                                        <CirclePlus className="size-4" />
                                        Add image
                                    </div>
                                </div>

                                {selectedImage && (
                                    <div className="relative">
                                        <div className="h-[140px] w-[200px] overflow-hidden rounded-lg">
                                            <Image
                                                src={URL.createObjectURL(
                                                    selectedImage,
                                                )}
                                                alt="Selected Image"
                                                width={200}
                                                height={140}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            className="bg-danger hover:bg-danger/80 absolute -top-1.5 -right-1.5 grid size-4 place-content-center rounded-full text-white"
                                            onClick={handleRemoveImage}
                                        >
                                            <X className="size-2" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="w-full shrink-0 md:w-[332px]">
                    <CardHeader className="rounded-t-lg border-b border-gray-300 bg-gray-100 px-5 py-3 text-base/5 font-semibold text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                        Post setting
                    </CardHeader>
                    <CardContent className="divide-y divide-gray-300 dark:divide-gray-300/20">
                        <div className="space-y-2.5 px-4 py-5">
                            <label className="block leading-tight font-semibold text-black dark:text-white">
                                Labels
                            </label>
                            <Input
                                type="text"
                                placeholder="Separate labels by commas"
                            />
                        </div>
                        <div className="space-y-2.5 px-4 py-5">
                            <label className="block leading-tight font-semibold text-black dark:text-white">
                                Published on
                            </label>
                            <RadioGroup defaultValue="date-time">
                                <div className="flex flex-wrap items-center gap-4">
                                    <label className="flex items-center gap-2 rounded-lg border border-gray-300 p-2.5 dark:border-gray-300/30">
                                        <RadioGroupItem value="Automatic" />
                                        <h3 className="text-xs/tight font-semibold text-black dark:text-white">
                                            Automatic
                                        </h3>
                                    </label>
                                    <label className="flex items-center gap-2 rounded-lg border border-gray-300 p-2.5 dark:border-gray-300/30">
                                        <RadioGroupItem value="date-time" />
                                        <h3 className="text-xs/tight font-semibold text-black dark:text-white">
                                            Set date and time
                                        </h3>
                                    </label>
                                </div>
                            </RadioGroup>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        type="button"
                                        variant={'outline-general'}
                                        className="shadow-3xl w-full justify-between py-[9px] ring-0"
                                        size={'large'}
                                    >
                                        {date ? (
                                            format(date, 'PPP')
                                        ) : (
                                            <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="size-[18px]!" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto! p-0">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <div className="relative">
                                <Input
                                    placeholder="05:15 AM"
                                    type="time"
                                    className="py-2 pr-2.5 leading-snug [&>svg]:size-4"
                                />
                            </div>
                        </div>
                        <div className="space-y-2.5 px-4 py-5">
                            <label className="block leading-tight font-semibold text-black dark:text-white">
                                Locations
                            </label>
                            <Input
                                type="text"
                                placeholder="Separate labels by commas"
                            />
                        </div>
                        <div className="flex items-start gap-2.5 p-4 pt-5">
                            <Button
                                type="button"
                                size={'large'}
                                variant={'outline-general'}
                            >
                                <Eye />
                                Preview
                            </Button>
                            <Button type="button" size={'large'}>
                                <Send />
                                Publish
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
export default AddBlog
