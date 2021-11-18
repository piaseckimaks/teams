import React from 'react'
import { UserInterface } from '../../components/UserInterface'

export default function dashboard() {
    return (
        <UserInterface>

            <div className="h-1/2">
                <div className="bg-base-100 w-full h-1/6 border">

                </div>

                <div className="w-full flex h-5/6">
                    <div className="w-1/2 bg-base-100 border flex justify-between items-center py-1" >
                        <div className="h-full w-1/3 border mx-2">
                            <div className="h-8 w-full bg-base-200"></div>
                        </div>
                        <div className="h-full w-1/3 border mx-2">

                        </div>
                        <div className="h-full w-1/3 border mx-2">

                        </div>
                    </div>
                    <div className="w-1/2 bg-base-100 border" ></div>
                </div>
            </div>

            <div className="w-full h-1/2 flex">
                <div className="w-1/3 bg-base-100 border" ></div>
                <div className="w-1/3 bg-base-100 border"></div>
                <div className="w-1/3 bg-base-100 border" ></div>
            </div>

        </UserInterface>
    )
}
