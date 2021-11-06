import Router from 'next/router'
import { useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [ user, setUser ] = useState({name: null, loggedIn: false})
  const [ errorMsg, setErrorMsg] = useState(null)
  async function handleLogin(e){
    e.preventDefault()


    console.log('started handle')
    const body = {
      username: e.currentTarget.username.value,
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

  pageProps = {...pageProps, user, handleLogin}
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}




export default MyApp
