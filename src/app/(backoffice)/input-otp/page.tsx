import PageHeading from '@/components/layout/page-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from '@/components/ui/input-otp'

export default function InputOtp() {
    return (
        <div className="space-y-4">
            <PageHeading heading={'Input OTP'} />

            <div className="flex min-h-[calc(100vh-160px)] items-center justify-center">
                <Card>
                    <CardHeader className="overflow-x-auto rounded-t-lg border-b border-gray-300 bg-gray-200 px-4 py-3 dark:border-gray-700/50 dark:bg-black/30">
                        <h2 className="font-semibold leading-tight text-black dark:text-white">
                            Verification Code
                        </h2>
                    </CardHeader>
                    <CardContent className="px-3 py-[30px] sm:px-5">
                        <InputOTP maxLength={6}>
                            <InputOTPGroup>
                                <InputOTPSlot aria-placeholder="-" index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </CardContent>
                    <CardFooter>
                        <div className="flex items-center justify-end gap-2.5 rounded-b-lg border-t border-gray-300 bg-gray-200 p-4 dark:border-gray-700/50 dark:bg-black/30 [&_button]:grow">
                            <Button variant={'outline-general'} size={'large'}>
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant={'black'}
                                size={'large'}
                            >
                                Confirm
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
