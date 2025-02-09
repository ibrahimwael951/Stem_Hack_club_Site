import Image from "next/image";
//data
import BoardData from "../Data/ourBoard.json";

const meetUsContent = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center px-20">
        <h1>Meet Us</h1>
        <div className="flex flex-wrap gap-5 justify-center items-center ">
            {BoardData.map((member,index)=>(
                <div key={index} className="relative overflow-hidden    h-fit w-fit flex flex-col justify-end items-center rounded-xl border border-white">
                    <Image 
                        className=" h-72 w-56 -z-0 select-none bg-white  " 
                        src={member.image}
                        alt={member.name}
                        width={500}
                        height={500}
                    />
                    <div className="absolute bottom-0 left-0 w-full  flex flex-col justify-center items-center">
                        <h2 className=" text-sm ">{member.name}</h2>
                        <p className="  text-sm flex justify-center items-center ">
                            {member.description}
                        </p>
                    </div>

                    
                </div>
            )
            
            )}
 
        </div>
      
    </div>
  )
}

export default meetUsContent
