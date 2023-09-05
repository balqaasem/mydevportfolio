import { React, useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon"

const Details = ({ type, time, place, info}) => {
    const ref = useRef(null)

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between  md:w-[80-%]'>
            
            <LiIcon reference={ref}/> 
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration: 0.5, type: "spring"}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {place}
                </h3>
                <h3 className='capitalize font-bold text-primary dark:text-primaryDark text-l sm:text-lg xs:text-sm'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 sm:text-lg xs:text-sm'>
                    {time}
                </span>
                <p className='font-medium w-full md:text-sm'>{info}</p>
            </motion.div>
        </li>
    );
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"],
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div
            style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top
                md:w-[2px] md:left-[30px] xs:left-[20px]
                ' />

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                place="Weifang University of Science and Technology"
                type="BSc. Computer Science"
                time="Dec. 2018- Jun. 2022"
                info="Graduated with Bachelor of Science in Computer Science and Technology at Weifang, Shandong, China."
                />
                
                <Details 
                place="Informatics Academy - JSIIT"
                type="International Diploma in Information Technology and Communication (IDITC)"
                time="Apr. 2015- May 2016"
                info="Informatics Academy, also known as Informatics Education Ltd. is a Singaporean University,
                I graduated with International Diploma in Information Technology and Communication at the Informatics JSIIT campus in Nigeria."
                />
                
                <Details 
                place="Parliament International School, Apo, Abuja"
                type="Senior Secondary School"
                time="Sep. 2013- Mar. 2014"
                info=""
                />
                
                <Details 
                place="Key Science Academy, Masaka"
                type="Senior Secondary School"
                time="Sep. 2012 - Jul. 2013"
                info=""
                />
                
                <Details 
                place="Rightway Kiddies Academy, Apo, Abuja"
                type="Primary and Junior Secondary School"
                time="Sep. 2007- Jul. 2012"
                info=""
                />
                
                <Details 
                place="Lufaloy Schools, Kano"
                type="Primary School"
                time="2005 - 2007"
                info=""
                />
            </ul>
        </div>
    </div>
  )
}

export default Education