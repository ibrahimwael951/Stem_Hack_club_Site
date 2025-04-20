import React from "react";

const bgTHC = () => {
  const SpanTitle = "ml-0 text-7xl block text-white font-bold select-none";
  return (
    <div className=" h-[75vh] overflow-hidden  w-full  flex items-center justify-center  from-cyan-500 via-[#e42d42] to-[#ce293c] dark:bg-gradient-to-r bg-gradient-to-l">
      <p className="   w-full h-full flex flex-col justify-center items-center ">
        <span className={`lg:ml-[-28rem]  ${SpanTitle}`}> Teen </span>
        <span className={`lg:ml-[-10rem]  ${SpanTitle}`}> Hack </span>
        <span className={`lg:ml-[16rem]   ${SpanTitle}`}> Challenge </span>
        {/* <span className={`lg:ml-[40rem]   ${SpanTitle}`}> making </span> */}
      </p>
    </div>
  );
};

export default bgTHC;
