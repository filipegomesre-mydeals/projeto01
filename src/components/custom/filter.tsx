import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { InputSearch } from '@/components/ui/input-search'

export default function Filter() {
    return (
        <Card className="h-auto w-[302px] shrink-0 rounded-none shadow-sm md:sticky md:top-[76px] md:rounded-lg dark:shadow-none">
            <CardHeader className="border-b border-gray-300 bg-gray-100 px-5 py-3.5 text-base/5 font-semibold text-black md:rounded-t-lg dark:border-gray-700/50 dark:bg-white/5 dark:text-white">
                Filters
            </CardHeader>
            <CardContent className="px-4 pb-2.5 md:h-[calc(100vh-144px)] md:overflow-y-auto">
                <Accordion type="single" collapsible>
                    <AccordionItem
                        value="item-1"
                        className="border-none p-0 shadow-none!"
                    >
                        <AccordionTrigger className="py-5 [&>svg]:text-black! dark:[&>svg]:text-gray-500! dark:hover:[&>svg]:text-white! dark:[&[state=open]>svg]:text-white!">
                            <span className="font-semibold leading-tight">
                                Category
                            </span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="space-y-4 pb-2.5 pt-1.5">
                                <li>
                                    <label>
                                        <div className="flex items-center gap-2 text-xs/tight font-semibold text-black dark:text-white">
                                            <Checkbox />
                                            Shoes
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="flex items-center gap-2 text-xs/tight font-semibold text-black dark:text-white">
                                            <Checkbox />
                                            Clothes
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="flex items-center gap-2 text-xs/tight font-semibold text-black dark:text-white">
                                            <Checkbox />
                                            Accessories
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <DropdownMenuSeparator className="mx-0" />
                <Accordion type="single" collapsible>
                    <AccordionItem
                        value="item-1"
                        className="border-none p-0 shadow-none!"
                    >
                        <AccordionTrigger className="py-5 [&>svg]:text-black! dark:[&>svg]:text-gray-500! dark:hover:[&>svg]:text-white! dark:[&[state=open]>svg]:text-white!">
                            <span className="font-semibold leading-tight">
                                Brand
                            </span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <InputSearch
                                className="mb-1.5 border border-gray-300 ring-0! dark:border-white/10"
                                placeholder="Search brand"
                            />
                            <ul className="space-y-4 pb-2.5 pt-1.5">
                                <li>
                                    <label>
                                        <div className="flex items-center gap-2 text-xs/tight font-semibold text-black dark:text-white">
                                            <Checkbox />
                                            Puma (78)
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="flex items-center gap-2 text-xs/tight font-semibold text-black dark:text-white">
                                            <Checkbox />
                                            Nike (114)
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="flex items-center gap-2 text-xs/tight font-semibold text-black dark:text-white">
                                            <Checkbox />
                                            HRX (581)
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="flex items-center gap-2 text-xs/tight font-semibold text-black dark:text-white">
                                            <Checkbox />
                                            Ray-Ban (1310)
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="flex items-center gap-2 text-xs/tight font-semibold text-black dark:text-white">
                                            <Checkbox />
                                            IDEE (1023)
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="flex items-center gap-2 text-xs/tight font-semibold text-black dark:text-white">
                                            <Checkbox />
                                            Ted Smith (757)
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="flex items-center gap-2 text-xs/tight font-semibold text-black dark:text-white">
                                            <Checkbox />
                                            AISLIN (711)
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="flex items-center gap-2 text-xs/tight font-semibold text-black dark:text-white">
                                            <Checkbox />
                                            FastTrack (603)
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <DropdownMenuSeparator className="mx-0" />
                <Accordion type="single" collapsible>
                    <AccordionItem
                        value="item-1"
                        className="border-none p-0 shadow-none!"
                    >
                        <AccordionTrigger className="py-5 [&>svg]:text-black! dark:[&>svg]:text-gray-500! dark:hover:[&>svg]:text-white! dark:[&[state=open]>svg]:text-white!">
                            <span className="font-semibold leading-tight">
                                Price
                            </span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="space-y-4 pb-2.5 pt-1.5">
                                <li>
                                    <label>
                                        <div className="flex items-center gap-2 text-xs/tight font-semibold text-black dark:text-white">
                                            <Checkbox />
                                            <p>
                                                Rs. 199 to Rs. 8225&nbsp;
                                                <span className="text-gray-700">
                                                    (19133)
                                                </span>
                                            </p>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="flex items-center gap-2 text-xs/tight font-semibold text-black dark:text-white">
                                            <Checkbox />
                                            <p>
                                                Rs. 8225 to Rs. 16251
                                                <span className="text-gray-700">
                                                    (19133)
                                                </span>
                                            </p>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="flex items-center gap-2 text-xs/tight font-semibold text-black dark:text-white">
                                            <Checkbox />
                                            <p>
                                                Rs. 16251 to Rs. 24277&nbsp;
                                                <span className="text-gray-700">
                                                    (221)
                                                </span>
                                            </p>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <DropdownMenuSeparator className="mx-0" />
                <Accordion type="single" collapsible>
                    <AccordionItem
                        value="item-1"
                        className="border-none p-0 shadow-none!"
                    >
                        <AccordionTrigger className="py-5 [&>svg]:text-black! dark:[&>svg]:text-gray-500! dark:hover:[&>svg]:text-white! dark:[&[state=open]>svg]:text-white!">
                            <span className="font-semibold leading-tight">
                                Color
                            </span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="space-y-4 pb-2.5 pt-1.5">
                                <li>
                                    <label>
                                        <div className="flex items-center gap-2 text-xs/tight font-semibold text-black dark:text-white">
                                            <Checkbox />
                                            <span className="size-3 rounded-full bg-black dark:border dark:border-gray-700"></span>
                                            <p>
                                                Black&nbsp;
                                                <span className="text-gray-700">
                                                    (354)
                                                </span>
                                            </p>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="flex items-center gap-2 text-xs/tight font-semibold text-black dark:text-white">
                                            <Checkbox />
                                            <span className="size-3 rounded-full bg-gray-600" />
                                            <p>
                                                Grey
                                                <span className="text-gray-700">
                                                    (200)
                                                </span>
                                            </p>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="flex items-center gap-2 text-xs/tight font-semibold text-black dark:text-white">
                                            <Checkbox />
                                            <span className="size-3 rounded-full bg-[#A855F7]" />
                                            <p>
                                                Purple{' '}
                                                <span className="text-gray-700">
                                                    (189)
                                                </span>
                                            </p>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="flex items-center gap-2 text-xs/tight font-semibold text-black dark:text-white">
                                            <Checkbox />
                                            <span className="size-3 rounded-full bg-[#3B82F6]" />
                                            <p>
                                                Blue&nbsp;
                                                <span className="text-gray-700">
                                                    (187)
                                                </span>
                                            </p>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <div className="flex items-center gap-2 text-xs/tight font-semibold text-black dark:text-white">
                                            <Checkbox />
                                            <span className="size-3 rounded-full bg-[#713F12]" />
                                            <p>
                                                Brown&nbsp;
                                                <span className="text-gray-700">
                                                    (155)
                                                </span>
                                            </p>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
}
