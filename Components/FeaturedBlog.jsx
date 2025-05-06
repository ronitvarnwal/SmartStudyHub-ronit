import React from 'react';
import  './FeaturedBlog.css'
import { blogs } from './BlogData.jsx'

const App = () => {
  const featuredBlog = blogs.find(b => b.id === 1); // change ID as needed
  return (
    <div>
      <div className="featured-blog">
        <h1 className="featured-blog-title">{featuredBlog.title}</h1>
        <p className="featured-blog-date">{featuredBlog.date}</p>
        <p className="featured-blog-description">{featuredBlog.description}</p>
        <p className="read-more-button">Read more</p>
      </div>
    </div>
  );
};

export default App;