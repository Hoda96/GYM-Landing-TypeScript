import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { SelectedPage } from "./shared/types";
import Home from "./components/Home";
import Benefits from "./components/benefits/Benefits";




function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
// Sticky Header
const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

useEffect(()=>{
  const handleScroll = ()=> {
    if(window.scrollY === 0){
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
    }
    else{
      setIsTopOfPage(false);
    }
  }
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll)
},[setSelectedPage])

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
    </div>
  );
}

export default App;
