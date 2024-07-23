import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-06-22&sortBy=publishedAt&apiKey=4934e6561c69483487e8e57f0a0c17a0`);
        const data = await response.json();
        setPosts(data.articles);
      } catch (error) {
        console.error("Error fetching the blog posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
    <nav className="navbar bg-primary mb-4" data-bs-theme="dark">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Blog App</span>
    </div>
  </nav>
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<BlogPostList posts={posts} />} />
          <Route path="/post/:title" element={<BlogPostDetails posts={posts} />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default App;
