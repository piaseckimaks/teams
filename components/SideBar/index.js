import React from 'react'
import { lowerIcons, upperIcons } from './icons'
import Nav from './Nav'



export default function SideBar() {

    return (
        <div className="h-full w-16 flex flex-col justify-between bg-base-100 py-5">
            <Nav icons={upperIcons}  />
            <Nav icons={lowerIcons}  />
        </div>
    )

}