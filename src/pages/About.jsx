// src/pages/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-page">
      <div className="about-intro">
        <h1>About Me</h1>
        <p className="quote">
          I’ve made enough mistakes to learn from them — and enough progress to keep growing.
        </p>
        <p className="statement">
          If any of this speaks to you, then maybe the connection’s already started. I’m focused on the work, and open to wherever it leads.
        </p>
        <p className="personal">
          The issue with talking about yourself is, it’s all bias.<br />
          But I will say something about me: my family is everything. Being a single dad to two beautiful kids for almost 10 years has not only shaped my character, but defined my work ethic, built endurance, and clarified the meaning of responsibility.
        </p>
      </div>

      <div className="about-section">
        <h2>Technical Skills</h2>
        <ul className="skills-grid">
          <li>React</li>
          <li>Vite</li>
          <li>After Effects</li>
          <li>Premiere</li>
          <li>Audition</li>
          <li>Illustrator</li>
          <li>Photoshop</li>
          <li>Figma</li>
          <li>Blender</li>
          <li>AutoCAD</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Trajectory</h2>
        <p>
          BCIT New Media & Web Development graduate – Spring 2026<br />
          Focused on user experience, motion graphics, development, and storytelling – with sprinkles of animation and audio/video editing.
        </p>
      </div>
    </section>
  );
};

export default About;
