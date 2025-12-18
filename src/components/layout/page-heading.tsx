import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const PageHeading = ({
    heading,
    className,
}: {
    heading: string
    className?: string
}) => {
    return (
        <Card
            className={cn(
                'px-5 py-3.5 text-base/5 font-semibold text-black shadow-sm dark:text-white',
                className,
            )}
        >
            <CardContent>{heading}</CardContent>
        </Card>
    )
}

export default PageHeading
