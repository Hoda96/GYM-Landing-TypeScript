import Htitle from "@/shared/Htitle";
import { BenefitType, SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import BenefitCard from "./BenefitCard";
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/16/solid";

type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}

const benefitCards: Array<BenefitType> =[
  {
    icon: <HomeModernIcon className="h-6 w-6"/>,
    title: "State of the Art Facilities",
    description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"/>,
    title: "100's of Diverse Classes",
    description: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"/>,
    title: "Expert and Pro Trainers",
    description: "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient."
  }
]


export default function Benefits({setSelectedPage}: Props) {
  return (
    <section id="benefits">
      <motion.div 
         onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
         className="mx-auto min-h-full w-5/6 py-20"
        >
          {/* Benefits Header */}
        <div className="md:my-5 md:w-3/5">
          <Htitle>MORE THAN JUST GYM.</Htitle>
          <p className="my-4 text-sm">We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
        </div>
      {/* Benefits Card */}
      <div className="md:flex justify-between items-center gap-8 my-5">
        {benefitCards.map((benefitcard: BenefitType)=>(
          <BenefitCard 
          key={benefitcard.title} 
          icon={benefitcard.icon} 
          title={benefitcard.title} 
          description={benefitcard.description}
          setSelectedPage={setSelectedPage}
          />
        ))}
      </div>
      </motion.div>
    </section>
  )
}