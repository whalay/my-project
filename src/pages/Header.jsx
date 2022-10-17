import SideNav from "../components/SideNav";
import mobilerec from "../assets/mobilerec.png";
import mobilevec from "../assets/mobilevec.png";
import desktopvec from "../assets/desktopvec.png";
import desktoprec from "../assets/desktoprec.png";
import music1 from "../assets/music1.png";
import stroke from "../assets/stroke.png";
import player from "../assets/player.png";
import play from "../assets/play.png";
import next from "../assets/next.png";
import photo from "../assets/photo.png";
import frame from "../assets/like-frame.png";

import new1 from "../assets/new1.png";

import new3 from "../assets/new3.png";
import Popular from "../components/Popular";
import TopChart from "../components/TopChart";
import Latest from "../components/Latest";

const Header = () => {
  return (
    <div className="container max-w-[450px] md:max-w-full bg-zinc-800 text-white px-1 md:pt-20 md:pl-24">
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
            <span className=" w-70 ">
              <h1 className="text-4xl font-bold py-3">R & B Hits</h1>
              <p className="w-[20em] text-md font-normal">
                All mine. lie again, petty call me everyday out of time. no bad
                day
              </p>
            </span>
            <span>
              <img src={frame} alt="" />
            </span>
          </span>
        </div>
        <TopChart />
      </div>
      <Latest />
      <Popular />
    </div>
  );
};

export default Header;
