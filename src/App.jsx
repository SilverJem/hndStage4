import React, { useState, useEffect } from 'react';
import './App.css';
import About from './Components/About';
import Skills from './Components/Skills';
import Hero from './Components/Hero';
import MyProjects from './Components/MyProjects';
import Footer from './Components/Footer';
import Contact from './Components/Conatct';
import LoaderComponent from './Components/LoaderComponent';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate a delay for the loader (you can adjust the time as needed)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // After the delay, set loading to false to reveal the content
    }, 4000); // 3000 milliseconds (3 seconds)
  }, []);

  return (
    <>
      {loading ? (
        // Display the loader while loading is true
        <LoaderComponent />
      ) : (
        // When loading is false, reveal the content
        <>
          <Hero />
          <About />
          <Skills />
          <MyProjects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
