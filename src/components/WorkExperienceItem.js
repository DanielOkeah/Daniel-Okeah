import React from 'react';

function WorkExperienceItem({ date, company, title, responsibilities }) {
  return (
    <div className="work-experience">
      <small className="date">{date}</small>
      <h3 className="h5 date-title">{company}</h3>
      <h3 className="h5 date-title">{title}</h3>
      
      {responsibilities.map((responsibility, index) => (
        <p key={index}>{responsibility}</p>
      ))}
    </div>
  );
}

export default WorkExperienceItem;