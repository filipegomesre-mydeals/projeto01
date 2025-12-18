import PageHeading from '@/components/layout/page-heading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { RadioGroup, RadioGroupCheck } from '@/components/ui/radio-group'
import { Switch, SwitchOutline } from '@/components/ui/switch'
import { ArrowRight, MousePointer2, Sparkle } from 'lucide-react'

export default function PricingPlan() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Pricing Plan'} />

            <div className="min-h-[calc(100vh-160px)] space-y-5">
                <div className="rounded-lg bg-white px-3 py-[50px] dark:bg-black-dark">
                    <div className="mb-10">
                        <h2 className="font-clearface-serial mb-3 text-center text-2xl font-bold text-black md:text-4xl/[44px] lg:mb-5 dark:text-white">
                            Pricing plan
                        </h2>
                        <div className="flex justify-center gap-[30px]">
                            <label className="flex items-center gap-2.5 font-semibold leading-tight text-black dark:text-white">
                                <span>Monthly</span>
                                <SwitchOutline />
                                <span>Yearly</span>
                            </label>
                            <span className="inline-block rounded-lg bg-danger-light px-2.5 py-2 text-xs/3 font-semibold text-black">
                                15% Off
                            </span>
                        </div>
                    </div>
                    <div className="grid gap-3 text-black sm:grid-cols-2 xl:grid-cols-3 dark:text-white">
                        <div className="overflow-hidden rounded-lg bg-white shadow-3xl dark:border dark:border-gray-300/10 dark:bg-black/20 dark:shadow-sm">
                            <div className="min-h-[86px] bg-success-light px-4 py-3">
                                <h4 className="mb-1.5 font-semibold dark:text-black">
                                    Essential Plan
                                </h4>
                                <p className="text-xs/[18px] font-medium text-gray">
                                    Access fundamental features at an affordable
                                    price, perfect for those starting out.
                                </p>
                            </div>
                            <div className="space-y-5 px-3 py-5">
                                <div className="flex items-center gap-2.5">
                                    <h3 className="font-clearface-serial text-2xl font-bold md:text-3xl">
                                        $50
                                    </h3>
                                    <span className="font-medium leading-[18px] text-gray dark:text-gray-600">
                                        /month <br /> billed annually
                                    </span>
                                </div>
                                <div className="space-y-[18px] rounded-lg bg-gray-400 p-3 dark:bg-white/5">
                                    <div className="flex items-center gap-1.5">
                                        <Sparkle className="m-1 size-2.5 shrink-0 fill-black dark:fill-white" />
                                        <p className="font-medium leading-4">
                                            Basic setup
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Sparkle className="m-1 size-2.5 shrink-0 fill-black dark:fill-white" />
                                        <p className="font-medium leading-4">
                                            Limited users
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Sparkle className="m-1 size-2.5 shrink-0 fill-black dark:fill-white" />
                                        <p className="font-medium leading-4">
                                            Core features
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Sparkle className="m-1 size-2.5 shrink-0 fill-black dark:fill-white" />
                                        <p className="font-medium leading-4">
                                            Email support
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Sparkle className="m-1 size-2.5 shrink-0 fill-black dark:fill-white" />
                                        <p className="font-medium leading-4">
                                            Standard templates
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Sparkle className="m-1 size-2.5 shrink-0 fill-black dark:fill-white" />
                                        <p className="font-medium leading-4">
                                            Basic analytics
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    type="button"
                                    variant={'outline-general'}
                                    size={'large'}
                                    className="w-full"
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-lg bg-white shadow-3xl dark:border dark:border-gray-300/10 dark:bg-black/20 dark:shadow-sm">
                            <div className="min-h-[86px] bg-light-purple px-4 py-3">
                                <h4 className="mb-1.5 font-semibold text-black">
                                    Advanced Plan
                                </h4>
                                <p className="text-xs/[18px] font-medium text-gray">
                                    Unlock premium tools and support tailored
                                    for growing businesses.
                                </p>
                            </div>
                            <div className="space-y-5 px-3 py-5">
                                <div className="flex items-center justify-between gap-2.5">
                                    <div className="flex items-center gap-2.5">
                                        <h3 className="font-clearface-serial text-2xl font-bold md:text-3xl">
                                            $24
                                        </h3>
                                        <span className="font-medium leading-[18px] text-gray dark:text-gray-600">
                                            /month <br /> billed annually
                                        </span>
                                    </div>
                                    <div className="rounded-lg bg-primary px-2 py-1 text-[10px]/4 font-extrabold uppercase text-white">
                                        Most Popular
                                    </div>
                                </div>
                                <div className="space-y-[18px] rounded-lg bg-gray-400 p-3 dark:bg-white/5">
                                    <div className="flex items-center gap-1.5">
                                        <Sparkle className="m-1 size-2.5 shrink-0 fill-black dark:fill-white" />
                                        <p className="font-medium leading-4">
                                            Enhanced customization
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Sparkle className="m-1 size-2.5 shrink-0 fill-black dark:fill-white" />
                                        <p className="font-medium leading-4">
                                            More users
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Sparkle className="m-1 size-2.5 shrink-0 fill-black dark:fill-white" />
                                        <p className="font-medium leading-4">
                                            Advanced integrations
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Sparkle className="m-1 size-2.5 shrink-0 fill-black dark:fill-white" />
                                        <p className="font-medium leading-4">
                                            Priority support
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Sparkle className="m-1 size-2.5 shrink-0 fill-black dark:fill-white" />
                                        <p className="font-medium leading-4">
                                            Premium templates
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Sparkle className="m-1 size-2.5 shrink-0 fill-black dark:fill-white" />
                                        <p className="font-medium leading-4">
                                            Advanced analytics
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    type="button"
                                    variant={'black'}
                                    size={'large'}
                                    className="w-full"
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-lg bg-white shadow-3xl dark:border dark:border-gray-300/10 dark:bg-black/20 dark:shadow-sm">
                            <div className="min-h-[86px] bg-light-orange px-4 py-3 text-black">
                                <h4 className="mb-1.5 font-semibold">
                                    Elite Plan
                                </h4>
                                <p className="text-xs/[18px] font-medium text-gray">
                                    Harness top-tier solutions with scalability
                                    and personalized assistance for large
                                    enterprises.
                                </p>
                            </div>
                            <div className="space-y-5 px-3 py-5">
                                <div className="flex items-center gap-2.5">
                                    <h3 className="font-clearface-serial text-2xl font-bold md:text-3xl">
                                        Custom
                                    </h3>
                                    <span className="font-medium leading-[18px] text-gray dark:text-gray-600">
                                        pricing <br />
                                        for enterprise
                                    </span>
                                </div>
                                <div className="space-y-[18px] rounded-lg bg-gray-400 p-3 dark:bg-white/5">
                                    <div className="flex items-center gap-1.5">
                                        <Sparkle className="m-1 size-2.5 shrink-0 fill-black dark:fill-white" />
                                        <p className="font-medium leading-4">
                                            Custom setup
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Sparkle className="m-1 size-2.5 shrink-0 fill-black dark:fill-white" />
                                        <p className="font-medium leading-4">
                                            Unlimited users
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Sparkle className="m-1 size-2.5 shrink-0 fill-black dark:fill-white" />
                                        <p className="font-medium leading-4">
                                            Premium features
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Sparkle className="m-1 size-2.5 shrink-0 fill-black dark:fill-white" />
                                        <p className="font-medium leading-4">
                                            24/7 support
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Sparkle className="m-1 size-2.5 shrink-0 fill-black dark:fill-white" />
                                        <p className="font-medium leading-4">
                                            Exclusive templates
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Sparkle className="m-1 size-2.5 shrink-0 fill-black dark:fill-white" />
                                        <p className="font-medium leading-4">
                                            Personalized insights
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    type="button"
                                    variant={'outline-general'}
                                    size={'large'}
                                    className="w-full"
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-10 rounded-lg bg-white p-7 lg:p-[50px] dark:bg-black-dark">
                    <div className="mx-auto">
                        <h2 className="font-clearface-serial mb-2.5 text-center text-2xl font-bold text-black md:text-4xl/[44px] dark:text-white">
                            Choose flexible pricing plan for your team
                        </h2>
                        <p className="mx-auto w-full max-w-[600px] text-center font-medium text-gray dark:text-gray-600">
                            Choose the pricing plan that works best for your
                            business, whether you&apos;re looking for casual
                            transections or flexible customizations.
                        </p>
                    </div>
                    <div className="text-center">
                        <RadioGroup
                            defaultValue="Monthly"
                            className="inline-flex items-center justify-center gap-0 divide-x divide-gray-300 rounded-full border border-gray-300 dark:divide-gray-700 dark:border-gray-700"
                        >
                            <label className="inline-flex items-center gap-1.5 p-2.5 font-semibold leading-tight text-black dark:text-white">
                                <RadioGroupCheck value="Monthly" />
                                Monthly
                            </label>
                            <label className="inline-flex items-center gap-1.5 p-2.5 font-semibold leading-tight text-black dark:text-white">
                                <RadioGroupCheck value="Yearly" />
                                Yearly
                            </label>
                        </RadioGroup>
                    </div>
                    <div className="grid gap-5 text-black sm:grid-cols-2 xl:grid-cols-3">
                        <Card className="divide-y divide-gray-300 p-5 dark:divide-gray-300/20 dark:border dark:border-gray-700/50">
                            <div className="space-y-5 pb-5">
                                <Badge
                                    variant={'blue'}
                                    className="bg-light-theme py-1.5 text-sm/none text-primary"
                                >
                                    Starter Plan
                                </Badge>
                                <div className="flex items-center gap-0.5">
                                    <h3 className="font-clearface-serial text-2xl font-bold md:text-3xl dark:text-white">
                                        $50
                                    </h3>
                                    <span className="text-base font-semibold leading-[18px] text-gray dark:text-gray-600">
                                        /month
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-5 pt-5">
                                <div className="space-y-[18px] rounded-lg">
                                    <div className="flex gap-1.5">
                                        <MousePointer2 className="size-4 shrink-0 rotate-90 text-primary" />
                                        <p className="font-medium leading-4 text-gray dark:text-gray-600">
                                            Simple setup
                                        </p>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <MousePointer2 className="size-4 shrink-0 rotate-90 text-primary" />
                                        <p className="font-medium leading-4 text-gray dark:text-gray-600">
                                            Up to 5 users
                                        </p>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <MousePointer2 className="size-4 shrink-0 rotate-90 text-primary" />
                                        <p className="font-medium leading-4 text-gray dark:text-gray-600">
                                            Basic tools
                                        </p>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <MousePointer2 className="size-4 shrink-0 rotate-90 text-primary" />
                                        <p className="font-medium leading-4 text-gray dark:text-gray-600">
                                            Community support
                                        </p>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <MousePointer2 className="size-4 shrink-0 rotate-90 text-primary" />
                                        <p className="font-medium leading-4 text-gray dark:text-gray-600">
                                            Starter templates
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    type="button"
                                    variant={'black'}
                                    size={'large'}
                                    className="w-full justify-between"
                                >
                                    <span>Choose Basic</span>
                                    <ArrowRight className="size-[18px]! shrink-0 rtl:rotate-180" />
                                </Button>
                            </div>
                        </Card>
                        <Card className="divide-y divide-gray-300 bg-linear-to-t from-light-theme via-transparent to-light-theme p-5 dark:divide-gray-300/20 dark:border dark:border-gray-700/50 dark:from-black dark:to-black-dark">
                            <div className="space-y-5 pb-5">
                                <Badge
                                    variant={'primary'}
                                    className="py-1.5 text-sm/none"
                                >
                                    Professional Plan
                                </Badge>
                                <div className="flex items-center gap-0.5">
                                    <h3 className="font-clearface-serial text-2xl font-bold md:text-3xl dark:text-white">
                                        $50
                                    </h3>
                                    <span className="text-base font-semibold leading-[18px] text-gray dark:text-gray-600">
                                        /month
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-5 pt-5">
                                <div className="space-y-[18px] rounded-lg">
                                    <div className="flex gap-1.5">
                                        <MousePointer2 className="size-4 shrink-0 rotate-90 text-primary" />
                                        <p className="font-medium leading-4 text-gray dark:text-gray-600">
                                            Advanced customization
                                        </p>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <MousePointer2 className="size-4 shrink-0 rotate-90 text-primary" />
                                        <p className="font-medium leading-4 text-gray dark:text-gray-600">
                                            Up to 20 users
                                        </p>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <MousePointer2 className="size-4 shrink-0 rotate-90 text-primary" />
                                        <p className="font-medium leading-4 text-gray dark:text-gray-600">
                                            Professional tools and integrations
                                        </p>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <MousePointer2 className="size-4 shrink-0 rotate-90 text-primary" />
                                        <p className="font-medium leading-4 text-gray dark:text-gray-600">
                                            Email and chat support
                                        </p>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <MousePointer2 className="size-4 shrink-0 rotate-90 text-primary" />
                                        <p className="font-medium leading-4 text-gray dark:text-gray-600">
                                            Professional templates
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    type="button"
                                    variant={'black'}
                                    size={'large'}
                                    className="w-full justify-between"
                                >
                                    <span>Choose Professional</span>
                                    <ArrowRight className="size-[18px]! shrink-0 rtl:rotate-180" />
                                </Button>
                            </div>
                        </Card>
                        <Card className="divide-y divide-gray-300 p-5 dark:divide-gray-300/20 dark:border dark:border-gray-700/50">
                            <div className="space-y-5 pb-5">
                                <Badge
                                    variant={'blue'}
                                    className="bg-light-theme py-1.5 text-sm/none text-primary"
                                >
                                    Ultimate Plan
                                </Badge>
                                <div className="flex items-center gap-0.5">
                                    <h3 className="font-clearface-serial text-2xl font-bold md:text-3xl dark:text-white">
                                        $50
                                    </h3>
                                    <span className="text-base font-semibold leading-[18px] text-gray dark:text-gray-600">
                                        /month
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-5 pt-5">
                                <div className="space-y-[18px] rounded-lg">
                                    <div className="flex gap-1.5">
                                        <MousePointer2 className="size-4 shrink-0 rotate-90 text-primary" />
                                        <p className="font-medium leading-4 text-gray dark:text-gray-600">
                                            Full customization
                                        </p>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <MousePointer2 className="size-4 shrink-0 rotate-90 text-primary" />
                                        <p className="font-medium leading-4 text-gray dark:text-gray-600">
                                            Unlimited users
                                        </p>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <MousePointer2 className="size-4 shrink-0 rotate-90 text-primary" />
                                        <p className="font-medium leading-4 text-gray dark:text-gray-600">
                                            All premium features
                                        </p>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <MousePointer2 className="size-4 shrink-0 rotate-90 text-primary" />
                                        <p className="font-medium leading-4 text-gray dark:text-gray-600">
                                            Dedicated support team
                                        </p>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <MousePointer2 className="size-4 shrink-0 rotate-90 text-primary" />
                                        <p className="font-medium leading-4 text-gray dark:text-gray-600">
                                            Custom template
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    type="button"
                                    variant={'black'}
                                    size={'large'}
                                    className="w-full justify-between"
                                >
                                    <span>Choose Ultimate</span>
                                    <ArrowRight className="size-[18px]! shrink-0 rtl:rotate-180" />
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
