import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({name, x, y}) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold
    bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light 
    lg:py-1 lg:px-1 md:text-sm md:py-1 md:px-1 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light
    xs:py-3 xs:px-2 xs:font-light sm:dark-transparent sm:text-dark sm:dark:text-light sm:text-xs
    sm:pt- sm:px- sm:font-light sm:bg-transparent sm:dark:bg-transparent xs:text-xs
    '
    whileHover={{scale:1.05}}
    initial={{ x:0, y:0 }}
    whileInView={{ x:x, y:y, transition: {duration:1.5} }}
    viewport={{once:true}}
    >
      {name}
    </motion.div>
  )
}

const SkillGreen = ({name, x, y}) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold
    bg-primary text-dark py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-primary 
    lg:py-1 lg:px-1 md:text-sm md:py-1 md:px-1 xs:bg-transparent xs:dark:bg-transparent xs:text-primary xs:dark:text-primary
    xs:py-3 xs:px-2 xs:font-light sm:dark-transparent sm:text-primary sm:dark:text-primary sm:text-xs
    sm:pt- sm:px- sm:font-light sm:bg-transparent sm:dark:bg-transparent xs:text-xs
    '
    whileHover={{scale:1.05}}
    initial={{ x:0, y:0 }}
    whileInView={{ x:x, y:y, transition: {duration:1.5} }}
    viewport={{once:true}}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 mb-20 w-full text-center md:text-6xl md:mt-32 md:mb-2'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full lg:h-[80vh] sm:h-[60vh] xs:h-[50vg] '>

          <motion.div className='flex items-center justify-center rounded-full font-semibold lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-2
          bg-dark text-light p-3 shadow-dark cursor-pointer dark:text-dark dark:bg-light' whileHover={{scale:1.05}}>
            STAR
          </motion.div>
          
          <Skill name="Cross-Platform" x="-36vw" y="-18.8vw"/>
          <Skill name="TailwindCSS" x="-18vw" y="-18.8vw"/>
          <Skill name="PostgreSQL" x="-2vw" y="-18.8vw"/>
          <Skill name="AWS" x="9.5vw" y="-18.8vw"/>
          <Skill name="PolkadotJS" x="21vw" y="-18.8vw"/>
          <Skill name="FullStack" x="35vw" y="-18.8vw"/>

          <Skill name="Substrate" x="-38vw" y="-14.1vw"/>
          <Skill name="LangChain" x="-24vw" y="-14.1vw"/>
          <Skill name="Solidity" x="-12vw" y="-14.1vw"/>
          <Skill name="EthersJS" x="-1vw" y="-14.1vw"/>
          <Skill name="Research" x="11vw" y="-14.1vw"/>
          <Skill name="Flutter" x="22vw" y="-14.1vw"/>
          <Skill name="Web3"  x="31vw" y="-14.1vw"/>

          <Skill name="NodeJS" x="-38.5vw" y="-9.4vw"/>
          <Skill name="ReactJS" x="-27vw" y="-9.4vw"/>
          <Skill name="PyTorch" x="-15.5vw" y="-9.4vw"/>
          <Skill name="GraphQL" x="-4vw" y="-9.4vw"/>
          <Skill name="MongoDB" x="8.5vw" y="-9.4vw"/>
          <Skill name="Ganache" x="21vw" y="-9.4vw"/>

          <Skill name="Truffle" x="-39vw" y="-4.7vw"/>
          <Skill name="Github" x="-29.5vw" y="-4.7vw"/>
          <Skill name="Web3JS" x="-18.6vw" y="-4.7vw"/>
          <Skill name="NextJS" x="-7.6vw" y="-4.7vw"/>
          <Skill name="Prisma" x="3vw" y="-4.7vw"/>
          <Skill name="Golang" x="14vw" y="-4.7vw"/>

          <Skill name="Python" x="-38.5vw" y="0vw"/>
          <Skill name="Docker" x="-29vw" y="0vw"/>
          <Skill name="Redux" x="-19vw" y="0vw"/>
          <Skill name="AI/ML" x="-10vw" y="0vw"/>
          <Skill name="CI/CD" x="9.1vw" y="0vw"/>

          <Skill name="NGiNX" x="-38.5vw" y="4.7vw"/>
          <Skill name="SQL" x="-28vw" y="4.7vw"/>
          <Skill name="RxJS" x="-18vw" y="4.7vw"/>
          <Skill name="Rust" x="-9.5vw" y="4.7vw"/>
          <Skill name="IPFS" x="-1vw" y="4.7vw"/>
          
          <Skill name="OpenAI" x="-38.5vw" y="9.4vw"/>
          <Skill name="Dart" x="-29vw" y="9.4vw"/>
          <Skill name="WASM" x="-20vw" y="9.4vw"/>
          <Skill name="Web3JS" x="-9.5vw" y="9.4vw"/>
          
          <Skill name="Openzeppelin" x="-35vw" y="14.1vw"/>
          <Skill name="Redis" x="-22.5vw" y="14.1vw"/>
          <Skill name="Ink!" x="-14vw" y="14.1vw"/>
          
          <Skill name="Ethereum" x="-37vw" y="18.8vw"/>
          <Skill name="LDK" x="-26vw" y="18.8vw"/>

          <Skill name="Infura" x="-39.5vw" y="23.5vw"/>



          <SkillGreen name="API" x="6vw" y="9.4vw"/>

          <SkillGreen name="TS" x="-4vw" y="14.1vw"/>
          <SkillGreen name="Runtime" x="5vw" y="14.1vw"/>
          <SkillGreen name="Pallet" x="15vw" y="14.1vw"/>

          <SkillGreen name="JS" x="-12vw" y="18.8vw"/>
          <SkillGreen name="HardHat" x="-4vw" y="18.8vw"/>
          <SkillGreen name="ERC721" x="7vw" y="18.8vw"/>
          <SkillGreen name="WalletConnect" x="21vw" y="18.8vw"/>

          <SkillGreen name="Bitcoin" x="-22vw" y="23.5vw"/>
          <SkillGreen name="OSINT" x="-13vw" y="23.5vw"/>
          <SkillGreen name="ERC20" x="-3vw" y="23.5vw"/>
          <SkillGreen name="Smart Contract" x="10.5vw" y="23.5vw"/>
          <SkillGreen name="Foundry" x="24.3vw" y="23.5vw"/>
          <SkillGreen name="CI/CD" x="34vw" y="23.5vw"/>
        </div>
    </>
  )
}

export default Skills