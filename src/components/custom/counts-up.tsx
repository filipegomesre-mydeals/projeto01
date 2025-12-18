'use client'
import CountUp from 'react-countup'

type CountsUpProps = {
    start?: number
    end: number
    duration?: number
    delay?: number
    prefix?: string
    suffix?: string
    className?: string
}

const CountsUp = ({

    start,
    end,
    duration,
    prefix,
    suffix,
    delay,
    className,
}: CountsUpProps) => {
    return (
        <CountUp
            start={start}
            end={end}
            duration={duration}
            delay={delay}
            prefix={prefix}
            suffix={suffix}
            enableScrollSpy={true}
            scrollSpyOnce={true}
        >
            {({ countUpRef }) => (
                <span ref={countUpRef} className={className} />
            )}
        </CountUp>
    )
}

export default CountsUp
