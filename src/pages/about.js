import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import profilePic from "../../public/images/profile/khalifa-pic.jpg";
import Image from 'next/image';

const about = () => {
  return (
    <>
        <Head>
            <title>Khalifa MBA | About Page</title>
            <meta name="description" content="About page of Khalifa MBA" />
        </Head>
        <main className='flex wfull flex-col items-center justify-center'>
            <Layout className='pt-16'>
            <AnimatedText text="Building Great Products!" className='!mb-16'/>
            <div className='grid w-full grid-cols-8 gap-16'>
                <div className='col-span-3 flex flex-col items-start justify-start'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                    
                    <p className='font-medium'>
                    Salam, I'm Muhammad-Jibril Bashir Abba Al-Sharif, aka. Khalifa MBA, aka. Al-Fellati ( an SDE (Software Development Engineer), Web3 Developer and Reseacher with a passion for creating intuitive,
                    functional, and user-centric software products with quality experience. With 14 years of experience in the field from the very young age of 11, so I think 
                    I can humbly say that I have spent more than half my age building and contributing to the field therefore aquiring over a decade of experience in my field.
                    I am always looking for new and innovative ways to bring my vision to life.
                    </p>

                    <p className='my-4 font-medium'>
                    I believe that building products is about more than just creating functional systems to solve problems
                    – it's also about creating intuitive and enjoyable experiences for both users and developers. 
                    </p>
                    
                    <p className='my-4 font-medium'>
                    I actively contribute to advancing decentralized web technologies and cutting-edge internet protocols. I love Research and Development of Decentralised Web technologies
                    just as much as I love teaching and learning foreign languages, cultures and history. I also enjoy playing football (soccer), basketball and snooker(pool/billards).
                    I also enjoy reading and writing, as well as drawing - so, I think can humbly say that I'm both a scientist and an artist, and enigineer and a researcher..
                    </p>

                </div>
                <div className='col-span-3 flex flex-col items-start justify-start'>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                            <div>
                            <Image src={profilePic} alt='Khalifa MBA' className='w-full h-auto rounded-2xl'/>
                            </div>
                            <div className='flex wfull flex-col items-center justify-center font-bold text-lg'>
                            <h1>Khalifa MBA</h1>
                            </div>
                            <div className='flex wfull flex-col items-center justify-center font-bold text-sm'>
                            <h1>Muhammad-Jibril B.A.</h1>
                            <h1>(Al-Fellati Al-Sharif)</h1>
                            </div>
                            <div className='flex wfull flex-col items-center justify-center font-medium text-xs'>
                            <p>Software Engineer | Researcher | Web3 Developer</p>
                            </div>
                    </div>
                    <div>
                        <p className='my-19 font-medium'>
                        Whether I'm working on a website, mobile app, web3 dApp, blockchain, algorithm or other digital products,
                        I bring my commitment to composability, documentation, design excellence and user-centric thinking to 
                        every project I work on. I look forward to the opportunity to bring my skills and passion to working with you on your next project.
                        ✉️ Let's connect and explore opportunities in web3, software and all the diverse range of areas I have interest in.
                        </p>
                    </div>
                </div>
                    
                <div className='col-span-2 flex flex-col items-end justify-between'>
                    <div>
                        <span>
                            25+
                        </span>
                        <h2>Projects</h2>
                    </div>
                    <div>
                        <span>
                            14+
                        </span>
                        <h2>Years of Experience</h2>
                    </div>
                    <div>
                        <span>
                            9,000+
                        </span>
                        <h2>GitHub Contributions</h2>
                    </div>
                </div>
            </div>
            </Layout>
        </main>
    </>
  )
}

export default about