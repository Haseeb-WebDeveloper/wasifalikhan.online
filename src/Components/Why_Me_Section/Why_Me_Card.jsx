import gsap from "gsap";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Why_Me_Card({ whyUsData, cursorRef }) {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [showImg, setShowImg] = useState(false);

  useEffect(() => {
    const cursorAnimation = (enter) => {
      const properties = enter
        ? {
          width: 60,
          height: 60,
          duration: 0.3,
          paddingTop: 20,
          textContent: "Click",
        }
        : {
          width: 16,
          height: 16,
          duration: 0.3,
          paddingTop: 0,
          textContent: "",
        };

      gsap.to(cursorRef.current, properties);
    };

    cursorAnimation(mouseEnter);
  }, [mouseEnter, cursorRef]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup-img")) {
      setShowImg(false);
    }
  };

  return (
    <>
      <div
        className={`${showImg ? "fixed" : "hidden"
          } popup-img inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[200]`}
        onClick={handleOverlayClick}
      >
        <div className="relative">
          <figure className="w-full md:p-[30%] p-[10%]">
            <img
              className=" object-cover rounded-md shadow-md"
              src={whyUsData.img}
              alt={whyUsData.title + "image"}
            />
          </figure>
        </div>
      </div>

      <div
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
        onClick={() => setShowImg(!showImg)}
        id="cardDiv"
        className="WhyUsCard  relative"
      >
        <div id="col-1" className="flex justify-between items-center py-4">
          <h3 id="text" className="text-white font-suit text-[30px] leading-[1.3] tracking-tighter">{whyUsData.title}</h3>
          <div className="p-1 rounded-md background-lightGreen">
            <img
              src={whyUsData.icon}
              alt={whyUsData.title + " icon"}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div
          id="line"
          className="w-full h-[2px] rounded-e-md background-white"
        ></div>
        <div
          id="paragraph"
          className="pt-4 text-reverse-light text-sm leading-5 tracking-wide"
        >
          <p>{whyUsData.description}</p>
        </div>

        <div
          id="overlay"
          className="w-[100%] h-[100%] absolute top-0 left-0  z-40"
        ></div>
      </div>
    </>
  );
}

Why_Me_Card.propTypes = {
  whyUsData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  cursorRef: PropTypes.object.isRequired,
};

export default Why_Me_Card;
