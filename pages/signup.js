import React from 'react'
import Form from '../components/Form'

export default function signup({handleLogin}) {
    return (
        <Form handleLogin={handleLogin} isSignForm={false}/>
    )
}
