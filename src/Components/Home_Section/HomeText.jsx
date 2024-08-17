import { useEffect, useRef } from 'react';

function HomeText() {


    const h2Ref = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        if (h2Ref.current && imgRef.current) {
            imgRef.current.style.height = `${h2Ref.current.offsetHeight}px`;
        }
    }, []);

    return (
        <div className='text-bright font-coolCon relative md:mt-[10%] mt-[30%] flex flex-col gap-3'>

            <div>
                <h2 ref={h2Ref} className='homeText leading-[.74] m-0 p-0 text-[55px] lg:text-[120px] font-[900] tracking-wide flex flex-col overflow-hidden uppercase'>Websites That</h2>
            </div>

            <div className="flex items-center gap-2 w-fit">
                <div className="relative  flex items-center rounded-xl  ">
                    <img
                        ref={imgRef}
                        className="object-cover leading-[.7] object-center rounded-md  "
                        src="/Wasif_Ali_Khan_HomeImg.png"
                        alt=""
                    />
                </div>
                <h2 className='homeText leading-[.74] text-[55px] lg:text-[120px] font-[900] tracking-wide flex flex-col overflow-hidden uppercase'>That Boost</h2>
            </div>
            <div>
                <h2 className='homeText leading-[.74] m-0 p-0 text-[55px] lg:text-[120px] font-[900] tracking-wide flex flex-col overflow-hidden uppercase'>Leads and Sales</h2>
            </div>
        </div>
    );
}

export default HomeText;
