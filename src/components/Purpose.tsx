import React from 'react';
import '../styles/purpose.css';

const Purpose: React.FC = () => {
  return (
    <section className="purpose-section">
      <div className="purpose-content">
        <div className="section-header">
          <h2 className="section-title purpose-text glitch-text" data-text="OUR PURPOSE">OUR PURPOSE</h2>
          <div className="section-divider">
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
          </div>
        </div>
        
        <div className="purpose-text-content">
          <p className="purpose-paragraph eerie-haunted">
            Our purpose is simple to parody the so-called crimes of crypto in a way that 
            builds community entertainment and culture. Crime Coin isnt about stealing its 
            about exposing the joke that the chain already feels like legalized crime.
          </p>
          
          <div className="purpose-grid">
            <div className="purpose-box">
              <div className="box-header">[ SATIRE ]</div>
              <div className="box-content toxic-glitch">
                Making fun of crypto crimes through humor and community
              </div>
            </div>
            
            <div className="purpose-box">
              <div className="box-header">[ COMMUNITY ]</div>
              <div className="box-content digital-ghost">
                Building a space where everyone can laugh at the absurdity
              </div>
            </div>
            
            <div className="purpose-box">
              <div className="box-header">[ SELF AWARE ]</div>
              <div className="box-content phantom-error">
                Acknowledging the chaos while turning it into entertainment
              </div>
            </div>
            
            <div className="purpose-box">
              <div className="box-header">[ TRANSPARENCY ]</div>
              <div className="box-content cursed-data">
                We tell you exactly how ridiculous this all is before you decide to join the madness
              </div>
            </div>
          </div>
          
          <div className="purpose-footer">
            <div className="text-separator">░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░</div>
            <p className="purpose-highlight crime-text">
              CRIME COIN IS THE ONLY CRIME THAT HURTS NO ONE BUT MAKES EVERYONE LAUGH
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;