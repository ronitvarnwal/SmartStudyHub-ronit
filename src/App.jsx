import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home.jsx';
import Blog from '../Components/Blog.jsx';
import Search from '../Components/Search.jsx';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/search" element={<Search />}  />
    </Routes>
  );
};

export default App;