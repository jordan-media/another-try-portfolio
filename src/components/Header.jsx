// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <Link to="/" className="header-logo">
          Jordan Media Creations
        </Link>
        <nav className="header-nav">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li>:)</li>
            <li><Link to="/projects">Work</Link></li>
            <li>:)</li>
            <li><Link to="/blog">Blog</Link></li>
            
          </ul>
        </nav>
        <nav className="header-nav">
          <ul>
            <li><Link to="/contact">Let's Connect</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
