import { useParams } from "react-router-dom";
import { Fragment } from "react";
import ChartList from "../components/ChartList";
import { chart } from "../Data/data";




const TopChartDetail = () => {

  const params = useParams();

  const detail = chart.find((detail) => detail.id === params.detailId);

  console.log(detail.id);

  if (!detail) {
    return <p>no chart found</p>;
  }

  return (
    <Fragment>
      <div className="bg-bgChart bg-cover px-5 pt-20 bg-no-repeat bg-left h-full md:pl-24 md:pt-20 text-black before:absolute before:left-0 before:top-0  before:bg-[#1E1E1E] before:w-full before:h-[500px] before:opacity-90 before:z-10 z-10  ">
        <div className="flex flex-col md:flex-row  gap-5  md:pb-10 z-50">
          <img src={detail.image} alt="" className="rounded-3xl z-50"/>
          <div className="md:w-[40%] z-50">
            <h1 className="text-3xl md:text-5xl font-semi-bold text-white">{detail.title}</h1>
            <p className="py-2 text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam
              architecto nihil, praesentium doloremque ducimus.
            </p>
            <p className="text-white text-sm">64 Songs - 16 hrs+</p>
            <div className="flex gap-5 py-2 md:mt-8 text-white text-sm z-50">
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
