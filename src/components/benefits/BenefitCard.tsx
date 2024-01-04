import { BenefitType, SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";


export default function BenefitCard({icon, title,description,setSelectedPage}: BenefitType) {
  return (
    <div className="px-4 py-16 border-2 border-gray-100 rounded-md text-center mt-4">
        <div className="flex flex-col items-center justify-between gap-2">
            <div className="border-2 border-gray-100 rounded-full bg-primary-100 p-4 mb-2">{icon}</div>
            <h5 className="text-md font-semibold">{title}</h5>
            <p className="my-1">{description}</p>
            <AnchorLink
              className="text-primary-500 text-sm font-bold underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Contactus)}
              href={`#${SelectedPage.Contactus}`}
            >
              <p>Learn More </p>
            </AnchorLink>
        </div>
    </div>
  )
}