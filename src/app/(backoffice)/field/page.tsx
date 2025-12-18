import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'

export default function FieldPage() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Field'} />

            <div className="grid gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Field
                    </CardTitle>
                    <CardContent className="relative grow px-2.5 py-4 sm:px-4 lg:py-6">
                        <form>
                            <FieldGroup>
                                <FieldSet>
                                    <FieldLegend>Payment Method</FieldLegend>
                                    <FieldDescription className="text-sm">
                                        All transactions are secure and
                                        encrypted
                                    </FieldDescription>
                                    <FieldSeparator />
                                    <FieldGroup>
                                        <Field>
                                            <FieldLabel>
                                                Name on Card
                                            </FieldLabel>
                                            <Input
                                                placeholder="Evil Rabbit"
                                                required
                                            />
                                        </Field>
                                        <Field>
                                            <FieldLabel>Card Number</FieldLabel>
                                            <Input
                                                placeholder="1234 5678 9012 3456"
                                                required
                                            />
                                            <FieldDescription>
                                                Enter your 16-digit card number
                                            </FieldDescription>
                                        </Field>
                                        <div className="grid grid-cols-3 gap-4">
                                            <Field>
                                                <FieldLabel htmlFor="month">
                                                    Month
                                                </FieldLabel>
                                                <Select>
                                                    <SelectTrigger id="month">
                                                        <SelectValue placeholder="MM" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {[...Array(12)].map(
                                                            (_, index) => {
                                                                const value = (
                                                                    index + 1
                                                                )
                                                                    .toString()
                                                                    .padStart(
                                                                        2,
                                                                        '0',
                                                                    )
                                                                return (
                                                                    <SelectItem
                                                                        key={
                                                                            value
                                                                        }
                                                                        value={
                                                                            value
                                                                        }
                                                                    >
                                                                        {value}
                                                                    </SelectItem>
                                                                )
                                                            },
                                                        )}
                                                    </SelectContent>
                                                </Select>
                                            </Field>
                                            <Field>
                                                <FieldLabel>Year</FieldLabel>
                                                <Select defaultValue="">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="YYYY" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="2024">
                                                            2024
                                                        </SelectItem>
                                                        <SelectItem value="2025">
                                                            2025
                                                        </SelectItem>
                                                        <SelectItem value="2026">
                                                            2026
                                                        </SelectItem>
                                                        <SelectItem value="2027">
                                                            2027
                                                        </SelectItem>
                                                        <SelectItem value="2028">
                                                            2028
                                                        </SelectItem>
                                                        <SelectItem value="2029">
                                                            2029
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </Field>
                                            <Field>
                                                <FieldLabel>CVV</FieldLabel>
                                                <Input
                                                    placeholder="123"
                                                    required
                                                />
                                            </Field>
                                        </div>
                                    </FieldGroup>
                                </FieldSet>
                                <FieldSeparator />
                                <FieldSet>
                                    <FieldDescription>
                                        The billing address associated with your
                                        payment method
                                    </FieldDescription>
                                    <FieldGroup>
                                        <Field orientation="horizontal">
                                            <Checkbox
                                                id="ShippingAddress"
                                                defaultChecked
                                            />
                                            <FieldLabel
                                                htmlFor="ShippingAddress"
                                                className="font-normal"
                                            >
                                                Same as shipping address
                                            </FieldLabel>
                                        </Field>
                                    </FieldGroup>
                                </FieldSet>
                                <Field
                                    orientation="horizontal"
                                    className="justify-end"
                                >
                                    <Button
                                        type="button"
                                        variant="outline-general"
                                        size={'large'}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant={'black'}
                                        size={'large'}
                                    >
                                        Submit
                                    </Button>
                                </Field>
                            </FieldGroup>
                        </form>
                    </CardContent>
                </Card>
                <div className="grid gap-4 lg:gap-6">
                    <Card className="flex flex-col">
                        <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Input
                        </CardTitle>
                        <CardContent className="relative grow px-2.5 py-4 sm:px-4 lg:py-6">
                            <FieldSet>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel>Username</FieldLabel>
                                        <Input
                                            type="text"
                                            placeholder="John Doe"
                                        />
                                        <FieldDescription>
                                            Choose a unique username for your
                                            account.
                                        </FieldDescription>
                                    </Field>
                                    <Field>
                                        <FieldLabel>Password</FieldLabel>
                                        <FieldDescription>
                                            Must be at least 8 characters long.
                                        </FieldDescription>
                                        <Input
                                            type="password"
                                            placeholder="********"
                                            className="ltr:pr-9 rtl:pl-9"
                                        />
                                    </Field>
                                </FieldGroup>
                            </FieldSet>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col">
                        <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Fieldset
                        </CardTitle>
                        <CardContent className="relative grow px-2.5 py-4 sm:px-4 lg:py-6">
                            <FieldSet>
                                <FieldLegend>Address Information</FieldLegend>
                                <FieldDescription className="text-sm">
                                    We need your address to deliver your order.
                                </FieldDescription>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel>Street Address</FieldLabel>
                                        <Input
                                            type="text"
                                            placeholder="123 Main St"
                                        />
                                    </Field>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Field>
                                            <FieldLabel>City</FieldLabel>
                                            <Input
                                                type="text"
                                                placeholder="New York"
                                            />
                                        </Field>
                                        <Field>
                                            <FieldLabel>Zip Code</FieldLabel>
                                            <Input
                                                type="text"
                                                placeholder="60131"
                                            />
                                        </Field>
                                    </div>
                                </FieldGroup>
                            </FieldSet>
                        </CardContent>
                    </Card>
                </div>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Responsive Layout
                    </CardTitle>
                    <CardContent className="relative grow px-2.5 py-4 sm:px-4 lg:py-6">
                        <FieldSet>
                            <FieldLegend>Profile</FieldLegend>
                            <FieldDescription>
                                Fill in your profile information.
                            </FieldDescription>
                            <FieldSeparator />
                            <FieldGroup>
                                <Field orientation="responsive">
                                    <FieldContent>
                                        <FieldLabel htmlFor="name">
                                            Name
                                        </FieldLabel>
                                        <FieldDescription>
                                            Provide your full name for
                                            identification
                                        </FieldDescription>
                                    </FieldContent>
                                    <Input
                                        id="name"
                                        placeholder="Evil Rabbit"
                                        required
                                    />
                                </Field>
                                <FieldSeparator />
                                <Field orientation="responsive">
                                    <FieldContent>
                                        <FieldLabel htmlFor="lastName">
                                            Message
                                        </FieldLabel>
                                        <FieldDescription>
                                            You can write your message here.
                                            Keep it short, preferably under 100
                                            characters.
                                        </FieldDescription>
                                    </FieldContent>
                                    <Textarea
                                        id="message"
                                        placeholder="Hello, world!"
                                        required
                                        className="min-h-[100px] resize-none sm:min-w-[300px]"
                                    />
                                </Field>
                                <FieldSeparator />
                                <Field orientation="responsive">
                                    <Button type="submit" variant={'black'}>
                                        Submit
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline-general"
                                    >
                                        Cancel
                                    </Button>
                                </Field>
                            </FieldGroup>
                        </FieldSet>
                    </CardContent>
                </Card>
                <div className="grid gap-4 lg:gap-6 xl:col-span-3 xl:grid-cols-3">
                    <Card className="flex flex-col">
                        <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Textarea
                        </CardTitle>
                        <CardContent className="relative grow px-2.5 py-4 sm:px-4 lg:py-6">
                            <FieldSet>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel>Message</FieldLabel>
                                        <Textarea
                                            placeholder="Your message helps us improve..."
                                            rows={3}
                                        />
                                        <FieldDescription>
                                            Share your thoughts about our
                                            service.
                                        </FieldDescription>
                                    </Field>
                                </FieldGroup>
                            </FieldSet>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col">
                        <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Select
                        </CardTitle>
                        <CardContent className="relative grow px-2.5 py-4 sm:px-4 lg:py-6">
                            <Field>
                                <FieldLabel>Department</FieldLabel>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choose department" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="sales">
                                            Sales
                                        </SelectItem>
                                        <SelectItem value="support">
                                            Customer Support
                                        </SelectItem>
                                        <SelectItem value="hr">
                                            Human Resources
                                        </SelectItem>
                                        <SelectItem value="finance">
                                            Finance
                                        </SelectItem>
                                        <SelectItem value="operations">
                                            Operations
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FieldDescription>
                                    Select your department or area of work.
                                </FieldDescription>
                            </Field>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col">
                        <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                            Slider
                        </CardTitle>
                        <CardContent className="relative grow px-2.5 py-4 sm:px-4 lg:py-6">
                            <Field>
                                <FieldTitle>Price Range</FieldTitle>
                                <FieldDescription>
                                    Set your budget range ($
                                    <span className="font-medium">0</span>-
                                    <span className="font-medium">100</span>
                                    ).
                                </FieldDescription>
                                <Slider
                                    className="mt-5"
                                    defaultValue={[25, 75]}
                                />
                            </Field>
                        </CardContent>
                    </Card>
                </div>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Checkbox
                    </CardTitle>
                    <CardContent className="relative grow px-2.5 py-4 sm:px-4 lg:py-6">
                        <FieldGroup>
                            <FieldSet>
                                <FieldLegend>Notifications from us</FieldLegend>
                                <FieldDescription>
                                    Receive the latest news, updates and
                                    industry tutorials from us.
                                </FieldDescription>
                                <FieldGroup className="gap-3">
                                    <FieldLabel className="font-normal">
                                        <Checkbox />
                                        News and updates
                                    </FieldLabel>
                                    <FieldLabel className="font-normal">
                                        <Checkbox />
                                        Tutorials
                                    </FieldLabel>
                                    <FieldLabel className="font-normal">
                                        <Checkbox />
                                        Events
                                    </FieldLabel>
                                    <FieldLabel className="font-normal">
                                        <Checkbox />
                                        Forums
                                    </FieldLabel>
                                    <FieldLabel className="font-normal">
                                        <Checkbox />
                                        Jobs and openings
                                    </FieldLabel>
                                </FieldGroup>
                            </FieldSet>
                        </FieldGroup>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Radio
                    </CardTitle>
                    <CardContent className="relative grow px-2.5 py-4 sm:px-4 lg:py-6">
                        <FieldGroup>
                            <FieldSet>
                                <FieldLegend>Reminders</FieldLegend>
                                <FieldDescription>
                                    Notifications for your post comments and
                                    replies.
                                </FieldDescription>
                                <RadioGroup defaultValue="monthly">
                                    <Field orientation="horizontal">
                                        <span className="mt-px">
                                            <RadioGroupItem
                                                value="notify"
                                                id="Notify"
                                            />
                                        </span>
                                        <FieldLabel
                                            htmlFor="Notify"
                                            className="font-normal"
                                        >
                                            Do not notify me
                                        </FieldLabel>
                                    </Field>
                                    <Field orientation="horizontal">
                                        <span className="mt-px">
                                            <RadioGroupItem
                                                value="reminders"
                                                id="Reminders"
                                            />
                                        </span>
                                        <FieldLabel
                                            htmlFor="Reminders"
                                            className="font-normal"
                                        >
                                            Important reminders only
                                        </FieldLabel>
                                    </Field>
                                    <Field orientation="horizontal">
                                        <span className="mt-px">
                                            <RadioGroupItem
                                                value="mentions"
                                                id="Mentions"
                                            />
                                        </span>
                                        <FieldLabel
                                            htmlFor="Mentions"
                                            className="font-normal"
                                        >
                                            Mentions only
                                        </FieldLabel>
                                    </Field>
                                    <Field orientation="horizontal">
                                        <span className="mt-px">
                                            <RadioGroupItem
                                                value="all"
                                                id="AllReminders"
                                            />
                                        </span>
                                        <FieldLabel
                                            htmlFor="AllReminders"
                                            className="font-normal"
                                        >
                                            All reminders
                                        </FieldLabel>
                                    </Field>
                                </RadioGroup>
                            </FieldSet>
                        </FieldGroup>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Switch
                    </CardTitle>
                    <CardContent className="relative grow px-2.5 py-4 sm:px-4 lg:py-6">
                        <FieldGroup>
                            <Field orientation="horizontal">
                                <FieldContent>
                                    <FieldLabel htmlFor="2fa">
                                        Two-factor authentication
                                    </FieldLabel>
                                    <FieldDescription>
                                        Enable two-factor authentication. If you
                                        do not have a two-factor device, you can
                                        use a one-time code sent to your email.
                                    </FieldDescription>
                                </FieldContent>
                                <Switch id="2fa" />
                            </Field>
                            <Field orientation="horizontal">
                                <FieldContent>
                                    <FieldLabel htmlFor="MultiFA">
                                        Multi-factor authentication
                                    </FieldLabel>
                                    <FieldDescription>
                                        Enable multi-factor authentication. If
                                        you do not have a two-factor device, you
                                        can use a one-time code sent to your
                                        email.
                                    </FieldDescription>
                                </FieldContent>
                                <Switch id="MultiFA" />
                            </Field>
                            <Field orientation="horizontal">
                                <FieldContent>
                                    <FieldLabel htmlFor="DisableSecurity">
                                        Disable security
                                    </FieldLabel>
                                    <FieldDescription>
                                        Disable security features to improve
                                        performance.
                                    </FieldDescription>
                                </FieldContent>
                                <Switch id="DisableSecurity" />
                            </Field>
                        </FieldGroup>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Field Group
                    </CardTitle>
                    <CardContent className="relative grow px-2.5 py-4 sm:px-4 lg:py-6">
                        <FieldGroup className="gap-4">
                            <FieldSet>
                                <FieldLabel>Responses</FieldLabel>
                                <FieldDescription>
                                    Get notified when ChatGPT responds to
                                    requests that take time, like research or
                                    image generation.
                                </FieldDescription>
                                <FieldGroup data-slot="checkbox-group">
                                    <Field orientation="horizontal">
                                        <Checkbox
                                            defaultChecked
                                            disabled
                                            id="PushNotifications"
                                        />
                                        <FieldLabel
                                            htmlFor="PushNotifications"
                                            className="w-fit font-normal"
                                        >
                                            Push notifications
                                        </FieldLabel>
                                    </Field>
                                </FieldGroup>
                            </FieldSet>
                            <FieldSeparator />
                            <FieldSet>
                                <FieldLabel>Requests</FieldLabel>
                                <FieldDescription>
                                    Get notified when ChatGPT requests
                                    information, like research or image
                                    generation.
                                </FieldDescription>
                                <FieldGroup data-slot="checkbox-group">
                                    <Field orientation="horizontal">
                                        <Checkbox id="Notifications" />
                                        <FieldLabel
                                            htmlFor="Notifications"
                                            className="w-fit font-normal"
                                        >
                                            Push notifications
                                        </FieldLabel>
                                    </Field>
                                    <Field orientation="horizontal">
                                        <Checkbox id="AllNotifications" />
                                        <FieldLabel
                                            htmlFor="AllNotifications"
                                            className="font-normal"
                                        >
                                            All notifications
                                        </FieldLabel>
                                    </Field>
                                </FieldGroup>
                            </FieldSet>
                        </FieldGroup>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardTitle className="rounded-t-lg bg-gray-200 px-4 py-3 font-semibold text-black ring-1 ring-gray-300 dark:border-b dark:border-gray-700/50 dark:bg-black/30 dark:text-white dark:ring-0">
                        Choice Card
                    </CardTitle>
                    <CardContent className="relative grow px-2.5 py-4 sm:px-4 lg:py-6">
                        <FieldGroup>
                            <FieldSet>
                                <FieldLegend>Payment method</FieldLegend>
                                <FieldDescription>
                                    All transactions are secure and encrypted.
                                </FieldDescription>
                                <RadioGroup defaultValue="CreditCard">
                                    <FieldLabel htmlFor="CreditCard">
                                        <Field orientation="horizontal">
                                            <FieldContent>
                                                <FieldTitle>
                                                    Credit card
                                                </FieldTitle>
                                                <FieldDescription>
                                                    Pay with your credit card.
                                                </FieldDescription>
                                            </FieldContent>
                                            <RadioGroupItem
                                                value="CreditCard"
                                                id="CreditCard"
                                            />
                                        </Field>
                                    </FieldLabel>
                                    <FieldLabel htmlFor="NetBanking">
                                        <Field orientation="horizontal">
                                            <FieldContent>
                                                <FieldTitle>
                                                    Net Banking
                                                </FieldTitle>
                                                <FieldDescription>
                                                    Pay with your Net Banking.
                                                </FieldDescription>
                                            </FieldContent>
                                            <RadioGroupItem
                                                value="NetBanking"
                                                id="NetBanking"
                                            />
                                        </Field>
                                    </FieldLabel>
                                </RadioGroup>
                            </FieldSet>
                        </FieldGroup>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
