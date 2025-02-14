const CPbg = () => {
  return (
    <div className="relative overflow-hidden h-[75vh] w-full flex gap-5 flex-col items-center justify-center select-none  ">
      {/* Background */}
      <div className="CP image absolute left-0 top-0 w-full  h-full brightness-50 " />

      <h1 className="z-0 text-2xl md:text-5xl  text-white dark:text-white">
        Competitive Programming (C++){" "}
      </h1>
      <p className="z-0 px-5 md:text-base text-xs text-center text-white dark:text-white">
        Competitive programming is a subdiscipline of computer science where
        programmers solve problems and write code to solv
      </p>
    </div>
  );
};

export default CPbg;
