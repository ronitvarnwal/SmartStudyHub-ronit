import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home.jsx';
import Blog from '../Pages/Blog.jsx';
import Search from '../Pages/Search.jsx';
import BlogPost from '../Pages/BlogPost.jsx';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/search" element={<Search />}  />
      <Route path="/blog/:id" element={<BlogPost />} />
    </Routes>
  );
};

export default App;