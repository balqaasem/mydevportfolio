import Link from "next/link";

const PostPreview = ({ title, date, subtitle, slug, topic, tags, series, onClick }) => {
  return (
    <div className="border border-solid border-dark dark:border-light p-4 rounded-md shadow-sm bg-light dark:bg-dark">
      <Link href={`/blog?slug=${slug}`} passHref>
        <h2 
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }} 
          className="text-2xl font-bold mb-2 cursor-pointer hover:underline dark:text-light"
        >
          {title}
        </h2>
      </Link>
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
