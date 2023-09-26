import React from 'react'
import myavatar from "../images/about.png"
import './about.css'
const About = () => {
  return (
    <div className="about" id="about">
      <div className='pic'>
      <img src={myavatar}/>
      </div>

     <div className='story'>
      <h1>About Me</h1>
      <p>I am a passionate IT specialist pursuing a Bachelor of Engineering in Computer Engineering at Covenant University. My technology journey began at CoderDojo Maitama, where I was inspired to explore both software and hardware technologies. With over five years of experience in frontend and backend development, I have a strong foundation in crafting web, application, and software solutions that have received high user ratings. My unwavering commitment to excellence drives me to deliver quality work.</p>

<p>My enthusiasm isn't limited to software; I have a deep appreciation for hardware and enjoy tinkering with electronic components. I bring a versatile set of skills and knowledge to the table, ready to contribute to diverse projects and tackle challenges head-on. My passion for technology, combined with an insatiable desire for learning, fuels my journey as a Frontend Engineer and Computer Engineering student, where I aim to bring innovation, creativity, and a comprehensive understanding of technology to every endeavor.</p>
     </div>
    </div>
  )
}

export default About