import React, { useState } from 'react';

import Navbar from './Navbar.jsx';
import { blogs } from './BlogData.jsx';
import './FeaturedBlog.css'
import './Blog.css';

const Blog = () => {
  const [activeTopic, setActiveTopic] = useState(null);

  const topics = [
    { id: "study", label: "Study Techniques" },
    { id: "time", label: "Time Management" },
    { id: "note", label: "Note-Taking" },
    { id: "tools", label: "Digital Tools" }
  ]
  return (
    <div>
      <Navbar />
      <div className="topic-buttons">
        {topics.map((topic) => (
      <div
        key={topic.id}
        onClick={() =>setActiveTopic(activeTopic === topic.id ? null : topic.id)}
        style={{
          backgroundColor: activeTopic === topic.id ? '#f15a25' : '',
          color: activeTopic === topic.id ? '#ffffff' : ''
        }}
        >
        {topic.label}
      </div>
        ))}
      </div>
        {blogs
          .filter((blog) => !activeTopic || blog.topic === activeTopic)
          .map((blog) => (
            <div className="featured-blog">
                    <h1 className="featured-blog-title">{blog.title}</h1>
        <p className="featured-blog-date">{blog.date}</p>
        <p className="featured-blog-description">{blog.description}</p>
        <p className="read-more-button">Read more</p>
            </div>
          ))
        }
  </div>
  );
};

export default Blog;