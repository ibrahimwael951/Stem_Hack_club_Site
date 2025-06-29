import React from "react";
import DonationContent from "@/components/Donation/Content";
import BackGround from "@/components/Donation/HeroSection";
import InfiniteBackground from "@/components/ui/InfiniteBackground";
import Impact from "@/components/Donation/Impact";
import Supporters from "@/components/Donation/Supporters";
import CommunityVoices from "@/components/Donation/CommunityVoices";

export default function page() {
  return (
    <section className="px-5 lg:px-20 ">
      <InfiniteBackground />
      <BackGround />
      <DonationContent />  
      <Impact />
      <Supporters />
      <CommunityVoices/>
    </section>  
  );
}
