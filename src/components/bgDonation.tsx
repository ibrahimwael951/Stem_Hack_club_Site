const bgDonation = () => {
    const SpanTitle = "ml-0 text-7xl block text-white font-bold select-none";
    return (
      <div
      className=" h-[75vh] overflow-hidden  w-full  flex items-center justify-center bg-gradient-to-r from-[#222A68]   via-[#574AE2] to-[#574AE2] dark:bg-gradient-to-l"
    >
      <p className="   w-full h-full flex flex-col gap-2 justify-center items-center ">
        <span className={`lg:ml-[-40rem] text-center ${SpanTitle}`}>Help  </span>
        <span className={`lg:ml-[-10rem] text-center ${SpanTitle}`}> Empower the   </span>
        <span className={`lg:ml-[10rem]  text-center ${SpanTitle}`}> Next Generation  </span>
        <span className={`lg:ml-[40rem]  text-center ${SpanTitle}`}> of Innovators. </span>
      </p>
    </div>
    );
  };
  
  export default bgDonation;
  