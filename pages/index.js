import { Fragment, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon, UserGroupIcon } from '@heroicons/react/solid'
import { useUser } from '../hooks/useUser'
import Link from 'next/dist/client/link'
import NavBar from '../components/NavBar'
import Image from 'next/image'

const features = [
    { 
      name: 'UI', 
      svg: 'undraw_image_post_re_25wd.svg' 
    },
    { 
      name: 'Features',
      svg: 'undraw_shared_goals_re_jvqd.svg' 
    },
    { 
      name: 'Marketplace', 
      svg: 'undraw_setup_analytics_re_foim.svg'
    },
  ]

const sections = [
  {
    name: 'Intro',
    content: (
        <div className="hero h-full w-full mx-auto bg-fixed" style={{backgroundImage: 'url("https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")'}} >
          <div className="hero-overlay bg-opacity-40"></div> 
          <div className="text-center hero-content text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                <span className="text-9xl font-semibold text-secondary-content ">
                  crew
                </span>
                <span className="text-9xl font-bold text-accent ">
                    IT
                </span>
                  </h1> 
              <p className="mb-5 text-xl text-secondary-content">
                    Your place to collaborate, plan and get things done. It is open source web application for everyone from small group of friends to big corporate teams.
                  </p> 
                <button className="btn btn-accent btn-sm mr-2">create a crew</button>
                <button className="btn btn-accent btn-sm">learn more</button>
            </div>
          </div>
        </div>
    )
  },
  {
    name: 'Features',
    content: (
      <div className="hero h-full w-full mx-auto bg-base-200">
        
        <div className="text-center flex flex-col hero-content text-neutral-content">
          <h1 className="text-5xl my-10 uppercase">core features</h1>
          <div className="flex">

          {
            features.map((e,i)=>(
              <div className="card mx-5 text-center shadow-2xl bg-gradient-to-r from-accent-focus to-accent transform hover:cursor-pointer hover:scale-110 transition duration-300" key={i}>
                <figure className="px-10 pt-10 h-64">
                  <img src={e.svg} className="rounded-xl"/>
                </figure> 
                <div className="card-body">
                  <h2 className="card-title">shadow, center, padding</h2> 
                  <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
                  <div className="justify-center card-actions">
                    <button className="btn btn-outline btn-base-200">More info</button>
                  </div>
                </div>
              </div>  
            ))
          }
         
          </div>
        </div>
      </div>
  )
  },
  {
    name: 'Mobile',
    content: (
      <div className="hero h-full w-full mx-auto bg-fixed" style={{backgroundImage: 'url("https://images.pexels.com/photos/3694711/pexels-photo-3694711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")'}} >
        <div className="hero-overlay bg-opacity-40"></div> 

        <div className="relative h-full w-full">
          
          <div className="absolute top-52 left-1/4 card glass lg:card-side text-neutral-content w-1/2">
              <figure className="p-6">
                <img src="https://picsum.photos/id/1005/300/200" className="rounded-lg shadow-lg"/>
              </figure> 
              <div className="max-w-md card-body">
                <h2 className="card-title">Glass</h2> 
                <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
                <div className="card-actions">
                  <button className="btn glass rounded-full">Get Started</button>
                </div>
              </div>
            </div>
            



          <footer className="absolute p-10 footer bg-accent text-primary-content footer-center bottom-0">
            <div>
                <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="inline-block fill-current">
                  <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                </svg> 
                <p className="font-bold">ACME Industries Ltd. 
                  <br/>Providing reliable tech since 1992
                </p> 
                <p>Copyright © 2021 - All right reserved</p>
              </div> 
              <div>
                <div className="grid grid-flow-col gap-4">
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a> 
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </a> 
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>
                </div>
              </div>
          </footer>
        </div>
      </div>
  )
  },
]

export default function Index({ user}) {
    
    // useEffect(
    //   function(){
    //     let options = {
    //       root: document.querySelector('#scrollArea'),
    //       rootMargin: '0px',
    //       threshold: 1.0
    //     }
        
    //     let observer = new IntersectionObserver(callback, options);
    //   }
    // )


    return (
      <div id='scrollArea'>
        <NavBar />
        {
          sections.map((e,i)=>(
            <section className="w-screen h-screen relative" id={'section'+i} key={i}>
              { e.content }
            </section>
          ))
        }
      </div>

    )

   
}



























 // if(!user)
    //     return (
    //         <div className="flex justify-center items-center">
    //             <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500">

    //             </div>
    //         </div>
    //     )

    // return (
    //     <>
    //     <div className="relative bg-white overflow-hidden">
    //     <div className="mx-auto">
    //       <div className="relative z-10 pb-8 bg-white sm:pb-12 md:pb-16  xl:max-w-5xl lg:w-full lg:pb-20 ">
            
  
    //         <Popover>
    //           <div className="relative pt-6 px-4 sm:px-6 lg:px-8 ">
    //             <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
    //               <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
    //                 <div className="flex items-center justify-between w-full md:w-auto">
    //                   <a href="#">
    //                     <span className="sr-only">Workflow</span>
    //                     <img
    //                       className="h-8 w-auto sm:h-10"
    //                       src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
    //                     />
    //                   </a>
    //                   <div className="-mr-2 flex items-center md:hidden">
    //                     <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
    //                       <span className="sr-only">Open main menu</span>
    //                       <MenuIcon className="h-6 w-6" aria-hidden="true" />
    //                     </Popover.Button>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
    //                 {navigation.map((item) => (
    //                   <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
    //                     {item.name}
    //                   </a>
    //                 ))}
    //                 <Link href="/signin">
    //                 <a  className="font-medium text-indigo-600 hover:text-indigo-500">
    //                   Log in
    //                 </a>
    //                 </Link>
    //               </div>
    //             </nav>
    //           </div>
  
    //           <Transition
    //             as={Fragment}
    //             enter="duration-150 ease-out"
    //             enterFrom="opacity-0 scale-95"
    //             enterTo="opacity-100 scale-100"
    //             leave="duration-100 ease-in"
    //             leaveFrom="opacity-100 scale-100"
    //             leaveTo="opacity-0 scale-95"
    //           >
    //             <Popover.Panel
    //               focus
    //               className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
    //             >
    //               <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
    //                 <div className="px-5 pt-4 flex items-center justify-between">
    //                   <div>
    //                     <img
    //                       className="h-8 w-auto"
    //                       src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
    //                       alt=""
    //                     />
    //                   </div>
    //                   <div className="-mr-2">
    //                     <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
    //                       <span className="sr-only">Close main menu</span>
    //                       <XIcon className="h-6 w-6" aria-hidden="true" />
    //                     </Popover.Button>
    //                   </div>
    //                 </div>
    //                 <div className="px-2 pt-2 pb-3 space-y-1">
    //                   {navigation.map((item) => (
    //                     <a
    //                       key={item.name}
    //                       href={item.href}
    //                       className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
    //                     >
    //                       {item.name}
    //                     </a>
    //                   ))}
    //                 </div>
    //                 <a
    //                   href="#"
    //                   className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
    //                 >
    //                   Log in
    //                 </a>
    //               </div>
    //             </Popover.Panel>
    //           </Transition>
    //         </Popover>
  

    //         <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
    //           <div className="sm:text-center xl:text-left">
    //             <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
    //               <span className="block xl:inline">Data to enrich your</span>{' '}
    //               <span className="block text-indigo-600 xl:inline">online business</span>
    //             </h1>
    //             <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
    //               Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
    //               fugiat veniam occaecat fugiat aliqua.
    //             </p>
    //             <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
    //               <div className="rounded-md shadow">
    //                 <a
    //                   href="#"
    //                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
    //                 >
    //                   Get started
    //                 </a>
    //               </div>
    //               <div className="mt-3 sm:mt-0 sm:ml-3">
    //                 <a
    //                   href="#"
    //                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
    //                 >
    //                   Live demo
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </main>
    //         <svg
    //           className="hidden lg:block absolute right-0 inset-y-0 h-full text-white transform translate-x-1/2"
    //           fill="currentColor"
    //           viewBox="0 0 100 100"
    //           preserveAspectRatio="none"
    //           aria-hidden="true"
    //         >
    //           <polygon points="50,0 100,0 50,100 0,100" />
    //         </svg>
    //       </div>
    //     </div>
    //     <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    //       <img
    //         className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
    //         src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
    //         alt=""
    //       />
    //     </div>
        
    //   </div>
    //   <div className="py-12 bg-white">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="lg:text-center">
    //       <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
    //       <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
    //         A better way to send money
    //       </p>
    //       <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
    //         Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
    //         accusamus quisquam.
    //       </p>
    //     </div>

    //     <div className="mt-10">
    //       <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
    //         {features.map((feature) => (
    //           <div key={feature.name} className="relative">
    //             <dt>
    //               <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
    //                 <feature.icon className="h-6 w-6" aria-hidden="true" />
    //               </div>
    //               <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
    //             </dt>
    //             <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
    //           </div>
    //         ))}
    //       </dl>
    //     </div>
    //   </div>
    // </div>
    //   </>
    // )