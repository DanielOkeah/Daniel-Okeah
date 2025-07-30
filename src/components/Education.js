import React from 'react';
import EducationItem from './EducationItem';

function Education() {
  const educationItems = [
    {
      date: "March 2023 - Present",
      degree: "Master's Degree in Biomedical Engineering",
      institution: "HAW University of Applied Sciences"
    },
    {
      date: "September 2018 - June 2022",
      degree: "Bachelor's Degree in Biomedical Engineering, Honors",
      institution: "Kharkiv National University of Radioelectronics"
    }
  ];

  return (
    <div className="card">
      <div className="card-block">
        <h2>Education</h2>
        <div className="row">
          {educationItems.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="experience-card">
                <EducationItem
                  date={item.date}
                  degree={item.degree}
                  institution={item.institution}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;