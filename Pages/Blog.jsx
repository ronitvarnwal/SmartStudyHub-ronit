import React, { useState } from 'react';
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import { blogs } from '../Data/BlogData.jsx';
import '../Components/FeaturedBlog.css'
import './Blog.css';

const Blog = () => {
  const [searchPrams] = useSearchParams();
  const initialTopic = searchPrams.get("topic") || "all";
  const [activeTopic, setActiveTopic] = useState(initialTopic);

  const topics = [
    { id: "all", label: "All" },
    { id: "study", label: "Study Techniques" },
    { id: "time", label: "Time Management" },
    { id: "note", label: "Note-Taking" },
    { id: "tools", label: "Digital Tools" }
  ];
  return (
    <>
      <Helmet>
        <title>SmartStudyHub blog | Explore Bolgs</title>
        <meta name="description" content="Discover proven strategies to enhance your learning experience, boost productivity, and achieve academic excellence with our expert tips and guidance." />
        <meta name="keywords" content="smart work boogs, how to study less and get more grades?, how to become a topper at study, study techniques, time management, note-taking, digital tools, learning strategies, academic success, productivity, study tips, study skills, learning tips, study methods" />
      </Helmet>
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
            <div key={blog.id} className="featured-blog">
                    <h1 className="featured-blog-title">{blog.title}</h1>
        <p className="featured-blog-date">{blog.date}</p>
        <p className="featured-blog-description">{blog.description}</p>
        <Link style={{cursor: 'none'}} to={`/blog/${blog.id}`}><p className="read-more-button">Read more</p></Link>
            </div>
          ))
        }
      </main>
      <Footer />
  </>
  );
};

export default Blog;