import Layout from '@/components/Layout';
import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Link from 'next/link';
import Image from 'next/image';
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";


const FeaturedProject = ({type, title, summary, img, link, github}) => {

    return(
        <article
            className='w-full flex items-center justify-between relative rounded-br-2xl
            rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'
        >
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' />
            <Link href={link} target="_blank"
            className='w-1/2 cursor-pointer overflow-hidden ronded-lg'
            >
                <Image src={img} alt={title} className='w-full h-auto'/>
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link
                href={link}
                target="_blank"
                className='hover:underline underline-offset-2'
                >
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'>
                        {" "}
                        <GithubIcon />{" "}
                    </Link>
                    <Link
                    href={link}
                    target="_blank"
                    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
                    > Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({type, title, img, link, github}) => {
    return(
        <article className='
            w-full flex flex-col items-center justify-center rounded-2xl
            border border-solid border-dark bg-light p-6 relative'
        >
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />

            <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden ronded-lg'
            >
                <Image src={img} alt={title} className='w-full h-auto'/>
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link
                href={link}
                target="_blank"
                className='hover:underline underline-offset-2'
                >
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link
                        href={link}
                        target="_blank"
                        className='rounded-lg text-lg font-semibold underline'
                    > 
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className='w-8'>
                        {" "}
                        <GithubIcon />{" "}
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Khalifa MBA | Projects Page</title>
            <meta name="description" content="Projects page of Khalifa MBA" />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Building Great Projects!"
                className='mb-16'
                />

                <div className='grid grid-cols-12 gap-24 gap-y-32'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            title="WikiGPT - Fullstack AI Chatbot with Open AI Embeddings"
                            img={project1}
                            summary="An Enterprise knowledge AI Chatbot built with Open AI Embeddings.
                            Built with Python and OpenAI API."
                            link="/"
                            github="/"
                            type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="Coinflix - Fullstack Crypto Price App with ReactJS"
                            img={project1}
                            link="/"
                            github="/"
                            type="Project"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="Y - Fullstack Twitter/X Clone with NextJS"
                            img={project1}
                            link="/"
                            github="/"
                            type="Project"
                        />
                    </div>
                    
                    <div className='col-span-12'>
                        <FeaturedProject 
                            title="GoalSwap DEX - Fullstack Uniswap Clone"
                            img={project1}
                            summary="A feature-rich Crypto Decentralized Exchange.
                            Built with Solidity, Typescript, EthersJS and ReactJS."
                            link="/"
                            github="/"
                            type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="Notflix Fullstack Netflix Clone"
                            img={project1}
                            link="/"
                            github="/"
                            type="Project"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="NFTify - Fullstack NFT Marketplace"
                            img={project1}
                            link="/"
                            github="/"
                            type="Project"
                        />
                    </div>
                    
                    <div className='col-span-12'>
                        <FeaturedProject 
                            title="Setheum - Decentralised Cloud Blockchain"
                            img={project1}
                            summary="A Secure Confidential And Interoperable Decentralised
                            Cloud Compute And Storage Network With A Layer-2 Infrastructure for
                            Subchains and Smart Contracts."
                            link="/"
                            github="/"
                            type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="DAGESTAN - DAG + Blockchain Hybrid Consensus Mechanism"
                            img={project1}
                            link="/"
                            github="/"
                            type="Project"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="SetheumJS - JS SDK and API Library for Setheum"
                            img={project1}
                            link="/"
                            github="/"
                            type="Project"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="DAGESTAN - DAG + Blockchain Hybrid Consensus Mechanism"
                            img={project1}
                            link="/"
                            github="/"
                            type="Project"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="GoNotify - Golang Native Authentication System"
                            img={project1}
                            link="/"
                            github="/"
                            type="Project"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects