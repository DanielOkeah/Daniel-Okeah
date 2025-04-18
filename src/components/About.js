import React from 'react';
// Remove the leading slash - it should be a relative path
import profileImage from '../assets/images/Image.jpg';

function About() {
  return (
    <div className="card">
      <div className="card-block">
        <h2>About me</h2>
        <div className="row">
          <div className="col-md-4">
            <p>
              <img src={profileImage} className="img-responsive" alt="Daniel Okeah" />
            </p>
          </div>
          <div className="col-md-8">
            <p>A dedicated Biomedical Engineer with expertise in medical device testing and healthcare IT systems integration. Combines strong technical foundations in Python, MATLAB, and medical device protocols with hands-on experience in laboratory setup and equipment validation at Olympus Europe.</p>
            <p>Proficient in optimizing training equipment workflows and enhancing knowledge management systems through web development. Particularly skilled in medical device complaint resolution and compliance reporting.</p>
            <p>Committed to leveraging technical expertise in signal processing, medical imaging, and data analysis to advance healthcare technology and improve patient outcomes. Known for collaborative problem-solving abilities and proactive approach to cross-functional teamwork in technical healthcare environments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;