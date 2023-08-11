import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/"
        className='w-16 h-16 bg-dark text-light flex items-center justify-center
        rounded-full text-2xl font-bold'
        whileHover={{
            backgroundColor:["#121212", "#84EE5E", "rgba(64,224,208)","rgba(159,239,231)", "rgba(51,179,166)","rgba(54,128,234)"],
            transition:{duration:1, repeat: Infinity}
        }}
        >MBA
        </MotionLink>
    </div>
  )
}

export default Logo;