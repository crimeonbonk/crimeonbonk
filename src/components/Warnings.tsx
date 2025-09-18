import React from 'react';
import '../styles/warnings.css';

const Warnings: React.FC = () => {
  return (
    <section className="warnings-section">
      <div className="warnings-content">
        <div className="section-header">
          <h2 className="section-title bonk-text glitch-text" data-text="MANDATORY WARNINGS">MANDATORY WARNINGS</h2>
          <div className="section-divider">
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
          </div>
        </div>
        
        <div className="warnings-container">
          <div className="warning-box warning-main">
            <div className="warning-header">DISCLAIMER NOBODY READS</div>
            <div className="warning-content nightmare-static">
              This is not financial advice this is comedy advice and comedy advice is usually terrible for your portfolio but great for your mental health until you check your wallet balance
            </div>
          </div>
          
          <div className="warnings-row">
            <div className="warning-box">
              <div className="warning-header">DO YOUR OWN RESEARCH</div>
              <div className="warning-content glitch-corrupt">
                Which means ask your friends what they think then do the opposite because your friends are probably as clueless as you are
              </div>
            </div>
            
            <div className="warning-box">
              <div className="warning-header">PAST PERFORMANCE</div>
              <div className="warning-content eerie-haunted">
                Does not indicate future results but it does indicate that someone somewhere made money while you were still trying to figure out what DeFi means
              </div>
            </div>
          </div>
          
          <div className="warnings-row">
            <div className="warning-box">
              <div className="warning-header">INVEST RESPONSIBLY</div>
              <div className="warning-content toxic-glitch">
                Only invest what you can afford to lose which for most of us means the loose change in our couch cushions
              </div>
            </div>
            
            <div className="warning-box">
              <div className="warning-header">NOT A SECURITY</div>
              <div className="warning-content digital-ghost">
                This token provides no security whatsoever especially not security from making questionable financial decisions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Warnings;