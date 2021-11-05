import Head from 'next/head'
import Image from 'next/image'
import RedirectToSignIn from '../components/RedirectToSignIn'

export default function Home({handleSubmit, user}) {

  if(!user.loggedIn)
    return <RedirectToSignIn />



  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        Welcom {user.name}
      </div>
  )
}
