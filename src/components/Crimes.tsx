import React from 'react';
import '../styles/crimes.css';

const Crimes: React.FC = () => {
  return (
    <section className="crimes-section">
      <div className="crimes-content">
        <div className="section-header">
          <h2 className="section-title crime-text glitch-text" data-text="CRYPTO CRIMES WE ALL KNOW">CRYPTO CRIMES WE ALL KNOW</h2>
          <div className="section-divider">
            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
          </div>
        </div>
        
        <div className="crimes-grid">
          <div className="crime-column">
            <div className="crime-box">
              <div className="crime-header">THE CLASSIC RUG PULL</div>
              <div className="crime-content toxic-glitch">
                Developer launches token promises moon then disappears faster than your dad going to buy milk
              </div>
            </div>
            
            <div className="crime-box">
              <div className="crime-header">THE HONEYPOT SPECIAL</div>
              <div className="crime-content digital-ghost">
                You can buy but somehow selling is more impossible than finding a parking spot at the mall
              </div>
            </div>
            
            <div className="crime-box">
              <div className="crime-header">THE FAKE AUDIT</div>
              <div className="crime-content phantom-error">
                Contract audited by totally legit company that definitely exists and is not just someones cousin
              </div>
            </div>
          </div>
          
          <div className="crime-column">
            <div className="crime-box">
              <div className="crime-header">THE CELEBRITY SHILL</div>
              <div className="crime-content cursed-data">
                Famous person promotes coin then dumps harder than your ex dumped you for someone with better wifi
              </div>
            </div>
            
            <div className="crime-box">
              <div className="crime-header">THE INFINITE MINT</div>
              <div className="crime-content nightmare-static">
                Developer can create unlimited tokens but somehow forgot to mention this tiny detail in the whitepaper
              </div>
            </div>
            
            <div className="crime-box">
              <div className="crime-header">THE FAKE VOLUME</div>
              <div className="crime-content glitch-corrupt">
                Trading volume looks amazing until you realize its just bots trading with themselves like a sad dance party
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crimes;