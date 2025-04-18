import React from 'react';

function Header() {
  return (
    <header className="white-text-container section-container">
      <div className="fade-in">
        <div className="text-center">
          <h1>I am Daniel Okeah</h1>
          <p>Biomedical Engineer</p>
          <p>
            <a className="fa-icon fa-icon-2x" href="mailto:danielokeah@gmail.com" title="">
              <i className="fa fa-envelope"></i>
            </a>
            <a className="fa-icon fa-icon-2x" href="https://www.linkedin.com/in/danielokeah/" title="">
              <i className="fa fa-linkedin"></i>
            </a>
            <a className="fa-icon fa-icon-2x" href="https://github.com/DanielOkeah/" title="">
              <i className="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;