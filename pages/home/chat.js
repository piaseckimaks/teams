import React, { useEffect } from 'react'
import ChatApp from '../../components/chat'
import SideBar from '../../components/SideBar'
import { getUserName } from '../../controllers/UserController'
import { getSession } from '../../helpers/session'

export default function Chat({ user }) {

    return (
    <div className='flex h-screen bg-base-300' >
        <SideBar  />
        <ChatApp user={user} />
    </div>
    )
}

export async function getServerSideProps({ req }){
  
    try {
      const session = await getSession(req)
      
      if(session){
        const user = await getUserName( session.id )
        
        
        return { props: {  user: { ...user }} }
  
      }
  
      return { redirect: {destination: '/', permament: false}}
  
    } catch (error) {
      console.error(error)
      // res.status(500).end('Authentication token is invalid, please log in')
  
      return {props: { error: 'internal server error' }}
    }
  
  }