import home from "../assets/Home.png";
import music from "../assets/music-library.png";
import video from "../assets/video-horizontal.png";
import radio from "../assets/radio.png";

const SideNav = () => {
  return (
    <section>
      <div className="absolute left-10 hidden md:block">
        <div className="flex flex-col items-center gap-2 bg-black rounded-2xl p-1">
          <img src={home} alt="" />
          <img src={music} alt="" />
          <img src={video} alt="" />
          <img src={radio} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SideNav;
