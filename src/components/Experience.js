import { React, useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon"

const Details = ({position, company, time, address, work}) => {
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
                    {position}
                </h3>
                <h4 className='font-bold text-primary text-xl'>@{company}</h4>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>{work}</p>
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
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div
            style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                position="Founder, Grand Imam, Chief Researcher"
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
                position="Founder, Grand Imam, Chief Architect"
                company="Setheum Labs"
                time="Nov. 2019 - Present"
                address="Shenzhen, Guangdong, China"
                work="
                I am working on Setheum to build the Blockchain leading Web3.0 that solves a lot of issues and provides a lot of opportunities.
                Leading Setheum Network's design, a cutting-edge Web3 Cloud powered by Substrate. Revolutionizing industries with smart contracts.
                "
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
                position="Contributor"
                company="Hacker Noon"
                time="Sep. 2020 - Present"
                address="Shenzhen, Guangdong, China - Remote"
                work=""
                />
                
                <Details 
                position="Contributor"
                company="Polkadot & Substrate"
                time="2020 - Present"
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
                
                <Details 
                position="Founder, Grand Imam, Chief Engineer"
                company="Slixon Technologies Ltd."
                time="Jul. 2016 - Present"
                address="Shenzhen, Guangdong, China"
                work="
                Slixon Tech. was the beginning of my career in tech. Accidentally founded Setheum.. Founding Member of Setheum Labs.
                Now focusing on E-Commerce, Web3 Dev Services, Cloud Services Provision (especially for Setheum Cloud), Cybersecurity and AI R&D, Consumer Electronics R&D (NEW).
                "
                />
                
                <Details 
                position="Visionary Director, Board Member"
                company="Obelisk Integrated Services Ltd."
                time="Jun. 2018 - Present"
                address="Abuja, Fderal Capital Territory, Nigeria - Remote"
                work="Obelisk Integrated Services is a conglomerate that serves in the Real Estate, Transport, Agriculture and the Import & Export Industries."
                />
                
                <Details 
                position="Creative Director"
                company="Obelisk Integrated Services Ltd."
                time="Apr. 2018 - Jun. 2018 (3 mos)"
                address="Kano, Nigeria"
                work=""
                />
                
                <Details 
                position="Project Manager"
                company="Obelisk Integrated Services Ltd."
                time="Oct. 2017 - Mar. 2018 (6 mos)"
                address="Kano, Nigeria"
                work=""
                />
                
                <Details 
                position="Sales Manager"
                company="Obelisk Integrated Services Ltd."
                time="Jun. 2017 - Sep. 2017 (4 mos)"
                address="Abuja, Fderal Capital Territory, Nigeria"
                work=""
                />
                
                <Details 
                position="Assistant Manager"
                company="Obelisk Integrated Services Ltd."
                time="Aug. 2016 - May. 2017 (10 mos)"
                address="Abuja, Fderal Capital Territory, Nigeria"
                work=""
                />
                
                <Details 
                position="International Sales & Project Manager"
                company="Green Intelligent（Shenzhen）Co., Ltd."
                time="Sep. 2022 - Oct. 2022 (2 mos)"
                address="Shenzhen, Guangdong, China"
                work="At Green Intelligent, I specialize in International trade and sales as well as project management of Intelligent Industrial Machinery for the Industry 4.0 revolution.
                Active,Positive, Altruistic, Progressive, Responsible, Gratitude.. I love my time here at Green, developing my knowledge, skills, thought process, diversity,
                career and connections is of high importance. Relationships are strengthened along the way, skills are polished along the way, connections are made along the way.
                Involved in various industries at once is not easy, but it helps forge a thought process that helps in building innovative solutions to connect those industies in creative and nonobvious ways."
                />
                
                <Details 
                position="Business English Teacher (Part-Time)"
                company="APLUS Education"
                time="Sep. 2022 - Oct. 2022 (2 mos)"
                address="Shenzhen, Guangdong, China"
                work="Taught Business English to a Sales team of 31-40 year old adults."
                />
                
                <Details 
                position="Product and Sales Manager"
                company="Vogtec (H.K.) Co., Ltd."
                time="Jul. 2022 - Aug. 2022 (2 mos)"
                address="Shenzhen, Guangdong, China"
                work="Worked in sales and marketing, product management and engineering in VoIP telecommunications technology.
                As a product and sales manager, my role is to oversee and manage the entire product lifecycle, from development to sales.
                I work closely with product development teams to define product features, specifications and pricing strategies based on market research and customer needs.
                In addition, I lead the sales team, develop effective sales strategies, maximize revenue and achieve sales targets.
                This includes identifying potential customers, building and maintaining relationships with key accounts, and providing sales training and support to the sales team.
                I also analyze market trends and competitor activities to look for opportunities for product improvement or new product development.
                Collaboration with cross-functional teams such as marketing, operations and customer service is critical to ensuring successful product launches and satisfied customers.
                As a Product and Sales Manager, my role is to drive product success and maximize sales growth through effective product management and sales strategies."
                />
                
                <Details 
                position="English Second Language Teacher (Part-Time)"
                company="Freelance"
                time="Nov. 2019 - Jun. 2022 (2 yrs 8 mos)"
                address="Weifang, Shandong, China"
                work="Taught various `English as a Second Language` classes of various ages ranging across 6-24 year olds in various different settings and arrangements."
                />
                
                <Details 
                position="Kindergarten English Teacher (Part-Time)"
                company="Freelance"
                time="Sep. 2019 - Oct. 2019 (2 mos)"
                address="Qingdao, Shandong, China"
                work="Taught English to 3-8 year old children in four different classes."
                />
                
                <Details 
                position="Web Dev., Software Engineering and Cyber Security Student"
                company="Self-Taught"
                time="2009 - Present"
                address="Abuja, Fderal Capital Territory, Nigeria"
                work="I've been learning Software Development and Engineering, starting with web development
                and Cyber Security from the very young age of 12 when I first came across the internet.
                It was then that I decided to work in this field and become a billionaire to help people."
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience