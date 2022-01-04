import Link from 'next/link'

export default function Nav({ icons, handleNavigation }) {
    return (
        <ul className="flex flex-col w-full items-center">
            {
                icons.map((e, i) => (
                    <Link href={e.href} key={i}>
                        <a>
                            <li className="w-16 h-12 group flex justify-center hover:bg-accent cursor-pointer items-center transform duration-150 active:scale-90">
                                {/* <e.icon className={iconsStyling} /> */}
                                {e.icon}
                            </li>
                        </a>
                    </Link>
                ))
            }
        </ul>
    )
}
