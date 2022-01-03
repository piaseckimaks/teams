
import { useEffect } from 'react'
import { getSession } from '../../helpers/session'
import { findUser } from '../../helpers/user'
import Link from 'next/link'
import SideBar from '../../components/UserInterface/SideBar'

// const teams = [1,2,3,4,5]

// const agenda = Array.from(Array(30).keys())

export default function Home({handleSubmit, user}) {
  
  useEffect(()=> console.log(user))
    

  return (
    <div className='flex h-screen p-1 bg-base-300'>
      <SideBar />
        <div className='h-full w-full flex justify-center items-center border'>
          <div className='text-center'>
            <p className='mb-1'>Logged as {user.firstname} {user.lastname}</p>
            <Link href="/api/auth/logout"><a className='btn btn-primary'> logout </a></Link> 
          </div>

      </div>

    </div>
  )
}



export async function getServerSideProps({ req }){
  
  try {
    const session = await getSession(req)
    const {email: username} = session
    const user = (session && (await findUser({ username }))) ?? null
    console.log('from /auth/user', user)
 
    // res.status(200).json({ user })

    if(user)
      return { props: { user: {id: user.id, firstname: user.firstname, lastname: user.lastname,} } }

    return { redirect: {destination: '/', permament: false}}

  } catch (error) {
    console.error(error)
    // res.status(500).end('Authentication token is invalid, please log in')

    return {props: { error: 'internal server error' }}
  }

}