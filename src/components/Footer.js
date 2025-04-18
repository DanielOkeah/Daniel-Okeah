import React from 'react';

function Footer() {
  return (
    <footer className="footer-container white-text-container text-center">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <p><img src="/assets/images/mashup-icon.svg" alt="" /></p>
            <p>©All right reserved. Daniel Okeah </p>
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
      </div>
    </footer>
  );
}

export default Footer;