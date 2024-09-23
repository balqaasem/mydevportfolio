import React from 'react';

const ExpandedPost = ({ post, onClose }) => {
  return (
    <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg">
      <button onClick={onClose} className="float-right">Close</button>
      <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{post.date}</p>
      <p className="mb-4">{post.subtitle}</p>
      {/* Add more content here, such as the full blog post */}
    </div>
  );
};

export default ExpandedPost;