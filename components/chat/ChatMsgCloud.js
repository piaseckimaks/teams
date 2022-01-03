import { ChatAlt2Icon } from '@heroicons/react/outline'
import React, { useEffect, useRef } from 'react'

export default function ChatMsgCloud({ el }) {
    const msgBox = useRef(null)
    const msg = useRef(null)


    useEffect(()=>{
        if(el.sender === 'James'){
            msgBox.current.classList.add('justify-end')
            msg.current.classList.add('bg-primary-focus')
        }
    })
    
    return (
        <div ref={msgBox} className='flex'>
            <div ref={msg} className='card my-1 p-2 w-max bg-accent-focus relative'>
                <p>{el.content}</p>
                <div className='flex justify-end items-center'>
                    <span className='text-xs'>{el.datetime}</span>
                    <ChatAlt2Icon className='h-3 ml-1' />
                </div>
            </div>
        </div>
    )
}
