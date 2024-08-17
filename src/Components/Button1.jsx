import { useRef, useState } from "react";

function Button1() {
    const [homeBtnHover, setHomeBtnHover] = useState(false);
    const buttonRef = useRef(null);
  return (
    <button 
    ref={buttonRef} 
    onMouseEnter={() => setHomeBtnHover(true)} 
    onMouseLeave={() => setHomeBtnHover(false)}
    className={`z-[1] ${homeBtnHover ? 'text-reverse-bright ' : 'text-bright'}z-[50] w-auto relative overflow-hidden transform ease-linear duration-200 rounded-[18px] px-3 py-1 border-[1.2px] border-gray-500 font-medium uppercase text-sm`}
    >
      <span className="text-md">Start the Project</span>
      <div className={`z-[-1] absolute transform ease-linear duration-200 background-dark ${homeBtnHover ? ' w-[300px] h-[100px]' : ' w-[0px] h-[0px]'} top-0 left-0`}></div>
    </button>
  )
}

export default Button1