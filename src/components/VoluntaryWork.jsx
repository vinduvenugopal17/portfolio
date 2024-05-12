import React from 'react';

function VoluntaryWork() {
  const voluntaryWork = [
    {
      organization: 'Lackner Woods Public School',
      role: 'Fund-Raising Volunteer',
      dates: 'August 2022',
    },
   
  ];

  return (
    <section className="voluntary-work container" id="voluntary-work">
      <h2 className="section-title">Voluntary Work</h2>
      <div className="row">
        {voluntaryWork.map((work) => (
          <div className="col-md-12 mb-4" key={work.organization}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{work.organization}</h5>
                <p className="card-text">
                  {work.role} ({work.dates})
                </p>
                <p>{work.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VoluntaryWork;
