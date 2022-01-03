import React, { useRef } from 'react'

export default function ChatMsg({ sendMsg }) {
    const msg = useRef(null)
    function handleClick(){
        sendMsg(msg.current.value)
        msg.current.value = ''
    }

    return (
        <div className='card w-full h-16 p-2 my-2 flex-row'>
            <textarea ref={msg} className="textarea textarea-bordered textarea-accent text-sm resize-none w-11/12 mr-1" placeholder='...'></textarea>
            <button className='btn btn-accent w-1/12 ml-1'  onClick={handleClick}>
                <svg viewBox='0 0 24 24' width='24' height='24'>
                    <path
                        fill="currentColor"
                        d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
                    ></path>
                </svg>
            </button>
        </div>
    )
}
