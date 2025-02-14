const BgWhyUsp = () => {
  const SpanTitle = "ml-0 text-7xl block text-white font-bold select-none";
  return (
    <div
      className=" h-[75vh] overflow-hidden  w-full  flex items-center justify-center   
             bg-gradient-to-r from-[#cf2de4] via-[#e42d42] to-[#ce293c]  
             dark:bg-gradient-to-l 
             "
    >
      <p className="   w-full h-full flex flex-col justify-center items-center ">
        <span className={`lg:ml-[-40rem]  ${SpanTitle}`}> We're </span>
        <span className={`lg:ml-[-10rem]  ${SpanTitle}`}> at our best </span>
        <span className={`lg:ml-[10rem]   ${SpanTitle}`}> when we're </span>
        <span className={`lg:ml-[40rem]   ${SpanTitle}`}> making </span>
      </p>
    </div>
  );
};

export default BgWhyUsp;
