import React, { Children } from 'react'

const content = Array.from(Array(10).keys())

export default function Window({children, className}) {
    return (
        <div className={"min-w-64 h-96 bg-base-100 shadow-2xl overflow-auto " + className}>
            <div className="w-full h-auto p-1">
                {children}
            </div>
        </div>
    )
}
