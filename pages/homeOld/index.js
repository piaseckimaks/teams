
import { useEffect, useState } from 'react'
import { getSession } from '../../helpers/session'
import Link from 'next/link'
import SideBar from '../../components/SideBar'
import NavBar from '../../components/NavBar'
import Chat from '../../components/chat'
import Dashboard from '../../components/Dashboard/Dashboard'
import { getUserName } from '../../controllers/UserController'



export default function Home({handleSubmit, user}) {
  const { firstname, lastname} = user 


  return (
    <div className='flex h-screen bg-base-300' >
        <SideBar />
        <div className='w-full h-full p-16'>
        <span className='text-2xl text-lime-100 font-semibold'>Welcome,</span><span className='text-4xl font-bold text-success'> {firstname}!</span>

        </div>
    </div>
  )
}



export async function getServerSideProps({ req }){
  
  try {
    const session = await getSession(req)
    
    if(session){
      const { id } = session
      const user = (session && (await getUserName( id))) ?? null  
    
      if(user)
        return { props: { user: {firstname: user.firstname, lastname: user.lastname,} } }

    }

    return { redirect: {destination: '/', permament: false}}

  } catch (error) {
    console.error(error)
    // res.status(500).end('Authentication token is invalid, please log in')

    return {props: { error: 'internal server error' }}
  }

}