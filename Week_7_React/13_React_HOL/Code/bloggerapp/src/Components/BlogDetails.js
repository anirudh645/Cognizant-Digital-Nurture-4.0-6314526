import React, { useState } from 'react';

const BlogDetails = () => {
  const [isPublished, setIsPublished] = useState(true);
  const [userType, setUserType] = useState('guest');

  const blog = {
    title: "React Tutorial",
    author: "John Smith",
    likes: 42
  };

  return (
    <div className="blog-details">
      <h2>Blog Details</h2>
      <div className="blog-card">
        <h3>{blog.title}</h3>
        <p>Author: {blog.author}</p>
        <p>Likes: {blog.likes}</p>
        
        {/* Conditional rendering using ternary operator */}
        <p>Status: {isPublished ? "Published" : "Draft"}</p>

        {/* Conditional rendering based on user type */}
        {userType === 'admin' ? (
          <button>Edit Blog</button>
        ) : (
          <button>Like Blog</button>
        )}

        {/* Conditional rendering using logical AND */}
        {blog.likes > 40 && <p>🔥 Popular Blog!</p>}

        <div>
          <button onClick={() => setIsPublished(!isPublished)}>
            Toggle Status
          </button>
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="guest">Guest</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
