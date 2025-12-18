import PageHeading from '@/components/layout/page-heading'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'

export default function CheckBox() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Check Box & Radio Buttons'} />

            <div className="min-h-[calc(100vh-160px)]">
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    <Card>
                        <div className="rounded-t-lg border-b border-gray-300 bg-gray-200 px-4 py-3 font-semibold leading-[18px] text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                            Check Box
                        </div>
                        <div className="space-y-2.5 px-4 py-3">
                            <div className="flex items-center gap-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-xs font-semibold leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white"
                                >
                                    Default checkbox
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="terms1" />
                                <label
                                    htmlFor="terms1"
                                    className="text-xs font-semibold leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white"
                                >
                                    Checked checkbox
                                </label>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="rounded-t-lg border-b border-gray-300 bg-gray-200 px-4 py-3 font-semibold leading-[18px] text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                            Disabled
                        </div>
                        <div className="space-y-2.5 px-4 py-3">
                            <div className="flex items-center gap-2">
                                <Checkbox id="terms2" disabled />
                                <label
                                    htmlFor="terms2"
                                    className="text-xs font-semibold leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white"
                                >
                                    Disabled checkbox
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="terms3" checked disabled />
                                <label
                                    htmlFor="terms3"
                                    className="text-xs font-semibold leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white"
                                >
                                    Disabled checkbox
                                </label>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="rounded-t-lg border-b border-gray-300 bg-gray-200 px-4 py-3 font-semibold leading-[18px] text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                            Radio
                        </div>
                        <RadioGroup className="gap-2.5 px-4 py-3">
                            <label className="flex items-center gap-2.5">
                                <RadioGroupItem value="Default" />
                                <h3 className="text-xs/none font-semibold leading-tight text-black dark:text-white">
                                    Default radio
                                </h3>
                            </label>
                            <label className="flex items-center gap-2.5">
                                <RadioGroupItem value="DefaultChecked" />
                                <h3 className="text-xs/none font-semibold leading-tight text-black dark:text-white">
                                    Default checked radio
                                </h3>
                            </label>
                        </RadioGroup>
                    </Card>
                    <Card>
                        <div className="rounded-t-lg border-b border-gray-300 bg-gray-200 px-4 py-3 font-semibold leading-[18px] text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                            Disabled
                        </div>
                        <RadioGroup className="gap-2.5 px-4 py-3" disabled>
                            <label className="flex items-center gap-2.5">
                                <RadioGroupItem value="Default" disabled />
                                <h3 className="text-xs/none font-semibold leading-tight text-black dark:text-white">
                                    Disabled radio
                                </h3>
                            </label>
                            <label className="mb-px flex items-center gap-2.5">
                                <RadioGroupItem
                                    value="DefaultChecked"
                                    disabled
                                    checked
                                />
                                <h3 className="text-xs/none font-semibold leading-tight text-black dark:text-white">
                                    Disabled checked radio
                                </h3>
                            </label>
                        </RadioGroup>
                    </Card>
                    <Card>
                        <div className="rounded-t-lg border-b border-gray-300 bg-gray-200 px-4 py-3 font-semibold leading-[18px] text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                            Colored Checkboxes
                        </div>
                        <div className="space-y-2.5 px-4 py-3">
                            <label className="flex items-center gap-2">
                                <Checkbox />
                                <h3 className="text-xs font-semibold leading-tight text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white">
                                    Dark
                                </h3>
                            </label>
                            <label className="flex items-center gap-2">
                                <Checkbox color={'primary'} />
                                <h3 className="text-xs font-semibold leading-tight text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white">
                                    Blue
                                </h3>
                            </label>
                            <label className="flex items-center gap-2">
                                <Checkbox color={'success'} />
                                <h3 className="text-xs font-semibold leading-tight text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white">
                                    Success
                                </h3>
                            </label>
                            <label className="flex items-center gap-2">
                                <Checkbox color={'pending'} />
                                <h3 className="text-xs font-semibold leading-tight text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white">
                                    Pending
                                </h3>
                            </label>
                            <label className="flex items-center gap-2">
                                <Checkbox color={'danger'} />
                                <h3 className="text-xs font-semibold leading-tight text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white">
                                    Danger
                                </h3>
                            </label>
                        </div>
                    </Card>
                    <Card>
                        <div className="rounded-t-lg border-b border-gray-300 bg-gray-200 px-4 py-3 font-semibold leading-[18px] text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                            Colored Checkboxes
                        </div>
                        <div className="space-y-2.5 px-4 py-3">
                            <label className="flex items-center gap-2">
                                <Checkbox
                                    variant={'outline'}
                                    color={'outlineBlack'}
                                />
                                <h3 className="text-xs font-semibold leading-tight text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white">
                                    Dark
                                </h3>
                            </label>
                            <label className="flex items-center gap-2">
                                <Checkbox
                                    variant={'outline'}
                                    color={'outlinePrimary'}
                                />
                                <h3 className="text-xs font-semibold leading-tight text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white">
                                    Blue
                                </h3>
                            </label>
                            <label className="flex items-center gap-2">
                                <Checkbox
                                    variant={'outline'}
                                    color={'outlineSuccess'}
                                />
                                <h3 className="text-xs font-semibold leading-tight text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white">
                                    Success
                                </h3>
                            </label>
                            <label className="flex items-center gap-2">
                                <Checkbox
                                    variant={'outline'}
                                    color={'outlinePending'}
                                />
                                <h3 className="text-xs font-semibold leading-tight text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white">
                                    Pending
                                </h3>
                            </label>
                            <label className="flex items-center gap-2">
                                <Checkbox
                                    variant={'outline'}
                                    color={'outlineDanger'}
                                />
                                <h3 className="text-xs font-semibold leading-tight text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white">
                                    Danger
                                </h3>
                            </label>
                        </div>
                    </Card>
                    <Card>
                        <div className="rounded-t-lg border-b border-gray-300 bg-gray-200 px-4 py-3 font-semibold leading-[18px] text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                            Colored Radio
                        </div>
                        <RadioGroup
                            defaultValue="Dark"
                            className="gap-2.5! px-4 py-3"
                        >
                            <label className="flex items-center gap-2.5">
                                <RadioGroupItem value="Dark" />
                                <h3 className="text-xs/none font-semibold leading-tight text-black dark:text-white">
                                    Dark
                                </h3>
                            </label>
                            <label className="flex items-center gap-2.5">
                                <RadioGroupItem value="Blue" color="primary" />
                                <h3 className="text-xs/none font-semibold leading-tight text-black dark:text-white">
                                    Blue
                                </h3>
                            </label>
                            <label className="flex items-center gap-2.5">
                                <RadioGroupItem
                                    value="Success"
                                    color="success"
                                />
                                <h3 className="text-xs/none font-semibold leading-tight text-black dark:text-white">
                                    Success
                                </h3>
                            </label>
                            <label className="flex items-center gap-2.5">
                                <RadioGroupItem
                                    value="warning"
                                    color="pending"
                                />
                                <h3 className="text-xs/none font-semibold leading-tight text-black dark:text-white">
                                    Pending
                                </h3>
                            </label>
                            <label className="flex items-center gap-2.5">
                                <RadioGroupItem value="danger" color="danger" />
                                <h3 className="text-xs/none font-semibold leading-tight text-black dark:text-white">
                                    Danger
                                </h3>
                            </label>
                        </RadioGroup>
                    </Card>
                    <Card>
                        <div className="rounded-t-lg border-b border-gray-300 bg-gray-200 px-4 py-3 font-semibold leading-[18px] text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                            Outline Radio
                        </div>
                        <RadioGroup
                            defaultValue="Dark"
                            className="gap-2.5! px-4 py-3"
                        >
                            <label className="flex items-center gap-2.5">
                                <RadioGroupItem
                                    value="Dark"
                                    color="outlineBlack"
                                />
                                <h3 className="text-xs/none font-semibold leading-tight text-black dark:text-white">
                                    Dark
                                </h3>
                            </label>
                            <label className="flex items-center gap-2.5">
                                <RadioGroupItem
                                    value="Blue"
                                    color="outlinePrimary"
                                />
                                <h3 className="text-xs/none font-semibold leading-tight text-black dark:text-white">
                                    Blue
                                </h3>
                            </label>
                            <label className="flex items-center gap-2.5">
                                <RadioGroupItem
                                    value="Success"
                                    color="outlineSuccess"
                                />
                                <h3 className="text-xs/none font-semibold leading-tight text-black dark:text-white">
                                    Success
                                </h3>
                            </label>
                            <label className="flex items-center gap-2.5">
                                <RadioGroupItem
                                    value="warning"
                                    color="outlinePending"
                                />
                                <h3 className="text-xs/none font-semibold leading-tight text-black dark:text-white">
                                    Pending
                                </h3>
                            </label>
                            <label className="flex items-center gap-2.5">
                                <RadioGroupItem
                                    value="danger"
                                    color="outlineDanger"
                                />
                                <h3 className="text-xs/none font-semibold leading-tight text-black dark:text-white">
                                    Danger
                                </h3>
                            </label>
                        </RadioGroup>
                    </Card>
                    <Card>
                        <div className="rounded-t-lg border-b border-gray-300 bg-gray-200 px-4 py-3 font-semibold leading-[18px] text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                            Colored Switches
                        </div>
                        <div className="space-y-2.5 px-4 py-3">
                            <label className="flex items-center gap-2">
                                <Switch />
                                <h2 className="text-xs/none font-semibold text-black dark:text-white">
                                    Dark
                                </h2>
                            </label>
                            <label className="flex items-center gap-2">
                                <Switch color="primary" />
                                <h2 className="text-xs/none font-semibold text-black dark:text-white">
                                    Primary
                                </h2>
                            </label>
                            <label className="flex items-center gap-2">
                                <Switch color="success" />
                                <h2 className="text-xs/none font-semibold text-black dark:text-white">
                                    Success
                                </h2>
                            </label>
                            <label className="flex items-center gap-2">
                                <Switch color="pending" />
                                <h2 className="text-xs/none font-semibold text-black dark:text-white">
                                    Pending
                                </h2>
                            </label>
                            <label className="flex items-center gap-2">
                                <Switch color="danger" />
                                <h2 className="text-xs/none font-semibold text-black dark:text-white">
                                    Danger
                                </h2>
                            </label>
                        </div>
                    </Card>
                    <Card>
                        <div className="rounded-t-lg border-b border-gray-300 bg-gray-200 px-4 py-3 font-semibold leading-[18px] text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                            Toggle Switches Style - 2
                        </div>
                        <div className="space-y-2.5 px-4 py-3">
                            <label className="flex items-center gap-2">
                                <Switch
                                    variant={'outline'}
                                    color="outlineBlack"
                                />
                                <h2 className="text-xs/tight font-semibold text-black dark:text-white">
                                    Dark
                                </h2>
                            </label>
                            <label className="flex items-center gap-2">
                                <Switch
                                    variant={'outline'}
                                    color="outlinePrimary"
                                />
                                <h2 className="text-xs/tight font-semibold text-black dark:text-white">
                                    Primary
                                </h2>
                            </label>
                            <label className="flex items-center gap-2">
                                <Switch
                                    variant={'outline'}
                                    color="outlineSuccess"
                                />
                                <h2 className="text-xs/tight font-semibold text-black dark:text-white">
                                    Success
                                </h2>
                            </label>
                            <label className="flex items-center gap-2">
                                <Switch
                                    variant={'outline'}
                                    color="outlinePending"
                                />
                                <h2 className="text-xs/tight font-semibold text-black dark:text-white">
                                    Pending
                                </h2>
                            </label>
                            <label className="flex items-center gap-2">
                                <Switch
                                    variant={'outline'}
                                    color="outlineDanger"
                                />
                                <h2 className="text-xs/tight font-semibold text-black dark:text-white">
                                    Danger
                                </h2>
                            </label>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
