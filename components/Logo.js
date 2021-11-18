import React from 'react'
import Link from 'next/link'

export default function Logo({size}) {
    return (
        <Link href="/">
            <a>
                <span className={`text-${size} text-secondary-content lowercase tracking-tighter`}>
                    crew
                </span>
                <span className={`text-${size} font-bold text-accent uppercase tracking-tighter`}>
                    it
                </span>
            </a>
        </Link>
    )
}
