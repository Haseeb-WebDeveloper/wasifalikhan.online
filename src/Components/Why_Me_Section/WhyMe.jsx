import PropTypes from 'prop-types';
import Why_Me_Card from "./Why_Me_Card";
import Heading1 from './Heading1';

function WhyMe({ cursorRef }) {
  WhyMe.propTypes = {
    cursorRef: PropTypes.object.isRequired,
  };

  const Name = "Wasif"

  const whyUsData = [
    {
      title: "Proactive",
      description: "I always make sure that tasks are not only completed on time but are also anticipated and handled efficiently. I take initiative, solving problems before they arise, and consistently deliver high-quality results that drive projects forward.",
      icon: "https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4c21ba40744cc3dd7b44_mdi_globe.svg",
      img: ".//Proactive-wasif-ali-khan.png"
    },
    {
      title: "Excellent communication",
      description: "I can tell you like to stay in the loop, knowing exactly how your project is progressing. You want someone who keeps you informed, anticipates potential challenges, and helps you avoid unnecessary headaches. That’s where my communication skills come in—ensuring you’re always in the know, saving you time, money, and keeping things running smoothly.",
      icon: "https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4c21ba40744cc3dd7b44_mdi_globe.svg",
      img: ".//Excellent-communication.png"
    },
    {
      title: "Responsiveness",
      description: "Your needs come first, and I’m always ready to adapt to your requirements, making sure your requests are handled promptly and with care. With a strong understanding of the work, I deliver results that not only meet but exceed your expectations.",
      icon: "https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4c21ba40744cc3dd7b44_mdi_globe.svg",
      img: ".//Responsive.png"
    },
    {
      title: "Problem Solver",
      description: "When you hit a roadblock in your business, it can feel overwhelming, and you need someone who can take that burden off your shoulders. That’s where my problem-solving skills come in. I use my experience, expertise, and knowledge to tackle those issues head-on, so you can focus on what you do best while I handle the rest.",
      icon: "https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4c21ba40744cc3dd7b44_mdi_globe.svg",
      img: ".//Problem-Solver.png"
    },
    {
      title: "On-Time Delivery",
      description: "In the dance of our partnership, you can always rely on me to be your constant, arriving right on time. Just as the morning sun faithfully graces the horizon, I will ensure that your project is completed punctually, lighting up your vision without delay.",
      icon: "https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4c21ba40744cc3dd7b44_mdi_globe.svg",
      img: ".//On-Time-Delivery.png"
    },
    {
      title: "Prompt Responses",
      description: "When you're waiting for answers, every moment can feel like forever. You want someone who responds quickly, keeping you in the loop and easing your worries. That’s where my prompt responses come in—I’m always just a message away, ready to give you the clarity and peace of mind you deserve, making sure you never feel left in the dark.",
      icon: "https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4c21ba40744cc3dd7b44_mdi_globe.svg",
      img: ".//Prompt-Responses.png"
    }
  ];

  return (
    <>
      <div className='mt-[-180px] max-w-[1440px] mx-auto overflow-hidden md:px-12 px-4 background-dark md:py-16 py-12'>

          <div id="mainText">
            <Heading1 Name={Name}/>
          </div>

          <div className="mt-10 md:mt-20 grid gap-10 md:gap-20 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-between">
            {whyUsData.map((item) => {
              return (
                <Why_Me_Card key={item.title} whyUsData={item} cursorRef={cursorRef} />
              )
            })}
          </div>
      </div>
    </>
  );
}

export default WhyMe;
