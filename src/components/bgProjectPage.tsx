import React from "react";

const bgProjectPage = () => {
  return (
    <div className="select-none relative h-[75vh] w-full flex flex-col gap-5 justify-center items-center">
      <div className="projects image brightness-50 w-full h-full absolute top-0 left-0  " />
      <h1 className="z-0 text-4xl md:text-7xl text-white dark:text-white">
        our projects
      </h1>
      <p className="z-0 text-white dark:text-white text-sm px-5 lg:text-xl text-center">
        We are a team of passionate individuals who are dedicated to creating
        innovative and effective solutions
      </p>
    </div>
  );
};

export default bgProjectPage;
