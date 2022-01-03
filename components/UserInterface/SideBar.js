import React from 'react'
import { InboxIcon, ChatIcon, FolderIcon, HomeIcon, UserCircleIcon, SupportIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const iconsStyling = "inline-block w-6 h-6 stroke-current text-base-content group-hover:text-base-content"



const upperButtons = [
    {
        name: 'home',
        icon: HomeIcon,
        href: '/home/'
    },
    {
        name: 'chat',
        icon: ChatIcon,
        href: '/home/chat'
    },
    {
        name: 'inbox',
        icon: InboxIcon,
        href: '/home/inbox'
    },
    {
        name: 'files',
        icon: FolderIcon,
        href: '/home/explorer'
    },
]

const lowerButtons = [
    {
        name: 'profile',
        icon: UserCircleIcon,
        href: '/home/profile'
    },
    {
        name: 'support',
        icon: SupportIcon,
        href: '/home/support'
    },
    {
        name: 'exit',
        icon: PowerOffIcon,
        href: '/api/auth/logout'
    }
]

export default function SideBar() {
    return (
        <div className="card h-full w-16 flex flex-col justify-between bg-base-content mr-2 bg-opacity-80 py-2">
            <ul className="flex flex-col w-full items-center">
                {
                    upperButtons.map((e,i)=>(
                        
                            <Link href={e.href} key={i}>
                                <a className="">
                                <li  className="tooltip tooltip-right w-12 h-12 group flex justify-center hover:bg-accent cursor-pointer items-center rounded-box transform duration-150 active:scale-90">
                                    <e.icon className={iconsStyling} />
                                </li>
                                </a>
                            </Link>
                        
                    ))
                }
            </ul>
            <ul className="flex flex-col w-full items-center">
                {
                    lowerButtons.map((e,i)=>(
                            <Link href={e.href} key={i}>
                                <a className="">
                                    <li  className="w-12 h-12 group flex justify-center hover:bg-accent cursor-pointer items-center rounded-box transform duration-150 active:scale-90">
                                        <e.icon className={iconsStyling} />
                                    </li>
                                </a>
                            </Link>
                    ))
                }
            </ul>
        </div>
    )

}


function PowerOffIcon(){
    return (
    <svg className={iconsStyling}  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
        <path stroke="none" d="M0 0h24v24H0z"/>  
        <path d="M7 6a7.75 7.75 0 1 0 10 0" />  
        <line x1="12" y1="4" x2="12" y2="12" />
    </svg> 
    )
}