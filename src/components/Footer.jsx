
import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  const emailAddress = "coastalifee@icloud.com";

  return (
    <footer className="footer-container">
      <div className="footer-content">

        <p className="footer-joke">
          //just <code>console.log('reachOut(' + 'me')</code>;
          <span className="footer-break"></span>
          &nbsp;→&nbsp;
          <a href={`mailto:${emailAddress}`} className="footer-link">{emailAddress}</a>
        </p>

        <p className="footer-location-combined">
          Vancouver
          <span className="stacked-coords-container">
            <span className="coord-number">↑ 49.3627</span>
            <span className="coord-number">↓ -123.2721</span>
          </span>
          <span className="footer-bc">British Columbia 🏔️&nbsp;</span>
        </p>

        <p className="footer-mission-statement">
          <span className="stacked-coords-container">
            <span className="coord-number">Building</span>
            <span className="coord-number">Digital</span>
          </span>
          experiences one pixel at a time.
        </p>

        <div className="footer-icons">
          <p className="footer-copyright">
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            &copy; {currentYear} Jordan Media Creations. All rights reserved.
          </p>
          <span className="footer-break"></span>
          <div className='footer-icon-container'>
            <a href="#" className="footer-icon-space" aria-label="Social 1"></a>
            <a href="#" className="footer-icon-space" aria-label="Social 2"></a>
            <a href="#" className="footer-icon-space" aria-label="Social 3"></a>
            <a href="#" className="footer-icon-space" aria-label="Social 4"></a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
