import React, { useState } from 'react'
import SideBar from '../../components/SideBar'
import CreateModel from '../../components/CreateModel'
import Dropdown from '../../components/Dropdown'


const tools = [
  {content: <div>Choose tool from the list</div>},
  {content: <CreateModel />},

]

export default function Admin({ user }) {
    const [ currentTool, setCurrentTool ] = useState(0)

    return (
    <div className='flex h-screen bg-base-300' >
        <SideBar  />
        <div className='w-full h-full flex'>
          <div className='w-1/5 h-full bg-base-300'>
            <h1 className='text-center text-2xl my-2 uppercase font-semibold text-success'>tools</h1>
            <ul className='menu'>
              <li tabIndex='0' className='dropdown dropdown-right bg-base-200'>
                <Dropdown />
              </li>
            </ul>
          </div>
          <div className='w-full bg-base-100'>
            
            {tools[currentTool].content}
          </div>
        </div>
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