import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostItem = ({ post }) => {
  return (
    
    
    <div class="col-sm-6 mb-3 mb-sm-3">
      <div className="card">
         <div class="card-body">
          
            <h5 class="card-title">{post.title}</h5>
            <p class="card-text">{post.description}</p>
            <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            <Link to={`/post/${post.title}`}>
                  View details
            </Link>
          
        </div>
      </div>
    </div>

  );
};

export default BlogPostItem;
