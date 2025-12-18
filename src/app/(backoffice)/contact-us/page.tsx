import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { MapPin, MessagesSquareIcon, Phone } from 'lucide-react'
import Image from 'next/image'
import 'react-quill-new/dist/quill.snow.css'
import Link from 'next/link'
import { Textarea } from '@/components/ui/textarea'
import CountryField from '@/components/custom/country-field'
import { Checkbox } from '@/components/ui/checkbox'

const ContactUs = () => {
    return (
        <div className="min-h-[calc(100vh-96px)] w-full">
            <div className="grid gap-4 xl:grid-cols-2">
                <Card className="p-4 shadow-sm">
                    <CardHeader className="space-y-2.5">
                        <h2 className="text-xl/tight font-semibold text-black dark:text-white">
                            Contact our friendly team
                        </h2>
                        <p className="text-xs font-medium text-gray sm:text-sm/6 dark:text-gray-600">
                            Got any questions about the product or scaling on
                            our platform? We&apos;re here to help. Chat to our
                            friendly team 24/7 and get onboard in less than 5
                            minutes.
                        </p>
                    </CardHeader>
                    <CardContent className="mt-5 space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                            <Card className="flex items-start gap-2.5 p-4 dark:border dark:border-gray-700/50">
                                <MessagesSquareIcon className="size-[18px] shrink-0 text-black dark:text-white" />
                                <div className="font-semibold text-black dark:text-white">
                                    <h3 className="leading-none">
                                        Chat to sales
                                    </h3>
                                    <p className="mb-4 mt-2.5 text-xs/tight font-medium text-gray dark:text-gray-500">
                                        Speak to our friendly team.
                                    </p>
                                    <Link
                                        href="mailto:sales@nexadash.com"
                                        className="block leading-none underline underline-offset-[3px] transition hover:text-primary"
                                    >
                                        sales@nexadash.com
                                    </Link>
                                </div>
                            </Card>
                            <Card className="flex items-start gap-2.5 p-4 dark:border dark:border-gray-700/50">
                                <MessagesSquareIcon className="size-[18px] shrink-0 text-black dark:text-white" />
                                <div className="font-semibold text-black dark:text-white">
                                    <h3 className="leading-none">
                                        Chat to support
                                    </h3>
                                    <p className="mb-4 mt-2.5 text-xs/tight font-medium text-gray dark:text-gray-500">
                                        We&apos;re here to help.
                                    </p>
                                    <Link
                                        href="mailto:support@nexadash.com"
                                        className="block leading-none underline underline-offset-[3px] transition hover:text-primary"
                                    >
                                        support@nexadash.com
                                    </Link>
                                </div>
                            </Card>
                            <Card className="flex items-start gap-2.5 p-4 dark:border dark:border-gray-700/50">
                                <MapPin className="size-[18px] shrink-0 text-black dark:text-white" />
                                <div className="font-semibold text-black dark:text-white">
                                    <h3 className="leading-none">Visit us</h3>
                                    <p className="mb-4 mt-2.5 text-xs/tight font-medium text-gray dark:text-gray-500">
                                        Visit our office HQ.
                                    </p>
                                    <p className="leading-none">
                                        15, Elliot Avenue, NY
                                    </p>
                                </div>
                            </Card>
                            <Card className="flex items-start gap-2.5 p-4 dark:border dark:border-gray-700/50">
                                <Phone className="size-[18px] shrink-0 text-black dark:text-white" />
                                <div className="font-semibold text-black dark:text-white">
                                    <h3 className="leading-none">Call us</h3>
                                    <p className="mb-4 mt-2.5 text-xs/tight font-medium text-gray dark:text-gray-500">
                                        Mon-Fri from 8am to 6pm.
                                    </p>
                                    <Link
                                        href="tel:+1 312-718-1914"
                                        className="block leading-none transition hover:text-primary"
                                    >
                                        +1 312-718-1914
                                    </Link>
                                </div>
                            </Card>
                        </div>
                        <div>
                            <Image
                                src="/images/contact-us.svg"
                                width={236}
                                height={236}
                                alt="Contact Us"
                                className="mx-auto"
                            />
                        </div>
                    </CardContent>
                </Card>

                <Card className="p-4 shadow-sm">
                    <form className="space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div className="space-y-2.5">
                                <label className="block font-medium leading-tight text-black dark:text-white">
                                    First name
                                    <span className="text-primary">*</span>
                                </label>
                                <Input type="text" placeholder="Nichole" />
                            </div>
                            <div className="space-y-2.5">
                                <label className="block font-medium leading-tight text-black dark:text-white">
                                    Last name
                                    <span className="text-primary">*</span>
                                </label>
                                <Input type="text" placeholder="Coyle" />
                            </div>
                        </div>
                        <div className="space-y-2.5">
                            <label className="block font-medium leading-tight text-black dark:text-white">
                                Email
                                <span className="text-primary">*</span>
                            </label>
                            <Input
                                type="email"
                                placeholder="NicholeJCoyle@gmail.com"
                            />
                        </div>
                        <div className="space-y-2.5">
                            <label className="block font-medium leading-tight text-black dark:text-white">
                                Phone number
                                <span className="text-primary">*</span>
                            </label>
                            <CountryField />
                        </div>
                        <div className="space-y-2.5">
                            <label className="block font-medium leading-tight text-black dark:text-white">
                                Message
                                <span className="text-primary">*</span>
                            </label>
                            <Textarea
                                rows={4}
                                placeholder="Type message here"
                            />
                        </div>
                        <h3 className="font-semibold leading-tight text-black dark:text-white">
                            Services
                        </h3>
                        <div className="flex flex-wrap items-start gap-4 sm:gap-5">
                            <div className="w-full max-w-44 space-y-4">
                                <label className="flex items-center gap-2.5 font-semibold leading-tight text-black dark:text-white">
                                    <Checkbox />
                                    <span className="line-clamp-2">
                                        Website Design
                                    </span>
                                </label>
                                <label className="flex items-center gap-2.5 font-semibold leading-tight text-black dark:text-white">
                                    <Checkbox />
                                    <span className="line-clamp-2">
                                        UX Design
                                    </span>
                                </label>
                                <label className="flex items-center gap-2.5 font-semibold leading-tight text-black dark:text-white">
                                    <Checkbox />
                                    <span className="line-clamp-2">
                                        User Interface Design
                                    </span>
                                </label>
                            </div>
                            <div className="w-full max-w-44 space-y-4">
                                <label className="flex items-center gap-2.5 font-semibold leading-tight text-black dark:text-white">
                                    <Checkbox />
                                    <span className="line-clamp-2">
                                        Content Creator
                                    </span>
                                </label>
                                <label className="flex items-center gap-2.5 font-semibold leading-tight text-black dark:text-white">
                                    <Checkbox />
                                    <span className="line-clamp-2">
                                        Digital Marketing
                                    </span>
                                </label>
                                <label className="flex items-center gap-2.5 font-semibold leading-tight text-black dark:text-white">
                                    <Checkbox />
                                    <span className="line-clamp-2">Other</span>
                                </label>
                            </div>
                        </div>
                        <Button type="submit" variant={'black'} size={'large'}>
                            Send Message
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    )
}
export default ContactUs
