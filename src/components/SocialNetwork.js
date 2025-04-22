import React from 'react';

function SocialNetwork() {
  return (
    <div className="card">
      <div className="card-block">
        <h2>Social Network</h2>
        <div className="row">
          <div className="col-md-3">
            <p className="social-buttons">
              <a href="mailto:danielokeah@gmail.com" title="">
                <span className="social-round-icon fa-icon">
                  <i className="fa fa-envelope"></i>
                </span>
                DanielOkeah
              </a>
            </p>
          </div>
          <div className="col-md-3">
            <p className="social-buttons">
              <a href="https://www.linkedin.com/in/danielokeah/" title="">
                <span className="social-round-icon fa-icon">
                  <i className="fa fa-linkedin"></i>
                </span>
                Daniel Okeah
              </a>
            </p>
          </div>
          <div className="col-md-3">
            <p className="social-buttons">
              <a href="https://github.com/DanielOkeah/" title="">
                <span className="social-round-icon fa-icon">
                  <i className="fa fa-github"></i>
                </span>
                Daniel Okeah
              </a>
            </p>
          </div>
          <div className="col-md-3">
            <p className="social-buttons">
              <a href="/CV - Daniel Okeah.pdf" download title="Download CV">
                <span className="social-round-icon fa-icon">
                  <i className="fa fa-file-pdf-o"></i>
                </span>
                Download CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialNetwork;