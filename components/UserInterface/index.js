import React, { Children } from 'react'
import NavBar from '../NavBar'
import SideBar from './SideBar'

function UserInterface({children, user}) {
    return (
        <div className="h-screen w-screen flex overflow-hidden p-2 bg-base-300 " >
            <SideBar />
            
            <div className=" relative w-full h-full">
                <div className="navbar bg-transparent rounded-box">
                    <div className="navbar-start">start</div>
                    <div className="navbar-center">center</div>
                    <div className="navbar-end">{user.firstname + ' ' + user.lastname}</div>
                </div>
                <div className="w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    )
}

export { UserInterface }