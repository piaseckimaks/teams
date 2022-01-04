import React, { useEffect } from 'react'
import ChatApp from '../../components/chat'
import SideBar from '../../components/SideBar'
// import { getUserMessages } from '../../database'
import { getSession } from '../../helpers/session'

export default function Chat({ user}) {

    return (
    <div className='flex h-screen bg-base-300' >
        <SideBar  />
        <p>fuck</p>
        <Chat />
    </div>
    )
}

export async function getServerSideProps({ req }){
  
    try {
      const session = await getSession(req)
      
      if(session){
        const { id } = session
        console.log(id)
        // const messages = (session && (await getUserMessages({ id }))) ?? null
      
        
        return { props: {  user: {...session} } }
  
      }
  
      return { redirect: {destination: '/', permament: false}}
  
    } catch (error) {
      console.error(error)
      // res.status(500).end('Authentication token is invalid, please log in')
  
      return {props: { error: 'internal server error' }}
    }
  
  }