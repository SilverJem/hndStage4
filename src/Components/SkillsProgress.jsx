import React, { useEffect, useRef, useState } from 'react';
import './SkillsProgress.css';

function SkillsProgress({ skill, value }) {
  const progressRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const options = {
      threshold: 0.5, // When 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
          observer.unobserve(entry.target); // Stop observing once animation has played
        }
      });
    }, options);

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  return (
    <div className={`skill-progress ${isAnimated ? 'animated' : ''}`} ref={progressRef}>
      <div className="skill-name">{skill}</div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: isAnimated ? `${value}%` : '0%' }}></div>
      </div>
    </div>
  );
}

export default SkillsProgress;
