import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/projects/')
            .then(response => setProjects(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="projects-container">
            <h2>Projects</h2>
            {projects.map(project => (
                <div key={project.id} className="project-card">
                    <img src={`http://localhost:8000${project.image}`} alt={project.title} />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            ))}
        </div>
    );
};

export default Projects;