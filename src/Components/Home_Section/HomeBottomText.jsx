import Button1 from "../Button1";
import Button2 from "../Button2";
function HomeBottomText() {

  return (
    <div className='background-white absolute md:bottom-4 bottom-8 w-full left-0 '>
      <div className={`w-full h-[1px] mb-4 `}></div>
      <div className="pt-4 pb-8 md:pt-0 md:pb-12 ">
        <div className='grid md:grid-cols-2 gap-6 items-center justify-between md:px-12 px-4 w-full'>
          <div className="">
            <p className='p-color font-normal'>For public and private companies</p>
          </div>
          
          {/* <div className="">
            <p className='p-color font-normal'>From the first pitch to IPO</p>
          </div> */}

          <div className='relative overflow-hidden flex md:justify-end gap-2 items-center '>
            <Button1/>
            <Button2/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBottomText;
