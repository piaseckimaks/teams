import React from 'react'
import ChatApp from '../../components/chat'
import SideBar from '../../components/SideBar'
import { getUserName } from '../../helpers/user'
import { getSession } from '../../helpers/session'

export default function Profile({user}) {
    return (
        <div className='flex h-screen bg-base-300' >
            <SideBar  />
            
        </div>
    )
}

export async function getServerSideProps({ req }){
  
    try {
      const session = await getSession(req)
      
      if(session){
        const user = (session && (await getUserName( session.id ))) ?? null
      
        
        return { props: {  user: { ...user }} }
  
      }
  
      return { redirect: {destination: '/', permament: false}}
  
    } catch (error) {
      console.error(error)
      // res.status(500).end('Authentication token is invalid, please log in')
  
      return {props: { error: 'internal server error' }}
    }
  
  }