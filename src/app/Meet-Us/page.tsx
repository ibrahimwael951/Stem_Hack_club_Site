
import MeetUsContent from "@/components/meetUs-content";
import Background2 from "@/components/ui/Background2";

export default function page() {

  return (
    <section className="w-full">
      <Background2
        color1="amber-400"
        color2="[#e42d42]"
        color3="[#ce293c]"
        first="By the"
        second="students,"
        third="for the"
        fourth="students."
      />
     <MeetUsContent/>
    </section>
  );
}
