import React, { useState } from 'react'
import Form from '../components/Form/Form'
import Router from 'next/router'
import NavBar from '../components/NavBar'
import Modal from '../components/Modal'


export default function Signup() {
    const [ errorMessage, setErrorMessage ] = useState('') 


    function toggleModal(){
      document.getElementById('my-modal').click()
    }

    async function handleRegistration(e){
        e.preventDefault()
    
        console.log(e.currentTarget.password.value)
    
        const body = {
          firstname: e.currentTarget.fname.value,
          lastname: e.currentTarget.lname.value,
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
          
          const res = await response.json()

          if(response.status === 200){
            console.log('fetched')
            
            Router.push('/signin')
          }
          else{
            if(res.errNum === 1062)
              setErrorMessage('Account with that email address already exist!')
            
            toggleModal()
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
        <Modal message={errorMessage}/>
    </div>    
    )
}
