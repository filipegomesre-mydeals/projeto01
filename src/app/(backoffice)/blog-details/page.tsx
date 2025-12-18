import PageHeading from '@/components/layout/page-heading'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogDetails() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Blog Details'} />

            <div className="min-h-[calc(100vh-160px)] w-full rounded-lg bg-white p-4 dark:bg-black-dark">
                <div className="mx-auto w-full max-w-[748px] font-medium">
                    <div className="h-52 max-h-[300px] w-full max-w-[600px] overflow-hidden rounded-lg sm:h-auto">
                        <Image
                            src="/images/blog-details.png"
                            alt="blog-img"
                            width={600}
                            height={300}
                            className="h-full w-full object-cover"
                        ></Image>
                    </div>
                    <h2 className="mt-[30px] text-xl font-semibold text-black sm:text-2xl lg:text-[28px]/relaxed dark:text-white">
                        A-Z Guide to Cold Emailing: Definition, Use Cases, and
                        Writing Tips in 2024
                    </h2>
                    <Card className="mt-5 inline-flex flex-wrap items-center gap-2.5 p-2.5 pr-5 sm:gap-0 sm:rounded-full dark:border dark:border-gray-700">
                        <div className="flex items-center gap-2.5">
                            <Image
                                src="/images/blog-avatar.svg"
                                alt="blog-avatar"
                                width={40}
                                height={40}
                                className="shrink-0 rounded-full"
                            ></Image>
                            <div className="space-y-1.5 whitespace-nowrap">
                                <h3 className="leading-tight text-black dark:text-white">
                                    Theresa Webb
                                </h3>
                                <p className="text-xs/tight">January 6, 2024</p>
                            </div>
                        </div>
                        <span className="mx-5 hidden w-px rounded-lg bg-gray-300 py-[15px] sm:block" />
                        <Badge variant={'purple'}>Professional Service</Badge>
                        <span className="mx-3 hidden size-1 rounded-full bg-primary sm:block" />
                        <p className="leading-tight">5 minute read</p>
                    </Card>
                    <div className="my-[30px] space-y-5">
                        <p className="leading-tight">
                            Cold emails are emails sent to potential clients or
                            connections with whom you have no prior
                            relationship.
                        </p>
                        <p className="leading-[26px]">
                            When done right, cold emailing helps you generate
                            leads, build networks, hire top talents, and open
                            new business opportunities.
                        </p>
                    </div>
                    <div className="space-y-5 leading-tight">
                        <h3>
                            But, a lot of people crafting and sending cold
                            emails struggle to know:
                        </h3>
                        <ul className="list-disc space-y-2.5 italic ltr:pl-6 rtl:pr-6">
                            <li>How to define & find your ICP?</li>
                            <li>How to find their verified contacts?</li>
                            <li>How to write cold emails that get replies?</li>
                            <li>How to avoid landing in the spam folder?</li>
                            <li>Which cold emailing software to use?</li>
                        </ul>
                        <p className="leading-[26px]">
                            In this guide, we&apos;ll cover what cold emailing
                            is, why it&apos;s important, and how to do it
                            effectively. You&apos;ll learn about the challenges
                            and tips to creating an email that stands out in a
                            busy inbox and gets replies!
                        </p>
                    </div>
                    <div className="my-[30px] space-y-5 leading-[26px]">
                        <h3 className="text-xl font-semibold text-black sm:text-2xl lg:text-[28px]/9 dark:text-white">
                            What does cold email mean?
                        </h3>
                        <p>
                            <span className="font-semibold">
                                A cold email is a first-time email sent to a
                                recipient without prior contact.
                            </span>
                            Unlike spam, a well-crafted cold email is targeted,
                            personalized, and intended for sales, recruiting,
                            growth, or networking purposes. It&apos;s a
                            modern-day equivalent of a cold call but less
                            intrusive.
                        </p>
                        <p>
                            The effectiveness of a cold email depends on its
                            relevance. It&apos;s not about sending a generic
                            message to a vast list of emails. Instead, it&apos;s
                            about doing research, understanding the
                            recipient&apos;s needs or interests, and tailoring
                            your message.
                        </p>
                        <p>
                            <span className="font-semibold">
                                Despite many{' '}
                                <Link
                                    href="/blog-list"
                                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                                >
                                    cold emailing myths
                                </Link>
                                , cold emailing remains a highly effective,
                                cheap, and scalable way to increase your
                                business&apos;s revenue.
                            </span>{' '}
                            You can test it out in any department to get new
                            customers, hire top talents, or open new business
                            opportunities!
                        </p>
                    </div>
                    <div className="space-y-5 leading-tight">
                        <h3 className="text-lg/6 font-semibold text-black lg:text-2xl/tight dark:text-white">
                            What is the best cold email?
                        </h3>
                        <p>
                            Here&apos;s an example of a successful cold email
                            that got over 70% conversion rate and its key
                            elements:
                        </p>
                    </div>
                    <div className="my-[30px] space-y-5 leading-tight">
                        <h3 className="text-lg/snug font-semibold text-black dark:text-white">
                            Does cold emailing work anymore?
                        </h3>
                        <p className="leading-[26px]">
                            Cold emails work effectively when they are targeted,
                            personalized, clear, and part of a well-thought
                            sales strategy.
                        </p>
                        <p className="font-semibold">
                            Here are 5 best practices that will make your cold
                            outreach effective and help you get results:
                        </p>
                    </div>
                    <ol
                        type="1"
                        className="list-decimal space-y-[30px] leading-[26px] marker:text-base/5 marker:font-semibold marker:text-black ltr:pl-4 rtl:pr-4 dark:marker:text-white"
                    >
                        <li className="space-y-2.5">
                            <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                Find target audience
                            </h4>
                            <p className="-ml-4">
                                Cold emails can be effective when they are
                                highly targeted. This means understanding the
                                recipient&apos;s industry, role, and potential
                                needs, and then crafting an email that speaks
                                directly to those factors.
                            </p>
                        </li>
                        <li className="space-y-2.5">
                            <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                Personalize
                            </h4>
                            <p className="-ml-4">
                                A key element of successful cold emails is{' '}
                                <Link
                                    href="/blog-list"
                                    className="text-primary underline underline-offset-[3px] hover:text-primary/80"
                                >
                                    personalization
                                </Link>
                                . This goes beyond just using the
                                recipient&apos;s name; it involves tailoring the
                                message to address their specific challenges or
                                interests.
                            </p>
                        </li>
                        <li className="space-y-2.5">
                            <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                Offer a clear value proposition
                            </h4>
                            <p className="-ml-4">
                                The effectiveness of a cold email is often tied
                                to its clarity. As the majority of recipients
                                first scan cold emails, they are more likely to
                                engage with the ones that get to the point
                                quickly and offer a clear value proposition.
                            </p>
                        </li>
                        <li className="space-y-2.5">
                            <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                Follow-up
                            </h4>
                            <p className="-ml-4">
                                Persistence in cold outreach pays off! Follow-up
                                emails, when done respectfully and increasing
                                the value, can boost the chances of getting a
                                reply.
                            </p>
                        </li>
                        <li className="space-y-2.5">
                            <h4 className="text-base/5 font-semibold text-black dark:text-white">
                                Track right metrics
                            </h4>
                            <p className="-ml-4">
                                The success of cold emails should be measured
                                not just by open or response rates, but also by
                                the quality of the interactions they initiate
                                (e.g., established connections, closed deals)
                            </p>
                        </li>
                    </ol>
                    <div className="my-[30px]">
                        <Image
                            src="/images/code.svg"
                            alt="code"
                            width={455}
                            height={102}
                            className="rounded-lg dark:bg-white"
                        ></Image>
                    </div>
                    <div className="space-y-5">
                        <h3 className="text-base/5 font-semibold text-black dark:text-white">
                            Related Blogs
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="relative">
                                <Link
                                    href="/blog-details"
                                    className="block h-52 overflow-hidden rounded-lg"
                                >
                                    <Image
                                        src="/images/boy-sketch.png"
                                        alt="boy-sketch"
                                        width={366}
                                        height={200}
                                        className="h-full w-full object-cover object-top duration-300 hover:scale-105"
                                    ></Image>
                                </Link>
                                <div className="mt-5 inline-flex items-center gap-3">
                                    <Badge variant={'purple'}>
                                        Professional Service
                                    </Badge>
                                    <span className="size-1 rounded-full bg-primary"></span>
                                    <p>5 minute read</p>
                                </div>
                                <div className="mt-3 space-y-1.5">
                                    <Link
                                        href="/blog-details"
                                        className="font-semibold leading-tight text-black duration-300 hover:text-primary dark:text-white inline-flex"
                                    >
                                        What is the best time of the day to send
                                        cold emails?
                                    </Link>
                                    <p className="line-clamp-2 text-xs/normal">
                                        According to our analysis of millions of
                                        cold outreach campaigns, the best time
                                        of day to send cold emails is...
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <Link
                                    href="/blog-details"
                                    className="block h-52 overflow-hidden rounded-lg"
                                >
                                    <Image
                                        src="/images/couple.png"
                                        alt="couple"
                                        width={366}
                                        height={200}
                                        className="h-full w-full object-cover object-top duration-300 hover:scale-105"
                                    ></Image>
                                </Link>
                                <div className="mt-5 inline-flex items-center gap-3">
                                    <Badge variant={'purple'}>
                                        Project Management
                                    </Badge>
                                    <span className="size-1 rounded-full bg-primary"></span>
                                    <p>5 minute read</p>
                                </div>
                                <div className="mt-3 space-y-1.5">
                                    <Link
                                        href="/blog-details"
                                        className="font-semibold leading-tight text-black duration-300 hover:text-primary dark:text-white inline-flex"
                                    >
                                        How many times should you follow up on a
                                        cold email?
                                    </Link>
                                    <p className="line-clamp-2 text-xs/normal">
                                        In cold sales outreach, you should be
                                        sending something between 4-9 follow-up
                                        emails.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
