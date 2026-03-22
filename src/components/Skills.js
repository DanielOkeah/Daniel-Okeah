import React from 'react';

function Skills() {
  const skillCategories = [
    {
      category: "Quality & Regulatory Compliance",
      skills: ["QMS", "ISO 13485", "EU MDR", "US FDA (21 CFR 820)", "IEC 60601", "CAPA Management", "NC Investigation", "SOP Development"]
    },
    {
      category: "Software Development & Data Analysis",
      skills: ["JavaScript (React)", "Python", "HTML/CSS", "MATLAB", "C#", "PyTorch", "TensorFlow", "NumPy", "Power BI"]
    },
    {
      category: "Engineering & Enterprise Systems",
      skills: ["SAP (Quality & Logistics Modules)", "AutoCAD", "IBM Notes", "Jira", "Figma", "Trello", "GitHub"]
    },
    {
      category: "AI & Productivity Tools",
      skills: ["Claude AI", "OpenAI (GPT)", "Perplexity AI", "Microsoft Copilot", "Microsoft Office Suite"]
    },
    {
      category: "Key Competencies",
      skills: ["Root Cause Analysis", "Cross-Functional Collaboration", "Agile Teamwork", "Technical Documentation", "Process Optimization"]
    }
  ];

  return (
    <div className="card">
      <div className="card-block">
        <h2>Skills</h2>
        {skillCategories.map((cat, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>{cat.category}</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cat.skills.map((skill, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.9em',
                    fontWeight: '500'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
        <h4 style={{ color: 'var(--primary)', marginTop: '20px', marginBottom: '10px' }}>Languages</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>English:</strong> Native proficiency (C2)</li>
          <li><strong>German:</strong> Professional working proficiency (B2)</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
