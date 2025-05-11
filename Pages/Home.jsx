import  React, { useRef } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
import './Home.css'
import RightArrow from '../Images/right-arrow.svg';
import BookIcon from '../Images/book-icon.svg'
import ClockIcon from '../Images/clock.svg';
import NotesIcon from '../Images/notes.svg';
import IdeaIcon from '../Images/idea.svg';
import FeaturedBlog from '../Components/FeaturedBlog.jsx';


const Home = () => {
  const topicsRef = useRef(null);
  const scrollToTopics = () => {
    topicsRef.current?.scrollIntoView({ behavior: 'smooth'});
  }
  const topics = [
    { topicId: "study", 
      label: "Study Technique s", 
      description: "Effective methods to absorb and retain information.",
      icon: BookIcon
    },
    { topicId: "time", 
      label: "Time Management", 
      description: "Strategies to optimize your time and maximize productivity.",
      icon: ClockIcon
    },
    { topicId: "note", 
      label: "Note-Taking", 
      description: "Learn different methods to create effective study notes.",
      icon: NotesIcon
    },
    { topicId: "tools", 
      label: "Digital Tools", 
      description: "Apps and software to enhance your learning experience.",
      icon: IdeaIcon
    }
    
  ]
  const navigate= useNavigate();
  const handleTopicClick = (topicId) => {
    navigate(`/blog?topic=${topicId}`);
  }
  return (
    <>
      <Helmet>
        <title>SmartStudyHub | Unlock Your Full Learning Potential</title>
        <meta name="description" content="Discover proven strategies to enhance your learning experience, boost productivity, and achieve academic excellence with our expert tips and guidance." />
        <meta name="keywords" content="how to study less and get more grades?, how to become a topper at study, study techniques, time management, note-taking, digital tools, learning strategies, academic success, productivity, study tips, study skills, learning tips, study methods" />
      </Helmet>
      <Navbar />
      <div className="intro">
        <h1 className="gradient-text">Unlock Your Full Learning Potential</h1>
        <p className="intro-desp">
          Discover proven strategies to enhance your learning experience, boost productivity, and achieve academic excellence with our expert tips and guidance.
        </p>
        <div className="button-group">
          <Link to="/blog">
          <button className="intro-button">Read Latest Articles</button></Link>
          <button onClick={scrollToTopics} className="intro-button explore-topic-button">Explore Topics</button>
        </div>
      </div>
      <div className="latest-articles">
        <h1 className="latest-articles-heading">Latest Articles</h1>
        <div className="blogpage-link-container">
        <Link to="/blog"><p className="blogpage-link">View all articles <img className="right-arrow" src={RightArrow} alt="arrow" /></p></Link>
        
        </div>
        <FeaturedBlog />
        <div className="latest-articles-space"></div>
      </div>
      <div className="topics-container">
        <div>
          <h1 ref={topicsRef} className="topics-heading">Explore Topics</h1>
        </div>
        <div className="topic-container">
          {topics.map((topic) =>
        <div key={topic.topicId} onClick ={() => handleTopicClick(topic.topicId)} className="topic">
          <img className="book-icon" src={topic.icon} alt="BookIcon" />
          <h1>{topic.label}</h1>
          <div></div>
          <p>{topic.description}</p>
        </div>
            )}
        </div>
        <div className="last-topic-space"></div>
      </div>
      <Footer />
    </>
  );
};

export default Home;