import { ChatAlt2Icon } from '@heroicons/react/outline'
import React from 'react'

export default function ChatListItem({ el, handleCurrentChat, friednsList }) {

    function handleInvite(){
        
    }

    return (
        <li >
            <div className='flex p-2 cursor-pointer' onClick={() => handleCurrentChat(el)}>
                <div className="avatar">
                    <div className="w-12 h-12 mask mask-circle">
                        <img src={el.avatar ? el.avatar : '/424443.png'}/>
                    </div>
                </div>
                <div className='ml-2 w-full'>
                    <div className='flex justify-between'>
                        <h3 className='font-bold'>{el.firstname} {el.lastname}</h3>
                        { friednsList && <span>{el.datetime}</span> }
                    </div>
                    {
                        friednsList ?

                        <div className='flex items-center'>
                            <ChatAlt2Icon className='w-3 h-3' />
                            <p className='ml-1'>{el.lastMessage}</p>
                        </div>
                        :
                        <button className='btn btn-sm btn-success' onClick={handleInvite}>
                            Invite
                        </button>
                    }
                </div>

            </div>
        </li>
    )
}
