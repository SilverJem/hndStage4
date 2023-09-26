import React from 'react'
import SkillsProgress from './SkillsProgress'
import Lottie from 'react-lottie-player'
import img1 from '../images/animation_ln0cxglt.json'
import img2 from '../images/animation_ln0cz5wg.json'
import img3 from '../images/animation_ln0etokt.json'
import img4 from '../images/animation_ln0czemp.json'
import img5 from '../images/animation_ln0fj8n7.json'

import img6 from '../images/animation_ln0d1ch6.json'
import img7 from '../images/animation_ln0d3sxm.json'
import img8 from '../images/animation_ln0d6ngx.json'
import img9 from '../images/animation_ln0ex4y5.json'
import img10 from '../images/animation_ln0ew4i3.json'



import './about.css'
const Skills = () => {
    const skills = [
        { skill: 'HTML', value: 90, text:"Highly skilled in HTML5, I adeptly apply contemporary methods to efficiently organize content. Through the strategic use of semantic tags, I guarantee that my websites are not only accessible and optimized for search engines but also well-prepared for the future. From the design and user navigation to the incorporation of multimedia elements, my proficiency in HTML empowers me to craft immersive and compelling user interfaces.", img:img1},
        { skill: 'CSS', value: 80, text:"Proficient in CSS, I harness the power of cascading style sheets to craft visually appealing and responsive web designs. Through careful selection of styles and selectors, I create consistent and user-friendly interfaces. My expertise in CSS enables me to implement intricate layouts, seamlessly integrate animations and transitions, and ensure cross-browser compatibility. I stay up-to-date with the latest CSS3 features, allowing me to achieve modern design trends and deliver captivating user experiences", img:img5},
        { skill: 'JavaScript', value: 70, text:"Proficient in JavaScript, I leverage its versatility and power to build dynamic and interactive web applications. My expertise includes crafting responsive user interfaces, implementing client-side logic, and ensuring smooth user experiences through seamless functionality.",img:img6 },
        { skill: 'ReactJS', value: 60, text:"Adept in React, I harness the power of this popular JavaScript library to develop interactive and responsive user interfaces. My proficiency includes state management, component composition, and integrating React into front-end ecosystems for creating engaging web applications.",img:img7 },
        { skill: 'NodeJS/ExpressJs', value: 40, text:"Experienced in Node.js, I leverage its non-blocking, event-driven architecture to build high-performance server-side applications. My skills encompass server development, package management, and integration with databases, enabling the creation of efficient and scalable web services.Adept in Express.js, I utilize this robust Node.js framework to develop scalable and performant back-end applications. My expertise includes RESTful API design, middleware implementation, and real-time communication, facilitating the creation of dynamic web solutions.",img:img9 },
        { skill: 'MongoDB', value: 60, text:"Experienced with MongoDB, I excel in creating scalable and efficient NoSQL database solutions. My skills extend to data modeling, query optimization, and integrating MongoDB into modern web applications, enabling seamless data management and retrieval.",img:img4 },
        { skill: 'SQL', value: 80,text:"Skilled in MySQL, I specialize in designing and maintaining relational databases that store and retrieve data efficiently. My expertise covers database schema design, query optimization, and ensuring data integrity, contributing to robust and reliable data-driven applications.",img:img2},
       
        { skill: 'Python', value: 40, text:" I harness its versatility and readability to develop robust software solutions. My expertise spans web development, data analysis, automation, and more, enabling me to create efficient and effective applications across diverse domains.",img:img3 },

        { skill: 'Figma', value: 40 , text:"Proficient in Figma, I utilize this collaborative design tool to bring creative visions to life. My skills encompass user interface and user experience (UI/UX) design, prototyping, and collaboration with development teams to ensure seamless design-to-development workflows..",img:img10},
        { skill: 'Adobe XD', value: 70, text:"Experienced in Adobe XD, I excel in creating visually stunning and user-friendly interfaces. My expertise includes interactive prototyping, user flow design, and collaboration with cross-functional teams to transform design concepts into captivating digital experiences.",img:img8},
      ];
  return (
    <div className='skills' id="skills">
      <h1>My Current Skillset</h1>
      <div className='content'>
    {skills.map((skillItem, index) => (
      <div className='skill' key={index}>
      <div className='animation'>
      <Lottie play loop animationData={skillItem.img} style={{width:"80%"}}/>
      </div>
        <SkillsProgress key={index} skill={skillItem.skill} value={skillItem.value} />
        <p>{skillItem.text}</p>
        </div>
      ))}
       </div>
          </div>
  )
}

export default Skills