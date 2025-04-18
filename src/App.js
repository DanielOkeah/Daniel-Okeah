import React from 'react';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Language from './components/Language';
import SocialNetwork from './components/SocialNetwork';
import Footer from './components/Footer';
import './App.css';
import Tabs from './components/Tabs';
// Import the background image from src/assets/images
import backgroundImage from './assets/images/Image.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const tabs = [
    { label: 'About', content: <About /> },
    { label: 'Experience', content: <Experience /> },
    { label: 'Education', content: <Education /> },
    { label: 'Language', content: <Language /> },
    { label: 'Social', content: <SocialNetwork /> },
  ];
  return (
    <div className="body">
      <button
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 1000,
          borderRadius: 20,
          padding: '8px 18px',
          background: 'var(--primary)',
          color: 'var(--text-light)',
          border: 'none',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}
        onClick={() => setDarkMode((d) => !d)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div className="background-color-layer" style={{backgroundImage: `url(${backgroundImage})`}}></div>
      <main className="content-wrapper">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Tabs tabs={tabs} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;