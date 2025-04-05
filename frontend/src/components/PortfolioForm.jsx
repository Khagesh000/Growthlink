import React, { useState } from 'react';
import axios from 'axios';
import './PortfolioForm.scss';
import PortfolioView from './PortofolioView.jsx';

const PortfolioForm = () => {
  const [profileData, setProfileData] = useState({
    name: '', role: '', about: '', email: '', phone: '', location: '', profile_image: null,
  });
  const [skills, setSkills] = useState([{ name: '', level: '' }]);
  const [projects, setProjects] = useState([{ title: '', description: '', link: '', image: null }]);
  const [submitted, setSubmitted] = useState(false);

  const handleProfileChange = (e) => {
    const { name, value, files } = e.target;
    setProfileData({ ...profileData, [name]: files ? URL.createObjectURL(files[0]) : value });
  };

  const handleSkillChange = (index, e) => {
    const updatedSkills = [...skills];
    updatedSkills[index][e.target.name] = e.target.value;
    setSkills(updatedSkills);
  };

  const addSkill = () => setSkills([...skills, { name: '', level: '' }]);

  const handleProjectChange = (index, e) => {
    const { name, value, files } = e.target;
    const updatedProjects = [...projects];
    updatedProjects[index][name] = files ? URL.createObjectURL(files[0]) : value;
    setProjects(updatedProjects);
  };

  const addProject = () => setProjects([...projects, { title: '', description: '', link: '', image: null }]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate backend submission
    try {
      // Here you can submit the real FormData to your backend if needed
      // Example:
      // const formData = new FormData();
      // Object.entries(profileData).forEach(([key, value]) => formData.append(key, value));
      // await axios.post("http://localhost:8000/api/profiles/", formData);

      setSubmitted(true);
      console.log("✅ Portfolio submitted successfully!");
    } catch (error) {
      console.error("❌ Error submitting portfolio:", error);
    }
  };

  // ⬇️ Once submitted, show PortfolioView instead of form
  if (submitted) {
    return <PortfolioView profile={profileData} skills={skills} projects={projects} />;
  }

  return (
    <div>
    <form className="portfolio-form" onSubmit={handleSubmit}>
      <h2>Profile</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleProfileChange} required />
      <input type="text" name="role" placeholder="Role" onChange={handleProfileChange} required />
      <textarea name="about" placeholder="About" onChange={handleProfileChange} required></textarea>
      <input type="email" name="email" placeholder="Email" onChange={handleProfileChange} required />
      <input type="text" name="phone" placeholder="Phone" onChange={handleProfileChange} required />
      <input type="text" name="location" placeholder="Location" onChange={handleProfileChange} required />
      <input type="file" name="profile_image" onChange={handleProfileChange} />

      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill-block">
          <input name="name" placeholder="Skill Name" value={skill.name} onChange={(e) => handleSkillChange(index, e)} required />
          <input name="level" placeholder="Level" value={skill.level} onChange={(e) => handleSkillChange(index, e)} required />
        </div>
      ))}
      <button type="button" onClick={addSkill}>Add Skill</button>

      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-block">
          <input name="title" placeholder="Project Title" onChange={(e) => handleProjectChange(index, e)} required />
          <textarea name="description" placeholder="Description" onChange={(e) => handleProjectChange(index, e)} required></textarea>
          <input name="link" placeholder="Link" onChange={(e) => handleProjectChange(index, e)} required />
          <input type="file" name="image" onChange={(e) => handleProjectChange(index, e)} />
        </div>
      ))}
      <button type="button" onClick={addProject}>Add Project</button>

      <button type="submit" className="submit-btn">Submit Portfolio</button>
    </form>
    </div>
  );
};

export default PortfolioForm;
