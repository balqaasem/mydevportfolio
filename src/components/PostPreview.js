import Link from "next/link";

const PostPreview = ({ title, date, subtitle, slug, onClick }) => {
  return (
    <div
      className="border border-solid p-4 rounded-md shadow-sm
    bg-light dark:bg-dark"
    >
      <p className="text-sm text-dark/75 dark:text-light/75">{date}</p>

      <Link href={`/blog?slug=${slug}`} passHref>
        <h2 onClick={(e) => {
          e.preventDefault();
          onClick();
        }} className="text-2xl font-bold mb-2 cursor-pointer hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-dark/75 dark:text-light/75">{subtitle}</p>
    </div>
  );
};

export default PostPreview;
