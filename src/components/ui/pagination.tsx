import * as React from 'react'

import { cn } from '@/lib/utils'
import { ButtonProps, buttonVariants } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
    <nav
        role="navigation"
        aria-label="pagination"
        className={cn('mx-auto flex w-full justify-end', className)}
        {...props}
    />
)
Pagination.displayName = 'Pagination'

const PaginationContent = React.forwardRef<
    HTMLUListElement,
    React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
    <ul
        ref={ref}
        className={cn(
            'dark:bg-black-dark flex flex-row items-center overflow-hidden rounded-lg bg-white shadow-sm',
            className,
        )}
        {...props}
    />
))
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef<
    HTMLLIElement,
    React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
    <li ref={ref} className={cn('', className)} {...props} />
))
PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
    isActive?: boolean
} & Pick<ButtonProps, 'size'> &
    React.ComponentProps<'a'>

const PaginationLink = ({
    className,
    isActive,

    ...props
}: PaginationLinkProps) => (
    <a
        aria-current={isActive ? 'page' : undefined}
        className={cn(
            'grid size-[30px] place-content-center rounded-none! text-xs text-[#707079] shadow-none! ring-0! hover:border-x! hover:border-gray-300 dark:border-gray-300/20 dark:hover:border-gray-300/20',
            buttonVariants({
                variant: isActive ? 'outline-general' : 'outline-general',
            }),
            className,
            isActive &&
                'border-x border-gray-300 bg-[#F7F7F8] text-black hover:bg-[#F7F7F8] dark:border-gray-300/20 dark:bg-black dark:text-white dark:hover:bg-black',
        )}
        {...props}
    />
)
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({
    className,
    disabled,
    text,
    ...props
}: React.ComponentProps<typeof PaginationLink> & { disabled?: boolean } & {
    text?: boolean
}) => (
    <PaginationLink
        aria-label="Go to previous page"
        size="default"
        className={cn(
            'gap-1 rounded-s-lg border-e border-gray-300 pl-2.5 hover:border-s-0!',
            className,
            disabled && 'pointer-events-none cursor-not-allowed opacity-50',
        )}
        {...props}
    >
        <ChevronLeft className="size-4 text-black rtl:rotate-180 dark:text-white" />
        {text && <span className="block">Previous</span>}
    </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({
    className,
    disabled,
    text,
    ...props
}: React.ComponentProps<typeof PaginationLink> & { disabled?: boolean } & {
    text?: boolean
}) => (
    <PaginationLink
        aria-label="Go to next page"
        size="default"
        className={cn(
            'gap-1 rounded-e-lg border-s border-gray-300 pr-2.5 hover:border-e-0!',
            className,
            disabled && 'pointer-events-none cursor-not-allowed opacity-50',
        )}
        {...props}
    >
        {text && <span className="block">Next</span>}
        <ChevronRight className="size-4 text-black rtl:rotate-180 dark:text-white" />
    </PaginationLink>
)
PaginationNext.displayName = 'PaginationNext'

export {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
}
