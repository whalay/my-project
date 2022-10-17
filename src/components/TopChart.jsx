import music1 from "../assets/music1.png";
import stroke from "../assets/stroke.png";

const TopChart = () => {
  return (
    <div className="py-5 md:p-0 md:flex-1 px-5">
      <h1 className="text-2xl pb-1">Top Charts</h1>
      <div className="flex md:flex-col gap-6  w-full overflow-x-auto mt-5 bar .bar">
   
          <div className="bg-black   md:w-full min-w-[300px] flex justify-between gap-24 rounded-m-auto p-5 ">
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
          <div className="bg-black   md:w-full min-w-[300px] flex justify-between gap-24 rounded-m-auto p-5 ">
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
         
          

        {/* <div className="bg-black  flex justify-between gap-24 p-5 rounded-xl">
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
            </div> */}
      </div>
    </div>
  );
};

export default TopChart;
