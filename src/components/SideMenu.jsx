import { Link } from "react-router-dom";

import home from "../assets/sidebar/home.svg";
import frame from "../assets/sidebar/frame.png";
import radio from "../assets/sidebar/radio.png";
import music from "../assets/sidebar/music.png";
import video from "../assets/sidebar/video.png";
import logout from "../assets/sidebar/Logout.png";

const Menu = [
  {
    image: home,
    title: "Home",
    url: 'home'
  },
  {
    image: music,
    title: "My Collection",
    url: 'home'
  },
  {
    image: radio,
    title: "Radio",
    url: 'home'
  },
  {
    image: video,
    title: "Music Video",
    url: 'home'
  },
  {
    image: frame,
    title: "Profile",
    url: 'home'
  },
  {
    image: logout,
    title: "Logout",
    url: '/home'
  },
];

const SideMenu = (props) => {
  return (
    <div className="h-screen bg-zinc-800 block md:hidden relative z-90 ">
      <div className="flex flex-col justify-start gap-5 p-10">
        {Menu.map((menu) => (
          <div className="flex justify-start gap-10 text-zinc-500 z-90">
            <span>
              <img src={menu.image} alt="" />
            </span>

            <span>{menu.title}</span>
          </div>
        ))}
      </div>
      <span className="absolute top-2 right-2 p-10 text-white font-semibold"><button onClick={props.navHandler}>close</button></span>
    </div>
  );
};
export default SideMenu;
