import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Project Title 1',
      description: 'A brief description of the project.',
      image: '../assets/project1.jpg', // Replace with your image path
      link: 'https://your-project-link.com', // Replace with your project link
    },
    {
      title: 'Project Title 2',
      description: 'Another project description.',
      image: '../assets/project2.jpg', // Replace with your image path
      link: 'https://your-project-link2.com', // Replace with your project link
    },
  ];

  return (
    <section className="projects container" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4 mb-4" key={project.title}>
            <div className="card">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
