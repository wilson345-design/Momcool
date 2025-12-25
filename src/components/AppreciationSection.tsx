import { Heart } from 'lucide-react';

interface AppreciationSectionProps {
  onNext: () => void;
}

function AppreciationSection({ onNext }: AppreciationSectionProps) {
  const messages = [
    'Thank you for never giving up on me',
    'Thank you for choosing me every day',
    'Your sacrifices built my future',
    'Your love shaped who I am',
    'You are my greatest blessing'
  ];

  return (
    <div className="section appreciation-section">
      <div className="content-wrapper">
        <h2 className="section-heading">My Heart's Gratitude</h2>
        <div className="messages-container">
          {messages.map((message, index) => (
            <div
              key={index}
              className="appreciation-message pulse-glow"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <Heart className="message-heart" fill="currentColor" />
              <p>{message}</p>
            </div>
          ))}
        </div>
        <button className="elegant-button" onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default AppreciationSection;
