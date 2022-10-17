import SideNav from "./SideNav";
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
import Popular from "./Popular";
import TopChart from "./TopChart";
import Latest from "./Latest";

const Header = () => {
  return (
    <div className="container max-w-[450px] md:max-w-full bg-zinc-800 text-white px-1  md:pl-24">
      <div className="md:flex justify-between  gap-5 ">
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
        {/* <div className="py-5 md:p-0 md:flex-1 px-5">
          <h1 className="text-2xl pb-5 ">Top Charts</h1>
          <div className="flex flex-col gap-3 m-auto">
            <div className="bg-black  flex justify-between gap-24 rounded-m-auto p-5 ">
              <div className="md:flex justify-between gap-5 items-center">
                <img src={music1} alt="" className="w-12 h-12" />
                <div>
                  <h4 className="text-sm">Golden age of 80's</h4>
                  <p className="pb-5 md:p-0 text-[10px]">Swean Sadder</p>
                  <p className="text-[10px]">2:22:22</p>
                </div>
              </div>
              <span>
                <img src={stroke} alt="" className="border p-2 rounded-full " />
              </span>
            </div>
            <div className="bg-black  flex justify-between gap-24 p-5 rounded-xl">
              <div className="md:flex justify-between gap-5 items-center">
                <img src={music1} alt="" className="w-12 h-12" />
                <div>
                  <h4 className="text-sm">Golden age of 80's</h4>
                  <p className="pb-5 md:p-0 text-[10px]">Swean Sadder</p>
                  <p className="text-[10px]">2:22:22</p>
                </div>
              </div>
              <span>
                <img src={stroke} alt="" className="border p-2 rounded-full " />
              </span>
            </div>
            <div className="bg-black  flex justify-between gap-24 p-5 rounded-xl">
              <div className="md:flex justify-between gap-5 items-center">
                <img src={music1} alt="" className="w-12 h-12" />
                <div>
                  <h4 className="text-sm">Golden age of 80's</h4>
                  <p className="pb-5 md:p-0 text-[10px]">Swean Sadder</p>
                  <p className="text-[10px]">2:22:22</p>
                </div>
              </div>
              <span>
                <img src={stroke} alt="" className="border p-2 rounded-full " />
              </span>
            </div>
          </div>
        </div> */}
      </div>
      <Latest />
      <Popular />

      {/* <div className="bg-black p-3 m-0 flex justify-between">
        <div className="flex gap-3 items-center">
          <img src={player} alt="" className="w-20 h-20 rounded-3xl" />
          <div className="flex flex-col ">
            <h1>Seasons in</h1>
            <p>James</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src={play} alt="" />
          <img src={next} alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default Header;
