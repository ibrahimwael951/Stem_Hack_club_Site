
//components
import Card from "@/components/Projects-content";
import BgProjectPage from "@/components/bgProjectPage";

//cloud flare
export const runtime = "edge";

export default function page() {
  return (
    <section className="h-fit bg-white dark:bg-black ">
      <BgProjectPage/>
      <Card />
    </section>
  );
}
