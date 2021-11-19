import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router'
import RedirectToSignIn from '../../components/RedirectToSignIn'
import { useUser } from '../../hooks/useUser'
import { Fragment, useEffect } from 'react'
import { BellIcon, MenuIcon, XIcon, DotsHorizontalIcon, ChevronDownIcon  } from '@heroicons/react/outline'
import { LightningBoltIcon } from '@heroicons/react/solid'
import { getSession } from '../../helpers/session'
import { findUser } from '../../helpers/user'
import NavBar from '../../components/NavBar'
import { UserInterface } from '../../components/UserInterface/'
import Card from '../../components/UserInterface/Card'

const teams = [1,2,3,4,5]

const agenda = Array.from(Array(30).keys())

export default function Home({handleSubmit, user}) {
  
  useEffect(()=> console.log(user))


  return (
    <UserInterface>
      <Card className="w-80">
        <p className="text-center uppercase">your crews</p>
        <div className="divider m-0"/>

        <ul>
          {
            teams.map((e,i)=>(
              <li key={i} className="h-8 bg-base-200 hover:bg-base-300 flex cursor-pointer w-full border-base-100 border-b-2 relative transform active:scale-95 duration-200">
                <span className="absolute left-1 uppercase">crew name</span>
                  <div data-tip="you'er leader of crew" className="tooltip tooltip-left w-5 absolute right-1 my-1">
                    <LightningBoltIcon className="text-accent" />
                  </div>
              </li>
            ))
          }
        </ul>
      </Card>
      <Card className="w-1/2">
      <p className="text-center uppercase">messages</p>
      <div className="divider m-0"/>
      <table className="w-full">
        <thead className="w-full">
          <tr>
            <th ></th>
            <th >Title</th>
            <th >From</th>
            <th className="w-1/5">Date</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {
            teams.map((e,i)=>(
              <tr key={i} className="h-8 bg-base-200 hover:bg-base-300 cursor-pointer border-base-100 border-b-2">
                <td>
                  <div className=" h-full flex justify-center items-center border-white border-r-2 text-center">
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-accent" /> 
                  </div>
                </td>
                <td>
                  <div className=" h-full text-center border-white border-r-2">
                    <span className="link">Some title of message</span>
                  </div>
                </td>
                <td>
                  <div className="  h-full text-center border-white border-r-2">
                    <span>Joe Doe</span>
                  </div>
                </td>
                <td>
                  <div className="  h-full text-center">
                    <span>10.10.10 16:00</span>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </Card>
      <Card className="w-96">
        <p className="text-center uppercase">chat</p>
        <div className="divider m-0"/>
        
        <div className="w-full bg-base-200 flex cursor-pointer border-base-300 border-b-2">
          <p className="uppercase text-center text-2xs">avaiable</p>
          <ChevronDownIcon width="15px"/>
        </div>
        
        <div className="w-full bg-base-200 flex cursor-pointer border-base-300 border-b-2">
          <p className="uppercase text-center text-2xs">busy</p>
          <ChevronDownIcon width="15px"/>
        </div>

        <div className="w-full bg-base-200 flex cursor-pointer border-base-300 border-b-2">
          <p className="uppercase text-center text-2xs">offline</p>
          <ChevronDownIcon width="15px"/>
        </div>

      </Card>
      <Card className="w-1/4 h-3/6">
        <p className="text-center uppercase">agenda</p>
        <div className="divider m-0"/>

        <div className=" flex flex-wrap justify-start">
          {
            agenda.map((e,i)=>(
              <div key={i} className={`w-14 h-14 bg-base-200 m-0.5 transform duration-150 hover:scale-110 cursor-pointer hover:bg-accent`}>
                {i + 1}
              </div>
            ))
          }
        </div>
        <div className="divider m-0"/>
        <h1 className="text-center m-0 uppercase ">today</h1>
        <ul className="h-16 overflow-auto">
          {
            [1,2,3,4,5].map((e,i)=> <li key={i} >- some planned stuff</li>)
          }
        </ul>
      </Card>

      <Card className="w-2/3 h-3/6">
        <p className="text-center uppercase">tasks</p>
        <div className="divider m-0"/>

        <table className="w-full">
        <thead className="w-full">
          <tr>
            <th className="w-3/4">task</th>
            <th >status</th>
            <th >deadline</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {
            teams.map((e,i)=>(
              <tr key={i} className="h-8 bg-base-200 hover:bg-base-300 cursor-pointer border-base-100 border-b-2">
                <td>
                  <div className=" h-full text-center border-white border-r-2">
                    <span >Some task to be done</span>
                  </div>
                </td>
                <td>
                  <div className="  h-full text-center border-white border-r-2 px-1">
                    <progress className="progress progress-accent bg-base-300" value={i%2 ? 50 : 75} max="100"></progress> 
                  </div>
                </td>
                <td>
                  <div className=" text-center">
                    <span>10.10.10 16:00</span>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </Card>
      
    </UserInterface>
  )
}



export async function getServerSideProps({ req }){
  
  try {
    const session = await getSession(req)
    const user = (session && (await findUser(session))) ?? null
    console.log('from /auth/user', user)
 
    // res.status(200).json({ user })

    if(user)
      return { props: { user: {id: user.id, firstname: user.firstname, lastname: user.lastname,} } }

    return { props: {user: 'not found'}}

  } catch (error) {
    console.error(error)
    // res.status(500).end('Authentication token is invalid, please log in')

    return {props: { error: 'internal server error' }}
  }

}