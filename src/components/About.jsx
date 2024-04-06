import React from 'react';
import profilePic from './assets/profile.jpeg'; // Replace with your image path

function About() {
    return (
        <section className="about container" id="about">
            <h2 className="text-center mb-4">About Me</h2>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <br></br><br></br>
                    <img src={profilePic} style={{ width: '300px', height: '300px' }} alt="Profile" className="img-fluid rounded-circle mx-auto d-block" />
                </div>
                <div className="col-md-5">
                    <p><br></br><br></br><br></br>
                        I am a passionate and skilled Full Stack Web Developer with over 3 years of experience.
                        I have a strong background in HTML, CSS, Javascript, React, Java, Springboot and MySql. I am highly motivated and
                        always eager to learn and grow.
                    </p>
                    <p>
                        In my free time, I enjoy reading books and listening to music.
                    </p>
                    {/* Add links to social media profiles */}
                    <a href="https://www.linkedin.com/in/vindu-venugopal" className="btn btn-primary me-2">LinkedIn</a>
                    <a href="https://github.com/your-github-username" className="btn btn-dark">GitHub</a>
                </div>
            </div>
        </section>
    );
}

export default About;
