import React, { useRef } from 'react'
import SideBar from '../../components/SideBar'
import { getUserName } from '../../helpers/user'
import { getSession } from '../../helpers/session'


export default function Profile({user, avatar, handleUploadAvatar}) {
    const uploadAvatar = useRef(null)

    function handleUploadAvatar(){
      uploadAvatar.current.click()
  }

    return (
        <div className='flex h-screen bg-base-300' >
            <SideBar  />
              <div className='grid grid-cols-2 bg-gray-50  h-full w-full'>
                <div className=' bg-gray-600 flex flex-col justify-center'>
                  <h1 className='w-2/3 mx-auto text-4xl mb-6'>Manage your account:</h1>
                  {
                    ['Firstname','Lastname','Email',].map((e,i)=>(
                      <div key={i} className='w-2/3 mx-auto'>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-xl text-base-content">{e}</span>
                            </label> 
                            <input type="text" placeholder={e} className="input border-blue-400 active:outline-2 active:outline-cyan-400" />
                          </div>
                      </div>
                    ))
                  }
                </div>
                <div className='bg-gray-300'>
                      <div className="avatar my-4 w-full dropdown">
                            <div tabIndex="0" className="w-80 h-80 mask mask-hexagon mx-auto cursor-pointer border"  >
                                <img src={avatar ? avatar : '/424443.png'}/>
                                
                            </div>
                            <ul  tabIndex="0" className='ml-96 p-2 shadow menu dropdown-content bg-base-300'>
                                    <li className='rounded-none'>
                                        <button className='btn btn-sm rounded-none' onClick={handleUploadAvatar}>
                                            Upload avatar
                                        </button>
                                        <input ref={uploadAvatar} type="file" className="hidden"/>
                                    </li>
                                    <li>
                                        <button className='btn btn-sm rounded-none'>
                                            Link avatar
                                        </button>
                                    </li>
                                </ul>
                        </div>
                </div>
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