import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useEffect, useState } from 'react'
import Dialog from '../components/DialogWindow'

interface DialogData{
  type: number,
  message: string,
  controls: JSX.Element | JSX.Element[]
} 

export default function MyApp({ Component, pageProps }: AppProps ): JSX.Element {
  // const user = useUser()
  const [ darkMode, setDarkMode ] = useState<Boolean>(null)
  const [ openDialogWindow, setOpenDialogWindow ] = useState<Boolean>(null);
  const [ dialogContent, setDialogContent ] = useState<Object>(null); 

  useEffect(() => {
    
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        localStorage.removeItem('theme');
        setDarkMode(event.matches ? true : false);
        toggleDarkMode(setDarkMode);
      });
    
    toggleDarkMode(setDarkMode)
  },[])

  function toggleDialogWindow( dialogData: DialogData ): void{
    setDialogContent(dialogData);
    setOpenDialogWindow(true);
  }

  pageProps = {darkMode, toggleDialogWindow, ...pageProps}
  return (
    <div className="h-full" data-theme="">
      {/* <Switch toggleDarkMode={toggleDarkMode} forceUpdate={forceUpdate} /> */}
      <Dialog open={openDialogWindow} setOpen={setOpenDialogWindow} data={dialogContent} />
      <Component {...pageProps} />
    </div>
  )
}

function toggleDarkMode(setDarkMode: Function){

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    console.log('dark');
    document.documentElement.classList.add('dark')

    setDarkMode(true);
  } else {
    console.log('light');
    document.documentElement.classList.remove('dark');
    setDarkMode(false);
  }
}



