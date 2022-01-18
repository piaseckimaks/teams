/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon, InformationCircleIcon } from '@heroicons/react/outline'

export default function DialogWindow({open, setOpen, data}) {
  const [ color, setColor ] = useState<string>(null);
  const [ title, setTitle ] = useState<string>(null);
  const [ icon, setIcon ] = useState(null)

  useEffect(
    function(): void{
      switch(data?.type){
        case 0: {
          setColor("red");
          setTitle("error")
        };
        break;
        case 1: {
          setColor("blue");
          setTitle("info")
        };
        break;
        case 2: {
          setColor("orange");
          setTitle("warning");
        };
        break;
      }
    }
  )

  function handleOpen(status){
      setOpen(status);
  }

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={false} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={() => handleOpen(true)}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full dark:bg-gray-900">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-800">
                <div className="sm:flex sm:items-start">
                  <div className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-${color}-100 sm:mx-0 sm:h-10 sm:w-10`}>
                    {title?.toLowerCase() === 'error' && <ExclamationIcon className="h-6 w-6 text-red-800 dark:text-red-600" aria-hidden="true" />}
                    {title?.toLowerCase() === 'info' && <InformationCircleIcon className="h-6 w-6 text-blue-800 dark:text-blue-600" aria-hidden="true" />}
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-red-800 dark:text-red-600 uppercase font-bold">
                      {title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-red-500 dark:text-red-200">
                        {data?.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse dark:bg-gray-900 ">
                {
                  data?.controlls ?
                  <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
                  dark:bg-blue-200 hover:dark:bg-blue-300 focus:dark:outline-none focus:dark:ring-2 focus:dark:ring-offset-2 focus:dark:ring-blue-100 dark:text-gray-700 sm:ml-3 sm:w-auto sm:text-sm uppercase"
                  onClick={() => handleOpen(false)}
                  >
                    ok
                  </button>
                  :
                  data?.controlls
                }
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}