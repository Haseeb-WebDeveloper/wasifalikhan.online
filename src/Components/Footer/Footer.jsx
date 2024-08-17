import FooterCard from "./FooterCard"
import FooterImgCard from "./FooterImgCard"
import FooterTopBox from "./FooterTopBox"

function Footer() {
    return (
        <>
            <div className="max-w-[1440px] mx-auto md:px-12 px-4 md:py-20 py-10  background-dark">
                <FooterTopBox />

                <div className=" mt-4 flex flex-col md:flex-row justify-between gap-4 rounded-lg">
                    <FooterImgCard/>
                   <FooterCard/>
                </div>

            </div>
        </>
    )
}

export default Footer