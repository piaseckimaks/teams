import React from 'react'
import { ViewGridIcon, TemplateIcon, FolderIcon, IdentificationIcon, ChevronLeftIcon, DatabaseIcon, ServerIcon, ChartPieIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const iconsStyling = "inline-block w-6 h-6 stroke-current text-accent group-hover:text-base-content"

const buttons = [
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
        <div className="h-full w-16 bg-accent">
            <ul className="menu w-full h-full shadow-lg bg-base-100">
                {
                    buttons.map((e,i)=>(
                        <li key={i} className="group hover:bg-accent hover:bg-opacity-40">
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
