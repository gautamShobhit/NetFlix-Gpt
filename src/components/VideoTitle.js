const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video md:pt-72 pt-[20%] md:pl-24 pl-8 absolute text-white bg-gradient-to-r from-black  ">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent "></div>

      <div className="absolute">
        <h1 className="md:text-4xl text-base font-bold md:mb-4 mb-2 w-1/3">
          {title}
        </h1>
        <p className="hidden md:block md:w-1/3 w-2/4 mb-4 md:text-base text-xs ">
          {overview}
        </p>
        <div>
          <button className="md:mr-4 mr-2 md:w-20 w-10 p-2 font-semibold md:text-lg text-xs bg-white text-black  rounded-lg transition-all ease-in-out delay-75 duration-200 hover:scale-95 hover:bg-opacity-80">
            Play
          </button>
          <button className="md:w-40 w-20 p-2 font-semibold md:text-lg text-xs bg-white text-white bg-opacity-30 rounded-lg transition-all ease-in-out delay-75 duration-200 hover:scale-95">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default VideoTitle;
