import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'
import type { Table } from '@tanstack/react-table'

type PaginationTableProps<TData> = {
    table: Table<TData>
    data: TData[]
}

export default function PaginationTable<TData>({
    table,
    data,
}: PaginationTableProps<TData>) {
    return (
        <div className="pagination flex flex-col items-center justify-end gap-2 py-3 sm:flex-row sm:gap-4">
            <div className="dark:bg-black-dark rounded-lg bg-white px-3 py-[7px] text-xs font-medium text-[#707079] shadow-sm dark:text-gray-500">
                Showing&nbsp;
                <span className="text-black dark:text-white">
                    &nbsp;
                    {table.getRowModel().rows.length}
                </span>
                &nbsp;of&nbsp;
                <span className="text-black dark:text-white">
                    {data.length}
                </span>
                &nbsp;Entries
            </div>
            <div className="rounded-lg shadow-sm">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            />
                        </PaginationItem>
                        {Array.from(
                            { length: table.getPageCount() },
                            (_, index) => (
                                <PaginationItem key={index}>
                                    <PaginationLink
                                        href="#"
                                        isActive={
                                            index ===
                                            table.getState().pagination
                                                .pageIndex
                                        }
                                        onClick={() =>
                                            table.setPageIndex(index)
                                        }
                                    >
                                        {index + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            ),
                        )}

                        <PaginationItem>
                            <PaginationNext
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                                href="#"
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}
