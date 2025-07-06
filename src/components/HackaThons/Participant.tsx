"use client";
import React from "react";
import CardFuture from "./ui/CardFuture";
import { IconType } from "react-icons/lib";
      
interface props {
  Items: {
    description: string;
    title: string;
    icon:IconType;
  }[];
  
}
const Participant: React.FC<props> = ({ Items }) => {
  return (
    <section className="my-20">
      <div>
        <h1>Participant Perks</h1>
        <p className="ml-4">
          From workshops to meals, swag to mentorship, every part of
          counterspell was entirely free for students — thanks to our dedicated
          team and amazing partners.
        </p>
      </div>
      <div className=" flex flex-col sm:flex-row justify-center items-center gap-10 mt-10">
        {Items.map((Card, i) => (
          <CardFuture
            key={i}
            description={Card.description}
            icon={Card.icon}
            title={Card.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Participant;
