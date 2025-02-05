 

export default function page() {
    const SpanTitle = "text-7xl block text-white font-bold select-none"
  return (
    <section className="h-screen flex flex-col   bg-gray-900 dark:bg-gray-950 select-text cursor-default    ">
       
        <div className=" h-2/3   w-full  flex items-center justify-center    bg-gradient-to-r from-[#cf2de4] via-[#e42d42] to-[#ce293c]   ">
            <p className="   w-full h-full flex flex-col justify-center items-center "  >
                <span className={`ml-[-50rem]  ${SpanTitle}`}>We're</span> 
                <span className={`ml-[-20rem]  ${SpanTitle}`}>at our best</span> 
                <span className={`ml-[0rem]    ${SpanTitle}`}>when we're</span> 
                <span className={`ml-[30rem]   ${SpanTitle}`}>making.</span>
            </p>
        </div>
          
      
    </section>
  )
}
