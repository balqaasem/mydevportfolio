import Layout from '@/components/Layout';
import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';

const projects = () => {
  return (
    <>
        <Head>
            <title>Khalifa MBA | Projects Page</title>
            <meta name="description" content="Projects page of Khalifa MBA" />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Building Great Projects!"/>

                <div className='grid grid-cols-12 gap-24'>
                    <div className='col-span-12'>
                        Featured Projects
                    </div>
                    <div className='col-span-6'>
                        Project 1
                    </div>
                    <div className='col-span-6'>
                        Project 2
                    </div>
                    <div className='col-span-6'>
                        Project 3
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects