import { useState } from 'react';
import './Navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <div className="logo">
       
        <span className="company-name">Ma<span>zino</span></span>
      </div>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skils">My SKillset</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contactus">Contact Me</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
