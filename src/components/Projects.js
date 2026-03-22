import React from 'react';

function Projects() {
  const projects = [
    {
      title: "FDA 510(k) Analyzer",
      description: "AI-powered React web app that parses FDA 510(k) submissions and extracts structured regulatory data (device class, CFR codes, predicate devices, standards, compliance gaps, QA recommendations) to streamline QMS benchmarking and FDA analysis for medtech quality teams.",
      link: "https://github.com/DanielOkeah/fda-analyzer"
    },
    {
      title: "ECG Arrhythmia Detection with CNN",
      description: "1D CNN classifier trained on MIT-BIH database achieving 99.7% accuracy on 82k ECG beats; includes FastAPI deployment, Docker support, batch prediction endpoints and full evaluation metrics for clinical arrhythmia screening.",
      link: "https://github.com/DanielOkeah/ecg-arrhytmia-cnn"
    },
    {
      title: "Chest X-Ray Pneumonia Detection",
      description: "CNN model classifying pneumonia vs normal chest X-rays (93% accuracy, 95% pneumonia recall) using Kaggle dataset; demonstrates clinical-grade image preprocessing, augmentation, model validation and metrics prioritized for radiology triage workflows.",
      link: "https://github.com/DanielOkeah/ecg-arrhytmia-cnn"
    },
    {
      title: "Personal Portfolio Website",
      description: "Responsive portfolio built with HTML, CSS, JavaScript showcasing biomedical engineering projects, regulatory tools and full-stack capabilities for medtech career development.",
      link: "https://danielokeah.netlify.app/"
    },
    {
      title: "ECG Signal Denoising & Enhancement",
      description: "AI-based denoising using convolutional networks and autoencoders to clean ECG signals while preserving diagnostic features; bridges signal processing research with practical medtech signal quality improvement."
    }
  ];

  return (
    <div className="card">
      <div className="card-block">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: index !== projects.length - 1 ? '1px solid var(--border-color, #ddd)' : 'none' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '8px' }}>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                  {project.title} ↗
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p style={{ marginTop: '10px', lineHeight: '1.6' }}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
