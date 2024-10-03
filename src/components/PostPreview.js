import { useRouter } from 'next/router';

const PostPreview = ({ title, date, subtitle, slug, topic, tags, series, onClick }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    onClick();
    router.push(`/blog?slug=${slug}`, undefined, { shallow: true });
  };

  return (
    <article 
      onClick={handleClick}
      className="
        border border-solid border-gray-300 dark:border-gray-600 p-4 rounded-md shadow-sm
        bg-light dark:bg-dark cursor-pointer hover:shadow-md transition-shadow duration-300
        hover:border-primaryGreenDark hover:dark:border-purple-400
      "
    >
      <h2 className="text-2xl font-bold mb-2 text-dark dark:text-light">
        {title}
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-2">{date}</p>
      <p className="mb-2 text-dark dark:text-light">{subtitle}</p>
      {series && <p className="text-sm font-bold text-blue-500 dark:text-blue-300 mb-2">Series: {series}</p>}
      {topic && <p className="text-sm font-bold text-primaryGreenDark dark:text-purple-300 mb-2">Topic: {topic}</p>}
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </article>
  );
};

export default PostPreview;
