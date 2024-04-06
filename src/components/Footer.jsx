import React from 'react';

function Footer() {
  const year = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer text-center py-3">
      <p className="mb-0" style={{textAlign:'center'}}>
        Copyright &copy; {year} Vindu Venugopal
      </p>
      {/* Add social media links (optional) */}
      <a href="https://www.linkedin.com/in/your-linkedin-profile" className="mx-2">
        <i className="bi bi-linkedin"></i>
      </a>
      <a href="https://github.com/your-github-username" className="mx-2">
        <i className="bi bi-github"></i>
      </a>
    </footer>
  );
}

export default Footer;
