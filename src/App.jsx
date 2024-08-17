import { useState, useEffect, useRef } from 'react';
import './App.css'
import Navbar from './Components/Home_Section/Navbar.jsx'
import HomeSection from './Components/Home_Section/HomeSection.jsx';
import Marque from './Components/Home_Section/Marque.jsx';
import WhyMe from './Components/Why_Me_Section/WhyMe.jsx'
import Cursor from './Components/Cursor.jsx';
import CallToAction from './Components/Contact_Section/CallToAction.jsx';
import About from './Components/About_Section/About.jsx';
import PortfolioSection from './Components/Projects_Section/PortfolioSection.jsx';
import FooterStye2 from './Components/Footer/FooterStyleNo2/FooterStye2.jsx';


function App() {

  //For mouse Position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      
      <div id='mainContent' className='background-white z-50'>
        <Cursor position={mousePosition} ref={cursorRef} />
        <Navbar />
        <HomeSection />
        <Marque />
        <About/>
        <WhyMe cursorRef={cursorRef} />
        <PortfolioSection/>
        <CallToAction/>
        <FooterStye2/>
      </div>
    </>
  )
}

export default App
