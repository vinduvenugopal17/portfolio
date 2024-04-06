import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills'
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import VoluntaryWork from './components/VoluntaryWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const skills = ['JavaScript', 'React', 'Springboot', 'Java', 'MySql', 'HTML', 'CSS', 'WordPress'];
  const email= 'vindudeepak17@gmail.com';
  const phone='226-261-2122';
  const location='Kitchener, Ontario';
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills skills={skills} />
      <Projects/>
      <Certifications/>
      <VoluntaryWork/>
      <Contact email={email} phone={phone} location={location}/>
      <Footer/>
    </div>
  );
}

export default App;