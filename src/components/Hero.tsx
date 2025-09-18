import React from 'react';
import '../styles/hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="title-container">
          <h1 className="main-title glitch-text" data-text="CRIMEONBONK">CRIMEONBONK</h1>
          <div className="subtitle glitch-text" data-text="The Satirical Memecoin">The Satirical Memecoin</div>
        </div>
        
        <div className="hero-description">
          <p className="hero-tagline">
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          </p>
          <p className="hero-text">
            Because if crypto is already crime then why not make it hilarious
          </p>
          <p className="hero-tagline">
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          </p>
        </div>

        <div className="hero-links">
          <a href="https://x.com/crimeonbonk" target="_blank" rel="noopener noreferrer" className="social-link">
            [ X.COM ]
          </a>
          <a href="https://github.com/crimeonbonk" target="_blank" rel="noopener noreferrer" className="social-link">
            [ GITHUB ]
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;