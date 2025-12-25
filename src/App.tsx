import { useState, useEffect } from 'react';
import WelcomeSection from './components/WelcomeSection';
import LetterSection from './components/LetterSection';
import StrengthSection from './components/StrengthSection';
import AppreciationSection from './components/AppreciationSection';
import ChristmasSection from './components/ChristmasSection';
import FinalSection from './components/FinalSection';
import Snowfall from './components/Snowfall';
import './styles/App.css';

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2024/11/26/audio_8e76b9e2c6.mp3');
    audio.volume = 0.25;
    audio.loop = true;
    audio.play().catch(() => {});
    return () => {
      audio.pause();
    };
  }, []);

  const handleNext = () => {
    setCurrentSection(currentSection + 1);
  };

  const sections = [
    <WelcomeSection key={0} onNext={handleNext} />,
    <LetterSection key={1} onNext={handleNext} />,
    <StrengthSection key={2} onNext={handleNext} />,
    <AppreciationSection key={3} onNext={handleNext} />,
    <ChristmasSection key={4} onNext={handleNext} />,
    <FinalSection key={5} />
  ];

  return (
    <>
      <Snowfall />
      <div className="app-container">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`section-container ${currentSection === index ? 'active' : ''} ${currentSection > index ? 'exited' : ''}`}
            onClick={currentSection === index ? handleNext : undefined}
          >
            {section}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
