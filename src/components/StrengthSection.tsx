interface StrengthSectionProps {
  onNext: () => void;
}

function StrengthSection({ onNext }: StrengthSectionProps) {
  const images = [
    {
      src: 'https://raw.githubusercontent.com/wilson345-design/Momcool/main/Screenshot_20251225_110707_Photos.jpg',
      caption: 'Your strength has been my foundation',
      description: 'Through every challenge, you stood tall and resilient'
    },
    {
      src: 'https://raw.githubusercontent.com/wilson345-design/Momcool/main/Screenshot_20201003-235059_Vault.jpg',
      caption: 'Every sacrifice built my future',
      description: 'From my first day of school to campus, you made it possible'
    }
  ];

  return (
    <div className="section strength-section">
      <div className="content-wrapper">
        <h2 className="section-heading">Your Strength & Sacrifice</h2>

        <div className="images-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="image-card fade-in-slow"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="image-wrapper">
                <img src={image.src} alt={image.caption} />
                <div className="image-overlay"></div>
              </div>

              <h3 className="image-caption">{image.caption}</h3>
              <p className="image-description">{image.description}</p>
            </div>
          ))}
        </div>

        <div className="text-highlight">
          <p>You worked tirelessly in your shop, ensuring I never missed a day of school.</p>
          <p>Your dedication transformed my life and gave me opportunities beyond measure.</p>
        </div>

        <button className="elegant-button" onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default StrengthSection;
