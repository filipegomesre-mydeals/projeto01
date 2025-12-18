'use client'

import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { CirclePlus, Repeat2, Trash2 } from 'lucide-react'
import Image from 'next/image'
import 'react-quill-new/dist/quill.snow.css'
import TextEditor from '@/components/custom/text-editor'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import IconMastercard from '@/components/icons/icon-mastercard'
import IconVisacard from '@/components/icons/icon-visacard'
import IconGpay from '@/components/icons/icon-gpay'
import IconApplepay from '@/components/icons/icon-applepay'
import IconPaypal from '@/components/icons/icon-paypal'
import IconBitpay from '@/components/icons/icon-bitpay'
import { useState } from 'react'

export default function AddProduct() {
    const [imageToReplace, setImageToReplace] = useState<number | null>(null)
    const [productImageList, setProductImageList] = useState([
        {
            id: 1,
            name: 'Perfume',
            image_url: '/images/perfume.svg',
        },
        {
            id: 2,
            name: 'T Shirt',
            image_url: '/images/t-shirt.png',
        },
        {
            id: 3,
            name: 'Hand purse',
            image_url: '/images/hand-purse.svg',
        },
    ])

    const handleRemoveImage = (id: number) => {
        const newImageList = productImageList.filter((image) => image.id !== id)
        setProductImageList(newImageList)
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const file = event.target.files?.[0]
            if (file) {
                if (imageToReplace !== null) {
                    const updatedImageList = productImageList.map((image) => {
                        if (image.id === imageToReplace) {
                            return {
                                ...image,
                                name: file.name,
                                image_url: URL.createObjectURL(file),
                            }
                        }
                        return image
                    })
                    setProductImageList(updatedImageList)
                    setImageToReplace(null)
                } else {
                    setProductImageList([
                        ...productImageList,
                        {
                            id: productImageList.length + 1,
                            name: file.name,
                            image_url: URL.createObjectURL(file),
                        },
                    ])
                }
            }
        } catch (error) { }
    }

    return (
        <div className="space-y-4">
            <PageHeading heading={'Add new product'} />

            <div className="flex min-h-[calc(100vh-160px)] w-full flex-col rounded-lg bg-white font-medium text-black shadow-sm dark:bg-white/10 dark:text-white">
                <div className="grow gap-4 space-y-4 p-4 lg:grid lg:grid-cols-2 lg:space-y-0">
                    <div className="space-y-4">
                        <Card>
                            <CardHeader className="rounded-t-lg border-b border-gray-300 bg-gray-100 px-5 py-3 text-base/5 font-semibold text-black dark:border-gray-300/20 dark:bg-black/30 dark:text-white">
                                Description
                            </CardHeader>
                            <CardContent className="space-y-5 p-4">
                                <div className="space-y-2.5">
                                    <label className="leading-tight text-black dark:text-white inline-block">
                                        Product name
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="Grain Free Kangaroo & Turkey – Active Adult"
                                    />
                                    <p className="text-xs/tight text-gray-700 dark:text-gray-600">
                                        A product name is required and
                                        recommended to be unique.
                                    </p>
                                </div>
                                <div className="space-y-2.5">
                                    <label className="leading-tight text-black dark:text-white inline-block">
                                        Descriptions
                                    </label>
                                    <TextEditor
                                        placeholder="Add your product description here"
                                        className="product-editor"
                                    />
                                    <p className="text-xs/tight text-gray-700 dark:text-gray-600">
                                        Set a description to the product for
                                        better visibility.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="rounded-t-lg border-b border-gray-300 bg-gray-100 px-5 py-3 text-base/5 font-semibold text-black dark:border-gray-300/20 dark:bg-black/30 dark:text-white">
                                Category
                            </CardHeader>
                            <CardContent className="grid gap-4 p-4 sm:grid-cols-2">
                                <div className="space-y-2.5">
                                    <label className="leading-tight text-black dark:text-white inline-block">
                                        Brand name
                                    </label>
                                    <Input type="text" placeholder="Puma" />
                                </div>
                                <div className="space-y-2.5">
                                    <label className="leading-tight text-black dark:text-white inline-block">
                                        Category
                                    </label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Cloths (Fashion)" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Shoes">
                                                Shoes
                                            </SelectItem>
                                            <SelectItem value="Watches">
                                                Watches
                                            </SelectItem>
                                            <SelectItem value="Perfumes">
                                                Perfumes
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2.5">
                                    <label className="leading-tight text-black dark:text-white inline-block">
                                        Product type
                                    </label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Simple Product" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Shoes">
                                                Shoes
                                            </SelectItem>
                                            <SelectItem value="Watches">
                                                Watches
                                            </SelectItem>
                                            <SelectItem value="Perfumes">
                                                Perfumes
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2.5">
                                    <label className="leading-tight text-black dark:text-white inline-block">
                                        Stock Status
                                    </label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="in-stock">
                                                In Stock
                                            </SelectItem>
                                            <SelectItem value="out-of-stock">
                                                Out of Stock
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="rounded-t-lg border-b border-gray-300 bg-gray-100 px-5 py-3 text-base/5 font-semibold text-black dark:border-gray-300/20 dark:bg-black/30 dark:text-white">
                                Gender
                            </CardHeader>
                            <CardContent className="p-4">
                                <RadioGroup defaultValue="Women">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <label className="flex items-center gap-2 rounded-lg border border-gray-300 p-2.5 dark:border-gray-300/20">
                                            <RadioGroupItem value="Men" />
                                            <h3 className="text-xs/tight font-semibold text-black dark:text-white">
                                                Men
                                            </h3>
                                        </label>
                                        <label className="flex items-center gap-2 rounded-lg border border-gray-300 p-2.5 dark:border-gray-300/20">
                                            <RadioGroupItem value="Women" />
                                            <h3 className="text-xs/tight font-semibold text-black dark:text-white">
                                                Women
                                            </h3>
                                        </label>
                                        <label className="flex items-center gap-2 rounded-lg border border-gray-300 p-2.5 dark:border-gray-300/20">
                                            <RadioGroupItem value="Unisex" />
                                            <h3 className="text-xs/tight font-semibold text-black dark:text-white">
                                                Unisex
                                            </h3>
                                        </label>
                                    </div>
                                </RadioGroup>
                                <p className="mt-2.5 text-xs/tight text-gray-700 dark:text-gray-600">
                                    Select available gender
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="space-y-4">
                        <Card>
                            <CardHeader className="rounded-t-lg border-b border-gray-300 bg-gray-100 px-5 py-3 text-base/5 font-semibold text-black dark:border-gray-300/20 dark:bg-black/30 dark:text-white">
                                Product Image
                            </CardHeader>
                            <CardContent className="space-y-2.5 p-4">
                                <div className="overflow-x-auto">
                                    <div className="flex flex-wrap gap-2.5">
                                        {productImageList.map((image) => {
                                            return (
                                                <div
                                                    className="group relative h-[130px] w-[122px] shrink-0 overflow-hidden rounded-lg transition-all"
                                                    key={image.id}
                                                >
                                                    <Image
                                                        src={
                                                            image?.image_url ||
                                                            '/images/perfume.svg'
                                                        }
                                                        alt={
                                                            image?.name ||
                                                            'Product Image'
                                                        }
                                                        width={122}
                                                        height={130}
                                                        className="h-full w-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 space-y-2.5 rounded-lg duration-300 group-hover:bg-black/40">
                                                        <div className="invisible flex h-full flex-col items-center justify-center gap-2.5 transition-all group-hover:visible">
                                                            <Button
                                                                variant={
                                                                    'black'
                                                                }
                                                                className="bg-white p-0 text-black ring-1 ring-gray-300 hover:text-white hover:ring-0"
                                                                onClick={() =>
                                                                    setImageToReplace(
                                                                        image.id,
                                                                    )
                                                                }
                                                            >
                                                                <label
                                                                    htmlFor="file"
                                                                    className="flex cursor-pointer items-center gap-1.5 px-2.5 py-2"
                                                                >
                                                                    <Repeat2 className="size-4" />
                                                                    Replace
                                                                </label>
                                                            </Button>
                                                            <Button
                                                                variant={
                                                                    'black'
                                                                }
                                                                className="bg-danger-light text-black hover:text-white"
                                                                onClick={() =>
                                                                    handleRemoveImage(
                                                                        image.id,
                                                                    )
                                                                }
                                                            >
                                                                <Trash2 className="text-danger" />
                                                                Remove
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        {productImageList?.length < 7 && (
                                            <div className="relative h-[130px] w-[122px] shrink-0 overflow-hidden rounded-lg border border-dashed border-gray-300 bg-gray-200 transition-all hover:bg-gray-400 dark:border-white/10 dark:bg-white/5 dark:hover:bg-black">
                                                <input
                                                    type="file"
                                                    id="file"
                                                    className="absolute inset-0 cursor-pointer p-0 text-[0] leading-none opacity-0"
                                                    accept=".jpg, .png, .jpeg .webp"
                                                    onChange={handleImageChange}
                                                />
                                                <div className="flex h-full items-center justify-center gap-1.5 text-xs/tight text-black dark:text-white">
                                                    <CirclePlus className="size-4" />
                                                    Add photo
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <p className="text-xs/tight text-gray-700 dark:text-gray-600">
                                    You can add only 7 Images
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="rounded-t-lg border-b border-gray-300 bg-gray-100 px-5 py-3 text-base/5 font-semibold text-black dark:border-gray-300/20 dark:bg-black/30 dark:text-white">
                                Pricing
                            </CardHeader>
                            <CardContent className="space-y-5 p-4">
                                <div className="space-y-2.5">
                                    <label className="block font-semibold leading-tight text-black dark:text-white">
                                        Price
                                    </label>
                                    <div className="flex items-center">
                                        <Select>
                                            <SelectTrigger
                                                className="w-auto shrink-0 gap-2 bg-gray-100 px-3 text-black focus:ring-0 ltr:rounded-r-none rtl:rounded-l-none rtl:rounded-r-lg dark:focus:ring-1"
                                                icons="shorting"
                                            >
                                                <SelectValue placeholder="$USD" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="INR">
                                                    ₹INR
                                                </SelectItem>
                                                <SelectItem value="EUR">
                                                    €EUR
                                                </SelectItem>
                                                <SelectItem value="USD">
                                                    $USD
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <div className="w-full">
                                            <Input
                                                type="text"
                                                placeholder="$540"
                                                className="placeholder:text-black ltr:rounded-l-none rtl:rounded-r-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <div className="grow space-y-2.5">
                                        <label className="leading-tight text-black dark:text-white inline-block">
                                            Discount type
                                        </label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Percentage%" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Coupon Code">
                                                    Coupon Code
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2.5">
                                        <label className="leading-tight text-black dark:text-white inline-block">
                                            Discount
                                        </label>
                                        <Input type="text" placeholder="15%" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="rounded-t-lg border-b border-gray-300 bg-gray-100 px-5 py-3 text-base/5 font-semibold text-black dark:border-gray-300/20 dark:bg-black/30 dark:text-white">
                                Size
                            </CardHeader>
                            <CardContent className="p-4">
                                <div className="flex flex-wrap items-center justify-start gap-4">
                                    <label className="relative w-[54px] rounded-lg border border-gray-300 py-2.5 text-center text-xs/none shadow-sm has-checked:border-primary has-checked:bg-light-theme dark:border-white/30 dark:has-checked:bg-black/10">
                                        <input
                                            type="checkbox"
                                            className="absolute inset-0 cursor-pointer opacity-0"
                                        />
                                        XS
                                    </label>
                                    <label className="relative w-[54px] rounded-lg border border-gray-300 py-2.5 text-center text-xs/none shadow-sm has-checked:border-primary has-checked:bg-light-theme dark:border-white/30 dark:has-checked:bg-black/10">
                                        <input
                                            type="checkbox"
                                            className="absolute inset-0 cursor-pointer opacity-0"
                                        />
                                        S
                                    </label>
                                    <label className="relative w-[54px] rounded-lg border border-gray-300 py-2.5 text-center text-xs/none shadow-sm has-checked:border-primary has-checked:bg-light-theme dark:border-white/30 dark:has-checked:bg-black/10">
                                        <input
                                            type="checkbox"
                                            className="absolute inset-0 cursor-pointer opacity-0"
                                            defaultChecked
                                        />
                                        M
                                    </label>
                                    <label className="relative w-[54px] rounded-lg border border-gray-300 py-2.5 text-center text-xs/none shadow-sm has-checked:border-primary has-checked:bg-light-theme dark:border-white/30 dark:has-checked:bg-black/10">
                                        <input
                                            type="checkbox"
                                            className="absolute inset-0 cursor-pointer opacity-0"
                                            defaultChecked
                                        />
                                        XL
                                    </label>
                                    <label className="relative w-[54px] rounded-lg border border-gray-300 py-2.5 text-center text-xs/none shadow-sm has-checked:border-primary has-checked:bg-light-theme dark:border-white/30 dark:has-checked:bg-black/10">
                                        <input
                                            type="checkbox"
                                            className="absolute inset-0 cursor-pointer opacity-0"
                                        />
                                        XXL
                                    </label>
                                    <label className="relative w-[54px] rounded-lg border border-gray-300 py-2.5 text-center text-xs/none shadow-sm has-checked:border-primary has-checked:bg-light-theme dark:border-white/30 dark:has-checked:bg-black/10">
                                        <input
                                            type="checkbox"
                                            className="absolute inset-0 cursor-pointer opacity-0"
                                        />
                                        XXXL
                                    </label>
                                </div>
                                <p className="mt-2.5 text-xs/tight text-gray-700 dark:text-gray-600">
                                    Select available size
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="rounded-t-lg border-b border-gray-300 bg-gray-100 px-5 py-3 text-base/5 font-semibold text-black dark:border-gray-300/20 dark:bg-black/30 dark:text-white">
                                Payment method
                            </CardHeader>
                            <CardContent className="p-4">
                                <div className="flex flex-wrap items-center justify-start gap-4">
                                    <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-2.5 py-1 dark:border-white/30 dark:bg-white/10">
                                        <Checkbox />
                                        <IconMastercard className="shrink-0" />
                                    </label>
                                    <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-2.5 py-1 dark:border-white/30 dark:bg-white/10">
                                        <Checkbox />
                                        <IconVisacard className="shrink-0" />
                                    </label>
                                    <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-2.5 py-1 dark:border-white/30 dark:bg-white/10">
                                        <Checkbox />
                                        <IconGpay className="shrink-0 text-gray dark:text-gray-500" />
                                    </label>
                                    <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-2.5 py-1 dark:border-white/30 dark:bg-white/10">
                                        <Checkbox defaultChecked />
                                        <IconApplepay className="shrink-0 text-black dark:text-white" />
                                    </label>
                                    <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-2.5 py-1 dark:border-white/30 dark:bg-white/10">
                                        <Checkbox />
                                        <IconPaypal className="shrink-0" />
                                    </label>
                                    <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-2.5 py-1 dark:border-white/30 dark:bg-white/10">
                                        <Checkbox />
                                        <IconBitpay className="shrink-0 text-[#002855] dark:text-primary" />
                                    </label>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="mt-auto rounded-b-lg border-t border-gray-300 bg-gray-200 p-4 shadow-3xl dark:border-gray-700 dark:bg-black/50 dark:shadow-sm">
                    <div className="ml-auto flex w-full max-w-[550px] flex-wrap items-center justify-end gap-4">
                        <Button
                            size={'large'}
                            variant={'black'}
                            className="shrink-0 bg-danger-light px-6 text-black hover:bg-danger hover:text-white"
                        >
                            Cancel
                        </Button>
                        <Button
                            size={'large'}
                            variant={'outline-general'}
                            className="grow"
                        >
                            Save to Drafts
                        </Button>
                        <Button size={'large'} className="grow">
                            Publish Product
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
