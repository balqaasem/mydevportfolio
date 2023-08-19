import React from 'react';
import { motion } from 'framer-motion';
import {
  ReactJsIcon, GithubIcon, FigmaIcon, HtmlIcon, CssIcon, FramerMotionIcon, WalletConnectIcon, TypescriptIcon, OpenAiIcon, TensorFlowIcon,
  FlutterIcon, NodeJsIcon, PolkadotJsIcon, Web3JsIcon, RxJsIcon, DartIcon, RustIcon, GolangIcon, PythonIcon, SolidityIcon, LangchainIcon,
  GraphQLIcon, WebAssemblyIcon, MySqlIcon, PostgreSqlIcon, MongoDbIcon, PrismaIcon, ReduxIcon, WebpackIcon, RedisIcon, NginxIcon,InkIcon,
  FastApiIcon, IpfsIcon, NixIcon, DockerIcon, NextJsIcon, PyTorchIcon, AwsIcon, PrometheusIcom, PostHogIcon, KaggleIcon, HuggingFaceIcon,
  TableauIcon, PowerBiIcon, JiraIcon, AsanaIcon, Office365Icon, SupabaseIcon, OpenZeppelinIcon, SubstrateIcon, EthereumIcon, TruffleIcon,
  HardhatIcon, LinuxIcon, DevOpsIcon, GoogleAnalyticsIcon, TailwindCssIcon, JavascriptIcon
} from './Icons';

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
            STAR
          </motion.div>
          
          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:70, y:55}}
          transition={{ duration: 1.5 }}
          >
             <FigmaIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-12, y:-66}}
          transition={{ duration: 1.5 }}
          >
             <HtmlIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-12, y:66}}
          transition={{ duration: 1.5 }}
          >
             <CssIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-65, y:-40}}
          transition={{ duration: 1.5 }}
          >
             <TailwindCssIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-10, y:120}}
          transition={{ duration: 1.5 }}
          >
             <FramerMotionIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <JavascriptIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <TypescriptIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <ReactJsIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <NextJsIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <NodeJsIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <PolkadotJsIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <Web3JsIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <RxJsIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <FlutterIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <DartIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <RustIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <GolangIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <PythonIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <SolidityIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <InkIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <WebAssemblyIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <MySqlIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <PostgreSqlIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <GraphQLIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <MongoDbIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <PrismaIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <ReduxIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <WebpackIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <RedisIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <NginxIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <FastApiIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <IpfsIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <LinuxIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <NixIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:0, y:12}}
          transition={{ duration: 1.5 }}
          >
             <DockerIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-120, y:-15}}
          transition={{ duration: 1.5 }}
          >
             <GithubIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-120, y:-15}}
          transition={{ duration: 1.5 }}
          >
             <DevOpsIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-120, y:-15}}
          transition={{ duration: 1.5 }}
          >
             <AwsIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-120, y:-15}}
          transition={{ duration: 1.5 }}
          >
             <GoogleAnalyticsIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-120, y:-15}}
          transition={{ duration: 1.5 }}
          >
             <SupabaseIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-120, y:-15}}
          transition={{ duration: 1.5 }}
          >
             <PrometheusIcom />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-120, y:-15}}
          transition={{ duration: 1.5 }}
          >
             <PostHogIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-120, y:-15}}
          transition={{ duration: 1.5 }}
          >
             <Office365Icon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-120, y:-15}}
          transition={{ duration: 1.5 }}
          >
             <TableauIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-120, y:-15}}
          transition={{ duration: 1.5 }}
          >
             <PowerBiIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-120, y:-15}}
          transition={{ duration: 1.5 }}
          >
             <JiraIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-190, y:240}}
          transition={{ duration: 1.5 }}
          >
             <AsanaIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-190, y:0}}
          transition={{ duration: 1.5 }}
          >
             <OpenZeppelinIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:320, y:-190}}
          transition={{ duration: 1.5 }}
          >
             <SubstrateIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-450, y:-150}}
          transition={{ duration: 1.5 }}
          >
             <EthereumIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-120, y:-75}}
          transition={{ duration: 1.5 }}
          >
             <TruffleIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-220, y:250}}
          transition={{ duration: 1.5 }}
          >
             <HardhatIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-180, y:200}}
          transition={{ duration: 1.5 }}
          >
             <WalletConnectIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-180, y:-160}}
          transition={{ duration: 1.5 }}
          >
             <OpenAiIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-150, y:160}}
          transition={{ duration: 1.5 }}
          >
             <PyTorchIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-120, y:120}}
          transition={{ duration: 1.5 }}
          >
             <TensorFlowIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-120, y:40}}
          transition={{ duration: 1.5 }}
          >
             <HuggingFaceIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-120, y:0}}
          transition={{ duration: 1.5 }}
          >
             <KaggleIcon />
          </motion.div>

          <motion.div className='flex items-center justify-center rounded-full 
          bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
          whileHover={{scale:1.05}}
          initial={{ x:0, y:0 }}
          animate={{ x:-120, y:-99}}
          transition={{ duration: 1.5 }}
          >
             <LangchainIcon />
          </motion.div>
        </div>
    </>
  )
}

export default Skills