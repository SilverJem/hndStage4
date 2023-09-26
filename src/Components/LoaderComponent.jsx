import { useEffect, useState } from 'react';
import './Loader.css';

function LoaderComponent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loaders loading for 3 seconds
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);

  return (
    <div className={`loader-container ${isLoading ? 'loading' : 'loaded'}`}>
      <div className="circle-container">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
      </div>
      <div className="purple-page">
        <h1 className={`transparent-text ${isLoading ? 'fade-out' : 'fade-in'}`}>
          Welcome to my digital realm!
        </h1>
        <h2 className={`fade-in-delay ${isLoading ? 'fade-out' : 'fade-in'}`}>
          Thanks for stopping by my online portfolio.
        </h2>
        <p className={`fade-in-delay ${isLoading ? 'fade-out' : 'fade-in'}`}>
          I'm eager to team up with you — let's create some magic together!
        </p>
      </div>
    </div>
  );
}

export default LoaderComponent;
