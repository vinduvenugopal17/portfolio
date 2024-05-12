import React from 'react';
import javacertificate from './assets/java-cerificate.png'; 
import coescaler from './assets/COE-SCALER.png'; 

function Certifications() {
  const certifications = [
    {
      name: 'Java Full Stack Development Plus Course',
      issuer: 'Techno Canada Centre of Excellence',
      date: 'December 17,2023',
      image: javacertificate
    },
    {
      name: 'JavaScript Course with certification : Unlocking the Power of javaScript',
      issuer: 'Scaler',
      date: 'March 2024',
      image: coescaler
    },
  ];

  return (
    <section className="certifications container" id="certifications">
      <h2 className="section-title">Certifications</h2>
      <div className="row">
        {certifications.map((certification) => (
          <div className="col-md-6 mb-4" key={certification.name}>
            <div className="card">
            <img src={certification.image} className="card-img-top"  alt={certification.name} />
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
