import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function TextReveal() {
  useEffect(() => {
    // Apply GSAP animation to each word span with opacity and vertical movement
    gsap.fromTo(
      ".word",
      { opacity: 0, y: 20 }, // Initial state: hidden and slightly below
      {
        opacity: 1, y: 0, // Final state: fully visible and in place
        scrollTrigger: {
          trigger: "#text", // Element that triggers the animation
          start: "top 85%", 
          end: "top 20%", 
          scrub: 0.5, // Smooth animation on scroll
        },
        stagger: 0.1, // Delay between each word's animation
        duration: 0.5, 
        ease: "power2.out",
      }
    );
  }, []);

  // Text with each word wrapped in a span
  const text = "I am a web designer and developer who loves turning ideas into beautiful, functional websites. Creating websites isn’t just my job; it’s my passion. I enjoy making every project unique, just like a piece of art. I believe in clear, easy communication and always stay one step ahead to ensure everything runs smoothly. If you're looking for someone who cares about your vision and works hard to bring it to life, you’re in the right place. Let's create something amazing together!";

  return (
    <>
      <h3 id="text" className="max-w-[800px] font-suit text-[20px] md:text-[30px] leading-[1.3] tracking-tight">
        {text.split(" ").map((word, index) => (
          <span key={index} className="word" style={{ display: "inline-block", marginRight: "5px" }}>{word}</span>
        ))}
      </h3>
    </>
  );
}

export default TextReveal;
