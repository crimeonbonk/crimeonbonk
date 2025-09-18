import React from 'react';
import '../styles/social.css';

const Social: React.FC = () => {
  return (
    <section className="social-section">
      <div className="social-content">
        <div className="social-header">
          <h2 className="section-title social-text glitch-text" data-text="JOIN THE CRIME">JOIN THE CRIME</h2>
          <div className="section-divider">
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
          </div>
        </div>
        
        <div className="social-links-container">
          <div className="social-box">
            <div className="social-label">FOLLOW THE CRIME</div>
            <a href="https://x.com/crimeonbonk" target="_blank" rel="noopener noreferrer" className="social-link-main">
              X.COM/CRIMEONBONK
            </a>
          </div>
        </div>
        
        <div className="footer-text">
          <div className="text-separator">░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░</div>
          <p className="footer-message bonk-text digital-ghost">
            REMEMBER THIS IS ALL SATIRE AND FUN NO ACTUAL CRIMES WERE COMMITTED IN THE MAKING OF THIS COIN
          </p>
          <div className="text-separator">░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░</div>
          <p className="copyright">
            ━━━━━━━━━━━━━━━━━━━━━━━━━ CRIMEONBONK 2025 ━━━━━━━━━━━━━━━━━━━━━━━━━
          </p>
        </div>
      </div>
    </section>
  );
};

export default Social;