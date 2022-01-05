import React, { useRef, useState } from 'react'
import ChatListItem from './ChatListItem'


export default function ChatList({ handleCurrentChat, user }) {
    const { firstname, lastname, avatar } = user
    const persons = []
    const uploadAvatar = useRef(null)

    function handleUploadAvatar(){
        uploadAvatar.current.click()
    }

    return (
        <div className='bg-base-200 w-1/4 h-full overflow-auto'>

                        <div className="avatar my-4 w-full dropdown">
                            <div tabIndex="0" className="w-24 h-24 mask mask-hexagon mx-auto cursor-pointer "  >
                                <img src={avatar ? avatar : '/424443.png'}/>
                                
                            </div>
                            <ul  tabIndex="0" className='ml-24 p-2 shadow menu dropdown-content bg-base-300'>
                                    <li className='rounded-none'>
                                        <button className='btn btn-sm rounded-none' onClick={handleUploadAvatar}>
                                            Upload avatar
                                        </button>
                                        <input ref={uploadAvatar} type="file" className="hidden"/>
                                    </li>
                                    <li>
                                        <button className='btn btn-sm rounded-none'>
                                            Link avatar
                                        </button>
                                    </li>
                                </ul>
                        </div>
                        <h3 className='text-center capitalize text-xl font-bold mb-2'>{firstname} {lastname}</h3>
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