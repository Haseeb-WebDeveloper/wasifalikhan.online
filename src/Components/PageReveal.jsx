import { useEffect, useRef } from 'react';

function PageReveal() {


    

    const h2Ref = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        if (h2Ref.current && imgRef.current) {
            imgRef.current.style.height = `${h2Ref.current.offsetHeight}px`;
        }
    }, []);

    return (
        <div className='border-2 p-40 m-20 rounded-md mx-auto h-[100vh] w-[100vw] scale-100 text-bright font-coolCon relative md:mt-[10%] mt-[30%] flex flex-col gap-3'>
            <div className='absolute top-10 left-10'>
            <div>
                <h2 ref={h2Ref} className='homeText leading-[.74] m-0 p-0 text-[65px] lg:text-[120px] font-[900] tracking-wide flex flex-col overflow-hidden'>WE CREATE</h2>
            </div>
            <div className="flex items-center gap-2 w-fit">
                <div className="relative  flex items-center rounded-xl  ">
                    <img
                        ref={imgRef}
                        className="object-cover leading-[.7] object-center rounded-md  "
                        src="https://www.haseebkhan.online/imges/haseeb.webp"
                        alt=""
                    />
                </div>
                <h2 className='homeText leading-[.74] text-[65px] lg:text-[120px] font-[900] tracking-wide flex flex-col overflow-hidden'>EYE-OPENING</h2>
            </div>
            <div>
                <h2 className='homeText leading-[.74] m-0 p-0 text-[65px] lg:text-[120px] font-[900] tracking-wide flex flex-col overflow-hidden'>PRESENTATIONS</h2>
            </div>
            </div>
            <div>
            <h3
            id="text" className="absolute  bottom-3 right-10  foundersMedium text-[40px] md:text-[80px] leading-[.9] tracking-tight">100%</h3>
            </div>
        </div>
    );
}

export default PageReveal;
