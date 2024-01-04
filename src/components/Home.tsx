import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";

import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponserForbes from "@/assets/SponsorForbes.png";
import SponserFortune from "@/assets/SponsorFortune.png";
import SponserRedBull from "@/assets/SponsorRedBull.png";

import AnchorLink from "react-anchor-link-smooth-scroll";
import ActionButton from "@/shared/ActionButton";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  
  return (
    <section id="home" className="bg-gray-20 gap-16 py-20 md:h-full md:pb-0 ">
      {/* Image and Header */}
      <motion.div
      onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
      className="md:flex md:h-5/6 mx-auto w-5/6 items-center justify-between">
        {/* Header */}
        <div
        className="z-10 md:mt-32 mt-20 md:basis-3/5">
          <motion.div 
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{once:true, amount:0.5}}
          transition={{duration:1}}
          variants={{
            hidden:{opacity:0, x:-100},
            visible:{opacity:1, x:0},
          }}
          className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext ">
                <img src={HomePageText} alt="home page text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          <motion.div 
           initial={"hidden"}
           whileInView={"visible"}
           viewport={{once:true, amount:0.5}}
           transition={{delay: 0.2,duration:1.5}}
           variants={{
             hidden:{opacity:0, x:-150},
             visible:{opacity:1, x:0},
           }}
          className="mt-8 flex justify-start gap-8 items-baseline">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-primary-500 text-sm font-bold underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Contactus)}
              href={`#${SelectedPage.Contactus}`}
            >
              <p>Learn More </p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* Image */}
        <div className="md:z-10 flex basis-3/5 md:ml-32 md:justify-items-end justify-center md:mt-8">
          <img src={HomePageGraphic} alt="Home Page Graphic" />
        </div>
      </motion.div>
      {/* Sponsers */}
      {isAboveMediumScreen && (
        <div className="bg-primary-100 py-12 w-full">
             <div className="w-5/6 mx-auto flex justify-start items-center gap-32">
                <img src={SponserRedBull} alt="Sponser Redbull" />
                <img src={SponserForbes} alt="Sponser Forbes" />
                <img src={SponserFortune} alt="Sponser Fortune" />
             </div>   
        </div>
      )}
    </section>
  );
}
