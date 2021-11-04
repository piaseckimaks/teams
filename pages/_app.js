import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  return <Component {...pageProps} />
}


async function Signin(user){
  const response = await fetch('/api/auth')
  const responseJSON = await response.json()
  

}

export default MyApp
