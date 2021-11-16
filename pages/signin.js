import Head from 'next/head'
import Image from 'next/image'
import Form from '../components/Form'
import useSWR from 'swr'
import Router from 'next/router'
import Modal from '../components/Modal'
import { useState } from 'react'
import NavBar from '../components/NavBar'


export default function Signin() {
  const [errorMessage, setErrorMessage] = useState('')

  function toggleModal(){
    document.getElementById('my-modal').click()
  }

  async function handleLogin(e){
    e.preventDefault()

    const body = {
      username: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    }

    const response = await fetch(
      '/api/auth/login',
      {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(body),
      }
    )

    if(response.status === 200){
      console.log('fetched')
      
      Router.push('/home')
    }
    else{
      const errMsg = await response.json()

      setErrorMessage( errMsg.error )
      toggleModal()
    }
  }

  return (
    <div className="h-screen">
      <NavBar />
      <Form handleLogin={handleLogin} isSignForm />
      <Modal message={errorMessage}/>
    </div>    
  )
}