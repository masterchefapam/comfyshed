import React from 'react'
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { MenuIcon } from 'lucide-react';
import Mugshot from '../public/mugshot.png';
import Image from 'next/image';
import { DropdownMenuContent } from '@radix-ui/react-dropdown-menu';
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';





const UserNav = async () => {
   const {getUser}= getKindeServerSession();

     const user = await getUser();
  return (
     <DropdownMenu>
        <DropdownMenuTrigger>
            <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                <MenuIcon className='w-6 h-6 lg:w-5 lg:h-5'/>
                <img src={user?.picture ?? "/mugshot.png" }className="h-5 w-5 rounded-full background-black" alt="image"/>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className='w-[200px] bg-gray-50 border-gray-100 '>
           {user ? (
             <>
                <DropdownMenuItem>
           <LogoutLink>Logout</LogoutLink>
           </DropdownMenuItem>
         
             </>
           ) : (
          <>
           <DropdownMenuItem>
            <RegisterLink>Register</RegisterLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <LoginLink>Sign in</LoginLink>
            </DropdownMenuItem>
          </>
           
           )
           
           }
        </DropdownMenuContent>
     </DropdownMenu>
  )
}

export default UserNav