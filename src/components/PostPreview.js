import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ShareWithArea from './ShareWithArea';

const FramerImage = motion(Image);

const PostPreview = ({ post, onClick }) => {
  
  const router = useRouter();

  if (!post) {
    return null;
  }

  const handleClick = (e) => {
    e.preventDefault();
    onClick();
    router.push(`/blog?slug=${post.slug}`, undefined, { shallow: true });
  };

  const link = `https://balqaasem.xyz/blog?slug=${post.slug}`;
  // Construct the image path based on the slug
  const imagePath = `/images/posts/${post.slug}/1.png`;

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
          alt={post.title} // Changed from `title` to `post.title`
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
          <h2 className='my-2 w-full text-left text-2xl font-bold dark:text-light sm:text-sm'>{post.title}</h2>
        </motion.div>

        <p className="text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{post.subtitle}</p>
        <div className="flex justify-between">
          {post.series && <p className="text-sm font-bold text-blue-500 dark:text-blue-300 mb-2 mr-4">Series: {post.series}</p>}
          {post.topic && <p className="text-sm font-bold text-primaryGreenDark dark:text-purple-300 mb-2 ml-4">Topic: {post.topic}</p>}
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags && post.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <ShareWithArea link={link} post={post} />
      </div>
    </motion.article>
  );
};

export default PostPreview;
