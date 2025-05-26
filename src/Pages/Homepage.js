import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Homepage.css';
import logo from './logo.jpg'; // Import the logo

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <div id="common_head">
        <div id="logo">
          <img src={logo} alt="Logo" id="Logo" /> {/* Use imported logo */}
        </div>
        <div>
          <h1 id="Title">CSSVisualizer</h1>
        </div>
        <div id="github_logo">
          <i className="bi bi-github"></i>
        </div>
        <i className="bi bi-brightness-high-fill"></i>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="text-box">
          Welcome to CSSVisualizer! Explore the fascinating world of CSS through interactive visualizations. Below are some examples for you to dive into!
        </div>
        <div className="visualizations">
          <Link to="/box-model" className="visualization">
            Visualization 1
          </Link>
          <Link to="/visualization-2" className="visualization">
            Visualization 2
          </Link>
          <Link to="/visualization-3" className="visualization">
            Visualization 3
          </Link>
          <Link to="/visualization-4" className="visualization">
            Visualization 4
          </Link>
          <Link to="/visualization-5" className="visualization">
            Visualization 5
          </Link>
          <Link to="/visualization-6" className="visualization">
            Visualization 6
          </Link>
          <Link to="/visualization-7" className="visualization">
            Visualization 7
          </Link>
          <Link to="/visualization-8" className="visualization">
            Visualization 8
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;