import React from 'react'
import { ViewGridIcon, TemplateIcon, FolderIcon, IdentificationIcon, ChevronLeftIcon, DatabaseIcon, ServerIcon, ChartPieIcon, HomeIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const iconsStyling = "inline-block w-6 h-6 stroke-current text-accent group-hover:text-base-content"

const buttons = [
    {
        name: 'home',
        icon: HomeIcon,
        href: ''
    },
    {
        name: 'dashboard',
        icon: ViewGridIcon,
        href: 'dashboard'
    },
    {
        name: 'files',
        icon: FolderIcon,
        href: 'explorer'
    },
    {
        name: 'database',
        icon: DatabaseIcon,
        href: 'database'
    },
    {
        name: 'server',
        icon: ServerIcon,
        href: 'server'
    },
    {
        name: 'profile',
        icon: IdentificationIcon,
        href: 'profile'
    },
    {
        name: 'statistics',
        icon: ChartPieIcon,
        href: 'profile'
    },
]

export default function SideBar() {
    return (
        <div className="h-full w-12">
            <ul className="flex flex-col w-full h-full shadow-lg bg-base-100">
                {
                    buttons.map((e,i)=>(
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
