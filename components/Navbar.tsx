import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DesktopLogo from '../public/airbnb-desktop.png';
import MobileLogo from '../public/airbnb-mobile.webp';
import UserNav from './UserNav';
const Navbar = () => {
  return (
    <div>
        <nav className='w-full border-b'>
            <div className="flex items-center justify-between mx-auto px-5 lg:px-10 py-5">
               <Link href="/">
                  <Image src={MobileLogo} alt='mlogo' className='w-12 lg:hidden block'/>
                  <Image src={DesktopLogo} alt='logo' className='w-32 hidden lg:block'/>
               </Link>

               <div className="rounded-full border px-5 py-2">
                <h1>Hello from the search</h1>
               </div>

               <UserNav/>
            </div>
        </nav>
    </div>
    
  )
}

export default Navbar