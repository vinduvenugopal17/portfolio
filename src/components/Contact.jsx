import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Contact = ({ email, phone, location }) => {
  return (
    <section className="contact container" id="contact">
      <h2 className="section-title" style={{textAlign:'left'}}>Contact</h2>
      <div className="contact-info">  {/* Custom class for styling */}
        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> &nbsp;&nbsp;{email}
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} /> &nbsp;&nbsp;{phone}
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;&nbsp;{location}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
