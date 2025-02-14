const bgHomePage = () => {
  return (
    <div className="relative h-[75vh] flex justify-center items-center flex-col select-none">
      {/* bg-image */}
      <div className="Stem image w-full h-full brightness-50 absolute top-0 left-0 -z-10  " />

      <h1 className=" text-white dark:text-white text-center text-3xl md:text-7xl lg:m-4 ">
        Stem Hack Club Egypt
      </h1>
      <p className=" text-white dark:text-white text-base text-center lg:text-2xl m-4  ">
        Welcome to the STEM Hack Club website!
      </p>
    </div>
  );
};

export default bgHomePage;
