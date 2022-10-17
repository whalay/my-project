import { Fragment } from "react";
import ChartList from "../components/ChartList";

import Lead from "../assets/Lead-image.png";

const TopChartDetail = () => {
  return (
    <Fragment>
      <div className="bg-bgChart bg-cover  bg-no-repeat bg-left h-screen md:pl-24 md:pt-20 text-black">
        <div className="flex items-center gap-5  pb-10">
          <img src={Lead} alt="" className="rounded-3xl"/>
          <div className="">
            <h1 className="text-5xl fornt-bold">Tommorow's tunes</h1>
            <p className="w-96 py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam
              architecto nihil, praesentium doloremque ducimus, doloribus
              accusantium consequatur distinctio nulla.
            </p>
            <p className="">64 Songs - 16 hrs+</p>
            <div className="flex gap-5 mt-8">
              <p className=" bg-zinc-600 p-1 rounded-xl">Play all</p>
              <p className=" bg-zinc-600 p-1 rounded-xl">Add to collection</p>
            </div>
          </div>
          
        </div>
        <ChartList />
      </div>
    </Fragment>
  );
};

export default TopChartDetail;
