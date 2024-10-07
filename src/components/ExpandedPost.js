import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CloseIcon } from './Icons';
import ShareWithArea from './ShareWithArea';

const FramerImage = motion(Image);

const ExpandedPost = ({ post, onClose }) => {
  const link = `https://balqaasem.xyz/blog?slug=${post.slug}`;

  // Construct the image path based on the slug
  const imagePath = `/images/posts/${post.slug}/1.png`;

  return (
    <div className="bg-gray-50 dark:bg-dark p-6 rounded-lg shadow-lg overflow-auto max-h-[80vh]">
      <button onClick={onClose} className=" float-right text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <CloseIcon />
      </button>
      <h2 className="text-2xl font-bold mb-4 dark:text-light">{post.title}</h2>
      <div className="flex flex-row sm:flex-col xs:flex-col">
        <div className='post-heading w-full lg:w-1/2 sm:w-full xs:w-full'>
          <p className="text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
          <p className="mb-4 dark:text-light">{post.subtitle}</p>
          {post.series && <p className="text-sm font-bold text-blue-500 dark:text-blue-300 mb-2">Series: {post.series}</p>}
          <p className="text-sm font-bold text-primaryGreenDark dark:text-purple-300 mb-2">Topic: {post.topic}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags && post.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className='post-imag lg:w-1/2 sm:w-full xs:w-full cursor-pointer overflow-hidden rounded-lg'>
          <FramerImage 
            src={imagePath}
            alt={post.title} 
            className='w-full h-auto'
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={768}
            height={400}
          />
        </div>
      </div>
      <div className='mb-2'>
        <ShareWithArea link={link} post={post} />
      </div>
      <div className="prose dark:prose-dark max-w-none">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
          remarkPlugins={[remarkGfm]}
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <pre className="bg-gray-100 dark:bg-gray-800 rounded p-2 overflow-x-auto">
                  <code className={className} {...props}>
                    {children}
                  </code>
                </pre>
              ) : (
                <code className={`${className} bg-gray-100 dark:bg-gray-800 rounded px-1`} {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
      <div className='mb-2'>
        <ShareWithArea link={link} post={post} />
      </div>
    </div>
  );
};

export default ExpandedPost;
