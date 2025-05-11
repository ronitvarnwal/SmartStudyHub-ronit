import React from 'react';
import { useParams } from "react-router-dom";
import { blogs } from '../Data/BlogData.jsx';
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { Helmet } from 'react-helmet-async'; // Make sure this import exists
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

  const { title, date, topic, content, description, keywords, image } = blog;

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>{title} | SmartStudy Blog</title>
        <meta name="description" content={description.slice(0, 160)} />
        <meta name="keywords" content={keywords} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description.slice(0, 160)} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://smart-study-hub-ronit-seb6.vercel.app/blog/${blogId}`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description.slice(0, 160)} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "description": description.slice(0, 160),
            "author": {
              "@type": "Person",
              "name": "Ronit"
            },
            "datePublished": date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://smart-study-hub-ronit-seb6.vercel.app/blog/${blogId}`
            }
          })}
        </script>
      </Helmet>

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
    </>
  );
};

export default BlogPost;