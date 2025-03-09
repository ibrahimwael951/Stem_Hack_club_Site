import Image from "next/image";

const bgHomePage = () => {
  return (
    <div className="relative h-[75vh] flex justify-center items-center flex-col select-none">
      <Image
        className="object-cover brightness-50 w-full h-full absolute top-0 left-0 "
        src="/images/Home_page.jpg"
        alt="Image"
        width={3000}
        height={3000}
      />
      <h1 className=" text-white text-center dark:text-white  text-7xl lg:m-4 z-10 ">
        Stem Hack Club Egypt
      </h1>
    </div>
  );
};

export default bgHomePage;
