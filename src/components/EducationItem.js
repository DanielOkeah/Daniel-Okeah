import React from 'react';

function EducationItem({ date, degree, institution }) {
  return (
    <div className="education-experience">
      <small className="date">{date}</small>
      <h3 className="h5 date-title">{degree}</h3>
      <p>{institution}</p>
    </div>
  );
}

export default EducationItem;