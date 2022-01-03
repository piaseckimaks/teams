import { useState } from 'react'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps, user }) {
  // const user = useUser()
  const [ errorMsg, setErrorMsg] = useState(null)
  
  pageProps = {user, ...pageProps}
  return (
    <div className="" data-theme="">
      <Component {...pageProps} />
    </div>
  )
}





