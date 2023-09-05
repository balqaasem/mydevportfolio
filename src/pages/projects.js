import Layout from '@/components/Layout';
import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Link from 'next/link';
import Image from 'next/image';
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import setheumJsImage from "../../public/images/projects/setheum-js.png";
import dagestanImage from "../../public/images/projects/dagestan.png";
import ecdpImage from "../../public/images/projects/ecdp.png";
import khalifaSwapImage from "../../public/images/projects/khalifa-dex.png";
import launchPadCrowdsalesImage from "../../public/images/projects/launchpad-crowdsales.png";
import stp258TokensImage from "../../public/images/projects/stp258-tokens.png";
import setheumImage from "../../public/images/projects/setheum.png";
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

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
                backdrop-blur-xs dark:text-dark z-10
                border border-solid border-light bg-primary/90 dark:bg-primaryDark/90
                dark:border-dark shadow-sm'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
            >
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomLink href="#ai" title="AI/ML" className='pt-5'/>
                    </nav>
            </motion.div>
            <motion.div role='button' className='
                h-[60px] w-[60px] flex flex-col items-center justify-between
                fixed bottom-[250px] right-2 rounded-lg
                backdrop-blur-xs dark:text-dark z-10
                border border-solid border-light bg-primary/90 dark:bg-primaryDark/90
                dark:border-dark shadow-sm '
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
            >
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomLink href="#web3" title="Web3" className='pt-5'/>
                    </nav>
            </motion.div>
            <motion.div role='button' className='
                h-[60px] w-[60px] flex flex-col items-center justify-between
                fixed bottom-[170px] right-2 rounded-lg
                backdrop-blur-xs dark:text-dark z-10
                border border-solid border-light bg-primary/90 dark:bg-primaryDark/90
                dark:border-dark shadow-sm '
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
            >
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomLink href="#clones" title="Clones" className='pt-5'/>
                    </nav>
            </motion.div>
            <motion.div role='button' className='
                h-[60px] w-[60px] flex flex-col items-center justify-between
                fixed bottom-[90px] right-2 rounded-lg
                backdrop-blur-xs dark:text-dark z-10
                border border-solid border-light bg-primary/90 dark:bg-primaryDark/90
                dark:border-dark shadow-sm '
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
            >
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomLink href="#others" title="Others" className='pt-5'/>
                    </nav>
            </motion.div>
        </article>
    );
}

const Project = ({type, title, summary, img, link, github}) => {

    return(
        <article
            className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl
            border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12
            lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'
        >
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
                rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'
            />

            <Link href={link} target="_blank"
            className='w-1/2 cursor-pointer overflow-hidden ronded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 50vw"
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lgg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                <Link
                href={link}
                target="_blank"
                className='hover:underline underline-offset-2'
                >
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'>
                        {" "}
                        <GithubIcon />{" "}
                    </Link>
                    <Link
                    href={link}
                    target="_blank"
                    className='ml-4 rounded-lg bg-dark dark:bg-light text-light
                    dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'
                    > Visit Project</Link>
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
            <meta name="description" content="Portfolio Projects of Muhammad-Jibril B.A. Al-Fellati Al-Shareef (Khalifa MBA)" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <CategoriesNav />
                <AnimatedText
                    text="Building Great Projects!"
                    className='mb-16 lg:!text-7xl sm:mb-8 sm!text-6xl xs:!text-4xl'
                />

                <div className='w-full flex flex-col items-center justify-between gap-24 gap-y-32'>
                    <div className='col-span-12'  id='ai'>
                        <AnimatedText
                            text="AI/ML Projects"
                            className='mb-6 font-bold text-xl rounded-lg border border-solid
                            border-primary dark:border-primaryDark text-dark dark:text-primaryDark'
                        />
                        <Project
                            title="Tasky AI"
                            img={project1}
                            summary="A Fullstack AI SaaS Platform with various types of tasks and features such as image generation, audio generation, 
                            video generation, text summarization, chatbot assistant and code generation."
                            link="/"
                            github="/"
                            type="AI Chatbot SaaS"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project 
                            title="SlackGPT AI"
                            img={project1}
                            summary="An AI Slack Chatbot built in Golang with LLMs"
                            link="/"
                            github="/"
                            type="Slack AI Chatbot"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="RustyGPT AI"
                            img={project1}
                            summary="A Fullstack Rust Chatbot built with Open Source LLMs"
                            link="/"
                            github="/"
                            type="Rust AI Chatbot"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="WikiStack AI"
                            img={project1}
                            summary="A private knowledge base AI Chatbot built with Open Source LLM Embeddings. 
                            Like your own private stackoverflow or Wikipedia AI chatbot.
                            Built with Python, stablecode Instruct, Langchain, unixcoder-base, FastAPI. 
                            Includes a FastAPI API for developers to use it in their microservices etc."
                            link="/"
                            github="/"
                            type="AI Chatbot + API"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="LlamaLit AI"
                            img={project1}
                            summary="A Fullstack CSV Data Chatbot with Llama2 & Streamlit"
                            link="/"
                            github="/"
                            type="CSV AI Chatbot"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="Cesva AI"
                            img={project1}
                            summary="A Fullstack Telegram AI Bot using CSV Doc. Retrieval with FAISS vectorstore"
                            link="/"
                            github="/"
                            type="CSV AI Chatbot"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="Person AI"
                            img={project1}
                            summary="A Fullstack AI Persona Chatbot SaaS App that can immitate public figure personas."
                            link="/"
                            github="/"
                            type="AI Chatbot SaaS"
                        />
                    </div>



                    <div className='col-span-12'  id='web3'>
                        <AnimatedText
                            text="Web3/Crypto Projects"
                            className='mb-6 font-bold text-xl rounded-lg border border-solid border-primary 
                            dark:border-primaryDark text-dark dark:text-primaryDark'
                        />
                        <Project 
                            title="KhalifaSwap"
                            img={project1}
                            summary="A feature-rich Crypto Decentralized Exchange. 
                            Built with Solidity, Typescript, EthersJS and ReactJS.
                            A Fullstack Uniswap clone DEX."
                            link="/"
                            github="/"
                            type="Web3 DeFi DApp"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="CoNFTea"
                            img={project1}
                            summary="A Fullstack Web3 NFT Marketplace"
                            link="/"
                            github="/"
                            type="Web3 NFTs Marketplace"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="Web3Starter"
                            img={project1}
                            summary="A Fullstack Web3 Crowdfunding DApp"
                            link="/"
                            github="/"
                            type="Web3 Crowdfunding DApp"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project 
                            title="LiquiBot"
                            img={project1}
                            summary="A Fullstack DeFi Liquidation Bot for DyDx"
                            link="/"
                            github="/"
                            type="DeFi Bot Automation"
                        />
                    </div>           
                    <div className='col-span-12'>
                        <Project
                            title="CoinFlutter"
                            img={project1}
                            summary="A Fullstack Cross-Platform Crypto Price Tracking App in Flutter and Dart."
                            link="/"
                            github="/"
                            type="Web3 Flutter App"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="Coinflix"
                            img={project1}
                            summary="A Fullstack Crypto Price Tracking App"
                            link="/"
                            github="/"
                            type="Crypto Prices App"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="CoinStreet"
                            img={project1}
                            summary="A Fullstack Crypto Update App for News, Price tracking, events etc."
                            link="/"
                            github="/"
                            type="Crypto News Platform"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project 
                            title="Setheum"
                            img={setheumImage}
                            summary="A Secure Confidential And Interoperable Decentralised
                            Cloud Compute And Storage Layer-1 Network With A Layer-2 Infrastructure for
                            Subchains and Smart Contracts. Built in rust with the substrate framework."
                            link="https://github.com/Setheum-Labs/Setheum"
                            github="https://github.com/Setheum-Labs/Setheum"
                            type="Substrate Blockchain Network"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="DAGESTAN"
                            img={dagestanImage}
                            summary="A DAG-Blockchain Hybrid Consensus Mechanism built in rust with Substrate."
                            link="https://github.com/Setheum-Labs/Dagestan"
                            github="https://github.com/Setheum-Labs/Dagestan"
                            type="Blockchain Consensus Algorithm"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="SetheumJS"
                            img={setheumJsImage}
                            summary="An RxJS SDK and API Library for Setheum built with Typescript and PolkadotJS"
                            link="https://setheum.js.org"
                            github="https://github.com/setheum-js/setheum.js"
                            type="PolkadotJS SDK Library"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="KhalifaSwap"
                            img={khalifaSwapImage}
                            summary="A DEX (Decentralized Exchange) Pallet built in rust with Substrate"
                            link="https://github.com/Khalifa-Blockchain/DEX"
                            github="https://github.com/Khalifa-Blockchain/DEX"
                            type="DEX Substrate Pallet"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="Khalifa ECDP"
                            img={ecdpImage}
                            summary="An ECDP (Ethical Collateralized Debt Position)
                            Stablecoin Protocol Pallet built in rust with Substrate"
                            link="https://github.com/Khalifa-Blockchain/ECDP"
                            github="https://github.com/Khalifa-Blockchain/ECDP"
                            type="Stablecoin Substrate Pallet"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="SERP STP258 Tokens"
                            img={stp258TokensImage}
                            summary="A MultiCurrency Algorithmic Stablecoin Substrate Pallet."
                            link="https://github.com/Setheum-Labs/stp258-tokens"
                            github="https://github.com/Setheum-Labs/stp258-tokens"
                            type="Stablecoin Substrate Pallet"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="HighEnd LaunchPad (HELP)"
                            img={launchPadCrowdsalesImage}
                            summary="A Token Launchpad Crowdsales Substrate Pallet."
                            link="https://github.com/Setheum-Labs/launchpad-crowdsales"
                            github="https://github.com/Setheum-Labs/launchpad-crowdsales"
                            type="Substrate Crowdfunding Pallet"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="MyLightning Node"
                            img={launchPadCrowdsalesImage}
                            summary="A Bitcoin Lightning Node built with LDK (Lightning Dev Kit)."
                            link="/"
                            github="/"
                            type="Bitcoin Lightning Node"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="MyLightning PSBT"
                            img={launchPadCrowdsalesImage}
                            summary="A Bitcoin Lightning Cold Wallet using PSBT (Partially Signed Bitcoin Transactions). Built in Rust."
                            link="/"
                            github="/"
                            type="Bitcoin Cold Wallet"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="MyLightning HTLC"
                            img={launchPadCrowdsalesImage}
                            summary="A Bitcoin Lightning HTLC (Hasshed Time Locked Contract). Built in Rust."
                            link="/"
                            github="/"
                            type="Bitcoin HTLC Contract"
                        />
                    </div>


                    
                    <div className='col-span-12'  id='clones'>
                        <AnimatedText
                            text="Clone Projects"
                            className='mb-6 font-bold text-xl rounded-lg border border-solid border-primary
                            dark:border-primaryDark text-dark dark:text-primaryDark'
                        />
                        <Project
                            title="TikTak"
                            img={project1}
                            summary="A fullstack TikTok Clone built fully fledged with full functions and mobile responsive. 
                            Built with TypeScript, React, Sanity, Google Auth."
                            link="/"
                            github="/"
                            type="Social Media App Clone"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="Notflix"
                            img={project1}
                            summary="A Fullstack Netflix Clone built fully fledged with full functions and mobile responsive."
                            link="/"
                            github="/"
                            type="Streaming App Clone"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="Y"
                            img={project1}
                            summary="A Fullstack Twitter/X Clone built fully fledged with full functions and mobile responsive."
                            link="/"
                            github="/"
                            type="Social Media App Clone"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="Weekdays"
                            img={project1}
                            summary="A Fullstack CRM Monday.com CRM clone"
                            link="/"
                            github="/"
                            type="CRM SaaS Clone"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="Googol"
                            img={project1}
                            summary="A Fullstack Google Search Clone.
                            Fun Fact - A Googol, also known as 10 duotrigintillion = 10^100,
                            that is 1 followed by 100 zeroes."
                            link="/"
                            github="/"
                            type="Search Engine App Clone"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="LinkForest"
                            img={project1}
                            summary="A Fullstack LinkTree Clone."
                            link="/"
                            github="/"
                            type="LinkTree App Clone"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="Nasheedify"
                            img={project1}
                            summary="A Fullstack Spotify Clone"
                            link="/"
                            github="/"
                            type="Streaming App Clone"
                        />
                    </div>


                    
                    <div className='col-span-12' id='others'>
                        <AnimatedText
                            text="Other Projects"
                            className='mb-6 skfont-bold text-xl rounded-lg border border-solid border-primary 
                            dark:border-primaryDark text-dark dark:text-primaryDark'
                        />
                        <Project
                            title="Travella"
                            img={project1}
                            summary="A fully-fledged Fullstack Travel Advisor App using RapidAPI and Google Maps.
                            Has fully-fledged features like Restaurants, Hotels, Ratings, Reviews, etc."
                            link="/"
                              github="/"
                            type="Travel Advisor App"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="SlickDB"
                            img={project1}
                            summary="A MongoDB-like JSON Database built with Golang"
                            link="/"
                            github="/"
                            type="Golang JSON Database"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="SlickJobs"
                            img={project1}
                            summary="A Fully-Fledged Fullstack Job Listing App in ReactJS."
                            link="/"
                            github="/"
                            type="Job Listing Platform"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="WHOSINT"
                            img={project1}
                            summary="An OSINT CLI Tool for investigators.
                            WHOSINT stands for Width Height Open Source Intelligence."
                            link="/"
                            github="/"
                            type="OSINT CLI Tool"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="MyAPIs"
                            img={project1}
                            summary="A Fullstack API SaaS App that allows you to sell your APIs with Stripe Payments Integration."
                            link="/"
                            github="/"
                            type="API SaaS App"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project 
                            title="MyCommerce"
                            img={project1}
                            summary="A Fully-fledged Fullstack E-Commerce Platform built in NextJS, ReactJS and TailwindCSS. 
                            It has full functions for dashboard and storefront, fully responsive with production level features."
                            link="/"
                            github="/"
                            type="Fully-Fledged E-Commerce App"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="ReverseRobin"
                            img={project1}
                            summary="A Round Robin Reverse Proxy Load Balancer in Golang."
                            link="/"
                            github="/"
                            type="Loadbalancing Algorithm Server"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="MyNotify"
                            img={project1}
                            summary="An Ntfy Push Notification Server in Golang"
                            link="/"
                            github="/"
                            type="Push Notifications Server"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="SSLify"
                            img={project1}
                            summary="An SSL Certificate Tracking App"
                            link="/"
                            github="/"
                            type="SSL Tracking App"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="LindaConnect"
                            img={project1}
                            summary="A LinkedIn Automated Connection Acceptance Bot"
                            link="/"
                            github="/"
                            type="Social Media Automation Bot"
                        />
                    </div>
                    
                    <div className='col-span-12'>
                        <Project
                            title="Realest"
                            img={project1}
                            summary="A Fully-fledged Fullstack Realestate listing platform.
                            You can add, edit, delete, view, and search for realestate listing with advanced features."
                            link="/"
                            github="/"
                            type="Realestate Listing Platform"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="GitJobs"
                            img={project1}
                            summary="A Fullstack GitHub Jobs API Job Finding App"
                            link="/"
                            github="/"
                            type="GitHub Jobs App"
                        />
                    </div>
                    <div className='col-span-12'>
                        <Project
                            title="MemeChat"
                            img={project1}
                            summary="A Fully-fledged Fullstack Realtime Messaging Chat App"
                            link="/"
                            github="/"
                            type="Realtime Messaging App"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects