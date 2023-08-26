import { React, useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon"

const Details = ({ type, time, place, info}) => {
    const ref = useRef(null)

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto fles flex-col items-center justify-between'>
            
            <LiIcon reference={ref}/> 
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration: 0.5, type: "spring"}}
            >
                <h3 className='capitalize font-bold text-2xl'>
                    {place}
                </h3>
                <h3 className='capitalize font-bold text-primary text-l'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time}
                </span>
                <p className='font-medium w-full'>{info}</p>
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
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div
            style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                place="Weifang University of Science and Technology"
                type="BSc. Computer Science"
                time="Dec. 2018- Jun. 2022"
                info="Graduated with Bachelor of Science in Computer Science and Technology at Weifang, Shandong, China."
                />
            </ul>
            
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                place="Informatics Academy - JSIIT"
                type="International Diploma in Information Technology and Communication (IDITC)"
                time="Apr. 2015- May 2016"
                info="Informatics Academy, also known as Informatics Education Ltd. is a Singaporean University,
                I graduated with International Diploma in Information Technology and Communication at the Informatics JSIIT campus in Nigeria."
                />
            </ul>
            
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                place="Parliament International School, Apo, Abuja"
                type="Senior Secondary School"
                time="Sep. 2013- Mar. 2014"
                info=""
                />
            </ul>
            
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                place="Key Science Academy, Masaka"
                type="Senior Secondary School"
                time="Sep. 2012 - Jul. 2013"
                info=""
                />
            </ul>
            
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                place="Rightway Kiddies Academy, Apo, Abuja"
                type="Primary and Junior Secondary School"
                time="Sep. 2007- Jul. 2012"
                info=""
                />
            </ul>
            
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
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