import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/shared/types"
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponserForbes from "@/assets/SponsorForbes.png";
import SponserFortune from "@/assets/SponsorFortune.png";
import SponserRedBull from "@/assets/SponsorRedBull.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ActionButton from "@/shared/ActionButton";

type Props = {
    setSelectedPage: (value:SelectedPage)=> void
}

export default function Home({setSelectedPage}: Props) {
const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")

  return (
    <section id="home" 
    className="bg-gray-20 gap-16 py-20 md:h-full md:pb-0">
        {/* Image and Header */}
        <div>
            {/* Header */}
            <div>
             <div>
               <div>
                 <img src={HomePageText} alt="home page text"/>
               </div>
               <p>
               Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.. Get Your Dream Body Now.
               </p>
             </div>
            <div> 
            <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
            </ActionButton>
            <AnchorLink 
            className="text-primary-500 text-sm font-bold underline hover:text-secondary-500" 
            onClick={()=>setSelectedPage(SelectedPage.Contactus)}
            href={`#${SelectedPage.Contactus}`}>
                    <p>Learn More </p>
                </AnchorLink>
            </div>
            
            </div>
            {/* Image */}
            <div>
           <img src={HomePageGraphic} alt="Home Page Graphic"/>
            </div>
            {/* Sponsers */}
            {isAboveMediumScreen && 
           ( 
           <div className="bg-primary-300 flex justify-start gap-8">
            <div>
              <img src={SponserForbes} alt="Sponser Forbes"/>  
              <img src={SponserFortune} alt="Sponser Fortune"/>  
              <img src={SponserRedBull} alt="Sponser Redbull"/>  
            </div>
            </div>
            )
            }
        </div>
    </section>
  )
}