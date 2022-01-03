import React, { useState } from 'react'
import SideBar from '../../components/UserInterface/SideBar'
import { ChatAlt2Icon } from '@heroicons/react/outline'


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



    return (
    <div className='flex h-screen p-1 bg-base-300'>
        <SideBar />
        <div className='h-full w-full flex justify-center items-center'>
        <div className='card bg-base-300 h-5/6 w-11/12'>
            <div className='h-full w-full p-3  '>
                <div className='w-full flex'>
                    <div className='card bg-base-200 h-[43rem] w-3/4 mr-1'>

                        {
                            currentChat &&
                            (
                                <>
                                <div className='flex h-[5rem] p-2 items-end bg-base-100'>
                                    <div className="avatar">
                                        <div className="w-16 h-16 mask mask-circle">
                                            <img src={currentChat.avatar} />
                                        </div>
                                    </div>
                                    <h1 className='ml-2 text-xl'>
                                        {currentChat.name}
                                    </h1>
                                </div>
                                <div className='p-1 h-[33rem]'>
                                    <div className='card p-2 w-max bg-accent relative'>
                                        <p>{currentChat.lastMessage}</p>
                                        <div className='flex justify-end items-center'>
                                        <span className='text-xs'>{currentChat.datetime}</span>
                                        <ChatAlt2Icon className='h-3 ml-1'/>
                                        </div>
                                    </div>
                                </div>
                                
                                </>
                            )
                        }

                        <div className='card w-full h-16 p-2 my-2 flex-row '>
                            <textarea className="textarea textarea-bordered textarea-accent text-sm resize-none w-11/12 mr-1" placeholder='...'></textarea>
                            <button className='btn btn-accent w-1/12 ml-1'>
                                <svg viewBox='0 0 24 24' width='24' height='24'>
                                    <path
                                        fill="currentColor"
                                        d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        

                    </div>
                    <div className='card bg-base-100 h-[43rem] w-1/4 ml-1'>

                        <div className="avatar mx-auto mt-4">
                            <div className="mb-8 w-24 h-24 mask mask-hexagon">
                                <img src="https://avatarfiles.alphacoders.com/458/thumb-4584.jpg" />
                            </div>
                        </div>
                        
                        <ul className="menu py-1 w-full shadow-lg bg-base-200 overflow-auto">

                            {
                                persons.map((el, i)=> (
                                    <li key={i}>
                                    <div className='flex p-2 hover:bg-base-100 cursor-pointer active:scale-95 duration-200 active:bg-accent' onClick={ () => setCurrentChat(el)}>
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
                                                <ChatAlt2Icon className='w-3 h-3'/>
                                                <p className='ml-1'>{el.lastMessage}</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    </li>
                                ))
                            }
                           
                        </ul>

                    </div>
                </div>
                
                
            </div>
            
        </div>

      </div>

    </div>
    )
}
