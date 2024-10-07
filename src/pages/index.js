import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import Link from 'next/link';
import {LinkArrow} from '../components/Icons';
import profilePic from "../../public/images/profile/khalifa-art-3-transparent.png";
import AnimatedText from '../components/AnimatedText';
import TransitionEffect from '@/components/TransitionEffect';
import SubscribeButton from '@/components/SubscribeButton';
import SubscribePopup from '@/components/SubscribePopup';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  const handleSubscribeClick = () => {
      setIsSubscribeOpen(true);
  };

  const handleCloseSubscribe = () => {
      setIsSubscribeOpen(false);
  };

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
              
              <AnimatedText text="Not always easy." className='!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!5xl sm:text-3xl
              '/>

              <AnimatedText text="But always worth it." className='!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!5xl sm:text-3xl
              '/>

              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As an Artist, Engineer and Scientist, I am dedicated to building innovative products from raw ideas. I love learning and building.
              </p>

              <div className='flex items-center self-start mt-2 lg:self-center'>
                <SubscribeButton onClick={handleSubscribeClick} />

                <Link href="mailto:jbashir52@gmail.com" target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >Contact
                </Link>
              </div>
            </div>
          </div>
          {isSubscribeOpen && (
              <SubscribePopup onClose={handleCloseSubscribe} />
          )}
        </Layout>
      </main>
    </>
  )
}
