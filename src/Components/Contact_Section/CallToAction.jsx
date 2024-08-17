import Button3 from "../Button3"

function CallToAction() {

  const Upwork = "https://www.upwork.com/freelancers/wasifwordpresswebsitedeveloper"
  return (
    <>
        <div id="contact" className='max-w-[1440px] mx-auto  py-12 md:py-24 px-4 bg-white'>
          <div className="max-w-[900px]  flex flex-col gap-12 mx-auto  p-8 md:p-10  rounded-2xl background-lightestGreen">
            <div className="flex flex-col gap-2">
                <p className='font-[600] font-Manrope md:text-[30px] tracking-normal text-[14px] leading-[1.3] text-center'>If you’re a marketing agency owner, reach out to us, as we have a limited special offer for you!</p>
                <p className=' md:text-[20px] text-[14px]  text-center font-light'>(you’re gonna like it)</p>
            </div>
            <div className="mx-auto">
            <Button3 Upwork={Upwork}/>
            </div>
          
          </div>
        </div>
    </>
  )
}

export default CallToAction