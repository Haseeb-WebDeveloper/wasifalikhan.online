import { useRef, useState } from "react";
import PropTypes from 'prop-types'; 

function Button3({ Upwork }) {
    const btnRef = useRef(null);
    const [hover, setHover] = useState(false);

    return (
        <a href={Upwork} target="_blank" className="relative "> 
            <button 
                ref={btnRef}  
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={`button3 relative z-50 overflow-hidden md:w-36 md:h-12 w-32 h-10 rounded-lg background-darkGreen  font-suit`}
            >
                
                <p className={`transform ease-in-out duration-700 absolute left-0 w-32 h-10 md:w-36 md:h-12 flex items-center justify-center text-reverse-bright text-lg ${hover ? "top-[-100%]" : "top-[0]"}`}>
                    Reach out
                </p>
                <p className={`transform ease-in-out duration-700 absolute left-0 md:w-36 md:h-12 w-32 h-10 flex items-center justify-center text-reverse-bright text-lg ${hover ? "top-[0]" : "top-[100%]"}`}>
                    Reach out
                </p>
            </button>
            <div id="overlay" className="w-[100%] h-[100%] absolute top-0 left-0  z-40"></div>
        </a>
    );
}

// Add prop types validation
Button3.propTypes = {
    Upwork: PropTypes.string.isRequired, 
};

export default Button3;