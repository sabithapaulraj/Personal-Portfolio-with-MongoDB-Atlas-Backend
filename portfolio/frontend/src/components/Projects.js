import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Project.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/projects')
            .then(res => setProjects(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="projects-container">
            <h1 className="projects-title">My Projects</h1>
            <div className="projects-grid">
                {projects.length > 0 ? (
                    projects.map(project => (
                        <div key={project._id} className="project-card">
                            {/* Placeholder for image */}
                            <div className="project-image-placeholder">
                                <span role="img" aria-label="project-icon">🖥️</span>
                            </div>

                            {/* Project title */}
                            <h2 className="project-title">{project.title}</h2>
                            
                            {/* Project description */}
                            <p className="project-description">{project.description}</p>
                            
                            {/* Technologies */}
                            <div className="project-technologies">
                                <strong>Technologies: </strong>
                                {project.technologies.join(', ')}
                            </div>
                            
                            {/* Status */}
                            <div className="project-status">
                                <strong>Status: </strong>{project.status}
                            </div>
                            
                            {/* Duration */}
                            <div className="project-duration">
                                <strong>Duration: </strong>{project.duration}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-projects">No projects to display.</p>
                )}
            </div>
        </div>
    );
};

export default Projects;
