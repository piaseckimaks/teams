import Router from 'next/router'
import { useState } from 'react'
import '../styles/globals.css'
import { useUser } from '../hooks/useUser'

function MyApp({ Component, pageProps }) {
  const user = useUser()
  const [ errorMsg, setErrorMsg] = useState(null)

  async function handleRegistration(e){
    e.preventDefault()

    console.log(e.currentTarget.password.value)

    const body = {
      firstname: e.currentTarget.firstname.value,
      lastname: e.currentTarget.lastname.value,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password?.value
    }

    console.log(body)

    try{
      console.log('trying to register user...')
      const response = await fetch(
        '/api/auth/register',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(body)
        }
      )
      
      if(response.status === 200){
        console.log('fetched')
        
        Router.push('/signin')
      }
      else{
        console.log(error.message)
        throw new Error(await response.text())
      }
    }
    catch(error){
      setErrorMsg(error.message)
    } 
  }

  async function handleLogin(e){
    e.preventDefault()


    console.log('started handle')
    const body = {
      username: e.currentTarget.email.value,
      password: e.currentTarget.password.value
    }

    if(errorMsg)
      setErrorMsg(null)

    try{
      console.log('trying to fetch...')
      const response = await fetch(
        '/api/auth/login',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(body)
        }
      )
      
      if(response.status === 200){
        console.log('fetched')
        
        Router.push('/')
      }
      else{
        console.log(error.message)
        throw new Error(await response.text())
      }
    }
    catch(error){
      setErrorMsg(error.message)
    }  
  }

  pageProps = {...pageProps, user, handleLogin, handleRegistration}
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}




export default MyApp
