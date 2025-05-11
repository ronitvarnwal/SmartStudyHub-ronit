import React from 'react';
import { Link } from "react-router-dom"

import  './FeaturedBlog.css'
import { blogs } from '../Data/BlogData.jsx'

const App = () => {
  const blog = blogs.find(b => b.id === 1); // change ID as needed
  return (
    <>
      <div className="featured-blog">
        <h1 className="featured-blog-title">{blog.title}</h1>
        <p className="featured-blog-date">{blog.date}</p>
        <p className="featured-blog-description">{blog.description}</p>
        <Link style={{cursor: 'none'}} to={`/blog/${blog.id}`}><p className="read-more-button">Read more</p></Link>
      </div>
    </>
  );
};

export default App;