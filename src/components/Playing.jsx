import play from "../assets/play.png";
import next from "../assets/next.png";
import photo from "../assets/photo.png";
import player from "../assets/player.png";

const Playing = () => {
  return (
    <div className="bg-black w-full opacity-[90%] fixed left-0 bottom-0  p-3 m-0 flex justify-between text-white">
      <div className="flex gap-3 items-center opacity-[100%]">
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
    </div>
  );
};

export default Playing;
