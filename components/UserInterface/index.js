import React, { Children } from 'react'
import NavBar from '../NavBar'
import SideBar from './SideBar'

function UserInterface({children}) {
    return (
        <div className="h-screen w-screen flex overflow-hidden" style={{backgroundImage: 'url("https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")'}}>
            <SideBar />
            <div className="hero relative w-full h-full">
            <div className="hero-overlay bg-opacity-40"></div>
                <div className="w-full h-full p-2 flex flex-wrap justify-around">
                    {children}
                </div>
            </div>
        </div>
    )
}

export { UserInterface }