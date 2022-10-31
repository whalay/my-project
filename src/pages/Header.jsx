import TopChart from "../components/TopChart";
import Latest from "../components/Latest";

import mobilerec from "../assets/mobilerec.png";
import mobilevec from "../assets/mobilevec.png";
import desktopvec from "../assets/desktopvec.png";
import desktoprec from "../assets/desktoprec.png";
import photo from "../assets/photo.png";
import frame from "../assets/like-frame.png";
import mframe from "../assets/Mframe.png";




const Header = () => {
  return (
    <div className="h-screen w-full bg-zinc-800 text-white px-5 pt-20 md:pt-20 md:pl-24 z-50">
      <div className="md:flex justify-between gap-5 md:pr-10">
        <div className="relative md:flex-initial ">
          <img src={mobilerec} alt="" className="md:hidden m-auto" />
          <img src={desktoprec} alt="" className="hidden md:block" />
          <span className="absolute top-1 right-10 md:hidden">
            <img src={mobilevec} alt="" />
          </span>
          <span className="hidden md:block absolute top-1 left-40">
            <img src={desktopvec} alt="" />
          </span>
          <span>
            <img
              src={photo}
              alt=""
              className="md:block absolute top-0 -right-1 hidden"
            />
          </span>
          <span className="absolute top-0 p-10 flex flex-col justify-between gap-16">
            <span>
              <p>Curated Playlist</p>
            </span>
            <span className=" w-70 pt-20 md:pt-0 ">
              <h1 className="text-4xl font-bold py-3">R & B Hits</h1>
              <p className="w-[20em] text-md font-normal">
                All mine. lie again, petty call me everyday out of time. no bad
                day
              </p>
            </span>
            <span>
              <img src={frame} alt="" className="hidden md:block"/>
              <img src={mframe} alt="" className="md:hidden" />
            </span>
          </span>
        </div>
        <TopChart />
      </div>
      <Latest />
    </div>
  );
};

export default Header;
