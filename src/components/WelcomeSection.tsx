import { Heart, ChevronDown } from 'lucide-react';

interface WelcomeSectionProps {
  onNext: () => void;
}

function WelcomeSection({ onNext }: WelcomeSectionProps) {
  return (
    <div className="section welcome-section" onClick={onNext} style={{ cursor: 'pointer' }}>
      <div className="content-wrapper fade-in">
        <div className="glow-effect"></div>
        <h1 className="main-title">
          Merry Christmas Mum
          <Heart className="heart-icon" fill="currentColor" />
        </h1>
        <p className="subtitle">This is from my heart to yours</p>
        <div className="tap-hint">
          <p>Tap anywhere to continue</p>
          <ChevronDown className="chevron-icon" />
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
