 
//component
import Content from "@/components/Why-Us-content";

//cloud flare
export const runtime = "edge";

export default function page() {
    const SpanTitle = "ml-0 text-7xl block text-white font-bold select-none"
  return (
    <section className="h-fit flex flex-col select-text cursor-default    ">
       
        <div className=" h-[70vh] overflow-hidden  w-full  flex items-center justify-center   
             bg-gradient-to-r from-[#cf2de4] via-[#e42d42] to-[#ce293c]  
             dark:bg-gradient-to-l 
             ">
            <p className="   w-full h-full flex flex-col justify-center items-center "  >
                <span className={`md:ml-[-40rem]  ${SpanTitle}`}>   We're        </span> 
                <span className={`md:ml-[-10rem]  ${SpanTitle}`}>   at our best  </span> 
                <span className={`md:ml-[10rem]   ${SpanTitle}`}>   when we're   </span> 
                <span className={`md:ml-[40rem]   ${SpanTitle}`}>   making       </span> 
            </p>
        </div>


        <Content/>  
          
      
    </section>
  )
}
