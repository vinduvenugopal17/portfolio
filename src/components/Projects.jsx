import React from 'react';
import cocomaple from './assets/CocoMaple.JPG'; 
import recipeforyou from './assets/RecipeForYou.JPG'; 

function Projects() {
  const projects = [
    {
      title: 'RecipeForYou',
      description: 'RecipeforYou is a web application for assisting everyone in finding a suitable recipe to cook developed using MEAN tech stack. Recipe searches can be made highly customizable so we can personalize a healthy meal plan that works withour unique tastes and lifestyle. We also let users add their own recipes. Moreover,',
      image: cocomaple, 
      link: 'https://vinduvenugopal.altervista.org', 
    },
    {
      title: 'CocoMaple',
      description: 'This is an online food delivery website made with PHP and WordPress.The website is made alluring and highly interactive with the use of WooCommerce and Several Plugins which are in-built as well as custom-made.Worked in an agile development environment by conducting scrum meetings for developing the project using Trello.',
      image: recipeforyou, 
      link: 'https://youtu.be/PcPH8oaVFnw', 
    },
  ];

  return (
    <section className="projects container" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-6 mb-4" key={project.title}>
            <div className="card">
              <img src={project.image} className="card-img-top"  alt={project.title} />
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
