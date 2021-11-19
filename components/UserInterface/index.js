import React, { Children } from 'react'
import NavBar from '../NavBar'
import SideBar from './SideBar'

function UserInterface({children}) {
    return (
        <div className="h-screen w-screen flex overflow-hidden p-2 bg-base-300 " >
            
            <SideBar />
            
            <div className="hero relative w-full h-full">
                <div className="w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    )
}

export { UserInterface }