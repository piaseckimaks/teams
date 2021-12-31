import React from 'react'
import Link from 'next/link'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Logo from '../Logo'

export default function Form({ handleRegistration, handleLogin, isSignForm }) {


    return (
      <div className=" h-full w-full mx-auto relative bg-fixed" style={{backgroundImage: 'url("https://images.pexels.com/photos/1527934/pexels-photo-1527934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")'}} >
          <div className="hero-overlay bg-opacity-40"></div> 
          <div className="absolute top-0 left-0 py-2 text-neutral-content h-full w-full flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center  overflow-auto">
            <Link href="/">
              <a className=''>
                <Logo size="9xl" />
              </a>
            </Link>
            <div className="border w-11/12 my-2 md:h-3/4 md:mx-5 md:w-0"></div>
            {isSignForm ? <SignIn handleLogin={handleLogin} /> : <SignUp handleRegistration={handleRegistration}/>}

          </div>
        </div>
    )
}

