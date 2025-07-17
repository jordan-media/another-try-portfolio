// src/components/NavigationGrid.jsx
import React from 'react';
import './NavigationGrid.css';

function NavigationGrid() {
  return (
    <section className="navigation-grid-section">
      <div className="navigation-grid-container">

        {/* Column 1: Menu */}
        <div className="grid-column grid-column-menu">
          <h3 className="column-title">Menu</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/work">Work</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Let's connect</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/japanese">Japanese</a></li>
          </ul>
        </div>

        {/* Column 2: Info */}
        <div className="grid-column">
          <h3 className="column-title">Newsletter ↓</h3>
          <ul>
            <li><a href="#">Sign Up</a></li>
          </ul>
        </div>

        {/* Column 3: Socials */}
        <div className="grid-column">
          <h3 className="column-title">Socials</h3>
          <ul>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        {/* Column 4: External */}
        <div className="grid-column">
          <h3 className="column-title">External</h3>
          <ul>
            <li><a href="#">Favorite Look Off Points</a></li>
            <li><a href="#">Placeholder Link 1</a></li>
            <li><a href="#">Placeholder Link 2</a></li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default NavigationGrid;
