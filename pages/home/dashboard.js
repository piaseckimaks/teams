import React from 'react'
import { UserInterface } from '../../components/UserInterface'



export default function dashboard() {
    return (
        <UserInterface>

            <div className="h-1/2" >
                <div className="w-full h-1/6 border-4 border-transparent">
                    <div className="navbar glass ">

                    </div>
                </div>

                <div className="w-full flex h-5/6">
                    <div className="w-1/2 border flex justify-between items-center py-1" >
                        <div className="h-full glass w-1/3 border">
                            
                        </div>
                        <div className="h-full glass w-1/3 border">

                        </div>
                        <div className="h-full  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-200 w-1/3 ">

                        </div>
                    </div>
                    <div className="w-1/2 border" ></div>
                </div>
            </div>

            <div className="w-full h-1/2 flex">
                <div className="w-1/3 border" ></div>
                <div className="w-1/3 border"></div>
                <div className="w-1/3 border" ></div>
            </div>

        </UserInterface>
    )
}
