import React from 'react'
import {CircularText} from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='absolute left-4 bottom-4 flex items-center justify-center overflow-hidden md:bottom-[290px] lg:bottom-[250px]'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <CircularText className={"fill-dark hover:fill-yellow dark:fill-light hover:dark:fill-yellow animate-spin-slow"} />
            <Link href="mailto:jbashir52@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            bg-yellow text-dark shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-primary hover:text-dark 
            dark:bg-yellow dark:text-dark hover:dark:text-dark hover:dark:bg-primaryDark dark:border-light hover:dark:border-light'>
                Hire Me
            </Link>
        </div>
    </div>
  )
}

export default HireMe