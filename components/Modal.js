import React from 'react'

export default function Modal({ message, }) {


    return (
        <div>
            <label id="toggle-modal" htmlFor="my-modal" className="absolute modal-button"></label>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                <p className="text-center">{message}</p> 
                <div className="modal-action">
                    <label htmlFor="my-modal" className="btn btn-accent">OK</label> 
                    {/* <label htmlFor="my-modal" className="btn">Close</label> */}
                </div>
                </div>
            </div>
        </div>
    )
}
