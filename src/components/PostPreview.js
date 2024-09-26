import { useRouter } from 'next/router';

const PostPreview = ({ title, date, subtitle, slug, topic, tags, series, onClick }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    onClick();
    router.push(`/blog?slug=${slug}`, undefined, { shallow: true });
  };

  return (
    <div 
      onClick={handleClick}
      className="border border-solid border-dark dark:border-light p-4 rounded-md shadow-sm bg-light dark:bg-dark cursor-pointer hover:shadow-md transition-shadow duration-300"
    >
      <h2 className="text-2xl font-bold mb-2 dark:text-light">
        {title}
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-2">{date}</p>
      {series && <p className="text-sm text-purple-500 dark:text-purple-400 mb-2">Series: {series}</p>}
      <p className="mb-2 dark:text-light">{subtitle}</p>
      <p className="text-sm text-blue-500 dark:text-blue-400 mb-2">Topic: {topic}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default PostPreview;
