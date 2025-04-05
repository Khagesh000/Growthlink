import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/skills/')
            .then(response => setSkills(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <ul>
                {skills.map(skill => (
                    <li key={skill.id}>{skill.name} - {skill.level}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;