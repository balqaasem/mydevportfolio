import React from 'react';
import {motion} from "framer-motion";

const quote = {
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            stagerChildren: 0.08,
        }
    }
}


const singleWord = {
    initial:{
        opacity:0,
        y:50,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1,
        }
    }
}

const AnimatedText = ({text, className=""}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0 text-6xl
    xl:text-5xl lg:text-center lg:text-6xl md:5xl sm:text-3xl'>
        <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-5xl dark:text-light ${className}`}
        variants={quote}
        >
            {
                text.split(" ").map((word, index) =>
                <motion.span key={word+'-'+index} className="inline-block"
                variants={singleWord}
                initial="initial"
                animate="animate"
                >
                    {word}&nbsp;
                </motion.span>)
            }
        </motion.h1>
    </div>
  )
}

export default AnimatedText