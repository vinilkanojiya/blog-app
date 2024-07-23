import React, { useState, useEffect } from 'react';
import BlogPostItem from './BlogPostItem';

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 20;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-06-22&sortBy=publishedAt&apiKey=4934e6561c69483487e8e57f0a0c17a0`);
        const data = await response.json();
        setPosts(data.articles || []);  // Ensure articles is an array
      } catch (error) {
        console.error("Error fetching the blog posts:", error);
        setPosts([]); // Handle error by setting posts to an empty array
      }
    };

    fetchPosts();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>

      <h1 className='m-5'>Blog Posts</h1>
      <ul>
        {currentPosts.map((post, index) => (
          <div class="row">
          <BlogPostItem key={index} post={post} />
          </div>
        ))}
      </ul>
      <div>
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
          <button className='btn btn-outline-secondary m-5' key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogPostList;
