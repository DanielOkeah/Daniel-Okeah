import React from 'react';
import profileImage from '../assets/images/Image.jpg';

function About() {
  return (
    <div className="card">
      <div className="card-block">
        <h2>About me</h2>
        <div className="experience-card">
          <div className="row">
            <div className="col-md-4">
              <p>
                <img src={profileImage} className="img-responsive" alt="Daniel Okeah" />
              </p>
            </div>
            <div className="col-md-8">
              <p>A dedicated Biomedical Engineer with 3+ years of experience in medical device quality management, regulatory compliance, and healthcare IT systems. Specialized expertise in ISO 13485/MDR compliance, CAPA management, and FDA 510(k) analysis with proven track record at Olympus Europe and Orbus Healthcare.</p>
              <p>Full-stack developer proficient in React, Python, and JavaScript who builds AI-powered tools for healthcare. Developed an internal FDA 510(k) analysis tool that streamlines regulatory document parsing and QMS benchmarking for medtech teams. Strong background in signal processing, medical imaging, and machine learning applications (CNN-based ECG arrhythmia detection with 99.7% accuracy).</p>
              <p>Known for driving process optimization in quality operations, collaborating effectively across cross-functional teams, and translating regulatory requirements into actionable improvements. Fluent in English (Native) and German (Professional B2). Committed to leveraging technical expertise and regulatory knowledge to advance healthcare technology and patient outcomes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;