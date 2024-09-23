import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import TransitionEffect from '@/components/TransitionEffect';
import getPostMetadata from '@/components/hooks/getPostMetadata';
import PostPreview from '@/components/PostPreview';
import ExpandedPost from '@/components/ExpandedPost'; // Make sure this component is created

// Fetch post metadata at build time
export const getStaticProps = async () => {
  const postMetadata = getPostMetadata(); // Fetch posts on the server-side

  return {
    props: {
      postMetadata, // Pass the posts as props to the page
    },
  };
};

const Blog = ({ postMetadata }) => {
  const [expandedPost, setExpandedPost] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const slug = router.query.slug;
    if (slug) {
      const post = postMetadata.find(p => p.slug === slug);
      if (post) {
        setExpandedPost(post);
      }
    }
  }, [router.query.slug, postMetadata]);

  const handlePostClick = (post) => {
    if (expandedPost === post) {
      setExpandedPost(null);
      router.push('/blog', undefined, { shallow: true });
    } else {
      setExpandedPost(post);
      router.push(`/blog?slug=${post.slug}`, undefined, { shallow: true });
    }
  };

  return (
    <>
      <Head>
        <title>Khalifa MBA | Blog Page</title>
        <meta
          name="description"
          content="Blog of Muhammad-Jibril B.A. Al-Fellati Al-Shareef (Khalifa MBA)"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Listen To The Words of Wisdom!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm!text-6xl xs:!text-4xl"
          />

          <div className={`grid ${expandedPost ? 'grid-cols-[2fr_1fr]' : 'grid-cols-1 md:grid-cols-2'} gap-4`}>
            {expandedPost && (
              <div className="col-span-1 row-span-2">
                <ExpandedPost post={expandedPost} onClose={() => setExpandedPost(null)} />
              </div>
            )}
            <div className={`grid ${expandedPost ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-4`}>
              {postMetadata
                .filter((post) => post !== expandedPost)
                .map((post) => (
                  <PostPreview
                    key={post.slug}
                    {...post}
                    onClick={() => handlePostClick(post)}
                  />
                ))}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Blog;
