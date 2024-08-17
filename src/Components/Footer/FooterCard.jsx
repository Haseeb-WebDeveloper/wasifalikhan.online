
function FooterCard() {

    return (
        <div className="w-full flex flex-col justify-between items-start md:px-8 px-4 md:py-6 py-4  bg-[#2f2f2f] ">
            <div>
                {/* <a href="" className="flex justify-between items-center gap-4 rounded-lg background-dark px-6 py-2 text-bright  text-white border border-zinc-800">
                <img className="z object-cover max-w-[14px] max-h-full " src="/Fluxtile.png" alt="" />
                <h3 id="text" className="font-suit text-[14px] uppercase">Fluxtile</h3>
            </a> */}
            </div>
            <div className="flex flex-col gap-y-8 w-full ">
                {/* <div className="flex flex-wrap gap-x-6 gap-y-4  text-reverse-bright">
                    <a href="#services" id="text" className="font-suit text-[12px] uppercase">services</a>
                    <a href="#Pricing" id="text" className="font-suit text-[12px] uppercase">Pricing</a>
                    <a href="#Insight" id="text" className="font-suit text-[12px] uppercase">Insight</a>
                    <a href="#Contact" id="text" className="font-suit text-[12px] uppercase">Contact</a>
                </div> */}
                <div className="flex justify-between items-center w-full z-[50] bg-transparent">
                    <div className=" ">
                        <a href="#home" id="text" className=" p-reverseColor font-normal text-[12px] tracking-wider">Wasif Ali Khan ©️ 2024
                        </a>
                    </div>
                    {/* <div>
                        <h3 id="text" className="p-reverseColor font-suit text-[12px] uppercase">Pricicy</h3>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default FooterCard