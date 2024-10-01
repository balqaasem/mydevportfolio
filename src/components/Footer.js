import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { LinkedInIcon, TwitterIcon, TelegramIcon, InstagramIcon, MediumIcon, GithubIcon, YouTubeIcon, SunIcon, MoonIcon } from './Icons';
import Logo from './Logo';
import Layout from './Layout'
import Link from 'next/link';
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';
import SubscriptionForm from '@/components/SubscriptionForm';

const CustomLink = ({href, title, className=""}) => {
  const router = useRouter();
  return(
      <Link href={href} className={`${className} relative group`}>
          {title}

          <span className={`
          h-1 inline-block bg-primary absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? 'w-full h-1' : 'w-0'}
          dark:bg-primaryDark`}
          >
              &nbsp;
          </span>
      </Link>
  )
}

const Footer = () => {

  const [mode, setMode] = useThemeSwitcher();

  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-primaryDark backdrop-blur-md
    sm:text-base
    '
    >
      <div className='bg-primary dark:bg-primaryDark px-8 py-8 lg:py-2'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
          <div classname='footer-left py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <nav className="flex 2xl:pb-3 xl:pb-3 justify-center footer-logo">
              <Logo />
            </nav>

            <div className='lg:pb-4 footer-links'>
              <nav>
                <CustomLink href="/" title="Home" className='mr-4'/>
                <CustomLink href="/about" title="About" className='mx-4'/>
                <CustomLink href="/projects" title="Projects" className='mr-4'/>
                <CustomLink href="/blog" title="Blog" className='mx-4'/>
              </nav>
            </div>

            <div className='lg:pt-4 footer-socials'>
              <nav className="flex items-center justify-center flex-wrap">
                  
                <motion.a href="https://www.linkedin.com/in/balqaasem/" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mr-3"
                >
                    <LinkedInIcon />
                </motion.a>

                <motion.a href="https://twitter.com/balqaasem" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3 bg-dark rounded-md border border-light"
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
                className="w-6 mx-3 bg-dark text-light rounded-md"
                >
                    <InstagramIcon />
                </motion.a>

                <motion.a href="https://www.youtube.com/@balqaasem" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3"
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
                className="w-6 ml-3 bg-dark text-light rounded-full border border-light"
                >
                    <GithubIcon />
                </motion.a>

                <button
                onClick={() => setMode(mode === 'light'? 'dark' : 'light')}
                className={`ml-3 flex items-center justify-center rounded-full p-1
                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
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

          {/* Newsletter Subscription Form */}
          <div className="footer-right footer-subscription flex flex-col items-center">
            <h2>Subscribe to our Newsletter</h2>
            <SubscriptionForm />
          </div>
        </Layout>

        <Layout className='py-4 flex items-center justify-between lg:flex-col lg:py-6'>
          <span>{new Date().getFullYear} &copy; 2023-Present | All Rights Reserved.</span>
            <div className='flex items-center lg:py-4'>
                Built with <span className='text-red-600 text-2xl px-1'>&hearts;</span>
                by&nbsp;<Link href="https://github.com/balqaasem" target={"_black"} 
                className='
                  underline underline-offset-2 text-primaryGreenDark dark:text-primaryDark hover:text-primaryDark hover:dark:text-primaryGreenDark
                '>Khalifa MBA</Link>
            </div>
            <Link href="mailto:jbashir52@gmail.com" target={"_black"} className='underline underline-offset-2'>Say Hello</Link>
        </Layout>
      </div>
    </footer>
  )
}

export default Footer