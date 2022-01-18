import React, { useEffect } from 'react'
import ChatApp from '../../components/chat'
import SideBar from '../../components/SideBar'
import { getAllUsers, getUserName } from '../../controllers/UserController'
import { getSession } from '../../helpers/session'

export default function Chat({ user, possibleFriends }) {

    return (
    <div className='flex h-screen bg-base-300' >
        <SideBar  />
        <ChatApp user={user} possibleFriends={possibleFriends}/>
    </div>
    )
}

export async function getServerSideProps({ req }){
  
    try {
      const session = await getSession(req)
      
      if(session){
        const { id }= session;
        const user = await getUserName( session.id );
        const possibleFriends = await getAllUsers();
        
        return { props: {  user: { id, ...user }, possibleFriends: possibleFriends } }
  
      }
  
      return { redirect: {destination: '/', permament: false}}
  
    } catch (error) {
      console.error(error)
      // res.status(500).end('Authentication token is invalid, please log in')
  
      return {props: { error: 'internal server error' }}
    }
  
  }