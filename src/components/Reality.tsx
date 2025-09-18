import React from 'react';
import '../styles/reality.css';

const Reality: React.FC = () => {
  return (
    <section className="reality-section">
      <div className="reality-content">
        <div className="section-header">
          <h2 className="section-title social-text glitch-text" data-text="MESSAGE FROM DEV">MESSAGE FROM DEV</h2>
          <div className="section-divider">
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
          </div>
        </div>
        
        <div className="dev-message-container">
          <div className="dev-message-box">
            <div className="dev-message-header">FROM THE DEV DESK</div>
            <div className="dev-message-content">
              <p>
                Look I built this as a joke but then I realized crypto itself is the joke. Every day I wake up and see another project promising to revolutionize something revolutionary. Meanwhile people are getting rugged faster than a magic show gone wrong. So I thought why not make a coin that admits it is ridiculous from the start. At least when Crime Coin disappoints you it will be honest about it. This whole space needs more humor and less false promises. Crime Coin is my contribution to the comedy not the crime.
              </p>
            </div>
          </div>
        </div>
        
        <div className="dev-footer">
          <div className="text-separator">░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░</div>
          <p className="dev-conclusion bonk-text">
            SIGNED YOUR FRIENDLY NEIGHBORHOOD CRYPTO COMEDIAN ALSO KNOWN AS THE DEV
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reality;