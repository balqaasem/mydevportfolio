const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
import Image from 'next/image';
import { motion } from 'framer-motion';
const FramerImage = motion(Image);

const getPostMetadata = () => {
  const postsDirectory = path.join(process.cwd(), "posts"); // Use absolute path
  const files = fs.readdirSync(postsDirectory); // Read all files in 'posts' directory
  const markdownPosts = files.filter((file) => file.endsWith(".md")); // Filter markdown files

  // Extract metadata from each markdown file
  const posts = markdownPosts.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      topic: matterResult.data.topic || "Uncategorized",
      tags: matterResult.data.tags || [],
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

module.exports = getPostMetadata;
