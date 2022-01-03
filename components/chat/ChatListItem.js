import { ChatAlt2Icon } from '@heroicons/react/outline'
import React from 'react'

export default function ChatListItem({ el, handleCurrentChat }) {
    return (
        <li >
            <div className='flex p-2 hover:bg-base-200 cursor-pointer active:scale-95 duration-200 active:bg-accent' onClick={() => handleCurrentChat(el)}>
                <div className="avatar">
                    <div className="w-12 h-12 mask mask-circle">
                        <img src={el.avatar} />
                    </div>
                </div>
                <div className='ml-2 w-full'>
                    <div className='flex justify-between'>
                        <h3 className='font-bold'>{el.name}</h3>
                        <span>{el.datetime}</span>
                    </div>
                    <div className='flex items-center'>
                        <ChatAlt2Icon className='w-3 h-3' />
                        <p className='ml-1'>{el.lastMessage}</p>
                    </div>
                </div>

            </div>
        </li>
    )
}
