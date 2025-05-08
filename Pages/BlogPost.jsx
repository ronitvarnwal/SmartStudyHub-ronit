import React from 'react';
import { useParams } from "react-router-dom";
import { blogs } from '../Components/BlogData.jsx';
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

import './BlogPost.css';

const renderContentBlock = (block, index) => {
  const { type, text } = block;

  const typeToElement = {
    h1: <h2 key={index} className="blog-heading">{text}</h2>,
    p: <p key={index} className="blog-paragraph">{text}</p>,
  };

  return typeToElement[type] || null;
};

const BlogPost = () => {
  const { id } = useParams();
  const blogId = Number(id);
  const blog = blogs.find(blogItem => blogItem.id === blogId);

  if (!blog) {
    return <h1 className="blog-error">404 - Blog Not Found</h1>;
  }

  const { title, date, topic, content, description } = blog;

  return (
    <div>
      <Navbar />
    <div className="blog-container">
      <h1 className="blog-title">{title}</h1>
      <p className="blog-meta">{date}</p>
      <p className="blog-description">{description}</p>
      
      <div className="blog-content">
        {content?.map(renderContentBlock)}
      </div>
    </div>
      <Footer />
 
   </div>
  );
};

export default BlogPost;