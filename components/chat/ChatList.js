import React, { useEffect, useRef, useState } from 'react';
import ChatListItem from './ChatListItem';


export default function ChatList({ handleCurrentChat, user, possibleFriends }) {
    const [currentList, setCurrentList] = useState(0);
    const { firstname, lastname, avatar } = user;
    const [friends, setFriends] = useState([]);
    const uploadAvatar = useRef(null);

    function handleUploadAvatar(){
        uploadAvatar.current.click()
    };

    async function getFriends({ id }){
        const friends = await fetch(`/api/get-friends/${id}`);

        setFriends(friends);
    }

    useEffect(() => console.log(user) )

    

    function handleList(e, id){
        const element = e.currentTarget;

        setCurrentList(id);

        if(element.nextSibling)
            element.nextSibling.classList.remove('bg-success', 'text-neutral');
        if(element.previousSibling)
            element.previousSibling.classList.remove('bg-success', 'text-neutral');
        
        if( !Object.values(element.classList).includes('bg-success') && !Object.values(element.classList).includes('text-neutral'))
            element.classList.add('bg-success', 'text-neutral');
    };

    return (
        <div className='bg-base-200 w-1/4 h-full overflow-hidden'>

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
                        <div className='tabs tabs-boxed bg-base-300 grid grid-cols-2 rounded-none'>
                            <a className='tab rounded-none uppercase bg-success text-neutral' onClick={(e)=>handleList(e, 0)}>firends</a>
                            <a className='tab rounded-none uppercase' onClick={(e)=>handleList(e, 1)}>explore</a>
                        </div>
                        <ul className="menu py-1 w-full shadow-lg bg-base-300 h-3/4 overflow-auto">
                        
                            {
                                currentList ?
                                possibleFriends.map((el, i)=> (
                                    <ChatListItem key={i} el={el} handleCurrentChat={handleCurrentChat} conversationList/>
                                ))
                                :
                                friends.map((el, i)=> (
                                    <ChatListItem key={i} el={el} addNewFriend={(el) => addNewFriend(user, el)} />
                                ))
                            }
                           
                        </ul>

                    </div>
    )
}


async function addNewFriend(user, newFriend){
        
    const { id: friendId } = newFriend;
    const body = {
        userId: user.id,
        friendId: friendId
    }

    console.log(body)

    // const response = await fetch(`/api/add-friend`,{
    //     method: 'POST',
    //     headers: { 
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(body)
    // });

    // if(response.code === 201){
    //     const friends = await fetch('/api/get-friends');

    //     setFriends(friends);
    // }
    
}