import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { SelectedPage } from "./shared/types";




function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
// Sticky Header
const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

useEffect(()=>{
  const handleScroll = ()=> {
    if(window.screenY === 0){
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
      
    </div>
  );
}

export default App;
