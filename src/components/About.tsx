import React from 'react';
import '../styles/about.css';

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="section-header">
          <h2 className="section-title crime-text glitch-text" data-text="WHAT IS CRIME COIN">WHAT IS CRIME COIN</h2>
          <div className="section-divider">
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
          </div>
        </div>
        
        <div className="about-text">
          <p className="about-paragraph glitch-corrupt">
            Crime Coin is a satire-driven memecoin born from the reality of on-chain culture. 
            The crypto space is already filled with rugpulls scams and pump-and-dumps so instead 
            of pretending to be something else we flip the narrative.
          </p>
          
          <div className="text-separator">░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░</div>
          
          <p className="about-paragraph eerie-haunted">
            Crime Coin embraces the chaos with humor turning the crime on-chain into a meme 
            that everyone can laugh at while also highlighting how absurd the space has become.
          </p>
          
          <div className="text-separator">░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░</div>
          
          <p className="about-highlight bonk-text">
            WE TURN CRYPTO CRIME INTO COMEDY
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;