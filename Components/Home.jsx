import  React from 'react';
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import './Home.css'
import RightArrow from '../right-arrow.svg';
import BookIcon from '../book-icon.svg'
import ClockIcon from '../clock.svg';
import NotesIcon from '../notes.svg';
import IdeaIcon from '../idea.svg';
import FeaturedBlog from './FeaturedBlog.jsx';


const Home = () => {
  return (
    <div>
      <Navbar />
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
      <div className="latest-articles">
        <h1 className="latest-articles-heading">Latest Articles</h1>
        <div className="blogpage-link-container">
        <p className="blogpage-link">View all articles <img className="right-arrow" src={RightArrow} alt="arrow" /></p>
        
        </div>
        <FeaturedBlog />
      </div>
      <div className="topics-container">
        <div>
          <h1 className="topics-heading">Explore Topics</h1>
        </div>
        <div className="topic-container">
        <div className="topic">
          <img className="book-icon" src={BookIcon} alt="BookIcon" />
          <h1>Study Techniques</h1>
          <div></div>
          <p>Effective methods to absorb and retain information.</p>
        </div>
        <div className="topic">
          <img className="book-icon" src={ClockIcon} alt="BookIcon" />
          <h1>Time Management</h1>
          <div></div>
          <p>Strategies to optimize your time and maximize productivity.</p>
        </div>
        <div className="topic">
          <img className="book-icon" src={NotesIcon} alt="BookIcon" />
          <h1>Note-Taking</h1>
          <div></div>
          <p>Learn different methods to create effective study notes.</p>
        </div>
        <div className="topic">
          <img className="book-icon" src={IdeaIcon} alt="BookIcon" />
          <h1>Digital Tools</h1>
          <div></div>
          <p>Apps and software to enhance your learning experience.</p>
        </div>
        </div>
        <div className="last-topic-space"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;