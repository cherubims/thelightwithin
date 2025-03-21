'use client';

import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'


const Navbar = () => {
    const { getUser } = useKindeBrowserClient();
    const user = getUser();

    
    return (
        <nav className='py-5 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <Link href='/'>
                    <h1 className='text-3xl font-semibold'>
                        Light <span className='text-white bg-gray-900 rounded-r-md p-0.5'>Within</span>
                    </h1>
                </Link>

                {/* <div className='hidden sm:flex items-center gap-6'>
                    <Link className='text-sm font-medium hover:text-blue-500 transition-colors' href='/'>
                        Home
                    </Link>
                </div> */}
                <div className='hidden sm:flex items-center gap-6'>
                    <Link className='text-gray-600 text-sm font-medium hover:text-blue-500 transition-colors duration-300 ease-in-out' href='/dashboard'>
                        | Dashboard
                    </Link>
                </div>
            </div>

            {user ? (
                <div className='flex items-center gap-4'>
                    <p className='text-sm font-medium text-gray-600 hover:bg-gray-900 rounded-lg hover:text-white hover:py-2 px-3 duration-300 ease-in-out'>{user.given_name}</p>
                    <LogoutLink className={buttonVariants( {variant:'secondary'} )}>Logout</LogoutLink>
                </div>
            ) : (
                <div className='flex items-center gap-4'>
                <LoginLink className={buttonVariants()}>Login</LoginLink>
                <RegisterLink className={buttonVariants( {variant: 'secondary'} )}>Sign up</RegisterLink>
            </div>
            )}
        </nav>
    )
}

export default Navbar