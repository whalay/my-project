import rec from "../assets/rec1.png";
import more from "../assets/more.png";

const ChartList = () => {
  return (
    <div className="flex flex-col md:m-5 text-white z-50 ">
      <div className="flex rounded-xl p-1 bg-gray-500 justify-between items-center my-2 md:px-5 z-50">
        <img src={rec} alt="" className="object-scale-down h-10" />
        <p>Let me love you</p>
        <p>Single</p>
        <p>4:17</p>
        <img src={more} alt="" />
      </div>
      <div className="flex rounded-xl p-1 bg-gray-500 justify-between items-center my-2 md:px-5 text-white z-50">
        <img src={rec} alt="" className="object-scale-down h-10" />
        <p>Let me love you</p>
        <p>Single</p>
        <p>4:17</p>
        <img src={more} alt="" />
      </div>
      <div className="flex rounded-xl p-1 bg-gray-500 justify-between items-center md:px-5 text-white z-50">
        <img src={rec} alt="" className="object-scale-down h-10" />
        <p>Let me love you</p>
        <p>Single</p>
        <p>4:17</p>
        <img src={more} alt="" />
      </div>
    </div>
  );
};

export default ChartList;
