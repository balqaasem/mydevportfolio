import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkedInIcon, MediumIcon } from '@/components/Icons';
import TransitionEffect from '@/components/TransitionEffect';

const Medium = ({img, tag, title, description, visitLink, subscribeLink}) => {

  return(
        <article
            className='w-full flex items-center justify-between relative rounded-br-2xl
            rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12
            lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'
        >
          <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            ' />

          <div className='w-full flex flex-col items-start justify-between pl-6'>
              <span className='text-primaryGreenDark dark:text-primaryDark font-medium text-xl'>{tag}</span>
              <Link
              href={visitLink}
              target="_blank"
              className='hover:underline underline-offset-2'
              >
                <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
              </Link>
              <p className='my-2 font-medium text-dark dark:text-light'>{description}</p>
              <div className='mt-2 flex items-center'>
                <Link href={visitLink} target="_blank" className='w-10'>
                  {" "}
                  <MediumIcon />{" "}
                </Link>
                <Link
                href={subscribeLink}
                target="_blank"
                className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold'
                > Subscribe</Link>
              </div>
          </div>
        </article>
  )
}


const LinkedIn = ({img, tag, title, description, visitLink, subscribeLink}) => {

  return(
    <article
        className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'
    >
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
        rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'
      />

      <div className='w-full flex flex-col items-start justify-between pl-6'>
          <span className='text-primaryGreenDark dark:text-primaryDark font-medium text-xl'>{tag}</span>
          <Link
          href={visitLink}
          target="_blank"
          className='hover:underline underline-offset-2'
          >
            <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
          </Link>
          <p className='my-2 font-medium text-dark dark:text-light'>{description}</p>
          <div className='mt-2 flex items-center'>
            <Link href={visitLink} target="_blank" className='w-10'>
              {" "}
              <LinkedInIcon />{" "}
            </Link>
            <Link
            href={subscribeLink}
            target="_blank"
            className='ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold'
            > Subscribe</Link>
          </div>
      </div>
    </article>
  )
}

const blogs = () => {
  return (
    <>
        <Head>
            <title>Khalifa MBA | Blogs Page</title>
            <meta name="description" content="Blogs and Newsletters of Muhammad-Jibril B.A. Al-Fellati Al-Shareef (Khalifa MBA)" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
              <AnimatedText
                  text="Listen To The Words of Wisdom!"
                  className='mb-16 lg:!text-7xl sm:mb-8 sm!text-6xl xs:!text-4xl'
              />
              
              <div className='w-full flex flex-col items-center justify-center gap-24 gap-y-32'>
                  <div className='col-span-12'>
                    <LinkedIn
                      // img={linkedInProfile}
                      tag="LinkedIn Newsletter"
                      title="Decoded with Khalifa MBA"
                      description="Discussing and Decoding Technical Concepts and Topics down to the Principles - Blockchain, Web3, Cloud, AI, Tech, etc."
                      visitLink="https://www.linkedin.com/newsletters/7048092243454263296/"
                      subscribeLink="https://www.linkedin.com/pulse/decoded-khalifa-mba-muhammad-jibril-b-a-/?trackingId=D%2F03WUo8RgiBHfkrkvnBZw%3D%3D"
                    /> 
                  </div>
                  <div className='col-span-12'>
                    <Medium
                      // img={mediumProfile}
                      tag="Medium Author"
                      title="Muhammad-Jibril B.A."
                      description="My Medium profile where I publish stories around my interests, mostly related to the publications I publish for."
                      visitLink="https://alfellati.medium.com"
                      subscribeLink="/"
                    /> 
                  </div>

              </div>
            </Layout>
        </main>
    </>
  )
}

export default blogs