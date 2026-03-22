import React from 'react';
import WorkExperienceItem from './WorkExperienceItem';

function Experience() {
  const experiences = [
    {
      date: "May 2025 - February 2026",
      company: "Olympus Europe SE & Co. KG",
      title: "Quality Engineer - European Technical Service Center",
      responsibilities: [
        "Managed CAPAs and non-conformities end-to-end by driving root cause analysis, defining corrective and preventive actions, and ensuring alignment with ISO 13485 and MDR quality system requirements.",
        "Collaborated with field engineers, laboratory teams, and product managers to identify recurring issues early and implement preventive measures that improved service quality and reduced repeat deviations.",
        "Streamlined quality documentation and reporting in SAP and internal systems, accelerating case closure times while maintaining full traceability for audits and regulatory inspections.",
        "Developed an internal AI-powered FDA 510(k) analysis tool using React that parses regulatory documents and extracts structured information (device class, CFR, product codes, referenced standards, risk levels, compliance gaps and QA recommendations)."
      ]
    },
    {
      date: "May 2024 - May 2025",
      company: "Olympus Europe SE & Co. KG",
      title: "Service Engineer - Technical Service Product Management",
      responsibilities: [
        "Updated and continuously optimized spare parts lists and data modification notices (DMNs) for field service teams, improving spare-parts accuracy and reducing delays during medical device maintenance.",
        "Structured and digitized technical sheets, export control documents, and service bulletins in SAP, IBM Notes, and internal archives, which accelerated information retrieval and reduced documentation errors.",
        "Supported product lifecycle management by setting up and revising spare parts and coordinating service documentation, helping to minimize device downtime and improve overall service efficiency."
      ]
    },
    {
      date: "May 2023 - May 2024",
      company: "Olympus Europe SE & Co. KG",
      title: "Junior Support Engineer - 2nd Level SI Support",
      responsibilities: [
        "Optimized training equipment inventory across warehouses and laboratories by restructuring storage layouts, improving device availability, and reducing setup time for hands-on sessions.",
        "Built and tested new product setups in the lab, including wiring, configuration, inventory verification, and functional validation of biomedical devices to support safe and reliable field use.",
        "Developed and enhanced the internal device knowledge database using HTML, CSS, and JavaScript to enable faster device search, improve complaint handling workflows, and centralize technical and service information."
      ]
    },
    {
      date: "May 2022 - December 2022",
      company: "Orbus Healthcare",
      title: "Medical Systems Consultant - Orbus Consulting",
      responsibilities: [
        "Supported doctors and clinical staff with in-depth product training and troubleshooting so devices were used safely and effectively in daily practice.",
        "Collected feedback from hospitals and clinics, summarized recurring issues and passed them to product and quality teams to guide improvements.",
        "Regularly presented product updates and competitive insights so customers and internal stakeholders understood the technical and clinical value of our solutions."
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