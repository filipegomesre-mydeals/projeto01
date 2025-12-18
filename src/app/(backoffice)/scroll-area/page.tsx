import PageHeading from '@/components/layout/page-heading'
import { Card } from '@/components/ui/card'
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export default function ScrollAreaPage() {
    const tags = Array.from({ length: 50 }).map(
        (_, i, a) => `ScrollArea Box - ${a.length - i}`,
    )
    return (
        <div className="space-y-4">
            <PageHeading heading={'Scroll Area'} />

            <div className="min-h-[calc(100vh-160px)] space-y-4 rounded-lg">
                <Card className="w-full">
                    <ScrollArea className="mx-auto h-64 w-full max-w-[556px] overflow-hidden p-6 shadow-none">
                        <div className="space-y-5 leading-6 font-medium">
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                Content here, content here, making it look like
                                readable English.
                            </p>
                            <p>
                                Many desktop publishing packages and web page
                                editors now use Lorem Ipsum as their default
                                model text, and a search for lorem ipsum will
                                uncover many web sites still in their infancy.
                                Various versions have evolved over the years,
                                sometimes by accident, sometimes on purpose
                                (injected humour and the like).
                            </p>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                Content here, content here, making it look like
                                readable English.
                            </p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Vero unde vitae, sequi,
                                corrupti recusandae itaque fugit eum molestias
                                odit beatae reiciendis rerum ut facilis
                                reprehenderit voluptatem laudantium dicta et
                                aspernatur.
                            </p>
                        </div>
                    </ScrollArea>
                </Card>

                <ScrollArea className="mx-auto h-72 w-full max-w-[212px] [&>scrollbar]:w-1.5">
                    <div className="p-4 pr-8">
                        <h4 className="mb-5 text-sm/tight font-semibold text-black dark:text-white">
                            What is Lorem Ipsum?
                        </h4>
                        {tags.map((tag) => (
                            <div key={tag}>
                                <div className="text-center text-sm/tight font-medium">
                                    {tag}
                                </div>
                                <DropdownMenuSeparator className="mx-0 my-3" />
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}
