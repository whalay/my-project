import { Link } from "react-router-dom";
import home from "../assets/Home.png";
import music from "../assets/music-library.png";
import video from "../assets/video-horizontal.png";
import radio from "../assets/radio.png";

const SideNav = () => {
  return (
    <section>
      <div className="absolute left-5 hidden md:block pt-20 z-50">
        <ul className="flex flex-col justify-start items-center gap-10 bg-black rounded-2xl px-0 py-4 ">
          <li>
           <Link to="/home"><img src={home} alt="" className="object-cover" /> </Link> 
          </li>
          <li>
          <Link to="/collection"><img src={music} alt="" /></Link>  
          </li>
          <li>
           <Link to="/"><img src={video} alt="" /></Link>
          </li>
          <li>
           <Link to="/"> <img src={radio} alt="" /></Link>
          </li>
        </ul>
        <div className="flex flex-col items-center gap-8 bg-black rounded-2xl p-1 mt-5">
          <img src={home} alt="" />
          <img src={music} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SideNav;
