import { useState, useEffect } from 'react'
import { gsap } from 'gsap';

const Navbar = () => {
    const brandName = "Wasif Ali Khan"

    const navbarItems = [
        // { navLink: 'Services', url: '#services' },
        // { navLink: 'About', url: '#about' },
        { navLink: 'Contact', url: 'https://www.upwork.com/freelancers/wasifwordpresswebsitedeveloper' }
    ];

    const [open, setOpen] = useState(false);
  
    useEffect(() => {
        gsap.fromTo(
            "#navbarLink",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power2.out" }
        );
    }, []);

    return (
      <div className=' max-w-[1440px] mx-auto  z-[100] background-white'>
        <div className='md:flex md:px-12 px-4 justify-between pt-3 items-center'>
          <div className='flex items-center z-10'>
            <h2 id='navbarLink' className='foundersMedium text-[32px] pt-2 pb-0'>{brandName}</h2>
          </div>

          <div onClick={() => setOpen(!open)} className={`${open ? "z-[110]" : "z-[50]"} text-3xl absolute right-4  top-6 cursor-pointer md:hidden`}>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            
          </div>

          <div className={`z-[100] py-10 md:py-0 px-4 md:px-0 w-full  h-full background-white text-bright text-5xl md:text-[16px] flex flex-col md:flex-row gap-10 md:gap-4 fixed  md:static  md:items-end   left-0  md:w-auto  transition-all duration-500 ease-in-out font-medium  ${open ? 'top-[0%] left-0' : 'top-[-100%]  '}`}>
            <div className='navbarLinks mt-[30px] md:mt-[0px] flex flex-col md:flex-row gap-4'>
            {
              navbarItems.map((item, index) => (
                  <a key={index} href={item.url} id='navbarLink' className='text-gray-800 text-md md:text-[20px] font-suit text-[30px] leading-[1.3] tracking-tight'>{item.navLink}</a>
              ))
            }
            </div>
          </div>
        </div>
      </div>
    )
}

export default Navbar
