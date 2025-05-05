import React from "react";

interface Background2 {
  first: string;
  second: string;
  third: string;
  fourth: string;
  color1:string;
  color2:string;
  color3:string;
}
const Background2: React.FC<Background2> = ({
  first,
  second,
  third,
  fourth,
  color1,
  color2,
  color3,
}) => {
  const SpanTitle = "ml-0 text-7xl block text-white font-bold select-none";
  return (
    <div className={`h-[75vh] overflow-hidden  w-full  flex items-center justify-center bg-gradient-to-r from-${color1} via-${color2} to-${color3} dark:bg-gradient-to-l`}>
      <p className="   w-full h-full flex flex-col justify-center items-center ">
        <span className={`lg:ml-[-40rem]  ${SpanTitle}`}> {first} </span>
        <span className={`lg:ml-[-10rem]  ${SpanTitle}`}>{second} </span>
        <span className={`lg:ml-[10rem]   ${SpanTitle}`}> {third} </span>
        <span className={`lg:ml-[40rem]   ${SpanTitle}`}> {fourth} </span>
      </p>
    </div>
  );
};

export default Background2;
