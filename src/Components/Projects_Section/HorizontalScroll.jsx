// import React, { useEffect } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import 'locomotive-scroll/dist/locomotive-scroll.css';

// gsap.registerPlugin(ScrollTrigger);

// const HorizontalScroll = () => {
//     useEffect(() => {
//         // Initialize Locomotive Scroll with smooth scrolling enabled
//         const locoScroll = new LocomotiveScroll({
//             el: document.querySelector('#main-container'),
//             smooth: true
//         });

//         // Update ScrollTrigger when Locomotive Scroll updates (this keeps everything in sync)
//         locoScroll.on('scroll', ScrollTrigger.update);

//         // Link Locomotive Scroll with ScrollTrigger for seamless animations
//         ScrollTrigger.scrollerProxy('#main-container', {
//             scrollTop(value) {
//                 return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//             },
//             getBoundingClientRect() {
//                 return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//             },
//             pinType: document.querySelector('#main-container').style.transform ? 'transform' : 'fixed'
//         });

//         // Refresh ScrollTrigger and Locomotive Scroll whenever necessary
//         ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
//         ScrollTrigger.refresh();

//         // Animate the single box to scroll faster using GSAP
//         gsap.to('#box1', {
//             yPercent: -100, // Scroll faster by 100% of the element's height
//             ease: 'none',
//             scrollTrigger: {
//                 trigger: '#box1', // The element that triggers this animation
//                 start: 'top top', // Start when the top of the box hits the top of the viewport
//                 end: 'bottom top', // End when the bottom of the box hits the top of the viewport
//                 scrub: true, // Link the animation to the scroll position
//                 scroller: '#main-container', // Use the Locomotive Scroll container as the scroller
//             }
//         });
//     }, []);

//     return (
//         <div 
//             id="main-container" 
//             className="relative overflow-hidden h-[200vh]" // Tailwind CSS classes for main container
//         >
//             {/* Single box to animate */}
//             <div 
//                 id="box1" 
//                 className="h-screen bg-blue-800" // Tailwind CSS: Full screen height and background color
//             >
//                 {/* Content inside the box */}
//                 <h1 className="text-4xl text-center pt-20">Scroll Me Faster!</h1>
//             </div>
//         </div>
//     );
// };

// export default HorizontalScroll;
