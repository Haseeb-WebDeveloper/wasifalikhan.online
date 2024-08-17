import {  useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Button1() {
    const [homeArrowHover, sethomeArrowHover] = useState(false);
  return (
    <a href="#contact"
    onMouseEnter={() => sethomeArrowHover(true)} 
    onMouseLeave={() => sethomeArrowHover(false)}
    className={`z-[50] relative overflow-hidden transform ease-linear duration-200 rounded-[18px] p-[6px] border border-gray-500 font-medium 1 ${homeArrowHover ? 'text-reverse-bright ' : 'text-bright'}`}>
    <FaArrowRight className={`text-lg ease-linear duration-100 ${homeArrowHover ? 'rotate-[-0deg]' : 'rotate-[-45deg]'}`}/>
    <div className={`z-[-1] absolute transform ease-linear duration-200 background-dark top-0 left-0 ${homeArrowHover ? 'h-[100px] w-[200px]' : 'h-[0px] w-[0px]'}`}></div>
    </a>
  )
}

export default Button1