import Logo from "@/assets/Logo.png";
import NavLink from "./NavLink";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  //   const flexBetween = "flex justify-between items-center";
const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);



  return (
    <nav>
      {/* <div className={`row-flex-style fixed top-0 z-30 w-full py-6 ${!isAboveMediumScreen ? "bg-primary-100" : ""}`}> */}
      <div className={`${isTopOfPage ? "" : "bg-primary-100 drop-shadow-sm"} row-flex-style fixed top-0 z-30 w-full py-6`}>
        <div className="row-flex-style mx-auto w-5/6">
          <div className="row-flex-style w-full gap-16">
            {/* Left Side */}
            <img alt="logo" src={Logo} />
            {/* Right Side */}
           {isAboveMediumScreen ? (
           <div className="row-flex-style w-full">
              <ul className="row-flex-style gap-8">
                <NavLink
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <NavLink
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <NavLink
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <NavLink
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </ul>
              <div className="row-flex-style gap-8">
                <a href="#">Sign In</a>
                <ActionButton setSelectedPage={setSelectedPage} >Become a member</ActionButton>
              </div>
            </div>):(
              <button className="rounded-full bg-secondary-500 p-2" onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-6 w-6 text-white"/>
              </button>
            )}
             
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
       {!isAboveMediumScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 bg-primary-100 h-full w-3/5 drop-shadow-xl z-40">
         <div className="flex justify-end p-12">
          {/* Close Btn */}
          <button
          onClick={()=> setIsMenuToggled(!isMenuToggled)}
          >
            <XMarkIcon className="text-gray-400 w-6 h-6"/>
            </button>
          </div>
          {/* Menu Item */}
          <ul className="flex flex-col text-2xl font-semibold gap-10 p-12 ml-12">
            <NavLink
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
            <NavLink
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
            <NavLink
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
            <NavLink
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </ul>
        </div>
       )}
    </nav>
  );
};

export default Navbar;
