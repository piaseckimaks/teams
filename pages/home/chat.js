import React, { useState } from 'react'
import SideBar from '../../components/UserInterface/SideBar'
import { ChatAlt2Icon, UserAddIcon } from '@heroicons/react/outline'
import NavBar from '../../components/NavBar'
import ChatList from '../../components/chat/ChatList'
import ChatWindow from '../../components/chat/ChatWindow'


const persons = [
    {
        name: 'Janet le Crouix',
        avatar: 'http://daisyui.com/tailwind-css-component-profile-1@56w.png',
        lastMessage: 'When we can meet James ??',
        datetime: '10:10'
    },
    {
        name: 'Kim Campbell',
        avatar: 'http://daisyui.com/tailwind-css-component-profile-3@56w.png',
        lastMessage: 'I will not forgive you last evening!',
        datetime: '4:00'
    },
    {
        name: 'Tia Tanzani',
        avatar: 'http://daisyui.com/tailwind-css-component-profile-5@56w.png',
        lastMessage: 'Im for your orders agent 007',
        datetime: 'Yesterday, 22:30'
    },
    {
        name: 'Janet le Crouix',
        avatar: 'http://daisyui.com/tailwind-css-component-profile-1@56w.png',
        lastMessage: 'When we can meet James ??',
        datetime: '10:10'
    },
    {
        name: 'Kim Campbell',
        avatar: 'http://daisyui.com/tailwind-css-component-profile-3@56w.png',
        lastMessage: 'I will not forgive you last evening!',
        datetime: '4:00'
    },
    {
        name: 'Tia Tanzani',
        avatar: 'http://daisyui.com/tailwind-css-component-profile-5@56w.png',
        lastMessage: 'Im for your orders agent 007',
        datetime: 'Yesterday, 22:30'
    },
    {
        name: 'Janet le Crouix',
        avatar: 'http://daisyui.com/tailwind-css-component-profile-1@56w.png',
        lastMessage: 'When we can meet James ??',
        datetime: '10:10'
    },
    {
        name: 'Kim Campbell',
        avatar: 'http://daisyui.com/tailwind-css-component-profile-3@56w.png',
        lastMessage: 'I will not forgive you last evening!',
        datetime: '4:00'
    },
    {
        name: 'Tia Tanzani',
        avatar: 'http://daisyui.com/tailwind-css-component-profile-5@56w.png',
        lastMessage: 'Im for your orders agent 007',
        datetime: 'Yesterday, 22:30'
    },
    {
        name: 'Janet le Crouix',
        avatar: 'http://daisyui.com/tailwind-css-component-profile-1@56w.png',
        lastMessage: 'When we can meet James ??',
        datetime: '10:10'
    },
    {
        name: 'Kim Campbell',
        avatar: 'http://daisyui.com/tailwind-css-component-profile-3@56w.png',
        lastMessage: 'I will not forgive you last evening!',
        datetime: '4:00'
    },
    {
        name: 'Tia Tanzani',
        avatar: 'http://daisyui.com/tailwind-css-component-profile-5@56w.png',
        lastMessage: 'Im for your orders agent 007',
        datetime: 'Yesterday, 22:30'
    }
]

export default function Chat() {
    const [ currentChat, setCurrentChat ] = useState(null)

    function handleCurrentChat(el){
        setCurrentChat(el)
    }

    return (
    <div className='flex h-screen bg-base-300'>
        <SideBar />

        <div className='h-full w-full flex justify-center items-center border-l border-neutral'>
        <ChatList persons={persons} handleCurrentChat={handleCurrentChat}/>
        <div className='bg-base-300 h-full w-full border-l border-neutral'>
            <div className='h-full w-full'>
                <ChatWindow currentChat={currentChat} />                
            </div>
            
        </div>

      </div>

    </div>
    )
}
