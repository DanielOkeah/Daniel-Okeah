import React from 'react';
import WorkExperienceItem from './WorkExperienceItem';

function Experience() {
  const experiences = [
    {
      date: "May 2023 - Present",
      company: "Olympus Europe SE & Co. KG",
      title: "Support Engineer - 2nd Level SI Support",
      responsibilities: [
        "- Contributed to the optimization of training equipment management, including restructuring and inventory organization across warehouse and hands-on training facilities.",
        "- Supported the establishment and enhancement of a test laboratory, focusing on the setup, wiring, and testing of new products.",
        "- Conducted comprehensive inventory testing to ensure equipment accuracy and functionality within the laboratory environment.",
        "- Played a key role in revamping the device knowledge database by employing HTML, CSS & JavaScript for improved accessibility and usability.",
        "- Managed device complaints by coordinating resolutions and generating detailed reports to ensure compliance with company standards."
      ]
    },
    {
      date: "May 2023 - Present",
      company: "Olympus Europe SE & Co. KG",
      title: "Service Product Engineer - Technical Service Product Management",
      responsibilities: [
        "- Regular updates to Olympus products spare parts lists utilized by Field service engineers and technicians.",
        "- Service documentation and management of data modification notices(DMNs).",
        "- Filing of technical information sheets, export control documents and service bulletins.",
        "- Worked with SAP, IBM notes and internal Document Archives for setup of spare parts and DMNs"
      ]
    },
    {
      date: "March 2024 - December 2024",
      company: "CardioSecur Personal MedSystems",
      title: "Research Assistant",
      responsibilities: [
        "- Researched suitable AI techniques with straightforward implementations for the denoising of ECG signals.",
        "- Optimization and enhancement of ECG signals recorded through the company application software."
      ]
    },
    {
      date: "January 2022 - December 2022",
      company: "Orbus Healthcare Consulting",
      title: "Biomedical Systems Consultant",
      responsibilities: [
        "- Leveraged technical background in biomedical engineering to provide in-depth product education and troubleshooting support to physicians and clinical staff.",
        "- Collaborated with cross-functional teams to gather customer feedback and contribute to product improvement initiatives.",
        "- Conducted product demonstrations and training sessions, ensuring healthcare professionals could maximize device effectiveness and patient outcomes.",
        "- Maintained comprehensive knowledge of competitor products and industry trends to effectively position company offerings."
      ]
    }
  ];

  return (
    <div className="card">
      <div className="card-block">
        <h2>Experience</h2>
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <WorkExperienceItem 
              date={exp.date} 
              company={exp.company} 
              title={exp.title} 
              responsibilities={exp.responsibilities} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;