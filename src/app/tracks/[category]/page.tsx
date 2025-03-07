"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { notFound } from "next/navigation";

//react icons
import { IoCheckmarkDoneOutline } from "react-icons/io5";

// JSON file
import Data from "@/Data/Tracks.json";

export default function Page() {
  const params = useParams();
  const category = params.category as string;

  // Find the track category
  const Track_Category = Data.Tracks.find((b) => b.title === params.category);

  // Handle not found category
  if (!Track_Category) return notFound();

  // Filter lessons
  const filteredLessons =
    Data.TrackLessons?.filter(
      (lesson) => lesson.category === params.category
    ) || []; // Ensure it's an array

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
    <section className="min-h-screen w-full px-5 lg:px-20 py-20">
      {/* Track details */}
      <div className="h-fit w-full flex flex-col gap-10">
        <h1 className="text-center md:text-start">{Track_Category.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: Track_Category.description }} />
      </div>

      {/* Lessons List */}
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
          <p className="text-gray-500">
            No lessons available for this category.
          </p>
        )}
      </div>
    </section>
  );
}
