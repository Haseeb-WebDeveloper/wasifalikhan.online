import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImgEffect from "../ImgEffect";
import TextReveal from "../TextReveal";

function About() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const scrollAnim = gsap.to(".container", {
            yPercent: window.innerWidth < 768 ? -20 : -40, // Reduced yPercent for smoother animation
            ease: "none",
            scrollTrigger: {
                trigger: ".container",
                start: "top center", // Start when the top of the container is at the center of the viewport
                end: "bottom top", // End when the bottom of the container hits the top of the viewport
                scrub: 0.5, // Reduced scrub for smoother scrolling
                invalidateOnRefresh: true, // Ensure smooth experience on resize
            }
        });

        // Cleanup on unmount to prevent memory leaks
        return () => {
            scrollAnim.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []); // Empty dependency array ensures this runs once after the component mounts

    return (
        <>
            <div id='about' className="container rounded-t-[12px] max-w-[1440px] mx-auto md:px-12 px-4 background-white">
                <div className="md:py-20 py-10 flex flex-col md:flex-row gap-10 justify-between items-top mt-4">
                    <div id="text" className="flex flex-col justify-between gap-10">
                        <TextReveal />
                    </div>
                    <div id="img" className="md:w-1/2 h-[100%]">
                        <ImgEffect />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
