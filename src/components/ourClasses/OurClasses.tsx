import { SelectedPage } from "@/shared/types";
import {motion} from "framer-motion";
import Htitle from "@/shared/Htitle";
import { ClassType } from "react";

import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import Class from "./Class";

const classes : Array<ClassType> = [

  {
    title: "Ab core Classes",
    image: image1,
  },
  {
    title: "Yoga Classes",
    description: "Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.",
    image: image2,
  },
  {
    title: "Fitness Classes",
    description: "Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.",
    image: image3,
  },
  {
    title: "TRX Classes",
    description: "Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.",
    image: image4,
  },
  {
    title: "Cross Fit Classes",
    description: "Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.",
    image: image5,
  },
  {
    title: "Weight Training Classes",
    description: "Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.",
    image: image6,
  },
]


type Props = {setSelectedPage : (value: SelectedPage) => void;}

export default function OurClasses({setSelectedPage}: Props) {
  return (
    <section id="our classes" className="py-40 bg-primary-100 w-full">
        <motion.div 
        onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}
       
        >
          {/* Our Classes Header */}
          <motion.div 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false, amount: 0.5 }}
         transition={{ duration: 0.5 }}
         variants={{
           hidden: { opacity: 0, x: -50 },
           visible: { opacity: 1, x: 0 },
          }}
        className="mx-auto w-5/6">
          <Htitle>Our Classes</Htitle>
          <p className="my-4 text-sm">Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.</p>
        </motion.div>
        {/* Class Slider */}
          <div className="w-full h-96 overflow-x-auto overflow-y-hidden">
              <ul className="w-[2800px] whitespace-nowrap">        
                  {classes.map((item,index)=>(
                    <Class 
                    key={`${item.title}-${index}`}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    />
                  ))}
              </ul>
          </div>
        </motion.div>
    </section>
  )
}