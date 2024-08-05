import Link from "next/link";

const PostPreview = (props) => {
  return (
    <div
      className="border border-solid p-4 rounded-md shadow-sm
    bg-light dark:bg-dark"
    >
      <p className="text-sm text-dark/75 dark:text-light/75">{props.date}</p>

      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-primaryGreenDark dark:text-primaryDark hover:underline mb-4">{props.title}</h2>
      </Link>
      <p className="text-dark/75 dark:text-light/75">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
