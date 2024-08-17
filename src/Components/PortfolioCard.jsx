import { useEffect, useState, useRef } from "react"
import gsap from "gsap"
import PropTypes from 'prop-types';

function PortfolioCard({PortfolioData}) {
    PortfolioCard.propTypes = {
        PortfolioData: PropTypes.shape({
            PortfolioTitle: PropTypes.string.isRequired,
            PortfolioYear: PropTypes.string,
            PortfolioImg: PropTypes.string.isRequired,
        }).isRequired,
    };

    const [hover, setHover] = useState(false)
    const imgRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({
            paused: true
        });

        tl.to(imgRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: "power1.out"
        });

        return () => {
            tl.kill();
        };
    }, []);

    const handleMouseEnter = () => {
        setHover(true)
        gsap.to(imgRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: "power1.out"
        });
    };

    const handleMouseLeave = () => {
        setHover(false)
        gsap.to(imgRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power1.out"
        });
    };

    return (
        <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
         className="bg-white relative flex justify-between py-6 rounded px-4  border  ">
            <div>
              <h4 id="text" className=" font-suit text-[20px] leading-[1.3] tracking-tighter">{PortfolioData.PortfolioTitle}</h4>
            </div>
            <div>
            {PortfolioData.PortfolioYear &&
              <h4 id="text" className="font-suit text-[20px] leading-[1.3] tracking-tighter">{PortfolioData.PortfolioYear}</h4>
            }
            </div>
            
           
            <figure ref={imgRef} className={`${hover ? "block " : "hidden"} portfolioImg z-[60] absolute top-[50%] left-[70%] -translate-x-1/2 -translate-y-1/2 `}>
                <img className=" min-w-[180px] min-h-[130px] rounded-md object-cover" src={PortfolioData.PortfolioImg} alt={PortfolioData.PortfolioTitle} />
            </figure>
            <div className="absolute w-full h-full  z-[50] top-0 left-0"></div>
        </div>
    )
}

export default PortfolioCard