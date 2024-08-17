import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Marque() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      '#scrollText',
      { x: '0%', force3D: true }, // Start position (offscreen to the right)
      {
        x: '-45%', // End position (offscreen to the left)
        scrollTrigger: {
          trigger: containerRef.current, // Trigger based on the container
          start:window.innerWidth < 768 ? 'top 75%' : 'top 50%', // Animation starts when the bottom of the container reaches the bottom of the viewport
          end: 'bottom top', // Animation ends when the bottom of the container reaches the top of the viewport
          scrub: 2, // Smooth scrolling animation
        },
      }
    );
  }, []);

  return (
    <div className="container max-w-[1440px] mx-auto background-white marque-container background-white rounded-t-2xl mt-10" ref={containerRef}>
      <div className="background-darkGreen">
        <div className="w-full md:px-12 px-4 md:py-16 pt-8 pb-8 overflow-hidden">
          <h1 id='scrollText' className="font-coolCon leading-[.8] text-[25vw] font-[600] tracking-wide flex flex-col text-nowrap uppercase text-white pl-10">
            I am developer
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Marque