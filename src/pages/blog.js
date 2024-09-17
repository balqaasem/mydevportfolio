import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import TransitionEffect from '@/components/TransitionEffect';
import getPostMetadata from '@/components/hooks/getPostMetadata';
import PostPreview from '@/components/PostPreview';

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {postMetadata.map((post) => (
              <PostPreview key={post.slug} {...post} />
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Blog;
