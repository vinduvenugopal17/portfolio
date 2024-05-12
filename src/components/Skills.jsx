import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section className="skills container" id="skills">
      <h2 className="section-title">Skills</h2>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
      <br></br>
    </section>
    
  );
};

export default Skills;

