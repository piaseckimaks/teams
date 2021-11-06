import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import RedirectToSignIn from '../components/RedirectToSignIn'
import { useUser } from '../hooks/useUser'

export default function Home({handleSubmit}) {
  const user = useUser()

  if(!user)
    return <RedirectToSignIn />



  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        Welcom {user.username}
        <Link href="/api/auth/logout"><a className="bg-blue-600"> log out</a></Link>
      </div>
  )
}
