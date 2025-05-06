import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from './BlogData.jsx';
import './FeaturedBlog.css';
import './Search.css';

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce logic: delay setting the debouncedSearch value
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchValue);
    }, 300); // 300ms delay

    return () => clearTimeout(timeout); // Clear previous timer on each keystroke
  }, [searchValue]);
  useEffect(() => {
    // This will only run AFTER 300ms of no typing
    console.log('Searching for:', debouncedSearch);
  }, [debouncedSearch]);

  const filterTitle = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
    ;

  return (
    <div>
      <div className="group">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
          type="search"
          className="input"
        />
        <Link to="/" style={{textDecoration: 'none', color: '#525252'}}>
          <div className="cancel-btn">Cancel</div>
        </Link>
      </div>
      {/* {!searchValue && (
        <div className="no-results">
        <p>No results found</p>
      </div>
      )} */}
      {(filterTitle.length === 0 || !searchValue) && (
      <div className="no-results">
        <p>No results found</p>
      </div>
)}

      {debouncedSearch && filterTitle.length > 0 && filterTitle.map((blog) => (
        <div key={blog.id || blog.title} className="featured-blog">
          <h1 className="featured-blog-title">
  {(() => {
    const title = blog.title;
    const search = debouncedSearch.trim();

    if (!search) return title;

    const regex = new RegExp(`(${search})`, 'gi');
    const parts = title.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} style={{ color: '#f15a25' }}>{part}</span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  })()}
</h1>
          <p className="featured-blog-date">{blog.date}</p>
          <p className="featured-blog-description">{blog.description}</p>
          <p className="read-more-button">Read more</p>
        </div>
      ))}
    </div>
  );
};

export default Search;