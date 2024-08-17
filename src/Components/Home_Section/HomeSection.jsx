import HomeText from "./HomeText"
import HomeBottomText from "./HomeBottomText"
export default function HomeSection() {
  return (
    <>
        <section id="home" className="relative max-w-[1440px] mx-auto   mainSection section background-white md:px-12 px-4 flex flex-col min-h-[95vh]  ">
            <HomeText />
            <HomeBottomText />
        </section>
    </>
  )
}
