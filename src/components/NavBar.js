import { useRouter } from 'next/router';
import { LinkedInIcon, TwitterIcon, TelegramIcon, InstagramIcon, MediumIcon, GithubIcon, YouTubeIcon, SunIcon, MoonIcon, EmailIcon } from './Icons';
import Logo from './Logo';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';
import SubscribeButton from './SubscribeButton';
import SubscriptionFormLayered from './SubscriptionFormLayered';
import SubscribePopup from './SubscribePopup';

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
            h-1 rounded-md inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full h1 rounded-md' : 'w-0'}
            `}
            >
                &nbsp;
            </span>
        </Link>
    )
}

const CustomMobileLink = ({href, title, className="", toggle}) => {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return(
        <button href={href} className={`${className} relative group text-dark dark:text-dark my-2`} onClick={handleClick}>
            {title}

            <span className={`
            h-1 rounded-md inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full h1 rounded-md' : 'w-0'}
            `}
            >
                &nbsp;
            </span>
        </button>
    )
}

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);
    const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prev => !prev);
    };

    const handleSubscribeClick = () => {
        setIsSubscribeOpen(true);
    };

    const handleCloseSubscribe = () => {
        setIsSubscribeOpen(false);
    };

  return (
    <header
    className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative'
    >
        <div className='
        w-[95%] h-[10.5%] mt-10 sm:mt-5 lg:mt-7 2xl:mt-8 sm:h-[7.5%] lg:h-[8.5%] md:h-[8%] 2xl:h-[8%] 
        flex justify-between items-center fixed top-10 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-primary/40 dark:bg-primaryDark/40 rounded-lg backdrop-blur-sm px-8 py-8 z-30
        '>
           
            <nav className="flex pb-4 2xl:pb-3 xl:pb-3 justify-center">
                    <Logo />
            </nav>

            <buton className='flex-col justify-center items-center hidden lg:flex menu-button' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light hover:bg-light/50 dark:hover:bg-dark/50 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light hover:bg-light/50 dark:hover:bg-dark/50 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-00'} `}></span>
                <span className={`bg-dark dark:bg-light hover:bg-light/50 dark:hover:bg-dark/50 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </buton>

            <div className='w-full flex justify-between items-center lg:hidden'>
                
                {/* A space hack to put the logo where it is supposed to be */}
                <nav className="flex 2xl:pb-3 xl:pb-3 justify-center">
                    {/* <Logo /> */}
                </nav>

                <nav className='navbar-links'>
                    <CustomLink href="/" title="Home" className='mr-6 xl:mr-3 2xl:mr-4 '/>
                    <CustomLink href="/about" title="About" className='mx-6 xl:mx-3 2xl:mx-4 '/>
                    <CustomLink href="/projects" title="Projects" className='mx-6 xl:mx-3 2xl:mx-4 '/>
                    <CustomLink href="/blog" title="Blog" className='mx-6 xl:mx-3 2xl:mx-4 '/>
                </nav>

                <nav className="flex items-center justify-center flex-wrap navbar-socials">
                    <motion.a href="https://www.linkedin.com/in/balqaasem/" target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 mr-3"
                    >
                        <LinkedInIcon />
                    </motion.a>

                    <motion.a href="https://t.me/balqaasem" target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 mx-3"
                    >
                        <TelegramIcon />
                    </motion.a>
                

                    <motion.a href="https://instagram.com/balqaasem" target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 mx-3"
                    >
                        <InstagramIcon />
                    </motion.a>

                    <motion.a href="https://www.youtube.com/@balqaasem" target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 mx-3 mr-6"
                    >
                        <YouTubeIcon />
                    </motion.a>

                    <motion.a href="https://balqaasem.medium.com" target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 mx-3"
                    >
                        <MediumIcon />
                    </motion.a>

                    <motion.a href="https://github.com/balqaasem" target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 mx-3 bg-dark text-light rounded-full"
                    >
                        <GithubIcon />
                    </motion.a>

                    <motion.a href="mailto:jbashir52@gmail.com" target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 mx-3"
                    >
                        <EmailIcon />
                    </motion.a>

                    <nav className='navbar-subscribe mx-3'>
                        <SubscribeButton onClick={handleSubscribeClick} />
                    </nav>

                    <button
                    onClick={() => setMode(mode === 'light'? 'dark' : 'light')}
                    className={`ml-4 flex items-center justify-center rounded-full p-1
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                    navbar-theme-button
                    `}
                    >
                        {
                        mode === 'dark'?
                        <SunIcon className={"fill-dark"}/>
                        : <MoonIcon className={"fill-dark"}/>
                        }
                    </button>
                </nav>
            </div>
        </div>

        {
            isOpen ?

            <motion.div
            initial={ {scale:0, opacity:0, x: "-50%", y:"-50%"} }
            animate={ {scale:1, opacity:1}}
            className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-primary/40 dark:bg-primaryDark/40 rounded-lg backdrop-blur-md py-32
            '>
                <buton className='flex-col justify-center items-center hidden lg:flex menu-button' onClick={handleClick} style={{position: 'absolute', top: '5%', right: '10%'}}>
                    <span className={`bg-dark dark:bg-light hover:bg-light/50 dark:hover:bg-dark/50 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`bg-dark dark:bg-light hover:bg-light/50 dark:hover:bg-dark/50 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-00'} `}></span>
                    <span className={`bg-dark dark:bg-light hover:bg-light/50 dark:hover:bg-dark/50 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </buton>

                <nav className='flex items-center flex-col justify-center navbar-mobile-links'>
                    <CustomMobileLink href="/" title="Home" className='text-dark dark:text-light' toggle={handleClick} />
                    <CustomMobileLink href="/about" title="About" className='text-dark dark:text-light' toggle={handleClick} />
                    <CustomMobileLink href="/projects" title="Projects" className='text-dark dark:text-light' toggle={handleClick} />
                    <CustomMobileLink href="/blog" title="Blog" className='text-dark dark:text-light' toggle={handleClick} />
                </nav>

                <nav className="flex items-center justify-center flex-wra mt-2">
                    <motion.a href="https://www.linkedin.com/in/balqaasem/" target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 mr-3 sm:mx-1"
                    >
                        <LinkedInIcon />
                    </motion.a>

                    <motion.a href="https://twitter.com/balqaasem" target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 mx-3 bg-dark rounded-md"
                    >
                        <TwitterIcon />
                    </motion.a>

                    
                    <motion.a href="https://t.me/balqaasem" target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 mx-3"
                    >
                        <TelegramIcon />
                    </motion.a>
                   

                    <motion.a href="https://instagram.com/balqaasem" target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 mx-3 bg-dark rounded-full dark:bg-dark sm:mx-1"
                    >
                        <InstagramIcon />
                    </motion.a>

                    <motion.a href="https://www.youtube.com/@balqaasem" target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 mx-3 sm:mx-3"
                    >
                        <YouTubeIcon />
                    </motion.a>
                    
                    <motion.a href="https://balqaasem.medium.com" target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 mx-3 sm:mx-1"
                    >
                        <MediumIcon />
                    </motion.a>

                    <motion.a href="https://github.com/balqaasem" target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 mx-3 bg-dark text-light rounded-full sm:mx-1"
                    >
                        <GithubIcon />
                    </motion.a>

                    <motion.a href="mailto:jbashir52@gmail.com" target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className="w-6 ml-3"
                    >
                        <EmailIcon />
                    </motion.a>
                </nav>

                <nav className="flex items-center justify-center flex-wra mt-2">
                    <button
                    onClick={() => setMode(mode === 'light'? 'dark' : 'light')}
                    className={`flex items-center justify-center rounded-full p-1 sm:mx-1
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                     sm:mx-1`}
                    >
                        {
                        mode === 'dark'?
                        <SunIcon className={"fill-dark"}/>
                        : <MoonIcon className={"fill-dark"}/>
                        }
                    </button>
                </nav>
                
                <nav className='mobile-navbar-subscribe flex items-center justify-center flex-wra mt-2'>
                    <SubscriptionFormLayered/>
                </nav>
            </motion.div>

            : null
        }
        {isSubscribeOpen && (
            <SubscribePopup onClose={handleCloseSubscribe} />
        )}
    </header>
  )
}

export default NavBar;
