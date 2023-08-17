import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({name, x, y}) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold
    bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
    whileHover={{scale:1.05}}
    initial={{ x:0, y:0 }}
    animate={{ x:x, y:y}}
    transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>

          <motion.div className='flex items-center justify-center rounded-full font-semibold
          bg-dark text-light p-8 shadow-dark cursor-pointer' whileHover={{scale:1.05}}>
            Web
          </motion.div>

          //TODO: Update coordinates and add more skills
          <Skill name="HTML" x="-20vw" y="2vw"/>
          <Skill name="CSS" x="-5vw" y="-10vw"/>
          <Skill name="Tailwind CSS" x="-5vw" y="-10vw"/>
          <Skill name="Figma" x="-20vw" y="2vw"/>
          <Skill name="Web Design" x="-5vw" y="-10vw"/>
          <Skill name="Javascript" x="-5vw" y="-10vw"/>
          <Skill name="Typescript" x="-5vw" y="-10vw"/>
          <Skill name="ReactJS" x="-5vw" y="-10vw"/>
          <Skill name="NextJS" x="-5vw" y="-10vw"/>
          <Skill name="NodeJS" x="-5vw" y="-10vw"/>
          <Skill name="PolkadotJS" x="-5vw" y="-10vw"/>
          <Skill name="EthersJS" x="-5vw" y="-10vw"/>
          <Skill name="Web3JS" x="-5vw" y="-10vw"/>
          <Skill name="Rust" x="-5vw" y="-10vw"/>
          <Skill name="Golang" x="-5vw" y="-10vw"/>
          <Skill name="Python" x="-5vw" y="-10vw"/>
          <Skill name="Solidity" x="-5vw" y="-10vw"/>
          <Skill name="Ink!" x="-5vw" y="-10vw"/>
          <Skill name="WebAssembly" x="-5vw" y="-10vw"/>
          <Skill name="MySQL" x="-5vw" y="-10vw"/>
          <Skill name="PostgreSQL" x="-5vw" y="-10vw"/>
          <Skill name="MongoDB" x="-5vw" y="-10vw"/>
          <Skill name="Redux" x="-5vw" y="-10vw"/>
          <Skill name="NGiNX" x="-5vw" y="-10vw"/>
          <Skill name="IPFS" x="-5vw" y="-10vw"/>
          <Skill name="Docker" x="-5vw" y="-10vw"/>
          <Skill name="Kubernettes" x="-5vw" y="-10vw"/>
          <Skill name="Intel-SGX" x="-5vw" y="-10vw"/>
          <Skill name="GitHub" x="-5vw" y="-10vw"/>
          <Skill name="Architecture" x="-5vw" y="-10vw"/>
          <Skill name="Foundry" x="-5vw" y="-10vw"/>
          <Skill name="Smart Contracts" x="-5vw" y="-10vw"/>
          <Skill name="Substrate" x="-5vw" y="-10vw"/>
          <Skill name="Web3" x="-5vw" y="-10vw"/>
          <Skill name="Blockchain" x="-5vw" y="-10vw"/>
          <Skill name="WalletConnect" x="-5vw" y="-10vw"/>
          <Skill name="AI/ML" x="-5vw" y="-10vw"/>
          <Skill name="PyTorch" x="-5vw" y="-10vw"/>
          <Skill name="HuggingFace" x="-5vw" y="-10vw"/>
          <Skill name="LLamA" x="-5vw" y="-10vw"/>
          <Skill name="OpenAI" x="-5vw" y="-10vw"/>
        </div>
    </>
  )
}

export default Skills