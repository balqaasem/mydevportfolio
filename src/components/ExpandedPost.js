import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import { CloseIcon } from './Icons';

const ExpandedPost = ({ post, onClose }) => {
  return (
    <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg overflow-auto max-h-[80vh]">
      <button onClick={onClose} className=" float-right text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <CloseIcon />
      </button>
      <h2 className="text-2xl font-bold mb-4 dark:text-light">{post.title}</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
      <p className="mb-4 dark:text-light">{post.subtitle}</p>
      <p className="text-sm font-bold text-primaryGreenDark dark:text-primaryDark mb-2">Topic: {post.topic}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags && post.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
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
    </div>
  );
};

export default ExpandedPost;
