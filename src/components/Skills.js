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
          bg-dark text-light p-3 shadow-dark cursor-pointer' whileHover={{scale:1.05}}>
            STAR
          </motion.div>
          
          <Skill name="Management" x="23vw" y="-20.75vw"/>
          <Skill name="Research" x="10vw" y="-20vw"/>
          <Skill name="FullStack" x="-2vw" y="-20.75vw"/>
          <Skill name="BackEnd"  x="-13vw" y="-20vw"/>
          <Skill name="FrontEnd" x="-24vw" y="-20.75vw"/>

          <Skill name="Flutter" x="29vw" y="-15.75vw"/>
          <Skill name="TailwindCSS" x="17.5vw" y="-15vw"/>
          <Skill name="CSS" x="7vw" y="-15.75vw"/>
          <Skill name="Github" x="-1vw" y="-15vw"/>
          <Skill name="HTML" x="-10vw" y="-15.75vw"/>
          <Skill name="ReactJS" x="-19.5vw" y="-15vw"/>
          <Skill name="MERN" x="-29vw" y="-15vw"/>

          <Skill name="EthersJS" x="36vw" y="-10vw"/>
          <Skill name="PolkadotJS" x="20vw" y="-10.75vw"/>
          <Skill name="JS" x="9vw" y="-10vw"/>
          <Skill name="NodeJS" x="-4vw" y="-10vw"/>
          <Skill name="OpenAI" x="-19vw" y="-10.75vw"/>
          <Skill name="WalletConnect" x="-36vw" y="-10vw"/>


          <Skill name="HuggingFace" x="-31.5vw" y="-5vw"/>
          <Skill name="NextJS" x="-8vw" y="-5.75vw"/>
          <Skill name="RxJS" x="1vw" y="-5vw"/>
          <Skill name="Rust" x="17vw" y="-5vw"/>
          <Skill name="Ink!" x="25vw" y="-5.75vw"/>
          <Skill name="Golang" x="33vw" y="-5vw"/>


          <Skill name="Substrate" x="-38vw" y="0vw"/>
          <Skill name="Truffle" x="-27vw" y="0.75vw"/>
          <Skill name="TS" x="-8vw" y="0vw"/>
          <Skill name="Hardhat" x="-16.3vw" y="0.75vw"/>
          <Skill name="MySQL" x="11.5vw" y="0vw"/>
          <Skill name="PostgreSQL" x="26vw" y="0.75vw"/>
          <Skill name="GraphQL" x="38vw" y="0vw"/>


          <Skill name="WASM" x="-33vw" y="5vw"/>
          <Skill name="Prisma" x="-21vw" y="5vw"/>
          <Skill name="Redux" x="-10vw" y="5.75vw"/>
          <Skill name="Redis" x="2vw" y="5.75vw"/>
          <Skill name="NGiNX" x="14vw" y="5vw"/>
          <Skill name="Linux" x="24.5vw" y="5.75vw"/>
          <Skill name="IPFS" x="34vw" y="5vw"/>

          <Skill name="FramerMotion" x="-35vw" y="10vw"/>
          <Skill name="PyTorch" x="-21vw" y="10vw"/>
          <Skill name="Python" x="-10vw" y="10vw"/>
          <Skill name="AWS" x="11vw" y="10.75vw"/>
          <Skill name="Solidity" x="1vw" y="10vw"/>
          <Skill name="MongoDB" x="22vw" y="10.75vw"/>
          <Skill name="Web3JS" x="36vw" y="10vw"/>

          <Skill name="LangChain" x="-33vw" y="15vw"/>
          <Skill name="Docker" x="-19vw" y="15vw"/>
          <Skill name="Ganache" x="-7vw" y="15vw"/>
          <Skill name="Webpack" x="6.5vw" y="15.75vw"/>
          <Skill name="Dart" x="19vw" y="15.75vw"/>

          <Skill name="AI/ML" x="-22vw" y="20vw"/>
          <Skill name="Web3"  x="-12.3vw" y="20.75vw"/>
          <Skill name="Cross-Platform" x="0vw" y="20.75vw"/>
          <Skill name="iOS" x="12vw" y="20vw"/>
          <Skill name="Android" x="22vw" y="20vw"/>

        </div>
    </>
  )
}

export default Skills