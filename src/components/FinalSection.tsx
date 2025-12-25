import { Heart } from 'lucide-react';

function FinalSection() {
  return (
    <div className="section final-section">
      <div className="content-wrapper">
        <div className="final-message slow-fade-in">
          <Heart className="final-heart" fill="currentColor" />
          <h2 className="final-heading">Mum,</h2>
          <p className="final-text">I really love you.</p>
          <p className="final-text">Thank you for everything.</p>
          <p className="final-text">I am forever grateful.</p>
          <div className="final-signature">
            <p>Your loving son</p>
            <Heart className="signature-heart" fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalSection;
