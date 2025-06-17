"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

//react icons
import { IoCheckmarkDoneOutline } from "react-icons/io5";

// JSON file
import Data from "@/Data/Tracks.json";
import Background2 from "@/components/ui/Background2";

export default function Page() {
  const params = useParams();

  // Find the track category
  const Track_Category = Data.Tracks.find((b) => b.title === params.category);

  // Handle not found category
  if (!Track_Category) return notFound();

  // Filter lessons
  const filteredLessons =
    Data.TrackLessons?.filter(
      (lesson) => lesson.category === params.category
    ) || [];

  //State watch it or not
  const [watchedSessions, setWatchedSessions] = useState<string[]>([]);
  //make array for state
  useEffect(() => {
    const storedSessions = JSON.parse(
      localStorage.getItem("watchedSessions") || "[]"
    );
    setWatchedSessions(storedSessions);
  }, []);

  const toggleWatched = (sessionId: string) => {
    let updatedSessions = watchedSessions.includes(sessionId)
      ? watchedSessions.filter((id) => id !== sessionId)
      : [...watchedSessions, sessionId];

    setWatchedSessions(updatedSessions);
    localStorage.setItem("watchedSessions", JSON.stringify(updatedSessions));
  };

  return (
    <section className="min-h-screen w-full ">
      {/* Track details */}
      {Track_Category.description ? (
        // if there is a description and all stuff
        <section>
          <Background2
            color1="from-red-500"
            color2="via-red-500"
            color3="to-orange-500"
            first="Help"
            second="Empower the"
            third="Next Generation"
            fourth="of Innovators."
          />

          <div className="px-5 lg:px-20 py-20">
            <div className="h-fit w-full flex flex-col gap-10">
              <h1 className="text-center md:text-start">
                {Track_Category.title}
              </h1>
              <div
                className="pl-6"
                dangerouslySetInnerHTML={{ __html: Track_Category.description }}
              />
            </div>
            <div className="my-10 flex flex-wrap justify-center gap-4 px-5">
              {filteredLessons.length > 0 ? (
                filteredLessons.map((lesson) => (
                  <div
                    className=" relative overflow-hidden w-full h-32  lg:w-60 lg:h-60  rounded-xl lg:opacity-55 hover:opacity-100 hover:scale-105 duration-200"
                    key={lesson.id}
                  >
                    {/* toggle Watched */}
                    <span
                      onClick={() => toggleWatched(lesson.id.toString())}
                      className={`absolute top-0 right-0 rounded-bl-xl text-white bg-red-500 cursor-pointer opacity-55  hover:opacity-100 flex justify-center items-center z-10
                       ${
                         watchedSessions.includes(lesson.id)
                           ? "w-10 h-10"
                           : "w-0 h-0"
                       }
                       `}
                    >
                      <IoCheckmarkDoneOutline size={40} />
                    </span>

                    {/* link and details */}
                    <Link
                      href={`/tracks/${params.category}/${lesson.id}`}
                      className="absolute top-0 left-0  w-full h-full p-4  bg-slate-300 dark:bg-neutral-800 "
                    >
                      <h1 className="text-xl cursor-pointer"> {lesson.h1} </h1>
                      <p className="text-base cursor-pointer"> {lesson.p} </p>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="flex flex-col md:flex-row  justify-evenly items-center w-full">
                  <h1 className="text-center md:text-start">
                    No Lessons found
                  </h1>
                  <Image
                    className=" w-52"
                    alt="Image"
                    src="/images/no-data.png"
                    width={500}
                    height={500}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        // if there is no description
        <section>
          <Background2
            color1="from-red-500"
            color2="via-red-500"
            color3="to-yellow-600"
            first="We are"
            second="Still work"
            third="on this"
            fourth=" category."
          />
          <div className=" w-full flex px-5 flex-col md:flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center lg:items-start">
              <h1 className="7xl text-center lg:text-start  ">
                We Still work on this category
              </h1>
              <p className="text-center lg:text-start">
                Stay tuned for more updates
              </p>
              <Link
                className="w-fit button-not-found select-none dark:shadow-xl dark:shadow-neutral-700 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-red-600"
                href="/"
              >
                Go Back to home
              </Link>
            </div>
            <Image
              className="w-96"
              alt="Image"
              src="/images/hacker.png"
              width={500}
              height={500}
            />
          </div>
        </section>
      )}

      {/* Lessons List */}
    </section>
  );
}
