import React from "react";
import DonationContent from "@/components/Donation/Content"; 
import BackGround from "@/components/Donation/HeroSection";
 
import InfiniteBackground from "@/components/ui/InfiniteBackground";

export default function page() {
  return (
    <section>
      <InfiniteBackground/>
       <BackGround/>
     <DonationContent/>
    </section>
  );
}
