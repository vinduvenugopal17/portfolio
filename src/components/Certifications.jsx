import React from 'react';

function Certifications() {
  const certifications = [
    {
      name: 'Certification Name 1',
      issuer: 'Issuing Institution',
      date: '20XX',
    },
    {
      name: 'Certification Name 2',
      issuer: 'Issuing Institution',
      date: '20XX',
    },
  ];

  return (
    <section className="certifications container" id="certifications">
      <h2 className="section-title">Certifications</h2>
      <div className="row">
        {certifications.map((certification) => (
          <div className="col-md-6 mb-4" key={certification.name}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{certification.name}</h5>
                <p className="card-text">
                  Issued by: {certification.issuer} ({certification.date})
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
