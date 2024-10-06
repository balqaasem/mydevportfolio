import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import TransitionEffect from '@/components/TransitionEffect';
import getPostMetadata from '@/components/hooks/getPostMetadata';
import PostPreview from '@/components/PostPreview';
import ExpandedPost from '@/components/ExpandedPost';
import SubscriptionForm from '@/components/SubscriptionForm';

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
      tags: data.tags || [],
      series: data.series || null
    };
  });

  return {
    props: {
      posts: postsWithContent,
    },
  };
};

const Blog = ({ posts }) => {
  const router = useRouter();
  const [expandedPost, setExpandedPost] = useState(null);
  const [filterTopic, setFilterTopic] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [filterSeries, setFilterSeries] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [customPostsPerPage, setCustomPostsPerPage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

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

  // Get unique topics, tags, and series
  const topics = [...new Set(posts.map(post => post.topic))];
  const tags = [...new Set(posts.flatMap(post => post.tags))];
  const series = [...new Set(posts.map(post => post.series).filter(Boolean))];

  // Filter and sort posts
  const sortedAndFilteredPosts = posts
    .filter(post => !filterTopic || post.topic === filterTopic)
    .filter(post => !filterTag || post.tags.includes(filterTag))
    .filter(post => !filterSeries || post.series === filterSeries)
    .sort((a, b) => {
      if (sortOrder === 'newest') {
        return new Date(b.date) - new Date(a.date);
      } else {
        return new Date(a.date) - new Date(b.date);
      }
    });

  const pageCount = Math.ceil(sortedAndFilteredPosts.length / postsPerPage);
  const paginatedPosts = sortedAndFilteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handleCustomPostsPerPageChange = (e) => {
    setCustomPostsPerPage(e.target.value);
  };

  const handleCustomPostsPerPageSubmit = (e) => {
    e.preventDefault();
    const value = Number(customPostsPerPage);
    if (value > 0) {
      setPostsPerPage(value);
      setCurrentPage(1);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pageCount) {
      setCurrentPage(newPage);
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
      <main className="w-full mb-12 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Read My Articles!"
            className="mb-10 lg:!text-6xl sm:mb-8 sm!text-6xl xs:!text-3xl"
          />

          {/* Filtering and sorting controls */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4 filter-sort-controls ">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="
                p-2 border rounded bg-light dark:bg-dark dark:text-light border-gray-300 dark:border-gray-600 hover:border-primary
                hover:dark:border-primaryDark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark
              "
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
            <select
              value={filterTopic}
              onChange={(e) => setFilterTopic(e.target.value)}
              className="
                p-2 border rounded bg-light dark:bg-dark dark:text-light border-gray-300 dark:border-gray-600 hover:border-primary
                hover:dark:border-primaryDark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark
              "
            >
              <option value="">All Topics</option>
              {topics.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
            <select
              value={filterTag}
              onChange={(e) => setFilterTag(e.target.value)}
              className="
                p-2 border rounded bg-light dark:bg-dark dark:text-light border-gray-300 dark:border-gray-600 hover:border-primary
                hover:dark:border-primaryDark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark
              "
            >
              <option value="">All Tags</option>
              {tags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
            {/* Add this new select for series */}
            <select
              value={filterSeries}
              onChange={(e) => setFilterSeries(e.target.value)}
              className="
                p-2 border rounded bg-light dark:bg-dark dark:text-light border-gray-300 dark:border-gray-600 hover:border-primary
                hover:dark:border-primaryDark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark
              "
            >
              <option value="">All Series</option>
              {series.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            
            {/* Newsletter Subscription Form */}
            <SubscriptionForm />
          </div>

          <div className={`grid grid-cols-1 ${expandedPost ? 'grid-cols-1' : 'grid-cols-1'} gap-4`}>
            {expandedPost && (
              <div className="col-span-1 row-span-2">
                <ExpandedPost post={expandedPost} onClose={() => setExpandedPost(null)} />
              </div>
            )}
            <div className={`grid ${expandedPost ? 'grid-cols-1' : 'grid-cols-1'} gap-4`}>
              {paginatedPosts
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

          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="
                px-4 py-2 bg-primary dark:bg-primaryDark text-primaryDark dark:text-primary rounded disabled:bg-gray-400 dark:disabled:bg-gray-500 disabled:text-light dark:disabled:text-dark
                hover:bg-primaryDark hover:dark:bg-primary hover:text-primary hover:dark:text-primaryDark hover:disabled:bg-gray-400 hover:dark:disabled:bg-gray-500 hover:disabled:text-light hover:dark:disabled:text-dark
              "
            >
              Previous
            </button>
            <span className="dark:text-light">Page {currentPage} of {pageCount}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pageCount}
              className="
                px-4 py-2 bg-primary dark:bg-primaryDark text-primaryDark dark:text-primary rounded disabled:bg-gray-400 dark:disabled:bg-gray-500 disabled:text-light dark:disabled:text-dark
                hover:bg-primaryDark hover:dark:bg-primary hover:text-primary hover:dark:text-primaryDark hover:disabled:bg-gray-400 hover:dark:disabled:bg-gray-500 hover:disabled:text-light hover:dark:disabled:text-dark
              "
            >
              Next
            </button>
          </div>
          
          <div className="mb-8 flex justify-center">
            <form onSubmit={handleCustomPostsPerPageSubmit} className="flex items-center">
              <input
                type="number"
                value={customPostsPerPage}
                onChange={handleCustomPostsPerPageChange}
                placeholder="Per Page"
                className="p-2 border rounded bg-light dark:bg-dark dark:text-light border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark w-32"
                min="1"
              />
              <button
                type="submit"
                className="
                  ml-2 p-2 bg-primary dark:bg-primaryDark text-primaryDark dark:text-primary rounded
                  hover:bg-primaryDark hover:dark:bg-primary hover:text-primary hover:dark:text-primaryDark 
                "
              >
                Set
              </button>
            </form>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Blog;
