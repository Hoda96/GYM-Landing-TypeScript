import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    children: React.ReactNode;
  };

const ActionButton = ({setSelectedPage,children }: Props) => {
  return (
    <AnchorLink 
    className="rounded-md bg-secondary-500 py-2 px-10 hover:bg-primary-500 hover:text-white transition duration-300" onClick={()=>setSelectedPage(SelectedPage.Contactus)}
    href={`#${SelectedPage.Contactus}`}
    >{children}</AnchorLink>
  )
}

export default ActionButton;