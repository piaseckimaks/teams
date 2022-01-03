import { ChatAlt2Icon } from '@heroicons/react/outline'
import React from 'react'
import ChatMsgCloud from './ChatMsgCloud'

export default function ChatMsgBox({ currentChat, conversation }) {
    return (
        <div className='p-1 h-[51.5rem]'>
            {
                conversation.map(
                    (el, i)=> {
                        return <ChatMsgCloud key={i} el={el}/>
                    }
                )
            }
        </div>
    )
}
