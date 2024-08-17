import { useEffect, forwardRef } from 'react'
import gsap from 'gsap'
import PropTypes from 'prop-types'



const Cursor = forwardRef(({ position }, ref) => {
  useEffect(() => {
    gsap.to(ref.current, {
      left: position.x - 7,
      top: position.y - 7,
      duration: 1,
      ease: "power3.out",
    });
  }, [position, ref]);

  return (
    <div ref={ref} className="z-[40] fixed w-4 h-4 background-lightGreen shadow-sm rounded-full cursor text-bright text-center p-2 font-suit text-[20px] leading-[1.3] tracking-tighter "></div>
  )
});

Cursor.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

Cursor.displayName = 'Cursor';

export default Cursor
