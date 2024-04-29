import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import khalifaIcon from '../../public/images/profile/KhalifaIcon.png'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-4 md:justify-start'>
      <Link href="/"
        className='w-16 h-16 bg-primary dark:bg-primary text-dark dark:text-dark flex items-center justify-center
        rounded-full text-sm font-bold border border-solid border-primaryGreenDark dark:border-primaryGreenDark'
      >
      <Image src={khalifaIcon} alt={"Khalifa MBA Icon"} className='w-16 h-16 pb-1 pl-1 pr-1' priority />
      </Link>
    </div>
  )
}

export default Logo