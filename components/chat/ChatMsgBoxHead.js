import React from 'react'

export default function ChatMsgBoxHead({ currentChat }) {
    return (
        <div className='flex h-[5rem] p-2 items-end bg-base-200'>
            <div className="avatar">
                <div className="w-16 h-16 mask mask-circle">
                    <img src={currentChat.avatar} />
                </div>
            </div>
            <h1 className='ml-2 text-xl'>
                {currentChat.name}
            </h1>
        </div>
    )
}
