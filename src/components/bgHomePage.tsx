
import Image from "next/image";

//image
import StemImg from "../../public/images/Home_page.jpg"
//ui 
import Button from "@/components/ui/Button";
const bgHomePage = () => {
  return (
<div className="relative h-[75vh] flex justify-center items-center flex-col ">

    {/* bg-image */}
    <div 
      className="Stem-image w-full h-full brightness-50 absolute top-0 left-0 -z-10  "
    />
   
    <h1 className=" text-white   text-4xl lg:text-7xl lg:m-4 ">Stem Hack Club Egypt</h1>
    <p className=" text-white  lg:text-2xl m-4">Welcome to the STEM Hack Club website!</p>
    <Button/>
</div>
  )
}

export default bgHomePage
