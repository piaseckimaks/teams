
import { useEffect, useState } from 'react'
import { getSession } from '../../helpers/session'
import { findUser } from '../../helpers/user'
import Link from 'next/link'
import SideBar from '../../components/SideBar'
import NavBar from '../../components/NavBar'
import Chat from '../../components/chat'
import Dashboard from '../../components/Dashboard/Dashboard'



export default function Home({handleSubmit, user}) {
  const [ currentSection, setCurrentSection ] = useState(0) 

  const sections = [
    {component: <Dashboard user={user}/>},
    {component: <Chat user={user}/>},
  
  ]
  
  function handleNavigation(index){
    setCurrentSection(index)
    console.log(currentSection)
  }

  return (
    <div className='flex h-screen bg-base-300' >
        <SideBar handleNavigation={handleNavigation}/>
          <section className="flex h-screen w-screen" >
            {sections[currentSection].component}
          </section>
        
    </div>
  )
}



export async function getServerSideProps({ req }){
  
  try {
    const session = await getSession(req)
    
    if(session){
      const { email: username } = session
      const user = (session && (await findUser({ username }))) ?? null  
    
      if(user)
        return { props: { user: {id: user.id, firstname: user.firstname, lastname: user.lastname,} } }

    }

    return { redirect: {destination: '/', permament: false}}

  } catch (error) {
    console.error(error)
    // res.status(500).end('Authentication token is invalid, please log in')

    return {props: { error: 'internal server error' }}
  }

}