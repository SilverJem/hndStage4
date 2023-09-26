import React from 'react'
import avatar from "../images/avatar.png"
import Navbar from './Navbar'
import './Hero.css'
import TypingEffect from './TypingEffect'
const Hero = () => {
  return (
    <div className='hero'>
        <Navbar/>
        <div className='content'>
        <div className='left'>
       <h2>Hi There, I'm</h2>  

<h1>Aki <span>Jessica</span>  Ewomazino</h1>
<i>(I also go by J, Jess, Mazino, Zino, Sandra*)</i>
<p>I&apos;m a <span><TypingEffect/></span></p>
        </div>
        <div className='right'>
        <img src={avatar}/>

        </div>

        </div>

    </div>
  )
}

export default Hero