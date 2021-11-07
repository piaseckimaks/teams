import Head from 'next/head'
import Image from 'next/image'
import Form from '../components/Form'

export default function signin({handleLogin}) {

  return (
    <Form handleLogin={handleLogin} isSignForm={true}  />
  )
}