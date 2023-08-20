import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Layout from '@/components/Layout';
import profilePic from "../../public/images/profile/khalifa-pic.jpg";
import Image from 'next/image';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration:3000 });
const isInView = useInView(ref, {once: true});

useEffect(() => {
    if(isInView){
        motionValue.set(value);
    }
}, [isInView, value, motionValue])

useEffect(() => {
  springValue.on("change", (latest) => {
    if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent=latest.toFixed(0);
    }
  })
}, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>Khalifa MBA | About Page</title>
            <meta name="description" content="About page of Khalifa MBA" />
        </Head>
        <main className='flex wfull flex-col items-center justify-center'>
            <Layout className='pt-16'>
            <AnimatedText text="Behind a Shining STAR!" className='!mb-16'/>
            <div className='grid w-full grid-cols-8 gap-16'>
                <div className='col-span-3 flex flex-col items-start justify-start'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                    
                    <p className='font-medium'>
                    Salam, I'm Muhammad-Jibril Bashir Abba Al-Sharif, aka. Khalifa MBA, aka. Al-Fellati Al-Sharif, an SDE, TPM, Architect, Researcher (altogether a 'STAR') 
                    specializing in Web3 & Blockchain, AI & ML, Cloud and Full Stack development with a passion for creating intuitive, functional, scalable and user-centric software products with quality experience. 
                    </p>

                    <p className='my-7 font-medium'>
                    With 14+ years of experience in the field from the very young age of 11, so I think I can humbly say that I have spent more than half my age building 
                    and contributing to the field doing what I love, therefore aquiring over a decade of experience in my field.
                    I am always looking for new and innovative ways to bring my vision to life.
                    </p>

                    <p className='my-4 font-medium'>
                    I believe that building products is about more than just creating functional systems to solve problems
                    – it's also about creating intuitive, scalable and enjoyable experiences for both users and developers. 
                    </p>
                </div>
                <div className='col-span-3 flex flex-col items-start justify-start'>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                            <div>
                            <Image src={profilePic} alt='Khalifa MBA' className='w-full h-auto rounded-2xl'/>
                            </div>
                            <div className='flex wfull flex-col items-center justify-center font-bold text-lg pt-6'>
                            <h1>Khalifa MBA</h1>
                            </div>
                            <div className='flex wfull flex-col items-center justify-center font-bold text-sm'>
                            <h1>Muhammad-Jibril B.A.</h1>
                            <h1>(Al-Fellati Al-Sharif)</h1>
                            </div>
                            <div className='flex wfull flex-col items-center justify-center font-medium text-xs'>
                            <p>SDE | TPM | Architect | Researcher</p>
                            <p>(STAR)</p>
                            </div>
                    </div>
                    <div>
                        <p className='my-19 pt-5 font-medium'>
                        I bring my commitment to composability, documentation, scalability, design excellence and user-centric thinking to every project I work on.
                        I look forward to the opportunity to bring my skills and passion to working with you on your next project.
                        </p>
                        
                        <p className='my-4 font-medium'>
                        ✉️ Let's connect and explore opportunities in the digital industry and all the diverse range of areas I have interest in.
                        </p>
                    </div>
                </div>
                    
                <div className='col-span-2 flex flex-col items-end justify-between'>
                    <div className='col-span-2 flex flex-col items-end justify-between'>
                        <div className='flex flex-col items-end justify-between pb-6'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={14} />+
                            </span>
                            <h2 className='text-l font-bold capitalize text-dark/50'>Years of Experience</h2>
                        </div>
                        <div className='flex flex-col items-end justify-between my-7 pt-6'>
                            <span className='inline-block text-7xl font-bold'>
                            <AnimatedNumbers value={25} />+
                            </span>
                            <h2 className='text-l font-bold capitalize text-dark/50'>Projects</h2>
                        </div>
                        <div className='flex flex-col items-end justify-between my-7 pt-6'>
                            <span className='inline-block text-7xl font-bold'>
                            <AnimatedNumbers value={9200} />+
                            </span>
                            <h2 className='text-l font-bold capitalize text-dark/50'>GitHub Contributions</h2>
                        </div>
                    </div>
                    <div>
                        <p className='font-medium'>     
                        I actively contribute to advancing decentralized web tech and cutting-edge internet protocols. 
                        </p>
                        
                        <p className='my-4 font-medium'>
                        I love R&D in tech as much as I love teaching, learning, languages, cultures and history. 
                        </p>
                    </div>
                </div>
            </div>

            <Skills />
            <Experience />
            <Education />
            </Layout>
        </main>
    </>
  )
}

export default about