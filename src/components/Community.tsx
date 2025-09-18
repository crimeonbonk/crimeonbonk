import React from 'react';
import '../styles/community.css';

const Community: React.FC = () => {
  return (
    <section className="community-section">
      <div className="community-content">
        <div className="section-header">
          <h2 className="section-title purpose-text glitch-text" data-text="THE CRIME FAMILY">THE CRIME FAMILY</h2>
          <div className="section-divider">
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
          </div>
        </div>
        
        <div className="community-grid">
          <div className="community-box">
            <div className="community-header">THE HODLERS</div>
            <div className="community-content-text phantom-error">
              These brave souls hold through every pump and dump like they are clutching the last slice of pizza at a college party never letting go no matter how much their portfolio screams in pain
            </div>
          </div>
          
          <div className="community-box">
            <div className="community-header">THE MEMERS</div>
            <div className="community-content-text cursed-data">
              Armed with photoshop skills that would make professional designers weep they turn every market crash into comedy gold because if you are not laughing you are probably crying
            </div>
          </div>
          
          <div className="community-box">
            <div className="community-header">THE SHILLERS</div>
            <div className="community-content-text nightmare-static">
              They spread the word about Crime Coin with the enthusiasm of someone who just discovered their favorite restaurant delivers at three in the morning pure unstoppable energy
            </div>
          </div>
        </div>
        
        <div className="community-footer">
          <div className="text-separator">░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░</div>
          <p className="community-motto crime-text glitch-corrupt">
            WE MAY BE CRIMINALS BUT AT LEAST WE HAVE GOOD HUMOR AND QUESTIONABLE INVESTMENT STRATEGIES
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;