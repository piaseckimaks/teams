import React, { Children } from 'react'
import NavBar from '../NavBar'
import SideBar from './SideBar'

function UserInterface({children}) {
    return (
        <div className="h-screen w-screen flex overflow-hidden">
            <SideBar />
            <div className="relative w-full h-full">
                {children}
            </div>
        </div>
    )
}

export { UserInterface }