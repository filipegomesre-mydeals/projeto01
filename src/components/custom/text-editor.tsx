'use client'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'
import React from 'react'
import 'react-quill-new/dist/quill.snow.css'
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

type ITextEditor = {
    className?: string
    value?: string
    onChange?: (value: string) => void
    placeholder?: string
    defaultValue?: string
    readOnly?: boolean
    module?: number
}

type ToolbarItem =
    | string
    | { size?: Array<string | boolean> }
    | { color?: string[] }
    | { background?: string[] }
    | { align?: string[] }
    | { list?: 'ordered' | 'bullet' }

type QuillModule = {
    toolbar: ToolbarItem[][]
}

type ModulesMap = {
    [key: string]: QuillModule
}

const TextEditor = ({
    className,
    value,
    onChange,
    placeholder,
    defaultValue,
    readOnly = false,
    module = 1,
}: ITextEditor) => {
    const modules1: QuillModule = {
        toolbar: [
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ color: [] }, { background: [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ align: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['image', 'link'],
        ],
    }
    const modules2: QuillModule = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link'],
        ],
    }

    const modules: ModulesMap = {
        '1': modules1,
        '2': modules2,
    }

    return (
        <ReactQuill
            modules={modules[module?.toString()]}
            placeholder={placeholder}
            onChange={onChange}
            className={cn(
                'form-input shadow-3xl border-0 border-transparent p-0 dark:shadow-sm dark:ring-1 dark:ring-gray-300/20 dark:placeholder:text-gray-500 dark:focus:ring-white',
                className,
            )}
            id="editor-container"
            bounds={'#editor-container'}
            defaultValue={defaultValue}
            readOnly={readOnly}
            {...(!defaultValue && { value })}
        />
    )
}

export default TextEditor
