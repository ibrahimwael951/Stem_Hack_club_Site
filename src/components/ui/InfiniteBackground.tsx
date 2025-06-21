"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";

const imageUrls = [
  "/KEP_1777.JPG",
  "/Oragnizers T-T.png",
  "/KEP_1812.JPG",
  "/Opening Ceremony 1.png",
  "/KEP_1808.JPG",
  "/KEP_1817.JPG",
  "/KEP_1834.JPG",
  "/Pygame Workshop - Final.jpg",
  "/KEP_1864.JPG",
  "/KEP_1914.JPG",
  "/KEP_1922.JPG",
  "/Winning Team.png",
  "/Super Lilith.png",
  "/Organizer IDs.png",
];

const InfiniteBackground = () => {
  return (
    <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          loop={true}
          slidesPerView="auto"
          spaceBetween={0}
          direction="horizontal"
          className="h-full"
        >
          {[...imageUrls, ...imageUrls].map((item, i) => (
            <SwiperSlide
              key={i}
              className="!w-[400px] h-screen"
            >
              <Image
                alt={`Gallery image ${i % imageUrls.length}`}
                src={item}
                fill
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute inset-0 bg-black/60 z-10" />
    </div>
  );
};

export default InfiniteBackground;