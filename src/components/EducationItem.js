import React from 'react';

function EducationItem({ date, degree, institution, gpa }) {
  return (
    <div className="education-experience">
      <small className="date">{date}</small>
      <h3 className="h5 date-title">{degree}</h3>
      <p>{institution}</p>
      {gpa && <p><small>GPA: {gpa}</small></p>}
    </div>
  );
}

export default EducationItem;