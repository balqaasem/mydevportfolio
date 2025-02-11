import { React, useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon"

const Details = ({position, company, time, address, work}) => {
    const ref = useRef(null)

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80-%]'>
            
            <LiIcon reference={ref}/> 
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration: 0.5, type: "spring"}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {position}
                </h3>
                <h4 className='font-bold text-primaryGreenDark dark:text-primaryDark text-xl'>@{company}</h4>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>{work}</p>
            </motion.div>
        </li>
    );
}

const Experience = () => {
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
        Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div
            style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[30px] xs:left-[20px]
                ' />

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                position="Founder, CEO"
                company="Slixon AI"
                time="Oct. 2024 - Present"
                address="Weifang, Shandong, China"
                work="
                Slixon AI is my answer to work in the AI era..
                "
                />
                
                <Details 
                position="Founder, Maintainer"
                company="Setheum Labs"
                time="Nov. 2019 - Present"
                address="Qingdao, Shandong, China"
                work="
                Setheum Labs is an open source development organisation involved in Web3 and blockchain development. 
                Leading the design of the Setheum Network, a cutting-edge Web3 zk-powered blockchain.
                "
                />
                
                <Details 
                position="Founder"
                company="Open Web3 Foundation"
                time="Apr. 2021 - Present"
                address="Shenzhen, Guangdong, China"
                work="
                Founded Open Web3 Foundation (previously Setheum Foundation) to support the growth and development of the Setheum ecosystem.
                The Open Web3 Foundation was created to nurture and steward ecosystem growth & development, R & D in technologies,
                use-cases and applications in the fields of decentralised web software protocols,particularly those which
                utilize modern cryptographic methods to safeguard decentralisation, to the benefit and for the stability of the Setheum ecosystem.
                "
                />
                
                <Details 
                position="International Sales Manager"
                company="Green Intelligence"
                time="Aug 2022 - Oct 2022"
                address="Shenzhen, Guangdong Province, China"
                work="Selling automated assembly line machinery to top manufacturers across the globe."
                />
                
                <Details
                position="Member Board of Directors"
                company="Obelisk Integrated Services Ltd."
                time="Apr. 2018 - May 2024"
                address="Abuja, Fderal Capital Territory, Nigeria"
                work="Obelisk Integrated Services is a conglomerate that serves in the Real Estate, Transport, Agriculture and the Import & Export Industries."
                />
                
                <Details 
                position="Sales Project Manager"
                company="Obelisk Integrated Services Ltd."
                time="Aug. 2016 - Nov. 2018"
                address="Abuja, Fderal Capital Territory, Nigeria"
                work="Obelisk Integrated Services is a conglomerate that serves in the Real Estate, Transport, Agriculture and the Import & Export Industries."
                />

                <Details 
                position="Member"
                company="Blockchain Research Institute"
                time="Aug. 2022 - Present"
                address="Shenzhen, Guangdong, China - Remote"
                work=""
                />

                <Details 
                position="Member"
                company="RevGenius"
                time="Aug. 2022 - Present"
                address="Shenzhen, Guangdong, China - Remote"
                work=""
                />
                
                <Details 
                position="Member"
                company="Modern Sales Pro"
                time="Aug. 2022 - Present"
                address="Shenzhen, Guangdong, China - Remote"
                work=""
                />

                <Details 
                position="Associate Member"
                company="International Society for Development and Sustainability (ISDS)"
                time="Jun. 2021 - Present"
                address="Shenzhen, Guangdong, China - Remote"
                work=""
                />

                <Details 
                position="Member"
                company="Internet Society"
                time="Dec. 2018 - Present"
                address="Shenzhen, Guangdong, China - Remote"
                work=""
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience
