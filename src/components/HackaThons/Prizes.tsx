import React from "react";
import Image from "next/image";
interface props{
    Prizes:{
        position:string;
        gifts:string;
        image:string;
    }[];
}

const Prizes: React.FC<props> = ({  Prizes }) => {
  return (
    <section className=" ">
      <h1>Prizes</h1>
      <div className=" w-fit m-auto flex flex-col md:flex-row flex-wrap  justify-center items-end gap-y-40 gap-10 mt-28 " >
       {Prizes.map((item)=>(
         <div key={item.position} className="relative w-72 h-60 bg-red-600 pt-28 px-5 text-center rounded-2xl"> 
         <Image
           src={item.image}
           alt={item.gifts}
           width={500}
           height={500}
           className="absolute object-cover w-full h-52 -top-28 left-2/4 -translate-x-2/4"
         />
         <h1 className="text-white dark:text-white font-bold">{item.position}</h1>
         <p className="text-white dark:text-neutral-200 text-center">
           {item.gifts}
         </p>
       </div>
       ))}
      </div>
    </section>
  );
};

export default Prizes;
