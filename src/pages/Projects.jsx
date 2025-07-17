import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Projects () {
const [projects, setProjects] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(()=>{

setTimeout(() => {
  fetch("/projects.json")
  .then((response) => response.json())
  .then((data) => {
    setProjects(data);
    setLoading(false);
  })
}, 2000);
// 2초라는 뜻 : 링크가 뜰때까지 2초의 로딩타임이 있다.
}, []);

  return loading ? (<div>Loading...</div>) : (
    <div>
      <h1>Projects</h1>
      <p>Checkout my cool projects!</p>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects;