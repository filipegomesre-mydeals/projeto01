import PageHeading from '@/components/layout/page-heading'
import {
    Accordion,
    AccordionContent,
    AccordionContentTwo,
    AccordionItem,
    AccordionItemTwo,
    AccordionTrigger,
    AccordionTriggerTwo,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import { CircleUser, CreditCard, MapPinned } from 'lucide-react'

export default function AccordionPage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Accordion'} />

            <div className="min-h-[calc(100vh-160px)]">
                <div className="grid gap-4 lg:grid-cols-2">
                    <Card>
                        <CardContent className="p-4">
                            <Accordion
                                type="single"
                                collapsible
                                className="space-y-4"
                            >
                                <AccordionItem value="item-1">
                                    <AccordionTrigger
                                        className="p-4"
                                        icons="plus-minus"
                                    >
                                        <div className="flex gap-2">
                                            <CircleUser className="size-[18px] shrink-0" />
                                            <p className="text-sm/tight font-medium">
                                                How Do I update my account
                                                information?
                                            </p>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent parentClassName="-top-2 relative">
                                        <p className="px-11 pb-1 text-[13px]/[22px] font-medium text-gray dark:text-gray-500">
                                            Accepted payment methods typically
                                            include credit/debit cards, cash,
                                            and mobile payment apps like Apple
                                            Pay or Google Pay.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger
                                        className="p-4"
                                        icons="plus-minus"
                                    >
                                        <div className="flex gap-2.5">
                                            <CreditCard className="size-[18px] shrink-0" />
                                            <p className="text-sm/tight font-medium">
                                                What payment method are
                                                accepted?
                                            </p>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent parentClassName="-top-2 relative">
                                        <p className="px-11 pb-1 text-[13px]/[22px] font-medium text-gray dark:text-gray-500">
                                            Accepted payment methods typically
                                            include credit/debit cards, cash,
                                            and mobile payment apps like Apple
                                            Pay or Google Pay.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger
                                        className="p-4"
                                        icons="plus-minus"
                                    >
                                        <div className="flex gap-2">
                                            <CircleUser className="size-[18px] shrink-0" />
                                            <p className="text-sm/tight font-medium">
                                                How can I track my order?
                                            </p>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent parentClassName="-top-2 relative">
                                        <p className="px-11 pb-1 text-[13px]/[22px] font-medium text-gray dark:text-gray-500">
                                            Accepted payment methods typically
                                            include credit/debit cards, cash,
                                            and mobile payment apps like Apple
                                            Pay or Google Pay.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger
                                        className="p-4"
                                        icons="plus-minus"
                                    >
                                        <div className="flex gap-2">
                                            <MapPinned className="size-[18px] shrink-0" />
                                            <p className="text-sm/tight font-medium">
                                                How do I reset my password?
                                            </p>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent parentClassName="-top-2 relative">
                                        <p className="px-11 pb-1 text-[13px]/[22px] font-medium text-gray dark:text-gray-500">
                                            Accepted payment methods typically
                                            include credit/debit cards, cash,
                                            and mobile payment apps like Apple
                                            Pay or Google Pay.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <Accordion
                                type="single"
                                collapsible
                                className="space-y-4"
                            >
                                <AccordionItem value="item-1">
                                    <AccordionTrigger
                                        className="p-4"
                                        icons="plus-minus"
                                    >
                                        <p className="text-sm/tight font-medium">
                                            Changelog - 2024-05-29
                                        </p>
                                    </AccordionTrigger>
                                    <AccordionContent parentClassName="-top-2 relative">
                                        <p className="px-4 pb-1 text-[13px]/[22px] font-medium text-gray dark:text-gray-500">
                                            We&apos;ve introduced new
                                            customization options, streamlined
                                            the onboarding process, and resolved
                                            compatibility issues with certain
                                            browsers.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger
                                        className="p-4"
                                        icons="plus-minus"
                                    >
                                        <p className="text-sm/tight font-medium">
                                            Changelog - 2023-05-18
                                        </p>
                                    </AccordionTrigger>
                                    <AccordionContent parentClassName="-top-2 relative">
                                        <p className="px-4 pb-1 text-[13px]/[22px] font-medium text-gray dark:text-gray-500">
                                            We&apos;ve introduced new
                                            customization options, streamlined
                                            the onboarding process, and resolved
                                            compatibility issues with certain
                                            browsers.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger
                                        className="p-4"
                                        icons="plus-minus"
                                    >
                                        <p className="text-sm/tight font-medium">
                                            Changelog - 2023-05-05
                                        </p>
                                    </AccordionTrigger>
                                    <AccordionContent parentClassName="-top-2 relative">
                                        <p className="px-4 pb-1 text-[13px]/[22px] font-medium text-gray dark:text-gray-500">
                                            We&apos;ve introduced new
                                            customization options, streamlined
                                            the onboarding process, and resolved
                                            compatibility issues with certain
                                            browsers.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <Accordion
                                type="single"
                                collapsible
                                className="space-y-4"
                            >
                                <AccordionItem value="item-1">
                                    <AccordionTrigger
                                        iconsPosition="left"
                                        icons="plus-minus"
                                        className="p-4"
                                    >
                                        <p className="text-sm/tight font-medium">
                                            How Do I update my account
                                            information?
                                        </p>
                                    </AccordionTrigger>
                                    <AccordionContent parentClassName="-top-2 relative">
                                        <p className="px-11 pb-1 text-[13px]/[22px] font-medium text-gray dark:text-gray-500">
                                            Accepted payment methods typically
                                            include credit/debit cards, cash,
                                            and mobile payment apps like Apple
                                            Pay or Google Pay.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger
                                        iconsPosition="left"
                                        icons="plus-minus"
                                        className="p-4"
                                    >
                                        <p className="text-sm/tight font-medium">
                                            Mobile App Benefits
                                        </p>
                                    </AccordionTrigger>
                                    <AccordionContent parentClassName="-top-2 relative">
                                        <p className="px-11 pb-1 text-[13px]/[22px] font-medium text-gray dark:text-gray-500">
                                            Accepted payment methods typically
                                            include credit/debit cards, cash,
                                            and mobile payment apps like Apple
                                            Pay or Google Pay.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger
                                        iconsPosition="left"
                                        icons="plus-minus"
                                        className="p-4"
                                    >
                                        <p className="text-sm/tight font-medium">
                                            Payment Options
                                        </p>
                                    </AccordionTrigger>
                                    <AccordionContent parentClassName="-top-2 relative">
                                        <p className="px-11 pb-1 text-[13px]/[22px] font-medium text-gray dark:text-gray-500">
                                            Accepted payment methods typically
                                            include credit/debit cards, cash,
                                            and mobile payment apps like Apple
                                            Pay or Google Pay.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger
                                        className="p-4"
                                        iconsPosition="left"
                                        icons="plus-minus"
                                    >
                                        <p className="text-sm/tight font-medium">
                                            Customer Support
                                        </p>
                                    </AccordionTrigger>
                                    <AccordionContent parentClassName="-top-2 relative">
                                        <p className="px-11 pb-1 text-[13px]/[22px] font-medium text-gray dark:text-gray-500">
                                            Accepted payment methods typically
                                            include credit/debit cards, cash,
                                            and mobile payment apps like Apple
                                            Pay or Google Pay.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <Accordion
                                type="single"
                                collapsible
                                className="space-y-4"
                            >
                                <AccordionItemTwo value="item-1">
                                    <AccordionTriggerTwo>
                                        <p className="text-sm/tight font-medium">
                                            What industries can benefit from
                                            lot?
                                        </p>
                                    </AccordionTriggerTwo>
                                    <AccordionContentTwo>
                                        <p className="py-3 text-[13px]/[22px] font-medium text-gray dark:text-gray-500">
                                            Industries like manufacturing,
                                            healthcare, agriculture,
                                            transportation, and smart cities can
                                            all benefit from IoT technology.
                                        </p>
                                    </AccordionContentTwo>
                                </AccordionItemTwo>
                                <AccordionItemTwo value="item-2">
                                    <AccordionTriggerTwo>
                                        <p className="text-sm/tight font-medium">
                                            How can I contact customer support?
                                        </p>
                                    </AccordionTriggerTwo>
                                    <AccordionContentTwo>
                                        <p className="py-3 text-[13px]/[22px] font-medium text-gray dark:text-gray-500">
                                            Brunch 3 wolf moon tempor, sunt
                                            aliqua put a bird on it squid
                                            single-origin coffee nulla assumenda
                                            shoreditch et.
                                        </p>
                                    </AccordionContentTwo>
                                </AccordionItemTwo>
                                <AccordionItemTwo value="item-3">
                                    <AccordionTriggerTwo>
                                        <p className="text-sm/tight font-medium">
                                            What payment methods do you accept?
                                        </p>
                                    </AccordionTriggerTwo>
                                    <AccordionContentTwo>
                                        <p className="py-3 text-[13px]/[22px] font-medium text-gray dark:text-gray-500">
                                            Anim pariatur cliche reprehenderit,
                                            enim eiusmod high life accusamus
                                            terry richardson ad squid. 3 wolf
                                            moon officia aute, non cupidatat
                                            skateboard dolor brunch.
                                        </p>
                                    </AccordionContentTwo>
                                </AccordionItemTwo>
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
