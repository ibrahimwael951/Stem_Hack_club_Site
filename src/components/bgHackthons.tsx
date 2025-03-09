import Image from "next/image";

const bgHackthons = () => {
  return (
    <div className="select-none relative h-[75vh] flex justify-center items-center flex-col ">
      <Image
        className="object-cover brightness-50 w-full h-full absolute top-0 left-0 "
        src="/images/Hackthons2.png"
        alt="Image"
        width={3000}
        height={3000}
      />

      <h1 className="z-10 text-white text-center dark:text-white  text-7xl lg:m-4 ">
        Hack Club STEM Egypt Hackathon
      </h1>
    </div>
  );
};

export default bgHackthons;
