import React from 'react'
import { NAVBAR_HEIGHT } from '@/lib/constants'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button';


const Navbar = () => {
  return(
   <div 
  className='fixed top-0 left-0 w-full z-50 sh shadow-xl'
    style={{ height: `${NAVBAR_HEIGHT}px` }}
  >
    <div className='flex items-center justify-between w-full px-8 py-3 bg-primary-700 text-white' >
      <div className='flex items-center gap-4 md:gap-6 font-bold'>
        <Link 
          href="/" 
          className='cursor-pointer hover:!text-primary-300 transition-colors'
          scroll={false}
        >
          <div className='flex items-center gap-3'>
            <Image 
              src="/logo.svg"
              width={24}
              height={24}
              alt="Renture"
              className='w-6 h-6 object-cover'
              priority
            />
            <div className='text-xl font-bold'>
              RENT
              <span className= 'text-secondary-500 hover:!text-primary-300'>URE</span>
              
            </div>
          </div>
        </Link>
      </div>

     <p className='text-primary-200 hidden md:block'>Discover your perfect rental property with our advanced search  </p>

     <div className='flex items-center gap-5'>
      <Link
        href="/signin">
          <Button
            variant='outline'
            className= 'border-white bg-transparent hover:bg-white hover:text-primary-700 transition-all text-white font-semibold px-4 py-2 rounded-lg'
          >Sign In</Button>
        </Link>

             <Link
        href="/signout">
          <Button
            variant='secondary'
            className= 'border-white bg-secondary-600 hover:bg-white hover:text-primary-700 transition-all text-white font-semibold px-4 py-2 rounded-lg shadow-slate-900'
          >Sign Out</Button>
        </Link>
     </div>

    </div>
  </div>

  );
};

export default Navbar