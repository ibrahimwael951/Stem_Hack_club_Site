import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import MemberPic from "@/Data/Images.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const HomeMemberPic = () => {
  return (
    <div className=" py-20 w-full flex flex-col lg:flex-row  gap-5 justify-between  items-center select-none ">
      {/* left side */}
      <div className="w-full lg:w-2/5  ">
        <h1 className="mb-5">some pictures of us </h1>
        <p className="text-lg text-gray-700 pl-5">
          Our community is full of creativity and mutual support. We’re always
          there for each other, sharing knowledge and experiences, and everyone
          adds great value to one another. The atmosphere here is warm,
          positive, and welcoming, something you don’t easily find anywhere
          else. On top of that, the community is constantly evolving, keeping up
          with the latest advancements in technology, which makes our
          collaboration even more productive and efficient. We’re all on a
          continuous journey of growth and development
        </p>
      </div>

      {/* right side */}
      <Carousel className="w-full lg:w-2/4 max-w-96  md:max-w-2xl ">
        <CarouselContent className="-ml-1">
          {MemberPic.members.map((Pictures, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3  cursor-grab active:cursor-grabbing "
            >
              <div className=" p-1">
                <Card className="border-white overflow-hidden">
                  <CardContent className=" flex  items-center justify-center  p-0 ">
                    <Image
                      src={`${Pictures.src}`}
                      alt={`${Pictures.alt}`}
                      width={1000}
                      height={1000}
                      quality={100}
                      className="object-cover  h-full w-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-black text-black dark:text-white dark:border-white scale-0 lg:scale-100" />
        <CarouselNext className="border-black text-black dark:text-white dark:border-white scale-0 lg:scale-100" />
          <p className="w-full text-center text-base animate-bounce pt-4 text-white dark:text-white duration-1000">Swipe to see more pictures</p>
      </Carousel>
    </div>
  );
};

export default HomeMemberPic;
