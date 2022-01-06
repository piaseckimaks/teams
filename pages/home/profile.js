import React, { useRef } from 'react'
import SideBar from '../../components/SideBar'
import { getUserName } from '../../controllers/UserController'
import { getSession } from '../../helpers/session'


export default function Profile({user, avatar, handleUploadAvatar}) {
    const { firstname, lastname } = user
    const uploadAvatar = useRef(null)

    function handleUploadAvatar(){
      uploadAvatar.current.click()
  }

    return (
        <div className='flex h-screen bg-base-300' >
            <SideBar  />
                <div className='bg-base-200 w-full p-16'>
                  <h1 className='w-1/4  text-4xl mb-6 text-success'>Manage your account:</h1>
                  {
                    [{label: 'firstname', value: firstname},{label: 'lastname', value: lastname},].map((e,i)=>(
                      <div key={i} className='w-1/4 '>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-xl text-base-content capitalize">{e.label}</span>
                            </label> 
                            <input type="text" placeholder={e.value} className="input text-lg input-bordered input-success bg-base-100 active:outline-2 active:outline-cyan-400" />
                          </div>
                      </div>
                    ))
                  }
                </div>
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