"use client";
import React from "react";
import Impact from "@/components/HackaThons/Impact";
import Content from "@/components/HackaThons/Content";
import Participant from "@/components/HackaThons/Participant";
import Timeline from "@/components/HackaThons/Timeline";
import Background from "@/components/ui/Background";
import Highlights from "@/components/HackaThons/Highlights";
import { useParams } from "next/navigation";
import Hackathons from "@/Data/HackaThons";
import notfound from "@/app/not-found";
import Prizes from "@/components/HackaThons/Prizes";
import Sponsors from "@/components/HackaThons/Sponsors";
import Projects from "@/components/HackaThons/Projects";
export default function page() {
  const params = useParams();
  const book = Hackathons.find((b) => b.name.toString() === params.name);

  if (!book) return notfound();
  return ( 
    <section>
      <Background
        desc={book.Hero.desc}
        title={book.Hero.title}
        src={book.Hero.src}
      />

      <div className="px-5 lg:px-10 2xl:px-20 my-16">
        <Impact />
        <Content
          title={book.Content.title}
          Link={book.Content.Link}
          desc_1={book.Content.Desc_1}
          desc_2={book.Content.Desc_2}
          desc_3={book.Content.Desc_3}
          desc_4={book.Content.Desc_4}
          image={book.Content.Image}
        />
        <Participant Items={book.Participant}/>
        <Timeline card={book.timeline}/>
        <Highlights  Highlights={book.Highlights}/> 
        <Prizes Prizes={book.Prizes} />
        <Projects podium={book.podium} projectLinks={book.projectsLink}/>
        <Sponsors sponsors={book.Sponsors}/>
      </div>
    </section>
  );
}
