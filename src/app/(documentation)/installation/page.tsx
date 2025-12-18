import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function Installation() {
    return (
        <div className="py-10">
            <div className="container">
                <h2 className="mb-5 text-2xl font-semibold text-primary">
                    Installation process
                </h2>
                <Card className='bg-white!'>
                    <CardContent className="space-y-4 p-5">
                        <p className="font-semibold">
                            The following process will be used to install
                            admin dashboard using package manager.
                        </p>
                        <ul className="list-inside list-decimal space-y-3 leading-6 text-gray">
                            <li>
                                Install Node.js : Please install latest
                                version of Node.js from&nbsp;
                                <Link
                                    href="https://nodejs.org/en"
                                    className="font-semibold text-success transition hover:text-black"
                                >
                                    https://nodejs.org
                                </Link>
                            </li>
                            <li>
                                Extract main template : Extract the admin
                                template site to your suitable directory or
                                folder.
                            </li>
                            <li>
                                Access Command Prompt : Open node.js command
                                prompt.
                                <p className="pl-4">
                                    <span className="font-semibold">
                                        Note:-
                                    </span>
                                    &nbsp; The process mentioned below can
                                    also be excuted with system command
                                    prompt.
                                </p>
                            </li>
                            <li>
                                In CMD, Navigate to the location where main
                                folder is extracted.
                            </li>
                            <li>
                                Navigate to the root folder of project where
                                package.json file exist.
                            </li>
                            <li>
                                Install node dependencies : Run&nbsp;
                                <span className="font-semibold text-black">
                                    npm install
                                </span>
                                .
                            </li>
                            <li>
                                To run&nbsp;
                                <span className="font-semibold text-black">
                                    npm run dev
                                </span>
                                .
                                <div className="pl-4">
                                    <p>
                                        <span className="font-semibold">
                                            Note:-
                                        </span>
                                        &nbsp;when you run above command it
                                        will run project in browser
                                        automatically.
                                    </p>
                                    <p>
                                        <span className="font-semibold">
                                            Note:-
                                        </span>
                                        &nbsp;It will enable auto refresh
                                        function everytime you save a file.
                                    </p>
                                </div>
                            </li>
                            <li>
                                Run command&nbsp;
                                <span className="font-semibold text-black">
                                    npm run build
                                </span>
                                &nbsp; to build for production.
                            </li>
                        </ul>
                        <p className="text-gray">
                            In case if you have any problems or query then
                            please&nbsp;
                            <Link
                                href="https://sbthemes.freshdesk.com/support/tickets/new"
                                className="font-semibold text-success transition hover:text-black"
                            >
                                contact us
                            </Link>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
