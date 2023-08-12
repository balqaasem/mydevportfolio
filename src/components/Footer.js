import React from 'react'
import Layout from './Layout'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg'
    >
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear} &copy; All Rights Reserved.</span>
            <Link href="https://www.linkedin.com/newsletters/decoded-with-khalifa-mba-7048092243454263296/" target={"_black"} className='underline underline-offset-2'>Newsletter</Link>
            <div>
                Built with <span className='text-primary text-2xl px-1'>&hearts;</span>
                by&nbsp;<Link href="https://linktr.ee/khalifamba" target={"_black"} className='underline underline-offset-2'>Khalifa MBA</Link>
            </div>
            <Link href="https://linktr.ee/khalifamba" target={"_black"} className='underline underline-offset-2'>LinkTree</Link>
            <Link href="mailto:jbashir52@gmail.com" target={"_black"} className='underline underline-offset-2'>Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer