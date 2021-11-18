import React from 'react'
import Form from '../components/Form/Form'
import Router from 'next/router'
import NavBar from '../components/NavBar'
import Modal from '../components/Modal'


export default function signup() {

    async function handleRegistration(e){
        e.preventDefault()
    
        console.log(e.currentTarget.password.value)
    
        const body = {
          firstname: e.currentTarget.firstname.value,
          lastname: e.currentTarget.lastname.value,
          username: e.currentTarget.email.value,
          password: e.currentTarget.password.value
        }
    
        console.log(body)
    
        try{
          console.log('trying to register user...')
          const response = await fetch(
            '/api/auth/register',
            {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(body)
            }
          )
          
          if(response.status === 200){
            console.log('fetched')
            
            Router.push('/signin')
          }
          else{
            console.log(error.message)
            throw new Error(await response.text())
          }
        }
        catch(error){
          console.log(error)
        } 
      }

    return (
      <div className="h-screen">
        {/* <NavBar /> */}
        <Form handleRegistration={handleRegistration} />
        {/* <Modal message={errorMessage}/> */}
    </div>    
    )
}
