import { Menu, Transition } from '@headlessui/react';
import React from 'react';


export default function Dropdown() {
    const menuTitle = 'database managment'
    const item1 = 'some item'

    return (
        <Menu>
            <Menu.Button className={`bg-blue-200  p-1 uppercase text-gray-600 hover:bg-blue-300 active:scale-95 duration-300 active:bg-blue-900`}>
                <span className='flex justify-between items-center' >
                  <span className='mr-2'>{menuTitle}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                  </svg>
                </span>
            </Menu.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Menu.Items className='flex flex-col '>
                    {
                        [1,2,3,4].map((el,index)=>(
                            <Menu.Item key={index} >
                                {
                                    ({active})=>(
                                        <a
                                            className={`bg-gray-900 ${active && 'bg-blue-500'}`}

                                        >
                                            item{el}
                                        </a>
                                    )
                                }
                            </Menu.Item>
                        ))
                        
                    }
                </Menu.Items>
            </Transition>

            
        </Menu>
    )
}
