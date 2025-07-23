import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import './Home.css'
import ValueStatement from '../sections/ValueStatement'
import Extras from '../sections/Vault'
import SignWall from "../sections/SignWall"

function Home() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading]   = useState(true)

  // fetch projects as before
  useEffect(() => {
    fetch("/projects.json")
      .then(r => r.json())
      .then(data => {
        const homePageProjects = data.filter(p =>
          ["amazon-ads-campaign","adobe-automation","ar-experiences","wireframing-prototyping","motion-graphics","myblog"]
            .includes(p.id)
        )
        setProjects(homePageProjects)
        setLoading(false)
      })
      .catch(e => {
        console.error("Error fetching projects:", e)
        setLoading(false)
      })
  }, [])

  // 1️⃣ animate hero on mount
  useEffect(() => {
    gsap.from(".hero-content", {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: "power2.out"
    })
  }, [])

  // 2️⃣ animate project list when loaded
  useEffect(() => {
    if (!loading) {
      gsap.from(".project-list-item", {
        duration: 0.5,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: "power1.out"
      })
    }
  }, [loading])

  return (
    <div className="home-container">
      <section className="video-placeholder">
        <div className="hero-content">
          <h1>Welcome to My Portfolio!</h1>
          <p>Showcasing my creative and technical journey.</p>
        </div>
      </section>

      <section className="content-section">
        {loading
          ? <div className="loading-message">Loading projects...</div>
          : projects.map(p => (
              <div key={p.id} className="project-list-item">
                <Link to={`/projects/${p.id}`} className="project-link">
                  {p.name}
                </Link>
              </div>
            ))
        }
        <ValueStatement />
        <Extras />
        <SignWall />
      </section>
    </div>
  )
}

export default Home
