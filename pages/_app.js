import Router from 'next/router'
import { useState } from 'react'
import '../styles/globals.css'
import { useUser } from '../hooks/useUser'

export default function MyApp({ Component, pageProps }) {
  // const user = useUser()
  const [ errorMsg, setErrorMsg] = useState(null)
  
  return (
    <div className="bg-base-100" data-theme="">
      <Component {...pageProps} />
    </div>
  )
}





