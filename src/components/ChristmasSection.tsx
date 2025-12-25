import { Sparkles } from 'lucide-react';

interface ChristmasSectionProps {
  onNext: () => void;
}

function ChristmasSection({ onNext }: ChristmasSectionProps) {
  return (
    <div className="section christmas-section">
      <div className="content-wrapper">
        <div className="christmas-lights"></div>
        <div className="christmas-content fade-in">
          <Sparkles className="sparkle-icon" />
          <h2 className="christmas-heading">Merry Christmas, Mum</h2>
          <div className="christmas-message">
            <p>
              On this beautiful Christmas day, I want you to know that you are my greatest blessing.
            </p>
            <p>
              You are the most precious gift God has ever given me. Your love is the light that guides my path.
            </p>
            <p>
              May this Christmas bring you as much joy as you have brought into my life. You deserve all the
              happiness in the world.
            </p>
            <p className="highlight-text">
              You are truly the greatest gift God gave me.
            </p>
          </div>
          <button className="elegant-button" onClick={onNext}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChristmasSection;
