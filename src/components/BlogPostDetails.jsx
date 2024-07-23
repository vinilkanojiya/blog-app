import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPostDetails = ({ posts }) => {
  const { title } = useParams();
  const post = posts.find(p => p.title === title);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content || "Content not available"}</p>
      {post.urlToImage && <img src={post.urlToImage} alt={post.title} />}
      <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
      <Link to="/">Back to Posts</Link>
    </div>
  );
};

export default BlogPostDetails;
