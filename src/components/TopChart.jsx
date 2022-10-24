import { Link } from "react-router-dom";

import { chart } from "../Data/data";

const TopChart = (props) => {
  return (
    <div className="py-5 md:p-0 md:flex-1 px-5">
      <h1 className="text-2xl pb-1">Top Charts</h1>
      <div className="flex md:flex-col gap-6  w-full overflow-x-auto mt-5 bar .bar">
        {chart.map((chat) => (
          <div
            className="bg-black   md:w-full min-w-[300px] flex justify-between gap-24 rounded-m-auto p-5 "
            key={chat.id}
          >
            <Link to={`/chart/${chat.id}`}>
              <div className="md:flex justify-between gap-5 items-center">
                <img src={chat.image} alt="" className="w-12 h-12" />
                <div>
                  <h4 className="text-sm">{chat.title}</h4>
                  <p className="pb-5 md:p-0 text-[10px]">{chat.artist}</p>
                  <p className="text-[10px]">{chat.duration}</p>
                </div>
              </div>
            </Link>
            <span>
              <img
                src={chat.logo}
                alt=""
                className="border p-2 rounded-full "
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopChart;
