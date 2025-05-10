import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import { blogs } from '../Components/BlogData.jsx';
import '../Components/FeaturedBlog.css'
import './Blog.css';

const Blog = () => {
  const [activeTopic, setActiveTopic] = useState("all");

  const topics = [
    { id: "all", label: "All" },
    { id: "study", label: "Study Techniques" },
    { id: "time", label: "Time Management" },
    { id: "note", label: "Note-Taking" },
    { id: "tools", label: "Digital Tools" }
  ]
  return (
    <div>
      <Navbar />
      <main>
      <div className="topic-buttons">
        {topics.map((topic) => (
      <div
        key={topic.id}
        onClick={() =>setActiveTopic(topic.id)}
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
          .filter((blog) => activeTopic === "all" || blog.topic === activeTopic)
          .map((blog) => (
            <div className="featured-blog">
                    <h1 className="featured-blog-title">{blog.title}</h1>
        <p className="featured-blog-date">{blog.date}</p>
        <p className="featured-blog-description">{blog.description}</p>
        <Link style={{cursor: 'none'}} to={`/blog/${blog.id}`}><p className="read-more-button">Read more</p></Link>
            </div>
          ))
        }
      </main>
      <Footer />
  </div>
  );
};

export default Blog;