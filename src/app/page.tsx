


//cloud flare
export const runtime = "edge";

//component 
import BgHomePage from "@/components/bgHomePage";
import QAHomePage from "@/components/Home-content";
export default function Home() {
  return (
   <div className="select-none   text-white">

      <BgHomePage/>
      <QAHomePage/>

   </div>
  );
}
