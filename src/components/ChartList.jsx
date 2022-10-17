import rec from '../assets/rec1.png';

const ChartList = () => {

    return(
      <div className='flex flex-col m-5 '>
          <div className="flex rounded-xl p-1 bg-gray-700 justify-between items-center my-2 px-5">
            <img src={rec} alt="" className='object-scale-down h-10'/>
            <p>Let me love you</p>
            <p>Single</p>
            <p>4:17</p>
        </div>
        <div className="flex rounded-xl p-1 bg-gray-700 justify-between items-center px-5">
        <img src={rec} alt="" className='object-scale-down h-10'/>
            <p>Let me love you</p>
            <p>Single</p>
            <p>4:17</p>
        </div>
      </div>
    );
};

export default ChartList;