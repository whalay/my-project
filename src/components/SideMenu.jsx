import home from "../assets/sidebar/Home.png";
import frame from "../assets/sidebar/frame.png";
import radio from "../assets/sidebar/radio.png";
import music from "../assets/sidebar/music.png";
import video from "../assets/sidebar/video.png";
import logout from "../assets/sidebar/Logout.png";

const Menu = [
  {
    image: home,
    title: "Home",
  },
  {
    image: music,
    title: "My Collection",
  },
  {
    image: radio,
    title: "Radio",
  },
  {
    image: video,
    title: "Music Video",
  },
  {
    image: frame,
    title: "Profile",
  },
  {
    image: logout,
    title: "Logout",
  },
];

const SideMenu = (props) => {
  return (
    <div className="h-screen bg-zinc-800 block md:hidden relative ">
      <div className="flex flex-col justify-start gap-5 p-10">
        {Menu.map((menu) => (
          <div className="flex justify-start gap-10 text-zinc-500">
            <span>
              <img src={menu.image} alt="" />
            </span>

            <span>{menu.title}</span>
          </div>
        ))}
      </div>
      <span className="absolute top-2 right-2 p-10"><button onClick={props.navHandler}>close</button></span>
    </div>
  );
};
export default SideMenu;
