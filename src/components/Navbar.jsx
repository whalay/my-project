import React, {useState} from "react";
import menu from "../assets/menu1.png";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import SideMenu from "./Sidemenu";

const Navbar = () => {
  const [showNav, setShownav] = useState(false);

  const navHandler = () =>{
    setShownav(showNav => (!showNav));
  }

  return (
    <div className="absolute top-0 left-0  m-5 ">
      <div className="flex justify-between md:justify-start gap-7">
        <div className="flex justify-between gap-5 px-2">
          <img src={menu} alt="" className="md:hidden" onClick={navHandler}/>
          <img src={logo} alt="" />
        </div>
      
        <div className="flex gap-3">
          <span>
            <img src={search} alt="" />
          </span>
          <input
            type="text"
            placeholder="search artist"
            className="rounded-lg bg-transparent hidden md:block"
          />
        </div>

       
      </div>
     <div className="fixed top-0 left-0 z-10 w-full">
     {showNav && <SideMenu navHandler={navHandler}/>}
     </div>
    </div>
  );
};

export default Navbar;
