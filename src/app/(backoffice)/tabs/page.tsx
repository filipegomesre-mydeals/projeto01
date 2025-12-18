import PageHeading from '@/components/layout/page-heading'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    BadgeCheck,
    Bell,
    Building2,
    CreditCard,
    Earth,
    KeyRound,
    User,
    Users,
} from 'lucide-react'

export default function TabsPage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Tabs'} />

            <Tabs defaultValue="Profile">
                <Card className="overflow-x-auto">
                    <TabsList className="inline-flex gap-2.5 px-5 py-2.5 text-sm/4">
                        <TabsTrigger value="Profile">
                            <User />
                            Profile
                        </TabsTrigger>
                        <TabsTrigger value="Company">
                            <Building2 />
                            Company
                        </TabsTrigger>
                        <TabsTrigger value="Team">
                            <Users />
                            Team
                        </TabsTrigger>
                        <TabsTrigger value="Password">
                            <KeyRound />
                            Password
                        </TabsTrigger>
                        <TabsTrigger value="Notifications">
                            <Bell />
                            Notifications
                            <Badge size={'number'} variant={'outline'}>
                                10
                            </Badge>
                        </TabsTrigger>
                        <TabsTrigger value="Verifications">
                            <BadgeCheck />
                            Verifications
                        </TabsTrigger>
                        <TabsTrigger value="Billing">
                            <CreditCard />
                            Billing
                        </TabsTrigger>
                        <TabsTrigger value="Earth">
                            <Earth />
                            Localization
                        </TabsTrigger>
                    </TabsList>
                </Card>

                <TabsContent
                    value="Profile"
                    className="mt-4 space-y-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0"
                >
                    <Tabs defaultValue="Profile">
                        <Card className="h-full">
                            <TabsList className="overflow-x-auto border-b border-gray-300 dark:border-gray-700/50">
                                <div className="inline-flex gap-2.5 px-5 py-2.5 text-sm/[18px]">
                                    <TabsTrigger value="Profile">
                                        <User />
                                        Profile
                                    </TabsTrigger>
                                    <TabsTrigger value="Company">
                                        <Building2 />
                                        Company
                                    </TabsTrigger>
                                    <TabsTrigger value="Password">
                                        <Users />
                                        Password
                                    </TabsTrigger>
                                    <TabsTrigger value="Verifications">
                                        <KeyRound />
                                        Verifications
                                    </TabsTrigger>
                                </div>
                            </TabsList>
                            <TabsContent value="Profile" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    New UI component and variants
                                </h4>
                                <div className="mt-2 space-y-2">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry&apos;s
                                        standard dummy text ever since the
                                        1500s, when an unknown printer took a
                                        galley of type and scrambled it to make
                                        a type specimen book.
                                    </p>
                                    <p>
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout.
                                    </p>
                                </div>
                            </TabsContent>
                            <TabsContent value="Company" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    We move your world!
                                </h4>
                                <div className="mt-2">
                                    <p>
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout.
                                    </p>
                                </div>
                            </TabsContent>
                            <TabsContent value="Password" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    New UI component and variants
                                </h4>
                                <div className="mt-2">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry&apos;s
                                        standard dummy text ever since the
                                        1500s, when an unknown printer took a
                                        galley of type and scrambled it to make
                                        a type specimen book.
                                    </p>
                                </div>
                            </TabsContent>
                            <TabsContent value="Verifications" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    New UI component and variants
                                </h4>
                                <div className="mt-2">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.
                                    </p>
                                </div>
                            </TabsContent>
                        </Card>
                    </Tabs>
                    <Tabs defaultValue="Company">
                        <Card className="h-full">
                            <TabsList className="overflow-x-auto border-b border-gray-300 dark:border-gray-700/50">
                                <div className="inline-flex gap-2.5 px-5 py-2.5 text-sm/[18px]">
                                    <TabsTrigger value="Profile">
                                        Profile
                                    </TabsTrigger>
                                    <TabsTrigger value="Company">
                                        Company
                                    </TabsTrigger>
                                    <TabsTrigger value="Team">Team</TabsTrigger>
                                    <TabsTrigger value="Password">
                                        Password
                                    </TabsTrigger>
                                    <TabsTrigger value="Verifications">
                                        Verifications
                                    </TabsTrigger>
                                </div>
                            </TabsList>
                            <TabsContent value="Profile" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    We move your world!
                                </h4>
                                <div className="mt-2">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </TabsContent>
                            <TabsContent value="Company" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    We move your world!
                                </h4>
                                <div className="mt-2 space-y-2">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <p>
                                        Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </p>
                                    <p>
                                        Cras sit amet nibh libero, in gravida
                                        nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio,
                                        vestibulum in vulputate at, tempus
                                        viverra turpis.
                                    </p>
                                </div>
                            </TabsContent>
                            <TabsContent value="Team" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    New UI component and variants
                                </h4>
                                <div className="mt-2">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </TabsContent>
                            <TabsContent value="Password" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    New UI component and variants
                                </h4>
                                <div className="mt-2">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry&apos;s
                                        standard dummy text ever since the
                                        1500s, when an unknown printer took a
                                        galley of type and scrambled it to make
                                        a type specimen book.
                                    </p>
                                </div>
                            </TabsContent>
                            <TabsContent value="Verifications" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    New UI component and variants
                                </h4>
                                <div className="mt-2">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry&apos;s
                                        standard dummy text.
                                    </p>
                                </div>
                            </TabsContent>
                        </Card>
                    </Tabs>
                    <Tabs defaultValue="Password">
                        <Card className="h-full">
                            <TabsList className="overflow-x-auto border-b border-gray-300 dark:border-gray-700/50">
                                <div className="inline-flex gap-[30px] px-5 text-sm/[18px]">
                                    <TabsTrigger
                                        value="Profile"
                                        className="light:[&[data-state=active]>svg]:text-black rounded-none border-b-2 border-transparent bg-transparent! px-0 py-3.5 data-[state=active]:border-primary"
                                    >
                                        <User />
                                        Profile
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="Company"
                                        className="light:[&[data-state=active]>svg]:text-black rounded-none border-b-2 border-transparent bg-transparent! px-0 py-3.5 data-[state=active]:border-primary"
                                    >
                                        <Building2 />
                                        Company
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="Password"
                                        className="light:[&[data-state=active]>svg]:text-black rounded-none border-b-2 border-transparent bg-transparent! px-0 py-3.5 data-[state=active]:border-primary"
                                    >
                                        <Users />
                                        Password
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="Verifications"
                                        className="light:[&[data-state=active]>svg]:text-black rounded-none border-b-2 border-transparent bg-transparent! px-0 py-3.5 data-[state=active]:border-primary"
                                    >
                                        <KeyRound />
                                        Verifications
                                    </TabsTrigger>
                                </div>
                            </TabsList>
                            <TabsContent value="Profile" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    Media heading
                                </h4>
                                <div className="mt-2">
                                    <p>
                                        Cras sit amet nibh libero, in gravida
                                        nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio,
                                        vestibulum in vulputate at, tempus
                                        viverra turpis. Fusce condimentum nunc
                                        ac nisi vulputate fringilla. Donec
                                        lacinia congue felis in faucibus.
                                    </p>
                                </div>
                            </TabsContent>
                            <TabsContent value="Company" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    Media heading
                                </h4>
                                <div className="mt-2">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing.
                                    </p>
                                </div>
                            </TabsContent>
                            <TabsContent value="Password" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    Media heading
                                </h4>
                                <div className="mt-2 space-y-2">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry&apos;s
                                        standard dummy text ever since the
                                        1500s, when an unknown printer took a
                                        galley of type and scrambled it to make
                                        a type specimen book.
                                    </p>
                                    <p>
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout.
                                    </p>
                                </div>
                            </TabsContent>
                            <TabsContent value="Verifications" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    Media heading
                                </h4>
                                <div className="mt-2">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry&apos;s
                                        standard dummy text ever since the
                                        1500s, when an unknown printer took a
                                        galley of type and scrambled it to make
                                        a type specimen book.
                                    </p>
                                </div>
                            </TabsContent>
                        </Card>
                    </Tabs>
                    <Tabs defaultValue="Verifications">
                        <Card className="h-full">
                            <TabsList className="overflow-x-auto border-b border-gray-300 dark:border-gray-700/50">
                                <div className="inline-flex gap-[30px] px-5 text-sm/[18px]">
                                    <TabsTrigger
                                        value="Profile"
                                        className="rounded-none border-b-2 border-transparent bg-transparent! px-0 py-3.5 data-[state=active]:border-primary"
                                    >
                                        Profile
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="Company"
                                        className="rounded-none border-b-2 border-transparent bg-transparent! px-0 py-3.5 data-[state=active]:border-primary"
                                    >
                                        Company
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="Team"
                                        className="rounded-none border-b-2 border-transparent bg-transparent! px-0 py-3.5 data-[state=active]:border-primary"
                                    >
                                        Team
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="Password"
                                        className="rounded-none border-b-2 border-transparent bg-transparent! px-0 py-3.5 data-[state=active]:border-primary"
                                    >
                                        Password
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="Verifications"
                                        className="rounded-none border-b-2 border-transparent bg-transparent! px-0 py-3.5 data-[state=active]:border-primary"
                                    >
                                        Verifications
                                    </TabsTrigger>
                                </div>
                            </TabsList>
                            <TabsContent value="Profile" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    New UI component and variants
                                </h4>
                                <div className="mt-2">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry&apos;s
                                        standard dummy text ever since the
                                        1500s, when an unknown printer took a
                                        galley of type and scrambled it to make
                                        a type specimen book.
                                    </p>
                                </div>
                            </TabsContent>
                            <TabsContent value="Company" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    New UI component and variants
                                </h4>
                                <div className="mt-2">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Corporis consequatur
                                        aut laudantium iure, explicabo error
                                        alias. Amet quod quas, ex eveniet illum
                                        optio quia laborum natus doloribus non
                                        quibusdam harum?
                                    </p>
                                </div>
                            </TabsContent>
                            <TabsContent value="Team" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    New UI component and variants
                                </h4>
                                <div className="mt-2">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Nesciunt, fugit?
                                    </p>
                                </div>
                            </TabsContent>
                            <TabsContent value="Password" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    New UI component and variants
                                </h4>
                                <div className="mt-2">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry.
                                    </p>
                                </div>
                            </TabsContent>
                            <TabsContent value="Verifications" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    New UI component and variants
                                </h4>
                                <div className="mt-2 space-y-2">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry&apos;s
                                        standard dummy text ever since the
                                        1500s, when an unknown printer took a
                                        galley of type and scrambled it to make
                                        a type specimen book.
                                    </p>
                                    <p>
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout.
                                    </p>
                                </div>
                            </TabsContent>
                        </Card>
                    </Tabs>
                </TabsContent>

                <TabsContent
                    value="Company"
                    className="mt-4 space-y-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0"
                >
                    <Tabs defaultValue="Company">
                        <Card>
                            <TabsList className="overflow-x-auto border-b border-gray-300 dark:border-gray-700/50">
                                <div className="inline-flex gap-2.5 px-5 py-2.5 text-sm/[18px]">
                                    <TabsTrigger value="Profile">
                                        Profile
                                    </TabsTrigger>
                                    <TabsTrigger value="Company">
                                        Company
                                    </TabsTrigger>
                                    <TabsTrigger value="Password">
                                        Password
                                    </TabsTrigger>
                                    <TabsTrigger value="Verifications">
                                        Verifications
                                    </TabsTrigger>
                                </div>
                            </TabsList>
                            <TabsContent value="Company" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    New UI component and variants
                                </h4>
                                <div className="mt-2 space-y-2">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry&apos;s
                                        standard dummy text ever since the
                                        1500s, when an unknown printer took a
                                        galley of type and scrambled it to make
                                        a type specimen book.
                                    </p>
                                    <p>
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout.
                                    </p>
                                </div>
                            </TabsContent>
                            <TabsContent value="Password" className="p-5">
                                <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                    New UI component and variants
                                </h4>
                                <div className="mt-2">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry&apos;s
                                        standard dummy text ever since the
                                        1500s, when an unknown printer took a
                                        galley of type and scrambled it to make
                                        a type specimen book.
                                    </p>
                                </div>
                            </TabsContent>
                        </Card>
                    </Tabs>
                </TabsContent>
            </Tabs>
        </div>
    )
}
