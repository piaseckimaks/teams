import React from 'react'
import { InboxIcon, UserGroupIcon, FolderIcon, IdentificationIcon, ChevronLeftIcon, DatabaseIcon, ServerIcon, ChartPieIcon, HomeIcon, UserCircleIcon, SupportIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const iconsStyling = "inline-block w-6 h-6 stroke-current text-accent group-hover:text-base-content"

const upperButtons = [
    {
        name: 'home',
        icon: HomeIcon,
        href: ''
    },
    {
        name: 'my crews',
        icon: UserGroupIcon,
        href: 'my_crews'
    },
    {
        name: 'inbox',
        icon: InboxIcon,
        href: 'inbox'
    },
    {
        name: 'files',
        icon: FolderIcon,
        href: 'explorer'
    },
]

const lowerButtons = [
    {
        name: 'profile',
        icon: UserCircleIcon,
        href: ''
    },
    {
        name: 'support',
        icon: SupportIcon,
        href: 'support'
    },
]

export default function SideBar() {
    return (
        <div className="h-full w-12 flex flex-col justify-between bg-base-100">
            <ul className="flex flex-col w-full  ">
                {
                    upperButtons.map((e,i)=>(
                        <li key={i} className="w-12 h-12 group flex justify-center hover:bg-accent cursor-pointer items-center">
                            <Link href={'/home/' + e.href}>
                                <a className="">
                                    <e.icon className={iconsStyling} />
                                </a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <ul className="flex flex-col w-full">
                {
                    lowerButtons.map((e,i)=>(
                        <li key={i} className="w-12 h-12 group flex justify-center hover:bg-accent cursor-pointer items-center">
                            <Link href={'/home/' + e.href}>
                                <a className="">
                                    <e.icon className={iconsStyling} />
                                </a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
