import React from 'react'
import { UserInterface } from '../../components/UserInterface'
import Card from '../../components/UserInterface/Card'



export default function explorer() {
    return (
        <UserInterface>

            <Card className="w-5/6 h-full">
            <div className="tabs">
                <a className="tab tab-bordered">Tab 1</a> 
                <a className="tab tab-bordered tab-active ">Tab 2</a> 
                <a className="tab tab-bordered">Tab 3</a>
            </div>
            
            </Card>

        </UserInterface>
    )
}