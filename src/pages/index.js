import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import Link from 'next/link';
import {LinkArrow} from '../components/Icons';
import profilePic from "../../public/images/profile/khalifa-art-3-transparent.png";
import AnimatedText from '../components/AnimatedText';
import HireMe from '../components/HireMe';
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Khalifa MBA - Muhammad-Jibril B.A</title>
        <meta name="description" content="The portfolio Website of Muhammad-Jibril B.A. Al-Fellati Al-Shareef (Khalifa MBA)" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full main-h-screen dark:text-light'>
      <Layout className='md:p-8 xs:pt-8 sm:pt-8 pt-12 md:pt-8 lg:pt-8 xl:pt-15 2xl:pt-15'>
          <div className="flex items-center justify-between w-full lg:flex-col xs:pt-8 sm:pt-8 pt-12 md:pt-8 lg:pt-8 xl:pt-15 2xl:pt-15">
            
            <div className='w-[47%]'>
              <Image src={profilePic} alt="Khalifa MBA" className='w-full h-auto lg:w-full md:inline-block md:w-full'
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 50vw"
              />
            </div>

            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              
              <AnimatedText text="If You Can Imagine It, I can Build It." className='!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!5xl sm:text-3xl
              '/>

              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a skilled STAR (SDE, TPM, Architect, Researcher), I am dedicated to building innovative products from raw ideas. 
                Explore my latest projects, articles and blogs, showcasing my expertise in a plethora of skills ranging from Software Architecture,
                AI/ML development, R&D, Web3 development to Developer toolings, API & SDK development, etc.. 
                I have experience in Sales and Marketing and run Velicium - a Global Digital Marketing and Business Development Firm.
              </p>

              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="alfellati.medium.com" target={"_blank"}
                className="flex items-center bg-primary text-primaryDark p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-primaryDark hover:text-primary border-2 border-solid border-primaryDark hover:border-primary
                dark:bg-primary dark:text-primaryDark hover:dark:bg-primaryDark hover:dark:text-primary dark:border-primaryDark hover:dark:border-primary
                md:p-2 md:px-4 md:text-base
                "
                download={true}
                >Medium <LinkArrow className={"w-6 ml-1"}/>
                </Link>

                <Link href="mailto:jbashir52@gmail.com" target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:bottom-[300px] lg:bottom-[260px]'>
          <Image src={lightBulb} alt="Khalifa MBA" className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
