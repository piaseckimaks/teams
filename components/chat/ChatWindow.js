import { ChatAlt2Icon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import ChatMsgBox from './ChatMsgBox'
import ChatMsgBoxHead from './ChatMsgBoxHead'
import ChatMsgInput from './ChatMsgInput'


const conversation = [
    {
        content: 'How are you??',
        datetime: '10:10',
        sender: 'Janet',
        reciver: 'James'
    },
    {
        content: 'Are you alone??',
        datetime: '10:11',
        sender: 'Janet',
        reciver: 'James'
    },
    {
        content: 'I fine. Yes, Im alone. Do you need something?',
        datetime: '10:11',
        sender: 'James',
        reciver: 'Janet'
    },
    {
        content: 'Yes, please help me with my crane.',
        datetime: '10.12',
        sender: 'Janet',
        reciver: 'James'
    },
]

export default function ChatWindow({ currentChat, sendMsg }) {
    const [ chatMsgs, setChatMsgs ]  = useState(conversation)

    function sendMsg(msg){
        console.log(msg)
        setChatMsgs([
        ...chatMsgs,
        {
            content: msg,
            datetime: Date.now(),
            sender: 'James',
            reciver: 'Janet'
        }
        ])
        console.log(chatMsgs)
    }

    return (
        <div className='h-[56.5rem]'>
        {
            currentChat &&
            (
                <>
                <ChatMsgBoxHead currentChat={currentChat} />
                <ChatMsgBox currentChat={currentChat} conversation={chatMsgs}/>
                <ChatMsgInput sendMsg={sendMsg}/>
                </>
            )
        }
        </div>
    )
}
