import { UserCircleIcon } from '@heroicons/react/solid'
import React, { useEffect } from 'react'
import Link from 'next/link'

const navbarLinks = [
    {name: 'Product'},
    {name: 'Solutions'},
]

export default function NavBar({ handleUserBtn }) {
    useEffect(() => {
        console.log(window.scrollY)
    })

    return (
        <div className={`absolute sm:fixed top-0 navbar mx-auto shadow-md bg-base-200 text-neutral-content w-full z-10`}>
        
        <div className="px-2 mx-2 navbar-start">
            <a href="#section0">
            <span className="text-3xl font-semibold text-secondary-content ">
                crew
            </span>
            <span className="text-3xl font-bold text-accent ">
                IT
            </span>
            </a>
        </div> 
        <div className="hidden px-2 mx-2 navbar-center lg:flex">
            <div className="flex items-stretch">
                {
                    ['features', 'about us', 'docs'].map((e,i)=>(
                        <a className="btn btn-sm rounded-btn hover:text-accent hover:bg-base-200 hover:border-transparent" key={i} href={'#section' + (i+1)}>
                            {e}
                        </a>
                    ))
                }
            </div>
        </div>
        <div className="px-2 mx-2 navbar-end lg:flex">
            <Link href="/signin">
            <a className="btn btn-ghost btn-sm rounded-btn hover:text-accent hover:bg-base-200 hover:border-transparent" >
                log in
            </a>
            </Link>
            <button className="btn btn-sm btn-accent hidden lg:inline-block">Create a crew</button>
            <button className="btn btn-accent lg:hidden inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>
        </div>
        {/* <div className="navbar-end">
            <button onClick={handleUserBtn}className="btn btn-square rounded-full btn-primary text-neutral-content">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </button>
            <button className="btn btn-square btn-primary rounded-full text-neutral-content">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">     
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>                     
            </svg>
            </button> 
            <button className="btn btn-square rounded-full btn-primary text-neutral-content">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">             
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>             
            </svg>
            </button>
        </div> */}
        </div>
    )
}
