import React, {  useState } from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';


export default function Chat({ user, persons, possibleFriends }) {
    const [ currentChat, setCurrentChat ] = useState(null);

    function handleCurrentChat(el){
        setCurrentChat(el)
    };

    return (

        <div className='h-full w-full flex justify-center items-center border-l border-neutral'>
            <ChatList 
                persons={persons} 
                handleCurrentChat={handleCurrentChat} 
                user={user} 
                possibleFriends={possibleFriends}
            />
            <div className='bg-base-300 h-full w-full border-l border-neutral'>
                <div className='h-full w-full'>
                    <ChatWindow currentChat={currentChat} />                
                </div>
            
            </div>
        </div>

    )
};