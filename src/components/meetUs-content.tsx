"use client"
import { SetStateAction, useState } from "react";
import Image from "next/image";
 
import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa"; // استيراد أيقونات من react-icons
// data
import BoardData from "../Data/ourBoard.json";
 

const MeetUsContent = () => {
  const [selectedYear, setSelectedYear] = useState("2025");

  const handleYearChange = (year: string ) => {
    setSelectedYear(year);
  };


 
  return (
    <div className="flex flex-col gap-10 justify-center items-center py-20 px-20">
      <h1>Meet Us</h1>

    
      <div className="flex gap-4 mb-4">
        
        {["2025", "2024", "2023", "2022"].map((year) => (
          <button
            key={year}
            onClick={() => handleYearChange(year)}
            className="px-4 py-2 border border-red-500 hover:bg-red-500 hover:scale-110 text-black dark:text-white duration-150   rounded"
        
          >
            {year}
          </button>
        ))}
       
      </div>

      
      <div
        className="flex flex-wrap gap-5 justify-center items-center"
        key={selectedYear}
    
      >
        {BoardData.map(
          (member, index) =>
            (selectedYear === null || String(member.year) === String(selectedYear)) && (
              <div
                key={index}
                className="group  relative overflow-hidden h-fit w-fit flex flex-col justify-end items-center rounded-xl"
                
              >
                <Image
                  className=" group-hover:scale-110 h-auto w-56 -z-0 select-none bg-white"
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                />
                <div className="absolute bottom-0 left-0 w-full flex flex-col justify-center items-center bg-gradient-to-t from-black via-[#000000a1] to-transparent bg-opacity-45">
                  <h2 className="text-white dark:text-white  text-lg text-shadow">{member.name}</h2>
                  <p className="text-white dark:text-white  text-xs flex text-center text-shadow">
                    {member.description}
                  </p>
                </div>

                <div
                    className="group-hover:opacity-100  opacity-0 absolute bottom-0 h-full w-full bg-black bg-opacity-55 z-0   flex gap-4  flex-col justify-center items-center p-4   "
              
                  >
                    {member.github && (
                      <a
                        
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white group-hover:translate-x-0 group-hover:scale-100 scale-0 translate-x-12 duration-300"
                      >
                        <FaGithub size={30} />
                      </a>
                    )}
                    {member.facebook && (
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white group-hover:translate-x-0 group-hover:scale-100 scale-0 -translate-x-12 duration-300"
                      >
                        <FaFacebook  size={30} />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-white group-hover:translate-x-0 group-hover:scale-100 scale-0 translate-x-12 duration-300"
                      >
                        <FaEnvelope  size={30} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white group-hover:translate-x-0 group-hover:scale-100 scale-0 -translate-x-12 duration-300"
                      >
                        <FaLinkedin  size={30} />
                      </a>
                    )}
                  </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default MeetUsContent;
