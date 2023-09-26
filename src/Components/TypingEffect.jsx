import React, { useState, useEffect } from 'react';
import './TypingEffect.css';

function TypingEffect() {
  const phrases = [
    'Frontend Engineer',
    'Computer Engineering Student',
    'Tech Sis',
    'Manga Reader',
    'Christian',
    'Hardware enthusiast'
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedPhrase, setDisplayedPhrase] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex <= phrases[currentPhraseIndex].length) {
        setDisplayedPhrase(phrases[currentPhraseIndex].substring(0, charIndex));
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCharIndex(0);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 1500); // Delay before moving to the next phrase
      }
    }, 100); // Typing speed (adjust as needed)

    return () => clearInterval(typingInterval);
  }, [currentPhraseIndex, charIndex]);

  return (
    <span className='typing-effect-text'>
      {displayedPhrase}
    </span>
  );
}

export default TypingEffect;
