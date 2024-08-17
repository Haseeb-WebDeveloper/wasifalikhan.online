import PortfolioCard from "../PortfolioCard"
// import PortfolioCard2 from "../PortfolioCard2"
const PortfolioData = [
  {
    PortfolioTitle : "Business website",
    PortfolioImg: "/Business.webp",
    PortfolioYear: ""
  },
  {
    PortfolioTitle : "E-Commerce website",
    PortfolioImg: "/ECommerce.webp",
    PortfolioYear: ""
  },
  {
    PortfolioTitle : "Gym website",
    PortfolioImg: "/Gym.webp",
    PortfolioYear: ""
  },
  {
    PortfolioTitle : "Coffee website",
    PortfolioImg: "/Coffee.webp",
    PortfolioYear: ""
  },
  {
    PortfolioTitle : "Law website",
    PortfolioImg: "/Law.webp",
    PortfolioYear: ""
  },
  {
    PortfolioTitle : "Charity website",
    PortfolioImg: "/Charity.webp",
    PortfolioYear: ""
  },
  {
    PortfolioTitle : "Car website",
    PortfolioImg: "/car.webp",
    PortfolioYear: ""
  },
]


function PortfolioSection() {
    return (
        <>
        <div className=" max-w-[1440px] mx-auto  md:px-12 px-4 md:py-32 py-20 background-white">
        <h1  className="md:px-[100px]  text-darkGreen font-coolCon leading-[1]  font-[600] tracking-wide flex flex-col uppercase text-[65px] lg:text-[120px] ">Projects</h1>
            
             <div id="container" className="md:px-[100px]  mt-6   flex flex-col gap-3">
               {PortfolioData.map((item) => {
                return(
                  <PortfolioCard key={item.PortfolioTitle} PortfolioData={item}/>
                )
               })}
             </div>
        </div>
        </>
    )
}

export default PortfolioSection