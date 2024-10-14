import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DesktopLogo from '../public/windowlogo.png';


import UserNav from './UserNav';
const Navbar = () => {
  return (
   
        <nav className='w-full border-b'>
            <div className="flex items-center justify-between mx-auto px-5 lg:px-10 py-5">
               <Link href="/">
               
                  <Image src={DesktopLogo} alt='logo' className='w-[80px] h-[85px]lg:block'/>
               </Link>

               <div className="rounded-full border px-5 py-2">
                <h1>Hello from the search</h1>
               </div>

               <UserNav/>
            </div>
        </nav>
  
    
  )
}

export default Navbar