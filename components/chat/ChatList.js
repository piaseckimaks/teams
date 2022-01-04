import React from 'react'
import ChatListItem from './ChatListItem'

export default function ChatList({ persons, handleCurrentChat, user }) {
    // const { firstname, lastname } = user

    return (
        <div className='bg-base-200 w-1/4 h-full overflow-auto'>

                        <div className="avatar my-4 w-full">
                            <div className=" w-24 h-24 mask mask-hexagon mx-auto cursor-pointer">
                                <img src="https://avatarfiles.alphacoders.com/458/thumb-4584.jpg" />
                            </div>
                            
                        </div>
                        <h3 className='text-center capitalize text-xl font-bold mb-2'>{'firstname'} {'lastname'}</h3>
                        <ul className="menu py-1 w-full shadow-lg bg-base-300 overflow-auto">

                            {
                                persons.map((el, i)=> (
                                    <ChatListItem key={i} el={el} handleCurrentChat={handleCurrentChat} />
                                ))
                            }
                           
                        </ul>

                    </div>
    )
}
