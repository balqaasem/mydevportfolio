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
import { motion } from 'framer-motion'
import { useRouter } from 'next/router';
import Link from 'next/link';

const AnimatedNumbers = ({value}) => {
const ref = useRef(null);0

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


const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
            h-1 rounded-md inline-block bg-dark absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full h1 rounded-md' : 'w-0'}
            `}
            >
                &nbsp;
            </span>
        </Link>
    )
}

const CategoriesNav = () => {

    return (
        <article>
            <motion.div role='button' className='
                h-[60px] w-[60px] flex flex-col items-center justify-between
                fixed bottom-[330px] right-2 rounded-lg
                backdrop-blur-md dark:text-dark z-10
                border border-solid border-light bg-primary/90 dark:bg-primaryDark/90
                dark:border-dark shadow-sm'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
            >
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomLink href="#biography" title="Bio" className='pt-5'/>
                    </nav>
            </motion.div>
            <motion.div role='button' className='
                h-[60px] w-[60px] flex flex-col items-center justify-between
                fixed bottom-[250px] right-2 rounded-lg
                backdrop-blur-md dark:text-dark z-10
                border border-solid border-light bg-primary/90 dark:bg-primaryDark/90
                dark:border-dark shadow-sm '
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
            >
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomLink href="#skills" title="Skills" className='pt-5'/>
                    </nav>
            </motion.div>
            <motion.div role='button' className='
                h-[60px] w-[60px] flex flex-col items-center justify-between
                fixed bottom-[170px] right-2 rounded-lg
                backdrop-blur-md dark:text-dark z-10
                border border-solid border-light bg-primary/90 dark:bg-primaryDark/90
                dark:border-dark shadow-sm '
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
            >
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomLink href="#experience" title="Expr." className='pt-5'/>
                    </nav>
            </motion.div>
            <motion.div role='button' className='
                h-[60px] w-[60px] flex flex-col items-center justify-between
                fixed bottom-[90px] right-2 rounded-lg
                backdrop-blur-md dark:text-dark z-10
                border border-solid border-light bg-primary/90 dark:bg-primaryDark/90
                dark:border-dark shadow-sm '
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
            >
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomLink href="#education" title="Edu." className='pt-5'/>
                    </nav>
            </motion.div>
        </article>
    );
}


const about = () => {
  const startDate = new Date('2008');

  const calculateYearsExperience = () => {
    const today = new Date();
    const years = today.getFullYear() - startDate.getFullYear();
    const monthDifference = today.getMonth() - startDate.getMonth();
    return monthDifference < 0 || (monthDifference === 0 && today.getDate() < startDate.getDate()) ? years - 1 : years;
  };

  return (
    <>
        <Head>
            <title>Khalifa MBA | About Page</title>
            <meta name="description" content="About Muhammad-Jibril B.A. Al-Fellati Al-Shareef (Khalifa MBA)" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <CategoriesNav />
                <div>
                    <AnimatedText
                        text="Want To Know About Me?"
                        className='!mb-5 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-4'
                    />
                </div>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div id='biography' className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 text-primaryGreenDark dark:text-primaryDark'>
                            Biography
                        </h2>
                        <p className='font-medium md:font-normal xl:text-sm text-justify'>
                        Salam, I&apos;m Muhammad-Jibril Bashir Al-Sharif, aka. Khalifa aka. M.B.A., Artist, Engineer, Scientist 
                        specializing in Web3/Blockchain, AI/ML, Cloud and Full Stack development, with a passion to create intuitive, 
                        functional, scalable and user-centric products for quality experience. 
                        </p>

                        <p className='mt-3 font-medium md:font-normal xl:text-sm text-justify'>
                        With {calculateYearsExperience()} years of experience from the very young age of 11, I have spent more than half my age building 
                        and contributing to the field doing what I love, therefore acquiring over a decade of experience in my fields.
                        I am always looking for new and innovative ways to bring my vision to life.
                        </p>
                    </div>
                    
                    <div className='col-span-3 relative h-max rounded-2xl bg-radialSunLight p-8 dark:bg-dark dark:border-light
                        xl:col-span-4 md:order-1 md:col-span-8 border border-solid border-light/35'
                    >
                        <div>
                            <Image src={profilePic} alt='Khalifa MBA' className='w-full h-auto rounded-2xl'
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 33vw"
                            />
                        </div>
                        
                        <div className='flex w-full flex-col items-center justify-center font-bold text-lg pt-6 text-primaryGreenDark dark:text-primaryDark'>
                            <h1>Khalifa MBA</h1>
                        </div>
                        <div className='flex w-full flex-col items-center justify-center font-bold text-sm text-dark dark:text-dark'>
                            <h1>Muhammad-Jibril B.Al-Sharif</h1>
                            <h1>(Khalifa M.B.A.)</h1>
                        </div>
                        <div className='flex w-full flex-col items-center justify-center font-bold text-xs text-dark/75 dark:text-dark/75'>
                            <p>Artist | Engineer | Scientist</p>
                        </div>
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-between pt-6 xl:items-center sm:items-center xs:items-center'>
                            <span className='inline-block text-6xl font-bold md:text-5xl lg:text-6xl sm:text-4xl xs:text-3xl text-primary dark:text-primaryDark'>
                                <AnimatedNumbers value={calculateYearsExperience()} />
                            </span>
                            <h2 className='text-l font-bold capitalize text-dark/50 dark:text-light/75 
                            xl:text-center md:text-lg sm:text-base xs:text-sm sm:text-center xs:text-center'>
                                Years Experience
                            </h2>
                        </div>
                        <div className='flex flex-col items-end justify-between my-7 pt-6 xl:items-center sm:items-center xs:items-center'>
                            <span className='inline-block text-6xl font-bold md:text-5xl lg:text-6xl sm:text-4xl xs:text-3xl text-primary dark:text-primaryDark'>
                                <AnimatedNumbers value={208} />
                            </span>
                            <h2 className='text-l font-bold capitalize text-dark/50 dark:text-light/75 
                            xl:text-center md:text-lg sm:text-base xs:text-sm sm:text-center xs:text-center'>
                                Days Github Streak
                            </h2>
                        </div>
                        <div className='flex flex-col items-end justify-between my-7 pt-6 xl:items-center sm:items-center xs:items-center'>
                            <span className='inline-block text-6xl font-bold md:text-5xl lg:text-6xl sm:text-4xl xs:text-3xl text-primary dark:text-primaryDark'>
                                <AnimatedNumbers value={11000} />+
                            </span>
                            <h2 className='text-l font-bold capitalize text-dark/50 dark:text-light/75 
                            xl:text-center md:text-lg sm:text-base xs:text-sm sm:text-center xs:text-center'>
                                GitHub Contributions
                            </h2>
                        </div>
                    </div>
                </div>

                <div id='skills'>
                    <Skills/> 
                </div>
                
                <div id='experience'>
                    <Experience/> 
                </div>
                
                <div id='education'>
                    <Education/> 
                </div>
            </Layout>
        </main>
    </>
  )
}

export default about