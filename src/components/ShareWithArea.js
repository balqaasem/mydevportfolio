import React from 'react';
import { motion } from 'framer-motion';
import { LinkedInIcon, TelegramIcon, TwitterIcon, CopyIcon } from './Icons';

const copyToClipboard = () => {
  navigator.clipboard.writeText(link);
  alert('Link copied to clipboard!');
};

const ShareWithArea = ({ link, post }) => (
  <div className='mt-2 flex items-center rounded bg-primary dark:bg-primaryDark'>
    <p className='text-dark dark:text-light p-2 text-lg font-semibold sm:px-4 sm:text-base'> Share with: </p>
    <motion.a
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`}
      target={"_blank"}
      whileHover={{y:-2}}
      whileTap={{scale:0.9}}
      className="w-6 mr-3"
    >
        <LinkedInIcon />
    </motion.a>
    <motion.a
      href={`https://t.me/share/url?url=${encodeURIComponent(link)}`}
      target={"_blank"}
      whileHover={{y:-2}}
      whileTap={{scale:0.9}}
      className="w-6 mr-3"
    >
        <TelegramIcon />
    </motion.a>
    <motion.a
      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}&text=${encodeURIComponent(post.title)}`}
      target={"_blank"}
      whileHover={{y:-2}}
      whileTap={{scale:0.9}}
      className="w-6 mr-3"
    >
        <TwitterIcon />
    </motion.a>

    <motion.button
      whileHover={{y:-2}}
      whileTap={{scale:0.9}}
      className={`w-6 mr-3`}
      onClick={copyToClipboard}
    >
        <CopyIcon />
    </motion.button>
  </div>
);

export default ShareWithArea;
