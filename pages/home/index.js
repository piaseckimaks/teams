import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router'
import RedirectToSignIn from '../../components/RedirectToSignIn'
import { useUser } from '../../hooks/useUser'
import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { getSession } from '../../helpers/session'
import { findUser } from '../../helpers/user'
import NavBar from '../../components/NavBar'
import { UserInterface } from '../../components/UserInterface/'

export default function Home({handleSubmit, user}) {
  
  useEffect(()=> console.log(user))


  return (
    <UserInterface>
      This is main page of user interface
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