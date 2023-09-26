import './about.css'
import Lottie from 'react-lottie-player'
import whatsapp from '../images/whatsapp.json'
import instagram from '../images/instagram.json'
import telegram from '../images/telegram.json'
const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
        <div className="social-links">
            <a href="whatsapp://send?phone=+2349036246902" target="_blank" rel="noopener noreferrer">
            <Lottie play loop animationData={whatsapp} style={{width:"60%"}}/>
            </a>
            <a href="https://www.instagram.com/jess_aki_zino/" target="_blank" rel="noopener noreferrer">
            <Lottie play loop animationData={instagram} style={{width:"60%"}}/>
            </a>
            <a href="https://t.me/itz_zino" target="_blank" rel="noopener noreferrer">
            <Lottie play loop animationData={telegram} style={{width:"100%"}}/>
            </a>

        </div>
        <p className='copyright'>&copy; AkiJessicaE</p>
    </div>
</footer>

  )
}

export default Footer
