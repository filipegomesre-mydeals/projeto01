import Image from 'next/image'

export default function NotFound() {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-5 py-28 sm:py-48">
            <div>
                <Image
                    src="/images/not-found-two.svg"
                    alt="not-found-img"
                    width={350}
                    height={350}
                    className="h-auto w-60 sm:w-80"
                ></Image>
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white">
                Page not Found.
            </h3>
        </div>
    )
}
