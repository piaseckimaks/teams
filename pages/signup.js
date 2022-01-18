import React, { useState } from 'react'
import Router from 'next/router'
import Dialog from '../components/DialogWindow'
import Link from 'next/link'


const darkWP = 'https://images.pexels.com/photos/2388892/pexels-photo-2388892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'//'https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
const lightWP = 'https://images.pexels.com/photos/1029615/pexels-photo-1029615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'//'https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80'


export default function Signup({ darkMode }) {
  const [ dialogStatus, setDialogStatus ] = useState(false);
  const [ dialogTitle, setDialogTitle ] = useState(null);
  const [ dialogDescription, setDialogDescription ] = useState(null);
  const [ firstname, setFirstname ] = useState(null);
  const [ lastname, setLastname] = useState(null);
  const [ emailInput, setEmailInput ] = useState(null);
  const [ passwordInput, setPasswordInput ] = useState(null);
  const [ rePasswordInput, setRePasswordInput ] = useState(null);


  function toggleDialog(title, description){
    setDialogTitle(title);
    setDialogDescription(description);
    setDialogStatus(true);
  } 

  function handleEmailInput(e){
    setDialogTitle(null);
    setDialogDescription(null);
    setEmailInput(e.currentTarget.value);
  }

  function handleFirstnameInput(e){
    setDialogTitle(null);
    setDialogDescription(null);
    setFristnameInput(e.currentTarget.value);
  }

  function handleLastnameInput(e){
    setDialogTitle(null);
    setDialogDescription(null);
    setLastnameInput(e.currentTarget.value);
  }

  function handlePasswordInput(e){
    setDialogTitle(null);
    setDialogDescription(null);
    setPasswordInput(e.currentTarget.value);
  }

  function handleRePasswordInput(e){
    setDialogTitle(null);
    setDialogDescription(null);
    setPasswordInput(e.currentTarget.value);
  }

  function handleThirdPartyAuth(partyId){
    let partyName;
    
    partyId === 0 && (partyName = 'Google');
    partyId === 1 && (partyName = 'Twitter');
    partyId === 2 && (partyName = 'GitHub');

    toggleDialog('Info', `${partyName} authentication comming soon!`)

  }

    async function handleRegistration(e){
        e.preventDefault()
    
        console.log(e.currentTarget.password.value)
    
        const body = {
          firstname: e.currentTarget.fname.value,
          lastname: e.currentTarget.lname.value,
          email: e.currentTarget.email.value,
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
             
            setErrorMessage(res.errMsg)
            
            toggleModal()
          }
        }
        catch(error){
          console.log(error)
        } 
      }

    return (
      <>
      <div className="min-h-full flex">

        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={darkMode ? darkWP : lightWP}
            alt=""
          />
        </div>

        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 dark:bg-gray-900">
          <div className="mx-auto w-full max-w-sm lg:w-96 ">
            <div>
              {/* <h1 className='text-6xl font-bold text-blue-400 capitalize text-center'>prisma webmin</h1> */}
              <img
                className="h-20 w-auto mx-auto"
                src="/fandom.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-blue-200">Sign in to your account</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-blue-200">
                Or{' '}
                <Link href="/signin">
                  <a className="font-medium text-indigo-500 hover:text-indigo-400">
                    sign in to your account
                  </a>
                </Link>
              </p>
            </div>

            <div className="mt-8">
              <div>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-blue-200 dark:text-blue-200">Sign in with</p>

                  <div className="mt-1 grid grid-cols-3 gap-3 ">
                    <div>
                      <a
                        href="#"
                        onClick={() => handleThirdPartyAuth(0)}
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-blue-200 dark:border-blue-200 dark:text-gray-700 hover:dark:bg-blue-300 hover:dark:border-blue-300"
                      >
                        <span className="sr-only ">Sign in with Google</span>
                        <svg className="w-5 h-5 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                        </svg>
                      </a>
                    </div>

                    <div>
                      <a
                        href="#"
                        onClick={() => handleThirdPartyAuth(1)}
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-blue-200 dark:border-blue-200 dark:text-gray-700 hover:dark:bg-blue-300 hover:dark:border-blue-300"
                      >
                        <span className="sr-only">Sign in with Twitter</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </div>

                    <div>
                      <a
                        href="#"
                        onClick={() => handleThirdPartyAuth(2)}
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-blue-200 dark:border-blue-200 dark:text-gray-700 hover:dark:bg-blue-300 hover:dark:border-blue-300"
                      >
                        <span className="sr-only">Sign in with GitHub</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>

                    
                  </div>
                </div>

                <div className="mt-6 relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300 dark:border-blue-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500 dark:text-blue-200 dark:bg-gray-900">Or continue with</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <form action="#" onSubmit={handleRegistration} className="space-y-6">

                <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 dark:text-blue-200">
                      Firstname
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        id="firstname"
                        name="firstname"
                        autoComplete="firstname"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-900 dark:border-blue-300 dark:text-blue-200"
                        onChange={handleFirstnameInput}
                      />
                    </div>
                  </div>

                <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 dark:text-blue-200">
                      Lastname
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        id="lastname"
                        name="lastname"
                        autoComplete="lastname"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-900 dark:border-blue-300 dark:text-blue-200"
                        onChange={handleLastnameInput}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-blue-200">
                      Email address
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        id="email"
                        name="email"
                        autoComplete="email"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-900 dark:border-blue-300 dark:text-blue-200"
                        aria-invalid="true"
                        aria-describedby="email-error"
                        onChange={handleEmailInput}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-blue-200">
                      Password
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-900 dark:border-blue-300 dark:text-blue-200"
                        onChange={handlePasswordInput}
                      />
                    </div>
                  </div>


                  <div className="space-y-1">
                    <label htmlFor="re-password" className="block text-sm font-medium text-gray-700 dark:text-blue-200">
                      Repeat password
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        id="re-password"
                        name="re-password"
                        type="re-password"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-900 dark:border-blue-300 dark:text-blue-200"
                        onChange={handleRePasswordInput}
                      />
                    </div>
                  </div>

                  <div className='text-white dark:text-gray-900'>
                    label 
                    <button
                      type="submit"
                      className={`w-full flex justify-center py-2 px-4  border border-transparent rounded-md shadow-sm text-sm font-medium text-white uppercase
                        bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
                        dark:bg-blue-200 hover:dark:bg-blue-300 focus:dark:outline-none focus:dark:ring-2 focus:dark:ring-offset-2 focus:dark:ring-blue-100 dark:text-gray-700`}
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Dialog open={dialogStatus} setOpen={setDialogStatus} title={dialogTitle} description={dialogDescription} />
    </>  
    )
}
