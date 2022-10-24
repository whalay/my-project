import { collection } from "../Data/data";



const Collections = () => {
  return (
    <div className="container max-w-[450px] md:max-w-full h-screen bg-[#1E1E1E] text-white px-1 md:pt-20 md:pl-24 z-50">
      <div className="text-[#EFEEE0] text-center flex justify-self-start gap-3 mb-5">
        <p className="border border-[#EFEEE0] p-1 px-3 rounded-full hover:bg-[#FACD66] hover:text-black">
          My collections
        </p>
        <p className="border border-[#EFEEE0] p-1 px-3 rounded-full hover:bg-[#FACD66] hover:text-black">
          Likes
        </p>
      </div>
      <div className="flex justify-start gap-4 ">
        {collection.map((collection) => (
          <span className="relative">
            <img src={collection.image} alt="" />
            <span className="absolute bottom-3 left-4">
              <h3 className="text-xl">{collection.title}</h3>
              <p className="text-sm">{collection.artist}</p>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Collections;
