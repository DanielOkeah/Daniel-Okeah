import React from 'react';
import EducationItem from './EducationItem';

function Education() {
  const educationItems = [
    {
      date: "March 2023 - Expected September 2027",
      degree: "Master of Science in Biomedical Engineering",
      institution: "HAW Hamburg University of Applied Sciences",
      gpa: "2.38 (German scale)"
    },
    {
      date: "September 2018 - June 2022",
      degree: "Bachelor of Science in Biomedical Engineering, Honors",
      institution: "Kharkiv National University of Radio Electronics",
      gpa: "4.0/4.0"
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
                  gpa={item.gpa}
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