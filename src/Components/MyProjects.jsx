import React from 'react';
import './ProjectsStyles.css';

// Import your image assets
import img1 from '../project/Screenshot (739).png';
import img2 from '../project/Screenshot (740).png';
import img3 from '../project/Screenshot (741).png';
import img4 from '../project/Screenshot (742).png';
import img5 from '../project/Screenshot (743).png';
import img7 from '../project/Screenshot (745).png';
import img9 from '../project/Screenshot (747).png';
import img10 from '../project/Screenshot (748).png';
import img11 from '../project/Screenshot (749).png';
import img12 from '../project/Screenshot (750).png';
import img13 from '../project/Screenshot (751).png';


const projectData = [
  { imgSrc: img1, title: 'A Weather App built using API',  text:"Coming Soon..."},
  { imgSrc: img2, title: 'A URL Shortener built using API', text:"Coming Soon..." },
  { imgSrc: img3, title: 'A Website For a Bakery',link:"https://toothsweet.000webhostapp.com/", text:"Check it out" },
  { imgSrc: img4, title: 'Simple Calculator',link:"https://jess-zino/goit-markup-hw-01.github.io", text:"Coming Soon..."},
  { imgSrc: img13, title: 'Trading School Website',link:"https://tradewithmarsfx.surge.sh/", text:"Check it out" },
  { imgSrc: img9, title: 'Trading School Website Rebuilt',link:"https://tradewithmars.vercel.app/", text:"Check it out" },
  { imgSrc: img10, title: 'Advice Generator built using API',link:"https://advice-gen-delta.vercel.app/", text:"Check it out" },
  { imgSrc: img7, title: 'Restaurant Website',link:"https://github.com/Jess-Zino/landing_page", text:"Check it out" },
    
  { imgSrc: img11, title: 'Drag and Drop Gallery built using an API',link:"https://hng-stage3-nine.vercel.app/", text:"Check it out" },
  { imgSrc: img12, title: 'Movie Gallery using an API',link:"https://hng-stage2-ashy.vercel.app/", text:"Check it out"},
];

const MyProjects = () => {
  return (
    <section className="choose" id="portfolio">
      <h2>My Projects So Far</h2>
      <div className="cards">
        {projectData.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.imgSrc} alt={`Project ${index + 1}`} />
            <h3>{project.title}</h3>
           <p> <a href={project.link}>{project.text}</a></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyProjects;
