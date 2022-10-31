import { useState, useRef } from "react";
import { IoIosShuffle } from "react-icons/io";
import { GiPreviousButton, GiNextButton, GiSpeaker } from "react-icons/gi";
import { FaPlay, FaPause } from "react-icons/fa";
import { TbRepeatOnce } from "react-icons/tb";

import play from "../assets/play.png";
import next from "../assets/next.png";
import photo from "../assets/photo.png";
import player from "../assets/player.png";

const Playing = () => {
  const volumeRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

  const handleVolume = (e) => {
    const max = 100;
    const clickedPoint = e.target.valueAsNumber;

    audioRef.current.volume = clickedPoint / max;
  };

  return (
    <div className="w-full backdrop-blur-sm bg-[#1E1E1E]/60 absolute right-0 left-0 bottom-0  md:pl-24  p-3 m-0 flex items-center justify-between text-white z-50">
      <div className="flex gap-3 items-center opacity-[100%]">
        <img src={player} alt="" className="w-20 h-20 rounded-3xl" />
        <div className="flex flex-col ">
          <h1>Seasons in</h1>
          <p>James</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <IoIosShuffle className="hidden md:inline"/>
        <GiPreviousButton className="w-[30px] h-[30px] md:w-auto md:h-auto" />
        <div className="h-[40px] w-[40px] md:h-[25px] md:w-[25px] rounded-full bg-[#FACD66] grid place-items-center">
          {!isPlaying && <FaPlay onClick={() => setIsPlaying(true)} />}
          {isPlaying && <FaPause onClick={() => setIsPlaying(false)} />}
        </div>
        <GiNextButton className="w-[30px] h-[30px] md:w-auto md:h-auto"/>

        <TbRepeatOnce className="hidden md:inline"/>
      </div>
      <div className="hidden md:flex items-center h-fit w-[15%]">
        <label htmlFor="volume">
          <GiSpeaker className="text-white mr-[2.5px]" />
        </label>
        <input
          ref={volumeRef}
          onChange={(e) => handleVolume(e)}
          className="volume w-[160px] mb-[4px]"
          type="range"
          name="volume"
        />
      </div>
    </div>
  );
};

export default Playing;
