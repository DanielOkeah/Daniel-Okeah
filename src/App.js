import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Language from './components/Language';
import SocialNetwork from './components/SocialNetwork';
import Footer from './components/Footer';
import './App.css';
// Import the background image from src/assets/images
import backgroundImage from './assets/images/Image.jpg';

function App() {
  return (
    <div className="body">
      <div className="background-color-layer" style={{backgroundImage: `url(${backgroundImage})`}}></div>
      <main className="content-wrapper">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <About />
              <Experience />
              <Education />
              <Language />
              <SocialNetwork />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;