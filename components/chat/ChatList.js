import React from 'react'
import ChatListItem from './ChatListItem'

export default function ChatList({ persons, handleCurrentChat }) {
    return (
        <div className='bg-base-200 w-1/4 h-full overflow-auto'>

                        <div className="avatar mt-4  w-full">
                            <div className="mb-8 w-24 h-24 mask mask-hexagon mx-auto">
                                <img src="https://avatarfiles.alphacoders.com/458/thumb-4584.jpg" />
                            </div>
                            <span>{}</span>
                        </div>
                        
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
