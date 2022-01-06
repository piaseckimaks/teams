import React, { useState } from 'react'
import SideBar from '../../components/SideBar'
import CreateModel from '../../components/CreateModel'


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
                <span className='uppercase flex justify-end cursor-pointer hover:bg-success hover:text-neutral' onClick={() => setCurrentTool(1)}>
                  <span className='mr-2'>database management</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                  </svg>
                </span>
                <ul tabIndex='0' className='dropdown-content menu'>
                  <li>
                    <a>
                      option
                    </a>
                  </li>
                </ul>
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