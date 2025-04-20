import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className="intro">
        <h1 className="gradient-text">Unlock Your Full Learning Potential</h1>
        <p className="intro-desp">
          Discover proven strategies to enhance your learning experience, boost productivity, and achieve academic excellence with our expert tips and guidance.
        </p>
        <div className="button-group">
          <button className="intro-button">Read Latest Articles</button>
          <button className="intro-button">Explore Topics</button>
        </div>
      </div>
    </div>
  );
};

export default Home;