import FooterButton from "../FooterButton"


function FooterTopBox() {
    const Upwork = "https://www.upwork.com/freelancers/wasifwordpresswebsitedeveloper"

    return (
        <div id="callAction" className="flex flex-col md:flex-row justify-between md:items-center gap-6 md:gap-0 md:px-8 px-4 md:py-6 py-4  bg-[#2f2f2f] rounded-lg">
            <h3 id="text" className="text-white font-suit text-[20px] md:text-[25px] leading-[1.3] tracking-tight  ">Excited? Us Too. Let's  Moving</h3>
            <FooterButton  Upwork={Upwork} />
        </div>
    )
}

export default FooterTopBox