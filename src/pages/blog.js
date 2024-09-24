import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import TransitionEffect from '@/components/TransitionEffect';
import getPostMetadata from '@/components/hooks/getPostMetadata';
import PostPreview from '@/components/PostPreview';
import ExpandedPost from '@/components/ExpandedPost';

// Fetch post metadata at build time
export const getStaticProps = async () => {
  const postMetadata = getPostMetadata();
  const postsDirectory = path.join(process.cwd(), 'posts');

  const postsWithContent = postMetadata.map(post => {
    const fullPath = path.join(postsDirectory, `${post.slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      ...post,
      content: content,
      tags: data.tags || []
    };
  });

  return {
    props: {
      posts: postsWithContent,
    },
  };
};

const Blog = ({ posts }) => {
  const [expandedPost, setExpandedPost] = useState(null);
  const [filterTopic, setFilterTopic] = useState(''); // State for topic filter
  const [filterTag, setFilterTag] = useState(''); // State for tag filter
  const [sortOrder, setSortOrder] = useState('newest'); // Explicitly set 'newest' as the default sort order

  const router = useRouter();

  useEffect(() => {
    const slug = router.query.slug;
    if (slug) {
      const post = posts.find(p => p.slug === slug);
      if (post) {
        setExpandedPost(post);
      } else {
        setExpandedPost(null);
      }
    } else {
      setExpandedPost(null);
    }
  }, [router.query.slug, posts]);

  const handlePostClick = (post) => {
    if (expandedPost && expandedPost.slug === post.slug) {
      setExpandedPost(null);
      router.push('/blog', undefined, { shallow: true });
    } else {
      setExpandedPost(post);
      router.push(`/blog?slug=${post.slug}`, undefined, { shallow: true });
    }
  };

  // Get unique topics and tags
  const topics = [...new Set(posts.map(post => post.topic))];
  const tags = [...new Set(posts.flatMap(post => post.tags))];

  // Filter and sort posts
  const sortedAndFilteredPosts = posts
    .filter(post => !filterTopic || post.topic === filterTopic)
    .filter(post => !filterTag || post.tags.includes(filterTag))
    .sort((a, b) => {
      if (sortOrder === 'newest') {
        return new Date(b.date) - new Date(a.date);
      } else {
        return new Date(a.date) - new Date(b.date);
      }
    });

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

          {/* Filtering and sorting controls */}
      <div className="mb-8 flex flex-wrap gap-4">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border rounded bg-white dark:bg-dark dark:text-light border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        >
          <option value="newest">Newest to Oldest</option>
          <option value="oldest">Oldest to Newest</option>
        </select>
            <select
              value={filterTopic}
              onChange={(e) => setFilterTopic(e.target.value)}
              className="p-2 border rounded bg-white dark:bg-dark dark:text-light border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            >
              <option value="">All Topics</option>
              {topics.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
            <select
              value={filterTag}
              onChange={(e) => setFilterTag(e.target.value)}
              className="p-2 border rounded bg-white dark:bg-dark dark:text-light border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            >
              <option value="">All Tags</option>
              {tags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>

          <div className={`grid ${expandedPost ? 'grid-cols-[2fr_1fr]' : 'grid-cols-1 md:grid-cols-2'} gap-4`}>
            {expandedPost && (
              <div className="col-span-1 row-span-2">
                <ExpandedPost post={expandedPost} onClose={() => setExpandedPost(null)} />
              </div>
            )}
            <div className={`grid ${expandedPost ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-4`}>
              {sortedAndFilteredPosts
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
