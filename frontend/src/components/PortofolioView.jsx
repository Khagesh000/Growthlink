import React from 'react';
import './PortfolioView.scss';

const PortfolioView = ({ profile, skills, projects }) => {
  return (
    <div className="portfolio-view">
      <section className="profile">
        <img src={profile.profile_image} alt="Profile" className="profile-img" />
        <h1>{profile.name}</h1>
        <h3>{profile.role}</h3>
        <p>{profile.about}</p>
        <div className="contact-info">
          <span>📧 {profile.email}</span>
          <span>📞 {profile.phone}</span>
          <span>📍 {profile.location}</span>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <strong>{skill.name}</strong> - {skill.level}
            </li>
          ))}
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {project.image && <img src={project.image} alt={project.title} />}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioView;
