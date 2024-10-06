import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { LinkedInIcon, TelegramIcon, TwitterIcon, CopyIcon } from './Icons';

const FramerImage = motion(Image);

const PostPreview = ({ title, date, subtitle, slug, topic, tags, series, onClick }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    onClick();
    router.push(`/blog?slug=${slug}`, undefined, { shallow: true });
  };

  const link = `https://balqaasem.xyz/blog?slug=${slug}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
  };

  // Construct the image path based on the slug
  const imagePath = `/images/posts/${slug}.png`;

  return (
    <motion.article
      className="
        w-full flex items-center justify-between relative border border-solid border-gray-300 dark:border-gray-600 p-8
        shadow-2xl rounded-br-2xl rounded-3xl shadow-sm bg-light dark:bg-dark hover:shadow-md transition-shadow duration-300
        hover:border-primaryGreenDark hover:dark:border-purple-400 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
      "
      whileHover={{y:-2}}
    >
      
      <div
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
        onClick={handleClick}
      >
        <FramerImage 
          src={imagePath}
          alt={title} 
          className='w-full h-auto'
          whileHover={{scale:1.05}}
          whileTap={{scale:0.9}}
          transition={{duration:0.2}}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={768}
          height={400}
        />
      </div>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lgg:pt-6'>
        <motion.div
          className='hover:underline underline-offset-2 cursor-pointer'
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          onClick={handleClick}
        >
          <h2 className='my-2 w-full text-left text-2xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </motion.div>

        <p className="text-gray-500 dark:text-gray-400 mb-2">{date}</p>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{subtitle}</p>
        <div className="flex justify-between">
          {series && <p className="text-sm font-bold text-blue-500 dark:text-blue-300 mb-2 mr-4">Series: {series}</p>}
          {topic && <p className="text-sm font-bold text-primaryGreenDark dark:text-purple-300 mb-2 ml-4">Topic: {topic}</p>}
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
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
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}&text=${encodeURIComponent(title)}`}
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
      </div>
    </motion.article>
  );
};

export default PostPreview;
