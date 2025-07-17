// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ValueStatement from '../sections/ValueStatement';
import Extras from '../sections/Vault';

function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        const homePageProjects = data.filter(project =>
          ["amazon-ads-campaign", "adobe-automation", "ar-experiences", "wireframing-prototyping", "motion-graphics", "myblog"]
            .includes(project.id)
        );
        setProjects(homePageProjects);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-container">
      <section className="video-placeholder">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>Showcasing my creative and technical journey.</p>
        </div>
      </section>

      <section className="content-section">
        {loading ? (
          <div className="loading-message">Loading projects...</div>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="project-list-item">
              <Link to={`/projects/${project.id}`} className="project-link">
                {project.name}
              </Link>
            </div>
          ))
        )}
        <ValueStatement />
        <Extras />
      </section>
    </div>
  );
}

export default Home;
