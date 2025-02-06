 
import Image from "next/image"
import Guy from "../../../public/images/projects/alarm.png"
export default function page() {
  return (
    <div className='h-screen flex justify-center items-center'>

    <div className="hover:scale-105 group-hover:scale-50 p-5 w-80 flex flex-col justify-center bg-yellow-400 rounded-lg shadow-xl relative select-none  ">
      <Image className=" max-w-72 w-full rounded-lg  " src={Guy} alt="Image"/>
        <h2 className=" ">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className=" justify-end">
          <button className="">Buy Now</button>
        </div>
      </div>




    </div>
  )
}
