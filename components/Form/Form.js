import React from 'react'
import Link from 'next/link'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Logo from '../Logo'

export default function Form({ handleRegistration, handleLogin, isSignForm }) {


    return (
      <div className="hero h-full w-full mx-auto bg-fixed" style={{backgroundImage: 'url("https://images.pexels.com/photos/1527934/pexels-photo-1527934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")'}} >
          <div className="hero-overlay bg-opacity-40"></div> 
          <div className="text-center hero-content text-neutral-content">
            <Link href="/">
              <a>
                <Logo size="9xl" />
              </a>
            </Link>
            <div className="divider divider-vertical"></div>

            {isSignForm ? <SignIn /> : <SignUp />}

          </div>
        </div>
    )
}

