import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as Home } from "../assets/sidebar/home.svg";
import home from "../assets/Home.png";
import music from "../assets/music-library.png";
import video from "../assets/video-horizontal.png";
import radio from "../assets/radio.png";
import frame from "../assets/sidebar/frame.png";

import "../index.css";

const SideNav = () => {
  return (
    <section>
      <div className="absolute left-5 hidden md:block pt-20 z-50">
        <ul className="flex flex-col justify-start items-center gap-10 bg-black rounded-2xl px-0 py-4">
          <li>
            <NavLink to="/home" className="fill-red-500 active">
              <Home className="fill-red-500"/>   
            </NavLink>
          </li>

          <li>
            <NavLink to="/collection">
              <img src={music} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src={video} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src={radio} alt="" />
            </NavLink>
          </li>
        </ul>
        <div className="flex flex-col items-center gap-8 bg-black rounded-2xl p-1 mt-5">
          <img src={frame} alt="" />
          <img src={music} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SideNav;
