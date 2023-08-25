import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';

const blog = () => {
  return (
    <>
        <Head>
            <title>Khalifa MBA | Blog Page</title>
            <meta name="description" content="Blog page of Khalifa MBA" />
        </Head>
        <main>
            <Layout>
                <AnimatedText text="Listen To The Words of Wisdom!" className='mb-16'/>
            </Layout>
        </main>
    </>
  )
}

export default blog