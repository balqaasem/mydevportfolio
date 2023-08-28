import Layout from '@/components/Layout';
import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Link from 'next/link';
import Image from 'next/image';
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";


const FeaturedProject = ({tags, title, summary, img, link, github}) => {

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
                <span className='text-primary font-medium text-xl'>{tags}</span>
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

const Project = ({tags, title, img, link, github}) => {
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
                <span className='text-primary font-medium text-xl'>{tags}</span>
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
                <AnimatedText text="Building Great Projects!" className='mb-16'/>

                <div className='grid grid-cols-12 gap-24 gap-y-32'>

                    <div className='col-span-12'>

                        <AnimatedText text="AI/ML Projects" className='mb-6 font-bold text-xl rounded-lg bg-primary text-light'/>

                        <FeaturedProject
                            title="TaskyAI - Fullstack AI Tasks SaaS Platform"
                            img={project1}
                            summary="An AI SaaS Platform with various types of tasks and features such as image generation, audio generation, 
                            video generation, text summarization, chatbot assistant and code generation."
                            link="/"
                            github="/"
                            tags="Featured, AI, Chatbot, SaaS"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project 
                            title="SlackGPT - AI Slack Chatbot"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Golang, AI, Chatbot"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="RustyGPT - Fulstack AI Chatbot in Rust with Open Source LLMs"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Rust, AI, Chatbot"
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject
                            title="WikiStackAI  - Fullstack AI Chatbot with Open Source LLM Embeddings in Python"
                            img={project1}
                            summary="A private knowledge base AI Chatbot built with Open Source LLM Embeddings. 
                            Like your own private stackoverflow or Wikipedia AI chatbot.
                            Built with Python, stablecode Instruct, Langchain, unixcoder-base, FastAPI. 
                            Includes a FastAPI API for developers to use it in their microservices etc."
                            link="/"
                            github="/"
                            tags="Featured, AI, Chatbot, API, Embeddings"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="StreamLlamaAI - Fullstack CSV Data Chatbot with Llama2 & Streamlit"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Python, AI, Chatbot"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="DoxyAI - Telegram AI Bot using CSV Doc. Retrieval with FAISS vectorstore"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Golang, AI, Chatbot"
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject
                            title="PersonAI - Fullstack AI Persona Chatbot"
                            img={project1}
                            summary="A Fullstack AI Persona Chatbot with multiple avatar persona immitation."
                            link="/"
                            github="/"
                            tags="Featured, AI, Chatbot, SaaS"
                        />
                    </div>



                    <div className='col-span-12'>

                        <AnimatedText text="Web3 Projects" className='mb-6 font-bold text-xl rounded-lg bg-primary text-light'/>

                        <FeaturedProject 
                            title="GoalSwap - Fullstack Uniswap clone DEX"
                            img={project1}
                            summary="A feature-rich Crypto Decentralized Exchange. 
                            Built with Solidity, Typescript, EthersJS and ReactJS."
                            link="/"
                            github="/"
                            tags="Featured, Web3, DeFi, DApp"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="NFTify - Fullstack NFT Marketplace"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Web3, NFTs, Marketplace"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="Web3Starter - Fullstack Web3 Crowdfunding Platform DApp"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Web3, Crowdfunding, DApp"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project 
                            title="LiquidBot - DeFi liquidation Bot for DyDx"
                            img={project1}
                            link="/"
                            github="/"
                            tags="DeFi, Bot, Automation"
                        />
                    </div>           
                    <div className='col-span-6'>
                        <Project
                            title="CoinFlutter - Fullstack Flutter Crypto Prices App"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Featured, Crypto, Web3, Platform"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="Coinflix - Fullstack Crypto Price Tracking App"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Web3, Crypto, Platform"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="CoinStreet - Fullstack React App for Crypto Prices, metrics and News"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Crypto, Web3, Platform"
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            title="Setheum - Decentralised Cloud Layer-1 Blockchain with Substrate"
                            img={project1}
                            summary="A Secure Confidential And Interoperable Decentralised
                            Cloud Compute And Storage Network With A Layer-2 Infrastructure for
                            Subchains and Smart Contracts. Built in rust with the substrate framework."
                            link="/"
                            github="/"
                            tags="Featured, Web3, Blockchain, Cloud"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="DAGESTAN - Rust DAG-Blockchain Hybrid Consensus Mechanism"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Blockchain, Consensus, Algorithm"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="SetheumJS - JS SDK and API Library for Setheum with RxJS in Typescript"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Web3, SDK, API"
                        />
                    </div>


                    
                    <div className='col-span-12'>

                        <AnimatedText text="Clone Projects" className='mb-6 font-bold text-xl rounded-lg bg-primary text-light'/>

                        <FeaturedProject
                            title="TikTak - Fullstack TikTok Clone"
                            img={project1}
                            summary="A fullstack TikTok Clone built fully fledged with full functions and mobile responsive. 
                            Built with TypeScript, React, Sanity, Google Auth."
                            link="/"
                            github="/"
                            tags="Featured, Social Media, App, Clone"
                        />
                    </div>

                    <div className='col-span-6'>
                        <Project
                            title="Notflix - Fullstack Netflix Clone"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Streaming, Platform, Clone"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="Y - Fullstack Twitter/X Clone"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Chat, Social Media, Clone"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="Weekdays - Fullstack CRM Monday CRM clone"
                            img={project1}
                            link="/"
                            github="/"
                            tags="CRM, SaaS, Clone"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="Loolga - Fullstack Google Search Clone"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Search Engine, Platform, Clone"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="LinkForest - Fullstack LinkTree Clone"
                            img={project1}
                            link="/"
                            github="/"
                            tags="App, Website, Clone"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="Nasheedify - Fulstack Music Streaming Spotify Clone"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Music, Streaming, Platform"
                        />
                    </div>



                    <div className='col-span-12'>

                        <AnimatedText text="Other Projects" className='mb-6 font-bold text-xl rounded-lg bg-primary text-light'/>

                        <FeaturedProject
                            title="Travella - Fullstack Travel Advisor Platform"
                            img={project1}
                            summary="A fully-fledged Fullstack Travel Advisor App using RapidAPI and Google Maps.
                            Has fully-fledged features like Restaurants, Hotels, Ratings, Reviews, etc."
                            link="/"
                            github="/"
                            tags="Featured, Maps, Travel, Platform"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="SlickDB - A MongoDB-like JSON Database in Golang"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Database, JSON, Golang"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="SlickJobs - Fullstack Job Listing App in React"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Listing, Dashboard, Platform"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="SlickOSINT - An OSINT CLI Tool for investigators"
                            img={project1}
                            link="/"
                            github="/"
                            tags="OSINT, Tool, CLI"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="MyAPIs - Fullstack API SaaS App with Stripe Payments"
                            img={project1}
                            link="/"
                            github="/"
                            tags="API, Dashboard, SaaS"
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            title="MyCommerce - Fullstack E-Commerce Platform"
                            img={project1}
                            summary="A Fully-fledged Fullstack E-Commerce Platform built in NextJS, ReactJS and TailwindCSS. 
                            It has full functions for dashboard and storefront, fully responsive with production level features."
                            link="/"
                            github="/"
                            tags="Featured, E-Commerce, Dashboard, Platform"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="ReverseRobin - Loadbalancer in Golang"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Loadbalancing, Server, Algorithm"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="MyNotify - Push Notifications Server with Ntfy"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Push Notifications, Ntfy, Server"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="SSL-Flix - An SSL Certificate Tracking App"
                            img={project1}
                            link="/"
                            github="/"
                            tags="SSL, Tracking, SaaS"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="LindaConnect - A LinkedIn Bot to auto-accept Connection Requests"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Bot, Social Media, Automation"
                        />
                    </div>
                    
                    <div className='col-span-12'>
                        <FeaturedProject
                            title="Realest - Fullstack CRUD Realestate listing platform"
                            img={project1}
                            summary="A Fully-fledged Fullstack CRUD Realestate listing platform.
                            You can add, edit, delete, view, and search for realestate listing with advanced features."
                            link="/"
                            github="/"
                            tags="CRUD, Dashboard, Platform"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="GitJobs - Fullstack Job Finding Platform with GitHub Jobs API"
                            img={project1}
                            link="/"
                            github="/"
                            tags="GitHub, Jobs, Platform"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                            title="MemeChat - Fullstack Realtime Chat App"
                            img={project1}
                            link="/"
                            github="/"
                            tags="Chat, Realtime, Messaging"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects