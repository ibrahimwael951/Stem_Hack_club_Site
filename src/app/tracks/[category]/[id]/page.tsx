"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Link from "next/link";

// animation for scroll
import Aos from "aos";
import "aos/dist/aos.css";

//json file
import Lesson from "@/Data/Tracks.json";

export default function page() {
  const params = useParams();
  const id = params.id as string;

  const book = Lesson.TrackLessons.find((b) => b.id.toString() === params.id);

  if (!book) return notFound();

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

  // animation
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className=" px-5 lg:px-20 py-32  flex flex-col gap-10">
      <div className="flex flex-col gap-5 mb-20">
        <h1 className="text-3xl">
          <Link href={`/tracks/${book.category}`}>{book.category} </Link>/{" "}
          {book.h1}
        </h1>

        <p>{book.p}</p>
        <div className="flex justify-center items-center gap-10">
          <a
            className="p-3 border border-red-600 text-neutral-900 dark:text-white hover:text-white hover:bg-red-600 rounded-xl duration-200 "
            target="_blank"
            href={book.a}
          >
            Files Link
          </a>
          {book.Pdf ? (
            <a
              className="p-3 border border-red-600 text-neutral-900 dark:text-white hover:text-white hover:bg-red-600 rounded-xl duration-200 "
              target="_blank"
              href={book.Pdf}
            >
              Pdf Link
            </a>
          ) : (
            <p> sry there is no pdf</p>
          )}

          <button
            className={`p-3 border border-red-600   rounded-xl duration-200
              ${watchedSessions.includes(book.id) ? "bg-red-600 " : " text-neutral-900 dark:text-white "}
              `}
            onClick={() => toggleWatched(book.id.toString())}
          >
            Finished?
          </button>
        </div>
      </div>
      {/* ------- */}
      <div className="flex flex-col justify-center items-center gap-32 ">
        {book.video ? (
          <div>
             {book.video2 && (<h1 className="w-full text-center mb-5 ">Part One</h1>)}

            <iframe
              className="w-full aspect-video select-none border-2 border-red-600 rounded-xl"
              src={book.video}
              allowFullScreen
              width="640"
              height="480"
              allow="autoplay"
            ></iframe>
          </div>
        ) : (
          <p>sry there is no Session video</p>
        )}
        {book.video2 && (
          <div>
            <h1 className="w-full text-center mb-5 ">Part Two</h1>
            <iframe
              className="w-full aspect-video select-none border-2 border-red-600 rounded-xl"
              src={book.video2}
              allowFullScreen
              width="640"
              height="480"
              allow="autoplay"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
}
